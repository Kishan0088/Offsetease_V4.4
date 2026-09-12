/* Site architecture. One source of truth for the header, the footer,
   the sitemap and the breadcrumb trails. */

export const U = {
  home: 'index.html',
  markets: 'environmental-markets.html',
  source: 'the-source-standard.html',
  cpd: 'carbon-project-development.html',
  nature: 'nature-based-carbon.html',
  durable: 'durable-removals.html',
  offtake: 'carbon-supply-offtake.html',
  irec: 'renewable-attributes-i-rec.html',
  esg: 'esg-sustainability.html',
  ghg: 'ghg-accounting.html',
  pcf: 'product-carbon-footprint.html',
  lca: 'life-cycle-assessment.html',
  epd: 'environmental-product-declaration.html',
  csr: 'csr-strategy.html',
  dma: 'double-materiality-assessment.html',
  risk: 'climate-risk-tcfd.html',
  supplier: 'supplier-esg-assessment.html',
  reporting: 'sustainability-reporting.html',
  ecovadis: 'ecovadis-rating.html',
  cdp: 'cdp-reporting.html',
  cbam: 'cbam-compliance.html',
  eudr: 'eudr-compliance.html',
  iscc: 'iscc-certification.html',
  sbti: 'sbti-target-setting.html',
  netzero: 'net-zero-decarbonization.html',
  industries: 'industries.html',
  insights: 'insights.html',
  about: 'about.html',
  contact: 'contact.html',
  faq: 'faq.html'
};

export const nav = [
  {
    label: 'Environmental markets',
    href: U.markets,
    width: '60rem',
    feature: {
      title: 'The Source Standard',
      body: 'Our integrity method: a four-dimension screen applied at origin, before an asset can carry our name.',
      href: U.source
    },
    columns: [
      {
        title: 'The work',
        items: [
          { label: 'Environmental markets', href: U.markets, note: 'Overview' },
          { label: 'The Source Standard', href: U.source, note: 'Our integrity method' },
          { label: 'Carbon supply & offtake', href: U.offtake, note: 'Secure scarce supply' },
          { label: 'Renewable attributes', href: U.irec, note: 'I-RECs and EACs' }
        ]
      },
      {
        title: 'Project development',
        items: [
          { label: 'Carbon project development', href: U.cpd, note: 'Feasibility to issuance' },
          { label: 'Nature-based projects', href: U.nature, note: 'ARR, REDD+, soil, blue carbon' },
          { label: 'Durable removals', href: U.durable, note: 'Biochar, enhanced weathering' }
        ]
      }
    ]
  },
  {
    label: 'ESG & sustainability',
    href: U.esg,
    width: '70rem',
    columns: [
      {
        title: 'Measurement',
        items: [
          { label: 'GHG accounting', href: U.ghg },
          { label: 'Product carbon footprint', href: U.pcf },
          { label: 'Life cycle assessment', href: U.lca },
          { label: 'Environmental product declaration', href: U.epd }
        ]
      },
      {
        title: 'Strategy & risk',
        items: [
          { label: 'CSR strategy', href: U.csr },
          { label: 'Double materiality', href: U.dma },
          { label: 'Climate risk & TCFD', href: U.risk },
          { label: 'Supplier & value-chain ESG', href: U.supplier }
        ]
      },
      {
        title: 'Ratings & compliance',
        items: [
          { label: 'Sustainability reporting', href: U.reporting },
          { label: 'EcoVadis', href: U.ecovadis },
          { label: 'CDP', href: U.cdp },
          { label: 'CBAM', href: U.cbam },
          { label: 'EUDR', href: U.eudr },
          { label: 'ISCC', href: U.iscc }
        ]
      },
      {
        title: 'Targets & reduction',
        items: [
          { label: 'SBTi target setting', href: U.sbti },
          { label: 'Net zero & decarbonization', href: U.netzero }
        ]
      }
    ]
  },
  { label: 'Industries', href: U.industries },
  { label: 'Insights', href: U.insights },
  { label: 'About', href: U.about }
];

export const footerNav = [
  {
    title: 'Environmental markets',
    items: [
      { label: 'Overview', href: U.markets },
      { label: 'The Source Standard', href: U.source },
      { label: 'Carbon project development', href: U.cpd },
      { label: 'Nature-based projects', href: U.nature },
      { label: 'Durable removals', href: U.durable },
      { label: 'Carbon supply & offtake', href: U.offtake },
      { label: 'Renewable attributes', href: U.irec }
    ]
  },
  {
    title: 'ESG & sustainability',
    items: [
      { label: 'Overview', href: U.esg },
      { label: 'GHG accounting', href: U.ghg },
      { label: 'Product carbon footprint', href: U.pcf },
      { label: 'Life cycle assessment', href: U.lca },
      { label: 'Environmental product declaration', href: U.epd },
      { label: 'CSR strategy', href: U.csr },
      { label: 'Double materiality', href: U.dma },
      { label: 'Climate risk & TCFD', href: U.risk }
    ]
  },
  {
    title: 'Compliance & targets',
    items: [
      { label: 'Supplier & value-chain ESG', href: U.supplier },
      { label: 'Sustainability reporting', href: U.reporting },
      { label: 'EcoVadis', href: U.ecovadis },
      { label: 'CDP', href: U.cdp },
      { label: 'CBAM', href: U.cbam },
      { label: 'EUDR', href: U.eudr },
      { label: 'ISCC', href: U.iscc },
      { label: 'SBTi target setting', href: U.sbti },
      { label: 'Net zero & decarbonization', href: U.netzero }
    ]
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: U.about },
      { label: 'Industries', href: U.industries },
      { label: 'Insights', href: U.insights },
      { label: 'FAQ', href: U.faq },
      { label: 'Contact', href: U.contact }
    ]
  }
];

/* Pretty URL for a file: index.html -> /, foo.html -> /foo */
export const clean = (file) => file === 'index.html' ? '/' : '/' + file.replace(/\.html$/, '');
