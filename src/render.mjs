// Page renderers. Each returns { page, body } for the document shell.

import { site } from './data/site.mjs';
import { home, supply, eac, esg, about, contact, sources, projects, privacy, terms } from './data/pages.mjs';
import { services, groups, byId, servicesInGroup } from './data/services.mjs';
import { esc, raw, str, md, kinetic } from './lib/html.mjs';
import { url } from './lib/paths.mjs';
import { picture } from './lib/media.mjs';
import {
  hero, section, head, cards, ladder, fiveChecks, story, band, pills, steps,
  faq, closeCta, proof, statStrip, marketStrip, inlineCta, checksSummary,
  btn, rail, sunburst, ARROW,
} from './lib/components.mjs';

/* ---------------------------------------------------------------- HOME -- */

export function renderHome() {
  const d = home;
  const body = [
    str(rail()),
    str(
      hero(d.hero, {
        variant: 'home',
        stats: d.hero.stats,
        statsNote: d.hero.statsNote,
        scrollCue: d.hero.scrollCue,
      })
    ),

    // The market has divided
    str(
      section(
        raw(
          str(
            head({
              eyebrow: d.divided.eyebrow,
              headline: d.divided.headline,
              body: d.divided.body,
              split: true,
            })
          ) +
            '<div class="split reveal">' +
            d.divided.split
              .map(
                (s) =>
                  `<div class="split__side split__side--${s.side} reveal">` +
                  `<span class="split__l">${esc(s.label)}</span>` +
                  `<span class="split__v">${esc(s.value)}</span>` +
                  `<div class="split__bar" style="--w:${s.side === 'high' ? '100%' : '24%'}"><i></i></div>` +
                  `<p class="split__n">${esc(s.note)}</p></div>`
              )
              .join('') +
            '</div>' +
            `<div style="margin-top:clamp(28px,3.4vw,48px)">${str(
              proof(d.divided.proof, d.divided.premium)
            )}</div>` +
            `<div style="margin-top:clamp(26px,3vw,42px)">${str(
              marketStrip(d.divided.marketStats, { title: 'What the market is paying' })
            )}</div>`
        ),
        { tone: 'on-bone', id: 'signal', chapter: d.divided.chapter }
      )
    ),

    // Scrollytelling: what a serious buyer needs
    str(
      section(
        raw(
          str(
            head({
              eyebrow: d.story.eyebrow,
              headline: d.story.headline,
              body: d.story.body,
              split: true,
            })
          ) + str(proof(d.story.proof))
        ),
        { id: 'challenge', chapter: d.story.chapter, className: 'section--tight' }
      )
    ),
    str(story({ ...d.story, chapter: '' }, { id: 'challenge-film' })),

    // Why buyers choose us
    str(
      section(
        raw(
          str(head({ eyebrow: d.why.eyebrow, headline: d.why.headline })) +
            str(cards(d.why.items, { stagger: 90 }))
        ),
        { tone: 'on-deep', id: 'integrity', chapter: d.why.chapter }
      )
    ),

    // The Five Checks — summarised here, applied in full on Carbon supply.
    str(
      section(
        raw(
          str(head({ eyebrow: d.checks.eyebrow, headline: d.checks.headline })) +
            str(checksSummary(d.checks)) +
            str(
              inlineCta(
                'Considering a project already? Send it over and we will run it through all five.',
                'Ask us to screen it',
                '/contact.html'
              )
            )
        ),
        { tone: 'on-bone', id: 'standard', chapter: d.checks.chapter }
      )
    ),

    // What we do
    str(
      section(
        raw(
          str(head({ eyebrow: d.what.eyebrow, headline: d.what.headline })) +
            str(cards(d.what.items, { variant: 'media', stagger: 90 }))
        ),
        { id: 'capability', chapter: d.what.chapter }
      )
    ),

    // Model band
    str(
      band({
        photo: d.method.photo,
        photoAlt: d.method.photoAlt,
        eyebrow: d.method.eyebrow,
        headline: d.method.headline,
        body: d.method.body,
        tone: '',
      })
    ),

    // Impact
    str(
      section(
        raw(
          str(
            head({
              eyebrow: d.impact.eyebrow,
              headline: d.impact.headline,
              body: d.impact.intro,
              split: true,
            })
          ) +
            str(statStrip(d.impact.stats)) +
            '<div class="cols cols--2" style="margin-top:clamp(30px,4vw,58px);align-items:start">' +
            `<div class="reveal"><p class="body-lg">${esc(d.impact.body)}</p>` +
            '<p class="label" style="margin-top:26px">SDGs advanced</p>' +
            `<ul class="pills">${d.impact.sdgs
              .map((s) => `<li>${s.n} · ${esc(s.label)}</li>`)
              .join('')}</ul></div>` +
            `<div class="frame reveal reveal--scale">${str(
              picture(d.impact.photo, {
                alt: d.impact.photoAlt,
                sizes: '(max-width: 900px) 100vw, 48vw',
                ratio: '4 / 3',
                className: 'ph--zoom',
              })
            )}</div>` +
            '</div>' +
            `<div style="margin-top:clamp(28px,3.4vw,48px)">${str(proof(d.impact.proof))}</div>` +
            str(
              inlineCta(
                'Want the detail behind these numbers — standard, methodology, verifier and registry record?',
                'Ask for the project file',
                '/contact.html'
              )
            )
        ),
        { tone: 'on-deep', id: 'impact', chapter: d.impact.chapter }
      )
    ),

    str(closeCta(d.close)),
  ].join('\n');

  return { page: { ...d, bodyClass: 'page-home' }, body };
}

