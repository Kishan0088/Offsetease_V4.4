/* Static site generator. No dependencies — `node src/build.mjs`.
   Reads the page data in src/data, writes flat .html files to the repo root. */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { site } from './data/site.mjs';
import { U, clean } from './data/nav.mjs';
import { setLogo } from './templates/layout.mjs';
import { buildPage } from './templates/page.mjs';
import { pages } from './data/pages/index.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const rd = (p) => readFileSync(join(ROOT, p), 'utf8');
const wr = (p, s) => {
  const f = join(ROOT, p);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, s);
  return s.length;
};

/* Inline the logo so it inherits colour and can be animated. */
const logoSvg = rd('assets/brand/offsetease-logo-compact.svg')
  .replace(/<\?xml[^>]*\?>/, '')
  .replace(/\s*<desc>[\s\S]*?<\/desc>/, '')
  .replace('<svg ', '<svg aria-hidden="true" focusable="false" ')
  .replace(/role="img"\s*/, '')
  .replace(/aria-label="[^"]*"\s*/, '')
  .trim();
setLogo(logoSvg);

const lqip = existsSync(join(ROOT, 'assets/img/photos/lqip.json'))
  ? JSON.parse(rd('assets/img/photos/lqip.json')) : {};
const ctx = { lqip };

/* ---------------------------------------------------------------- pages */
let total = 0;
const built = [];

/* Guard: a block can carry ready-made markup in `fig`, `after` or `aside`.
   If a renderer forgets to output one of those, the content vanishes with no
   error. Assert every such fragment actually reaches the page. */
function assertFragmentsRendered(page, html) {
  for (const b of page.blocks || []) {
    for (const key of ['fig', 'after', 'aside', 'html']) {
      const frag = b[key];
      if (typeof frag !== 'string' || frag.length < 24) continue;
      const probe = frag.trim().slice(0, 60);
      if (!html.includes(probe)) {
        throw new Error(`${page.file}: block "${b.type}" (${b.n || '?'}) defines ` +
          `\`${key}\` but it was not rendered — the block template is dropping it.`);
      }
    }
  }
}

for (const page of pages) {
  const html = buildPage(page, ctx);
  assertFragmentsRendered(page, html);
  const bytes = wr(page.file, html);
  built.push({ file: page.file, url: clean(page.file), bytes });
  total += bytes;
  console.log(`  ${page.file.padEnd(38)} ${String(bytes).padStart(7)} bytes`);
}

/* ------------------------------------------------------------------ 404 */
{
  const notFound = {
    file: '404.html', url: '/404',
    title: 'Page not found | Offsetease',
    description: 'That page does not exist. Find high-integrity carbon, ESG advisory and the rest of the Offsetease site from here.',
    h1: 'That page is not here.',
    crumbLabel: 'Not found',
    heroShort: true,
    hero: {
      photo: 'fog-forest', sideScrim: true,
      kicker: 'Error 404',
      headline: 'That page is not here.',
      lede: 'The link may be old, or the address mistyped. Everything below is where the work actually lives.',
      buttons: [
        { href: U.home, label: 'Back to the home page', variant: 'primary' },
        { href: U.contact, label: 'Request a briefing', variant: 'ghost' }
      ],
      scrollHint: false
    },
    blocks: [{
      type: 'tiles', tone: 'paper', n: '01', kicker: 'Where to go', cols: 'g-3',
      title: 'The main routes through the site.',
      items: [
        { k: 'Markets', title: 'Environmental markets', body: 'Development, supply and renewable attributes.', href: U.markets },
        { k: 'Method', title: 'The Source Standard', body: 'Our four-dimension integrity screen.', href: U.source },
        { k: 'ESG', title: 'ESG & sustainability', body: 'Measurement, strategy, disclosure and targets.', href: U.esg },
        { k: 'Sectors', title: 'Industries', body: 'Where the obligation actually bites.', href: U.industries },
        { k: 'Answers', title: 'FAQ', body: 'The questions we are asked most often.', href: U.faq },
        { k: 'Company', title: 'About Offsetease', body: 'Why we exist and how we work.', href: U.about }
      ]
    }],
    cta: false
  };
  const bytes = wr('404.html', buildPage(notFound, ctx));
  console.log(`  ${'404.html'.padEnd(38)} ${String(bytes).padStart(7)} bytes  (not in sitemap)`);
}

/* --------------------------------------------------------------- extras */
const today = new Date().toISOString().slice(0, 10);
const priority = (f) => f === U.home ? '1.0'
  : [U.markets, U.esg, U.source, U.contact].includes(f) ? '0.9' : '0.7';

wr('sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n`.replace('www.sitemap.org', 'www.sitemaps.org') +
  built.map(b => `  <url>\n    <loc>${site.origin}${b.url}</loc>\n` +
    `    <lastmod>${today}</lastmod>\n    <priority>${priority(b.file)}</priority>\n  </url>`).join('\n') +
  `\n</urlset>\n`);

wr('robots.txt',
  `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);

/* Paths are relative so the site also works when served from a sub-path,
   as it is on a GitHub Pages project site. */
wr('site.webmanifest', JSON.stringify({
  name: site.name, short_name: site.name,
  description: 'High-integrity carbon, at the source.',
  start_url: './', scope: './', display: 'standalone',
  background_color: '#04171A', theme_color: '#0A3D44',
  icons: [
    { src: 'assets/brand/favicon-192.png', sizes: '192x192', type: 'image/png' },
    { src: 'assets/brand/favicon-512.png', sizes: '512x512', type: 'image/png' },
    { src: 'assets/brand/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }
  ]
}, null, 2) + '\n');

console.log(`\n  ${built.length} pages, ${(total / 1024).toFixed(0)} KB of HTML`);
