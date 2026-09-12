import { U } from '../nav.mjs';
import { site } from '../site.mjs';
import * as F from '../../lib/figures.mjs';
import { LIFECYCLE } from './home.mjs';

/* ---------------------------------------------------------- INDUSTRIES */
export const industries = {
  file: U.industries, url: '/industries',
  title: 'Industries | Carbon & ESG Expertise | Offsetease',
  description: 'Carbon and ESG counsel for export-heavy, regulated sectors — chemicals, pharma, textiles, automotive, manufacturing, metals & mining, consumer goods.',
  keywords: ['carbon ESG by industry', 'CBAM sectors', 'hard-to-abate decarbonization'],
  h1: 'We speak the language of your industry.',
  crumbLabel: 'Industries',
  hero: {
    photo: 'molten-steel', sideScrim: true,
    kicker: 'Industries',
    headline: 'We speak the language|of your industry.',
    lede: 'We work with export-heavy and regulated sectors, where carbon and disclosure carry real financial weight. In each, the work is framed in the terms the industry is measured on: cost, margin, capital and market access.',
    buttons: [{ href: U.contact, label: 'Request a briefing', variant: 'primary' }],
    scrollHint: 'Seven sectors'
  },
  blocks: [
    {
      type: 'tiles', tone: 'paper', n: '01', kicker: 'Seven sectors', cols: 'g-3',
      title: 'Where the obligation bites differs sharply.',
      lede: 'CBAM weighs on metals and chemicals, EUDR on commodities, and buyer scorecards vary by industry. We scope to the obligations you actually carry.',
      items: [
        { k: 'Chemicals', title: 'Chemicals & petrochemicals', body: 'CBAM exposure on covered goods, process emissions, and product-level data demanded down the chain.' },
        { k: 'Pharma', title: 'Pharmaceuticals', body: 'Scope 3 across a complex supplier base, buyer scorecards, and disclosure across several jurisdictions at once.' },
        { k: 'Textiles', title: 'Textiles & apparel', body: 'Value-chain traceability, EU buyer requirements, and product footprints that decide contracts.' },
        { k: 'Automotive', title: 'Automotive & engineering', body: 'Supplier decarbonization targets passed down, and product carbon data required per component.' },
        { k: 'Manufacturing', title: 'Manufacturing', body: 'Energy and process abatement, EPDs for tenders, and a funded pathway the board can approve.' },
        { k: 'Metals', title: 'Metals & mining', body: 'Direct CBAM exposure, hard-to-abate process emissions, and heavy scrutiny of nature and community impact.' },
        { k: 'Consumer', title: 'Consumer goods', body: 'Retailer scorecards, EUDR-covered commodities, and public claims that must survive inspection.' }
      ]
    },
    {
      type: 'figure', tone: 'dark', n: '02', kicker: 'What applies to whom', layout: 'stacked',
      title: 'The obligations that decide the work.',
      lede: 'Most mandates are set less by sector than by what you sell, where you sell it, and who you sell it to. These are the mechanisms that most often determine scope.',
      fig: F.spine({
        dense: true,
        steps: [
          { title: 'CBAM', body: 'Iron and steel, aluminium, cement, fertilisers, electricity and hydrogen sold into the EU.' },
          { title: 'EUDR', body: 'Cattle, cocoa, coffee, palm oil, rubber, soy and wood, and many derived products.' },
          { title: 'Disclosure', body: 'BRSR, CSRD and IFRS S1/S2, by listing, size and jurisdiction.' },
          { title: 'Buyer scorecards', body: 'EcoVadis, CDP and customer questionnaires, which reach far below any threshold.' }
        ],
        caption: 'We map the exact obligations across your jurisdictions and value chain before proposing any work.'
      })
    },
    {
      type: 'prose', tone: 'bone', n: '03', kicker: 'How we frame it',
      title: 'In the terms the industry is measured on.',
      paras: [
        'Cost, margin, capital and market access. A sustainability team and a finance team ask the same question in different languages, and the work has to answer both.',
        'That is why a CBAM engagement produces a margin model, an EPD engagement produces a tender qualification, and a net-zero engagement produces a financing case.'
      ],
      after: `<div class="pill-nav" data-reveal style="--d:.2s">
        <a class="pill" href="${U.cbam}">CBAM compliance</a>
        <a class="pill" href="${U.eudr}">EUDR compliance</a>
        <a class="pill" href="${U.epd}">EPD</a>
        <a class="pill" href="${U.netzero}">Net zero &amp; decarbonization</a></div>`
    }
  ],
  faq: [
    { q: 'Do you specialise by sector?', a: 'Yes. Obligations differ sharply. CBAM weighs on metals and chemicals, EUDR on commodities, and buyer scorecards vary by industry.' },
    { q: 'We are not in one of these sectors. Can you still help?', a: 'Usually. The sectors above are where we work most often, but scope is set by your obligations rather than your industry label. A short conversation establishes whether we are the right fit.' }
  ],
  faqN: '04'
};

