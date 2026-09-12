import { U } from '../nav.mjs';
import { site } from '../site.mjs';
import * as F from '../../lib/figures.mjs';
import { DIMENSIONS, LIFECYCLE } from './home.mjs';

const CRUMB_MARKETS = [{ label: 'Environmental markets', href: U.markets }];
const CRUMB_CPD = [...CRUMB_MARKETS, { label: 'Carbon project development', href: U.cpd }];

/* ------------------------------------------------------------- PILLAR */
export const markets = {
  file: U.markets, url: '/environmental-markets',
  title: 'Environmental Markets | High-Integrity Carbon | Offsetease',
  description: 'High-integrity carbon and renewable attributes, developed at source and delivered end to end, screened against The Source Standard.',
  keywords: ['high-integrity carbon credits', 'carbon project developer', 'carbon supply', 'environmental attributes'],
  h1: 'High-integrity carbon, developed at the source.',
  crumbLabel: 'Environmental markets',
  service: { name: 'Environmental markets', type: 'Carbon project development and supply' },
  hero: {
    photo: 'river-delta', sideScrim: true,
    kicker: 'Environmental markets',
    headline: 'High-integrity carbon,|developed at the source.',
    lede: 'We develop and deliver carbon that withstands scrutiny. Our work runs from origination to retirement, and every asset passes The Source Standard before it reaches a client.',
    buttons: [
      { href: U.contact, label: 'Request a briefing', variant: 'primary' },
      { href: U.source, label: 'The Source Standard', variant: 'ghost' }
    ],
    scrollHint: 'Two things sit at the centre'
  },
  blocks: [
    {
      type: 'split', tone: 'paper', n: '01', kicker: 'Two things sit at the centre',
      title: 'The projects we develop, and the standard we hold them to.',
      left: {
        k: 'The projects', h: 'h3', title: 'We are a carbon project developer first.',
        paras: ['Through Carbon Project Development we originate two kinds of high-integrity project -- nature-based projects and durable removals -- under Verra, Gold Standard, Puro.earth, Isometric and the Global Carbon Council. Selected avoidance and reduction where integrity and impact are strong.'],
        href: U.cpd, link: 'Carbon project development'
      },
      right: {
        k: 'The standard', h: 'h3', title: 'The Source Standard is applied at origin.',
        paras: ['Additionality and permanence, measurement and verification, market and legal integrity, people and nature -- documented across the full lifecycle. It is why what we deliver holds up years after the announcement.'],
        href: U.source, link: 'Read the method'
      }
    },
    {
      type: 'figure', tone: 'dark', n: '02', kicker: 'The flight to quality', layout: 'stacked',
      title: 'One market, two futures.',
      lede: 'The voluntary carbon market has split. We operate only in the half that lasts, and we develop supply at its source so our clients are not left competing for it.',
      fig: F.divide({
        left: { n: 'One half', title: 'Abundant', body: ['Cheap and plentiful.', 'Increasingly a liability under', 'audit, rating and press scrutiny.'] },
        right: { n: 'The other', title: 'Defensible', body: ['Scarce and scrutinised.', 'Priced at a premium, and the only', 'half a serious claim can rest on.'] },
        caption: 'Fewer than one in twenty credits issued today meets the emerging quality bar.'
      })
    },
    {
      type: 'tiles', tone: 'bone', n: '03', kicker: 'What we develop and supply', cols: 'g-2',
      title: 'Four ways into the work.',
      lede: 'One relationship, sized to the mandate. Most clients begin with one line and grow into the others.',
      items: [
        { k: 'Development', title: 'Carbon project development', body: 'Origination and development at the source, from feasibility through issuance, under the major registries.', href: U.cpd },
        { k: 'Nature-based', title: 'Nature-based projects', body: 'Afforestation and reforestation, REDD+, soil and blue carbon. Scale and evidenced co-benefits.', href: U.nature },
        { k: 'Durable', title: 'Durable removals', body: 'Biochar and enhanced weathering. Permanence for the emissions you cannot yet abate.', href: U.durable },
        { k: 'Supply', title: 'Carbon supply & offtake', body: 'Long-term offtake, managed portfolios and spot supply, with a complete audit trail.', href: U.offtake }
      ]
    },
    {
      type: 'band', photo: 'tree-nursery', n: '04', kicker: 'Impact is the point',
      title: 'We treat community and ecosystem benefit as the foundation of value, not a footnote to it.',
      paras: ['The credits that survive scrutiny are the ones that do measurable good on the ground: forests restored, biodiversity protected, livelihoods and clean cooking delivered.']
    },
    {
      type: 'figure', tone: 'paper', n: '05', kicker: 'How we engage',
      title: 'One relationship, sized to the mandate.',
      paras: [
        'Long-term offtake on transparent terms. Managed portfolios diversified across type, geography and vintage. Spot supply with full traceability.',
        'Renewable attributes, including I-RECs, sit alongside for Scope 2.'
      ],
      after: `<div class="pill-nav" data-reveal style="--d:.2s">
        <a class="pill" href="${U.offtake}">Carbon supply &amp; offtake</a>
        <a class="pill" href="${U.irec}">Renewable attributes</a>
        <a class="pill" href="${U.esg}">ESG &amp; sustainability</a></div>`,
      fig: F.spine({ steps: LIFECYCLE, dense: true, caption: 'Every asset carries a complete Source Standard record from origin to retirement.' })
    },
    {
      type: 'raw', tone: 'bone', tight: true,
      html: `<div class="stack-lg"><p class="kicker"><span class="kicker__n">06</span>Registries we develop under</p>
        ${F.chips(site.registries, ['Verra', 'Puro.earth'])}</div>`
    }
  ],
  faq: [
    { q: 'What makes a carbon credit high integrity?', a: 'Additionality, permanence, robust quantification, independent verification, no double counting, and genuine environmental and social benefit — the basis of The Source Standard.' },
    { q: 'Nature-based or durable removals?', a: 'Most credible portfolios hold both: nature-based for scale and co-benefits, durable removals for permanence. We set the mix to the mandate.' },
    { q: 'Do you broker credits, or develop them?', a: 'We develop. We originate and develop projects at the source, and we also supply screened credits from other developers — every asset passes the same screen, whatever its origin.' }
  ],
  faqN: '07'
};

