import { site, nav, footerNav, companyNav, primaryCta, megaMenus } from '../data/site.mjs';
import { groups, servicesInGroup } from '../data/services.mjs';
import { esc, html, raw, join } from './html.mjs';
import { url, absolute } from './paths.mjs';
import { preloadFor } from './media.mjs';

const YEAR = new Date().getFullYear();

/** The brand lockup, inlined so it can be tinted and animated with CSS. */
export function lockup({ className = '', title = site.wordmark } = {}) {
  return raw(`<svg class="lockup ${esc(className)}" viewBox="0 0 453 250" fill="currentColor"
    fill-rule="evenodd" role="img" aria-label="${esc(title)}" focusable="false">
    <g class="lockup__mark"><g transform="translate(130 131.5)">
      ${[120, 165, 210, 255, 300]
        .map(
          (d, i) =>
            // The rotation lives on a wrapper <g> because a CSS transform on the
            // rect itself would replace the rotate() attribute, not compose with it.
            `<g transform="rotate(${d})"><rect class="lockup__ray" style="--i:${i}" x="36" y="-6.75" width="98" height="13.5" rx="1"/></g>`
        )
        .join('')}
      <circle class="lockup__ring" r="22" fill="none" stroke="currentColor" stroke-width="8"/>
    </g></g>
    <use href="#oe-word" class="lockup__word"/>
  </svg>`);
}

/**
 * The lockup needs the traced wordmark path, which is too long to repeat in
 * every page. It is injected once per document as a hidden SVG symbol.
 */
export function lockupDefs(wordPath) {
  // External `<use href="file.svg#id">` is blocked by browsers, so the traced
  // wordmark is inlined once per document and referenced locally.
  return (
    `<svg class="u-hidden" aria-hidden="true" focusable="false" width="0" height="0">` +
      `<defs><g id="oe-word"><path d="${wordPath}"/></g></defs></svg>`
  );
}

function organisationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${absolute('/')}#organization`,
    name: site.name,
    alternateName: site.wordmark,
    url: absolute('/'),
    logo: absolute('/assets/brand/favicon-512.png'),
    description: site.description,
    email: site.email,
    telephone: site.phone,
    sameAs: [site.linkedin],
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
    areaServed: ['IN', 'EU', 'Global'],
  };
}

function breadcrumbJsonLd(page) {
  if (page.path === '/' || page.path === '/404.html') return null;
  if (!page.breadcrumb) page.breadcrumb = [];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { name: 'Home', href: '/' },
      ...page.breadcrumb,
      { name: page.shortTitle || page.title, href: page.path },
    ].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absolute(c.href),
    })),
  };
}

function faqJsonLd(page) {
  const faqs = page.faqs || [];
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

function serviceJsonLd(page) {
  if (!page.service) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.service.name || page.shortTitle || page.title,
    serviceType: page.service.type || page.shortTitle,
    description: page.description,
    provider: { '@id': `${absolute('/')}#organization` },
    areaServed: ['India', 'European Union', 'Global'],
    url: absolute(page.path),
  };
}

function siteNavJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: nav.map((n) => n.label),
    url: nav.map((n) => absolute(n.href)),
  };
}

function megaPanel(kind) {
  const columns =
    kind === 'esg'
      ? groups.map((g) => ({
          title: g.title,
          links: servicesInGroup(g.id).map((sv) => ({
            label: sv.shortTitle || sv.title,
            href: sv.path,
          })),
        }))
      : megaMenus[kind] || [];

  const cols = columns
    .map(
      (c) =>
        `<div class="mega__col"><p class="mega__t">${esc(c.title)}</p><ul>` +
        c.links.map((l) => `<li><a href="${url(l.href)}">${esc(l.label)}</a></li>`).join('') +
        '</ul></div>'
    )
    .join('');

  return `<div class="mega" id="mega-${esc(kind)}" data-mega hidden>` +
    `<div class="mega__inner">${cols}</div></div>`;
}

