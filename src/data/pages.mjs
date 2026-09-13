// Copy for the seven core pages. Verbatim from the approved content document;
// only structure (grouping, ordering, chapter names) is editorial.

export const home = {
  id: 'home',
  path: '/',
  title: 'Carbon projects that deliver impact, with confidence',
  metaTitle: 'OffsetEase — High-Integrity Carbon Supply, Projects & ESG',
  ogTitle: 'Carbon projects that deliver impact, with confidence',
  description:
    'OffsetEase sources, screens and supplies high-integrity carbon, develops projects at the source, and turns ESG data into defensible disclosure. Every credit passes The Five Checks.',
  preloadPhoto: 'earth-night',

  hero: {
    eyebrow: 'Science-led carbon & climate intelligence',
    headline: 'Carbon projects that deliver impact, with confidence.',
    accent: ['impact,'],
    standfirst:
      'We do the hard part — finding and screening carbon that genuinely delivers — so your goals rest on credits that hold.',
    photo: 'earth-night',
    photoAlt: 'The Earth at night, city lights tracing the continents',
    primary: { label: 'Talk to us', href: '/contact.html' },
    secondary: { label: 'How we source', href: '/carbon-supply.html' },
    // Our own figures only. Market statistics are never shown in the same row —
    // they live in `marketStats` below, in a visibly different component.
    statsNote: 'OffsetEase programme data',
    stats: [
      { value: '37,798', unit: ' tCO₂e', label: 'verified and issued' },
      { value: '502', unit: ' ha', label: 'planted' },
      { value: '468', label: 'farmers as partners' },
      { value: '5 / 5', label: 'checks passed, or we don’t supply it' },
    ],
    scrollCue: 'Scroll — the integrity story, in six chapters',
  },

  divided: {
    chapter: 'Signal',
    eyebrow: 'The market has divided',
    headline: 'One half is a liability. The other is defensible.',
    body: [
      'The voluntary carbon market has split in two. One half is cheap, abundant, and increasingly a liability. The other is scarce, scrutinised, and defensible.',
      'We operate only in the half that lasts, and we develop supply at its source so our clients are not left competing for it.',
    ],
    proof:
      'The price gap proves it: in 2025, high-rated credits (A–AAA) averaged about $14.80/tonne while low-rated credits (CCC–B) averaged about $3.50 (MSCI Carbon Markets, 2025). Credits meeting the ICVCM Core Carbon Principles command a premium reported at up to 400% (Fiegenbaum Solutions, 2026), and top-tier credits traded roughly 50% higher than the lowest end over the year (Calyx Global & ClearBlue Markets, 2026).',
    split: [
      { side: 'low', label: 'CCC–B rated', value: '$3.50', note: 'Cheap, abundant, increasingly a liability.' },
      { side: 'high', label: 'A–AAA rated', value: '$14.80', note: 'Scarce, scrutinised, defensible.' },
    ],
    premium: { value: 'up to 400%', label: 'premium reported for CCP-aligned credits' },
    marketStats: [
      { value: '$14.80', unit: '/t', label: 'A–AAA rated credits, 2025 average', source: 'MSCI Carbon Markets, 2025' },
      { value: '51%', label: 'of Fortune Global 500 hold net-zero targets', source: 'Terrapass / SBTi, 2026' },
      { value: '36%', label: 'of 2025 retirement value was A-rated or higher', source: 'MSCI Carbon Markets, 2025' },
    ],
  },

  story: {
    chapter: 'Challenge',
    eyebrow: 'What a serious buyer needs',
    headline: 'A climate claim is now a financial and legal position.',
    body:
      'A Fortune 500 climate claim is now a financial and legal position, not a line of marketing. It must be additional, permanent, independently verified, free of double counting, and demonstrably good for the people and ecosystems it touches. That is the whole of our work, and the whole of The Five Checks.',
    proof:
      'This is now the norm at the top of the market: 51% of Fortune Global 500 companies hold net-zero targets (Terrapass / SBTi, 2026), and buyers are visibly selective — credits rated A or higher made up 36% of 2025’s retirement value, even as 43% of 2024 retirements still came from low-rated projects (MSCI Carbon Markets, 2025).',
    scenes: [
      {
        photo: 'forest-water',
        photoAlt: 'Aerial view of forest meeting open water',
        eyebrow: 'The position',
        title: 'A claim you will have to defend',
        body: 'Marketing claims get retired quietly. Financial positions get audited. Treat carbon as the second and the first takes care of itself.',
      },
      {
        photo: 'forest-fog',
        photoAlt: 'Dense conifer forest disappearing into fog',
        eyebrow: 'The exposure',
        title: 'Low-rated supply is still moving',
        body: '43% of 2024 retirements still came from low-rated projects. Price is the reason; exposure is the cost.',
      },
      {
        photo: 'lone-tree',
        photoAlt: 'A single mature tree standing in open land',
        eyebrow: 'The correction',
        title: 'Quality is now visibly rewarded',
        body: 'Credits rated A or higher made up 36% of 2025’s retirement value. The market is repricing integrity in real time.',
      },
    ],
  },

  why: {
    chapter: 'Integrity',
    eyebrow: 'Why buyers choose us',
    headline: 'Four reasons the credits hold.',
    items: [
      { title: 'Straight from the source.', body: 'We source carbon directly from the projects that create it — no middlemen, no reselling on a spread.' },
      { title: 'Every credit, quality-screened.', body: 'Nothing reaches you until it passes The Five Checks. If we wouldn’t hold it, we won’t supply it.' },
      { title: 'Real, measurable impact.', body: 'Our projects do genuine good on the ground — for communities and ecosystems — not just on paper.' },
      { title: 'Full transparency, full traceability.', body: 'You see exactly what you’re buying, where it comes from, and how it’s retired.' },
    ],
  },

  checks: {
    chapter: 'Standard',
    eyebrow: 'How we ensure quality — The Five Checks',
    headline: 'Every credit passes all five before we’ll supply it.',
    items: [
      { n: '1', title: 'Additional', body: 'It wouldn’t have happened without carbon finance.' },
      { n: '2', title: 'Permanent', body: 'The impact lasts, protected against reversal.' },
      { n: '3', title: 'Properly measured', body: 'Conservative numbers, independently verified.' },
      { n: '4', title: 'Counted once', body: 'No double counting, transparently retired.' },
      { n: '5', title: 'Good for people and nature', body: 'Real community and environmental benefit.' },
    ],
    close: 'Fail one, and we don’t supply it.',
  },

  what: {
    chapter: 'Capability',
    eyebrow: 'What we do',
    headline: 'Four capabilities, one standard of integrity.',
    items: [
      {
        title: 'Carbon supply',
        body: 'We find, screen and supply high-quality carbon — to order, as a managed portfolio, or from our own projects.',
        href: '/carbon-supply.html',
        photo: 'sunlit-forest',
        photoAlt: 'Sunlight falling through a stand of tall trees',
      },
      {
        title: 'Carbon projects',
        body: 'We develop high-integrity projects at the source — nature-based and durable removals.',
        href: '/carbon-supply.html#pipeline',
        photo: 'tree-nursery',
        photoAlt: 'Rows of young trees in a nursery',
      },
      {
        title: 'Renewable attributes (I-RECs)',
        body: 'I-RECs to cut your Scope 2 — verified, correctly matched, defensible.',
        href: '/energy-attribute-certificates.html',
        photo: 'wind-turbines',
        photoAlt: 'Wind turbines silhouetted at sunset',
      },
      {
        title: 'ESG & sustainability',
        body: 'The measurement, reporting and target-setting that make your claims defensible.',
        href: '/esg-sustainability.html',
        photo: 'factory-interior',
        photoAlt: 'Interior of an industrial production hall',
      },
    ],
  },

  method: {
    chapter: 'Method',
    eyebrow: 'Our model',
    headline: 'Farmers are stakeholders, not suppliers.',
    body: 'We earn only when the communities we work with earn.',
    photo: 'farmland-sunrise',
    photoAlt: 'Farmland catching the first light of sunrise',
  },

  impact: {
    chapter: 'Impact',
    eyebrow: 'Impact — proven, not promised',
    headline: 'The best carbon does more than balance a number.',
    intro:
      'Take one agroforestry programme we’ve developed with farming communities across Gujarat and Rajasthan:',
    stats: [
      { value: '502', unit: ' ha', label: 'planted' },
      { value: '468', label: 'farmers as partners' },
      { value: '37,798', unit: ' tCO₂e', label: 'verified and issued' },
      { value: '3.9M', unit: ' tCO₂e', label: 'projected over 30 years' },
    ],
    body:
      'An afforestation–reforestation project — pomegranate, guava, mahogany and custard apple — third-party verified, with on-site and satellite MRV, and additionality proven.',
    sdgs: [
      { n: 1, label: 'No Poverty' },
      { n: 8, label: 'Decent Work' },
      { n: 13, label: 'Climate Action' },
      { n: 15, label: 'Life on Land' },
    ],
    proof:
      'This is exactly the profile the market now rewards: high-quality afforestation/reforestation (ARR) spot prices rose to around $24/tonne by September 2025, up sharply over the year (green.earth, 2025), and nature-based projects dominate the premium-priced segment alongside engineered removals (Grand View Research, 2026).',
    photo: 'mangrove-river',
    photoAlt: 'A river winding through dense mangrove forest',
  },

  close: {
    headline: 'Let’s build your carbon strategy, properly.',
    body:
      'Securing supply, developing a project, or mapping a net-zero pathway: senior specialists, start to finish. A reply within one business day.',
    photo: 'valley-dawn',
    photoAlt: 'A wide valley at dawn under low cloud',
  },
};