/* ------------------------------------------------- THE SOURCE STANDARD */
export const sourceStandard = {
  file: U.source, url: '/the-source-standard',
  title: 'The Source Standard | Our Carbon Integrity Method | Offsetease',
  description: "The Source Standard is Offsetease's proprietary integrity method — a four-dimension screen applied at origin, extending beyond the ICVCM Core Carbon Principles.",
  keywords: ['carbon integrity method', 'high-integrity carbon screening', 'ICVCM Core Carbon Principles', 'carbon due diligence'],
  h1: 'The Source Standard.',
  crumbLabel: 'The Source Standard', crumbs: CRUMB_MARKETS,
  service: { name: 'The Source Standard', type: 'Carbon integrity screening' },
  hero: {
    kind: 'canvas', photo: 'eroded-terrain', sideScrim: true,
    kicker: 'The signature',
    headline: 'The Source|Standard.',
    lede: 'How we decide what carries our name. A screen applied at origin, before development proceeds and before a credit is supplied, across four dimensions that extend the ICVCM Core Carbon Principles. Assets that do not pass are not delivered.',
    buttons: [{ href: U.contact, label: 'Request a briefing', variant: 'primary' }],
    scrollHint: 'Four dimensions'
  },
  blocks: [
    {
      type: 'figure', tone: 'dark', n: '01', kicker: 'Four dimensions', layout: 'stacked',
      title: 'What every asset is screened against.',
      fig: F.radial4({ items: DIMENSIONS, centre: ['Screened', 'at origin'] })
    },
    {
      type: 'defs', tone: 'paper', n: '02', kicker: 'In detail',
      title: 'Each dimension, stated plainly.',
      items: [
        { term: 'Additionality and permanence', def: 'The reduction or removal would not have happened otherwise, and it lasts, buffered against reversal.' },
        { term: 'Measurement and verification', def: 'Conservative quantification and independent MRV, increasingly remote-sensed, so the numbers hold under assurance.' },
        { term: 'Market and legal integrity', def: 'Clear title, no double counting, and transparent retirement on a recognised registry.' },
        { term: 'People and nature', def: 'Measurable community and biodiversity benefit, aligned to the UN SDGs and evidenced, not asserted.' }
      ]
    },
    {
      type: 'figure', tone: 'deep', n: '03', kicker: 'Documented throughout', layout: 'stacked',
      title: 'One lifecycle, evidenced at every stage.',
      lede: 'The standard runs across one lifecycle and is documented at every stage rather than reported once at the end. A client inherits a complete, audit-ready record, not a certificate and a promise.',
      fig: F.spine({ steps: LIFECYCLE })
    },
    {
      type: 'statement', tone: 'bone', n: '04', kicker: 'Why it matters', wide: true,
      text: 'The cost of a credit that later fails is not the price paid. It is the claim withdrawn.',
      sub: 'High-integrity supply is scarce and priced at a premium. The Source Standard exists to keep that cost off our clients&#8217; balance sheets.'
    }
  ],
  faq: [
    { q: 'How does it differ from the ICVCM Core Carbon Principles?', a: 'It incorporates the Core Carbon Principles and adds our own origin-stage screening, verification and benefit-evidencing requirements.' },
    { q: 'Do you apply it to sourced credits too?', a: 'Yes. Every asset we supply passes the same screen, whatever its origin.' },
    { q: 'What happens to an asset that does not pass?', a: 'It is not delivered. The screen is applied before development proceeds and before a credit is supplied, so the question is settled at origin rather than after a claim has been made.' }
  ],
  faqN: '05'
};

