import { esc, html, raw, join, md, kinetic, slug, str } from './html.mjs';
import { primaryCta, site } from '../data/site.mjs';
import { url } from './paths.mjs';
import { picture } from './media.mjs';

const ARROW =
  '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">' +
  '<path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/**
 * The brand sunburst, reused as a diagram primitive.
 * `spread: 'brand'` reproduces the lockup exactly (five rays on the 45° grid,
 * three omitted) and is only correct at total = 5. `spread: 'even'` distributes
 * any number of rays around the full circle so a 3- or 4-step dial still reads
 * as a dial rather than a broken logo.
 */
export function sunburst({ lit = 0, total = 5, className = '', rayClass = 'checks__ray', spread = 'brand' } = {}) {
  const BRAND = [120, 165, 210, 255, 300];
  const degs =
    spread === 'brand' && total === BRAND.length
      ? BRAND
      : Array.from({ length: total }, (_, i) => 120 + (i * 360) / total);
  return raw(
    `<svg class="${esc(className)}" viewBox="-142 -142 284 284" aria-hidden="true" focusable="false">` +
      degs
        .map(
          (d, i) =>
            // Rotation on a wrapper <g>: a `transform-box` on the rect would
            // re-anchor this rotate() to the rect's own centre and scatter the rays.
            `<g transform="rotate(${d})"><rect class="${rayClass}${i < lit ? ' is-lit' : ''}" ` +
            `x="36" y="-6.75" width="98" height="13.5" rx="1" style="--i:${i}"/></g>`
        )
        .join('') +
      '<circle class="checks__ring" r="22"/></svg>'
  );
}

export function btn(label, href, { variant = 'ghost', magnetic = false, arrow = true } = {}) {
  return raw(
    `<a class="btn btn--${variant}" href="${url(href)}"${magnetic ? ' data-magnetic' : ''}>` +
      `${esc(label)}${arrow ? `<span class="btn__arrow">${ARROW}</span>` : ''}</a>`
  );
}

export function eyebrow(text) {
  return raw(`<p class="label">${esc(text)}</p>`);
}

/** Cited research block. */
export function proof(text, fig) {
  if (!text) return raw('');
  const figHtml = fig
    ? `<div><div class="proof__fig">${esc(fig.value)}</div>` +
      `<span class="proof__figl">${esc(fig.label)}</span></div>`
    : '';
  return raw(
    `<div class="proof reveal">${figHtml}<p class="proof__t">${str(md(text))}</p></div>`
  );
}

/**
 * OUR figures. Gold numerals, dark cell, and a provenance note underneath, so a
 * skimming visitor can never read a third party's number as Offsetease's.
 * Market statistics use `marketStrip` and never share a row with these.
 */
export function statStrip(stats, { className = '', note = '' } = {}) {
  const cells = stats
    .map((s) => {
      const numeric = String(s.value).replace(/[^0-9.]/g, '');
      const countAttr = numeric ? ` data-count="${numeric}"` : '';
      return (
        `<div class="stats__cell reveal"><div class="stats__v">` +
        `<span class="fig"${countAttr}><span class="fig__v">${esc(s.value)}</span></span>` +
        (s.unit ? `<span class="stats__u">${esc(s.unit)}</span>` : '') +
        `</div><div class="stats__l">${esc(s.label)}</div></div>`
      );
    })
    .join('');
  return raw(
    `<div class="statblock ${esc(className)}">` +
      `<div class="stats stats--ours" data-stagger="70">${cells}</div>` +
      (note ? `<p class="stats__note">${esc(note)}</p>` : '') +
      '</div>'
  );
}

/**
 * THIRD-PARTY figures. Deliberately unlike `statStrip`: muted numeral, ruled
 * row, and the source named on the same line at readable size.
 */
export function marketStrip(stats, { title = 'Market context' } = {}) {
  const rows = stats
    .map(
      (s) =>
        '<li class="mkt__row reveal">' +
        `<span class="mkt__v">${esc(s.value)}${
          s.unit ? `<span class="mkt__u">${esc(s.unit)}</span>` : ''
        }</span>` +
        `<span class="mkt__l">${esc(s.label)}</span>` +
        `<span class="mkt__s">${esc(s.source)}</span>` +
        '</li>'
    )
    .join('');
  return raw(
    '<div class="mkt">' +
      `<p class="label mkt__title">${esc(title)} — third-party data, not ours</p>` +
      `<ul class="mkt__list">${rows}</ul></div>`
  );
}

