/* Section block renderers. A page is an array of blocks; each block knows how
   to draw itself on any of the site's five surfaces. */

import { esc, typo, j, btn, link, kicker, arrow, lines } from '../lib/html.mjs';
import { photos } from '../data/site.mjs';

const TONE = { paper: '', bone: 'on-bone', dark: 'on-dark', abyss: 'on-abyss', deep: 'on-deep' };
const tone = (t) => TONE[t] ?? '';

const head = (b) => j([
  b.kicker ? kicker(b.kicker, b.n) : '',
  b.title ? `<h2 class="${b.h || 'h2'}" data-reveal>${typo(b.title)}</h2>` : '',
  b.lede ? `<p class="lede measure-wide" data-reveal style="--d:.08s">${typo(b.lede)}</p>` : ''
]);

const paras = (arr = []) => arr.map((p, i) =>
  `<p data-reveal style="--d:${(0.06 + i * 0.05).toFixed(2)}s">${typo(p)}</p>`).join('');

/* Responsive <picture> for a keyed photo. */
export function photo(key, { cls = '', sizes = '100vw', eager = false, lqip = {} } = {}) {
  const meta = photos[key];
  if (!meta) throw new Error(`Unknown photo: ${key}`);
  const ph = lqip[key];
  return `<img class="${cls}${ph ? ' blurup' : ''}" src="assets/img/photos/${key}-1600.jpg"` +
    ` srcset="assets/img/photos/${key}-800.jpg 800w, assets/img/photos/${key}-1600.jpg 1600w"` +
    ` sizes="${esc(sizes)}" width="1600" height="1067" alt="${esc(meta.alt)}"` +
    ` loading="${eager ? 'eager' : 'lazy'}" decoding="async"` +
    (eager ? ' fetchpriority="high"' : '') +
    (ph ? ` style="background-image:url(${ph});background-size:cover"` : '') + `>`;
}