/* -------------------------------------------------------- CARBON SUPPLY -- */

export function renderSupply() {
  const d = supply;
  const stageBlocks = d.pipeline.stages
    .map(
      (s) =>
        `<div class="stage reveal"><div class="stage__h"><span class="stage__n">${esc(s.n)}</span>` +
        `<h3 class="stage__t">${esc(s.title)}</h3></div>` +
        `<ul class="stage__list">${s.steps
          .map(
            (t) =>
              `<li><b>${esc(t.title)}</b><span>${esc(t.body)}</span></li>`
          )
          .join('')}</ul></div>`
    )
    .join('');

  const body = [
    str(rail()),
    str(hero(d.hero, { crumbs: [{ name: 'Carbon supply', href: d.path }] })),

    str(
      section(
        raw(
          str(head({ eyebrow: d.ways.eyebrow, headline: d.ways.headline })) +
            str(cards(d.ways.items, { stagger: 90 })) +
            `<div style="margin-top:clamp(28px,3.4vw,48px)">${str(
              proof(d.ways.proof, d.ways.proofFigure)
            )}</div>`
        ),
        { tone: 'on-bone', id: 'ways', chapter: 'Engage' }
      )
    ),

    str(
      section(
        raw(
          str(head({ eyebrow: d.types.eyebrow, headline: d.types.headline })) +
            str(cards(d.types.items, { variant: 'media', stagger: 90 })) +
            `<div style="margin-top:clamp(28px,3.4vw,48px)">${str(
              proof(d.types.proof, d.types.proofFigure)
            )}</div>`
        ),
        { id: 'supply-types', chapter: 'Supply' }
      )
    ),

    str(
      section(
        raw(
          str(
            head({
              eyebrow: 'Where the supply comes from',
              headline: 'We develop the projects we sell from.',
              body: d.pipeline.standfirst,
              split: true,
            })
          ) +
            `<div class="stages">${d.pipeline.stages
              .map(
                (st) =>
                  `<div class="stage reveal"><div class="stage__h">` +
                  `<span class="stage__n">${esc(st.n)}</span>` +
                  `<h3 class="stage__t">${esc(st.title)}</h3></div>` +
                  `<p class="stage__sum">${esc(st.steps.map((t) => t.title).join(' · '))}</p></div>`
              )
              .join('')}</div>` +
            str(
              inlineCta(
                'The full pipeline — feasibility, PDD, validation, registration, MRV and benefit sharing — is set out on the projects page.',
                'How we develop projects',
                '/carbon-projects.html'
              )
            ) +
            `<div style="margin-top:clamp(28px,3.4vw,48px)">${str(proof(d.pipeline.proof))}</div>`
        ),
        { tone: 'on-deep', id: 'pipeline', chapter: 'Pipeline' }
      )
    ),

    str(
      band({
        photo: d.pipeline.photo,
        photoAlt: d.pipeline.photoAlt,
        eyebrow: 'Traceable to the ground',
        headline: 'The credits you buy trace back to the land and the people who made them.',
      })
    ),

    str(
      section(
        raw(
          str(head({ eyebrow: d.standards.eyebrow, headline: d.standards.headline })) +
            '<div class="cols cols--2" style="gap:clamp(26px,3.4vw,52px);align-items:start">' +
            '<div class="reveal">' +
            `<p class="std__note">${esc(d.standards.registriesNote)}</p>` +
            str(pills('', d.standards.registries)) +
            '</div>' +
            '<div class="reveal">' +
            `<p class="std__note">${esc(d.standards.frameworksNote)}</p>` +
            `<dl class="fw">${d.standards.frameworks
              .map(
                (f) =>
                  `<dt class="fw__t">${esc(f.name)}</dt><dd class="fw__d">${esc(f.how)}</dd>`
              )
              .join('')}</dl>` +
            '</div></div>'
        ),
        { tone: 'on-bone', id: 'standards', chapter: 'Standards' }
      )
    ),

    str(
      section(raw(str(fiveChecksTeaser())), { id: 'five-checks', chapter: 'Checks' })
    ),

    str(closeCta(d.close, { secondary: { label: 'Certificates', href: '/energy-attribute-certificates.html' } })),
  ].join('\n');

  return { page: d, body };
}

