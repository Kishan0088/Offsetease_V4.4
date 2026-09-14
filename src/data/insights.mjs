// The Insights library. Article bodies live on the production site; this file
// carries the catalogue — title, topic, dates and standfirst — and every entry
// links out to the full piece. `datePublished` and `dateModified` were read
// from each live article's own BlogPosting markup, not inferred from the
// month labels, so the schema this page emits is accurate.
//
// When this build becomes offsetease.com, point `articleBase` in site.mjs at
// the local path and these become internal links with no other change.

export const insights = [
  {
    slug: 'cbam-iron-steel-strategy',
    title: 'CBAM strategy for iron & steel: what exporters must decide in 2026',
    category: 'Regulation',
    published: '2026-08-01',
    modified: '2026-08-01',
    minutes: 10,
    blurb:
      'CBAM is now a carbon price at the EU border for steel — the widest scope, the highest emissions. Verified data vs default values, and how to turn it into an edge.',
    metaTitle: 'CBAM Strategy for Iron & Steel Exporters (2026)',
    related: '/cbam-compliance.html',
  },
  {
    slug: 'cbam-definitive-period-2026',
    title: 'CBAM in 2026: the definitive period, the Omnibus simplification, and what exporters must do now',
    category: 'Regulation',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 9,
    blurb:
      'From 1 January 2026 the EU Carbon Border Adjustment Mechanism stops being a reporting exercise and becomes a cost. What changed, who is now exempt, and the moves that protect your margin.',
    metaTitle: 'CBAM in 2026: the definitive period, the Omnibus simplification, and what exporters must do now',
    related: '/cbam-compliance.html',
  },
  {
    slug: 'sbti-net-zero-standard-v2',
    title: 'SBTi\'s Corporate Net-Zero Standard V2: what the draft changes — and how to prepare',
    category: 'Net Zero',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 10,
    blurb:
      'The Science Based Targets initiative opened a draft of Version 2 of its Corporate Net-Zero Standard. It is not final — but the direction is clear, and target-setting companies should prepare now.',
    metaTitle: 'SBTi\'s Corporate Net-Zero Standard V2: what the draft changes — and how to prepare',
    related: '/sbti-target-setting.html',
  },
  {
    slug: 'cdp-disclosure-2026',
    title: 'CDP after the overhaul: one questionnaire, IFRS-aligned, and how to score well',
    category: 'Disclosure',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 8,
    blurb:
      'CDP consolidated its separate questionnaires into a single, IFRS-aligned disclosure on a new platform. How the system now works, how scoring is decided, and what actually moves your grade.',
    metaTitle: 'CDP after the overhaul: one questionnaire, IFRS-aligned, and how to score well',
    related: '/cdp-disclosure.html',
  },
  {
    slug: 'brsr-core-assurance-india',
    title: 'BRSR Core explained: India\'s assured sustainability disclosure and the value-chain ripple',
    category: 'Disclosure',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 9,
    blurb:
      'India\'s BRSR has moved from narrative to assured data. BRSR Core requires reasonable assurance on a defined set of KPIs — and pushes ESG requirements down to unlisted suppliers.',
    metaTitle: 'BRSR Core explained: India\'s assured sustainability disclosure and the value-chain ripple',
    related: '/brsr-reporting.html',
  },
  {
    slug: 'lca-pcf-epd-difference',
    title: 'LCA, PCF and EPD: which one your buyers are actually asking for',
    category: 'Product Sustainability',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 8,
    blurb:
      'As carbon requirements move from the company to the product, three acronyms dominate procurement conversations. They are related but not interchangeable — and choosing wrong wastes months.',
    metaTitle: 'LCA, PCF and EPD: which one your buyers are actually asking for',
    related: '/life-cycle-assessment.html',
  },
  {
    slug: 'eudr-deforestation-regulation-explained',
    title: 'EUDR explained: deforestation-free supply chains, plot-level geolocation, and the deadline',
    category: 'Regulation',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 9,
    blurb:
      'Seven commodities banned from the EU market unless proven deforestation-free and traceable to the plot. What EUDR demands — and how to prepare.',
    metaTitle: 'EUDR explained: deforestation-free supply chains, plot-level geolocation, and the deadline',
    related: '/eudr-compliance.html',
  },
  {
    slug: 'ecovadis-scoring-bronze-to-gold',
    title: 'How EcoVadis scoring really works — and how to move from Bronze to Gold',
    category: 'Ratings',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 8,
    blurb:
      'EcoVadis scores suppliers on four themes, with medals on a percentile curve. What the score really rewards — and how to move from Bronze to Gold.',
    metaTitle: 'How EcoVadis scoring really works — and how to move from Bronze to Gold',
    related: '/ecovadis-rating.html',
  },
  {
    slug: 'iscc-eu-plus-corsia-which-certification',
    title: 'ISCC EU vs ISCC PLUS vs CORSIA: which certification your business needs',
    category: 'Certification',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 8,
    blurb:
      'ISCC EU, PLUS, CORSIA and Carbon Footprint serve different markets. How to choose the right certification — or the right combination.',
    metaTitle: 'ISCC EU vs PLUS vs CORSIA: Which One Do You Need?',
    related: '/iscc-certification.html',
  },
  {
    slug: 'scope-3-emissions-measurement',
    title: 'Scope 3 emissions: why they are most of your footprint and how to actually measure them',
    category: 'Carbon Accounting',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 9,
    blurb:
      'Scope 3 is typically 70–90% of your footprint and the hardest to measure. The 15 categories, the methods that work, and where to start.',
    metaTitle: 'Scope 3 emissions: why they are most of your footprint and how to actually measure them',
    related: '/ghg-accounting.html',
  },
  {
    slug: 'ifrs-s1-s2-issb-explained',
    title: 'IFRS S1 and S2 explained: the global baseline for sustainability disclosure',
    category: 'Disclosure',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 9,
    blurb:
      'IFRS S1 and S2 are the global baseline for sustainability and climate disclosure. What they require, who must comply, and how to prepare.',
    metaTitle: 'IFRS S1 and S2 explained: the global baseline for sustainability disclosure',
    related: '/ifrs-s1-s2.html',
  },
  {
    slug: 'carbon-credit-integrity-icvcm-vcmi',
    title: 'High-integrity carbon credits: ICVCM, VCMI, and how to avoid the headline risk',
    category: 'Carbon Markets',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 9,
    blurb:
      'The carbon market has split on integrity — ICVCM defines the credit, VCMI the claim. What separates a quality carbon asset from a liability.',
    metaTitle: 'High-integrity carbon credits: ICVCM, VCMI, and how to avoid the headline risk',
    related: '/carbon-supply.html',
  },
  {
    slug: 'net-zero-pathway-funding',
    title: 'Funding the net-zero transition: building a pathway your CFO will actually finance',
    category: 'Net Zero',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 9,
    blurb:
      'The gap between a net-zero pledge and a funded plan is a cost curve, a capital plan and financing. How to build a business case the board approves.',
    metaTitle: 'Funding the net-zero transition: building a pathway your CFO will actually finance',
    related: '/net-zero-decarbonization.html',
  },
  {
    slug: 'i-rec-renewable-energy-certificates',
    title: 'I-RECs explained: how energy attribute certificates cut your Scope 2 — credibly',
    category: 'Renewable Energy',
    published: '2026-06-01',
    modified: '2026-07-28',
    minutes: 8,
    blurb:
      'I-RECs let companies claim renewable electricity and cut market-based Scope 2 worldwide. How they work — and what makes a claim hold up.',
    metaTitle: 'I-RECs explained: how energy attribute certificates cut your Scope 2 — credibly',
    related: '/energy-attribute-certificates.html',
  },
];

/** Topics in descending article count, then alphabetically — the order the
 *  filter row and the topic index both use. */
export function insightCategories() {
  const counts = new Map();
  for (const a of insights) counts.set(a.category, (counts.get(a.category) || 0) + 1);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name, count]) => ({ name, count, id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-') }));
}

/** Newest first. Ties break on title so the order is stable between builds. */
export function insightsByDate() {
  return [...insights].sort(
    (a, b) => b.published.localeCompare(a.published) || a.title.localeCompare(b.title)
  );
}

export const insightStats = {
  articles: insights.length,
  categories: new Set(insights.map((a) => a.category)).size,
  minutes: insights.reduce((n, a) => n + a.minutes, 0),
};