/* ------------------------------------------------------------- INSIGHTS */
const BRIEFINGS = [
  { q: 'What does "high integrity" actually mean in 2026?', a: 'Additional, permanent, independently verified, free of double counting, and demonstrably good for people and nature. Anything narrower is a marketing definition. Those five tests are the basis of The Source Standard.', href: U.source, link: 'The Source Standard' },
  { q: 'Nature-based or durable removals?', a: 'Most credible portfolios hold both. Nature-based supply carries scale and co-benefits; durable removals carry permanence measured in centuries. The mix should be set by the mandate, not by fashion.', href: U.durable, link: 'Durable removals' },
  { q: 'Why is permanence winning buyers?', a: 'Because removal expectations are hardening under the SBTi Net-Zero Standard, and a claim built on short-lived storage has to be re-made every few years. Buyers who secure permanent supply early are not competing for it later.', href: U.durable, link: 'Durable removals' },
  { q: 'How do you build a portfolio that survives an audit?', a: 'Diversify across project type, geography and vintage, so no single project or methodology change puts the claim at risk; and keep the origin-to-retirement record for every asset, assembled before anyone asks for it.', href: U.offtake, link: 'Carbon supply & offtake' },
  { q: 'Does CBAM affect us?', a: 'If you export iron, steel, aluminium, cement, fertilisers, electricity or hydrogen to the EU, yes. The definitive regime began in January 2026, so it is now a cost rather than a reporting exercise.', href: U.cbam, link: 'CBAM compliance' },
  { q: 'Do we still prepare for CSRD after the Omnibus?', a: 'Very large EU companies and large non-EU groups above the threshold do. The Omnibus narrowed scope while preserving double materiality and assurance. The direction of travel did not change.', href: U.reporting, link: 'Sustainability reporting' },
  { q: 'How do we run a double materiality assessment that holds?', a: 'Assess financial materiality and impact materiality separately, each on its own evidence, and document the stakeholder basis. Scoring impact by proxy from financial risk is the most common way an assessment fails assurance.', href: U.dma, link: 'Double materiality' },
  { q: 'What does BRSR Core mean for companies below the threshold?', a: 'Directly, nothing. Indirectly, a great deal: assured value-chain KPIs push data requests well below the mandate, and your customers will ask whether or not you are in scope.', href: U.supplier, link: 'Supplier & value-chain ESG' },
  { q: 'What changes under the SBTi Net-Zero Standard V2?', a: 'Interim removal targets that scale over time, and a reframing of ongoing emissions responsibility. It is mandatory from 2028, which makes it a design constraint on any target set now.', href: U.sbti, link: 'SBTi target setting' },
  { q: 'Can we measure Scope 3 through our suppliers?', a: 'Yes, and eventually you must. Primary supplier data replaces industry averages and produces a footprint that improves year on year rather than merely changing.', href: U.ghg, link: 'GHG accounting' }
];

