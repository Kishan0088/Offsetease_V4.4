/* The page shell: head, header, footer, structured data. */

import { esc, typo, j, btn, arrow, caret, plus } from '../lib/html.mjs';
import { site } from '../data/site.mjs';
import { nav, footerNav, U, clean } from '../data/nav.mjs';

/* ------------------------------------------------------------- header */
function megaPanel(item) {
  const cols = item.columns.map(c => `
    <div>
      <p class="mega__col-title">${typo(c.title)}</p>
      <ul class="mega__list">
        ${c.items.map(i => `<li><a class="mega__a" href="${esc(i.href)}">${typo(i.label)}${i.note ? `<span>${typo(i.note)}</span>` : ''}</a></li>`).join('')}
      </ul>
    </div>`).join('');
  const feature = item.feature ? `
    <div class="mega__feature">
      <div class="stack">
        <p class="mega__col-title" style="color:var(--signal)">Signature</p>
        <p class="h4" style="margin:0">${typo(item.feature.title)}</p>
        <p class="small" style="color:var(--on-dark-dim)">${typo(item.feature.body)}</p>
      </div>
      <a class="link" href="${esc(item.feature.href)}">Read the method${arrow(12)}</a>
    </div>` : '';
  return `<div class="mega" style="--mega-w:${item.width || '58rem'}">
    <div class="mega__grid">${cols}${feature}</div></div>`;
}

function header(current) {
  const items = nav.map((item, i) => {
    const isCurrent = item.href === current ? ' aria-current="page"' : '';
    if (!item.columns) {
      return `<li class="nav__item"><a class="nav__link" href="${esc(item.href)}"${isCurrent}>${typo(item.label)}</a></li>`;
    }
    return `<li class="nav__item" data-open="false">
      <button class="nav__link" type="button" aria-expanded="false" aria-controls="mega-${i}">${typo(item.label)}${caret()}</button>
      <div id="mega-${i}">${megaPanel(item)}</div>
    </li>`;
  }).join('');

  const drawer = nav.map(item => {
    if (!item.columns) {
      return `<div class="drawer__group"><a class="drawer__head" href="${esc(item.href)}">${typo(item.label)}</a></div>`;
    }
    const body = item.columns.map(c => `
      <p class="drawer__sub">${typo(c.title)}</p>
      <ul class="drawer__list">${c.items.map(i => `<li><a href="${esc(i.href)}">${typo(i.label)}</a></li>`).join('')}</ul>`).join('');
    return `<div class="drawer__group" data-open="false">
      <button class="drawer__head" type="button" aria-expanded="false">${typo(item.label)}${plus()}</button>
      <div class="drawer__body"><div class="drawer__inner">${body}</div></div>
    </div>`;
  }).join('');

  return `<header class="nav">
  <div class="nav__in">
    <a class="logo" href="${U.home}" aria-label="${esc(site.name)} — home">${LOGO}</a>
    <span class="nav__spacer"></span>
    <nav aria-label="Primary"><ul class="nav__links" style="list-style:none;margin:0;padding:0">${items}</ul></nav>
    <a class="btn btn--primary nav__cta" href="${U.contact}">Request a briefing${arrow()}</a>
    <button class="nav__toggle" type="button" aria-expanded="false" aria-label="Menu" aria-controls="drawer">
      <span class="nav__burger" aria-hidden="true"><span></span><span></span><span></span></span>
    </button>
  </div>
</header>
<div class="drawer" id="drawer">
  ${drawer}
  <div class="drawer__foot">
    <a class="btn btn--primary" href="${U.contact}">Request a briefing${arrow()}</a>
    <a class="btn btn--ghost" href="${U.faq}">Questions, answered${arrow()}</a>
  </div>
</div>`;
}