/* --------------------------------------------- CARBON PROJECT DEVELOPMENT */
export const cpd = {
  file: U.cpd, url: '/carbon-project-development',
  title: 'Carbon Project Development, at the Source | Offsetease',
  description: 'We originate and develop high-integrity carbon projects in emerging markets — nature-based and durable removals — from feasibility to issuance.',
  keywords: ['carbon project development', 'carbon project developer', 'emerging markets carbon projects'],
  h1: 'Projects developed for integrity, from the first hectare.',
  crumbLabel: 'Carbon project development', crumbs: CRUMB_MARKETS,
  service: { name: 'Carbon project development', type: 'Carbon project origination and development' },
  hero: {
    photo: 'mangrove-river', sideScrim: true,
    kicker: 'Carbon project development',
    headline: 'Projects developed for integrity,|from the first hectare.',
    lede: 'We originate and develop carbon projects at their source, in the markets where high-quality, high-impact supply is made and where most global buyers cannot reach directly. From feasibility through issuance, integrity is engineered in, not audited after.',
    buttons: [{ href: U.contact, label: 'Request a briefing', variant: 'primary' }],
    scrollHint: 'Two kinds of project'
  },
  blocks: [
    {
      type: 'tiles', tone: 'paper', n: '01', kicker: 'Two kinds of project', cols: 'g-2',
      title: 'We develop across two families, and set the balance to the mandate.',
      items: [
        { k: 'Family one', title: 'Nature-based projects', body: 'Afforestation and reforestation, REDD+, soil and blue carbon. Scale and co-benefits.', href: U.nature },
        { k: 'Family two', title: 'Durable removals', body: 'Biochar and enhanced weathering. Permanence for hard-to-abate emissions.', href: U.durable }
      ]
    },
    {
      type: 'figure', tone: 'dark', n: '02', kicker: 'The work', layout: 'stacked',
      title: 'Feasibility to issuance.',
      lede: 'Every project is held to The Source Standard, and transparent benefit-sharing with the communities who make a project real is part of the design, not an afterthought.',
      fig: F.spine({
        steps: [
          { title: 'Feasibility & design', body: 'Site, baseline and viability assessed before commitment.' },
          { title: 'Methodology', body: 'Methodology selection and conservative baselines.' },
          { title: 'Independent MRV', body: 'Measurement, reporting and verification by a third party.' },
          { title: 'Registration', body: 'Under Verra, Gold Standard, Puro.earth, Isometric or GCC.' },
          { title: 'Issuance', body: 'Credits issued with a complete, traceable record.' }
        ]
      })
    },
    {
      type: 'prose', tone: 'bone', n: '03', kicker: 'The advantage of source',
      title: 'Why origination changes what a buyer can claim.',
      paras: [
        'Developing at origin gives our clients first access to scarce supply, a traceable line back to a named project, and the co-benefit evidence that boards and auditors now expect.',
        'It also means the integrity questions are settled while the project is being designed, when they are still cheap to answer.'
      ],
      aside: `${F.chips(site.registries, ['Verra'])}`
    }
  ],
  faq: [
    { q: 'Why develop in emerging markets?', a: 'That is where the highest-integrity nature-based and durable-removal supply is originated, and where development capital creates the most measurable impact.' },
    { q: 'Which registries do you develop under?', a: 'Verra, Gold Standard, Puro.earth, Isometric and the Global Carbon Council.' },
    { q: 'How long does a project take to reach issuance?', a: 'It varies by methodology, registry and project type. We set an honest timeline at feasibility rather than an optimistic one, because the schedule a buyer plans around has to hold.' }
  ],
  faqN: '04'
};

