/* Tiny HTML helpers — no template engine, no dependencies. */

export const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/* Typographic polish for prose: curly quotes, true dashes, non-breaking
   spaces in the places that matter. Transforms run on the raw string, then
   the result is escaped — the curly glyphs are non-ASCII so they pass through. */
export const typo = (s = '') => esc(String(s)
  .replace(/---/g, '\u2014')
  .replace(/ -- /g, '\u2009\u2014\u2009')
  .replace(/(\w)'(\w)/g, '$1\u2019$2')
  .replace(/(^|[\s(\[])"/g, '$1\u201c').replace(/"/g, '\u201d')
  .replace(/(^|[\s(\[])'/g, '$1\u2018').replace(/'/g, '\u2019')
  .replace(/\bNo\. /g, 'No.\u00a0'));

export const attrs = (o = {}) => Object.entries(o)
  .filter(([, v]) => v !== null && v !== undefined && v !== false)
  .map(([k, v]) => v === true ? ` ${k}` : ` ${k}="${esc(v)}"`)
  .join('');

export const cx = (...a) => a.flat().filter(Boolean).join(' ');

/* Join HTML fragments, dropping empties. */
export const j = (a = []) => a.filter(Boolean).join('\n');

/* Arrow glyph used by links and buttons. */
export const arrow = (size = 13) =>
  `<svg class="btn__arrow" width="${size}" height="${size}" viewBox="0 0 13 13" fill="none" aria-hidden="true">` +
  `<path d="M1 6.5h10M6.8 2.2 11.1 6.5l-4.3 4.3" stroke="currentColor" stroke-width="1.4" ` +
  `stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const caret = () =>
  `<svg class="nav__caret" viewBox="0 0 10 6" fill="none" aria-hidden="true">` +
  `<path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;

export const plus = () =>
  `<svg viewBox="0 0 12 12" fill="none" aria-hidden="true">` +
  `<path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;

/* Split a headline into animated lines. */
export const lines = (text, tag = 'span') => {
  const parts = String(text).split('|').map(s => s.trim()).filter(Boolean);
  return `<${tag} class="lines">` +
    parts.map((p, i) => `<span><i style="--d:${(i * 0.09).toFixed(2)}s">${typo(p)}</i></span>`).join('') +
    `</${tag}>`;
};

export const btn = ({ href, label, variant = 'ghost', arrowed = true }) =>
  `<a class="btn btn--${variant}" href="${esc(href)}">${typo(label)}${arrowed ? arrow() : ''}</a>`;

export const link = ({ href, label }) =>
  `<a class="link" href="${esc(href)}">${typo(label)}${arrow(12)}</a>`;

export const kicker = (text, n) =>
  `<p class="kicker">${n ? `<span class="kicker__n">${esc(n)}</span>` : ''}${typo(text)}</p>`;
