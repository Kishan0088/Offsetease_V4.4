import { U } from '../nav.mjs';
import * as F from '../../lib/figures.mjs';

const CRUMB = [{ label: 'ESG & sustainability', href: U.esg }];

/* A service page shares one shape: hero, the work, a bespoke figure, why it
   matters, FAQ. Each page supplies its own content and its own graphic. */
function svc({ file, url, title, description, keywords, h1, headline, crumbLabel, kicker,
               photo, lede, scrollHint, serviceType, work, figure, why, related, faq, extra = [] }) {
  const blocks = [];
  let n = 0;
  const num = () => String(++n).padStart(2, '0');

  if (work) {
    blocks.push(work.items
      ? { type: 'points', tone: 'paper', n: num(), kicker: work.kicker || 'The work', title: work.title, lede: work.lede, items: work.items, aside: work.aside, after: work.after }
      : { type: 'prose', tone: 'paper', n: num(), kicker: work.kicker || 'The work', title: work.title, lede: work.lede, paras: work.paras, aside: work.aside, after: work.after });
  }
  if (figure) {
    blocks.push({
      type: 'figure', tone: figure.tone || 'dark', n: num(),
      kicker: figure.kicker, title: figure.title, lede: figure.lede,
      paras: figure.paras, layout: figure.layout || 'stacked', fig: figure.fig, after: figure.after
    });
  }
  for (const b of extra) blocks.push({ ...b, n: b.n || num() });
  if (why) {
    blocks.push(why.statement
      ? { type: 'statement', tone: why.tone || 'bone', n: num(), kicker: why.kicker || 'Why it matters', text: why.statement, sub: why.sub, wide: true, after: why.after }
      : { type: 'prose', tone: why.tone || 'bone', n: num(), kicker: why.kicker || 'Why it matters', title: why.title, paras: why.paras, aside: why.aside, after: why.after });
  }
  if (related && related.length) {
    blocks.push({
      type: 'raw', tone: 'paper', tight: true,
      html: `<div class="stack-lg"><p class="kicker"><span class="kicker__n">${num()}</span>Related</p>
        <div class="pill-nav" data-reveal>${related.map(r => `<a class="pill" href="${r.href}">${r.label}</a>`).join('')}</div></div>`
    });
  }

  return {
    file, url, title, description, keywords, h1,
    crumbLabel: crumbLabel || h1, crumbs: CRUMB,
    service: { name: crumbLabel || h1, type: serviceType || 'ESG and sustainability advisory' },
    hero: {
      photo, sideScrim: true, kicker: kicker || 'ESG & sustainability',
      headline: headline || h1, lede,
      buttons: [{ href: U.contact, label: 'Request a briefing', variant: 'primary' }],
      scrollHint
    },
    blocks, faq, faqN: String(++n).padStart(2, '0')
  };
}

/* ------------------------------------------------------------- PILLAR */
export const esg = {
  file: U.esg, url: '/esg-sustainability',
  title: 'ESG & Sustainability Advisory | Offsetease',
  description: 'The measurement, strategy, disclosure and target architecture that makes a carbon position defensible — from GHG accounting to BRSR, CSRD, IFRS and SBTi.',
  keywords: ['ESG advisory', 'sustainability strategy', 'GHG accounting', 'double materiality', 'IFRS S1 S2', 'net zero'],
  h1: 'The architecture behind a defensible claim.',
  crumbLabel: 'ESG & sustainability',
  service: { name: 'ESG and sustainability advisory', type: 'ESG advisory' },
  hero: {
    photo: 'factory-interior', sideScrim: true,
    kicker: 'ESG & sustainability',
    headline: 'The architecture behind|a defensible claim.',
    lede: 'A carbon position is only as strong as the data and strategy beneath it. We provide the full architecture that makes a claim defensible to a CFO, an auditor, a rating agency and a board.',
    buttons: [
      { href: U.contact, label: 'Request a briefing', variant: 'primary' },
      { href: U.markets, label: 'Environmental markets', variant: 'ghost' }
    ],
    scrollHint: 'Five capabilities'
  },
  blocks: [
    {
      type: 'tiles', tone: 'paper', n: '01', kicker: 'Five capabilities', cols: 'g-3',
      title: 'Most mandates draw on a handful of these.',
      lede: 'We scope to what the obligation actually requires, and say so when a line of work is not needed.',
      items: [
        { k: 'Measurement', title: 'The numbers', body: 'GHG accounting, product carbon footprint, LCA, EPD.', href: U.ghg },
        { k: 'Strategy & risk', title: 'The position', body: 'CSR strategy, double materiality, climate risk and TCFD, supplier and value-chain ESG.', href: U.dma },
        { k: 'Disclosure', title: 'The report', body: 'BRSR, CSRD, IFRS S1 and S2, from a single data backbone.', href: U.reporting },
        { k: 'Ratings & compliance', title: 'The scorecard', body: 'EcoVadis, CDP, CBAM, EUDR, ISCC.', href: U.ecovadis },
        { k: 'Targets & reduction', title: 'The pathway', body: 'SBTi, net zero and decarbonization, costed and sequenced.', href: U.sbti },
        { k: 'Carbon', title: 'The residual', body: 'High-integrity removals for what cannot yet be abated, from our own developed supply.', href: U.markets }
      ]
    },
    {
      type: 'figure', tone: 'dark', n: '02', kicker: 'Build once, report many', layout: 'stacked',
      title: 'One backbone. Every framework.',
      lede: 'As frameworks converge on the IFRS baseline, the cost saving and the credibility both come from consolidation: one dataset, mapped across everything you answer to.',
      fig: F.backbone({
        source: { title: 'One measured dataset', sub: 'Boundary \u00b7 activity data \u00b7 assurance trail' },
        targets: ['BRSR & BRSR Core', 'CSRD / ESRS', 'IFRS S1 & S2', 'TCFD', 'GRI', 'CDP', 'EcoVadis'],
        caption: 'The frameworks overlap heavily around the IFRS baseline. Building once and mapping across is cheaper than reporting many times, and far easier to assure.'
      }),
      after: `<div class="btn-row" data-reveal style="--d:.2s"><a class="btn btn--primary" href="${U.reporting}">Sustainability reporting</a></div>`
    },
    {
      type: 'figure', tone: 'bone', n: '03', kicker: 'The direction of travel', layout: 'stacked',
      title: 'Where the obligations are heading.',
      lede: 'Disclosure is consolidating on the IFRS baseline, now adopted across more than twenty jurisdictions representing the majority of global GDP, with climate first. Where mandates narrow, buyer and investor demand does not, and value-chain requests reach far below the thresholds.',
      fig: F.timeline({
        events: [
          { date: 'January 2026', title: 'CBAM starts charging', body: 'The definitive regime moves CBAM from reporting to real cost on EU imports.' },
          { date: 'End of 2026', title: 'EUDR, large operators', body: 'Deforestation-free due diligence and plot-level geolocation become due.' },
          { date: 'Into 2027', title: 'EUDR, small operators', body: 'The smaller end of the market follows, on a later deadline.' },
          { date: 'From 2028', title: 'SBTi Net-Zero Standard V2', body: 'Mandatory, with interim removal expectations and ongoing emissions responsibility.' }
        ],
        caption: 'Dates as set out in current rules. We refresh these quarterly; confirm your own scope with us before planning against them.'
      })
    },
    {
      type: 'prose', tone: 'paper', n: '04', kicker: 'Two regimes, briefly',
      title: 'CSRD after the Omnibus, and BRSR Core in India.',
      paras: [
        "Europe's Omnibus narrowed CSRD to the largest companies while preserving double materiality and assurance. Very large EU companies and large non-EU groups above the threshold still prepare; scope narrowed, the direction did not.",
        "India's BRSR Core assurance is extending toward the top thousand listed entities, and the value-chain requests that follow reach much further down than the mandate itself."
      ],
      aside: `<p class="note" data-reveal>Assurance readiness should begin at least one full reporting cycle before it is mandatory. Reliable baseline data takes time to build.</p>`
    }
  ],
  faq: [
    { q: 'Do we still prepare for CSRD after the Omnibus?', a: 'Very large EU companies and large non-EU groups above the threshold do. Scope narrowed; the direction did not.' },
    { q: 'How early should assurance readiness begin?', a: 'At least one full reporting cycle before it is mandatory. Reliable baseline data takes time to build.' },
    { q: 'Can one dataset serve every framework?', a: 'Largely, yes. The frameworks overlap heavily around the IFRS baseline, so we build once and map across to BRSR, CSRD, GRI, TCFD and CDP.' }
  ],
  faqN: '05',
  cta: {
    title: 'Request a briefing.',
    body: 'A senior advisor responds within one business day.',
    buttons: [
      { href: U.contact, label: 'Request a briefing', variant: 'primary' },
      { href: U.ghg, label: 'Start with GHG accounting', variant: 'ghost' }
    ]
  }
};