/* ------------------------------------------------------------- footer */
function footer() {
  const cols = footerNav.map(c => `
    <div><h5>${typo(c.title)}</h5>
      <div class="foot__cols">${c.items.map(i => `<a href="${esc(i.href)}">${typo(i.label)}</a>`).join('')}</div>
    </div>`).join('');
  return `<footer class="foot">
  <div class="wrap wrap-wide">
    <div class="foot__top">
      <div class="stack">
        <a class="logo" href="${U.home}" aria-label="${esc(site.name)} — home" style="color:var(--white)">${LOGO}</a>
        <p class="small" style="max-width:32ch;margin-top:1.2rem">${typo(site.tagline)} ${typo('We develop high-integrity carbon at its source and deliver it to companies whose claims must hold.')}</p>
        <div class="foot__cols" style="margin-top:1.4rem">
          <a href="mailto:${esc(site.contact.email)}">${esc(site.contact.email)}</a>
          <a href="tel:${esc(site.contact.phoneHref)}">${esc(site.contact.phone)}</a>
          <a href="${esc(site.contact.linkedin)}" rel="noopener">LinkedIn</a>
        </div>
      </div>
      ${cols}
    </div>
    <div class="foot__bar">
      <p>&#169; ${site.buildYear} ${esc(site.legal)}. ${typo('All rights reserved.')}</p>
      <p>${typo(site.contact.location)} &#183; ${typo('Serving ' + site.contact.serving)}</p>
    </div>
  </div>
</footer>`;
}

/* --------------------------------------------------------- structured data */
function jsonld(page) {
  const abs = (u) => site.origin + (u === '/' ? '/' : u);
  const orgId = site.origin + '/#organization';
  const graph = [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: site.name,
      alternateName: site.nameCaps,
      url: site.origin + '/',
      logo: { '@type': 'ImageObject', url: site.origin + '/assets/brand/offsetease-logo.svg' },
      image: site.origin + '/assets/img/og-default.jpg',
      description: 'Offsetease develops high-integrity carbon at its source in emerging markets and delivers verified credits, renewable attributes and ESG advisory to global companies.',
      email: site.contact.email,
      telephone: site.contact.phone,
      sameAs: [site.contact.linkedin],
      address: { '@type': 'PostalAddress', addressCountry: 'IN' },
      areaServed: ['IN', 'EU', 'SG', 'AE', 'CA', 'AU'],
      knowsAbout: ['Carbon credits', 'Carbon project development', 'ESG reporting', 'CBAM', 'Science-based targets']
    },
    {
      '@type': 'WebSite',
      '@id': site.origin + '/#website',
      url: site.origin + '/',
      name: site.name,
      publisher: { '@id': orgId },
      inLanguage: 'en'
    },
    {
      '@type': 'WebPage',
      '@id': abs(page.url) + '#webpage',
      url: abs(page.url),
      name: page.title,
      description: page.description,
      isPartOf: { '@id': site.origin + '/#website' },
      about: { '@id': orgId },
      inLanguage: 'en'
    }
  ];

  if (page.crumbs && page.crumbs.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': abs(page.url) + '#breadcrumb',
      itemListElement: [{ name: 'Home', href: U.home }, ...page.crumbs, { name: page.crumbLabel || page.h1, href: page.file }]
        .map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name || c.label, item: abs(clean(c.href)) }))
    });
  }
  if (page.faq && page.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': abs(page.url) + '#faq',
      mainEntity: page.faq.map(f => ({
        '@type': 'Question', name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    });
  }
  if (page.service) {
    graph.push({
      '@type': 'Service',
      '@id': abs(page.url) + '#service',
      name: page.service.name,
      serviceType: page.service.type,
      description: page.description,
      provider: { '@id': orgId },
      areaServed: site.contact.serving
    });
  }
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

/* ------------------------------------------------------------- shell */
let LOGO = '';
export function setLogo(svg) { LOGO = svg; }

export function renderPage(page, body, { extraHead = '', extraScripts = '' } = {}) {
  const canonical = site.origin + (page.url === '/' ? '/' : page.url);
  const og = site.origin + '/assets/img/' + (page.og || 'og-default.jpg');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.keywords ? `<meta name="keywords" content="${esc(page.keywords.join(', '))}">` : ''}
<link rel="canonical" href="${esc(canonical)}">
<meta name="theme-color" content="#0A3D44">
<meta name="color-scheme" content="light">
<meta name="author" content="${esc(site.name)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${esc(og)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${esc(og)}">
<link rel="icon" href="assets/brand/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/brand/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="assets/brand/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<link rel="preload" href="assets/fonts/inter-var-latin-100-900.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/fonts.css">
<link rel="stylesheet" href="assets/css/site.css">
<script>document.documentElement.classList.add('js')</script>
${jsonld(page)}
${extraHead}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(page.file)}
<main id="main">
${body}
</main>
${footer()}
<svg class="rayprog" viewBox="0 0 46 46" aria-hidden="true">
  <circle cx="23" cy="23" r="20"></circle>
  <circle class="rayprog__arc" cx="23" cy="23" r="20"></circle>
</svg>
<script src="assets/js/app.js" defer></script>
${extraScripts}
</body>
</html>`;
}