export const supply = {
  id: 'supply',
  path: '/carbon-supply.html',
  title: 'The carbon you need — sourced, screened, delivered',
  metaTitle: 'Carbon Supply — Spot, Portfolio & Offtake | OffsetEase',
  shortTitle: 'Carbon supply',
  description:
    'High-quality carbon matched to your goals and timeline — sourced at the project, screened against The Five Checks, delivered with full traceability.',
  preloadPhoto: 'sunlit-forest',
  service: { name: 'High-integrity carbon supply', type: 'Carbon credit sourcing and project development' },

  hero: {
    eyebrow: 'Carbon supply',
    headline: 'The carbon you need — sourced, screened, delivered.',
    accent: ['screened,'],
    standfirst:
      'We match you to high-quality carbon that fits your goals and timeline — sourced at the project, screened against The Five Checks, and delivered with full traceability.',
    photo: 'sunlit-forest',
    photoAlt: 'Sunlight falling through a stand of tall trees',
  },

  ways: {
    eyebrow: 'How to work with us',
    headline: 'Three ways to secure supply.',
    items: [
      { n: '01', title: 'Spot supply', body: 'Verified credits available now — matched to your target and retired on your behalf. Best when you know exactly what you need.' },
      { n: '02', title: 'Managed portfolio', body: 'A diversified, screened portfolio across project types and vintages, built and managed for you — so your supply and your claim stay strong year on year.' },
      { n: '03', title: 'Offtake & forward purchase', body: 'Secure future supply directly from projects we originate — first access to high-integrity carbon at the source, on agreed terms.' },
    ],
    proof:
      'Securing supply early is now the strategy of serious buyers: corporate commitments reached a record ~US$16bn, and more than US$10bn was committed to new credit generation in the first half of 2025 alone — about 3× the 2024 level (Center for Sustainable Finance / MSCI, 2026; carboncredits.com, 2025). In durable removals the squeeze is already visible — over 90% of available industrial biochar supply was contracted by the largest buyers by late 2025 (Planet2050, 2025).',
    proofFigure: { value: '90%+', label: 'of industrial biochar supply contracted by late 2025' },
  },

  types: {
    eyebrow: 'What we supply',
    headline: 'Three families of carbon.',
    items: [
      {
        title: 'Nature-based',
        body: 'Afforestation, reforestation, agroforestry, REDD+ and soil carbon — carbon that restores land and supports communities.',
        photo: 'hero-canopy',
        photoAlt: 'Sunlight breaking through a high forest canopy',
      },
      {
        title: 'Durable removals',
        body: 'Biochar and enhanced weathering — permanent removal for the emissions you can’t yet cut.',
        photo: 'basalt-columns',
        photoAlt: 'Columnar basalt formations in raking light',
      },
      {
        title: 'Avoidance & reduction',
        body: 'Clean cookstoves, clean water and methane capture, where the integrity and impact are strong.',
        photo: 'industrial-plant',
        photoAlt: 'An industrial plant seen against a pale sky',
      },
    ],
    proof:
      'Durable removals are scaling fast and command a premium: biochar accounted for about 86% of all durable CDR deliveries in 2024 (CDR.fyi, 2025), and over 408,000 biochar removal certificates had been issued by June 2025, delivering ~43% of market-verified durable removal volumes (Puro.earth, 2026). Biochar prices clustered around $125–145/tonne in 2025 (Planet2050, 2025).',
    proofFigure: { value: '86%', label: 'of durable CDR deliveries in 2024 were biochar' },
  },

  pipeline: {
    eyebrow: 'How it works — from origination to supply',
    headline: 'We take carbon projects end to end.',
    standfirst:
      'The credits you buy trace back to the ground, and the value flows back to the communities who created them.',
    stages: [
      {
        n: '1',
        title: 'Originate',
        steps: [
          { title: 'Project identification', body: 'High-potential projects and communities where carbon finance creates real impact.' },
          { title: 'Feasibility', body: 'Carbon, financial and social viability, tested before we commit.' },
          { title: 'Financing & offtake', body: 'We bring capital and structure forward offtake to fund the project from the start.' },
        ],
      },
      {
        n: '2',
        title: 'Develop & certify',
        steps: [
          { title: 'Standard & methodology', body: 'The right standard and approved methodology, selected.' },
          { title: 'Project design (PDD)', body: 'The design document and a conservative baseline.' },
          { title: 'Validation (VVB)', body: 'An independent, accredited body validates the design.' },
          { title: 'Registration', body: 'The project is registered on the standard’s registry.' },
        ],
      },
      {
        n: '3',
        title: 'Deliver & verify',
        steps: [
          { title: 'Monitoring & reporting', body: 'Performance tracked with on-site and satellite MRV.' },
          { title: 'Verification', body: 'An independent verifier confirms the reductions or removals.' },
          { title: 'Issuance', body: 'Verified credits are issued on the registry.' },
        ],
      },
      {
        n: '4',
        title: 'Supply & share',
        steps: [
          { title: 'Trading & revenue', body: 'Credits reach buyers, and revenue is shared: we earn only when communities earn.' },
        ],
      },
    ],
    proof:
      'India is fast becoming a serious origination base for exactly this work: as of August 2025 there were around 49 carbon-removal projects in India (34 technical, 15 nature-based), with roughly 214,000 verified credits issued and ~114,000 under offtake (AlliedOffsets, 2025). Indian developers collectively transacted about 360,000 tonnes of durable removals in 2024, mostly bought by international buyers (CEEW / S&P Global Commodity Insights, 2025).',
    photo: 'river-delta',
    photoAlt: 'A braided river delta fanning out across a floodplain',
  },

  standards: {
    eyebrow: 'Standards & frameworks we screen against',
    headline: 'What the registries certify, and what our screening tests.',
    // Deliberately worded as "credits we supply are issued under" and "our
    // screening maps to" — not as membership or accreditation. Nothing here
    // claims a relationship with a body. Accreditations, if and when held,
    // belong in their own block with the certificate number.
    registriesNote:
      'Credits we source and supply are issued under these standards. We screen the project’s registry record in each case.',
    registries: ['Verra (VCS)', 'Gold Standard', 'Puro.earth', 'Isometric', 'Global Carbon Council (GCC)', 'Plan Vivo', 'ACR', 'Climate Action Reserve'],
    frameworksNote:
      'The integrity frameworks The Five Checks are written against. We apply their tests to every credit; we do not claim endorsement by them.',
    frameworks: [
      { name: 'ICVCM — Core Carbon Principles', how: 'Additionality, permanence and quantification tested against the CCP assessment framework.' },
      { name: 'VCMI Claims Code', how: 'How a buyer may describe a retirement, applied to the claim we help you make.' },
      { name: 'CORSIA', how: 'Eligibility screening where an aviation-sector buyer needs it.' },
    ],
  },

  close: {
    headline: 'Tell us what you need.',
    body:
      'Spot, portfolio or offtake — a senior specialist will match you to carbon you can stand behind. A reply within one business day.',
    photo: 'forest-water',
    photoAlt: 'Aerial view of forest meeting open water',
  },
};