/* ------------------------------------------------------- MEASUREMENT */
export const ghg = svc({
  file: U.ghg, url: '/ghg-accounting',
  title: 'GHG Accounting (Scope 1, 2, 3) | Audit-Ready | Offsetease',
  description: 'Audit-ready greenhouse gas inventories to the GHG Protocol, across Scope 1, 2 and 3 — the baseline every target and disclosure stands on.',
  keywords: ['GHG accounting', 'carbon footprint', 'Scope 3 emissions', 'GHG Protocol'],
  h1: 'An audit-ready footprint, across all three scopes.',
  headline: 'An audit-ready footprint,|across all three scopes.',
  crumbLabel: 'GHG accounting', photo: 'eroded-terrain',
  serviceType: 'Greenhouse gas accounting',
  lede: 'We build greenhouse gas inventories to the GHG Protocol that hold up under assurance, across Scope 1, 2 and the Scope 3 value chain. It is the baseline every credible target, disclosure and carbon position depends on.',
  scrollHint: 'Three scopes',
  figure: {
    kicker: 'The three scopes', title: 'What sits inside your boundary, and what sits beyond it.',
    lede: 'Scope 3 is, for most companies, the majority of the footprint — and now commercially unavoidable for exporters and EU suppliers.',
    fig: F.nested({
      title: 'The three GHG Protocol scopes',
      bands: [
        { n: 'Scope 3', title: 'Value chain', body: ['Purchased goods and services, transport,', 'use of sold products, and everything else', 'upstream and downstream. Usually the largest.'] },
        { n: 'Scope 2', title: 'Purchased energy', body: ['Electricity, steam, heating and cooling', 'bought and consumed.'] },
        { n: 'Scope 1', title: 'Direct emissions', body: ['Owned or controlled sources:', 'combustion, process, fleet, fugitive.'] }
      ],
      caption: 'Each band encloses the one inside it. A claim that stops at Scope 1 and 2 answers only the innermost question.'
    })
  },
  work: {
    title: 'Built once, and it serves every framework.',
    paras: [
      'A complete inventory with a defensible boundary, aligned to BRSR, IFRS S2 and CDP, and the data systems that make each year&#39;s disclosure cheaper than the last.',
      'Scope 3 is, for most companies, the majority of the footprint and now commercially unavoidable for exporters and EU suppliers. Built once, the inventory serves every framework at once.'
    ],
    aside: `<p class="note" data-reveal>Primary supplier data replaces industry averages and produces a more accurate, more defensible footprint. That work is covered under supplier and value-chain ESG.</p>`
  },
  why: {
    statement: 'Every target, every disclosure and every carbon position rests on this one number.',
    sub: 'Which is why it has to be built to survive assurance the first time, rather than rebuilt when an auditor asks how the boundary was drawn.'
  },
  related: [{ label: 'Supplier & value-chain ESG', href: U.supplier }, { label: 'Sustainability reporting', href: U.reporting },
            { label: 'SBTi target setting', href: U.sbti }, { label: 'Net zero & decarbonization', href: U.netzero }],
  faq: [
    { q: 'What are the three scopes?', a: 'Direct emissions, purchased energy, and value-chain emissions. Scope 3 is usually the largest.' },
    { q: 'Is Scope 3 mandatory?', a: 'It varies by jurisdiction, but exporters and EU suppliers are asked for it regardless. Building it early is the defensible choice.' },
    { q: 'How long does a first inventory take?', a: 'It depends on how much activity data already exists and how many sites are in scope. We scope honestly at the outset rather than discovering the gap halfway through.' }
  ]
});

export const pcf = svc({
  file: U.pcf, url: '/product-carbon-footprint',
  title: 'Product Carbon Footprint (PCF) | SKU-Level | Offsetease',
  description: 'SKU-level product carbon footprints your buyers require — consistent, comparable, and ready for procurement, tenders and CBAM.',
  keywords: ['product carbon footprint', 'PCF', 'SKU carbon footprint', 'ISO 14067'],
  h1: 'The product-level data your buyers now require.',
  headline: 'The product-level data|your buyers now require.',
  crumbLabel: 'Product carbon footprint', photo: 'container-port',
  serviceType: 'Product carbon footprinting',
  lede: 'A product carbon footprint measures the emissions of a single product across its life cycle. We produce SKU-level PCFs, consistent and comparable across a range, ready for the buyer questionnaires, tenders and CBAM declarations where product data now decides contracts.',
  scrollHint: 'Cradle to gate, or to grave',
  figure: {
    kicker: 'Where the boundary falls', title: 'Cradle to gate, or cradle to grave.',
    lede: 'The boundary decides what the number means. We set it to the question your buyer is actually asking, and hold it constant across the range so comparisons are fair.',
    fig: F.spine({
      steps: [
        { title: 'Raw materials', body: 'Extraction and processing of inputs.' },
        { title: 'Inbound transport', body: 'Moving materials to the plant.' },
        { title: 'Manufacturing', body: 'Energy, process and waste at the gate.' },
        { title: 'Distribution & use', body: 'Beyond the gate, where cradle-to-grave applies.' },
        { title: 'End of life', body: 'Disposal, recycling or recovery.' }
      ],
      caption: 'Cradle-to-gate stops at the factory gate. Cradle-to-grave carries through use and end of life. Aligned to ISO 14067 and the GHG Protocol Product Standard.'
    })
  },
  work: {
    title: 'One methodology, applied consistently across the range.',
    paras: [
      'Cradle-to-gate or cradle-to-grave, aligned to ISO 14067 and the GHG Protocol Product Standard, with a consistent methodology across the range so comparisons are fair and defensible.',
      'Accurate product data increasingly wins or loses contracts, which is why the comparability matters as much as the number.'
    ]
  },
  why: {
    title: 'Why buyers ask, and why the answer has to be consistent.',
    paras: [
      'Your buyers ask for a PCF to decarbonize their own Scope 3 and to gate procurement. A number produced on a different basis for each SKU cannot be compared, and a buyer will treat it accordingly.',
      'The same data feeds CBAM declarations, where verified figures usually beat punitive default values.'
    ]
  },
  related: [{ label: 'Life cycle assessment', href: U.lca }, { label: 'Environmental product declaration', href: U.epd },
            { label: 'CBAM compliance', href: U.cbam }, { label: 'GHG accounting', href: U.ghg }],
  faq: [
    { q: 'Why do buyers ask for a PCF?', a: 'To decarbonize their own Scope 3 and to gate procurement. Accurate product data increasingly wins or loses contracts.' },
    { q: 'What standard governs a PCF?', a: 'ISO 14067 and the GHG Protocol Product Standard.' },
    { q: 'How does a PCF differ from an LCA?', a: 'A PCF isolates carbon. An LCA assesses multiple environmental impacts, and a PCF is often derived from one.' }
  ]
});

