#!/usr/bin/env node
// Post-build validation. Fails the build on anything that would ship broken:
// dead internal links, missing assets, duplicate ids, heading-order breaks,
// images without alt text, missing or duplicated metadata, invalid JSON-LD,
// and brand-spelling slips.

import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { site } from './data/site.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = site.basePath.replace(/\/$/, '');

const errors = [];
const warnings = [];
const fail = (page, msg) => errors.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, 'i'));
  return m ? m[1] : null;
};
const tagsOf = (html, tag) => html.match(new RegExp(`<${tag}\\b[^>]*>`, 'gi')) || [];

async function htmlFiles() {
  const all = await readdir(ROOT);
  return all.filter((f) => f.endsWith('.html')).sort();
}

function checkMeta(file, html, seen) {
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!title) fail(file, 'missing <title>');
  else {
    if (title.length > 70) warn(file, `title is ${title.length} chars (over 70): "${title}"`);
    if (seen.titles.has(title)) fail(file, `duplicate <title> with ${seen.titles.get(title)}`);
    seen.titles.set(title, file);
  }

  const desc = attr(tagsOf(html, 'meta').find((t) => attr(t, 'name') === 'description') || '', 'content');
  if (!desc) fail(file, 'missing meta description');
  else {
    if (desc.length < 70 || desc.length > 185) {
      warn(file, `meta description is ${desc.length} chars (aim 70–185)`);
    }
    if (seen.descs.has(desc)) fail(file, `duplicate meta description with ${seen.descs.get(desc)}`);
    seen.descs.set(desc, file);
  }

  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!canonical) fail(file, 'missing canonical');

  const robots = html.includes('name="robots" content="noindex');
  if (site.indexable && robots) fail(file, 'indexable build still emits noindex');
  if (!site.indexable && !robots) fail(file, 'preview build is missing noindex');

  for (const prop of ['og:title', 'og:description', 'og:image', 'og:url']) {
    if (!html.includes(`property="${prop}"`)) fail(file, `missing ${prop}`);
  }
  if (!html.includes('name="twitter:card"')) fail(file, 'missing twitter:card');

  // JSON-LD must parse.
  const blocks = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
  if (!blocks.length) fail(file, 'no JSON-LD');
  blocks.forEach((b, i) => {
    const json = b.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');
    try {
      const parsed = JSON.parse(json);
      if (!parsed['@context']) fail(file, `JSON-LD block ${i} has no @context`);
    } catch (e) {
      fail(file, `JSON-LD block ${i} is not valid JSON (${e.message})`);
    }
  });
}

function checkHeadings(file, html) {
  const hs = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({
    level: Number(m[1]),
    text: m[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(),
  }));
  const h1s = hs.filter((h) => h.level === 1);
  if (h1s.length === 0) fail(file, 'no <h1>');
  if (h1s.length > 1) fail(file, `${h1s.length} <h1> elements`);
  let prev = 0;
  for (const h of hs) {
    if (prev && h.level > prev + 1) {
      fail(file, `heading jumps h${prev} → h${h.level} at "${h.text.slice(0, 48)}"`);
    }
    prev = h.level;
  }
  for (const h of hs) {
    if (!h.text) fail(file, `empty h${h.level}`);
  }
}

function checkImages(file, html) {
  for (const tag of tagsOf(html, 'img')) {
    const alt = attr(tag, 'alt');
    if (alt === null) fail(file, `<img> with no alt attribute: ${tag.slice(0, 90)}`);
    if (alt === '' && !/aria-hidden="true"/.test(tag)) {
      warn(file, `decorative <img alt=""> without aria-hidden: ${tag.slice(0, 90)}`);
    }
    if (!attr(tag, 'width') || !attr(tag, 'height')) {
      fail(file, `<img> without width/height (layout shift): ${tag.slice(0, 90)}`);
    }
    if (!attr(tag, 'loading')) warn(file, '<img> without loading attribute');
  }
}

function checkIds(file, html) {
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) fail(file, `duplicate id(s): ${[...new Set(dupes)].join(', ')}`);
  return new Set(ids);
}