function fiveChecksTeaser() {
  return raw(
    str(
      head({
        eyebrow: home.checks.eyebrow,
        headline: home.checks.headline,
      })
    ) + str(fiveChecks(home.checks))
  );
}

/* ----------------------------------------------------------------- EAC -- */

export function renderEac() {
  const d = eac;
  const body = [
    str(rail()),
    str(hero(d.hero, { crumbs: [{ name: 'Certificates', href: d.path }] })),

    str(
      section(
        raw(
          str(head({ eyebrow: d.deliver.eyebrow, headline: d.deliver.headline })) +
            str(ladder(d.deliver.items.map((i) => ({ n: i.n, title: i.title, body: i.body })))) +
            `<div style="margin-top:clamp(28px,3.4vw,48px)">${str(
              proof(d.deliver.proof, d.deliver.proofFigure)
            )}</div>`
        ),
        { tone: 'on-bone', id: 'deliver', chapter: 'Deliver' }
      )
    ),

    str(
      section(
        raw(
          str(head({ eyebrow: d.how.eyebrow, headline: d.how.headline, body: d.how.body, split: true })) +
            '<div class="cols cols--2" style="align-items:start;gap:clamp(26px,3.4vw,52px)">' +
            `<div class="frame reveal reveal--scale">${str(
              picture(d.how.photo, {
                alt: d.how.photoAlt,
                sizes: '(max-width: 900px) 100vw, 48vw',
                ratio: '4 / 3',
                className: 'ph--zoom',
              })
            )}</div>` +
            '<div>' +
            '<p class="label">The four credibility tests</p>' +
            `<div class="ladder">${d.how.tests
              .map(
                (t, i) =>
                  `<div class="ladder__row"><div class="ladder__n">0${i + 1}</div><div>` +
                  `<h3 class="ladder__t">${esc(t.title)}</h3>` +
                  `<p class="ladder__b">${esc(t.body)}</p></div></div>`
              )
              .join('')}</div>` +
            `<p class="body-lg reveal" style="margin-top:22px">${esc(d.how.testsClose)}</p>` +
            '</div></div>' +
            `<div style="margin-top:clamp(28px,3.4vw,48px)">${str(
              proof(d.how.proof, d.how.proofFigure)
            )}</div>`
        ),
        { id: 'how', chapter: 'Mechanics' }
      )
    ),

    str(
      section(raw(str(faq(d.faqs))), {
        tone: 'on-bone',
        id: 'faq',
        chapter: 'Questions',
        wrap: 'wrap wrap--mid',
      })
    ),

    str(closeCta(d.close, { secondary: { label: 'ESG & sustainability', href: '/esg-sustainability.html' } })),
  ].join('\n');

  return { page: d, body };
}

/* ----------------------------------------------------------- ESG (hub) -- */