export const lca = svc({
  file: U.lca, url: '/life-cycle-assessment',
  title: 'Life Cycle Assessment (LCA) | ISO 14040/44 | Offsetease',
  description: 'Rigorous ISO 14040/44 life cycle assessments — the evidence base behind footprints, EPDs, eco-design and credible environmental claims.',
  keywords: ['life cycle assessment', 'LCA', 'ISO 14040 14044'],
  h1: 'Life-cycle evidence that withstands scrutiny.',
  headline: 'Life-cycle evidence|that withstands scrutiny.',
  crumbLabel: 'Life cycle assessment', photo: 'carbon-texture',
  serviceType: 'Life cycle assessment',
  lede: 'A life cycle assessment quantifies the full environmental impact of a product or process, from raw material to end of life. We deliver LCAs to ISO 14040/44 that underpin product footprints, EPDs, eco-design and environmental claims.',
  scrollHint: 'Beyond carbon',
  figure: {
    kicker: 'Beyond carbon', title: 'Carbon is one impact category among several.',
    lede: 'An LCA produces a defensible evidence base rather than a headline number. Where a claim rests on more than climate, the wider categories are what make it stand.',
    tone: 'deep',
    fig: F.spine({
      dense: true,
      steps: [
        { title: 'Goal & scope', body: 'The question, the boundary and the functional unit, fixed before any data is gathered.' },
        { title: 'Inventory', body: 'Inputs and outputs across every stage in scope.' },
        { title: 'Impact assessment', body: 'Carbon and, where needed, water, acidification, eutrophication and more.' },
        { title: 'Interpretation', body: 'What the result supports, and what it does not.' }
      ],
      caption: 'The four phases of an ISO 14040/44 assessment. The fourth is the one weak studies skip.'
    })
  },
  work: {
    title: 'ISO-compliant, cradle-to-gate or cradle-to-grave.',
    paras: [
      'ISO-compliant assessment across carbon and, where needed, wider impact categories, producing a defensible evidence base rather than a headline number.',
      'A compliant LCA is also the technical foundation of a verified EPD, so the work is usually worth scoping with the declaration in mind from the start.'
    ]
  },
  why: {
    statement: 'A defensible evidence base, not a headline number.',
    sub: 'The difference shows the moment someone asks how the functional unit was defined.'
  },
  related: [{ label: 'Environmental product declaration', href: U.epd }, { label: 'Product carbon footprint', href: U.pcf },
            { label: 'ISCC certification', href: U.iscc }],
  faq: [
    { q: 'How does an LCA differ from a PCF?', a: 'A PCF isolates carbon; an LCA assesses multiple impacts. A PCF is often derived from an LCA.' },
    { q: 'Do we need an LCA for an EPD?', a: 'Yes. A compliant LCA is the technical foundation of a verified EPD.' },
    { q: 'Which standard applies?', a: 'ISO 14040 and ISO 14044 govern life cycle assessment. EN 15804 and ISO 14025 govern the declaration built on it.' }
  ]
});

export const epd = svc({
  file: U.epd, url: '/environmental-product-declaration',
  title: 'Environmental Product Declaration (EPD) | Verified | Offsetease',
  description: 'Verified EPDs that qualify you for tenders — third-party-checked, standards-based declarations for construction, manufacturing and industrial buyers.',
  keywords: ['environmental product declaration', 'EPD', 'EN 15804', 'Type III declaration'],
  h1: 'Verified declarations that qualify you to bid.',
  headline: 'Verified declarations|that qualify you to bid.',
  crumbLabel: 'Environmental product declaration', photo: 'factory-interior',
  serviceType: 'Environmental product declarations',
  lede: 'An Environmental Product Declaration is a verified, standardised report of a product&#39;s environmental performance, built on an LCA. We develop and manage verified EPDs, increasingly a condition of bidding in construction, manufacturing and public procurement.',
  scrollHint: 'How an EPD is built',
  figure: {
    kicker: 'How an EPD is built', title: 'Five steps, and the declaration is only valid if all five hold.',
    fig: F.spine({
      steps: [
        { title: 'LCA', body: 'A compliant ISO 14040/44 assessment underneath it all.' },
        { title: 'PCR', body: 'The Product Category Rules that make declarations comparable.' },
        { title: 'Declaration', body: 'Drafted to EN 15804 and ISO 14025.' },
        { title: 'Verification', body: 'Independently checked by a third party.' },
        { title: 'Registration', body: 'Published on a programme operator, formatted for the tender.' }
      ],
      caption: 'Unverified declarations do not qualify in tenders or green-building certifications.'
    })
  },
  work: {
    title: 'Formatted for the tenders and schemes your buyers actually use.',
    paras: [
      'LCA-based declarations aligned to EN 15804 and ISO 14025 and the relevant Product Category Rules, independently verified and registered.',
      'We manage the programme-operator relationship and the verification, so the declaration arrives in the format the tender asks for.'
    ]
  },
  why: {
    statement: 'An EPD is not a marketing document. It is a ticket to bid.',
    sub: 'Which is why the verification step is the one that matters, and the one that cannot be shortened.'
  },
  related: [{ label: 'Life cycle assessment', href: U.lca }, { label: 'Product carbon footprint', href: U.pcf }],
  faq: [
    { q: 'What is an EPD?', a: 'A Type III declaration: an independently verified report of a product&#39;s life-cycle impacts in a comparable format.' },
    { q: 'Why must it be verified?', a: 'Unverified declarations do not qualify in tenders or green-building certifications.' },
    { q: 'What is a PCR?', a: 'Product Category Rules — the shared method for a product category that makes one declaration comparable with another.' }
  ]
});

