// Single source of truth for everything that is not page copy.
// Changing a value here changes it everywhere the build emits it.

export const site = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: 'OffsetEase',            // prose spelling, used in sentences
  wordmark: 'OFFSETEASE',        // display spelling, used in the lockup / eyebrows
  legalName: 'OffsetEase',
  tagline: 'Carbon projects that deliver impact, with confidence.',
  description:
    'OffsetEase sources, screens and supplies high-integrity carbon, develops projects ' +
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

export const nav = [
  { label: 'Carbon supply', href: '/carbon-supply.html' },
  { label: 'Certificates', href: '/energy-attribute-certificates.html' },
  { label: 'ESG & sustainability', href: '/esg-sustainability.html' },
  { label: 'About', href: '/about.html' },
];

export const footerNav = [
  {
    title: 'Carbon',
    links: [
      { label: 'Carbon supply', href: '/carbon-supply.html' },
      { label: 'The Five Checks', href: '/carbon-supply.html#five-checks' },
      { label: 'Origination to supply', href: '/carbon-supply.html#pipeline' },
      { label: 'Energy Attribute Certificates', href: '/energy-attribute-certificates.html' },
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
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about.html' },
      { label: 'Contact', href: '/contact.html' },
      { label: 'Sources & data', href: '/sources.html' },
    ],
  },
];