export function renderEsg() {
  const d = esg;
  const index = groups
    .map((g) => {
      const list = servicesInGroup(g.id);
      return (
        `<div class="svc-group reveal" id="${esc(g.id)}">` +
        '<div class="svc-group__head">' +
        `<h3 class="svc-group__t">${esc(g.title)}</h3>` +
        `<p class="svc-group__b">${esc(g.blurb)}</p></div>` +
        str(
          cards(
            list.map((s) => ({
              n: s.number,
              title: s.shortTitle || s.title,
              body: s.kicker,
              href: s.path,
              cta: 'Read more',
            })),
            { stagger: 60 }
          )
        ) +
        '</div>'
      );
    })
    .join('');

  const body = [
    str(rail()),
    str(hero(d.hero, { crumbs: [{ name: 'ESG & sustainability', href: d.path }] })),

    str(
      section(
        raw(
          str(
            head({
              eyebrow: d.overview.eyebrow,
              headline: d.overview.headline,
              body: 'Each service below is its own in-depth page — what it is, why it matters, how we do it, the standards it answers to, and the questions clients actually ask.',
              split: true,
            })
          ) + str(proof(d.overview.proof, d.overview.proofFigure))
        ),
        { tone: 'on-deep', id: 'overview', chapter: 'Overview' }
      )
    ),

    str(
      section(
        raw(
          index +
            str(
              inlineCta(
                'Not sure which of these applies to you? Tell us which regulator or buyer is asking, and we will tell you.',
                'Ask which ones apply',
                '/contact.html'
              )
            )
        ),
        { tone: 'on-bone', id: 'services', chapter: 'Services' }
      )
    ),

    str(
      band({
        photo: 'molten-steel',
        photoAlt: 'Molten steel pouring on a foundry floor',
        eyebrow: 'Built once, used everywhere',
        headline: 'Build to the strictest framework you face, and the rest map across.',
        body: 'A GHG inventory built properly serves IFRS S2, BRSR, CDP and SBTi at once. That is the whole economics of doing it well the first time.',
      })
    ),

    str(closeCta(d.close, { secondary: { label: 'Carbon supply', href: '/carbon-supply.html' } })),
  ].join('\n');

  return { page: d, body };
}

/* --------------------------------------------------------------- ABOUT -- */

export function renderAbout() {
  const d = about;
  const body = [
    str(rail()),
    str(hero(d.hero, { crumbs: [{ name: 'About', href: d.path }] })),

    str(
      section(
        raw(
          str(head({ eyebrow: d.team.eyebrow, headline: d.team.headline, body: d.team.body, split: true })) +
            `<p class="label">${esc(d.team.intro)}</p>` +
            str(ladder(d.team.items.map((i, n) => ({ n: `0${n + 1}`, title: i.title, body: i.body }))))
        ),
        { tone: 'on-bone', id: 'team', chapter: 'Team' }
      )
    ),

    str(
      section(
        raw(
          str(head({ eyebrow: d.stand.eyebrow, headline: d.stand.headline })) +
            str(cards(d.stand.items, { stagger: 80 })) +
            `<div style="margin-top:clamp(28px,3.4vw,48px)">${str(proof(d.stand.proof))}</div>`
        ),
        { id: 'values', chapter: 'Standard' }
      )
    ),

    str(
      section(
        raw(
          str(head({ eyebrow: d.where.eyebrow, headline: d.where.headline, body: d.where.body, split: true })) +
            str(marketStrip(d.where.marketStats, { title: 'India, as a market' })) +
            `<div style="margin-top:clamp(28px,3.4vw,48px)">${str(proof(d.where.proof))}</div>`
        ),
        { tone: 'on-deep', id: 'where', chapter: 'Reach' }
      )
    ),

    str(
      band({
        photo: d.where.photo,
        photoAlt: d.where.photoAlt,
        eyebrow: 'On the ground',
        headline: 'Rooted in India. Developing projects where the impact happens.',
      })
    ),

    str(closeCta(d.close, { secondary: { label: 'What we supply', href: '/carbon-supply.html' } })),
  ].join('\n');

  return { page: d, body };
}

/* ------------------------------------------------------------- CONTACT -- */