function header(page) {
  const items = nav
    .map((item) => {
      const active =
        page.path === item.href || (page.parent && page.parent === item.href);
      const cls = `nav__link${active ? ' is-current' : ''}`;
      if (item.mega) {
        // A real disclosure button, so keyboard and screen-reader users get the
        // same path to CBAM that a mouse user gets by hovering.
        return (
          `<span class="nav__has-mega" data-mega-wrap>` +
            `<a class="${cls}" href="${url(item.href)}"${active ? ' aria-current="page"' : ''}>` +
            `${esc(item.label)}</a>` +
            '<button class="nav__disc" type="button" data-mega-toggle aria-expanded="false" ' +
            `aria-controls="mega-${item.mega}" aria-label="Show everything under ${esc(item.label)}">` +
            '<svg width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true">' +
            '<path d="M1 1.5 5 5.5 9 1.5" stroke="currentColor" stroke-width="1.4" ' +
            'stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
            megaPanel(item.mega) +
          '</span>'
        );
      }
      return `<a class="${cls}" href="${url(item.href)}"${
        active ? ' aria-current="page"' : ''
      }>${esc(item.label)}</a>`;
    })
    .join('');

  // On the contact page the prominent CTA must not reload the page the visitor
  // is already on — send them to the form instead.
  const onContact = page.path === '/contact.html';
  const ctaHref = onContact ? '#enquiry' : primaryCta.href;
  const ctaLabel = onContact ? 'Go to the form' : primaryCta.label;

  const mobileGroups = groups
    .map(
      (g, i) =>
        `<div class="menu__group"><button class="menu__gt" type="button" data-acc ` +
        `aria-expanded="false" aria-controls="mg-${i}">${esc(g.title)}` +
        '<span class="menu__gi" aria-hidden="true"></span></button>' +
        `<div class="menu__gp" id="mg-${i}"><ul>` +
        servicesInGroup(g.id)
          .map((sv) => `<li><a href="${url(sv.path)}">${esc(sv.shortTitle || sv.title)}</a></li>`)
          .join('') +
        '</ul></div></div>'
    )
    .join('');

  return html`
    <div class="progress" aria-hidden="true"><i class="progress__bar"></i></div>
    <header class="nav" data-nav>
      <div class="nav__inner">
        <a class="nav__brand" href="${raw(url('/'))}" aria-label="${site.name} — home">
          ${lockup({ className: 'lockup--nav' })}
        </a>
        <nav class="nav__links" aria-label="Primary">${raw(items)}</nav>
        <a class="btn btn--gold nav__cta" href="${raw(url(ctaHref))}">${ctaLabel}</a>
        <button class="nav__toggle" type="button" data-menu-toggle aria-expanded="false"
          aria-controls="site-menu" aria-label="Open menu">
          <span class="nav__bars" aria-hidden="true"><i></i><i></i></span>
        </button>
      </div>
    </header>
    <div class="menu" id="site-menu" data-menu hidden>
      <div class="menu__inner">
        <nav class="menu__primary" aria-label="Primary, mobile">
          ${join(
            // Every primary destination, including the two that carry a
            // desktop disclosure — filtering on `mega` silently dropped
            // Carbon Supply from this menu. No "Home": the logo is the way back.
            nav.map((i) => `<a class="menu__big" href="${url(i.href)}">${esc(i.label)}</a>`)
          )}
        </nav>
        <div class="menu__groups">${raw(mobileGroups)}</div>
        <div class="menu__foot">
          <a class="btn btn--gold" href="${raw(url(ctaHref))}">${ctaLabel}</a>
          <a class="tlink" href="${raw(url('/sources.html'))}">Sources &amp; data</a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Mobile only. The header CTA retracts on scroll-down — exactly during the
 * reading that should be interruptible — so small screens get a persistent
 * one past a quarter of the page.
 */
function stickyCta(page) {
  if (page.path === '/contact.html') return '';
  return (
    '<aside class="sticky" data-sticky aria-label="Quick contact" hidden>' +
      `<a class="sticky__a" href="${url(primaryCta.href)}">${esc(primaryCta.label)}</a>` +
      `<a class="sticky__e" href="mailto:${esc(site.email)}">or email</a>` +
      '<button class="sticky__x" type="button" data-sticky-close aria-label="Hide quick contact">' +
      '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">' +
      '<path d="M1 1l11 11M12 1L1 12" stroke="currentColor" stroke-width="1.5" ' +
      'stroke-linecap="round"/></svg></button>' +
    '</aside>'
  );
}

function footer() {
  const cols = footerNav
    .map(
      (col) =>
        `<div class="fcol"><h2 class="fcol__t">${esc(col.title)}</h2><ul class="fcol__l">${col.links
          .map((l) => `<li><a href="${url(l.href)}">${esc(l.label)}</a></li>`)
          .join('')}</ul></div>`
    )
    .join('');

  return html`
    <footer class="footer">
      <div class="footer__wrap">

        <div class="fcta">
          <div>
            <p class="label">Speak to a specialist</p>
            <p class="fcta__h">A senior advisor, not a form queue.</p>
          </div>
          <ul class="fcta__list">
            <li><span>Email</span><a href="mailto:${site.email}">${site.email}</a></li>
            <li><span>Phone</span><a href="tel:${site.phoneHref}">${site.phone}</a></li>
            <li><span>Reply</span><span class="fcta__v">Within one business day</span></li>
          </ul>
        </div>

        <div class="fmain">
          <div class="fbrand">
            ${lockup({ className: 'lockup--footer' })}
            <p class="fbrand__l">${site.description}</p>
            <!-- Email and phone live once, in the "Speak to a specialist" block
                 above. Repeating them here made the footer read as two separate
                 contact routes when there is only one. -->
            <ul class="fbrand__c">
              <li><a href="${raw(site.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>
            </ul>
            <p class="fbrand__w">${site.locationLong}</p>
            <nav class="fbrand__nav" aria-label="Company">
              ${join(
                companyNav.map(
                  (l) => `<a href="${url(l.href)}">${esc(l.label)}</a>`
                )
              )}
            </nav>
          </div>
          <nav class="fnav" aria-label="Footer">${raw(cols)}</nav>
        </div>

        <div class="fbase">
          <p>© ${raw(YEAR)} ${site.legalName}</p>
          <ul class="fbase__l">
            <li><a href="${raw(url('/privacy.html'))}">Privacy</a></li>
            <li><a href="${raw(url('/terms.html'))}">Terms</a></li>
            <li><a href="${raw(url('/sources.html'))}">Sources</a></li>
          </ul>
        </div>

      </div>
    </footer>
  `;
}

/**
 * Render a complete document.
 * `page` carries metadata; `body` is the already-rendered main content.
 */
export function renderDocument({ page, body, wordPath }) {
  const title = page.metaTitle || `${page.title} | ${site.name}`;
  const canonical = absolute(page.path);
  const social = absolute('/assets/brand/social-card.png');
  const preload = page.preloadPhoto ? preloadFor(page.preloadPhoto) : null;

  const graphs = [
    organisationJsonLd(),
    siteNavJsonLd(),
    breadcrumbJsonLd(page),
    faqJsonLd(page),
    serviceJsonLd(page),
  ].filter(Boolean);

  return `<!doctype html>
<html lang="en-IN" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${esc(canonical)}">
${site.indexable ? '' : '<meta name="robots" content="noindex, nofollow">\n'}<meta name="theme-color" content="${site.colors.ink}">
<meta name="color-scheme" content="dark light">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${esc(social)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${esc(social)}">
<link rel="icon" href="${url('/assets/brand/favicon.svg')}" type="image/svg+xml">
<link rel="icon" href="${url('/assets/brand/favicon-32.png')}" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="${url('/assets/brand/apple-touch-icon.png')}">
<link rel="manifest" href="${url('/site.webmanifest')}">
<link rel="preload" as="font" type="font/woff2" crossorigin
  href="${url('/assets/fonts/schibsted-latin-400700.woff2')}">
<link rel="preload" as="font" type="font/woff2" crossorigin
  href="${url('/assets/fonts/plexmono-latin-400.woff2')}">
${preload ? `<link rel="preload" as="image" type="${preload.type}" href="${preload.href}" imagesrcset="${preload.imagesrcset}" imagesizes="100vw" fetchpriority="high">\n` : ''}<link rel="stylesheet" href="${url('/assets/css/site.css')}">
<script>(function(d){d.className=d.className.replace('no-js','js');/* .js .reveal starts at opacity 0 and waits for app.js to add .is-in. If app.js never boots - blocked, dropped, parse error - every revealed block would stay invisible forever. Fail open instead. */setTimeout(function(){if(!d.dataset.booted)d.classList.add('js-stalled')},2500)})(document.documentElement)</script>
${graphs
  .map((g) => `<script type="application/ld+json">${JSON.stringify(g)}</script>`)
  .join('\n')}
</head>
<body class="${page.bodyClass || ''}" data-page="${esc(page.id)}">
<a class="skip" href="#main">Skip to content</a>
${lockupDefs(wordPath)}
${header(page)}
<main id="main" tabindex="-1">
${body}
</main>
${stickyCta(page)}
${footer()}
<script src="${url('/assets/js/app.js')}" defer></script>
</body>
</html>
`;
}