function orbit() {
  const degs = [120, 165, 210, 255, 300];
  return (
    '<div class="orbit" aria-hidden="true">' +
    '<svg class="orbit__rays" viewBox="-142 -142 284 284">' +
    degs
      .map((d) => `<rect x="36" y="-6.75" width="98" height="13.5" rx="1" transform="rotate(${d})"/>`)
      .join('') +
    '</svg>' +
    '<span class="orbit__ring orbit__ring--a"></span>' +
    '<span class="orbit__ring orbit__ring--b"></span>' +
    '<span class="orbit__ring orbit__ring--c"></span>' +
    '</div>'
  );
}

export function breadcrumb(items) {
  const li = items
    .map((c, i) =>
      i === items.length - 1
        ? `<li><span aria-current="page">${esc(c.name)}</span></li>`
        : `<li><a href="${url(c.href)}">${esc(c.name)}</a></li>`
    )
    .join('');
  return raw(
    '<nav class="crumb-nav" aria-label="Breadcrumb">' +
      `<ol class="crumb"><li><a href="${url('/')}">Home</a></li>${li}</ol></nav>`
  );
}

/**
 * Full-bleed hero. `variant: 'home'` adds the orbital field and scroll cue.
 */
export function hero(h, { variant = 'inner', crumbs = null, stats = null, statsNote = '', scrollCue = null, video = '' } = {}) {
  const bg = str(
    picture(h.photo, { alt: h.photoAlt, priority: true, sizes: '100vw', className: 'ph--free' })
  );
  const buttons =
    str(
      btn(h.primary?.label || primaryCta.label, h.primary?.href || primaryCta.href, {
        variant: 'gold',
        magnetic: true,
      })
    ) + (h.secondary ? str(btn(h.secondary.label, h.secondary.href)) : '');

  // The poster is the clip's own first frame, so the fade-in is a dissolve into
  // motion rather than a cut between two different pictures. The <picture> above
  // stays the LCP candidate; the clip is fetched only once the page is idle.
  const videoEl = video
    ? `<video class="hero__video" data-video="${url(video)}" muted loop playsinline ` +
      'preload="none" aria-hidden="true" tabindex="-1"></video>'
    : '';

  return raw(
    `<section class="hero${variant === 'inner' ? ' hero--inner' : ''}${
      variant === 'compact' ? ' hero--compact' : ''
    }">` +
      `<div class="hero__bg" data-parallax="0.1">${bg}${videoEl}</div>` +
      '<div class="scrim scrim--hero" aria-hidden="true"></div>' +
      '<div class="grid-overlay" aria-hidden="true"></div>' +
      '<span class="hero__scan" aria-hidden="true"></span>' +
      (variant === 'home' ? orbit() : '') +
      '<div class="hero__inner">' +
      (crumbs ? str(breadcrumb(crumbs)) : '') +
      `<p class="label hero__eyebrow">${esc(h.eyebrow)}</p>` +
      // `kinetic--soft`: no clipping mask and opacity stays at 1, so the LCP
      // text candidate is painted immediately and only settles into place.
      `<h1 class="${variant === 'home' ? 'display' : 'h1'} kinetic kinetic--soft">${str(
        kinetic(h.headline, { accent: h.accent || [] })
      )}</h1>` +
      '<div class="hero__lede">' +
      `<p class="lede">${esc(h.standfirst)}</p>` +
      `<div class="btns">${buttons}</div>` +
      '</div>' +
      (stats ? str(statStrip(stats, { note: statsNote })) : '') +
      (scrollCue ? `<p class="scroll-cue">${esc(scrollCue)}</p>` : '') +
      '</div></section>'
  );
}

/** Section wrapper; `chapter` registers it with the chapter rail. */
export function section(content, { tone = '', id = '', chapter = '', className = '', wrap = 'wrap' } = {}) {
  const cls = ['section', tone, className].filter(Boolean).join(' ');
  return raw(
    `<section class="${esc(cls)}"${id ? ` id="${esc(id)}"` : ''}` +
      `${chapter ? ` data-chapter="${esc(chapter)}"` : ''}>` +
      `<div class="${esc(wrap)}">${str(content)}</div></section>`
  );
}