export const eac = {
  id: 'eac',
  path: '/energy-attribute-certificates.html',
  title: 'Cut your Scope 2 — credibly',
  metaTitle: 'Energy Attribute Certificates & I-RECs for Scope 2 | OffsetEase',
  shortTitle: 'Certificates',
  description:
    'I-RECs and other Energy Attribute Certificates — verified, correctly matched and defensible under the GHG Protocol. Cut market-based Scope 2, back RE100 and strengthen your CDP score.',
  preloadPhoto: 'wind-turbines',
  service: { name: 'Energy Attribute Certificate sourcing', type: 'I-REC and EAC procurement' },

  hero: {
    eyebrow: 'Energy Attribute Certificates',
    headline: 'Cut your Scope 2 — credibly.',
    accent: ['credibly.'],
    standfirst:
      'We source and supply Energy Attribute Certificates — I-RECs and beyond — verified, correctly matched, and defensible under the GHG Protocol. The credible way to cut your market-based Scope 2, back an RE100 commitment, and strengthen your CDP score.',
    photo: 'wind-turbines',
    photoAlt: 'Wind turbines silhouetted at sunset',
  },

  deliver: {
    eyebrow: 'What we deliver',
    headline: 'Four things, done properly.',
    items: [
      { n: '01', title: 'Sourcing', body: 'I-RECs and other EACs across global markets, matched to the right region and reporting period.' },
      { n: '02', title: 'Verification', body: 'Real, additional, correctly retired attributes — with clean documentation your auditors accept.' },
      { n: '03', title: 'Matching', body: 'Certificates aligned to your consumption, market and reporting boundary.' },
      { n: '04', title: 'Procurement advisory', body: 'PPAs and longer-term renewable procurement where they make sense for cost and claim.' },
    ],
    proof:
      'This market is large and accelerating: the global REC/EAC market was roughly US$28–30bn in 2025, forecast toward US$45–66bn by 2030–2034, with the voluntary segment growing fastest at around 18% CAGR (Grand View Research; Fortune Business Insights, 2026). I-REC issuance more than tripled over three years — about 188 million certificates (188 TWh) were issued in the first half of 2024, up 17% year on year, with redemptions up 58% (GreenPowerHub, 2024).',
    proofFigure: { value: '188 TWh', label: 'of I-RECs issued in H1 2024, up 17% year on year' },
  },

  how: {
    eyebrow: 'How EACs work',
    headline: 'One certificate, one megawatt-hour, one claim.',
    body: [
      'An Energy Attribute Certificate represents one megawatt-hour of electricity generated from a renewable source. Retire it against your consumption, and you can claim that clean energy in your market-based Scope 2.',
      'I-RECs are the international standard used across most markets, alongside instruments like RECs and Guarantees of Origin.',
    ],
    tests: [
      { title: 'Real and additional', body: 'The generation actually happened, and the attribute is not double-issued.' },
      { title: 'Correctly matched', body: 'The right market, the right reporting period, the right boundary.' },
      { title: 'Transparently retired', body: 'Retirement recorded on a registry your auditors can check.' },
      { title: 'Claimed once', body: 'No double counting — the attribute is used by you and nobody else.' },
    ],
    testsClose:
      'Get those right and the reduction holds; get them wrong and it invites challenge.',
    proof:
      'Quality is now the dividing line here too: RE100 counts 440+ member companies committed to 100% renewable electricity, together consuming over 570 TWh a year — more than South Korea’s total consumption — and its 2025 rules add a 15-year facility-age limit that rewards correctly matched, higher-quality attributes (Climate Group / CDP, 2025). 28% of RE100 members reached CDP’s 2024 A-list.',
    proofFigure: { value: '440+', label: 'RE100 members, consuming over 570 TWh a year' },
    photo: 'solar-farm',
    photoAlt: 'Aerial view of a solar farm laid out in rows',
  },

  faqs: [
    { q: 'What is an EAC?', a: 'An Energy Attribute Certificate proves one MWh of renewable generation. I-REC is the international standard type, alongside RECs and Guarantees of Origin.' },
    { q: 'Do EACs actually reduce our footprint?', a: 'They reduce your market-based Scope 2 when correctly sourced, matched and retired.' },
    { q: 'Location-based vs market-based Scope 2?', a: 'Location reflects your local grid; market reflects what you contract for, including EACs.' },
    { q: 'Are I-RECs credible?', a: 'Yes — when additional, correctly matched and transparently retired, which is exactly what we ensure. Poor or mismatched certificates invite challenge.' },
    { q: 'Do they count for RE100 and CDP?', a: 'Yes — high-quality EACs substantiate RE100 renewable-electricity claims and strengthen CDP disclosure (GreenPowerHub, 2024).' },
  ],

  close: {
    headline: 'Cut your Scope 2 — credibly.',
    body: 'Tell us your consumption and markets, and we’ll match you to verified attributes that hold up.',
    photo: 'wind-fog',
    photoAlt: 'A wind turbine standing in heavy fog',
  },
};