/* ---------------------------------------------------- STRATEGY & RISK */
export const csr = svc({
  file: U.csr, url: '/csr-strategy',
  title: 'CSR Strategy | Purpose that Withstands Scrutiny | Offsetease',
  description: 'A CSR strategy that ties social investment to the business — focused, measurable, and defensible to boards, regulators and communities alike.',
  keywords: ['CSR strategy', 'corporate social responsibility strategy', 'CSR advisory', 'social impact strategy'],
  h1: 'A CSR strategy tied to the business, not bolted on.',
  headline: 'A CSR strategy tied to the|business, not bolted on.',
  crumbLabel: 'CSR strategy', photo: 'tree-nursery',
  serviceType: 'CSR strategy advisory',
  lede: 'We build a CSR strategy that connects social investment to where the business actually creates and depends on value. Focused rather than scattered, measurable rather than anecdotal, and defensible to a board, a regulator and the communities it serves.',
  scrollHint: 'The work',
  work: {
    items: [
      { title: 'A clear thesis', body: 'Where and how you invest, and why those places rather than any others.' },
      { title: 'Priority themes', body: 'Aligned to your operations, your value chain and the UN SDGs.' },
      { title: 'Governance and budget', body: 'Decision rights, funding and review, so the programme survives a change of sponsor.' },
      { title: 'Measurement', body: 'Outcomes that can be evidenced rather than described.' },
      { title: 'Statutory alignment in India', body: 'Compliance with statutory CSR obligations, without reducing the work to a compliance line item.' }
    ],
    title: 'Five things that separate a programme from a donation list.'
  },
  figure: {
    kicker: 'Where to concentrate', title: 'The strongest programmes sit where you already operate.',
    lede: 'Concentration beats spread. The communities and ecosystems your operations and your carbon projects already touch are where investment compounds and where the evidence is easiest to gather.',
    tone: 'deep',
    fig: F.nested({
      title: 'Concentric priority for social investment',
      bands: [
        { n: 'Third ring', title: 'Wider society', body: ['National causes with no operational link.', 'Hardest to evidence, easiest to question.'] },
        { n: 'Second ring', title: 'Value chain', body: ['Supplier communities and sourcing regions', 'where your purchasing already has weight.'] },
        { n: 'First ring', title: 'Operating footprint', body: ['Sites, project communities and ecosystems', 'you already affect and already measure.'] }
      ],
      caption: 'Investment in the inner rings is both more defensible and more measurable.'
    })
  },
  why: {
    statement: 'A catalogue of unrelated donations is not a strategy, and a board can tell.',
    sub: 'A clear link to the business, measurable outcomes and honest governance are what make a programme credible to a regulator and to the communities it serves.'
  },
  related: [{ label: 'Double materiality', href: U.dma }, { label: 'Nature-based projects', href: U.nature }, { label: 'Sustainability reporting', href: U.reporting }],
  faq: [
    { q: 'What makes a CSR strategy credible?', a: 'A clear link to the business, measurable outcomes, and honest governance — not a catalogue of unrelated donations.' },
    { q: 'Can CSR reinforce our carbon and ESG work?', a: 'Yes. The strongest programmes concentrate on the communities and ecosystems your operations and projects already touch.' }
  ]
});

export const dma = svc({
  file: U.dma, url: '/double-materiality-assessment',
  title: 'ESG & Double Materiality Assessment | Offsetease',
  description: 'A rigorous double materiality assessment — what matters to your business and to the world — that anchors CSRD, IFRS and a defensible ESG strategy.',
  keywords: ['double materiality assessment', 'ESG materiality', 'CSRD materiality', 'materiality analysis'],
  h1: 'What matters — to the business, and to the world.',
  headline: 'What matters -- to the business,|and to the world.',
  crumbLabel: 'Double materiality', photo: 'fog-forest',
  serviceType: 'Double materiality assessment',
  lede: 'Double materiality asks two questions at once: which sustainability issues affect your business, and which impacts your business has on people and the planet. We run the assessment rigorously, because it is the foundation CSRD, IFRS disclosure and a serious ESG strategy all stand on.',
  scrollHint: 'Two questions at once',
  figure: {
    kicker: 'Two questions at once', title: 'Both axes, assessed on their own evidence.',
    lede: 'An issue can be material on one axis and not the other. Scoring them together, or scoring impact by proxy from financial risk, is the most common way an assessment fails assurance.',
    fig: F.matrix2x2({
      title: 'The double materiality matrix',
      xLabel: 'Financial materiality',
      yLabel: 'Impact materiality',
      quadrants: [
        { label: 'Material by impact', weight: 0.08 },
        { label: 'Material on both axes — the core of the report', weight: 0.16 },
        { label: 'Monitor', weight: 0.03 },
        { label: 'Material by financial risk', weight: 0.08 }
      ],
      plots: [
        { x: 0.80, y: 0.84, label: 'Climate', r: 10 },
        { x: 0.34, y: 0.74, label: 'Biodiversity', r: 8 },
        { x: 0.72, y: 0.42, label: 'Value-chain labour', r: 8 },
        { x: 0.26, y: 0.24, label: 'Waste', r: 6 }
      ],
      caption: 'Illustrative placements. Your matrix is produced from stakeholder evidence and scored against recognised methodology, not from a template.'
    })
  },
  work: {
    items: [
      { title: 'Stakeholder and impact mapping', body: 'Who is affected, how, and who has standing to say so.' },
      { title: 'Scored against recognised methodology', body: 'Financial materiality and impact materiality assessed separately, each on its own evidence.' },
      { title: 'A defensible matrix', body: 'Evidenced, documented, and able to survive assurance.' },
      { title: 'Direction for effort and capital', body: 'The assessment should change what you do next, or it was an exercise.' }
    ],
    title: 'Four steps, done in the right order.'
  },
  why: {
    title: 'Why a weak assessment undermines everything downstream.',
    paras: [
      'Under CSRD, the assessment is the required basis for what a company discloses. If it is thin, every topic selection in the report inherits that weakness.',
      'It is also the cheapest place to get the scope right. Correcting a materiality assessment after a reporting cycle costs far more than running it properly once.'
    ]
  },
  related: [{ label: 'Sustainability reporting', href: U.reporting }, { label: 'Climate risk & TCFD', href: U.risk }, { label: 'CSR strategy', href: U.csr }],
  faq: [
    { q: 'What is double materiality?', a: 'The assessment of both how sustainability issues affect the company (financial materiality) and how the company affects the world (impact materiality).' },
    { q: 'Why does it matter under CSRD?', a: 'It is the required basis for what a company discloses. A weak assessment undermines the entire report.' },
    { q: 'How often should it be refreshed?', a: 'Ordinarily every reporting cycle, and immediately after a material change to the business, the value chain or the regulatory perimeter.' }
  ]
});

export const risk = svc({
  file: U.risk, url: '/climate-risk-tcfd',
  title: 'Climate Risk & TCFD | IFRS S2-Ready | Offsetease',
  description: 'Quantified physical and transition climate risk, scenario-tested, TCFD-structured and IFRS S2-ready — decision-grade for your board, CFO and investors.',
  keywords: ['climate risk assessment', 'TCFD', 'IFRS S2', 'climate scenario analysis', 'transition risk'],
  h1: 'Climate risk, quantified and disclosure-ready.',
  headline: 'Climate risk, quantified|and disclosure-ready.',
  crumbLabel: 'Climate risk & TCFD', photo: 'river-delta',
  serviceType: 'Climate risk and TCFD advisory',
  lede: 'We assess and quantify physical and transition climate risk, test it against scenarios, and structure the output to TCFD and IFRS S2. The result is decision-grade: exposures a board can act on, priced in the language a CFO and investors recognise.',
  scrollHint: 'Two kinds of risk',
  figure: {
    kicker: 'Two kinds of risk', title: 'One comes from the climate. The other comes from the response to it.',
    lede: 'A company can be lightly exposed on one axis and heavily exposed on the other. Assessing them together, without separating the drivers, is how a board ends up with a number it cannot act on.',
    fig: F.matrix2x2({
      title: 'Physical and transition exposure',
      xLabel: 'Transition exposure',
      yLabel: 'Physical exposure',
      quadrants: [
        { label: 'Asset and operations risk', weight: 0.08 },
        { label: 'Exposed on both — priority for capital', weight: 0.16 },
        { label: 'Monitor and review', weight: 0.03 },
        { label: 'Policy, carbon price and market risk', weight: 0.08 }
      ],
      plots: [
        { x: 0.82, y: 0.62, label: 'EU-exporting plant', r: 10 },
        { x: 0.30, y: 0.78, label: 'Coastal site', r: 8 },
        { x: 0.70, y: 0.22, label: 'Carbon-priced input', r: 8 },
        { x: 0.22, y: 0.26, label: 'Office estate', r: 6 }
      ],
      caption: 'Illustrative placements. Real exposures are mapped to your assets and value chain, then tested against recognised climate and policy pathways.'
    })
  },
  work: {
    items: [
      { title: 'Physical risk', body: 'Acute and chronic hazards across sites and the value chain, from flooding and heat to water stress, mapped to assets and operations.' },
      { title: 'Transition risk', body: 'Policy, carbon pricing, technology and market shifts, including exposure to mechanisms such as CBAM.' },
      { title: 'Scenario analysis', body: 'Performance tested across recognised climate and policy pathways.' },
      { title: 'Quantification', body: 'Material risks and opportunities expressed financially.' },
      { title: 'Disclosure', body: 'Structured for IFRS S2, which builds directly on the TCFD recommendations.' }
    ],
    title: 'Five pieces of work, one decision-grade output.'
  },
  why: {
    statement: 'Assurance rewards analysis that is quantified and scenario-tested. It exposes analysis that is narrative and generic.',
    sub: 'Climate risk is now a governance and disclosure obligation, not a sustainability footnote.'
  },
  related: [{ label: 'Sustainability reporting', href: U.reporting }, { label: 'CBAM compliance', href: U.cbam },
            { label: 'Double materiality', href: U.dma }, { label: 'Net zero & decarbonization', href: U.netzero }],
  faq: [
    { q: 'Is TCFD still relevant under IFRS S2?', a: 'Yes. IFRS S2 builds on TCFD, so the work maps straight across.' },
    { q: 'What is scenario analysis?', a: 'Testing how the business performs under different climate and policy futures, to reveal material physical and transition risk.' },
    { q: 'What is the difference between physical and transition risk?', a: 'Physical risk comes from a changing climate; transition risk comes from the shift to a low-carbon economy.' }
  ]
});