function checkA11y(file, html) {
  if (!html.includes('class="skip"')) fail(file, 'missing skip link');
  if (!/<html lang="[a-z-]+"/i.test(html)) fail(file, 'missing lang on <html>');
  if (!html.includes('<main')) fail(file, 'missing <main>');

  for (const tag of tagsOf(html, 'button')) {
    // every button must have a text child or an accessible name
    if (!attr(tag, 'aria-label') && !attr(tag, 'aria-labelledby')) {
      // checked loosely below by scanning the element's inner text
    }
  }
  const buttons = [...html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)];
  for (const [, attrs, inner] of buttons) {
    const text = inner.replace(/<[^>]*>/g, '').trim();
    if (!text && !/aria-label=/.test(attrs)) fail(file, 'button with no accessible name');
  }
  const links = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)];
  for (const [, attrs, inner] of links) {
    const text = inner.replace(/<[^>]*>/g, '').trim();
    const aria = /aria-label=/.test(attrs);
    if (!text && !aria) fail(file, `link with no accessible name: <a${attrs.slice(0, 70)}>`);
    if (/target="_blank"/.test(attrs) && !/rel="[^"]*noopener/.test(attrs)) {
      fail(file, 'target="_blank" without rel="noopener"');
    }
  }
}

async function checkLinks(file, html, idsByFile, pages) {
  const hrefs = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:|tel:|data:)/.test(href)) continue;

    if (href.startsWith('#')) {
      const id = decodeURIComponent(href.slice(1));
      if (id && !idsByFile.get(file).has(id)) fail(file, `fragment #${id} has no target`);
      continue;
    }
    if (!href.startsWith('/')) {
      fail(file, `relative link "${href}" — every internal URL must be base-prefixed`);
      continue;
    }
    if (!href.startsWith(BASE + '/') && href !== BASE) {
      fail(file, `link "${href}" is missing the base path ${BASE}`);
      continue;
    }
    const [pathPart, frag] = href.slice(BASE.length).split('#');
    const target = pathPart === '/' || pathPart === '' ? 'index.html' : pathPart.replace(/^\//, '');
    if (!existsSync(join(ROOT, target))) {
      fail(file, `dead link "${href}" → ${target} does not exist`);
      continue;
    }
    if (frag && target.endsWith('.html')) {
      const ids = idsByFile.get(target);
      if (ids && !ids.has(frag)) fail(file, `dead fragment "${href}" — no #${frag} in ${target}`);
    }
  }
}

function checkBrand(file, html) {
  // The body copy spells it OffsetEase; the lockup/eyebrows use OFFSETEASE.
  const body = html.replace(/<script[\s\S]*?<\/script>/g, '');
  const bad = body.match(/\bOffset\s?[Ee]ase\b/g) || [];
  for (const hit of bad) {
    if (hit !== 'OffsetEase') fail(file, `brand spelled "${hit}" (must be OffsetEase or OFFSETEASE)`);
  }
  // Lower case is correct inside an address or a URL, so strip those first.
  const prose = body
    .replace(/(href|src|content)="[^"]*"/g, '')
    .replace(/[\w.+-]+@[\w.-]+/g, '')
    .replace(/\b(?:[\w-]+\.)+(?:com|in|org|net|earth|io)\b[^\s<]*/g, '');
  if (/\boffsetease\b/.test(prose)) {
    warn(file, 'lower-case "offsetease" appears in visible copy');
  }
}

function checkPlaceholders(file, html) {
  const patterns = [/\bLorem ipsum\b/i, /\bTODO\b/, /\bFIXME\b/, /\[\s*(?:to add|placeholder|tbd)\s*\]/i, /XXXX/];
  for (const p of patterns) {
    if (p.test(html)) fail(file, `placeholder text found (${p})`);
  }
}