export const esg = {
  id: 'esg',
  path: '/esg-sustainability.html',
  title: 'ESG that creates value, not just reports',
  metaTitle: 'ESG & Sustainability Consulting — 18 Services | OffsetEase',
  shortTitle: 'ESG & sustainability',
  description:
    'GHG accounting, BRSR, CSRD, IFRS S1/S2, EcoVadis, CDP, CBAM, EUDR, ISCC, SBTi and net-zero pathways — eighteen in-depth services that turn ESG data into business insight.',
  preloadPhoto: 'industrial-plant',

  hero: {
    eyebrow: 'ESG & sustainability',
    headline: 'ESG that creates value, not just reports.',
    accent: ['value,'],
    standfirst:
      'ESG is more than a report, a score or a compliance exercise. We turn your ESG data into business insight — built into strategy, operations, customer conversations and investor communications, so it creates value from every direction.',
    photo: 'industrial-plant',
    photoAlt: 'An industrial plant seen against a pale sky',
  },

  overview: {
    eyebrow: 'What we do',
    headline: 'Five disciplines. Eighteen in-depth services.',
    proof:
      'Disclosure is consolidating on the IFRS baseline, now adopted across 28 jurisdictions (as of April 2026) and moving toward jurisdictions representing over 60% of global GDP (S&P Global; ISSB, 2026). In India, BRSR Core assurance extends to the top 1,000 listed companies from FY 2026-27 (SEBI, 2026). Even where the EU narrowed CSRD, buyer and investor demand for the data has not fallen.',
    proofFigure: { value: '60%+', label: 'of global GDP moving to the IFRS baseline' },
  },

  close: {
    headline: 'Start with the data, not the report.',
    body:
      'Tell us which framework is bearing down on you and we’ll map the shortest defensible route through it. A senior specialist replies within one business day.',
    photo: 'eroded-terrain',
    photoAlt: 'Eroded terrain traced by sediment channels, seen from above',
  },
};