export const supplier = svc({
  file: U.supplier, url: '/supplier-esg-assessment',
  title: 'Supplier & Value-Chain ESG Assessment | Offsetease',
  description: 'Assess and engage your suppliers on ESG — the Scope 3, due-diligence and disclosure evidence your buyers, regulators and rating agencies now require.',
  keywords: ['supplier ESG assessment', 'value chain ESG', 'Scope 3 supplier engagement', 'supply chain due diligence'],
  h1: 'Your ESG position is only as strong as your value chain.',
  headline: 'Your ESG position is only as|strong as your value chain.',
  crumbLabel: 'Supplier & value-chain ESG', photo: 'container-port',
  serviceType: 'Supplier and value-chain ESG assessment',
  lede: 'Most of a company&#39;s emissions, and much of its regulatory and reputational risk, sit in its value chain. We assess and engage your suppliers on ESG, and build the evidence base that CBAM, EUDR, CSDDD-style due diligence, BRSR value-chain disclosure and customer scorecards increasingly demand.',
  scrollHint: 'The work',
  work: {
    items: [
      { title: 'Segmentation and risk screening', body: 'Suppliers sorted by spend, substitutability and exposure across environmental, social and governance criteria.' },
      { title: 'Primary data collection', body: 'Real Scope 3 evidence to replace industry-average estimates.' },
      { title: 'Engagement and improvement plans', body: 'Practical asks, sequenced so suppliers can actually meet them.' },
      { title: 'A traceable record', body: 'Aligned to your disclosure and procurement requirements, and ready when a customer asks.' }
    ],
    title: 'Four steps that turn pressure into an asset.'
  },
  figure: {
    kicker: 'How far the requests reach', title: 'Being out of scope does not mean being out of reach.',
    lede: 'Value-chain requests now reach far below regulatory thresholds. Even where a company is out of direct scope, its buyers are not, and the data flows down.',
    tone: 'deep',
    fig: F.spine({
      dense: true,
      steps: [
        { title: 'Regulator', body: 'Sets the obligation on the largest companies.' },
        { title: 'In-scope buyer', body: 'Must report value-chain data, so asks its suppliers.' },
        { title: 'Tier 1 supplier', body: 'Out of direct scope, but contractually required to answer.' },
        { title: 'Tier 2 and beyond', body: 'The same question, passed down again.' }
      ],
      caption: 'A structured supplier programme turns that pressure into a manageable, defensible asset rather than an annual scramble.'
    })
  },
  why: {
    title: 'Why this is the hardest data to get, and the most valuable.',
    paras: [
      'Scope 3, due diligence and buyer scorecards all depend on value-chain data you do not hold until you collect it.',
      'Primary supplier data replaces industry averages, producing a more accurate and more defensible footprint — and one that improves rather than merely changes each year.'
    ]
  },
  related: [{ label: 'GHG accounting', href: U.ghg }, { label: 'EUDR compliance', href: U.eudr },
            { label: 'CBAM compliance', href: U.cbam }, { label: 'EcoVadis', href: U.ecovadis }],
  faq: [
    { q: 'Why assess suppliers on ESG?', a: 'Because Scope 3, due diligence and buyer scorecards all depend on value-chain data you do not hold until you collect it.' },
    { q: 'How does this support Scope 3?', a: 'Primary supplier data replaces industry averages, producing a more accurate and defensible footprint.' },
    { q: 'What if our suppliers will not respond?', a: 'Response rates follow from segmentation and sequencing. Asking every supplier for everything produces silence; asking the right suppliers for what they can provide produces data.' }
  ]
});

/* ------------------------------------------------------------ DISCLOSURE */
export const reporting = svc({
  file: U.reporting, url: '/sustainability-reporting',
  title: 'Sustainability Reporting | BRSR · CSRD · IFRS | Offsetease',
  description: 'Assurance-ready reporting across BRSR, CSRD and IFRS S1/S2 from a single data backbone — report once, satisfy the frameworks you answer to.',
  keywords: ['sustainability reporting', 'BRSR', 'CSRD', 'IFRS S1 S2', 'ESRS'],
  h1: 'One backbone. Every framework.',
  headline: 'One backbone.|Every framework.',
  crumbLabel: 'Sustainability reporting', photo: 'eroded-terrain',
  serviceType: 'Sustainability reporting and assurance readiness',
  lede: 'We prepare assurance-ready reports across BRSR, CSRD and IFRS S1/S2 from a single dataset, so a company reports once and satisfies many. As frameworks converge on the IFRS baseline, that consolidation is where both the cost saving and the credibility come from.',
  scrollHint: 'Build once, map across',
  figure: {
    kicker: 'Build once, map across', title: 'One dataset, every framework it has to answer.',
    fig: F.backbone({
      source: { title: 'One measured dataset', sub: 'Boundary \u00b7 activity data \u00b7 assurance trail' },
      targets: ['BRSR & BRSR Core', 'CSRD / ESRS', 'IFRS S1 & S2', 'TCFD', 'GRI', 'CDP'],
      caption: 'The frameworks overlap heavily around the IFRS baseline, so we build once and map across.'
    })
  },
  work: {
    items: [
      { title: 'BRSR and BRSR Core', body: 'For large Indian listed entities, with assured KPIs extending toward the top thousand.' },
      { title: 'CSRD and ESRS', body: 'For in-scope EU and large non-EU groups, with double materiality and limited assurance preserved through the Omnibus.' },
      { title: 'IFRS S1 and S2', body: 'The global baseline, now adopted across more than twenty jurisdictions.' },
      { title: 'One dataset, mapped', body: 'Across BRSR, IFRS, GRI, TCFD and CDP, so each year costs less than the last.' }
    ],
    title: 'Four obligations, usually more than one at a time.'
  },
  why: {
    statement: 'Assurance readiness should start a full reporting cycle before it is mandatory.',
    sub: 'Reliable baseline data takes time to build, and an auditor cannot assure a number whose provenance nobody recorded.'
  },
  related: [{ label: 'GHG accounting', href: U.ghg }, { label: 'Double materiality', href: U.dma },
            { label: 'Climate risk & TCFD', href: U.risk }, { label: 'CDP', href: U.cdp }],
  faq: [
    { q: 'Which framework applies to us?', a: 'Often several at once. We map the exact obligations across your jurisdictions and value chain.' },
    { q: 'Can one dataset serve them all?', a: 'Yes. The frameworks overlap heavily around the IFRS baseline, so we build once and map across.' },
    { q: 'Do we still report under CSRD after the Omnibus?', a: 'Very large EU companies and large non-EU groups above the threshold do. Scope narrowed; assurance and double materiality remain.' }
  ]
});