export function head({ eyebrow: e, headline, body, level = 'h2', split = false, aside = '' }) {
  const paras = Array.isArray(body) ? body : body ? [body] : [];
  const right =
    paras.length || aside
      ? `<div class="reveal">${paras
          .map((p) => `<p class="body-lg">${str(md(p))}</p>`)
          .join('')}${str(aside)}</div>`
      : '';
  return raw(
    `<div class="head${split ? ' head--split' : ''}">` +
      `<div>${e ? `<p class="label">${esc(e)}</p>` : ''}` +
      `<${level} class="h2">${esc(headline)}</${level}></div>` +
      right +
      '</div>'
  );
}

export function cards(items, { stagger = 80, variant = 'plain' } = {}) {
  const body = items
    .map((it) => {
      const inner =
        (it.n ? `<span class="card__n">${esc(it.n)}</span>` : '') +
        `<h3 class="card__t">${esc(it.title)}</h3>` +
        `<p class="card__b">${str(md(it.body))}</p>` +
        (it.href ? `<span class="card__go">${esc(it.cta || 'Explore')} ${ARROW}</span>` : '');

      if (variant === 'media' && it.photo) {
        const pic = str(
          picture(it.photo, {
            alt: it.photoAlt || '',
            decorative: !it.photoAlt,
            sizes: '(max-width: 900px) 100vw, 45vw',
            ratio: '16 / 10',
            className: 'ph--zoom',
          })
        );
        const inner2 = `<div class="mcard__body">${inner}</div>`;
        return it.href
          ? `<a class="card mcard reveal tilt" href="${url(it.href)}">${pic}${inner2}</a>`
          : `<div class="card mcard reveal">${pic}${inner2}</div>`;
      }
      return it.href
        ? `<a class="card reveal" href="${url(it.href)}">${inner}</a>`
        : `<div class="card reveal">${inner}</div>`;
    })
    .join('');
  // The grid follows the count: three cards go three-up (never 2 + an orphan),
  // four go 2x2, anything else auto-fits.
  const n = items.length;
  const grid = n === 3 ? ' cols--3' : n === 4 ? ' cols--2' : variant === 'media' ? ' cols--2' : '';
  return raw(
    `<div class="cols${grid}${variant === 'media' ? ' cols--media' : ''}" data-stagger="${stagger}">${body}</div>`
  );
}

export function ladder(rows) {
  const body = rows
    .map(
      (r) =>
        `<div class="ladder__row"><div class="ladder__n">${esc(r.n)}</div><div>` +
        `<h3 class="ladder__t">${esc(r.title)}</h3>` +
        `<p class="ladder__b">${str(md(r.body))}</p></div></div>`
    )
    .join('');
  return raw(`<div class="ladder">${body}</div>`);
}

export function fiveChecks(data) {
  const items = data.items
    .map(
      (c) =>
        `<li class="checks__item"><span class="checks__i">${esc(c.n)}</span><div>` +
        `<h3 class="checks__h">${esc(c.title)}</h3>` +
        `<p class="checks__d">${esc(c.body)}</p></div></li>`
    )
    .join('');
  return raw(
    '<div class="checks" data-checks>' +
      '<div class="checks__dial reveal reveal--scale">' +
      str(sunburst({ total: data.items.length })) +
      // The animated numeral is decoration; the sentence a screen reader (or a
      // no-JS visitor) gets must be the true one, not "0 of 5 checks passed".
      `<p class="checks__count" aria-hidden="true"><b data-checks-count>${data.items.length}</b>` +
      `<span>of ${data.items.length} checks passed</span></p>` +
      `<p class="sr">All ${data.items.length} checks must pass before we supply a credit.</p>` +
      '</div><div>' +
      `<ul class="checks__list">${items}</ul>` +
      `<p class="checks__close reveal">${esc(data.close)}</p>` +
      '</div></div>'
  );
}