export const about = {
  id: 'about',
  path: '/about.html',
  title: 'One trusted partner, across carbon and sustainability',
  metaTitle: 'About OffsetEase — How We Work',
  shortTitle: 'About',
  description:
    'OffsetEase originates and supplies high-integrity carbon screened against The Five Checks, and turns ESG data into defensible disclosure. Senior specialists, rooted in India.',
  preloadPhoto: 'river-delta',

  hero: {
    eyebrow: 'About',
    headline: 'One trusted partner, across carbon and sustainability.',
    accent: ['partner,'],
    standfirst:
      'We help companies act on climate with confidence. On one side, we originate and supply high-quality carbon, screened against The Five Checks. On the other, we turn ESG data into business insight and defensible disclosure. One partner, one standard of integrity, across both.',
    photo: 'river-delta',
    photoAlt: 'A braided river delta fanning out across a floodplain',
  },

  team: {
    eyebrow: 'Our team & expertise',
    headline: 'Every mandate is run by experienced people, not junior teams.',
    body:
      'OffsetEase is led by senior specialists across carbon project development, carbon markets, MRV, ESG and sustainability finance. Every mandate is run by experienced people, not junior teams — from originating a project on the ground to preparing a disclosure your auditors will accept.',
    intro: 'Our expertise spans:',
    items: [
      { title: 'Carbon origination & development', body: 'Projects designed, validated and registered under global standards.' },
      { title: 'Carbon markets & supply', body: 'Sourcing, screening and delivering high-integrity credits.' },
      { title: 'MRV & data', body: 'On-site and satellite monitoring, verification-ready.' },
      { title: 'ESG & disclosure', body: 'GHG accounting through to BRSR, CSRD and IFRS.' },
      { title: 'Finance & strategy', body: 'Carbon finance, offtake structuring and net-zero pathways.' },
    ],
    // The approved copy carries a placeholder: "[ Leadership: name · role · one-line
    // credential — to add ]". Nothing is invented here; the section is emitted only
    // once real people are supplied.
    leadership: [],
  },

  stand: {
    eyebrow: 'What we stand for',
    headline: 'Integrity over volume. Real impact over optics.',
    items: [
      { title: 'Integrity over volume', body: 'We would rather supply less carbon than supply carbon we could not defend.' },
      { title: 'Real impact over optics', body: 'The number on the certificate matters less than what happened on the ground.' },
      { title: 'Full transparency, always', body: 'You see the project, the registry entry and the retirement.' },
      { title: 'One partner, one standard', body: 'The same bar applies across carbon and sustainability.' },
    ],
    proof:
      'We built for the market that’s arriving, not the one that’s leaving: high-integrity credits now command clear premiums (up to 400% for CCP-aligned credits), while low-quality supply loses demand (Fiegenbaum Solutions; MSCI, 2025-26), and 51% of Fortune Global 500 companies hold net-zero targets (Terrapass / SBTi, 2026).',
  },

  where: {
    eyebrow: 'Where we work',
    headline: 'Rooted in India. Serving global markets.',
    body:
      'Rooted in India, developing projects on the ground, and serving companies across India and global markets.',
    proof:
      'India is emerging as a serious origination base — around 49 carbon-removal projects were active as of August 2025, with roughly 214,000 verified credits issued (AlliedOffsets, 2025) — while Asia-Pacific is increasingly described as the centre of gravity of the voluntary carbon market (carboncredits.com, 2025).',
    // India-wide market context, not OffsetEase figures. Rendered in the market
    // component with the source on the same line, at readable size.
    marketStats: [
      { value: '49', label: 'carbon-removal projects active in India', source: 'AlliedOffsets, August 2025' },
      { value: '214,000', label: 'verified credits issued across India', source: 'AlliedOffsets, August 2025' },
      { value: '114,000', label: 'Indian credits under offtake', source: 'AlliedOffsets, August 2025' },
    ],
    photo: 'farmland-sunrise',
    photoAlt: 'Farmland catching the first light of sunrise',
  },

  close: {
    headline: 'Let’s build something that lasts.',
    body:
      'Carbon or sustainability, a first project or a long-term partnership — start with a conversation. A senior specialist replies within one business day.',
    photo: 'lone-tree',
    photoAlt: 'A single mature tree standing in open land',
  },
};