/* ------------------------------------------------- RATINGS & COMPLIANCE */
export const ecovadis = svc({
  file: U.ecovadis, url: '/ecovadis-rating',
  title: 'EcoVadis Rating Improvement | Bronze to Platinum | Offsetease',
  description: 'Move your EcoVadis medal methodically — evidence-led improvement across environment, labour, ethics and procurement, managed until the score moves.',
  keywords: ['EcoVadis', 'EcoVadis score improvement', 'EcoVadis medal', 'EcoVadis Gold'],
  h1: 'Move the medal your customers gate on.',
  headline: 'Move the medal your|customers gate on.',
  crumbLabel: 'EcoVadis', photo: 'factory-interior',
  serviceType: 'EcoVadis rating improvement',
  lede: 'EcoVadis rates sustainability management across environment, labour and human rights, ethics and sustainable procurement, and your customers gate procurement on the result. We improve the score methodically, closing evidence gaps in the themes that carry the most weight until the medal moves.',
  scrollHint: 'Four themes',
  figure: {
    kicker: 'Four themes', title: 'The score is evidence, weighted by your profile.',
    lede: 'EcoVadis does not rate intent. It rates documented management systems, weighted by industry and size — which is why the fastest gains usually come from evidencing what you already do.',
    fig: F.radial4({
      centre: ['One weighted', 'scorecard'],
      items: [
        { n: '01', title: 'Environment', body: ['Operational and product impacts,', 'policies, actions and results.'] },
        { n: '02', title: 'Labour & human rights', body: ['Working conditions, health and safety,', 'and human rights across the operation.'] },
        { n: '03', title: 'Ethics', body: ['Corruption, anti-competitive practice', 'and information management.'] },
        { n: '04', title: 'Sustainable procurement', body: ['Supplier environmental and social', 'practice, and how you manage it.'] }
      ],
      caption: 'Weighting varies by industry and company size. We diagnose which themes carry the most weight for your profile before touching anything.'
    })
  },
  work: {
    title: 'Diagnosis first, then evidence, then the medal.',
    paras: [
      'Scorecard diagnosis, evidence and policy build-out across all four themes, and a prioritised path from Bronze or Silver toward Gold or Platinum.',
      'We manage the process end to end, because the difference between a score that moves and one that does not is usually administrative follow-through rather than ambition.'
    ],
    after: F.ladder({
      rungs: [
        { label: 'Bronze', sub: 'Managed' },
        { label: 'Silver', sub: 'Advanced' },
        { label: 'Gold', sub: 'Leading' },
        { label: 'Platinum', sub: 'Outstanding', on: true }
      ],
      note: 'The medal bands, in ascending order. Where you can realistically reach in one cycle depends on your starting scorecard and the evidence already in place.'
    })
  },
  why: {
    statement: 'Your customers gate procurement on the result, and they can see it.',
    sub: 'Which makes the scorecard a commercial document rather than a sustainability one.'
  },
  related: [{ label: 'Supplier & value-chain ESG', href: U.supplier }, { label: 'CDP', href: U.cdp }, { label: 'Sustainability reporting', href: U.reporting }],
  faq: [
    { q: 'How is the score calculated?', a: 'Across four themes, weighted by industry and size, and evidenced by documentation.' },
    { q: 'How do we reach Gold?', a: 'By systematically closing the evidence and policy gaps that carry the most weight for your profile. We manage the process end to end.' },
    { q: 'How long does improvement take?', a: 'Usually one assessment cycle to move a band, provided the evidence work starts well before the questionnaire reopens.' }
  ]
});

export const cdp = svc({
  file: U.cdp, url: '/cdp-reporting',
  title: 'CDP Reporting & Score | Toward the A List | Offsetease',
  description: 'Stronger CDP disclosure across climate, water and forests — IFRS-aligned and prepared to move you up the A–D scale, in public.',
  keywords: ['CDP reporting', 'CDP score', 'CDP A List', 'CDP disclosure'],
  h1: 'A stronger score, disclosed in public.',
  headline: 'A stronger score,|disclosed in public.',
  crumbLabel: 'CDP', photo: 'fog-forest',
  serviceType: 'CDP disclosure and scoring',
  lede: 'CDP scores environmental disclosure from A to D-, and the result is public. We prepare CDP responses across climate, water and forests, now aligned to the IFRS climate baseline, and build the evidence that moves the score toward Leadership.',
  scrollHint: 'The bands',
  figure: {
    kicker: 'The bands', title: 'From disclosure to leadership.',
    lede: 'The bands reward progression: disclosing, then understanding your impacts, then managing them, then demonstrating best practice. Skipping a level is not how the scale works.',
    tone: 'deep',
    fig: F.ladder({
      rungs: [
        { label: 'D / D-', sub: 'Disclosure' },
        { label: 'C / C-', sub: 'Awareness' },
        { label: 'B / B-', sub: 'Management' },
        { label: 'A / A-', sub: 'Leadership', on: true }
      ],
      note: 'CDP scores from A to D-. The Leadership band, A or A-, signals best-practice disclosure and action.'
    })
  },
  work: {
    title: 'Full preparation, aligned to what you already report.',
    paras: [
      'Full questionnaire preparation aligned to IFRS S2 and TCFD, gap analysis against scoring criteria, and the governance and data evidence that lifts a score toward A or A-.',
      'Because CDP aligns with the IFRS climate baseline, strong GHG and climate-risk data serves both — the work is not a separate exercise.'
    ]
  },
  why: {
    statement: 'The score is public, and it is read by the people who finance you.',
    sub: 'A weak response is not a neutral outcome. It is a disclosed one.'
  },
  related: [{ label: 'GHG accounting', href: U.ghg }, { label: 'Climate risk & TCFD', href: U.risk }, { label: 'Sustainability reporting', href: U.reporting }],
  faq: [
    { q: 'What is a strong CDP score?', a: 'The Leadership band, A or A-, signals best-practice disclosure and action.' },
    { q: 'Does CDP align with other frameworks?', a: 'Yes. It aligns with the IFRS climate baseline, so strong GHG and climate-risk data serves both.' },
    { q: 'Which questionnaires do you cover?', a: 'Climate, water and forests.' }
  ]
});