/** Pinned scrollytelling act. */
export function story(data, { id = 'story' } = {}) {
  const layers = data.scenes
    .map(
      (s, i) =>
        `<div class="story__layer${i === 0 ? ' is-on' : ''}">` +
        str(
          picture(s.photo, { alt: '', decorative: true, sizes: '100vw', className: 'ph--free' })
        ) +
        '</div>'
    )
    .join('');
  const scenes = data.scenes
    .map(
      (s, i) =>
        `<article class="story__scene${i === 0 ? ' is-on' : ''}">` +
        `<p class="label story__eyebrow">${esc(s.eyebrow)}</p>` +
        `<h2 class="story__h">${esc(s.title)}</h2>` +
        `<p class="story__b">${esc(s.body)}</p></article>`
    )
    .join('');
  return raw(
    `<section class="story" id="${esc(id)}" data-story` +
      `${data.chapter ? ` data-chapter="${esc(data.chapter)}"` : ''}>` +
      '<div class="story__pin">' +
      `<div class="story__layers" aria-hidden="true">${layers}</div>` +
      '<div class="scrim scrim--band" aria-hidden="true"></div>' +
      `<a class="story__skip" href="#after-${esc(id)}">Skip the story</a>` +
      '<div class="story__inner"><div class="story__track">' +
      '<div class="story__spine" aria-hidden="true"><i></i></div>' +
      `<div class="story__scenes">${scenes}</div></div>` +
      '<div class="story__dial" aria-hidden="true">' +
      str(sunburst({ total: data.scenes.length, spread: 'even', className: 'story__sun' })) +
      `<span class="story__count">01 / ${String(data.scenes.length).padStart(2, '0')}</span>` +
      `</div></div></div><span id="after-${esc(id)}" class="story__end"></span></section>`
  );
}

/**
 * Full-bleed band. Pass `video` for a cinematic moment: the still is the poster
 * and the clip only ever loads on a wide, fine-pointer, non-data-saver screen —
 * see initVideo() in app.js. Phones and metered connections get the photograph
 * and pay nothing.
 */
export function band({ photo, photoAlt, eyebrow: e, headline, body, cta, tone = '', video = '' }) {
  const videoEl = video
    ? `<video class="band__video" data-video="${url(video)}" muted loop playsinline ` +
      'preload="none" aria-hidden="true" tabindex="-1"></video>'
    : '';
  return raw(
    `<section class="band ${esc(tone)}${video ? ' band--film' : ''}">` +
      `<div class="band__bg" data-parallax="0.08">${str(
        picture(photo, {
          alt: photoAlt || '',
          decorative: !photoAlt,
          sizes: '100vw',
          className: 'ph--free',
        })
      )}${videoEl}</div>` +
      '<div class="scrim scrim--soft" aria-hidden="true"></div>' +
      '<div class="band__inner">' +
      (e ? `<p class="label">${esc(e)}</p>` : '') +
      `<h2 class="band__h">${esc(headline)}</h2>` +
      (body ? `<p class="band__b reveal">${str(md(body))}</p>` : '') +
      (cta
        ? `<div class="btns reveal" style="margin-top:28px">${str(
            btn(cta.label, cta.href, { variant: 'gold', magnetic: true })
          )}</div>`
        : '') +
      '</div></section>'
  );
}

export function pills(title, items) {
  return raw(
    '<div class="reveal">' +
      (title ? `<p class="label">${esc(title)}</p>` : '') +
      `<ul class="pills">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`
  );
}

export function steps(items) {
  return raw(`<ul class="steps">${items.map((i) => `<li>${str(md(i))}</li>`).join('')}</ul>`);
}

export function faq(items, { title = 'Common questions' } = {}) {
  if (!items || !items.length) return raw('');
  const body = items
    .map((f, i) => {
      const id = `faq-${slug(f.q).slice(0, 40)}-${i}`;
      return (
        '<div class="faq__item"><h3 class="faq__hd">' +
        `<button class="faq__q" type="button" aria-expanded="false" aria-controls="${id}">` +
        `<span>${esc(f.q)}</span><span class="faq__icon" aria-hidden="true"></span></button></h3>` +
        `<div class="faq__a" id="${id}"><div><p>${esc(f.a)}</p></div></div></div>`
      );
    })
    .join('');
  return raw((title ? `<p class="label">${esc(title)}</p>` : '') + `<div class="faq">${body}</div>`);
}