export const contact = {
  id: 'contact',
  path: '/contact.html',
  title: 'Let’s discuss your carbon & sustainability goals',
  metaTitle: 'Contact OffsetEase',
  shortTitle: 'Contact',
  description:
    'Every engagement begins with a senior advisor and a confidential conversation. Email info@offsetease.com, call +91 88661 42748, or send an enquiry — we reply within one business day.',
  preloadPhoto: 'wind-fog',

  hero: {
    eyebrow: 'Contact',
    headline: 'Let’s discuss your carbon & sustainability goals.',
    accent: ['goals.'],
    standfirst:
      'Every engagement begins with a senior advisor and a confidential conversation to understand what you need — no scripts, no hard sell. We reply within one business day.',
    photo: 'wind-fog',
    photoAlt: 'A wind turbine standing in heavy fog',
    // Never /contact.html — on this page the prominent CTA must move the
    // visitor down to the form, not reload the page away from it.
    primary: { label: 'Send an enquiry', href: '#enquiry' },
    secondary: { label: 'Email us instead', href: 'mailto:info@offsetease.com' },
  },

  topics: [
    'Carbon supply',
    'Carbon projects',
    'Energy Attribute Certificates',
    'ESG & sustainability',
    'Not sure yet',
  ],

  assurance: 'Confidential from the first exchange.',
};