export function renderContact() {
  const d = contact;
  const options = d.topics
    .map((t) => `<option value="${esc(t)}">${esc(t)}</option>`)
    .join('');

  const form =
    `<form class="form" data-form method="POST" action="${esc(site.form.endpoint)}" ` +
    `data-access-key="${esc(site.form.accessKey)}" novalidate>` +
    `<input type="hidden" name="subject" value="${esc(site.form.subject)}">` +
    `<input type="hidden" name="from_name" value="${esc(site.name)} website">` +
    '<div class="hp" aria-hidden="true"><label>Leave this empty' +
    '<input type="text" name="botcheck" tabindex="-1" autocomplete="off"></label></div>' +
    '<div class="field--pair">' +
    '<label class="field"><span>Name <i class="req">*</i></span>' +
    '<input type="text" name="name" required autocomplete="name" maxlength="120">' +
    '<span class="field__err" aria-live="polite"></span></label>' +
    '<label class="field"><span>Work email <i class="req">*</i></span>' +
    '<input type="email" name="email" required autocomplete="email" maxlength="160">' +
    '<span class="field__err" aria-live="polite"></span></label>' +
    '</div>' +
    '<div class="field--pair">' +
    '<label class="field"><span>Company <i class="req">*</i></span>' +
    '<input type="text" name="company" required autocomplete="organization" maxlength="160">' +
    '<span class="field__err" aria-live="polite"></span></label>' +
    '<label class="field"><span>What can we help with? <i class="req">*</i></span>' +
    `<select name="topic" required><option value="" disabled selected>Choose one</option>${options}</select>` +
    '<span class="field__err" aria-live="polite"></span></label>' +
    '</div>' +
    '<label class="field"><span>Message <em>(optional)</em></span>' +
    '<textarea name="message" rows="5" maxlength="4000"></textarea>' +
    '<span class="field__err" aria-live="polite"></span></label>' +
    '<label class="consent"><input type="checkbox" name="consent" value="yes" required>' +
    `<span>I agree to ${esc(site.name)} storing these details in order to respond to my ` +
    `enquiry. See the <a href="${url('/privacy.html')}">privacy policy</a>.` +
    '<span class="field__err" aria-live="polite"></span></span></label>' +
    `<p class="form__note">${esc(d.assurance)} ${esc(site.responsePromise)}</p>` +
    '<div class="btns"><button class="btn btn--gold" type="submit" data-magnetic>Send enquiry' +
    `<span class="btn__arrow">${ARROW}</span></button></div>` +
    '<p class="form__status" data-form-status role="status" tabindex="-1" hidden></p>' +
    '</form>';

  const details =
    '<div class="contacts">' +
    `<a href="mailto:${esc(site.email)}"><span class="k">Email</span><span class="v">${esc(site.email)}</span></a>` +
    `<a href="tel:${esc(site.phoneHref)}"><span class="k">Phone</span><span class="v">${esc(site.phone)}</span></a>` +
    `<a href="${esc(site.linkedin)}" rel="noopener"><span class="k">LinkedIn</span>` +
    '<span class="v">linkedin.com/company/offsetease</span></a>' +
    `<div><span class="k">Where</span><span class="v">${esc(site.locationLong)}</span></div>` +
    '</div>';

  const body = [
    // A short hero on this page only: the visitor arrived to do one thing, and
    // a full-viewport photograph between them and the Name field is a tax.
    str(hero(d.hero, { crumbs: [{ name: 'Contact', href: d.path }], variant: 'compact' })),
    str(
      section(
        raw(
          '<div class="contact-grid">' +
            `<div class="reveal"><h2 class="h3" style="margin-bottom:22px">Send an enquiry</h2>${form}</div>` +
            '<div class="reveal">' +
            '<h2 class="label">How to reach us</h2>' +
            details +
            `<div class="frame" style="margin-top:clamp(26px,3.4vw,42px)">${str(
              picture('forest-water', {
                alt: 'Aerial view of forest meeting open water',
                sizes: '(max-width: 900px) 100vw, 40vw',
                ratio: '4 / 3',
                className: 'ph--zoom',
              })
            )}</div>` +
            '</div>' +
            '</div>'
        ),
        { tone: 'on-bone', id: 'enquiry' }
      )
    ),
  ].join('\n');

  return { page: d, body };
}

