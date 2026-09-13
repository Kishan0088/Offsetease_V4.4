// Tiny HTML helpers. No template engine, no dependencies.

import { url } from './paths.mjs';

const ENT = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escape for text nodes and attribute values. */
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ENT[c]);

/**
 * Tagged template that escapes interpolations by default.
 * Arrays are joined; values wrapped in `raw()` are passed through untouched.
 */
export function html(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i++) {
    out += render(values[i]) + strings[i + 1];
  }
  return out;
}

const RAW = Symbol('raw');
export const raw = (s) => ({ [RAW]: String(s ?? '') });
export const isRaw = (v) => v && typeof v === 'object' && RAW in v;

/** Unwrap a raw() value (or render any value) to a plain HTML string. */
export const str = (v) => (isRaw(v) ? v[RAW] : render(v));

function render(v) {
  if (v == null || v === false) return '';
  if (isRaw(v)) return v[RAW];
  if (Array.isArray(v)) return v.map(render).join('');
  return esc(v);
}

/** Join an array of already-safe HTML strings. */
export const join = (arr, sep = '') => raw(arr.filter(Boolean).join(sep));

/**
 * Inline markup for editorial copy. Deliberately tiny — the content files are
 * ours, so this supports exactly what the copy needs and nothing more:
 *   **bold**  *italic*  `mono`  [text](/href)  --  ->
 */
export function md(text) {
  let s = esc(text);
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, href) => {
    // Internal links written in copy must get the deployment base path too,
    // and external ones must be safe to open.
    const external = /^https?:/.test(href);
    const target = external ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${external ? href : url(href)}"${target}>${t}</a>`;
  });
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[\s(])\*([^*]+)\*/g, '$1<em>$2</em>');
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/ -- /g, ' — ').replace(/->/g, '→');
  return raw(s);
}

/** Slug for ids and filenames. */
export const slug = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Split a headline into words wrapped for the kinetic rise animation. */
export function kinetic(text, { accent = [] } = {}) {
  const words = String(text).split(/\s+/);
  return raw(
    words
      .map((w, i) => {
        const hit = accent.some((a) => w.toLowerCase().replace(/[^a-z0-9]/g, '')
          .startsWith(String(a).toLowerCase().replace(/[^a-z0-9]/g, '')));
        return `<span class="kw"><span class="kw__i${hit ? ' kw__i--accent' : ''}" style="--kw:${i}">${esc(w)}</span></span>`;
      })
      .join(' ')
  );
}

/** Numbers that count up when scrolled into view. */
export function figure(value, { prefix = '', suffix = '', label = '' } = {}) {
  const numeric = String(value).replace(/[^0-9.]/g, '');
  const attr = numeric && Number.isFinite(Number(numeric)) ? ` data-count="${numeric}"` : '';
  return raw(
    `<span class="fig"${attr}>` +
      (prefix ? `<span class="fig__pre">${esc(prefix)}</span>` : '') +
      `<span class="fig__v">${esc(value)}</span>` +
      (suffix ? `<span class="fig__suf">${esc(suffix)}</span>` : '') +
    '</span>' + (label ? `<span class="fig__label">${esc(label)}</span>` : '')
  );
}