export const sources = {
  id: 'sources',
  path: '/sources.html',
  title: 'Sources & data',
  metaTitle: 'Sources & Data (2024–2026) | OffsetEase',
  shortTitle: 'Sources & data',
  description:
    'Every market figure on this site, with its named source and date. Compiled September 2026 and refreshed quarterly.',
  intro:
    'Every proof point on this site is drawn from the named, dated sources below, each linked to the original. Verify against the primary source before relying on a figure, and note the review date — these numbers move.',
  items: [
    { n: 1, name: 'MSCI Carbon Markets — 2025 Year in Review', detail: 'Price divergence, retirement value, offtake premium.', via: 'regreener.earth/blog/voluntary-carbon-market-update; centerforsustainablefinance.com' , url: 'https://www.centerforsustainablefinance.com/keep-updated/carbon-markets-2025-review' },
    { n: 2, name: 'Calyx Global & ClearBlue Markets — “The State of Quality and Pricing in the VCM: 2026”', detail: 'Integrity price gap ~50%.', via: 'carbonherald.com' , url: 'https://carbonherald.com/' },
    { n: 3, name: 'Fiegenbaum Solutions (2026)', detail: 'CCP premium up to 400%.', via: 'fiegenbaum.solutions' , url: 'https://fiegenbaum.solutions/en/blog/voluntary-vs-regulated-carbon-markets-risks-verification-price-differences' },
    { n: 4, name: 'South Pole — 2026 Carbon Market Buyer’s Guide', detail: 'Integrity as baseline.', via: 'southpole.com' , url: 'https://www.southpole.com/blog/2026-carbon-market-buyers-guide-what-you-need-to-know' },
    { n: 5, name: 'Center for Sustainable Finance (2026)', detail: 'Record ~US$16bn corporate commitments, ~182Mt retirements.', via: 'centerforsustainablefinance.com' , url: 'https://www.centerforsustainablefinance.com/' },
    { n: 6, name: 'carboncredits.com (December 2025)', detail: '>US$10bn to new credit generation H1 2025 (~3× 2024); Asia-Pacific centre of gravity.', via: 'carboncredits.com' , url: 'https://carboncredits.com/' },
    { n: 7, name: 'green.earth (December 2025)', detail: 'ARR spot ~$24/t by September 2025.', via: 'green.earth' , url: 'https://www.green.earth/news/quality-takes-the-lead-a-year-end-look-at-the-voluntary-carbon-market' },
    { n: 8, name: 'Grand View Research (2026)', detail: 'VCM and REC market size; nature-based and engineered removals dominate the premium segment.', via: 'grandviewresearch.com' , url: 'https://www.grandviewresearch.com/' },
    { n: 9, name: 'CDR.fyi (2025)', detail: 'Biochar ~86% of durable CDR deliveries in 2024.', via: 'cdr.fyi' , url: 'https://www.cdr.fyi/blog/biochar-carbon-removal-market-snapshot-2025' },
    { n: 10, name: 'Puro.earth (2026)', detail: '408,000+ biochar CORCs by June 2025; ~43% of durable removal volumes.', via: 'puro.earth/insights' , url: 'https://puro.earth/insights' },
    { n: 11, name: 'Planet2050 (2025)', detail: 'Biochar $125–145/t; >90% of industrial supply contracted by late 2025.', via: 'planet2050.earth' , url: 'https://www.planet2050.earth/blog/cdr-spotlight-biochar' },
    { n: 12, name: 'AlliedOffsets (2025)', detail: 'India ~49 CDR projects, ~214,000 credits issued, ~114,000 under offtake.', via: 'blog.alliedoffsets.com' , url: 'https://blog.alliedoffsets.com/indias-carbon-removal-market-projects-buyers-and-whats-next' },
    { n: 13, name: 'CEEW / S&P Global Commodity Insights (2025–26)', detail: 'Indian developers transacted ~360,000t durable CDR in 2024.', via: 'ceew.in/publications' , url: 'https://www.ceew.in/publications' },
    { n: 14, name: 'GreenPowerHub (2024)', detail: 'I-REC issuance 188M certificates H1 2024 (+17%); redemptions +58%.', via: 'greenpowerhub.com' , url: 'https://www.greenpowerhub.com/news/sourcing-re-scope2' },
    { n: 15, name: 'Fortune Business Insights / MarketsandMarkets (2026)', detail: 'REC/EAC market size and CAGR.', via: 'fortunebusinessinsights.com; marketsandmarkets.com' , url: 'https://www.fortunebusinessinsights.com/' },
    { n: 16, name: 'Climate Group / CDP — RE100', detail: '440+ members, 570+ TWh, 15-year facility-age limit, 28% on the CDP A-list.', via: 'nossadata.com/blog/re100-cdp' , url: 'https://www.nossadata.com/blog/re100-cdp' },
    { n: 17, name: 'CDP & Boston Consulting Group', detail: 'Supply-chain Scope 3 ~26× operational emissions.', via: 'cdp.net' , url: 'https://www.cdp.net/en/press-releases' },
    { n: 18, name: 'CDP — Scores and A Lists 2025', detail: '22,100+ companies disclosed, more than half of global market capitalisation.', via: 'cdp.net/en/data/scores' , url: 'https://www.cdp.net/en/data/scores' },
    { n: 19, name: 'European Commission — CBAM definitive regime & 50-tonne threshold', detail: '~90% of importers exempt while ~99% of embedded emissions stay covered.', via: 'taxation-customs.ec.europa.eu' , url: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/cbam-definitive-regime_en' },
    { n: 20, name: 'Gerlach Customs / Coolset (2026)', detail: 'CBAM €75.36/t Q1 2026, €100/t penalty, declaration due 30 September 2027.', via: 'gerlach-customs.com; coolset.com' , url: 'https://www.coolset.com/' },
    { n: 21, name: 'Directive (EU) 2026/470 (Omnibus I)', detail: 'CSRD thresholds >1,000 employees and >€450m; ~85% fewer companies in scope; FY2027 start; assurance retained.', via: 'mofo.com; nortonrosefulbright.com; accountancyeurope.eu' , url: 'https://www.mofo.com/' },
    { n: 22, name: 'SEBI BRSR / BRSR Core circulars', detail: 'Glide path to the top 1,000 by FY 2026-27; value-chain disclosure now voluntary.', via: 'perspectives.se.com; onestopesg.com' , url: 'https://www.onestopesg.com/' },
    { n: 23, name: 'S&P Global / ESGsource / ISSB (2026)', detail: 'IFRS S1/S2 adopted in 28 jurisdictions (April 2026); 30+ moving to adopt; >60% of global GDP.', via: 'spglobal.com/sustainable1; esgsource.com' , url: 'https://www.esgsource.com/page/issb-adoption-tracker-2026' },
    { n: 24, name: 'SBTi — Corporate Net-Zero Standard V2', detail: '11,000+ organisations; 51% of Fortune Global 500 with net-zero targets; V2 mandatory 2028; removals from 2035; net-zero pledges cover 92% of GDP.', via: 'terrapass.com; icor.cloud' , url: 'https://www.terrapass.com/' },
    { n: 25, name: 'EcoVadis methodology (2025-26)', detail: 'Percentile medals (Platinum 1% / Gold 5% / Silver 15% / Bronze 35%); a theme below 30 disqualifies; weights 25/40/35.', via: 'getsunhat.com; yourcarbonsteps.com' , url: 'https://www.getsunhat.com/' },
    { n: 26, name: 'Regulation (EU) 2025/2650 (EUDR)', detail: 'Large/medium operators from 30 December 2026; micro/small from 30 June 2027; seven commodities.', via: 'European Commission Access2Markets; psqr.eu' , url: 'https://trade.ec.europa.eu/access-to-markets/' },
  ],
};


export const projects = {
  id: 'projects',
  path: '/carbon-projects.html',
  title: 'We develop carbon projects at the source',
  metaTitle: 'Carbon Project Development — Origination to Issuance | OffsetEase',
  shortTitle: 'Carbon projects',
  description:
    'End-to-end carbon project development: origination, feasibility, financing, PDD, validation, registration, MRV and issuance — with revenue shared with the communities who create it.',
  preloadPhoto: 'tree-nursery',
  service: { name: 'Carbon project development', type: 'Carbon project origination and development' },

  hero: {
    eyebrow: 'Carbon projects',
    headline: 'We develop carbon projects at the source.',
    accent: ['source.'],
    standfirst:
      'Nature-based and durable removal projects taken end to end — identified, financed, designed, validated, registered, monitored and verified. The credits trace back to the ground, and the value flows back to the communities who created them.',
    photo: 'tree-nursery',
    photoAlt: 'Rows of young trees in a nursery',
    primary: { label: 'Discuss a project', href: '/contact.html' },
    secondary: { label: 'Buy from our projects', href: '/carbon-supply.html' },
  },

  why: {
    eyebrow: 'Why we develop, and do not only trade',
    headline: 'Screening alone cannot create the supply that passes.',
    body: [
      'The half of the market that holds up is scarce. A buyer who only screens what already exists is competing for a shrinking pool against everyone else who screens well.',
      'Developing at the source is how we keep supplying carbon that passes The Five Checks — and it is the only way the revenue reaches the people doing the work on the ground.',
    ],
  },

  close: {
    headline: 'Bring us a landscape, or a tonne you need in 2030.',
    body:
      'We originate where carbon finance creates real impact, and we structure offtake early so the project is funded from the start. A senior specialist replies within one business day.',
    photo: 'farmland-sunrise',
    photoAlt: 'Farmland catching the first light of sunrise',
  },
};

export const privacy = {
  id: 'privacy',
  path: '/privacy.html',
  title: 'Privacy policy',
  metaTitle: 'Privacy Policy | OffsetEase',
  shortTitle: 'Privacy policy',
  description:
    'What OffsetEase collects through this website, why, who processes it, how long it is kept, and how to have it deleted.',
  updated: 'September 2026',
  intro:
    'This policy covers this website only. It is written to be read, not to be survived. If anything here is unclear, email us and ask.',
  sections: [
    {
      title: 'What this site collects',
      body: [
        'Nothing, unless you send us an enquiry. This site sets **no cookies**, runs **no analytics**, embeds **no tracking pixels** and loads **no third-party scripts**. Fonts and images are served from this domain, so no external service is told that you visited.',
        'If you submit the enquiry form we receive the **name, work email address and company** you type, the **topic** you select, and your **message** if you write one. That is the whole of it.',
      ],
    },
    {
      title: 'Why we hold it, and on what basis',
      body: [
        'Solely to reply to your enquiry and to carry on the conversation you started. We do not add you to a mailing list, we do not profile you, and we do not sell, rent or share your details with anyone for their own purposes.',
        'The lawful basis is your consent, which you give by ticking the consent box and submitting the form. You can withdraw it at any time.',
      ],
    },
    {
      title: 'Who else touches it',
      body: [
        'The enquiry form is delivered by **Web3Forms**, a third-party form-delivery service acting as our processor. Your submission passes through their infrastructure on its way to our inbox. Their privacy terms are at [web3forms.com/privacy](https://web3forms.com/privacy).',
        'Our email is hosted by our mail provider. Beyond that, enquiry data stays with us.',
      ],
    },
    {
      title: 'How long we keep it',
      body: [
        'Enquiries that do not become an engagement are deleted within **24 months**. Where an enquiry becomes a client engagement, the records are kept for as long as the engagement runs and then for the period our statutory and tax obligations require.',
      ],
    },
    {
      title: 'Your rights',
      body: [
        'You can ask us for a copy of what we hold about you, ask us to correct it, ask us to delete it, or withdraw your consent — by emailing **info@offsetease.com**. We will act within 30 days.',
        'If you are in the EU or the UK and you are not satisfied with how we have handled a request, you may complain to your national data protection authority.',
      ],
    },
    {
      title: 'Changes',
      body: [
        'If this policy changes materially we will update the date at the top. This version is current as of the date shown.',
      ],
    },
  ],
  // Named so nobody mistakes a drafted policy for a reviewed one.
  notice:
    'This policy describes how this website actually behaves, and was drafted alongside the build. It has not been reviewed by a lawyer, and it does not yet name the registered entity or its address — supply those and they will be added here and to the footer.',
};

export const terms = {
  id: 'terms',
  path: '/terms.html',
  title: 'Terms of use',
  metaTitle: 'Terms of Use | OffsetEase',
  shortTitle: 'Terms of use',
  description:
    'The terms on which this website is provided: what the content is and is not, how figures are sourced, and the limits of what a website can promise.',
  updated: 'September 2026',
  intro:
    'These terms govern your use of this website. They do not govern any engagement with OffsetEase — that is set out in a signed agreement.',
  sections: [
    {
      title: 'What this site is',
      body: [
        'A description of services. Nothing on this website is an offer, a quotation, a price, or a commitment to supply. Availability, volumes, vintages and prices are agreed in writing, engagement by engagement.',
      ],
    },
    {
      title: 'Not advice',
      body: [
        'The material here is general information about carbon markets, disclosure regimes and sustainability regulation. It is **not legal, tax, accounting, investment or compliance advice**, and it is not a substitute for it. Regulatory positions turn on facts we do not know about you. Take advice before you act.',
      ],
    },
    {
      title: 'Market figures',
      body: [
        'Every market statistic on this site is attributed to a named, dated third-party source on the [Sources & data](/sources.html) page and was accurate as published. These markets move quickly. We refresh the figures periodically and show the review date in the footer, but we do not warrant that any figure is current at the moment you read it. Verify against the primary source before you rely on one.',
        'Figures identified as OffsetEase programme data are ours. Figures shown in the market component are third parties’ and are labelled with their source.',
      ],
    },
    {
      title: 'Third-party links',
      body: [
        'We link to registries, regulators, standards bodies and research publishers so you can check our work. We do not control those sites and are not responsible for their content.',
      ],
    },
    {
      title: 'Intellectual property',
      body: [
        'The text, design, diagrams and code of this website belong to OffsetEase, except the photography, which is licensed from Unsplash, and the typefaces, which are used under the SIL Open Font License. Credits are listed in the repository’s CREDITS file.',
      ],
    },
    {
      title: 'Liability',
      body: [
        'We take care to keep this site accurate, but to the extent the law allows we exclude liability for loss arising from reliance on it. Nothing here limits liability that cannot lawfully be limited.',
      ],
    },
  ],
  notice:
    'These terms were drafted alongside the build and have not been reviewed by a lawyer. The governing-law clause and the registered entity name are deliberately absent until you supply them.',
};