export const cbam = svc({
  file: U.cbam, url: '/cbam-compliance',
  title: 'CBAM Compliance | Verified Data Protects Margin | Offsetease',
  description: 'Navigate the EU CBAM definitive regime with verified embedded-emissions data that beats default values and protects margin on exports to the EU.',
  keywords: ['CBAM compliance', 'Carbon Border Adjustment Mechanism', 'embedded emissions', 'CBAM exporters'],
  h1: 'Verified data beats default values.',
  headline: 'Verified data beats|default values.',
  crumbLabel: 'CBAM', photo: 'molten-steel',
  serviceType: 'CBAM compliance advisory',
  lede: 'The EU Carbon Border Adjustment Mechanism prices the carbon embedded in imported iron and steel, aluminium, cement, fertilisers, electricity and hydrogen. In its definitive regime since January 2026, it carries real cost.',
  scrollHint: 'Verified against default',
  figure: {
    kicker: 'Verified against default', title: 'Default values are set conservatively. That is the point of them.',
    lede: 'Where you cannot evidence your actual embedded emissions, the declared figure defaults to a deliberately cautious value — which is usually higher than your real one, and paid for at the border.',
    fig: F.compare({
      title: 'Declared embedded emissions: verified against default',
      rows: [
        { label: 'Default value', sub: 'Used when data is absent', value: 1.0, tag: 'Higher charge', tone: 'amber' },
        { label: 'Verified actual data', sub: 'Product-level, checked', value: 0.62, tag: 'Typically lower', tone: 'signal' }
      ],
      note: 'Illustrative. The gap is specific to your process, energy mix and product.',
      caption: 'Verified embedded-emissions data almost always beats punitive default values, and protects margin. The size of the gap is what the modelling establishes.'
    })
  },
  work: {
    items: [
      { title: 'Product-level embedded emissions', body: 'Calculated per product, at the level the declaration requires.' },
      { title: 'Verified data to replace defaults', body: 'Independently checked, so it stands at the border.' },
      { title: 'Declarant support', body: 'Through the definitive regime and its reporting cycle.' },
      { title: 'Margin-impact modelling', body: 'What the charge does to price, and where it can be recovered.' },
      { title: 'Scope confirmation', body: 'A recent mass-based exemption removes most of the smallest importers from the paperwork; we confirm your scope and minimise your exposure.' }
    ],
    title: 'Five pieces of work, in order of what they save you.'
  },
  why: {
    statement: 'CBAM moved from a reporting exercise to a cost line in January 2026.',
    sub: 'It is now a procurement and pricing question, which is why it belongs with the CFO rather than only with sustainability.'
  },
  related: [{ label: 'Product carbon footprint', href: U.pcf }, { label: 'Supplier & value-chain ESG', href: U.supplier },
            { label: 'Climate risk & TCFD', href: U.risk }, { label: 'Industries', href: U.industries }],
  faq: [
    { q: 'When did CBAM begin charging?', a: 'Its definitive regime began in January 2026, moving CBAM from reporting to actual cost.' },
    { q: 'Why does verified data matter?', a: 'Default values are deliberately conservative and usually higher. Verified data typically lowers the charge.' },
    { q: 'Which goods are covered?', a: 'Iron and steel, aluminium, cement, fertilisers, electricity and hydrogen.' }
  ]
});

export const eudr = svc({
  file: U.eudr, url: '/eudr-compliance',
  title: 'EUDR Compliance | Deforestation-Free, Plot-Level | Offsetease',
  description: 'Meet the EU Deforestation Regulation with plot-level geolocation and due diligence — deforestation-free supply chains, ready before the deadline.',
  keywords: ['EUDR compliance', 'EU Deforestation Regulation', 'deforestation-free', 'plot-level geolocation'],
  h1: 'Deforestation-free, proven to the plot.',
  headline: 'Deforestation-free,|proven to the plot.',
  crumbLabel: 'EUDR', photo: 'mangrove-river',
  serviceType: 'EUDR compliance advisory',
  lede: 'The EU Deforestation Regulation requires covered commodities placed on the EU market to be deforestation-free and traceable to the plot where they were produced. We build the geolocation and due-diligence systems that prove it, ahead of the deadline.',
  scrollHint: 'Proven to the plot',
  figure: {
    kicker: 'Proven to the plot', title: 'Traceability is not a supplier declaration. It is a coordinate.',
    lede: 'Plot-level geolocation means precise coordinates for the land where a commodity was produced, checked against deforestation data — not an assurance letter from the tier above you.',
    fig: F.plots({
      title: 'Plot-level geolocation and screening',
      caption: 'Illustrative. Each plot carries coordinates checked against deforestation data and the EU benchmarking system; flagged plots go to review before the commodity moves.'
    })
  },
  work: {
    items: [
      { title: 'Plot-level geolocation', body: 'Coordinates captured for every production unit in scope.' },
      { title: 'Due-diligence statements', body: 'Prepared and filed, with the risk assessment behind them.' },
      { title: 'Risk assessment', body: 'Against the EU benchmarking system for country risk.' },
      { title: 'Supply-chain traceability', body: 'With supplier engagement, so the data keeps arriving after the first cycle.' }
    ],
    title: 'Four pieces, and the data has to be real.'
  },
  why: {
    statement: 'Current deadlines give large operators until the end of 2026 and small operators into 2027.',
    sub: 'That is enough time to build the data properly. It is not enough time to delay.'
  },
  related: [{ label: 'Supplier & value-chain ESG', href: U.supplier }, { label: 'ISCC certification', href: U.iscc }, { label: 'Nature-based projects', href: U.nature }],
  faq: [
    { q: 'Which products does EUDR cover?', a: 'Commodities such as cattle, cocoa, coffee, palm oil, rubber, soy and wood, and many derived products.' },
    { q: 'What is plot-level geolocation?', a: 'Precise coordinates for the land where a commodity was produced, checked against deforestation data.' },
    { q: 'When are the deadlines?', a: 'Current deadlines give large operators until the end of 2026 and small operators into 2027.' }
  ]
});

export const iscc = svc({
  file: U.iscc, url: '/iscc-certification',
  title: 'ISCC Certification | EU · PLUS · CORSIA | Offsetease',
  description: 'ISCC certification for sustainable, traceable supply chains — EU, PLUS and CORSIA — from readiness to audit.',
  keywords: ['ISCC certification', 'ISCC EU', 'ISCC PLUS', 'CORSIA'],
  h1: 'Certified sustainability, traceable end to end.',
  headline: 'Certified sustainability,|traceable end to end.',
  crumbLabel: 'ISCC', photo: 'container-port',
  serviceType: 'ISCC certification advisory',
  lede: 'ISCC certifies that materials and fuels are produced sustainably and traceable along the chain. We guide the right scheme, ISCC EU, ISCC PLUS or CORSIA, from readiness through audit, so certification opens markets rather than sitting in a drawer.',
  scrollHint: 'Readiness to audit',
  figure: {
    kicker: 'Readiness to audit', title: 'Chain of custody is where certifications are won and lost.',
    lede: 'The scheme is the easy choice. Mass balance and chain-of-custody discipline is the part that has to hold every day between audits.',
    tone: 'deep',
    fig: F.spine({
      steps: [
        { title: 'Scheme selection', body: 'ISCC EU, ISCC PLUS or CORSIA, matched to the market you sell into.' },
        { title: 'Gap assessment', body: 'What the scheme requires against what you currently evidence.' },
        { title: 'Chain of custody', body: 'Mass-balance setup and the records that keep it defensible.' },
        { title: 'Audit preparation', body: 'Documentation, walkthrough and corrective actions.' },
        { title: 'Ongoing compliance', body: 'Support between audits, when the discipline usually slips.' }
      ]
    })
  },
  work: {
    title: 'Scheme selection, gap assessment, chain of custody, audit.',
    paras: [
      'Scheme selection, gap assessment, chain-of-custody and mass-balance setup, and audit preparation with ongoing compliance support.',
      'ISCC EU suits regulated markets, ISCC PLUS covers circular and bio-based materials, and CORSIA applies to sustainable aviation fuels.'
    ]
  },
  why: {
    statement: 'Certification should open a market, not decorate a wall.',
    sub: 'Which scheme you choose determines which customers you can sell to, so the selection is a commercial decision before it is a technical one.'
  },
  related: [{ label: 'Life cycle assessment', href: U.lca }, { label: 'EUDR compliance', href: U.eudr }, { label: 'Supplier & value-chain ESG', href: U.supplier }],
  faq: [
    { q: 'Which scheme do we need?', a: 'ISCC EU for regulated markets, ISCC PLUS for circular and bio-based materials, CORSIA for sustainable aviation fuels.' },
    { q: 'What does ISCC prove?', a: 'Sustainable production and full chain-of-custody traceability that customers and regulators recognise.' }
  ]
});