export const insights = {
  file: U.insights, url: '/insights',
  title: 'Insights | Carbon Markets & ESG | Offsetease',
  description: 'Decision-grade analysis on carbon-market integrity and ESG regulation, written for boards and sustainability leaders.',
  keywords: ['carbon market insights', 'ESG regulation analysis', 'carbon integrity'],
  h1: 'Decision-grade insight.',
  crumbLabel: 'Insights',
  hero: {
    photo: 'eroded-terrain', sideScrim: true,
    kicker: 'Insights',
    headline: 'Decision-grade|insight.',
    lede: 'A carbon-led knowledge hub for boards and sustainability leaders. Each entry answers a question a serious buyer is actually asking, with current data and a plain answer.',
    buttons: [{ href: U.contact, label: 'Request a briefing', variant: 'primary' }],
    scrollHint: 'Ten questions'
  },
  blocks: [
    {
      type: 'tiles', tone: 'bone', n: '02', kicker: 'Read further', cols: 'g-3',
      title: 'The work behind the answers.',
      items: [
        { k: 'Integrity', title: 'The Source Standard', body: 'The four-dimension screen applied at origin.', href: U.source },
        { k: 'Permanence', title: 'Durable removals', body: 'Biochar and enhanced weathering, measured in centuries.', href: U.durable },
        { k: 'Supply', title: 'Carbon supply & offtake', body: 'Securing scarce, screened supply before it tightens.', href: U.offtake },
        { k: 'Border carbon', title: 'CBAM compliance', body: 'Verified data against punitive default values.', href: U.cbam },
        { k: 'Disclosure', title: 'Sustainability reporting', body: 'One backbone across BRSR, CSRD and IFRS.', href: U.reporting },
        { k: 'Targets', title: 'SBTi target setting', body: 'Credible, fundable, and ready for V2 in 2028.', href: U.sbti }
      ]
    },
    {
      type: 'prose', tone: 'paper', n: '03', kicker: 'Editorial standard',
      title: 'How we publish.',
      paras: [
        'Every piece carries a visible author and date, answers its question in the first two or three sentences, and states its sources plainly.',
        'Dated figures are refreshed at least quarterly. Where a number has moved since publication, we change it rather than leaving it to age.'
      ],
      aside: `<p class="note" data-reveal>Longer analysis is published as it is written, under named authorship. Ask for the current publication list when you get in touch.</p>`
    }
  ],
  faq: [
    ...BRIEFINGS.map(b => ({ q: b.q, a: b.a })),
    { q: 'How often should insights be refreshed?', a: 'At least quarterly for dated figures. Answer engines favour recent, authored, specific content.' },
    { q: 'Can we get these as a briefing?', a: 'Yes. A senior advisor will take any of these questions in a confidential conversation, against your own position rather than in the abstract.' }
  ],
  faqTone: 'paper',
  faqKicker: 'Briefings',
  faqTitle: 'Twelve questions, answered plainly.',
  faqN: '01',
  faqFirst: true
};

/* ---------------------------------------------------------------- ABOUT */
export const about = {
  file: U.about, url: '/about',
  title: 'About Offsetease | High-Integrity Carbon at the Source',
  description: 'A carbon developer built for the flight to quality — high-integrity supply at its source, a proprietary integrity method, senior counsel on every mandate.',
  keywords: ['about Offsetease', 'carbon developer', 'high-integrity carbon partner'],
  h1: 'Built for the flight to quality.',
  crumbLabel: 'About',
  hero: {
    kind: 'canvas', photo: 'river-delta', sideScrim: true,
    kicker: 'About Offsetease',
    headline: 'Built for the|flight to quality.',
    lede: 'The carbon market has divided into the abundant and the defensible. Too many companies still buy the first and discover, under audit, that it was the wrong half. We were built for the other half.',
    buttons: [
      { href: U.contact, label: 'Request a briefing', variant: 'primary' },
      { href: U.source, label: 'The Source Standard', variant: 'ghost' }
    ],
    scrollHint: 'Why we exist'
  },
  blocks: [
    {
      type: 'points', tone: 'paper', n: '01', kicker: 'How we work',
      title: 'Five commitments.',
      aside: `<p class="note" data-reveal>We were built to develop high-integrity carbon at its source, apply a standard tougher than the market&#8217;s, and stand behind what we deliver.</p>`,
      items: [
        { title: 'We develop; we do not merely broker', body: 'Origination at the source is what gives a client first access and a traceable line back to a named project.' },
        { title: 'Impact leads', body: 'Measurable benefit is what makes a credit hold. We treat it as the foundation of value, not a footnote to it.' },
        { title: 'We screen at origin', body: 'The Source Standard is applied before development proceeds and before a credit is supplied.' },
        { title: 'Senior partners run every mandate', body: 'The person who scopes the engagement is the person who delivers it.' },
        { title: 'We stay', body: 'As the rules and the market evolve, and as the next regulation arrives.' }
      ]
    },
    {
      type: 'figure', tone: 'dark', n: '02', kicker: 'The Source Standard', layout: 'stacked',
      title: 'Our integrity method, documented across one lifecycle.',
      lede: 'Additionality and permanence, measurement and verification, market and legal integrity, people and nature — applied at origin and documented at every stage, so a client inherits an audit-ready record rather than a promise.',
      fig: F.spine({ steps: LIFECYCLE }),
      after: `<div class="btn-row" data-reveal style="--d:.2s"><a class="btn btn--primary" href="${U.source}">Read the method</a></div>`
    },
    {
      type: 'figure', tone: 'deep', n: '03', kicker: 'Methodology', layout: 'stacked',
      title: 'How an engagement runs.',
      fig: F.spine({
        steps: [
          { title: 'Assess', body: 'A defensible baseline, built to survive assurance the first time.' },
          { title: 'Strategise', body: 'A funded pathway rather than an aspiration.' },
          { title: 'Implement', body: 'Systems and delivery, with the data captured as you go.' },
          { title: 'Measure', body: 'Audit-ready performance against the baseline.' },
          { title: 'Improve', body: 'Compounding progress, and the next regulation absorbed at lower cost.' }
        ]
      })
    },
    {
      type: 'raw', tone: 'bone',
      html: `<div class="grid g-aside">
        <div class="stack-lg">
          <p class="kicker"><span class="kicker__n">04</span>Standards we work to</p>
          <h2 class="h2" data-reveal>The frameworks the work is held to.</h2>
        </div>
        <div class="stack" data-reveal style="--d:.1s">${F.chips(site.standards, ['ICVCM Core Carbon Principles', 'GHG Protocol'])}</div>
      </div>`
    },
    {
      type: 'statement', tone: 'paper', n: '05', kicker: 'Where we work', wide: true,
      text: 'At the source. Rooted in India, with development extending across South Asia and Africa.',
      sub: `Serving clients across ${site.contact.serving}.`
    }
  ],
  faq: [
    { q: 'Are you a developer or an advisor?', a: 'Both. We develop and deliver high-integrity carbon, and provide the ESG architecture that makes a claim defensible.' },
    { q: 'Who runs the work?', a: 'Senior partners, on every mandate.' },
    { q: 'Where do you develop?', a: 'At the source, in India today, with development extending across South Asia and Africa.' }
  ],
  faqN: '06'
};

