// Extra depth for the service pages, keyed by service id.
//
// WHY THIS IS A SEPARATE FILE
// Every figure and date below is lifted from the two approved research
// documents that already govern this site's copy — "OffsetEase — Research &
// Evidence Companion" (compiled September 2026) and "Final Website Content
// (with integrated research)" — and each row carries the attribution those
// documents give it. Keeping it apart from services.mjs makes the sourced
// material auditable in one place, and makes it obvious that nothing here was
// invented to fill a page out.
//
// Nothing is added for a service unless the research companion has a section
// covering it. Ten of the eighteen services have no such section yet and are
// deliberately absent rather than padded — see `missingDepth` at the bottom.
//
// REFRESH: these are dated figures on a quarterly cycle. Check them against
// the primary sources before each review and update `reviewed` below.

export const reviewed = '2026-09-14';

export const depth = {
  /* ------------------------------------------------------------------ CBAM */
  'cbam-compliance': {
    answer:
      'CBAM is the EU carbon price at its border. Since 1 January 2026, importers of cement, iron and steel, aluminium, fertilisers, electricity and hydrogen must surrender certificates against the emissions embedded in what they bring in. Verified supplier data almost always costs less than the EU’s default values.',
    facts: {
      caption: 'CBAM at a glance',
      cols: ['', 'Position as at September 2026'],
      rows: [
        { k: 'Status', v: 'Definitive regime — financial obligations apply', src: 'European Commission' },
        { k: 'Sectors covered', v: 'Cement, iron & steel, aluminium, fertilisers, electricity and hydrogen, plus selected precursor goods', src: 'European Commission' },
        { k: 'De minimis threshold', v: '50 tonnes a year (Omnibus, Regulation (EU) 2025/2083) — exempts roughly 90% of importers while still covering about 99% of embedded emissions', src: 'European Commission; Spectreco, 2026' },
        { k: 'Reference price', v: '€75.36 per tonne CO₂ in Q1 2026, tracking the EU ETS', src: 'Gerlach Customs; Coolset, 2026' },
        { k: 'Adjustment factor', v: '2.5% in 2026, phasing to full cost by 2034', src: 'Gerlach Customs; Spectreco, 2026' },
        { k: 'Penalty', v: '€100 per tonne for non-surrender', src: 'Gerlach Customs; Coolset, 2026' },
      ],
    },
    timeline: [
      { when: 'Oct 2023 – Dec 2025', what: 'Transitional phase — reporting only, no financial cost.', done: true },
      { when: '1 January 2026', what: '**Definitive regime begins.** Financial obligations apply.', done: true },
      { when: 'February 2027', what: 'CBAM certificate sales open.' },
      { when: '30 September 2027', what: '**First declaration and surrender**, covering 2026 imports.' },
      { when: 'Through 2034', what: 'Free allocation phases out and the adjustment factor reaches full cost.' },
    ],
    faqs: [
      { q: 'Which sectors are in scope?', a: 'Six: cement, iron and steel, aluminium, fertilisers, electricity and hydrogen — plus selected precursor goods. Confirming exactly where your product codes sit is the first piece of work, because the boundary moved shortly before the definitive regime began.' },
      { q: 'Does the 50-tonne threshold exempt us?', a: 'It might. The Omnibus de minimis under Regulation (EU) 2025/2083 exempts importers below 50 tonnes a year — roughly 90% of them — while still covering about 99% of embedded emissions. That is precisely why scope confirmation comes before anything else.' },
      { q: 'What does CBAM actually cost?', a: 'The Q1 2026 reference price was €75.36 per tonne of CO₂, tracking the EU ETS. A 2.5% adjustment factor applies in 2026 and phases up to full cost by 2034, so today’s exposure is a fraction of the exposure being built in.' },
      { q: 'Why does verified data matter so much?', a: 'Where reliable supplier data is missing, the EU applies default values — and they are deliberately conservative, which usually means higher. Verified product-level embedded emissions typically lower the bill, which is why this is a margin question rather than a paperwork one.' },
      { q: 'What happens if certificates are not surrendered?', a: 'A penalty of €100 per tonne, on top of the certificate cost that was avoided.' },
      { q: 'When is the first declaration due?', a: '30 September 2027, covering 2026 imports. Certificate sales open in February 2027, so the data work has to be finished well before either date.' },
      { q: 'Do we file, or does our EU importer?', a: 'The declaration sits with the EU-side declarant. Almost all of the work sits upstream with you: the product-level embedded-emissions data they cannot file without. We calculate it and support your declarants with it.' },
      { q: 'How does this relate to our product carbon footprint?', a: 'Directly. CBAM charges on embedded emissions, and a rigorous product carbon footprint is what produces verified figures to put in place of defaults. The two pieces of work are the same evidence base.' },
    ],
  },

  /* ------------------------------------------------------------------ BRSR */
  'brsr-reporting': {
    answer:
      'BRSR is SEBI’s mandatory sustainability report for India’s top 1,000 listed companies. BRSR Core is the assured subset within it — nine ESG attributes that need third-party assurance, on a glide path that reached the full top 1,000 in FY 2026-27.',
    facts: {
      caption: 'BRSR and BRSR Core at a glance',
      cols: ['', 'Position as at September 2026'],
      rows: [
        { k: 'Who files full BRSR', v: 'India’s top 1,000 listed companies by market capitalisation, since FY 2022-23', src: 'SEBI' },
        { k: 'BRSR Core', v: '9 ESG attributes requiring assurance — framed as “assessment or assurance” after the March 2025 easing', src: 'GreenSutra; Consultivo, 2026' },
        { k: 'Full BRSR indicators', v: 'Around 140 — roughly 98 essential and 42 leadership', src: 'GreenSutra; Consultivo, 2026' },
        { k: 'Current assurance cohort', v: 'Top 1,000, for FY 2026-27 — which began 1 April 2026', src: 'SEBI; Schneider Electric, 2026' },
        { k: 'Value-chain disclosure', v: 'Voluntary since March 2025 (top 250, covering ~75% of purchases and sales by value) — but large buyers still demand verified vendor data', src: 'OneStopESG; Sentra, 2026' },
        { k: 'Designed to align with', v: 'GRI, IFRS S1/S2, TCFD and CDP', src: 'imarcengineering; Sprih, 2026' },
      ],
    },
    timeline: [
      { when: 'FY 2022-23', what: 'Full BRSR applies to the top 1,000 listed companies.', done: true },
      { when: 'FY 2023-24', what: 'BRSR Core assurance begins — top 150.', done: true },
      { when: 'FY 2024-25', what: 'Assurance extends to the top 250.', done: true },
      { when: 'March 2025', what: 'Value-chain disclosure moves from comply-or-explain to voluntary.', done: true },
      { when: 'FY 2025-26', what: 'Assurance extends to the top 500.', done: true },
      { when: 'FY 2026-27', what: '**Top 1,000 in scope for assurance** — the year began 1 April 2026.', done: true },
    ],
    faqs: [
      { q: 'Who has to file BRSR?', a: 'India’s top 1,000 listed companies by market capitalisation. Full BRSR has applied to that cohort since FY 2022-23.' },
      { q: 'What is the difference between BRSR and BRSR Core?', a: 'Full BRSR is the report — around 140 indicators, roughly 98 essential and 42 leadership. BRSR Core is the nine ESG attributes inside it that require third-party assurance.' },
      { q: 'Do we need assurance this year?', a: 'If you are in the top 1,000, yes. The glide path ran top 150 in FY 2023-24, top 250 in FY 2024-25, top 500 in FY 2025-26, and reached the full top 1,000 for FY 2026-27, which began on 1 April 2026.' },
      { q: 'Is value-chain disclosure still required?', a: 'Not as a SEBI obligation. It moved from comply-or-explain to voluntary in March 2025 for the top 250. In practice large buyers such as Tata and JSW still ask their vendors for verified data, so the requirement arrives commercially rather than through the regulator.' },
      { q: 'We already report under GRI. Does that help?', a: 'Considerably. BRSR is explicitly designed to align with GRI, IFRS S1/S2, TCFD and CDP, so a well-built data set answers several frameworks at once rather than being rebuilt for each.' },
      { q: 'What actually gets tested in assurance?', a: 'The nine BRSR Core attributes, and the evidence trail behind each number. Most findings are traceability problems rather than calculation problems — which is why the data systems matter as much as the report.' },
    ],
  },

  /* ------------------------------------------------------------------ EUDR */
  'eudr-compliance': {
    answer:
      'EUDR bars seven commodities from the EU market unless they are proven deforestation-free. The proof is plot-level geolocation for every source, carried in a Due Diligence Statement filed before the goods are placed on the market or exported.',
    facts: {
      caption: 'EUDR at a glance',
      cols: ['', 'Position as at September 2026'],
      rows: [
        { k: 'Regulation', v: 'Regulation (EU) 2025/2650, published 23 December 2025 — repeals and replaces the EU Timber Regulation', src: 'European Commission; Coolset, 2026' },
        { k: 'Commodities', v: 'Cattle, cocoa, coffee, palm oil, rubber, soy and wood — plus derived products such as leather and chocolate', src: 'PSQR; Coolset, 2026' },
        { k: 'Core requirement', v: 'Plot-level geolocation for every source, and a Due Diligence Statement submitted before placement or export', src: 'PSQR; Coolset, 2026' },
        { k: 'Large and medium operators', v: 'Apply from 30 December 2026', src: 'European Commission Access2Markets, 2026' },
        { k: 'Micro and small operators', v: 'Apply from 30 June 2027', src: 'European Commission Access2Markets, 2026' },
      ],
    },
    timeline: [
      { when: '23 December 2025', what: 'Regulation (EU) 2025/2650 published.', done: true },
      { when: '30 December 2026', what: '**Applies to large and medium operators and traders.**' },
      { when: '30 June 2027', what: 'Applies to micro and small operators.' },
    ],
    faqs: [
      { q: 'Which commodities does EUDR cover?', a: 'Seven: cattle, cocoa, coffee, palm oil, rubber, soy and wood — together with products derived from them, such as leather and chocolate. Derived products catch a lot of businesses that do not think of themselves as commodity traders.' },
      { q: 'When does it apply to us?', a: 'Large and medium operators and traders from 30 December 2026; micro and small operators from 30 June 2027.' },
      { q: 'What does “deforestation-free” have to be proven with?', a: 'Plot-level geolocation for every source of the commodity, not a supplier declaration. That is the part that takes time, because it usually means going further up the chain than existing records reach.' },
      { q: 'What is a Due Diligence Statement?', a: 'The filing that has to be submitted before goods are placed on the EU market or exported from it. It carries the geolocation data and the risk assessment behind it.' },
      { q: 'We already comply with the EU Timber Regulation. Is that enough?', a: 'No. EUDR repeals and replaces the Timber Regulation, and the evidence standard is higher — plot-level geolocation rather than the older due-diligence approach.' },
      { q: 'Where does this usually go wrong?', a: 'Traceability depth. Most supply chains can name their direct supplier and stop there, while the regulation asks for the plot. Closing that gap is the bulk of the work and the reason to start well before the date.' },
    ],
  },

  /* -------------------------------------------------------- GHG accounting */
  'ghg-accounting': {
    answer:
      'A GHG inventory measures every greenhouse gas your organisation is responsible for, in tonnes of CO₂-equivalent, split into Scope 1 (direct), Scope 2 (purchased energy) and Scope 3 (the value chain, across 15 categories). Everything else — targets, disclosure, carbon claims — refers back to it.',
    facts: {
      caption: 'What a defensible inventory involves',
      cols: ['', 'Detail'],
      rows: [
        { k: 'Standards', v: 'GHG Protocol (Corporate, Scope 2 and Scope 3 standards) and ISO 14064-1', src: 'GHG Protocol; ISO' },
        { k: 'Scope 3 categories', v: '15, each screened for materiality', src: 'GHG Protocol Scope 3 Standard' },
        { k: 'Scope 3 vs operations', v: 'Supply-chain emissions average around 26× a company’s operational emissions', src: 'CDP & Boston Consulting Group, 2024' },
        { k: 'Scope 2 method', v: 'Both location-based and market-based are required', src: 'GHG Protocol Scope 2 Guidance' },
        { k: 'Feeds directly into', v: 'IFRS S2, BRSR, CDP and SBTi — IFRS S2 references the GHG Protocol and requires Scope 1, 2 and 3', src: 'ISSB, 2026' },
      ],
    },
    faqs: [
      { q: 'What are Scope 1, 2 and 3?', a: 'Direct emissions, purchased-energy emissions, and value-chain emissions. Scope 3 is usually by far the largest — supply-chain emissions average around 26 times operational emissions.' },
      { q: 'Is Scope 3 mandatory?', a: 'It varies by jurisdiction, but the question is increasingly academic. IFRS S2 requires Scope 1, 2 and 3, and Indian listed companies with global investors, EU buyers or export exposure report being asked for Scope 3 whether or not SEBI has mandated it.' },
      { q: 'How accurate does Scope 3 have to be?', a: 'Accurate enough to defend. Spend-based proxies are accepted in early years and increasingly are not later; primary supplier data replaces them where it materially moves the number. Screening all 15 categories for materiality is what tells you where that effort belongs.' },
      { q: 'Why does Scope 2 need two numbers?', a: 'The GHG Protocol requires both a location-based figure, reflecting the grid you sit on, and a market-based figure, reflecting the energy you have contracted. They answer different questions and disclosure frameworks ask for both.' },
      { q: 'Will one inventory serve every framework?', a: 'If it is built properly, largely yes. A GHG-Protocol inventory is the foundation IFRS S2, BRSR, CDP and SBTi all refer back to. Built once and structured well, it serves them together rather than being rebuilt for each.' },
      { q: 'How long does a first inventory take?', a: 'It depends almost entirely on how much activity data already exists and how many sites are involved. Send us last year’s energy bills and a site list and we will tell you what yours actually takes.' },
    ],
  },

  /* ------------------------------------------------------------- CSRD/ESRS */
  'csrd-esrs': {
    answer:
      'CSRD is the EU’s sustainability reporting directive. The Omnibus reform of February 2026 raised its thresholds sharply — to more than 1,000 employees and more than €450m turnover — cutting the number of companies in scope by around 85%, while keeping double materiality, assurance and the value-chain data demands intact.',
    facts: {
      caption: 'CSRD after the Omnibus',
      cols: ['', 'Position as at September 2026'],
      rows: [
        { k: 'Governing law', v: 'Directive (EU) 2026/470 (Omnibus I) — adopted 24 February 2026, in force 18/19 March 2026', src: 'DLA Piper; Norton Rose Fulbright; PwC, 2026' },
        { k: 'New threshold', v: 'More than 1,000 employees **and** more than €450m net turnover — both required', src: 'Morrison Foerster; Sprih/ERM, 2026' },
        { k: 'Previous threshold', v: '250 employees / €50m turnover', src: 'Morrison Foerster, 2026' },
        { k: 'Effect on scope', v: 'Around 85% fewer companies in scope', src: 'Morrison Foerster; Sprih/ERM, 2026' },
        { k: 'Non-EU groups', v: 'Still in scope above €450m EU turnover, with a €200m subsidiary or branch threshold', src: 'Regulation Tomorrow, 2026' },
        { k: 'Retained', v: 'Double materiality and limited assurance — a limited-assurance standard is due by 1 July 2027', src: 'Accountancy Europe; Sprih, 2026' },
      ],
    },
    timeline: [
      { when: '24 February 2026', what: 'Omnibus I adopted by the Council.', done: true },
      { when: '26 February 2026', what: 'Published as Directive (EU) 2026/470.', done: true },
      { when: '18/19 March 2026', what: 'In force.', done: true },
      { when: '1 January 2027', what: '**Revised-scope reporting applies** for financial years beginning on or after this date.' },
      { when: '1 July 2027', what: 'Limited-assurance standard due.' },
      { when: '26 July 2029', what: 'CSDDD applies, at above 5,000 employees and €1.5bn turnover.' },
    ],
    faqs: [
      { q: 'Are we still in scope after the Omnibus?', a: 'Only if you clear both of the raised thresholds — more than 1,000 employees and more than €450m net turnover. The previous test was 250 employees or €50m, so around 85% of previously in-scope companies fell out.' },
      { q: 'We are not an EU company. Does CSRD reach us?', a: 'It can. Non-EU groups remain in scope above €450m of EU turnover, with a €200m threshold at subsidiary or branch level.' },
      { q: 'Did the Omnibus remove double materiality?', a: 'No. Double materiality and limited assurance were both retained. The scope narrowed; the framework did not.' },
      { q: 'When does the revised scope actually bite?', a: 'For financial years beginning on or after 1 January 2027. The limited-assurance standard is due by 1 July 2027.' },
      { q: 'We fell out of scope. Is there nothing to do?', a: 'Usually there is. Value-chain data requests reach far below the reporting thresholds — your in-scope customers still have to report on you. Falling out of direct scope rarely removes the data obligation, it just changes who asks.' },
      { q: 'What about CSDDD?', a: 'Its thresholds rose too, to more than 5,000 employees and €1.5bn turnover, applying from 26 July 2029.' },
    ],
  },

  /* ------------------------------------------------------------ IFRS S1/S2 */
  'ifrs-s1-s2': {
    answer:
      'IFRS S1 and S2 are the ISSB’s global baseline for sustainability and climate disclosure. S2 builds directly on the TCFD recommendations and references the GHG Protocol, so existing TCFD and inventory work maps across rather than starting again.',
    facts: {
      caption: 'ISSB adoption at a glance',
      cols: ['', 'Position as at September 2026'],
      rows: [
        { k: 'Jurisdictions adopted', v: '28 as of April 2026, with around 12 more planning to', src: 'S&P Global, May 2026' },
        { k: 'Broader count', v: '21+ jurisdictions mandatory and 30+ moving to adopt — together about 60% of global GDP', src: 'ISSB; ESGsource; KPMG, 2025-26' },
        { k: 'Major markets', v: 'Japan, Australia, Singapore, Hong Kong, South Korea, Canada, the UK and Brazil', src: 'ESGsource, June 2026' },
        { k: 'United States', v: 'Not adopted, though many US multinationals align voluntarily', src: 'ESGsource, June 2026' },
        { k: 'Builds on', v: 'TCFD; references the GHG Protocol and requires Scope 1, 2 and 3', src: 'Sustainability Atlas; ISSB, 2026' },
      ],
    },
    faqs: [
      { q: 'What is the difference between S1 and S2?', a: 'S1 covers sustainability-related financial disclosure generally; S2 is the climate-specific standard that sits on top of it and builds directly on the TCFD recommendations.' },
      { q: 'Does this apply to us?', a: 'It depends where you are listed and operate. 28 jurisdictions had adopted as of April 2026 with around a dozen more planning to, and broader counts put 21 or more jurisdictions on a mandatory footing — together representing roughly 60% of global GDP.' },
      { q: 'We already report to TCFD. Does that carry over?', a: 'Yes, substantially. IFRS S2 builds directly on TCFD, so climate-risk work structured to TCFD maps across into S2 rather than being redone.' },
      { q: 'Does S2 require Scope 3?', a: 'It requires Scope 1, 2 and 3, and it references the GHG Protocol — so a GHG-Protocol inventory is the foundation rather than a separate exercise.' },
      { q: 'What about the United States?', a: 'The US has not adopted IFRS S1 and S2. Many US multinationals align voluntarily, usually because their investors or their non-US listings ask them to.' },
      { q: 'How does this relate to BRSR?', a: 'BRSR is explicitly designed to align with IFRS S1/S2, alongside GRI, TCFD and CDP — so an Indian filer building for one is building much of the other.' },
    ],
  },

  /* -------------------------------------------------------------- EcoVadis */
  'ecovadis-rating': {
    answer:
      'EcoVadis scores suppliers 0–100 across four themes and issues percentile-based medals. Because the medals are a rank recalculated each cycle against an improving population, holding a Gold is continuous work rather than a one-off achievement.',
    facts: {
      caption: 'How the EcoVadis score is built',
      cols: ['', 'Detail'],
      rows: [
        { k: 'Medals (2025 update)', v: 'Platinum — top 1% · Gold — top 5% · Silver — top 15% · Bronze — top 35%', src: 'Sunhat, 2026; Nexio Projects, 2025' },
        { k: 'Themes', v: 'Environment; Labour & Human Rights; Ethics; Sustainable Procurement — around 21 criteria', src: 'Your Carbon Steps; EasyAutofill, 2025' },
        { k: 'Scoring weights', v: 'Policies 25% · Actions 40% · Results 35%', src: 'Your Carbon Steps; EasyAutofill, 2025' },
        { k: 'Automatic disqualifier', v: 'Any single theme scoring below 30 rules out a medal entirely', src: 'Your Carbon Steps; EasyAutofill, 2025' },
        { k: 'From 2026', v: 'Every external use of a medal must link to the company’s EcoVadis Recognition Page', src: 'Sunhat, 2026' },
      ],
    },
    faqs: [
      { q: 'What score do we need for Gold?', a: 'There is no fixed score. Medals are percentile-based — Platinum is the top 1%, Gold the top 5%, Silver the top 15% and Bronze the top 35% — and the ranking is recalculated each cycle against a population that keeps improving. Last year’s Gold score can be this year’s Silver.' },
      { q: 'Why did our score drop when nothing changed?', a: 'Because the medal is a rank, not an absolute. If the assessed population improves and you stand still, you move down. This is the single most common surprise and the reason improvement work is continuous.' },
      { q: 'Which part of the assessment carries most weight?', a: 'Actions, at 40%, ahead of Results at 35% and Policies at 25%. Policies alone score poorly — the methodology is looking for what you have implemented, with evidence.' },
      { q: 'Can one weak theme cost us a medal?', a: 'Yes, outright. Any single theme scoring below 30 disqualifies you from a medal regardless of the overall score, which is why a targeted approach beats a general one.' },
      { q: 'What are the four themes?', a: 'Environment; Labour and Human Rights; Ethics; and Sustainable Procurement — roughly 21 criteria in total, weighted by what is material to your sector and size.' },
      { q: 'Can we still put the medal in our tender documents?', a: 'Yes, but from 2026 every external use has to link to your EcoVadis Recognition Page.' },
    ],
  },

  /* ------------------------------------------------------------------ SBTi */
  'sbti-target-setting': {
    answer:
      'SBTi validates corporate emissions targets against what climate science requires. Its Corporate Net-Zero Standard V2 becomes mandatory for new targets from 1 January 2028, and for the first time formally recognises carbon credits — though not against near-term reduction targets, which still require cuts inside your own boundary.',
    facts: {
      caption: 'SBTi at a glance',
      cols: ['', 'Position as at September 2026'],
      rows: [
        { k: 'Organisations with or committed to targets', v: 'More than 11,000 — around 25% of global revenue and 40% of global market capitalisation', src: 'iCOR, June 2026' },
        { k: 'Fortune Global 500', v: '51% hold net-zero targets, up from 8% in 2020', src: 'Terrapass, July 2026' },
        { k: 'Net-Zero Standard V2', v: 'Mandatory for new targets from 1 January 2028; companies with 2030 targets stay on V1 for the current cycle', src: 'GreenCalculus; Terrapass, 2026' },
        { k: 'Carbon credits', v: 'Reduction and removal credits recognised from 2027; removals required from 2035', src: 'Terrapass; South Pole, 2026' },
        { k: 'Near-term targets', v: 'Credits do **not** count — near-term targets require in-boundary reductions', src: 'SBTi V2; iCOR, 2026' },
      ],
    },
    timeline: [
      { when: '1 February 2027', what: 'Companies without existing targets can begin setting to V2.' },
      { when: '2027', what: 'Reduction and removal credits recognised under the Ongoing Emissions Responsibility framework.' },
      { when: '1 January 2028', what: '**V2 becomes mandatory for new targets.**' },
      { when: '2035', what: 'Removals required.' },
    ],
    faqs: [
      { q: 'Can we use carbon credits to hit our SBTi target?', a: 'Not for near-term reduction targets — those require reductions inside your own boundary. V2 recognises credits for the first time, from 2027, under the Ongoing Emissions Responsibility framework and for beyond-value-chain mitigation, with removals required from 2035.' },
      { q: 'Do we have to move to Net-Zero Standard V2?', a: 'For new targets, from 1 January 2028. Companies with 2030 targets stay on V1 for the current cycle, and companies without targets today can start on V2 from 1 February 2027.' },
      { q: 'What does OER mean?', a: 'Ongoing Emissions Responsibility — the V2 framework covering the emissions a company continues to release while decarbonising. It is closely aligned with the VCMI Claims Code.' },
      { q: 'Is SBTi actually the standard buyers look for?', a: 'In practice, yes. More than 11,000 organisations hold or have committed to science-based targets, representing roughly a quarter of global revenue and 40% of global market capitalisation. Among the Fortune Global 500, 51% now hold net-zero targets, against 8% in 2020.' },
      { q: 'How long does validation take?', a: 'The submission itself is the short part. The work is the inventory and the pathway behind it — a target is only validated if the Scope 1, 2 and 3 baseline underneath it holds up.' },
      { q: 'What if we miss the target?', a: 'Targets are recalculated rather than quietly dropped, and the credibility cost of an unexplained miss is higher than the cost of a target set carefully in the first place. That is an argument for a pathway you can fund, not the most ambitious one available.' },
    ],
  },
};

// The remaining ten services have no section in the research companion, so
// they carry no fact table, timeline or expanded FAQ here. Adding one would
// mean inventing regulatory detail on pages whose entire proposition is
// defensible disclosure. They need sourced copy from the client first.
export const missingDepth = [
  'product-carbon-footprint',
  'life-cycle-assessment',
  'environmental-product-declaration',
  'double-materiality-assessment',
  'cdp-disclosure',
  'iscc-certification',
  'net-zero-decarbonization',
  'esg-csr-strategy',
  'climate-risk-tcfd',
  'supplier-value-chain-esg',
];