/* ------------------------------------------------------ TARGETS & REDUCTION */
export const sbti = svc({
  file: U.sbti, url: '/sbti-target-setting',
  title: 'SBTi Target Setting | Science-Based Targets | Offsetease',
  description: 'Science-based targets set and validated under the SBTi Net-Zero Standard — credible, fundable, and ready for the V2 requirements taking effect from 2028.',
  keywords: ['SBTi', 'science-based targets', 'Net-Zero Standard', 'target validation'],
  h1: 'Ambitious enough to be credible, feasible enough to be funded.',
  headline: 'Ambitious enough to be credible,|feasible enough to be funded.',
  crumbLabel: 'SBTi target setting', photo: 'hero-canopy',
  serviceType: 'Science-based target setting',
  lede: 'We set and validate science-based targets under the SBTi framework, and prepare companies for the Corporate Net-Zero Standard V2, mandatory from 2028, including its interim removal expectations and its concept of ongoing emissions responsibility.',
  scrollHint: 'What changes in 2028',
  figure: {
    kicker: 'What changes in 2028', title: 'V2 is not a refresh. It changes what a target has to contain.',
    fig: F.timeline({
      events: [
        { date: 'Now', title: 'Near-term targets', body: 'In-boundary reductions across all three scopes. Credits do not count toward these.' },
        { date: 'Before 2028', title: 'V2 readiness', body: 'Model the interim removal expectations and the ongoing-emissions concept into the pathway.' },
        { date: 'From 2028', title: 'Net-Zero Standard V2 mandatory', body: 'Interim removal targets that scale over time, and a reframing of ongoing emissions responsibility.' },
        { date: 'Long term', title: 'Net zero', body: 'Deep reduction first, with durable removals neutralising the residual.' }
      ],
      caption: 'Dates as set out in the current standard. We confirm the applicable requirements for your sector and base year before any submission.'
    })
  },
  work: {
    items: [
      { title: 'Target design across all three scopes', body: 'Near-term and net-zero targets, built on an inventory that can carry them.' },
      { title: 'Fundable modelling', body: 'Targets that a CFO can finance rather than merely aspire to.' },
      { title: 'Submission and validation', body: 'Managed through to validation, including the queries that come back.' },
      { title: 'V2 readiness built in', body: 'So the target you validate now still works after 2028.' }
    ],
    title: 'Four pieces, designed to survive validation.'
  },
  why: {
    statement: 'Credits do not count toward near-term reduction targets.',
    sub: 'Those require in-boundary cuts. Credits support beyond-value-chain mitigation and, under V2, ongoing emissions responsibility — a distinction worth getting right before a target is announced.'
  },
  related: [{ label: 'Net zero & decarbonization', href: U.netzero }, { label: 'GHG accounting', href: U.ghg }, { label: 'Durable removals', href: U.durable }],
  faq: [
    { q: 'Do carbon credits count toward SBTi targets?', a: 'Not near-term reduction targets, which require in-boundary cuts. Credits support beyond-value-chain mitigation and, under V2, ongoing emissions responsibility.' },
    { q: 'What changes under V2?', a: 'Interim removal targets that scale over time and a reframing of ongoing emissions, mandatory from 2028.' },
    { q: 'What has to exist before we can set a target?', a: 'A defensible inventory across all three scopes. A target set on weak Scope 3 data does not survive validation.' }
  ]
});

export const netzero = svc({
  file: U.netzero, url: '/net-zero-decarbonization',
  title: 'Net Zero & Decarbonization | A Funded Pathway | Offsetease',
  description: 'A net-zero pathway your CFO will finance — marginal abatement modelling, sequenced delivery and capital planning, closed with high-integrity removals.',
  keywords: ['net zero pathway', 'decarbonization strategy', 'marginal abatement cost curve'],
  h1: 'A pathway your CFO will finance.',
  headline: 'A pathway your|CFO will finance.',
  crumbLabel: 'Net zero & decarbonization', photo: 'basalt-columns',
  serviceType: 'Net zero and decarbonization strategy',
  lede: 'We turn a net-zero pledge into a funded, sequenced pathway. Marginal abatement is modelled and sequenced for finance-ability, capital is arranged, and the residual, hard-to-abate emissions are closed with high-integrity removals. Reductions lead; removals finish.',
  scrollHint: 'The abatement curve',
  figure: {
    kicker: 'The abatement curve', title: 'Cheapest first is not always fundable first.',
    lede: 'A marginal abatement cost curve sorts measures by cost per tonne. The sequencing decision then has to account for capital availability, disruption and lead time — which is where most pathways fail.',
    fig: F.curve({
      title: 'Marginal abatement cost curve, schematic',
      points: [[0, 0.08], [0.16, 0.12], [0.32, 0.2], [0.48, 0.32], [0.62, 0.48], [0.76, 0.68], [0.88, 0.86], [1, 1]],
      xLabel: 'Cumulative abatement',
      yLabel: 'Cost per tonne',
      markers: [
        { x: 0.16, y: 0.12, label: 'Efficiency' },
        { x: 0.48, y: 0.32, label: 'Electrification' },
        { x: 0.88, y: 0.86, label: 'Residual — removals' }
      ],
      caption: 'Schematic. It shows the characteristic shape of an abatement curve, not your numbers. Your curve is built from your own inventory, sites and capital plan.'
    })
  },
  work: {
    items: [
      { title: 'Curve and pathway scenarios', body: 'A marginal abatement cost curve, and the scenarios that come off it.' },
      { title: 'Project structuring', body: 'Technology procurement and delivery sequencing.' },
      { title: 'A CFO-ready capital model', body: 'A financing model that reads as a business case, not a wish list.' },
      { title: 'Residual-emissions strategy', body: 'Drawn from our own high-integrity developed supply.' }
    ],
    title: 'Four pieces, and the fourth is where most plans stop short.'
  },
  why: {
    statement: 'Reductions carry the target. High-integrity removals address the residual you cannot yet eliminate.',
    sub: 'Getting that order wrong is the most expensive mistake in a net-zero plan, because it buys credits against emissions that could have been cut.'
  },
  related: [{ label: 'SBTi target setting', href: U.sbti }, { label: 'Durable removals', href: U.durable },
            { label: 'Carbon supply & offtake', href: U.offtake }, { label: 'GHG accounting', href: U.ghg }],
  faq: [
    { q: 'What is a net-zero pathway?', a: 'A costed, sequenced plan to cut emissions to near zero and neutralise the remainder with durable removals, mapped to targets and capital.' },
    { q: 'How do reductions and removals fit together?', a: 'Reductions carry the target; high-integrity removals address the residual you cannot yet eliminate.' },
    { q: 'Where does the capital come from?', a: 'That is part of the work. We build the financing model alongside the pathway, because an unfunded pathway is a statement rather than a plan.' }
  ]
});