/* -------------------------------------------------------------- CONTACT */
const formHtml = () => {
  const action = site.formEndpoint ? ` action="${site.formEndpoint}" method="post"` : '';
  return `<form class="form" data-form${action} data-mailto="${site.contact.email}" novalidate>
    <div class="field">
      <label for="f-name">Name</label>
      <input id="f-name" name="name" type="text" autocomplete="name" required>
      <span class="field__err">Please tell us your name.</span>
    </div>
    <div class="field">
      <label for="f-email">Work email</label>
      <input id="f-email" name="email" type="email" autocomplete="email" required>
      <span class="field__err">Please enter a valid work email address.</span>
    </div>
    <div class="field">
      <label for="f-company">Company</label>
      <input id="f-company" name="company" type="text" autocomplete="organization" required>
      <span class="field__err">Please tell us which company you are writing from.</span>
    </div>
    <div class="field">
      <label for="f-context">What prompts your interest <span style="text-transform:none;letter-spacing:0">(optional)</span></label>
      <textarea id="f-context" name="context" rows="4"></textarea>
    </div>
    <div class="btn-row">
      <button class="btn btn--primary" type="submit">Request a briefing</button>
    </div>
    <p class="form__note">We route enquiries by topic internally, so there is nothing more to fill in. A senior advisor responds within one business day, and the exchange is confidential from the first message.</p>
    <p class="form__status" role="status">Your mail client should now be open with the message ready to send. If it did not open, write to
      <a class="link" href="mailto:${site.contact.email}">${site.contact.email}</a> directly.</p>
  </form>`;
};

export const contact = {
  file: U.contact, url: '/contact',
  title: 'Contact | Request a Briefing | Offsetease',
  description: 'Begin with a senior advisor and a confidential conversation to test fit. A response within one business day.',
  keywords: ['contact Offsetease', 'carbon briefing', 'ESG consultation'],
  h1: 'Request a briefing.',
  crumbLabel: 'Contact',
  heroShort: true,
  hero: {
    photo: 'wind-fog', sideScrim: true,
    kicker: 'Contact',
    headline: 'Request a briefing.',
    lede: 'Every engagement begins with a senior advisor and a confidential conversation to test fit and scope. No script, and no pitch for work that is not right for you.',
    scrollHint: false
  },
  blocks: [
    {
      type: 'raw', tone: 'paper',
      html: `<div class="grid g-split">
        <div class="stack-lg">
          <p class="kicker"><span class="kicker__n">01</span>Four fields</p>
          <h2 class="h2" data-reveal>Tell us enough to route it well.</h2>
          <p class="lede" data-reveal style="--d:.08s">A response within one business day.</p>
          <dl class="defn" data-reveal style="--d:.14s">
            <dt>Email</dt><dd><a class="link" href="mailto:${site.contact.email}">${site.contact.email}</a></dd>
          </dl>
          <dl class="defn" data-reveal style="--d:.18s">
            <dt>Phone</dt><dd><a class="link" href="tel:${site.contact.phoneHref}">${site.contact.phone}</a></dd>
          </dl>
          <dl class="defn" data-reveal style="--d:.22s">
            <dt>LinkedIn</dt><dd><a class="link" href="${site.contact.linkedin}" rel="noopener">linkedin.com/company/offsetease</a></dd>
          </dl>
          <dl class="defn" data-reveal style="--d:.26s">
            <dt>Office</dt><dd>${site.contact.location}. Serving ${site.contact.serving}.</dd>
          </dl>
        </div>
        <div data-reveal style="--d:.1s">${formHtml()}</div>
      </div>`
    },
    {
      type: 'statement', tone: 'bone', n: '02', kicker: 'What happens next', wide: true,
      text: 'A senior advisor responds within one business day to arrange a confidential scoping conversation.',
      sub: 'Not a sales call. A conversation to establish whether the mandate is one we should take, and what it would actually involve.'
    }
  ],
  faq: [
    { q: 'What happens next?', a: 'A senior advisor responds within one business day to arrange a confidential scoping conversation.' },
    { q: 'Is it confidential?', a: 'Yes, from the first exchange.' },
    { q: 'Do you take small mandates?', a: 'We take mandates where we can do the work properly. Size matters less than whether the scope is one we can stand behind, and we will say so plainly either way.' }
  ],
  faqN: '03',
  cta: false
};

