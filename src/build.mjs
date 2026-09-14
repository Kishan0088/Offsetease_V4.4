#!/usr/bin/env node
// Builds the whole site into flat .html files at the repository root.
// Zero dependencies: `node src/build.mjs`.

import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { site } from './data/site.mjs';
import { renderDocument } from './lib/layout.mjs';
import { absolute, url } from './lib/paths.mjs';
import { allPages } from './render.mjs';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
// OUT_DIR lets a second target be built without overwriting the committed
// GitHub Pages output at the repository root.
const ROOT = process.env.OUT_DIR ? join(REPO, process.env.OUT_DIR) : REPO;

/** Pull the traced wordmark path out of the brand SVG so it can be inlined. */
async function wordmarkPath() {
  const svg = await readFile(join(REPO, 'assets/brand/offsetease-lockup.svg'), 'utf8');
  const match = svg.match(/<g class="oe-word"><path d="([^"]+)"\/><\/g>/);
  if (!match) throw new Error('Could not read the wordmark path from offsetease-lockup.svg');
  return match[1];
}

function filenameFor(path) {
  if (path === '/') return 'index.html';
  return path.replace(/^\//, '');
}

async function writeSitemap(pages) {
  if (!site.indexable) {
    // A preview build must not advertise itself.
    await writeFile(join(ROOT, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
    await writeFile(
      join(ROOT, 'sitemap.xml'),
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n'
    );
    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages
    .filter((p) => p.page.path !== '/404.html')
    .map(
      (p) =>
        `  <url><loc>${absolute(p.page.path)}</loc><lastmod>${today}</lastmod>` +
        `<changefreq>monthly</changefreq><priority>${p.page.path === '/' ? '1.0' : '0.7'}</priority></url>`
    )
    .join('\n');
  await writeFile(
    join(ROOT, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
  await writeFile(
    join(ROOT, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${absolute('/sitemap.xml')}\n`
  );
}

async function writeManifest() {
  const manifest = {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: url('/'),
    scope: url('/'),
    display: 'standalone',
    background_color: site.colors.ink,
    theme_color: site.colors.ink,
    icons: [
      { src: url('/assets/brand/favicon-192.png'), sizes: '192x192', type: 'image/png' },
      { src: url('/assets/brand/favicon-512.png'), sizes: '512x512', type: 'image/png' },
      { src: url('/assets/brand/favicon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
  await writeFile(join(ROOT, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
}

async function main() {
  const wordPath = await wordmarkPath();
  const pages = allPages();

  const seen = new Set();
  for (const p of pages) {
    if (seen.has(p.page.path)) throw new Error(`Duplicate page path: ${p.page.path}`);
    seen.add(p.page.path);
  }

  let bytes = 0;
  for (const { page, body } of pages) {
    const doc = renderDocument({ page, body, wordPath });
    const file = filenameFor(page.path);
    await mkdir(dirname(join(ROOT, file)), { recursive: true });
    await writeFile(join(ROOT, file), doc);
    bytes += Buffer.byteLength(doc);
    process.stdout.write(`  ${file.padEnd(42)} ${(Buffer.byteLength(doc) / 1024).toFixed(1)} KB\n`);
  }

  await writeSitemap(pages);
  await writeManifest();
  await writeFile(join(ROOT, '.nojekyll'), '');

  console.log(
    `\n${pages.length} pages · ${(bytes / 1024).toFixed(0)} KB of HTML · ` +
      `indexable: ${site.indexable}`
  );
}

main().catch((err) => {
  console.error('\nBuild failed:', err.message);
  console.error(err.stack);
  process.exit(1);
});