export function closeCta(
  data,
  { label = primaryCta.label, topic = '', secondary = { label: 'How we work', href: '/about.html' } } = {}
) {
  // A CTA that says what it is for, and arrives with the topic already chosen.
  const href = topic
    ? `/contact.html?topic=${encodeURIComponent(topic)}`
    : primaryCta.href;
  return raw(
    '<section class="close">' +
      `<div class="close__bg" data-parallax="0.07">${str(
        picture(data.photo, {
          alt: '',
          decorative: true,
          sizes: '100vw',
          className: 'ph--free',
        })
      )}</div>` +
      '<div class="scrim scrim--hero" aria-hidden="true"></div>' +
      '<div class="close__inner">' +
      `<h2 class="close__h kinetic">${str(kinetic(data.headline))}</h2>` +
      `<p class="close__b reveal">${esc(data.body)}</p>` +
      '<div class="btns reveal">' +
      str(btn(label, href, { variant: 'gold', magnetic: true })) +
      (secondary ? str(btn(secondary.label, secondary.href)) : '') +
      '</div></div></section>'
  );
}

/**
 * The one-paragraph answer to the question the page's title implies, set
 * directly under the hero.
 *
 * Generative engines and featured snippets both lift a short, self-contained
 * definition far more readily than they lift positioning copy, and a reader
 * skimming five consultancy sites wants the same thing. Kept to roughly 50
 * words so it stays quotable whole.
 */
export function answerBlock(text, { label = 'In short' } = {}) {
  if (!text) return raw('');
  return raw(
    '<div class="answer reveal">' +
      `<p class="label">${esc(label)}</p>` +
      `<p class="answer__t">${str(md(text))}</p>` +
      '</div>'
  );
}

/**
 * A real <table> of dated, sourced facts.
 *
 * There was not one table anywhere on the site, which is a gap worth closing
 * on its own: a comparison or threshold table is among the structures answer
 * engines extract most readily, and this subject matter is full of natural
 * ones. Every row carries its source, because an unattributed number on a
 * page about defensible disclosure undercuts the argument it is making.
 */
export function factTable({ caption, cols = ['', ''], rows = [] } = {}) {
  if (!rows.length) return raw('');
  const head = cols.map((c) => `<th scope="col">${esc(c)}</th>`).join('');
  const body = rows
    .map(
      (r) =>
        '<tr>' +
        `<th scope="row">${esc(r.k)}</th>` +
        `<td>${str(md(r.v))}` +
        (r.src ? `<span class="ftable__src">${esc(r.src)}</span>` : '') +
        '</td></tr>'
    )
    .join('');
  return raw(
    '<div class="ftable__wrap reveal">' +
      '<table class="ftable">' +
      (caption ? `<caption>${esc(caption)}</caption>` : '') +
      `<thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`
  );
}

/**
 * Dated milestones, in order, as an ordered list.
 *
 * These regulations are a sequence of deadlines, so the numbering here is
 * carrying real information rather than decorating the page. Past and future
 * are marked, because "which of these has already happened" is the first
 * thing a reader needs and the thing a bare list hides.
 */
export function timeline(items, { title = 'Key dates' } = {}) {
  if (!items || !items.length) return raw('');
  const body = items
    .map(
      (t) =>
        `<li class="tl__i${t.done ? ' is-done' : ''}">` +
        `<span class="tl__w">${esc(t.when)}</span>` +
        `<span class="tl__d">${str(md(t.what))}</span></li>`
    )
    .join('');
  return raw(
    '<div class="tl reveal">' +
      `<p class="label">${esc(title)}</p>` +
      `<ol class="tl__l">${body}</ol></div>`
  );
}

/**
 * The short enquiry form that closes a service page.
 *
 * The contact page keeps its full form; this one asks for four things and
 * carries the service in a hidden field, because a visitor who has just read
 * 2,000 words about CBAM should not then have to tell us they are here about
 * CBAM. `subject` names the page too, so the enquiry arrives in the inbox
 * already sorted.
 *
 * Field ids are prefixed `q-` so a page can carry this and the contact form's
 * `f-` fields without colliding. app.js binds it through `data-form`, exactly
 * as it binds the contact page, so validation, the honeypot, the error
 * messaging and the status region all come for free.
 */