/* ------------------------------------------------------------- SOURCES -- */

export function renderSources() {
  const d = sources;
  const list = d.items
    .map(
      (s) =>
        `<li id="src-${s.n}"><span class="sources__n">${String(s.n).padStart(2, '0')}</span><div>` +
        `<p class="sources__t"><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(
          s.name
        )}<span class="sources__ext" aria-hidden="true">↗</span>` +
        '<span class="sr"> (opens in a new tab)</span></a></p>' +
        `<p class="sources__d">${esc(s.detail)}</p>` +
        `<p class="sources__v">${esc(s.via)}</p></div></li>`
    )
    .join('');

  const body = [
    str(
      section(
        raw(
          str(breadcrumb_([{ name: 'Sources & data', href: d.path }])) +
            '<p class="label">Sources &amp; data</p>' +
            `<h1 class="h1 kinetic">${str(kinetic('Every figure on this site, with its source.'))}</h1>` +
            `<p class="lede reveal" style="margin-top:24px">${esc(d.intro)}</p>` +
            `<p class="form__note reveal" style="margin-top:18px">Compiled ${esc(
              site.lastReviewed
            )}. Figures are refreshed quarterly.</p>`
        ),
        { id: 'sources-intro', className: 'section--tight', wrap: 'wrap wrap--mid' }
      )
    ),
    str(
      section(raw(`<ol class="sources">${list}</ol>`), {
        tone: 'on-bone',
        wrap: 'wrap wrap--mid',
      })
    ),
  ].join('\n');

  return { page: d, body };
}

// local alias so renderSources can use the breadcrumb component
function breadcrumb_(items) {
  const li = items
    .map((c) => `<li><span aria-current="page">${esc(c.name)}</span></li>`)
    .join('');
  return raw(`<ol class="crumb"><li><a href="${url('/')}">Home</a></li>${li}</ol>`);
}

/* ------------------------------------------------------ SERVICE DETAIL -- */

export function renderService(s) {
  const group = groups.find((g) => g.id === s.group);
  const related = (s.related || [])
    .map((id) => byId[id])
    .filter(Boolean)
    .map((r) => ({
      n: r.number,
      title: r.shortTitle || r.title,
      body: r.kicker,
      href: r.path,
      cta: 'Read more',
    }));

  const page = {
    id: s.id,
    path: s.path,
    title: s.title,
    shortTitle: s.shortTitle || s.title,
    metaTitle: s.metaTitle,
    description: s.description,
    parent: esg.path,
    preloadPhoto: s.photo,
    faqs: s.faqs,
    service: { name: s.title, type: group ? group.title : 'ESG & sustainability' },
    breadcrumb: [{ name: 'ESG & sustainability', href: esg.path }],
  };

  const heroData = {
    eyebrow: `${group ? group.title : 'ESG'} · ${s.number}`,
    headline: s.title,
    standfirst: s.kicker,
    photo: s.photo,
    photoAlt: s.photoAlt,
    primary: { label: 'Talk to us', href: '/contact.html' },
    secondary: { label: 'All ESG services', href: esg.path },
  };

  const body = [
    str(rail()),
    str(
      hero(heroData, {
        crumbs: [
          { name: 'ESG & sustainability', href: esg.path },
          { name: s.shortTitle || s.title, href: s.path },
        ],
      })
    ),

    str(
      section(
        raw(
          '<div class="cols cols--2" style="align-items:start;gap:clamp(30px,4.4vw,72px)">' +
            `<div><p class="label">What it is</p><p class="body-lg reveal">${str(md(s.whatItIs))}</p></div>` +
            `<div><p class="label">Why it matters</p><p class="body-lg reveal">${str(
              md(s.whyItMatters)
            )}</p></div>` +
            '</div>' +
            (s.proof
              ? `<div style="margin-top:clamp(28px,3.4vw,48px)">${str(
                  proof(s.proof, s.proofFigure)
                )}</div>`
              : '')
        ),
        { tone: 'on-bone', id: 'what', chapter: 'Definition' }
      )
    ),

    str(
      section(
        raw(
          str(
            head({
              eyebrow: 'What & how we do it',
              headline: 'The work, in the order we do it.',
            })
          ) +
            '<div class="cols cols--2" style="align-items:start;gap:clamp(28px,4vw,64px)">' +
            `<div class="reveal">${str(steps(s.approach))}</div>` +
            `<div class="reveal">${str(pills('Standards & frameworks', s.standards))}` +
            `<div class="frame" style="margin-top:26px">${str(
              picture(s.photo, {
                alt: '',
                decorative: true,
                sizes: '(max-width: 900px) 100vw, 46vw',
                ratio: '3 / 2',
                className: 'ph--zoom',
              })
            )}</div></div>` +
            '</div>'
        ),
        { tone: 'on-deep', id: 'approach', chapter: 'Method' }
      )
    ),

    s.faqs && s.faqs.length
      ? str(
          section(raw(str(faq(s.faqs))), {
            id: 'faq',
            chapter: 'Questions',
            wrap: 'wrap wrap--mid',
            className: 'section--tight',
          })
        )
      : '',

    related.length
      ? str(
          section(
            raw(
              str(head({ eyebrow: 'Related services', headline: 'What usually comes with this.' })) +
                str(cards(related, { stagger: 70 }))
            ),
            { tone: 'on-bone', id: 'related', chapter: 'Related' }
          )
        )
      : '',

    str(
      closeCta(
        {
          headline: s.cta,
          // A closing line specific to this service, not the same promise on
          // all eighteen pages.
          body: s.closeBody || 'Tell us where you are and we will map the shortest defensible route through it.',
          photo: s.photo,
        },
        { secondary: { label: 'All ESG services', href: esg.path } }
      )
    ),
  ]
    .filter(Boolean)
    .join('\n');

  return { page, body };
}