/* ------------------------------------------------------- NATURE-BASED */
export const nature = {
  file: U.nature, url: '/nature-based-carbon',
  title: 'Nature-Based Carbon | ARR, REDD+, Blue Carbon | Offsetease',
  description: 'High-integrity nature-based carbon with real biodiversity and community benefit — afforestation, reforestation, REDD+, soil and blue carbon.',
  keywords: ['nature-based carbon credits', 'reforestation', 'REDD+', 'blue carbon', 'soil carbon'],
  h1: 'Nature-based carbon, with impact you can evidence.',
  crumbLabel: 'Nature-based projects', crumbs: CRUMB_CPD,
  service: { name: 'Nature-based carbon projects', type: 'Carbon project development' },
  hero: {
    photo: 'fog-forest', sideScrim: true,
    kicker: 'Carbon project development',
    headline: 'Nature-based carbon,|with impact you can evidence.',
    lede: 'One of the two project families we develop. Nature-based projects restore forests, soils and coastal systems while removing or avoiding emissions, and they carry the biodiversity and community benefit that makes a credit defensible.',
    buttons: [{ href: U.contact, label: 'Request a briefing', variant: 'primary' }],
    scrollHint: 'What we work with'
  },
  blocks: [
    {
      type: 'tiles', tone: 'paper', n: '01', kicker: 'What we work with', cols: 'g-4',
      title: 'Four systems, each selected for additionality, permanence and evidenced co-benefit.',
      items: [
        { k: 'ARR', title: 'Afforestation & reforestation', body: 'New and restored forest, with growth measured against a conservative baseline.' },
        { k: 'REDD+', title: 'Avoided deforestation', body: 'Protection of standing forest where the threat is real and the baseline defensible.' },
        { k: 'Soil', title: 'Soil carbon', body: 'Agricultural practice change, quantified conservatively and sampled properly.' },
        { k: 'Blue', title: 'Blue carbon', body: 'Mangrove and coastal systems, dense in carbon and in co-benefit.' }
      ]
    },
    {
      type: 'figure', tone: 'dark', n: '02', kicker: 'Managing the risk',
      title: 'The scrutiny is fair. We answer it in the design.',
      paras: [
        'Nature-based credits have drawn scrutiny for reversal risk and weak baselines. We do not argue with the critique; we engineer against it.',
        'Conservative baselines, buffer pools, strong and increasingly remote-sensed MRV, and transparent benefit-sharing.'
      ],
      fig: F.spine({
        dense: true,
        steps: [
          { title: 'Conservative baselines', body: 'Set low, so performance is proven rather than assumed.' },
          { title: 'Buffer pools', body: 'Credits withheld against reversal, as the registries require.' },
          { title: 'Remote-sensed MRV', body: 'Independent verification, increasingly from satellite and aerial data.' },
          { title: 'Benefit-sharing', body: 'Transparent, documented, and evidenced to the community.' }
        ]
      })
    },
    {
      type: 'band', photo: 'mangrove-river', n: '03', kicker: 'Co-benefits',
      title: 'Biodiversity, water and soil health, and community livelihoods.',
      paras: ['Aligned to the UN SDGs and evidenced rather than asserted. On a nature-based project, the co-benefit record is not marketing material — it is part of what makes the credit hold.']
    },
    {
      type: 'prose', tone: 'bone', n: '04', kicker: 'Part of', title: 'Carbon project development.',
      paras: ['Nature-based projects are one of the two families we develop. The other is durable removals, where permanence is measured in centuries. Most serious portfolios hold both.'],
      after: `<div class="pill-nav" data-reveal style="--d:.2s">
        <a class="pill" href="${U.cpd}">Carbon project development</a>
        <a class="pill" href="${U.durable}">Durable removals</a>
        <a class="pill" href="${U.source}">The Source Standard</a></div>`
    }
  ],
  faq: [
    { q: 'Are nature-based credits still credible?', a: 'The high-integrity ones are, and they remain central to serious portfolios. Design and verification separate the defensible from the rest.' },
    { q: 'What co-benefits do they deliver?', a: 'Biodiversity, water and soil health, and community livelihoods, aligned to the UN SDGs.' },
    { q: 'How is reversal risk handled?', a: 'Through conservative baselines, registry buffer pools, and monitoring that detects loss early enough to act on it.' }
  ],
  faqN: '05'
};

