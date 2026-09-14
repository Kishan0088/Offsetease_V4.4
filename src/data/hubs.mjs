// The five ESG hub pages, one per service group.
//
// WHY THESE EXIST
// Eighteen services hung off a single 625-word /esg-sustainability page, so
// there was no page in between the pillar and an individual service — nothing
// that answers "which of these do I actually need?", and nothing for a search
// like "ESG reporting services" to land on. The live site had /services,
// /solutions and /industries hubs; the new build dropped all three.
//
// /esg-reporting also reclaims a URL the live site already publishes, which
// was otherwise being redirected away to the pillar page.
//
// The copy here is recombination, not new claims: each hub's standfirst and
// answer are built from that group's own blurb and the kickers of the services
// inside it. Nothing states a figure, threshold or date.

export const hubs = [
  {
    group: 'measure',
    path: '/esg-measurement.html',
    shortTitle: 'Measure',
    title: 'Measure: the evidence base everything else stands on',
    metaTitle: 'ESG Measurement — GHG, PCF, LCA & EPD Services | Offsetease',
    description:
      'GHG inventories, product carbon footprints, life cycle assessments and Environmental Product Declarations — the measured evidence every target, disclosure and carbon claim is built on.',
    photo: 'dial-gauges',
    photoAlt: 'A bank of analogue pressure gauges on industrial pipework',
    headline: 'Measure it before you claim it.',
    accent: ['Measure'],
    standfirst:
      'Four services that produce the numbers: an organisational inventory, a per-product figure, the full environmental picture behind it, and a verified declaration a buyer will accept.',
    answer:
      'Measurement is the first of five stages of ESG work and the one everything else refers back to. It covers your organisational greenhouse gas inventory, the carbon footprint of an individual product, the wider life cycle assessment underneath it, and the independently verified declaration built on that assessment.',
    intro:
      'A target you cannot evidence is a press release, and a disclosure built on a weak baseline is the first thing an auditor tests. These four services run from the whole organisation down to a single SKU, and they share one data set rather than four — built once, properly, an inventory serves every framework that asks for it.',
    cta: 'Start with the numbers.',
    closeBody:
      'Tell us what you already measure and what you are being asked for, and we will tell you which of these four you actually need.',
  },
  {
    group: 'report',
    path: '/esg-reporting.html',
    shortTitle: 'Report',
    title: 'Report: disclosure your auditors and investors will accept',
    metaTitle: 'ESG Reporting Services — BRSR, CSRD, IFRS S1/S2 | Offsetease',
    description:
      'BRSR and BRSR Core, CSRD and ESRS, IFRS S1 and S2, and the double materiality assessment underneath them — sustainability disclosure built to survive assurance.',
    photo: 'market-screens',
    photoAlt: 'Financial data displayed across trading screens',
    headline: 'Report once. Satisfy several.',
    accent: ['once.'],
    standfirst:
      'India’s BRSR, Europe’s CSRD and the ISSB’s global baseline ask overlapping questions. Answered from one properly structured data set, they stop being four separate projects.',
    answer:
      'Reporting covers the mandatory sustainability disclosures a company files and the materiality work that decides what goes in them: BRSR and BRSR Core in India, CSRD and ESRS in Europe, IFRS S1 and S2 as the global baseline, and the double materiality assessment all of them rest on.',
    intro:
      'Most companies meet these frameworks one at a time, rebuilding the same evidence for each. They overlap heavily by design — BRSR is explicitly aligned to GRI, IFRS S1/S2, TCFD and CDP — so the work that matters is structuring the underlying data once, then mapping it. That is also what makes the numbers survive assurance.',
    cta: 'Get the disclosure right.',
    closeBody:
      'Tell us which frameworks you are in scope for and where your data sits today, and we will map the shortest defensible route through them.',
  },
  {
    group: 'certify',
    path: '/esg-certification.html',
    shortTitle: 'Certify & score',
    title: 'Certify and score: the ratings and rules that gate market access',
    metaTitle: 'EcoVadis, CDP, CBAM, EUDR & ISCC Consulting | Offsetease',
    description:
      'EcoVadis ratings, CDP scores, CBAM and EUDR compliance and ISCC certification — the assessments and regulations that decide whether you can bid, sell or export.',
    photo: 'container-port',
    photoAlt: 'Shipping containers stacked at a freight terminal',
    headline: 'The scores that decide who gets to bid.',
    accent: ['bid.'],
    standfirst:
      'Five services covering the ratings buyers check and the regulations customs enforces — the difference between a market you can sell into and one you cannot.',
    answer:
      'This group covers the external assessments and border regulations that gate commercial access: the EcoVadis rating and CDP score buyers check before awarding work, the CBAM and EUDR obligations that apply at the EU border, and ISCC certification for sustainable materials and fuels.',
    intro:
      'These differ from reporting in one important way: somebody else decides whether you pass. A rating is a rank recalculated against an improving field, a CBAM declaration is a cost driven by the quality of your data, and an EUDR filing either has plot-level geolocation behind it or it does not. All of them reward evidence prepared early over evidence assembled at the deadline.',
    cta: 'Protect your market access.',
    closeBody:
      'Tell us which rating, score or regulation is in front of you and we will tell you what passing it actually takes.',
  },
  {
    group: 'target',
    path: '/net-zero-targets.html',
    shortTitle: 'Target & reduce',
    title: 'Target and reduce: a pathway your CFO will finance',
    metaTitle: 'SBTi Targets & Net Zero Pathways | Offsetease',
    description:
      'Science-based target setting and validation, and costed net-zero and decarbonization pathways — targets grounded in an inventory that holds up.',
    photo: 'wind-turbines',
    photoAlt: 'Wind turbines silhouetted at sunset',
    headline: 'A target is only as good as the plan under it.',
    accent: ['plan'],
    standfirst:
      'Two services: a target validated against what the science requires, and the costed, sequenced pathway that makes it something the business can actually fund.',
    answer:
      'Target setting turns a measured baseline into a commitment, and the pathway turns that commitment into a funded plan. It covers science-based target setting and validation, and the sequenced decarbonization route that cuts emissions across operations and the value chain before neutralising the residual remainder.',
    intro:
      'The failure mode here is a target set for the announcement and a plan assembled afterwards. Validation tests the inventory beneath the target, not the ambition in it, and a pathway nobody has costed does not survive its first budget cycle. Reductions lead and removals finish — which is both the credible order and the financeable one.',
    cta: 'Build a pathway that holds.',
    closeBody:
      'Send us your baseline and your board’s appetite, and we will map a pathway that survives the budget conversation.',
  },
  {
    group: 'strategise',
    path: '/esg-strategy-risk.html',
    shortTitle: 'Strategise & manage risk',
    title: 'Strategise and manage risk: ESG tied to how the business works',
    metaTitle: 'ESG Strategy, Climate Risk & Supplier ESG | Offsetease',
    description:
      'ESG and CSR strategy, climate risk and TCFD assessment, and supplier and value-chain ESG — the work that connects disclosure to decisions.',
    photo: 'valley-dawn',
    photoAlt: 'A wide valley at first light',
    headline: 'Strategy, risk and the chain you depend on.',
    accent: ['risk'],
    standfirst:
      'Three services that turn measured, reported data into decisions: where to invest, what the climate does to your numbers, and how exposed your suppliers leave you.',
    answer:
      'This group covers the decisions ESG data should inform: an ESG and CSR strategy tied to where the business creates value, climate risk quantified in financial terms rather than described qualitatively, and the supplier and value-chain assessment that covers most of your footprint and most of your exposure.',
    intro:
      'Measurement and disclosure answer what happened. These three answer what to do about it. Climate risk expressed as a heat map changes nothing; expressed in financial terms it reaches the board. And because the majority of most footprints and most due-diligence exposure sits in the value chain rather than inside the fence, supplier work is usually where both the risk and the opportunity actually are.',
    cta: 'Turn the data into decisions.',
    closeBody:
      'Tell us what your data is already telling you, and we will help you decide what to do with it.',
  },
];