/* ----------------------------------------------------------------- 404 -- */

export function renderNotFound() {
  const page = {
    id: 'notfound',
    path: '/404.html',
    title: 'Page not found',
    metaTitle: 'Page not found | OffsetEase',
    description: 'That page does not exist. Find carbon supply, certificates, ESG services or contact us.',
  };
  const links = [
    { title: 'Carbon supply', body: 'Spot, portfolio and offtake.', href: '/carbon-supply.html' },
    { title: 'Certificates', body: 'I-RECs and Energy Attribute Certificates.', href: '/energy-attribute-certificates.html' },
    { title: 'ESG & sustainability', body: 'Eighteen in-depth services.', href: '/esg-sustainability.html' },
    { title: 'Contact', body: 'A reply within one business day.', href: '/contact.html' },
  ];
  const body = str(
    section(
      raw(
        '<p class="label">404</p>' +
          `<h1 class="h1 kinetic">${str(kinetic('That page is not here.'))}</h1>` +
          '<p class="lede reveal" style="margin-top:22px">The link may be out of date. These are the places people usually want.</p>' +
          '<h2 class="label" style="margin-top:clamp(32px,4vw,56px)">Where to go next</h2>' +
          `<div>${str(cards(links, { stagger: 70 }))}</div>`
      ),
      { id: 'notfound', className: 'section--tight', wrap: 'wrap wrap--mid' }
    )
  );
  return { page, body };
}


/* -------------------------------------------------- CARBON PROJECTS -- */