/* ---------------------------------------------------- DURABLE REMOVALS */
export const durable = {
  file: U.durable, url: '/durable-removals',
  title: 'Durable Carbon Removals | Biochar & Weathering | Offsetease',
  description: 'Permanent, high-integrity carbon removal — biochar and enhanced weathering — for the irreducible emissions at the core of a credible net-zero claim.',
  keywords: ['durable carbon removal', 'biochar', 'enhanced weathering', 'permanent carbon removal'],
  h1: 'Permanence for the emissions you cannot yet abate.',
  crumbLabel: 'Durable removals', crumbs: CRUMB_CPD,
  service: { name: 'Durable carbon removals', type: 'Carbon project development' },
  hero: {
    photo: 'basalt-columns', sideScrim: true,
    kicker: 'Carbon project development',
    headline: 'Permanence for the emissions|you cannot yet abate.',
    lede: 'The second of the two project families we develop. Durable removals lock carbon away for centuries. We develop and source biochar and enhanced weathering, the permanent removals suited to the hard-to-abate emissions at the centre of a credible net-zero strategy.',
    buttons: [{ href: U.contact, label: 'Request a briefing', variant: 'primary' }],
    scrollHint: 'Measured in centuries'
  },
  blocks: [
    {
      type: 'figure', tone: 'dark', n: '01', kicker: 'Why permanence', layout: 'stacked',
      title: 'Measured in centuries, not seasons.',
      lede: 'A removal is only as good as the length of time the carbon stays out of the atmosphere. The categories differ by orders of magnitude, and a portfolio should be built knowing which is which.',
      fig: F.horizon({
        title: 'Indicative permanence by category',
        axis: ['Years', 'Decades', 'A century', 'Centuries', 'Millennia'],
        rows: [
          { label: 'Soil carbon', sub: 'Nature-based', from: 0.02, to: 0.30, tone: 'moss' },
          { label: 'Forest carbon', sub: 'ARR and REDD+', from: 0.10, to: 0.48, tone: 'moss' },
          { label: 'Biochar', sub: 'Durable removal', from: 0.52, to: 0.86 },
          { label: 'Enhanced weathering', sub: 'Durable removal', from: 0.62, to: 1.0 }
        ],
        caption: 'Indicative only. Bars show the broad order of durability each category is designed for, not a measured value for any specific project. Permanence on a given project is set by its methodology, its buffer and its monitoring.'
      })
    },
    {
      type: 'prose', tone: 'paper', n: '02', kicker: 'Why now',
      title: 'The buyers who move early secure the supply.',
      paras: [
        'Removal expectations are hardening under the SBTi Net-Zero Standard, and leading buyers are securing permanent supply early.',
        'Several of our development markets, India among them, have become serious centres of biochar production.'
      ],
      aside: `<p class="note" data-reveal>Under the Corporate Net-Zero Standard V2, mandatory from 2028, interim removal targets scale over time. Supply contracted today is supply not competed for later.</p>`
    },
    {
      type: 'tiles', tone: 'bone', n: '03', kicker: 'What we deliver', cols: 'g-3',
      title: 'Three ways to hold permanence.',
      items: [
        { k: 'Biochar', title: 'Verified biochar', body: 'Under Puro.earth and comparable durable-removal standards, from production sites we know.' },
        { k: 'Weathering', title: 'Enhanced weathering', body: 'Accelerated mineral capture, quantified conservatively.' },
        { k: 'Blended', title: 'Blended portfolios', body: 'Permanence paired with the scale and co-benefits of nature-based supply.', href: U.offtake }
      ]
    },
    {
      type: 'statement', tone: 'dark', n: '04', kicker: 'What we do not do', wide: true,
      text: 'We do not pursue direct air capture.',
      sub: 'We develop where we can deliver both integrity and value, and we will say so plainly when something falls outside that. We can advise on DAC within a blended portfolio.'
    }
  ],
  faq: [
    { q: 'What is the most durable form of carbon credit?', a: 'Engineered and durable removals such as biochar and enhanced weathering, with permanence measured in centuries.' },
    { q: 'Do you offer direct air capture?', a: 'No. We focus where we deliver the strongest integrity and value, and can advise on DAC within a blended portfolio.' },
    { q: 'Should a portfolio be all durable removals?', a: 'Rarely. Durable removals carry permanence; nature-based supply carries scale and co-benefits. We set the mix to the mandate rather than to a fashion.' }
  ],
  faqN: '05'
};