export function compactForm({ topic, heading = 'Start here', note = '' } = {}) {
  const f = (id, label, control, { optional = false } = {}) =>
    `<div class="field"><label class="field__lab" for="${id}">${esc(label)}` +
    (optional ? ' <em>(optional)</em>' : ' <i class="req" aria-hidden="true">*</i>') +
    `</label>${control}` +
    `<span class="field__err" id="${id}-err" aria-live="polite"></span></div>`;

  return raw(
    '<form class="form form--compact" data-form method="POST" ' +
      `action="${esc(site.form.endpoint)}" aria-label="${esc(heading)}">` +
      `<input type="hidden" name="access_key" value="${esc(site.form.accessKey)}">` +
      `<input type="hidden" name="subject" value="${esc(`${topic} enquiry — ${site.name} website`)}">` +
      `<input type="hidden" name="from_name" value="${esc(site.name)} website">` +
      // Not a select. The visitor already chose the topic by reading the page.
      `<input type="hidden" name="topic" value="${esc(topic)}">` +
      '<div class="hp" aria-hidden="true"><label for="q-botcheck">Leave this empty</label>' +
      '<input id="q-botcheck" type="text" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true"></div>' +
      '<div class="field--pair">' +
      f('q-name', 'Name',
        '<input id="q-name" type="text" name="name" required autocomplete="name" ' +
        'maxlength="120" aria-describedby="q-name-err">') +
      f('q-email', 'Work email',
        '<input id="q-email" type="email" name="email" required autocomplete="email" ' +
        'maxlength="160" aria-describedby="q-email-err">') +
      '</div>' +
      f('q-company', 'Company',
        '<input id="q-company" type="text" name="company" required autocomplete="organization" ' +
        'maxlength="160" aria-describedby="q-company-err">') +
      // Verbatim, not lower-cased: half these topics are acronyms, and
    // "Where are you with cbam?" reads like a typo. Unescaped here too —
    // f() escapes the whole label, and esc() twice gives "&amp;amp;".
    f('q-message', `Where are you with ${topic}?`,
        '<textarea id="q-message" name="message" rows="3" maxlength="4000" ' +
        'aria-describedby="q-message-err"></textarea>', { optional: true }) +
      '<div class="consent">' +
      '<input id="q-consent" type="checkbox" name="consent" value="yes" required ' +
      'aria-describedby="q-consent-err">' +
      `<div><label for="q-consent">I agree to ${esc(site.name)} storing these details in ` +
      `order to respond to my enquiry. See the <a href="${url('/privacy.html')}">privacy policy</a>.</label>` +
      '<span class="field__err" id="q-consent-err" aria-live="polite"></span></div></div>' +
      (note ? `<p class="form__note">${esc(note)}</p>` : '') +
      '<div class="btns"><button class="btn btn--gold" type="submit" data-magnetic>' +
      `<span class="btn__label">Send enquiry</span><span class="btn__arrow">${ARROW}</span>` +
      '</button></div>' +
      '<p class="form__status" data-form-status role="status" tabindex="-1" hidden></p>' +
      '</form>'
  );
}

/**
 * closeCta with the buttons replaced by the form itself.
 *
 * A service page used to end by asking the reader to click through to a
 * generic contact page and restate what they had just spent ten minutes
 * reading about. The page it closes is the context; the form belongs on it.
 */
export function closeForm(data, { topic, note = '' } = {}) {
  return raw(
    '<section class="close close--form" id="enquire">' +
      `<div class="close__bg" data-parallax="0.07">${str(
        picture(data.photo, { alt: '', decorative: true, sizes: '100vw', className: 'ph--free' })
      )}</div>` +
      '<div class="scrim scrim--hero" aria-hidden="true"></div>' +
      '<div class="close__inner close__inner--split">' +
      '<div class="close__say">' +
      `<h2 class="close__h kinetic">${str(kinetic(data.headline))}</h2>` +
      `<p class="close__b reveal">${esc(data.body)}</p>` +
      '<ul class="close__facts reveal">' +
      `<li><span>Email</span><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></li>` +
      `<li><span>Phone</span><a href="tel:${esc(site.phoneHref)}">${esc(site.phone)}</a></li>` +
      '<li><span>Reply</span><span>Within one business day</span></li>' +
      '</ul></div>' +
      `<div class="close__form reveal">${str(compactForm({ topic, note }))}</div>` +
      '</div></section>'
  );
}

