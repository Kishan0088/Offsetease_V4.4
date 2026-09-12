/* Site validator — run after a build. `node src/check.mjs`
   Checks internal links, asset references, heading order, alt text,
   duplicate ids, metadata completeness and JSON-LD validity. */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pages = readdirSync(ROOT).filter(f => f.endsWith('.html') && !f.startsWith('_'));
let errors = 0, warnings = 0;
const err = (f, m) => { console.log(`  ✗ ${f}: ${m}`); errors++; };
const warn = (f, m) => { console.log(`  ! ${f}: ${m}`); warnings++; };

const titles = new Map(), descs = new Map(), canons = new Map();

for (const f of pages) {
  const html = readFileSync(join(ROOT, f), 'utf8');

  /* --- internal links --- */
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
  for (const h of new Set(hrefs)) {
    if (/^(https?:|mailto:|tel:|#|data:)/.test(h)) continue;
    const [path, hash] = h.split('#');
    if (!path) continue;
    if (!existsSync(join(ROOT, path))) err(f, `dead link -> ${h}`);
    if (hash && !html.includes(`id="${hash}"`) && path === f) warn(f, `missing anchor #${hash}`);
  }

  /* --- asset references --- */
  for (const m of html.matchAll(/(?:src|content)="((?:assets|site)[^"]+)"/g)) {
    const p = m[1].split('?')[0];
    if (!existsSync(join(ROOT, p))) err(f, `missing asset -> ${p}`);
  }
  for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const part of m[1].split(',')) {
      const p = part.trim().split(/\s+/)[0];
      if (p && !existsSync(join(ROOT, p))) err(f, `missing srcset asset -> ${p}`);
    }
  }

  /* --- metadata --- */
  const unesc = (t) => t.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#8217;/g, '\u2019').replace(/&#160;/g, ' ');
  const title = unesc((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const desc = unesc((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
  if (!title) err(f, 'no <title>');
  if (title.length > 65) warn(f, `title ${title.length} chars (>65): ${title}`);
  if (!desc) err(f, 'no meta description');
  if (desc.length > 165) warn(f, `description ${desc.length} chars (>165)`);
  if (!canon) err(f, 'no canonical');
  if (titles.has(title)) err(f, `duplicate title with ${titles.get(title)}`); else titles.set(title, f);
  if (descs.has(desc)) err(f, `duplicate description with ${descs.get(desc)}`); else descs.set(desc, f);
  if (canons.has(canon)) err(f, `duplicate canonical with ${canons.get(canon)}`); else canons.set(canon, f);

  /* --- headings --- */
  const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
  if (h1s !== 1) err(f, `${h1s} <h1> elements (expected 1)`);
  const levels = [...html.matchAll(/<h([1-4])[\s>]/g)].map(m => +m[1]);
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i - 1] > 1) { warn(f, `heading jump h${levels[i - 1]} -> h${levels[i]}`); break; }
  }

  /* --- images --- */
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt=/.test(m[0])) err(f, 'img without alt');
    if (!/\swidth=/.test(m[0]) || !/\sheight=/.test(m[0])) warn(f, 'img without width/height (layout shift)');
  }

  /* --- duplicate ids --- */
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  const dupes = ids.filter((v, i) => ids.indexOf(v) !== i);
  if (dupes.length) err(f, `duplicate id(s): ${[...new Set(dupes)].join(', ')}`);

  /* --- JSON-LD --- */
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { err(f, `invalid JSON-LD: ${e.message}`); }
  }

  /* --- brand name --- */
  const bad = html.match(/OffsetEase/g);
  if (bad) err(f, `"OffsetEase" appears ${bad.length}x — must be "Offsetease" or "OFFSETEASE"`);

  /* --- unresolved template literals / placeholders --- */
  if (/\$\{/.test(html)) err(f, 'unresolved ${} template literal');
  if (/\[(?:X|N|C|XX|TBD|PLACEHOLDER)\]/.test(html)) err(f, 'bracketed placeholder left in copy');
  if (/\bundefined\b/.test(html.replace(/<script[\s\S]*?<\/script>/g, ''))) err(f, '"undefined" in rendered output');
}

/* --- sitemap coverage --- */
const sm = readFileSync(join(ROOT, 'sitemap.xml'), 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const indexable = pages.filter(f => f !== '404.html');   // 404 is deliberately not listed
if (locs.length !== indexable.length) err('sitemap.xml', `${locs.length} urls for ${indexable.length} indexable pages`);

console.log(`\n  ${pages.length} pages checked — ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