/* ------------------------------------------------ CARBON SUPPLY & OFFTAKE */
export const offtake = {
  file: U.offtake, url: '/carbon-supply-offtake',
  title: 'Carbon Supply & Offtake | Secure Scarce Supply | Offsetease',
  description: 'Long-term offtake, managed portfolios and spot supply of high-integrity carbon — screened against The Source Standard, delivered with a complete audit trail.',
  keywords: ['carbon offtake', 'carbon supply', 'carbon portfolio', 'forward carbon purchase'],
  h1: 'Secure high-integrity supply before it tightens.',
  crumbLabel: 'Carbon supply & offtake', crumbs: CRUMB_MARKETS,
  service: { name: 'Carbon supply and offtake', type: 'Carbon supply' },
  hero: {
    photo: 'eroded-terrain', sideScrim: true,
    kicker: 'Carbon supply & offtake',
    headline: 'Secure high-integrity supply|before it tightens.',
    lede: 'As quality supply grows scarcer and demand for permanence rises, the strongest buyers are securing future credits at origin. We structure long-term offtake and build diversified, screened portfolios, so both supply and claim stay secure year after year.',
    buttons: [{ href: U.contact, label: 'Request a briefing', variant: 'primary' }],
    scrollHint: 'How we engage'
  },
  blocks: [
    {
      type: 'figure', tone: 'dark', n: '01', kicker: 'The shape of the problem',
      title: 'Quality is the constraint, not volume.',
      paras: [
        'The market is not short of credits. It is short of credits a serious buyer can stand behind, and that scarcity tightens as more buyers apply a real quality bar.',
        'Committing early protects both availability and price.'
      ],
      fig: F.curve({
        title: 'Why forward commitment protects a claim',
        points: [[0, 0.94], [0.18, 0.82], [0.36, 0.66], [0.54, 0.47], [0.72, 0.30], [0.88, 0.19], [1, 0.14]],
        xLabel: 'As the quality bar rises',
        yLabel: 'Eligible supply',
        markers: [{ x: 0.18, y: 0.82, label: 'Buy on price' }, { x: 0.72, y: 0.30, label: 'Buy on integrity' }],
        caption: 'Schematic. It shows the direction of the relationship between a rising quality bar and the pool of credits that clears it — not measured market data.'
      })
    },
    {
      type: 'figure', tone: 'paper', n: '02', kicker: 'How we engage', layout: 'stacked',
      title: 'Four structures, one standard.',
      fig: F.spine({
        steps: [
          { title: 'Long-term offtake', body: 'Forward commitment on transparent terms, contracted at origin.' },
          { title: 'Managed portfolios', body: 'Diversified across type, geography and vintage.' },
          { title: 'Spot supply', body: 'Screened credits with full traceability, when timing demands it.' },
          { title: 'Advisory', body: 'Portfolio design, claim strategy and retirement planning.' }
        ]
      })
    },
    {
      type: 'statement', tone: 'bone', n: '03', kicker: 'What travels with the credit', wide: true,
      text: 'Every asset carries a complete Source Standard record, from origin to retirement.',
      sub: 'Not a certificate and a promise. The documentation an auditor, a rating agency or a journalist would ask for, assembled before anyone asks.'
    }
  ],
  faq: [
    { q: 'Why secure offtake now?', a: 'High-integrity supply is constrained and forward purchasing has risen sharply. Committing early protects availability and price.' },
    { q: 'How do you diversify a portfolio?', a: 'Across nature-based and durable removals, geographies and vintages, so no single project or methodology change puts a claim at risk.' },
    { q: 'Can we buy spot rather than commit forward?', a: 'Yes, and we supply screened spot credits. But the scarcest, highest-integrity supply is increasingly contracted before issuance, so spot alone narrows the field you can choose from.' }
  ],
  faqN: '04'
};