const BLOCKS = {
  /* -------------------------------------------------------------- prose */
  prose(b, ctx) {
    const aside = b.aside ? `<div class="stack" data-reveal style="--d:.14s">${b.aside}</div>` : '';
    const body = `<div class="stack">${paras(b.paras)}${b.after || ''}</div>`;
    return section(b, b.aside
      ? `<div class="grid g-aside"><div class="stack-lg">${head(b)}</div><div class="stack-lg">${body}${aside}</div></div>`
      : `<div class="stack-lg">${head(b)}<div class="measure-wide stack">${body}</div></div>`);
  },

  /* ------------------------------------------------------------- points */
  points(b) {
    const items = b.items.map((it, i) => `
      <li data-reveal style="--d:${(i * 0.07).toFixed(2)}s">
        <span class="points__n">${esc(String(i + 1).padStart(2, '0'))}</span>
        <div class="stack">
          <h3 class="h4">${typo(it.title)}</h3>
          ${it.body ? `<p class="body">${typo(it.body)}</p>` : ''}
          ${it.href ? link({ href: it.href, label: it.link || 'Read more' }) : ''}
        </div>
      </li>`).join('');
    return section(b, `<div class="grid g-aside"><div class="stack-lg">${head(b)}${b.aside || ''}</div>
      <div class="stack-lg"><ol class="points">${items}</ol>${b.after || ''}</div></div>`);
  },

  /* ------------------------------------------------------------- figure */
  figure(b) {
    const fig = `<div class="figure-hold" data-reveal style="--d:.1s">${b.fig}</div>`;
    if (b.layout === 'stacked') {
      return section(b, `<div class="stack-lg">${head(b)}${fig}${b.after || ''}</div>`);
    }
    return section(b, `<div class="grid g-aside">
      <div class="stack-lg">${head(b)}${b.paras ? `<div class="stack">${paras(b.paras)}</div>` : ''}${b.after || ''}</div>
      ${fig}</div>`);
  },

  /* -------------------------------------------------------------- tiles */
  tiles(b) {
    const cols = b.cols || (b.items.length % 3 === 0 ? 'g-3' : 'g-2');
    const items = b.items.map((it, i) => {
      const inner = j([
        it.k ? `<span class="tile__k">${esc(it.k)}</span>` : '',
        `<h3 class="h4">${typo(it.title)}</h3>`,
        it.body ? `<p class="body small">${typo(it.body)}</p>` : '',
        it.href ? `<span class="card__arrow">${arrow(14)}</span>` : ''
      ]);
      const style = ` data-reveal style="--d:${(i * 0.05).toFixed(2)}s"`;
      return it.href
        ? `<a class="tile"${style} href="${esc(it.href)}">${inner}</a>`
        : `<div class="tile"${style}>${inner}</div>`;
    }).join('');
    return section(b, `<div class="stack-lg">${head(b)}<div class="grid ${cols}">${items}</div>${b.after || ''}</div>`);
  },

  /* -------------------------------------------------------------- split */
  split(b) {
    const col = (c) => j([
      c.k ? `<p class="tile__k">${esc(c.k)}</p>` : '',
      c.title ? `<h3 class="${c.h || 'h3'}">${typo(c.title)}</h3>` : '',
      ...(c.paras || []).map(p => `<p class="body">${typo(p)}</p>`),
      c.extra || '',
      c.href ? link({ href: c.href, label: c.link || 'Explore' }) : ''
    ]);
    return section(b, `<div class="stack-lg">${head(b)}
      <div class="grid g-2">
        <div class="stack" data-reveal>${col(b.left)}</div>
        <div class="stack" data-reveal style="--d:.1s">${col(b.right)}</div>
      </div>${b.after || ''}</div>`);
  },

  /* ---------------------------------------------------------- statement */
  statement(b) {
    return section(b, `<div class="grid g-aside">
      <p class="kicker">${b.n ? `<span class="kicker__n">${esc(b.n)}</span>` : ''}${typo(b.kicker || '')}</p>
      <div class="stack-lg">
        <p class="statement${b.wide ? ' statement--wide' : ''}" data-reveal="mask">${typo(b.text)}</p>
        ${b.sub ? `<p class="lede measure-wide" data-reveal style="--d:.12s">${typo(b.sub)}</p>` : ''}
        ${b.after || ''}
      </div></div>`);
  },

  /* ----------------------------------------------------------- defs */
  defs(b) {
    const items = b.items.map((it, i) => `
      <dl class="defn" data-reveal style="--d:${(i * 0.06).toFixed(2)}s">
        <dt>${typo(it.term)}</dt><dd>${typo(it.def)}</dd></dl>`).join('');
    return section(b, `<div class="grid g-aside"><div class="stack-lg">${head(b)}</div>
      <div>${items}</div></div>`);
  },

  /* --------------------------------------------------------------- band */
  band(b, ctx) {
    return `<section class="band on-abyss">
      <div class="band__bg" data-parallax="0.06">${photo(b.photo, { sizes: '100vw', lqip: ctx.lqip })}</div>
      <div class="band__scrim"></div>
      <div class="wrap wrap-wide">
        <div class="stack-lg" style="max-width:46rem">
          ${b.kicker ? kicker(b.kicker, b.n) : ''}
          <h2 class="h1" data-reveal="mask">${typo(b.title)}</h2>
          ${(b.paras || []).map((p, i) => `<p class="lede" data-reveal style="--d:${(0.1 + i * 0.06).toFixed(2)}s">${typo(p)}</p>`).join('')}
          ${b.buttons ? `<div class="btn-row" data-reveal style="--d:.24s">${b.buttons.map(btn).join('')}</div>` : ''}
        </div>
      </div>
    </section>`;
  },

  /* -------------------------------------------------------------- media */
  media(b, ctx) {
    const meta = photos[b.photo];
    return section(b, `<div class="grid g-split">
      <div class="stack-lg">${head(b)}${b.paras ? `<div class="stack">${paras(b.paras)}</div>` : ''}${b.after || ''}</div>
      <figure class="media media--${b.ratio || 'wide'} media--reveal" data-reveal style="margin:0">
        ${photo(b.photo, { sizes: '(min-width:860px) 55vw, 100vw', lqip: ctx.lqip })}
        ${b.caption ? `<figcaption class="media__cap">${typo(b.caption)}</figcaption>` : ''}
      </figure></div>`);
  },

  /* --------------------------------------------------------------- faq */
  faq(b) {
    const items = b.items.map((f, i) => `
      <div class="faq__item" data-open="false" data-reveal style="--d:${(i * 0.05).toFixed(2)}s">
        <h3 style="margin:0">
          <button class="faq__q" type="button" aria-expanded="false">
            <span>${typo(f.q)}</span><span class="faq__sign" aria-hidden="true"></span>
          </button>
        </h3>
        <div class="faq__a"><div><p>${typo(f.a)}</p></div></div>
      </div>`).join('');
    return section(b, `<div class="grid g-aside"><div class="stack-lg">${head(b)}</div>
      <div class="faq">${items}</div></div>`);
  },

  /* --------------------------------------------------------------- cta */
  cta(b) {
    return section({ ...b, tone: b.tone || 'dark' }, `<div class="grid g-aside">
      ${b.kicker ? kicker(b.kicker, b.n) : '<div></div>'}
      <div class="stack-lg">
        <h2 class="h1" data-reveal="mask">${typo(b.title)}</h2>
        ${b.body ? `<p class="lede measure-wide" data-reveal style="--d:.1s">${typo(b.body)}</p>` : ''}
        <div class="btn-row" data-reveal style="--d:.18s">${(b.buttons || []).map(btn).join('')}</div>
        ${b.after || ''}
      </div></div>`);
  },

  /* --------------------------------------------------------- raw escape */
  raw(b) { return section(b, b.html); }
};

function section(b, inner) {
  const cls = ['section', tone(b.tone), b.tight ? 'section--tight' : '', b.class].filter(Boolean).join(' ');
  // numbered sections get a stable anchor, so any point in the narrative is linkable
  const id = b.id || (b.n ? `s${b.n}` : null);
  return `<section class="${cls}"${id ? ` id="${esc(id)}"` : ''}>` +
    `<div class="wrap${b.wide ? ' wrap-wide' : ''}">${inner}</div></section>`;
}

export function renderBlocks(blocks, ctx) {
  return blocks.map(b => {
    const fn = BLOCKS[b.type];
    if (!fn) throw new Error(`Unknown block type: ${b.type}`);
    return fn(b, ctx);
  }).join('\n');
}