async function checkAssets() {
  const must = [
    'assets/css/site.css',
    'assets/js/app.js',
    'assets/brand/favicon.svg',
    'assets/brand/favicon-32.png',
    'assets/brand/favicon-192.png',
    'assets/brand/favicon-512.png',
    'assets/brand/apple-touch-icon.png',
    'assets/brand/social-card.png',
    'assets/brand/offsetease-lockup.svg',
    'assets/fonts/schibsted-latin-400700.woff2',
    'assets/fonts/plexmono-latin-400.woff2',
    'site.webmanifest',
    'robots.txt',
    '.nojekyll',
  ];
  for (const f of must) {
    if (!existsSync(join(ROOT, f))) errors.push(`assets: missing ${f}`);
  }

  // Budget: no single page over 120 KB of HTML, no image over 260 KB.
  for (const f of await htmlFiles()) {
    const { size } = await stat(join(ROOT, f));
    if (size > 120 * 1024) warn(f, `HTML is ${(size / 1024).toFixed(0)} KB (budget 120 KB)`);
  }
  const photos = join(ROOT, 'assets/img/photos');
  if (existsSync(photos)) {
    for (const f of await readdir(photos)) {
      const m = f.match(/\.(avif|webp|jpg|png)$/);
      if (!m) continue;
      // AVIF is the format almost every visitor actually downloads, so it gets
      // the tight budget; WebP is the legacy fallback and is allowed more room.
      const budget = (m[1] === 'avif' ? 260 : 380) * 1024;
      const { size } = await stat(join(photos, f));
      if (size > budget) {
        warn('assets', `${f} is ${(size / 1024).toFixed(0)} KB (budget ${budget / 1024} KB)`);
      }
    }
  }
}

// 0.1 — the enquiry form is the only conversion path on the site. It must never
// ship to production without a key. In preview this is a loud warning; the day
// `indexable` flips to true it becomes a build failure.
function checkFormKey() {
  const key = site.form.accessKey || '';
  if (key.length >= 20) return;
  const msg =
    'Enquiry form access key is missing or too short — the contact form will not submit. ' +
    'Create one at https://web3forms.com and set site.form.accessKey in src/data/site.mjs.';
  if (site.indexable) errors.push(`form: ${msg}`);
  else warnings.push(`form: ${msg}`);
}

// Pages a visitor is entitled to find, whatever else changes.
function checkRequiredPages(files) {
  for (const f of ['privacy.html', 'terms.html', '404.html', 'sources.html']) {
    if (!files.includes(f)) errors.push(`pages: ${f} is missing`);
  }
}

// Every page must link to the privacy policy, or the consent wording is a lie.
function checkLegalLinks(file, html) {
  if (!html.includes(`href="${BASE}/privacy.html"`)) {
    fail(file, 'no link to the privacy policy');
  }
}

async function main() {
  const files = await htmlFiles();
  if (files.length < 20) errors.push(`only ${files.length} pages built`);

  const bodies = new Map();
  const idsByFile = new Map();
  for (const f of files) {
    const html = await readFile(join(ROOT, f), 'utf8');
    bodies.set(f, html);
    idsByFile.set(f, checkIds(f, html));
  }

  const seen = { titles: new Map(), descs: new Map() };
  for (const [f, html] of bodies) {
    checkMeta(f, html, seen);
    checkHeadings(f, html);
    checkImages(f, html);
    checkA11y(f, html);
    checkBrand(f, html);
    checkPlaceholders(f, html);
    checkLegalLinks(f, html);
    await checkLinks(f, html, idsByFile, files);
  }
  await checkAssets();
  checkFormKey();
  checkRequiredPages(files);

  // Every page must be reachable from the home page or the footer.
  const home = bodies.get('index.html') || '';
  for (const f of files) {
    if (f === 'index.html' || f === '404.html') continue;
    const reachable = [...bodies.values()].some((h) => h.includes(`href="${BASE}/${f}"`));
    if (!reachable) errors.push(`orphan: nothing links to ${f}`);
  }

  for (const w of warnings) console.warn(`  warn  ${w}`);
  for (const e of errors) console.error(`  FAIL  ${e}`);
  console.log(
    `\n${files.length} pages checked · ${errors.length} errors · ${warnings.length} warnings`
  );
  if (errors.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