/* ------------------------------------------------- RENEWABLE ATTRIBUTES */
export const irec = {
  file: U.irec, url: '/renewable-attributes-i-rec',
  title: 'I-REC & Renewable Attributes | Cut Scope 2 | Offsetease',
  description: 'I-RECs and energy attribute certificates that credibly reduce Scope 2 — verified, correctly matched, defensible under the GHG Protocol.',
  keywords: ['I-REC', 'energy attribute certificates', 'renewable energy certificates', 'cut Scope 2'],
  h1: 'Renewable attributes that credibly reduce Scope 2.',
  crumbLabel: 'Renewable attributes', crumbs: CRUMB_MARKETS,
  service: { name: 'Renewable attributes and I-RECs', type: 'Energy attribute certificates' },
  hero: {
    photo: 'wind-fog', sideScrim: true,
    kicker: 'Renewable attributes',
    headline: 'Renewable attributes that|credibly reduce Scope 2.',
    lede: 'Sourced and matched correctly, renewable attributes are often the fastest defensible reduction in a market-based Scope 2 position. We supply I-RECs and other energy attribute certificates that are verified, correctly matched to operations, and sound under the GHG Protocol.',
    buttons: [{ href: U.contact, label: 'Request a briefing', variant: 'primary' }],
    scrollHint: 'From generation to claim'
  },
  blocks: [
    {
      type: 'figure', tone: 'dark', n: '01', kicker: 'From generation to claim', layout: 'stacked',
      title: 'Four steps, and each one can break the claim.',
      lede: 'An attribute only reduces a market-based Scope 2 position if it is correctly sourced, correctly matched and correctly retired. Most weak claims fail at the matching step.',
      fig: F.spine({
        steps: [
          { title: 'Generation', body: 'One MWh of renewable generation, evidenced at the meter.' },
          { title: 'Certificate', body: 'Issued on a recognised registry, with additionality verified.' },
          { title: 'Matching', body: 'Matched to the right market and reporting boundary.' },
          { title: 'Retirement', body: 'Retired against your consumption, and documented.' }
        ],
        caption: 'A certificate matched to the wrong market does not reduce your Scope 2 position, however genuine the generation behind it.'
      })
    },
    {
      type: 'points', tone: 'paper', n: '02', kicker: 'What we deliver',
      title: 'Five things, done properly.',
      items: [
        { title: 'I-REC sourcing across global markets', body: 'Access to the markets your operations actually sit in, not just the ones that are easy to buy from.' },
        { title: 'Verification of additionality and retirement', body: 'Checked at source and evidenced on the registry.' },
        { title: 'Matching to market and boundary', body: 'The right certificate, in the right market, against the right reporting boundary.' },
        { title: 'Documentation that holds', body: 'Under BRSR, CSRD, IFRS S2 and CDP.' },
        { title: 'PPA and REC advisory', body: 'Where longer-term procurement fits the operation better than annual certificates.' }
      ]
    },
    {
      type: 'defs', tone: 'bone', n: '03', kicker: 'Plainly stated',
      title: 'What an attribute is, and is not.',
      items: [
        { term: 'It is', def: 'Evidence that one megawatt-hour of renewable electricity was generated and that you, and no one else, have claimed it.' },
        { term: 'It is not', def: 'A carbon credit. Attributes address market-based Scope 2; credits address emissions outside your boundary. Conflating the two is how claims come apart.' }
      ]
    }
  ],
  faq: [
    { q: 'What is an I-REC?', a: 'A certificate evidencing one MWh of renewable generation, used to substantiate clean-energy and market-based Scope 2 claims.' },
    { q: 'Do I-RECs reduce our footprint?', a: 'They reduce market-based Scope 2 when correctly sourced, matched and retired. We ensure the claim is defensible.' },
    { q: 'Are attributes the same as carbon credits?', a: 'No. Attributes evidence renewable generation and address market-based Scope 2. Carbon credits address emissions outside your boundary. They are not interchangeable.' }
  ],
  faqN: '04'
};