/* ------------------------------------------------------------------ FAQ */
export const faq = {
  file: U.faq, url: '/faq',
  title: 'Carbon & ESG FAQ | Offsetease',
  description: 'Straight answers on high-integrity carbon, The Source Standard, SBTi, CBAM, CSRD and where Offsetease develops.',
  keywords: ['carbon FAQ', 'ESG FAQ', 'high-integrity carbon questions'],
  h1: 'Your questions, answered.',
  crumbLabel: 'FAQ',
  heroShort: true,
  hero: {
    photo: 'carbon-texture', sideScrim: true,
    kicker: 'Frequently asked',
    headline: 'Your questions,|answered.',
    lede: 'The questions we are asked most often, answered plainly and without hedging. Each links through to the work behind it.',
    buttons: [{ href: U.contact, label: 'Request a briefing', variant: 'primary' }],
    scrollHint: false
  },
  blocks: [
    {
      type: 'tiles', tone: 'bone', n: '02', kicker: 'Go deeper', cols: 'g-3',
      title: 'Where each answer leads.',
      items: [
        { k: 'Method', title: 'The Source Standard', body: 'The four-dimension screen, applied at origin.', href: U.source },
        { k: 'Markets', title: 'Environmental markets', body: 'Development, supply and renewable attributes.', href: U.markets },
        { k: 'ESG', title: 'ESG & sustainability', body: 'Measurement, strategy, disclosure and targets.', href: U.esg },
        { k: 'Insight', title: 'Insights', body: 'Ten questions a serious buyer is asking.', href: U.insights },
        { k: 'Sectors', title: 'Industries', body: 'Where the obligation actually bites.', href: U.industries },
        { k: 'Company', title: 'About Offsetease', body: 'Why we exist and how we work.', href: U.about }
      ]
    }
  ],
  faq: [

        { q: 'What does Offsetease do?', a: 'We develop high-integrity carbon at its source in emerging markets and deliver verified credits, renewable attributes and ESG advisory to global companies.' },
        { q: 'What is The Source Standard?', a: 'Our proprietary integrity method: an origin-stage screen across additionality and permanence, measurement and verification, market and legal integrity, and people and nature, documented across the full lifecycle.' },
        { q: 'What makes a credit high integrity?', a: 'It is additional, permanent, independently verified, free of double counting, and demonstrably good for people and nature.' },
        { q: 'Nature-based or durable removals?', a: 'Usually both: nature-based for scale and co-benefits, durable removals for permanence. Both are project types we develop.' },
        { q: 'Can credits meet an SBTi target?', a: 'Not near-term reduction targets, which require in-boundary cuts. Credits support beyond-value-chain mitigation and, under V2, ongoing emissions responsibility.' },
        { q: 'Does CBAM affect us?', a: 'If you export iron, steel, aluminium, cement, fertilisers, electricity or hydrogen to the EU, yes. The definitive regime began in January 2026.' },
        { q: 'Do we still report under CSRD after the Omnibus?', a: 'Very large EU companies and large non-EU groups above the threshold do. Scope narrowed; assurance and double materiality remain.' },
        { q: 'Where do you develop?', a: 'At the source, in India today, with development extending across South Asia and Africa.' },
        { q: 'Are you a developer or an advisor?', a: 'Both. We develop and deliver high-integrity carbon, and provide the ESG architecture that makes a claim defensible.' },
        { q: 'Who runs the work?', a: 'Senior partners, on every mandate.' }
  ],
  faqTone: 'paper',
  faqKicker: 'The essentials',
  faqTitle: 'Straight answers.',
  faqN: '01',
  faqFirst: true
};
