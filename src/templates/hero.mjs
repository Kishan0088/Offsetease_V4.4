/* Page heroes. Three variants: a generative canvas (home), a cinematic
   photograph (pillars and services), and a plain field (utility pages). */

import { esc, typo, j, btn, kicker, lines, arrow } from '../lib/html.mjs';
import { photo } from './blocks.mjs';
import { clean } from '../data/nav.mjs';

function crumbs(page) {
  if (!page.crumbs || !page.crumbs.length) return '';
  const parts = page.crumbs.map(c => `<a href="${esc(c.href)}">${typo(c.label)}</a>`);
  return `<nav class="crumb" aria-label="Breadcrumb">
    <a href="index.html">Home</a>
    ${parts.map(p => `<span class="crumb__sep" aria-hidden="true">/</span>${p}`).join('')}
    <span class="crumb__sep" aria-hidden="true">/</span>
    <span aria-current="page">${typo(page.crumbLabel || page.h1)}</span>
  </nav>`;
}

export function hero(page, ctx) {
  const h = page.hero || {};
  const variant = h.kind || 'photo';
  const isCanvas = variant === 'canvas';
  const media = h.photo
    ? `<div class="hero__media" data-parallax="0.05">${photo(h.photo, { sizes: '100vw', eager: true, lqip: ctx.lqip })}</div>`
    : '';
  const canvas = isCanvas ? `<canvas class="hero__canvas" data-hero-canvas aria-hidden="true"></canvas>` : '';
  const scrim = `<div class="hero__scrim${h.sideScrim ? ' hero__scrim--side' : ''}"></div>`;

  const buttons = (h.buttons || []).length
    ? `<div class="btn-row" data-reveal style="--d:.34s">${h.buttons.map(btn).join('')}</div>` : '';

  const stats = (h.stats || []).length ? `
    <div class="statline" data-reveal style="--d:.44s">
      ${h.stats.map(s => `<div><span class="stat__n"${s.count ? ` data-count="${esc(s.count)}"` : ''}>${s.count ? '0' : typo(s.value)}</span>
        <span class="stat__l">${typo(s.label)}</span></div>`).join('')}
    </div>` : '';

  const scroll = h.scrollHint === false ? '' : `
    <p class="hero__scroll" aria-hidden="true"><span class="hero__scrollbar"></span>${typo(h.scrollHint || 'Scroll')}</p>`;

  return `<section class="hero on-abyss${page.heroShort ? ' hero--short' : ''}">
  ${media}${canvas}${scrim}
  <div class="hero__in wrap wrap-wide">
    ${crumbs(page)}
    ${h.kicker ? kicker(h.kicker) : ''}
    <h1 class="${isCanvas ? 'hero__title' : 'h1'}">${lines(h.headline || page.h1, 'span')}</h1>
    ${h.lede ? `<p class="lede hero__lede" data-reveal style="--d:.28s">${typo(h.lede)}</p>` : ''}
    <div class="hero__foot">
      <div class="stack">${buttons}${stats}</div>
      ${scroll}
    </div>
  </div>
</section>`;
}
