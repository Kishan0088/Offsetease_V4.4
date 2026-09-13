// Responsive <picture> rendering driven by assets/img/photos/manifest.json,
// which the encoder writes. If a photo is missing from the manifest the build
// fails loudly rather than emitting a broken <img>.

import { readFileSync } from 'node:fs';
import { esc, raw } from './html.mjs';
import { url } from './paths.mjs';

const MANIFEST = JSON.parse(
  readFileSync(new URL('../../assets/img/photos/manifest.json', import.meta.url), 'utf8')
);

export const photoNames = Object.keys(MANIFEST);

export function photoMeta(name) {
  const m = MANIFEST[name];
  if (!m) {
    throw new Error(
      `Unknown photo "${name}". Available: ${photoNames.join(', ')}`
    );
  }
  return m;
}

// AVIF carries the full ladder. WebP is only the fallback for browsers without
// AVIF (Safari < 16), which are rarely on 4K displays, so it stops at 1440 —
// otherwise the fallback weighs more than the format it is backing up.
const WEBP_MAX_WIDTH = 1440;

function srcset(name, ext) {
  const widths = photoMeta(name).widths.filter(
    (w) => ext !== 'webp' || w <= WEBP_MAX_WIDTH
  );
  return widths.map((w) => `${url(`/assets/img/photos/${name}-${w}.${ext}`)} ${w}w`).join(', ');
}

/**
 * @param {string} name    photo key from the manifest
 * @param {object} opts
 *   alt      required unless decorative
 *   sizes    CSS sizes attribute (default: full viewport width)
 *   priority true for above-the-fold art — eager + high fetchpriority, no lazy
 *   ratio    CSS aspect-ratio for the frame, e.g. '16 / 9'
 *   className extra classes on the <picture>
 *   decorative marks the image aria-hidden with empty alt
 */
export function picture(name, opts = {}) {
  const {
    alt,
    sizes = '100vw',
    priority = false,
    ratio,
    className = '',
    decorative = false,
    fit = 'cover',
    position,
  } = opts;

  if (!decorative && !alt) throw new Error(`picture("${name}") needs alt text or decorative:true`);

  const m = photoMeta(name);
  const fallbackWidth = Math.min(m.widths[m.widths.length - 1], WEBP_MAX_WIDTH);
  const style = [
    `--lqip:url("${m.lqip}")`,
    `--tone:${m.tone}`,
    ratio ? `--ratio:${ratio}` : `--ratio:${m.w} / ${m.h}`,
    position ? `--pos:${position}` : '',
  ]
    .filter(Boolean)
    .join(';');

  const cls = ['ph', className].filter(Boolean).join(' ');

  return raw(
    `<picture class="${esc(cls)}" style="${style}">` +
      `<source type="image/avif" srcset="${srcset(name, 'avif')}" sizes="${esc(sizes)}">` +
      `<source type="image/webp" srcset="${srcset(name, 'webp')}" sizes="${esc(sizes)}">` +
      `<img src="${url(`/assets/img/photos/${name}-${fallbackWidth}.webp`)}" ` +
      `width="${m.w}" height="${m.h}" ` +
      `alt="${decorative ? '' : esc(alt)}"${decorative ? ' aria-hidden="true"' : ''} ` +
      `style="object-fit:${fit}" ` +
      (priority
        ? 'loading="eager" fetchpriority="high" decoding="sync"'
        : 'loading="lazy" decoding="async"') +
      '></picture>'
  );
}

/** The single largest AVIF for a photo — used for <link rel=preload> on heroes. */
export function preloadFor(name) {
  const m = photoMeta(name);
  return {
    href: url(`/assets/img/photos/${name}-${m.widths[m.widths.length - 1]}.avif`),
    imagesrcset: srcset(name, 'avif'),
    type: 'image/avif',
  };
}
