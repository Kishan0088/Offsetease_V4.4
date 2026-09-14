// Single source of truth for everything that is not page copy.
// Changing a value here changes it everywhere the build emits it.

export const site = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: 'Offsetease',            // prose spelling, used in sentences
  wordmark: 'OFFSETEASE',        // display spelling, used in the lockup / eyebrows
  legalName: 'Offsetease',
  tagline: 'A Leading Developer of High-Integrity Carbon Projects',
  description:
    'Offsetease sources, screens and supplies high-integrity carbon, develops projects ' +
    'at the source, and turns ESG data into defensible disclosure. One partner, one ' +
    'standard of integrity, across carbon and sustainability.',

  // ── Deployment ────────────────────────────────────────────────────────────
  // This build publishes to GitHub Pages under a repository sub-path.
  // `basePath` is prefixed to every internal URL the build emits.
  origin: 'https://kishan0088.github.io',
  basePath: '/Offsetease_V4.4',

  // PREVIEW MODE. The live site at offsetease.com is untouched and must keep its
  // search ranking, so this preview ships `noindex` + a disallow-all robots.txt.
  // Flip `indexable` to true (and point origin/basePath at the production domain)
  // the day this build replaces the live site.
  indexable: false,
  productionOrigin: 'https://offsetease.com',

  // ── Contact ───────────────────────────────────────────────────────────────
  email: 'info@offsetease.com',
  phone: '+91 88661 42748',
  phoneHref: '+918866142748',
  linkedin: 'https://www.linkedin.com/company/offsetease',
  location: 'India',
  locationLong: 'Based in India · serving India and global markets',
  responsePromise: 'A senior specialist replies within one business day.',

  // ── Enquiry form ──────────────────────────────────────────────────────────
  // Web3Forms: create a free access key at https://web3forms.com and paste it
  // here. Until then the form refuses to submit and tells the visitor to email
  // instead, rather than silently swallowing an enquiry.
  form: {
    provider: 'web3forms',
    endpoint: 'https://api.web3forms.com/submit',
    accessKey: '', // ← paste your Web3Forms access key
    subject: 'New enquiry from offsetease.com',
  },

  // ── Brand ─────────────────────────────────────────────────────────────────
  colors: {
    ink: '#041A1E',
    deep: '#0A3D44',
    teal: '#0F5B64',
    bone: '#F5F3EE',
    gold: '#C8A16A',
    goldLift: '#E0C79B',
    mist: '#7FB6BC',
    abyss: '#020F11',
  },

  // Data shown in the site chrome. Every figure here is cited on /sources.
  lastReviewed: 'September 2026',
};

// Sections revealed by a nav disclosure. Carbon supply gets one too, so the
// service we most want to sell — project development — is visible from the
// header instead of hiding behind an in-page anchor.
export const megaMenus = {
  supply: [
    {
      title: 'How to buy',
      links: [
        { label: 'Spot supply', href: '/carbon-supply.html#ways' },
        { label: 'Managed portfolio', href: '/carbon-supply.html#ways' },
        { label: 'Offtake & forward purchase', href: '/carbon-supply.html#ways' },
      ],
    },
    {
      title: 'What we supply',
      links: [
        { label: 'Nature-based', href: '/carbon-supply.html#supply-types' },
        { label: 'Durable removals', href: '/carbon-supply.html#supply-types' },
        { label: 'Avoidance & reduction', href: '/carbon-supply.html#supply-types' },
      ],
    },
    {
      title: 'How we develop',
      links: [
        { label: 'Carbon project development', href: '/carbon-supply.html#develop' },
        { label: 'Origination to supply', href: '/carbon-supply.html#pipeline' },
        { label: 'Standards & frameworks', href: '/carbon-supply.html#standards' },
      ],
    },
    {
      title: 'How we screen',
      links: [
        { label: 'The Five Checks', href: '/carbon-supply.html#five-checks' },
        { label: 'Standards & frameworks', href: '/carbon-supply.html#standards' },
      ],
    },
  ],
};

export const nav = [
  { label: 'Carbon Supply', href: '/carbon-supply.html', mega: 'supply' },
  { label: 'Renewable Energy (EACs)', href: '/energy-attribute-certificates.html' },
  // `mega` opens the five ESG discipline groups on desktop, so a visitor
  // looking for CBAM does not have to guess which label hides it.
  { label: 'ESG & Sustainability', href: '/esg-sustainability.html', mega: 'esg' },
];

// The one button in the header. Named here so it is never spelled two ways.
export const primaryCta = { label: 'Contact us', href: '/contact.html' };

export const footerNav = [
  {
    title: 'Carbon',
    links: [
      { label: 'Carbon Supply', href: '/carbon-supply.html' },
      { label: 'The Five Checks', href: '/carbon-supply.html#five-checks' },
      { label: 'Carbon project development', href: '/carbon-supply.html#pipeline' },
      { label: 'Renewable Energy (EACs)', href: '/energy-attribute-certificates.html' },
    ],
  },
  {
    title: 'Measure & report',
    links: [
      { label: 'GHG accounting', href: '/ghg-accounting.html' },
      { label: 'Product carbon footprint', href: '/product-carbon-footprint.html' },
      { label: 'Life cycle assessment', href: '/life-cycle-assessment.html' },
      { label: 'Environmental Product Declaration', href: '/environmental-product-declaration.html' },
      { label: 'BRSR & BRSR Core', href: '/brsr-reporting.html' },
      { label: 'CSRD & ESRS', href: '/csrd-esrs.html' },
      { label: 'IFRS S1 & S2', href: '/ifrs-s1-s2.html' },
      { label: 'Double materiality', href: '/double-materiality-assessment.html' },
    ],
  },
  {
    title: 'Certify & comply',
    links: [
      { label: 'EcoVadis', href: '/ecovadis-rating.html' },
      { label: 'CDP', href: '/cdp-disclosure.html' },
      { label: 'CBAM', href: '/cbam-compliance.html' },
      { label: 'EUDR', href: '/eudr-compliance.html' },
      { label: 'ISCC certification', href: '/iscc-certification.html' },
      { label: 'Supplier & value-chain ESG', href: '/supplier-value-chain-esg.html' },
    ],
  },
  {
    title: 'Target & reduce',
    links: [
      { label: 'SBTi target setting', href: '/sbti-target-setting.html' },
      { label: 'Net zero & decarbonization', href: '/net-zero-decarbonization.html' },
      { label: 'Climate risk & TCFD', href: '/climate-risk-tcfd.html' },
      { label: 'ESG & CSR strategy', href: '/esg-csr-strategy.html' },
    ],
  },
];

// Sits with the brand block, not as a fifth column in a four-column grid.
export const companyNav = [
  { label: 'About', href: '/about.html' },
  { label: 'Insights', href: '/insights.html' },
  { label: 'Contact', href: '/contact.html' },
  { label: 'Sources & data', href: '/sources.html' },
];