export function rail() {
  return raw('<nav class="rail" data-rail aria-label="Page chapters"></nav>');
}

export { ARROW };

/** A single-line contextual CTA, for the long gaps between hero and footer. */
export function inlineCta(text, label, href, { tone = '' } = {}) {
  return raw(
    `<aside class="icta ${esc(tone)} reveal">` +
      `<p class="icta__t">${str(md(text))}</p>` +
      `<a class="icta__a" href="${url(href)}">${esc(label)}` +
      `<span class="btn__arrow">${ARROW}</span></a></aside>`
  );
}

/**
 * The origination-to-supply pipeline as a scroll-drawn instrument: a rail
 * fills across the four stages as the section is read, and each stage's badge
 * ignites as the rail reaches it. Degrades to a plain card grid with the rail
 * fully drawn when JavaScript or motion is unavailable.
 */
export function stages(list) {
  const cards = list
    .map(
      (st, i) =>
        `<div class="stage reveal" data-stage style="--si:${i}">` +
        '<div class="stage__h">' +
        `<span class="stage__n" aria-hidden="true">${esc(st.n)}</span>` +
        `<h3 class="stage__t">${esc(st.title)}</h3></div>` +
        `<ul class="stage__list">${st.steps
          .map((t) => `<li><b>${esc(t.title)}</b><span>${esc(t.body)}</span></li>`)
          .join('')}</ul></div>`
    )
    .join('');
  return raw(
    '<div class="stages" data-stages>' +
      '<div class="stages__rail" aria-hidden="true"><i></i></div>' +
      `<div class="stages__grid">${cards}</div>` +
      '</div>'
  );
}

/**
 * The Insights library: a filter row over a reverse-chronological list.
 *
 * The filter is progressive enhancement — every article is in the DOM and
 * visible before any script runs, so a crawler, a reader-mode view and a
 * no-JS visitor all get the complete list. `data-topic` is what the script
 * filters on; the counts are rendered server-side so they are never wrong.
 */
export function insightList(articles, categories) {
  const chips =
    '<div class="ilist__filter" data-insight-filter role="group" aria-label="Filter by topic">' +
    `<button type="button" class="chip is-on" data-topic="all" aria-pressed="true">All<span>${articles.length}</span></button>` +
    categories
      .map(
        (c) =>
          `<button type="button" class="chip" data-topic="${esc(c.id)}" aria-pressed="false">` +
          `${esc(c.name)}<span>${c.count}</span></button>`
      )
      .join('') +
    '</div>';

  const status =
    '<p class="ilist__status" data-insight-status role="status" aria-live="polite">' +
    `Showing all ${articles.length} articles.</p>`;

  const items = articles
    .map((a) => {
      const id = a.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const href = url(`/${a.slug}.html`);
      const when = new Date(a.published + 'T00:00:00Z').toLocaleDateString('en-GB', {
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      });
      return (
        `<li class="ins reveal" data-topic="${esc(id)}">` +
        '<div class="ins__meta">' +
        `<span class="ins__cat">${esc(a.category)}</span>` +
        `<time datetime="${esc(a.published)}">${esc(when)}</time>` +
        `<span class="ins__read">${a.minutes} min read</span>` +
        '</div>' +
        '<h3 class="ins__t">' +
        `<a href="${href}">${esc(a.title)}</a></h3>` +
        `<p class="ins__b">${esc(a.blurb)}</p>` +
        `<a class="ins__rel" href="${url(a.related)}">The service behind it ${ARROW}</a>` +
        '</li>'
      );
    })
    .join('');

  return raw(
    `<div class="ilist">${chips}${status}` +
      `<ol class="ilist__items" data-insight-items aria-label="Articles">${items}</ol>` +
      '<p class="ilist__none" data-insight-empty hidden>No articles in that topic.</p>' +
      '</div>'
  );
}
