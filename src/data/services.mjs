// The eighteen in-depth ESG & sustainability service pages.
// Copy is taken verbatim from the approved content document. `proof` lines are
// the cited 2024–2026 research points; every one of them is listed on /sources.

export const groups = [
  { id: 'measure', title: 'Measure', blurb: 'GHG accounting, product footprints, LCA and EPDs — the evidence base.' },
  { id: 'report', title: 'Report', blurb: 'BRSR, CSRD, IFRS S1/S2 and double materiality.' },
  { id: 'certify', title: 'Certify & score', blurb: 'EcoVadis, CDP, CBAM, EUDR and ISCC.' },
  { id: 'target', title: 'Target & reduce', blurb: 'SBTi validation, net-zero pathways and decarbonization.' },
  { id: 'strategise', title: 'Strategise & manage risk', blurb: 'ESG and CSR strategy, climate risk and supplier assessment.' },
];

export const services = [
  {
    id: 'ghg-accounting',
    path: '/ghg-accounting.html',
    number: '01',
    group: 'measure',
    title: 'GHG accounting',
    metaTitle: 'GHG Accounting — Scope 1, 2 & 3 to the GHG Protocol | OffsetEase',
    kicker: 'The audited emissions baseline every target, disclosure and carbon claim is built on.',
    description:
      'Scope 1, 2 and 3 emissions inventories built to the GHG Protocol and ISO 14064-1 — assurance-ready, and aligned to IFRS S2, BRSR, CDP and SBTi.',
    photo: 'eroded-terrain',
    photoAlt: 'Eroded terrain traced by sediment channels, seen from above',
    whatItIs:
      'GHG accounting measures every greenhouse gas your organisation is responsible for, in tonnes of CO₂-equivalent, organised under the GHG Protocol into three scopes: **Scope 1** (direct emissions), **Scope 2** (purchased energy), and **Scope 3** (all other value-chain emissions across 15 categories). It is the foundational inventory everything else refers back to.',
    whyItMatters:
      'You cannot set a credible target, report under any framework, or make a defensible carbon claim without an accurate footprint first. A weak baseline quietly undermines everything built on it and is the first thing an auditor tests. Built once, properly, it serves every framework at once.',
    proof:
      'Scope 3 is where the footprint really sits: supply-chain (Scope 3) emissions are, on average, around 26× a company’s operational emissions (CDP & Boston Consulting Group, 2024). IFRS S2 references the GHG Protocol and requires Scope 1, 2 and 3 disclosure, so a GHG-Protocol inventory is the foundation of mandatory reporting (ISSB, 2026).',
    proofFigure: { value: '26×', label: 'Scope 3 vs operational emissions, on average' },
    approach: [
      'Set organisational and operational boundaries',
      'Collect activity data across all sites and the value chain, replacing industry averages with primary data where it moves the number',
      'Calculate to the GHG Protocol, with Scope 2 both location- and market-based and all 15 Scope 3 categories screened for materiality',
      'Quality-control and ready for assurance',
      'Build the data systems that make next year’s inventory cheaper than this year’s',
    ],
    standards: ['GHG Protocol (Corporate · Scope 2 · Scope 3)', 'ISO 14064-1', 'Aligned to IFRS S2, BRSR, CDP and SBTi'],
    faqs: [
      { q: 'What are Scope 1, 2 and 3?', a: 'Direct emissions, purchased-energy emissions, and value-chain emissions — Scope 3 is usually by far the largest.' },
      { q: 'Is Scope 3 mandatory?', a: 'It varies by jurisdiction, but exporters and EU suppliers are asked for it regardless. Building it early is the defensible choice.' },
    ],
    cta: 'Build your baseline.',
    related: ['product-carbon-footprint', 'sbti-target-setting', 'supplier-value-chain-esg'],
  },

  {
    id: 'product-carbon-footprint',
    path: '/product-carbon-footprint.html',
    number: '02',
    group: 'measure',
    title: 'Product carbon footprint',
    metaTitle: 'Product Carbon Footprint (PCF) to ISO 14067 | OffsetEase',
    kicker: 'The SKU-level carbon data your buyers now require.',
    description:
      'Cradle-to-gate and cradle-to-grave product carbon footprints to ISO 14067 and the GHG Protocol Product Standard — buyer-ready, tender-ready, and CBAM-ready.',
    photo: 'container-port',
    photoAlt: 'Stacked shipping containers at a working port',
    whatItIs:
      'A product carbon footprint measures the emissions of a single product across its life cycle — cradle-to-gate or cradle-to-grave — as CO₂e per unit, to ISO 14067 and the GHG Protocol Product Standard.',
    whyItMatters:
      'Large buyers increasingly require product-level data to decarbonise their own Scope 3 and to gate procurement. Product-level embedded emissions also sit at the heart of CBAM declarations, where verified data beats punitive defaults.',
    proof:
      'The CBAM link makes this financial, not cosmetic: since 1 January 2026, the quality of product-level emissions data directly determines an importer’s cost — without reliable data, more expensive default values apply (European Commission; Gerlach Customs, 2026).',
    proofFigure: { value: '1 Jan 2026', label: 'CBAM definitive regime — data quality became a cost line' },
    approach: [
      'Define the functional unit and system boundary',
      'Map the product system',
      'Collect primary supplier and process data',
      'Calculate to ISO 14067',
      'Hold methodology consistent across the range so comparisons are fair',
      'Deliver buyer- and tender-ready outputs',
    ],
    standards: ['ISO 14067', 'GHG Protocol Product Standard', 'PAS 2050', 'Underpinned by LCA (ISO 14040/44)'],
    faqs: [
      { q: 'Why do buyers ask for a PCF?', a: 'To cut their Scope 3 and to gate procurement — increasingly it decides contracts.' },
      { q: 'How does it relate to CBAM?', a: 'CBAM charges on embedded emissions; a rigorous PCF supports verified data that beats default values.' },
    ],
    cta: 'Get your PCFs tender-ready.',
    related: ['life-cycle-assessment', 'cbam-compliance', 'environmental-product-declaration'],
  },

  {
    id: 'life-cycle-assessment',
    path: '/life-cycle-assessment.html',
    number: '03',
    group: 'measure',
    title: 'Life cycle assessment',
    metaTitle: 'Life Cycle Assessment (LCA) to ISO 14040/44 | OffsetEase',
    kicker: 'The evidence base behind footprints, EPDs and credible claims.',
    description:
      'ISO 14040/44 life cycle assessment across carbon, water, energy and resource use — the rigorous foundation beneath product footprints, EPDs and defensible environmental claims.',
    photo: 'carbon-texture',
    photoAlt: 'Close texture of dark carbon-rich material',
    whatItIs:
      'An LCA quantifies the full environmental impact of a product or process across its life cycle — carbon and, where needed, water, energy, acidification and resource use — to ISO 14040/44, through four phases: goal and scope, inventory, impact assessment, and interpretation.',
    whyItMatters:
      'It’s the rigorous foundation beneath product footprints, EPDs, eco-design and any environmental claim. As regulators tighten the rules on unsubstantiated green claims, a credible LCA turns a marketing statement into defensible evidence.',
    approach: [
      'Define goal, scope and functional unit',
      'Build the life-cycle inventory',
      'Run impact assessment across the categories that matter',
      'Interpret to find hotspots',
      'Document to ISO standard for third-party review or onward use in an EPD',
    ],
    standards: ['ISO 14040 / 14044', 'ISO 14067 (carbon)', 'EN 15804 (construction)', 'Aligned to the EU Product Environmental Footprint where relevant'],
    faqs: [
      { q: 'How does an LCA differ from a PCF?', a: 'A PCF isolates carbon; an LCA assesses multiple impacts. A PCF is often derived from an LCA.' },
      { q: 'Do we need an LCA for an EPD?', a: 'Yes. A compliant LCA is the technical foundation of a verified EPD.' },
    ],
    cta: 'Commission an LCA.',
    related: ['environmental-product-declaration', 'product-carbon-footprint', 'ghg-accounting'],
  },

  {
    id: 'environmental-product-declaration',
    path: '/environmental-product-declaration.html',
    number: '04',
    group: 'measure',
    title: 'Environmental Product Declaration',
    shortTitle: 'EPD',
    metaTitle: 'Environmental Product Declarations (EPD) | OffsetEase',
    kicker: 'Verified declarations that qualify you to bid.',
    description:
      'Type III verified Environmental Product Declarations to ISO 14025 and EN 15804 — built on a compliant LCA, third-party verified and registered with a programme operator.',
    photo: 'factory-interior',
    photoAlt: 'Interior of an industrial production hall',
    whatItIs:
      'An EPD is a Type III, independently verified report of a product’s life-cycle environmental performance (ISO 14025), built on an LCA and the relevant Product Category Rules. In construction it follows EN 15804 and is registered with a programme operator.',
    whyItMatters:
      'EPDs are increasingly a condition of bidding — in tenders, in green-building schemes such as LEED and BREEAM, and in public procurement. An unverified declaration doesn’t qualify, so an EPD is a market-access requirement, not a badge.',
    approach: [
      'Select the right Product Category Rule',
      'Build the underlying LCA to EN 15804 / ISO 14025',
      'Compile the declaration',
      'Manage third-party verification and registration',
      'Format it for the schemes your buyers use',
    ],
    standards: ['ISO 14025', 'EN 15804', 'ISO 14040/44', 'Relevant PCRs', 'Recognised programme operators'],
    faqs: [
      { q: 'Why must it be verified?', a: 'Unverified declarations don’t qualify in tenders or green-building certifications.' },
      { q: 'How long is it valid?', a: 'Typically five years, then updated.' },
    ],
    cta: 'Get EPDs that win work.',
    related: ['life-cycle-assessment', 'product-carbon-footprint', 'iscc-certification'],
  },

  {
    id: 'brsr-reporting',
    path: '/brsr-reporting.html',
    number: '05',
    group: 'report',
    title: 'BRSR & BRSR Core',
    metaTitle: 'BRSR & BRSR Core Reporting for SEBI-Listed Companies | OffsetEase',
    kicker: 'India’s assured sustainability disclosure.',
    description:
      'SEBI BRSR and BRSR Core reporting across the nine NGRBC principles — assurance-ready KPIs, value-chain data, and a filing-ready report interoperable with GRI and IFRS.',
    photo: 'valley-dawn',
    photoAlt: 'A wide valley at dawn under low cloud',
    whatItIs:
      'The Business Responsibility and Sustainability Report is SEBI’s mandatory ESG disclosure for India’s largest listed companies, structured around the nine NGRBC principles. A defined subset — **BRSR Core** — carries key KPIs that require reasonable assurance.',
    whyItMatters:
      'Full BRSR has applied to India’s top 1,000 listed companies since FY 2022-23, and value-chain disclosure extends the requirement to unlisted suppliers. Getting the data and assurance right early avoids a scramble later.',
    proof:
      'The assurance net is tightening on a clear glide path: top 150 companies (FY 2023-24) → top 250 (FY 2024-25) → top 500 (FY 2025-26) → the full top 1,000 from FY 2026-27, which began 1 April 2026 (SEBI; Schneider Electric, 2026). BRSR Core covers 9 ESG attributes; value-chain disclosure for the top 250 (covering ~75% of purchases/sales by value) moved to voluntary in March 2025, but large buyers still demand verified vendor data (OneStopESG, 2026).',
    proofFigure: { value: 'Top 1,000', label: 'in scope for BRSR Core assurance from FY 2026-27' },
    approach: [
      'Run materiality',
      'Build data across all nine principles and the BRSR Core KPIs',
      'Prepare BRSR Core for reasonable assurance',
      'Gather value-chain data',
      'Deliver a filing-ready report in SEBI’s format, interoperable with GRI and IFRS',
    ],
    standards: ['SEBI BRSR / BRSR Core', 'NGRBC', 'Aligned to GRI and IFRS S1/S2'],
    faqs: [
      { q: 'Who must file BRSR?', a: 'The top 1,000 listed companies by market cap; thresholds expand over time — check current SEBI rules.' },
      { q: 'What is BRSR Core?', a: 'A subset of KPIs requiring reasonable assurance, reaching the top 1,000 by FY 2026-27.' },
    ],
    cta: 'Get BRSR-ready.',
    related: ['ifrs-s1-s2', 'supplier-value-chain-esg', 'double-materiality-assessment'],
  },

  {
    id: 'csrd-esrs',
    path: '/csrd-esrs.html',
    number: '06',
    group: 'report',
    title: 'CSRD & ESRS',
    metaTitle: 'CSRD & ESRS Reporting After the Omnibus | OffsetEase',
    kicker: 'Europe’s sustainability disclosure — after the Omnibus.',
    description:
      'CSRD scope confirmation, double materiality, ESRS gap analysis and assurance readiness after Omnibus I — including for large non-EU groups above the turnover threshold.',
    photo: 'forest-fog',
    photoAlt: 'Dense conifer forest disappearing into fog',
    whatItIs:
      'The Corporate Sustainability Reporting Directive is the EU’s mandatory sustainability reporting regime, reported under the European Sustainability Reporting Standards (ESRS), built on **double materiality** and subject to assurance.',
    whyItMatters:
      'The Omnibus package narrowed CSRD to the largest companies but kept double materiality and assurance intact — and large non-EU groups above the EU turnover threshold remain in scope. Scope narrowed; direction did not.',
    proof:
      'The change is now law: Omnibus I — Directive (EU) 2026/470 — was adopted in February 2026 and entered into force in March 2026, raising the CSRD threshold to more than 1,000 employees and over €450m net turnover (both required). Analysis suggests this cuts the number of in-scope companies by roughly 85% (Morrison Foerster; ERM analysis, 2026). Revised-scope reporting applies for financial years from 1 January 2027, with limited assurance retained (Accountancy Europe, 2026).',
    proofFigure: { value: '~85%', label: 'fewer companies in scope after Omnibus I' },
    approach: [
      'Confirm whether and when you’re in scope',
      'Run a defensible double materiality assessment',
      'Complete an ESRS gap analysis and build the data',
      'Prepare for assurance',
      'Deliver a filing-ready report that interoperates with IFRS S1/S2 and GRI',
    ],
    standards: ['CSRD', 'ESRS', 'Aligned to IFRS S1/S2 and GRI'],
    faqs: [
      { q: 'Are we still in scope after the Omnibus?', a: 'Very large EU companies and large non-EU groups above the turnover threshold are — we map your exact position.' },
      { q: 'What changed?', a: 'Higher thresholds, later timelines; double materiality and assurance remain.' },
    ],
    cta: 'Map your CSRD obligations.',
    related: ['double-materiality-assessment', 'ifrs-s1-s2', 'brsr-reporting'],
  },

  {
    id: 'ifrs-s1-s2',
    path: '/ifrs-s1-s2.html',
    number: '07',
    group: 'report',
    title: 'IFRS S1 & S2',
    metaTitle: 'IFRS S1 & S2 (ISSB) Sustainability Disclosure | OffsetEase',
    kicker: 'The global baseline for sustainability disclosure.',
    description:
      'ISSB IFRS S1 and S2 disclosure built on TCFD — governance, strategy, risk management, metrics and targets, with climate scenario analysis, mapped across BRSR, CSRD and CDP.',
    photo: 'earth-orbit',
    photoAlt: 'The curve of the Earth seen from orbit',
    whatItIs:
      'The ISSB’s IFRS S1 (general sustainability-related financial disclosures) and IFRS S2 (climate) are the global baseline investors are converging on — built on the TCFD framework and designed to sit alongside financial reporting.',
    whyItMatters:
      'As the frameworks beneath BRSR, CSRD and CDP converge on the IFRS baseline, you can build to it once and map across every framework you answer to.',
    proof:
      'Adoption is moving faster than most forecast: 28 jurisdictions had adopted IFRS S1/S2 as of April 2026, with more planning to; broader counts cite 21+ jurisdictions mandatory and 30+ moving to adopt, together representing over 60% of global GDP (S&P Global; ESGsource; ISSB, 2026). Major markets include Japan, Australia, Singapore, Hong Kong, South Korea, Canada, the UK and Brazil.',
    proofFigure: { value: '28', label: 'jurisdictions had adopted IFRS S1/S2 by April 2026' },
    approach: [
      'Structure disclosure across governance, strategy, risk management, and metrics and targets',
      'Run climate scenario analysis for S2',
      'Connect it to your GHG inventory and financials',
      'Ready it for assurance',
      'Map it to your local frameworks',
    ],
    standards: ['IFRS S1', 'IFRS S2', 'Built on TCFD', 'Aligned to BRSR, CSRD and CDP'],
    faqs: [
      { q: 'What’s the difference between S1 and S2?', a: 'S1 covers sustainability-related financial disclosure generally; S2 is climate-specific.' },
      { q: 'How does it relate to TCFD?', a: 'S2 builds on TCFD, so TCFD work maps straight across.' },
    ],
    cta: 'Build to the global baseline.',
    related: ['climate-risk-tcfd', 'csrd-esrs', 'cdp-disclosure'],
  },

  {
    id: 'double-materiality-assessment',
    path: '/double-materiality-assessment.html',
    number: '08',
    group: 'report',
    title: 'Double materiality assessment',
    metaTitle: 'Double Materiality Assessment for CSRD & ESRS | OffsetEase',
    kicker: 'What matters — to the business, and to the world.',
    description:
      'A defensible double materiality assessment — financial and impact materiality scored against recognised methodology, producing a matrix that survives assurance.',
    photo: 'fog-forest',
    photoAlt: 'Forest ridge lines fading into layers of mist',
    whatItIs:
      'A double materiality assessment answers two questions at once: which sustainability issues affect your business (**financial materiality**), and which impacts your business has on people and the planet (**impact materiality**). It’s the foundation CSRD, IFRS disclosure and a serious ESG strategy all stand on.',
    whyItMatters:
      'It is the required basis for what you disclose under CSRD/ESRS, and it directs where your effort and capital go. A weak assessment undermines the entire report.',
    proof:
      'Because the Omnibus kept double materiality at the core of CSRD even while cutting scope (Directive (EU) 2026/470, 2026), the assessment remains the pivot on which a compliant, credible report turns.',
    approach: [
      'Map stakeholders and impacts',
      'Score financial and impact materiality against recognised methodology',
      'Deliver a defensible materiality matrix that survives assurance and sets clear priorities',
    ],
    standards: ['CSRD / ESRS double materiality', 'Aligned to IFRS (financial materiality) and GRI (impact materiality)'],
    faqs: [
      { q: 'What is double materiality?', a: 'Assessing both how issues affect the company and how the company affects the world.' },
      { q: 'Single vs double materiality?', a: 'Single looks only at financial impact on the company; double adds the company’s impact outward.' },
    ],
    cta: 'Run a defensible assessment.',
    related: ['csrd-esrs', 'brsr-reporting', 'esg-csr-strategy'],
  },

  {
    id: 'ecovadis-rating',
    path: '/ecovadis-rating.html',
    number: '09',
    group: 'certify',
    title: 'EcoVadis',
    metaTitle: 'EcoVadis Rating Improvement — Gold & Platinum | OffsetEase',
    kicker: 'The medal your customers gate procurement on.',
    description:
      'EcoVadis scorecard diagnosis, gap analysis and evidence building across all four themes — prioritised by scoring weight and managed through to a better medal.',
    photo: 'factory-interior',
    photoAlt: 'Interior of an industrial production hall',
    whatItIs:
      'EcoVadis is a business sustainability rating across four themes — environment, labour and human rights, ethics, and sustainable procurement — resulting in a percentile score and a medal that large buyers use to assess and gate suppliers.',
    whyItMatters:
      'Major corporates require suppliers to hold or improve an EcoVadis rating, and the medal can decide contract award and renewal. Because it’s percentile-based, improvement has to target the right themes to move.',
    proof:
      'The bar is competitive and moving: 2025 medals are awarded by percentile — Platinum to the top 1%, Gold the top 5%, Silver the top 15% and Bronze the top 35% — and a score below 30 in any single theme disqualifies a company from any medal (Sunhat, 2026). Scoring weights policies 25%, actions 40% and results 35% (Your Carbon Steps, 2025).',
    proofFigure: { value: 'Top 5%', label: 'percentile required for an EcoVadis Gold medal' },
    approach: [
      'Diagnose your scorecard',
      'Run a gap analysis against the methodology',
      'Build evidence, policies and actions across all four themes',
      'Prioritise the highest-weighted themes',
      'Manage submission and improvement toward Gold or Platinum',
    ],
    standards: ['EcoVadis methodology', 'Aligned to GRI, UN Global Compact and ISO 26000'],
    faqs: [
      { q: 'How is the score calculated?', a: 'Across four themes, weighted by industry and size, evidenced by documentation.' },
      { q: 'How do we move up?', a: 'By closing the highest-weighted evidence and policy gaps; we manage the process end to end.' },
    ],
    cta: 'Improve your EcoVadis medal.',
    related: ['supplier-value-chain-esg', 'cdp-disclosure', 'esg-csr-strategy'],
  },

  {
    id: 'cdp-disclosure',
    path: '/cdp-disclosure.html',
    number: '10',
    group: 'certify',
    title: 'CDP',
    metaTitle: 'CDP Disclosure & Score Improvement | OffsetEase',
    kicker: 'Environmental disclosure, scored in public.',
    description:
      'CDP climate, water and forests questionnaires prepared to the scoring criteria and aligned to IFRS S2 and TCFD — with the governance and data evidence that scoring rewards.',
    photo: 'fog-forest',
    photoAlt: 'Forest ridge lines fading into layers of mist',
    whatItIs:
      'CDP runs the world’s most widely used environmental disclosure system, across climate change, water security and forests, scored from A to D- and aligned to the IFRS climate baseline.',
    whyItMatters:
      'CDP scores are **public**, and a growing set of investors and customers act on them. The Leadership band (A / A-) signals best practice; a weak score is equally visible.',
    proof:
      'The scale is what makes a public score consequential: over 22,100 companies disclosed through CDP in 2025, together representing more than half of global market capitalisation (CDP, 2025). Because CDP aligns with the IFRS/ISSB climate baseline, strong GHG and climate-risk data serves both CDP and your mandatory disclosure.',
    proofFigure: { value: '22,100+', label: 'companies disclosed through CDP in 2025' },
    approach: [
      'Prepare the questionnaire(s) aligned to IFRS S2 and TCFD',
      'Run a gap analysis against the scoring criteria and your prior year',
      'Build the governance and data evidence that scoring rewards',
    ],
    standards: ['CDP', 'Aligned to IFRS S2 and TCFD'],
    faqs: [
      { q: 'What is a good CDP score?', a: 'The Leadership band, A or A-, signals best practice.' },
      { q: 'Who sees our score?', a: 'It’s public and used by investors and buyers.' },
    ],
    cta: 'Improve your CDP score.',
    related: ['ifrs-s1-s2', 'ghg-accounting', 'climate-risk-tcfd'],
  },

  {
    id: 'cbam-compliance',
    path: '/cbam-compliance.html',
    number: '11',
    group: 'certify',
    title: 'CBAM',
    metaTitle: 'CBAM Compliance — Verified Embedded Emissions Data | OffsetEase',
    kicker: 'Verified data beats default values.',
    description:
      'Product-level embedded emissions calculated and verified for the EU Carbon Border Adjustment Mechanism — replacing punitive defaults, supporting declarants and modelling margin impact.',
    photo: 'molten-steel',
    photoAlt: 'Molten steel pouring on a foundry floor',
    whatItIs:
      'The EU Carbon Border Adjustment Mechanism prices the carbon embedded in imports of iron and steel, aluminium, cement, fertilisers, electricity and hydrogen. In its definitive regime, it carries a real financial cost.',
    whyItMatters:
      'Verified embedded-emissions data almost always beats punitive default values — protecting margin. Scope confirmation is the first step, because the rules changed just before the definitive regime began.',
    proof:
      'The financial regime is now live: CBAM’s definitive phase began on 1 January 2026 (European Commission, 2026). The Omnibus 50-tonne de minimis exempts roughly 90% of importers while still covering about 99% of embedded emissions (European Commission, 2026). The Q1 2026 reference price was €75.36 per tonne of CO₂, with a €100-per-tonne penalty for non-surrender, and the first declaration for 2026 imports is due 30 September 2027 (Gerlach Customs; Coolset, 2026).',
    proofFigure: { value: '€75.36/t', label: 'CBAM reference price, Q1 2026' },
    approach: [
      'Calculate product-level embedded emissions',
      'Produce verified data to replace defaults',
      'Support your declarants',
      'Model the margin impact',
      'Confirm exactly where you sit in scope',
    ],
    standards: ['EU CBAM Regulation', 'Underpinned by rigorous PCF and GHG data'],
    faqs: [
      { q: 'When did CBAM start charging?', a: 'Its definitive regime began in January 2026.' },
      { q: 'Why does verified data matter?', a: 'Defaults are conservative and usually higher; verified data typically lowers the cost.' },
    ],
    cta: 'Protect your EU margin.',
    related: ['product-carbon-footprint', 'climate-risk-tcfd', 'eudr-compliance'],
  },

  {
    id: 'eudr-compliance',
    path: '/eudr-compliance.html',
    number: '12',
    group: 'certify',
    title: 'EUDR',
    metaTitle: 'EUDR Compliance — Plot-Level Traceability | OffsetEase',
    kicker: 'Deforestation-free, proven to the plot.',
    description:
      'Plot-level geolocation, risk assessment and due-diligence statements for the EU Deforestation Regulation across all seven covered commodities and derived products.',
    photo: 'mangrove-river',
    photoAlt: 'A river winding through dense mangrove forest',
    whatItIs:
      'The EU Deforestation Regulation requires that covered commodities placed on the EU market are deforestation-free and traceable to the plot of land where they were produced, backed by a due-diligence statement.',
    whyItMatters:
      'Non-compliance blocks EU market access. The core requirement is precise plot-level geolocation and a defensible due-diligence process — data that takes time to build.',
    proof:
      'The timeline is fixed under Regulation (EU) 2025/2650 (published December 2025): large and medium operators and traders must comply from 30 December 2026, and micro and small operators from 30 June 2027 (European Commission; PSQR, 2026). It covers seven commodities — cattle, cocoa, coffee, palm oil, rubber, soy and wood — plus derived products.',
    proofFigure: { value: '30 Dec 2026', label: 'compliance date for large and medium operators' },
    approach: [
      'Establish plot-level geolocation',
      'Prepare due-diligence statements and risk assessment against the EU benchmarking system',
      'Build supply-chain traceability with supplier engagement',
    ],
    standards: ['EU Deforestation Regulation (EUDR)'],
    faqs: [
      { q: 'Which products does EUDR cover?', a: 'Cattle, cocoa, coffee, palm oil, rubber, soy and wood, and many derived products.' },
      { q: 'What are the deadlines?', a: 'Large/medium operators from 30 December 2026; small operators from 30 June 2027.' },
    ],
    cta: 'Get EUDR-ready.',
    related: ['supplier-value-chain-esg', 'iscc-certification', 'cbam-compliance'],
  },

  {
    id: 'iscc-certification',
    path: '/iscc-certification.html',
    number: '13',
    group: 'certify',
    title: 'ISCC certification',
    metaTitle: 'ISCC EU, PLUS & CORSIA Certification | OffsetEase',
    kicker: 'Certified sustainability, traceable end to end.',
    description:
      'ISCC EU, ISCC PLUS and CORSIA certification — scheme selection, gap assessment, chain-of-custody and mass-balance set-up, and audit preparation.',
    photo: 'container-port',
    photoAlt: 'Stacked shipping containers at a working port',
    whatItIs:
      'ISCC certifies that materials and fuels are produced sustainably and traceable along the chain, through the scheme that fits your market — **ISCC EU** (regulated markets and biofuels), **ISCC PLUS** (circular and bio-based materials), and **CORSIA** (sustainable aviation fuels) — using chain-of-custody and mass-balance accounting.',
    whyItMatters:
      'In regulated and premium markets, certification is a condition of doing business. ISCC proves sustainable production and full traceability in a form customers and regulators accept.',
    approach: [
      'Select the right scheme',
      'Run a gap assessment',
      'Set up chain-of-custody and mass-balance',
      'Prepare you for audit with ongoing compliance support',
    ],
    standards: ['ISCC EU', 'ISCC PLUS', 'CORSIA'],
    faqs: [
      { q: 'Which scheme do we need?', a: 'ISCC EU for regulated markets, PLUS for circular and bio-based, CORSIA for aviation fuels.' },
      { q: 'What is mass balance?', a: 'A method for tracking sustainable material through mixed supply chains.' },
    ],
    cta: 'Get ISCC-certified.',
    related: ['eudr-compliance', 'environmental-product-declaration', 'supplier-value-chain-esg'],
  },

  {
    id: 'sbti-target-setting',
    path: '/sbti-target-setting.html',
    number: '14',
    group: 'target',
    title: 'SBTi target setting',
    metaTitle: 'SBTi Target Setting & Validation | OffsetEase',
    kicker: 'Targets validated to science.',
    description:
      'Near-term and net-zero targets across Scope 1, 2 and 3 designed under the SBTi Corporate Net-Zero Standard, managed through validation and built V2-ready.',
    photo: 'hero-canopy',
    photoAlt: 'Sunlight breaking through a high forest canopy',
    whatItIs:
      'The Science Based Targets initiative validates corporate emissions targets against climate science. We set near-term and net-zero targets across Scope 1, 2 and 3 under the SBTi Corporate Net-Zero Standard, and manage them through validation.',
    whyItMatters:
      'SBTi validation is increasingly what investors and customers expect before they’ll treat a target as credible, and getting the architecture right now avoids re-work as the standard evolves.',
    proof:
      'SBTi is the default reference for credible climate action: over 11,000 organisations hold or have committed to science-based targets, and 51% of Fortune Global 500 companies now hold net-zero targets (iCOR; Terrapass / SBTi, 2026). The Net-Zero Standard V2 becomes mandatory for new targets from 1 January 2028, recognises carbon credits formally for the first time (reduction and removal credits from 2027, removals required from 2035), and introduces an Ongoing Emissions Responsibility framework aligned with the VCMI Claims Code (Terrapass; South Pole, 2026).',
    proofFigure: { value: '11,000+', label: 'organisations hold or have committed to science-based targets' },
    approach: [
      'Design near-term and net-zero targets across all three scopes',
      'Model them to stay ambitious yet fundable',
      'Manage submission and validation',
      'Build V2 readiness — interim removals and ongoing emissions — into the design from the start',
    ],
    standards: ['SBTi Corporate Net-Zero Standard (V2)', 'GHG Protocol'],
    faqs: [
      { q: 'Do carbon credits count toward SBTi targets?', a: 'Not near-term reduction targets, which require in-boundary cuts; credits support beyond-value-chain mitigation and, under V2, ongoing-emissions responsibility.' },
      { q: 'What changes under V2?', a: 'Formal recognition of credits, interim removals, and mandatory application to new targets from 2028.' },
    ],
    cta: 'Set validated targets.',
    related: ['net-zero-decarbonization', 'ghg-accounting', 'ifrs-s1-s2'],
  },

  {
    id: 'net-zero-decarbonization',
    path: '/net-zero-decarbonization.html',
    number: '15',
    group: 'target',
    title: 'Net zero & decarbonization',
    metaTitle: 'Net Zero Pathways & Decarbonization Planning | OffsetEase',
    kicker: 'A pathway your CFO will finance.',
    description:
      'Marginal abatement cost curves, sequenced pathway scenarios and a CFO-ready capital model — with a residual-emissions strategy drawn from our own high-integrity removals.',
    photo: 'basalt-columns',
    photoAlt: 'Columnar basalt formations in raking light',
    whatItIs:
      'A costed, sequenced plan to cut emissions to near zero across your operations and value chain, and neutralise the residual, hard-to-abate remainder with high-integrity removals. Reductions lead; removals finish.',
    whyItMatters:
      'A pledge without a funded pathway fails under scrutiny and never attracts capital. Marginal abatement modelling, sequencing and financing turn ambition into a plan a board will approve — connected directly to the high-integrity supply we develop for the residual.',
    proof:
      'Net-zero has become the default corporate ambition: net-zero pledges now cover about 92% of global GDP and 88% of emissions, and corporate target-setting rose roughly 40% in 2025 (iCOR, 2026) — which is exactly why a fundable, sequenced pathway (not a pledge) is now the differentiator.',
    proofFigure: { value: '92%', label: 'of global GDP now covered by net-zero pledges' },
    approach: [
      'Build a marginal abatement cost curve and pathway scenarios',
      'Structure projects and procure technology',
      'Build a CFO-ready capital and financing model',
      'Design a residual-emissions strategy drawn from our own high-integrity removals',
    ],
    standards: ['Aligned to SBTi and the GHG Protocol', 'Removals held to the ICVCM Core Carbon Principles'],
    faqs: [
      { q: 'What is a net-zero pathway?', a: 'A costed, sequenced plan to cut emissions to near zero and neutralise the remainder with durable removals.' },
      { q: 'How do reductions and removals fit together?', a: 'Reductions carry the target; removals address the residual you can’t yet eliminate.' },
    ],
    cta: 'Fund your net-zero pathway.',
    related: ['sbti-target-setting', 'ghg-accounting', 'climate-risk-tcfd'],
  },

  {
    id: 'esg-csr-strategy',
    path: '/esg-csr-strategy.html',
    number: '16',
    group: 'strategise',
    title: 'ESG & CSR strategy',
    metaTitle: 'ESG & CSR Strategy Tied to the Business | OffsetEase',
    kicker: 'Purpose tied to the business, not bolted on.',
    description:
      'A focused, measurable, governed CSR and ESG strategy connected to where your business creates and depends on value — and, in India, aligned with statutory CSR obligations.',
    photo: 'tree-nursery',
    photoAlt: 'Rows of young trees in a nursery',
    whatItIs:
      'A CSR and ESG strategy that connects social and environmental investment to where your business creates and depends on value — focused, measurable and governed. In India, aligned with statutory CSR obligations.',
    whyItMatters:
      'Scattered, anecdotal CSR wastes budget and credibility. A strategy tied to the business, measured for outcomes, and concentrated on the communities and ecosystems your operations and projects already touch creates real impact — and reinforces, rather than dilutes, your carbon and ESG story.',
    approach: [
      'Build a clear investment thesis',
      'Set priority themes aligned to your operations, value chain and the UN SDGs',
      'Put governance, budget and measurement in place',
      'In India, align with statutory CSR without reducing it to a compliance line item',
    ],
    standards: ['Aligned to the UN SDGs', 'India Companies Act CSR (Section 135) where applicable'],
    faqs: [
      { q: 'What makes CSR credible?', a: 'A clear link to the business, measurable outcomes, and honest governance.' },
      { q: 'Can CSR reinforce our carbon and ESG work?', a: 'Yes — the strongest programmes concentrate where your operations and projects already have a footprint.' },
    ],
    cta: 'Build a strategy that pays back.',
    related: ['double-materiality-assessment', 'ecovadis-rating', 'supplier-value-chain-esg'],
  },

  {
    id: 'climate-risk-tcfd',
    path: '/climate-risk-tcfd.html',
    number: '17',
    group: 'strategise',
    title: 'Climate risk & TCFD',
    metaTitle: 'Climate Risk Assessment & TCFD / IFRS S2 Disclosure | OffsetEase',
    kicker: 'Physical and transition risk, quantified.',
    description:
      'Physical and transition climate risk identified, scenario-tested and quantified in financial terms — structured to TCFD and ready for IFRS S2.',
    photo: 'river-delta',
    photoAlt: 'A braided river delta fanning out across a floodplain',
    whatItIs:
      'An assessment and quantification of your physical and transition climate risk, structured to TCFD and ready for IFRS S2 — scenario-tested and expressed in financial terms a board and investors can act on.',
    whyItMatters:
      'Climate risk is now a governance and disclosure obligation, not a sustainability footnote. Assurance and investor scrutiny reward quantified, scenario-tested analysis and expose narrative, generic analysis.',
    proof:
      'The disclosure hook is direct: IFRS S2 builds on the TCFD recommendations and is being adopted across jurisdictions representing over 60% of global GDP (S&P Global; ISSB, 2026), and transition risk now explicitly includes carbon-pricing exposure such as CBAM, live since January 2026 (European Commission, 2026).',
    proofFigure: { value: '60%+', label: 'of global GDP moving to the IFRS climate baseline' },
    approach: [
      'Identify physical risk — acute and chronic hazards across sites and value chain',
      'Identify transition risk — policy, carbon pricing, technology and market shifts',
      'Run scenario analysis against recognised pathways',
      'Quantify material exposures financially',
      'Structure disclosure for IFRS S2',
    ],
    standards: ['TCFD', 'IFRS S2'],
    faqs: [
      { q: 'What’s the difference between physical and transition risk?', a: 'Physical comes from a changing climate; transition from the shift to a low-carbon economy.' },
      { q: 'Is TCFD still relevant under IFRS S2?', a: 'Yes — S2 builds on TCFD, so the work maps straight across.' },
    ],
    cta: 'Quantify your climate risk.',
    related: ['ifrs-s1-s2', 'cbam-compliance', 'net-zero-decarbonization'],
  },

  {
    id: 'supplier-value-chain-esg',
    path: '/supplier-value-chain-esg.html',
    number: '18',
    group: 'strategise',
    title: 'Supplier & value-chain ESG assessment',
    shortTitle: 'Supplier & value-chain ESG',
    metaTitle: 'Supplier & Value-Chain ESG Assessment | OffsetEase',
    kicker: 'Your ESG is only as strong as your value chain.',
    description:
      'Supplier segmentation, risk screening, primary Scope 3 data collection and improvement plans — building the traceable value-chain record buyers, regulators and rating agencies require.',
    photo: 'container-port',
    photoAlt: 'Stacked shipping containers at a working port',
    whatItIs:
      'Assessment and engagement of your suppliers on environmental, social and governance criteria — building the Scope 3, due-diligence and disclosure evidence that buyers, regulators and rating agencies increasingly require.',
    whyItMatters:
      'Most of a company’s emissions, and much of its regulatory and reputational risk, sit in its value chain. Value-chain data requests now reach far below regulatory thresholds — even where you’re out of direct scope, your buyers are not, and the requirement flows down.',
    proof:
      'The scale of the value-chain gap is the point: supply-chain (Scope 3) emissions are on average around 26× a company’s operational emissions (CDP & Boston Consulting Group, 2024), and requests now cascade through BRSR value-chain rules and EcoVadis/CDP supplier questionnaires — reaching well below formal thresholds (OneStopESG, 2026).',
    proofFigure: { value: '26×', label: 'Scope 3 vs operational emissions, on average' },
    approach: [
      'Segment and risk-screen suppliers across E, S and G',
      'Collect data and primary Scope 3 evidence to replace industry averages',
      'Run supplier engagement and improvement plans',
      'Build a traceable value-chain record aligned to your disclosure and procurement requirements',
    ],
    standards: ['Aligned to the GHG Protocol Scope 3 Standard', 'CSDDD-style due diligence', 'BRSR value-chain disclosure'],
    faqs: [
      { q: 'Why assess suppliers on ESG?', a: 'Because Scope 3, due diligence and buyer scorecards all depend on value-chain data you don’t hold until you collect it.' },
      { q: 'How does it support Scope 3?', a: 'Primary supplier data replaces averages, for a more accurate, defensible footprint.' },
    ],
    cta: 'Strengthen your value chain.',
    related: ['ghg-accounting', 'ecovadis-rating', 'brsr-reporting'],
  },
];

export const byId = Object.fromEntries(services.map((s) => [s.id, s]));
export const servicesInGroup = (g) => services.filter((s) => s.group === g);
