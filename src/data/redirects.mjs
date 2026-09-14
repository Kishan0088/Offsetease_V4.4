// Migration map: every URL the live site at offsetease.com publishes today,
// pointed at its home in this build.
//
// Source of truth: https://offsetease.com/sitemap.xml — 54 URLs, read 14 Sep 2026.
// 23 of those paths exist unchanged here and need no rule. The 31 below do.
//
// `rebuild: true` marks a redirect that is a holding measure, not a decision.
// Those live pages have real standalone intent (sector pages, careers,
// leadership, FAQs) and the redirect should be deleted the day the page is
// rebuilt here. Everything else is a permanent rename.

export const redirects = [
  // ── Service pages: renamed slugs, same subject ────────────────────────────
  // Live titles confirm each pairing is a like-for-like rename.
  { from: '/cbam', to: '/cbam-compliance.html' },                       // "CBAM Compliance Consulting for Exporters"
  { from: '/cdp', to: '/cdp-disclosure.html' },                         // "CDP Reporting & Score Improvement Consulting"
  { from: '/climate-risk', to: '/climate-risk-tcfd.html' },             // "Climate Risk & TCFD / IFRS S2 Consulting"
  { from: '/ecovadis', to: '/ecovadis-rating.html' },                   // "EcoVadis Score Improvement — Bronze to Gold"
  { from: '/epd', to: '/environmental-product-declaration.html' },      // "EPD Consulting — Verified Environmental Declarations"
  { from: '/eudr', to: '/eudr-compliance.html' },                       // "EUDR Compliance Consulting — Deforestation-Free"
  { from: '/iscc', to: '/iscc-certification.html' },                    // "ISCC Certification Consulting — EU, PLUS, CORSIA"
  { from: '/net-zero', to: '/net-zero-decarbonization.html' },          // "Net Zero & Decarbonization Strategy Consulting"
  { from: '/sbti', to: '/sbti-target-setting.html' },                   // "SBTi Target Setting & Validation Consulting"
  // /esg-reporting is not redirected: the Report hub now publishes at that
  // exact path, so the live URL keeps working as itself and keeps whatever
  // equity it has, rather than handing it to the pillar page.
  { from: '/renewable-energy', to: '/energy-attribute-certificates.html' }, // "Renewable Energy Procurement — PPAs, RECs, I-RECs"
  { from: '/carbon-credits', to: '/carbon-supply.html' },               // "High-Integrity Carbon Credit Advisory"

  // ── Hubs and index pages ──────────────────────────────────────────────────
  { from: '/blog', to: '/insights.html' },
  { from: '/resources', to: '/insights.html' },
  { from: '/sitemap', to: '/insights.html' },
  { from: '/services', to: '/esg-sustainability.html', rebuild: true },
  { from: '/solutions', to: '/esg-sustainability.html', rebuild: true },
  { from: '/industries', to: '/esg-sustainability.html', rebuild: true },

  // ── Company pages ─────────────────────────────────────────────────────────
  { from: '/leadership', to: '/about.html', rebuild: true },
  { from: '/careers', to: '/about.html', rebuild: true },
  { from: '/methodology', to: '/carbon-supply.html#five-checks', rebuild: true },
  { from: '/faqs', to: '/esg-sustainability.html', rebuild: true },
  { from: '/cookies', to: '/privacy.html' },

  // ── Sector pages ──────────────────────────────────────────────────────────
  // All eight are real sector pages on the live site and all eight are gone
  // here. Each is pointed at the regulation that drives that sector's demand,
  // which is a defensible relevance match but not a replacement. These carry
  // "regulation x sector" intent that nothing in this build captures.
  { from: '/metals', to: '/cbam-compliance.html', rebuild: true },        // "Metals & Mining" — CBAM iron, steel, aluminium
  { from: '/automotive', to: '/cbam-compliance.html', rebuild: true },    // "Automotive & Engineering" — steel/aluminium inputs
  { from: '/manufacturing', to: '/cbam-compliance.html', rebuild: true }, // "Manufacturing"
  { from: '/chemicals', to: '/cbam-compliance.html', rebuild: true },     // "Chemicals & Petrochemicals" — CBAM fertilisers
  { from: '/textiles', to: '/supplier-value-chain-esg.html', rebuild: true }, // "Textiles & Apparel"
  { from: '/consumer', to: '/supplier-value-chain-esg.html', rebuild: true }, // "Consumer Goods"
  { from: '/pharma', to: '/esg-sustainability.html', rebuild: true },     // "Pharmaceuticals"
  { from: '/technology', to: '/esg-sustainability.html', rebuild: true }, // "Technology"
];

/** Paths on the live site that already exist here unchanged — no rule needed. */
export const unchanged = [
  '/', '/about', '/contact', '/privacy', '/terms', '/insights',
  '/ghg-accounting', '/product-carbon-footprint', '/life-cycle-assessment',
  '/brsr-core-assurance-india', '/carbon-credit-integrity-icvcm-vcmi',
  '/cbam-definitive-period-2026', '/cbam-iron-steel-strategy',
  '/cdp-disclosure-2026', '/ecovadis-scoring-bronze-to-gold',
  '/eudr-deforestation-regulation-explained', '/i-rec-renewable-energy-certificates',
  '/ifrs-s1-s2-issb-explained', '/iscc-eu-plus-corsia-which-certification',
  '/lca-pcf-epd-difference', '/net-zero-pathway-funding',
  '/sbti-net-zero-standard-v2', '/scope-3-emissions-measurement',
];