export function renderProjects() {
  const d = projects;
  const stageBlocks = supply.pipeline.stages
    .map(
      (st) =>
        `<div class="stage reveal"><div class="stage__h"><span class="stage__n">${esc(st.n)}</span>` +
        `<h3 class="stage__t">${esc(st.title)}</h3></div>` +
        `<ul class="stage__list">${st.steps
          .map((t) => `<li><b>${esc(t.title)}</b><span>${esc(t.body)}</span></li>`)
          .join('')}</ul></div>`
    )
    .join('');

  const impact = home.impact;

  const body = [
    str(rail()),
    str(hero(d.hero, { crumbs: [{ name: 'Carbon projects', href: d.path }] })),

    str(
      section(
        raw(
          str(head({ eyebrow: d.why.eyebrow, headline: d.why.headline, body: d.why.body, split: true }))
        ),
        { tone: 'on-bone', id: 'why', chapter: 'Why' }
      )
    ),

    str(
      section(
        raw(
          str(
            head({
              eyebrow: supply.pipeline.eyebrow,
              headline: supply.pipeline.headline,
              body: supply.pipeline.standfirst,
              split: true,
            })
          ) +
            `<div class="stages">${stageBlocks}</div>` +
            `<div style="margin-top:clamp(28px,3.4vw,48px)">${str(proof(supply.pipeline.proof))}</div>`
        ),
        { id: 'pipeline', chapter: 'Pipeline' }
      )
    ),

    str(
      band({
        photo: supply.pipeline.photo,
        photoAlt: supply.pipeline.photoAlt,
        eyebrow: 'Traceable to the ground',
        headline: 'The credits you buy trace back to the land and the people who made them.',
      })
    ),

    str(
      section(
        raw(
          str(
            head({
              eyebrow: impact.eyebrow,
              headline: impact.headline,
              body: impact.intro,
              split: true,
            })
          ) +
            str(statStrip(impact.stats, { note: 'OffsetEase programme data' })) +
            `<div class="cols cols--2" style="margin-top:clamp(30px,4vw,58px);align-items:start">` +
            `<div class="reveal"><p class="body-lg">${esc(impact.body)}</p>` +
            '<p class="label" style="margin-top:26px">SDGs advanced</p>' +
            `<ul class="pills">${impact.sdgs
              .map((sd) => `<li>${sd.n} · ${esc(sd.label)}</li>`)
              .join('')}</ul></div>` +
            `<div class="frame reveal reveal--scale">${str(
              picture(impact.photo, {
                alt: impact.photoAlt,
                sizes: '(max-width: 900px) 100vw, 48vw',
                ratio: '4 / 3',
                className: 'ph--zoom',
              })
            )}</div></div>` +
            str(
              inlineCta(
                'Ask us for the standard, methodology, validating body and registry record behind this programme.',
                'Request the project file',
                '/contact.html'
              )
            )
        ),
        { tone: 'on-deep', id: 'programme', chapter: 'Programme' }
      )
    ),

    str(
      section(
        raw(
          str(head({ eyebrow: home.method.eyebrow, headline: home.method.headline })) +
            `<p class="lede reveal">${esc(home.method.body)}</p>`
        ),
        { tone: 'on-bone', id: 'model', chapter: 'Model' }
      )
    ),

    str(closeCta(d.close, { secondary: { label: 'Buy from our projects', href: '/carbon-supply.html' } })),
  ].join('\n');

  return { page: d, body };
}

/* ------------------------------------------------------ PROSE PAGES -- */

function renderProse(d, crumbLabel) {
  const secs = d.sections
    .map(
      (sec) =>
        `<section class="prose__s reveal"><h2 class="prose__h">${esc(sec.title)}</h2>` +
        sec.body.map((para) => `<p>${str(md(para))}</p>`).join('') +
        '</section>'
    )
    .join('');

  const body = [
    str(
      section(
        raw(
          str(breadcrumb_([{ name: crumbLabel, href: d.path }])) +
            `<p class="label">${esc(d.shortTitle)}</p>` +
            `<h1 class="h1 kinetic">${str(kinetic(d.title))}</h1>` +
            `<p class="lede reveal" style="margin-top:22px">${esc(d.intro)}</p>` +
            `<p class="form__note reveal" style="margin-top:16px">Last updated ${esc(d.updated)}.</p>`
        ),
        { id: 'intro', className: 'section--tight', wrap: 'wrap wrap--narrow' }
      )
    ),
    str(
      section(
        raw(
          `<div class="prose">${secs}</div>` +
            `<p class="prose__notice reveal">${esc(d.notice)}</p>`
        ),
        { tone: 'on-bone', wrap: 'wrap wrap--narrow' }
      )
    ),
  ].join('\n');

  return { page: d, body };
}

export const renderPrivacy = () => renderProse(privacy, 'Privacy policy');
export const renderTerms = () => renderProse(terms, 'Terms of use');

/* --------------------------------------------------------------- INDEX -- */

export function allPages() {
  return [
    renderHome(),
    renderSupply(),
    renderEac(),
    renderEsg(),
    renderAbout(),
    renderProjects(),
    renderContact(),
    renderSources(),
    renderPrivacy(),
    renderTerms(),
    ...services.map(renderService),
    renderNotFound(),
  ];
}
