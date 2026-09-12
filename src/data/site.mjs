/* Global site configuration.
   Everything a non-developer may need to change lives here. */

export const site = {
  /* Brand name is always "Offsetease" or "OFFSETEASE" — never inter-capitalised. */
  name: 'Offsetease',
  nameCaps: 'OFFSETEASE',
  legal: 'Offsetease LLP',
  tagline: 'High-integrity carbon, at the source.',
  descriptor: 'A carbon and ESG consultancy',

  /* Canonical origin. Change this one value when the domain changes; every
     canonical URL, sitemap entry, Open Graph tag and JSON-LD id follows it. */
  origin: 'https://offsetease.com',

  contact: {
    email: 'info@offsetease.com',
    phone: '+91 88661 42748',
    phoneHref: '+918866142748',
    linkedin: 'https://www.linkedin.com/company/offsetease',
    /* Office location line. A full street address is deliberately not published
       here — add one only when you have the verified registered address. */
    location: 'India',
    serving: 'India, the EU, Southeast Asia, the Middle East, Canada and Australia'
  },

  /* Optional form endpoint (Formspree, Netlify, HubSpot …).
     Leave null and the briefing form falls back to the visitor's mail client. */
  formEndpoint: null,

  /* Live pipeline figures.
     These are intentionally null. Set real, current numbers here and the
     "By the numbers" strip on the home page switches from the qualitative
     version to the numeric one. Never publish estimates as fact. */
  pipeline: {
    tonnesUnderDevelopment: null,   // e.g. '1.4m'
    projectsInOrigination: null,    // e.g. '11'
    countries: null                 // e.g. '4'
  },

  registries: ['Verra', 'Gold Standard', 'Puro.earth', 'Isometric', 'Global Carbon Council'],

  standards: ['SBTi', 'GHG Protocol', 'ISO 14064 / 14067', 'ISAE 3000 / ISSA 5000',
    'TCFD / IFRS S1–S2', 'EN 15804 / ISO 14025', 'ICVCM Core Carbon Principles', 'VCMI',
    'Verra', 'Gold Standard', 'Puro.earth', 'Isometric', 'GCC', 'CBAM / EUDR', 'GRI', 'CDP'],

  /* Content prepared September 2026. Refresh dated figures quarterly. */
  contentDate: '2026-09',
  buildYear: 2026
};

/* Photography credits. Unsplash licence — free for commercial use.
   Keys match the file stem in assets/img/photos/. */
export const photos = {
  'hero-canopy':      { alt: 'Aerial view of a forest canopy threaded with low cloud', credit: 'JOHN TOWNER' },
  'mangrove-river':   { alt: 'A river winding through dense mangrove forest, seen from the air', credit: 'Collins Lesulie' },
  'river-delta':      { alt: 'A braided river delta cutting channels through green moss', credit: 'Jonny Gios' },
  'eroded-terrain':   { alt: 'Aerial view of eroded terrain carved by dry riverbeds', credit: 'Roberto Shumski' },
  'basalt-columns':   { alt: 'Columnar basalt rock formation', credit: 'Alessandra Renda' },
  'molten-steel':     { alt: 'Molten metal pouring from a furnace into an industrial ladle', credit: 'yasin hemmati' },
  'carbon-texture':   { alt: 'Close detail of fractured black carbon-rich rock', credit: 'Clément M.' },
  'container-port':   { alt: 'Shipping containers stacked in a port, seen from directly above', credit: 'CHUTTERSNAP' },
  'wind-fog':         { alt: 'A single wind turbine emerging from sea fog at sunrise', credit: 'Sander Weeteling' },
  'tree-nursery':     { alt: 'Rows of young trees planted across a restoration site', credit: 'Sean Foster' },
  'fog-forest':       { alt: 'Cloud lying across a forested ridge', credit: 'Daniel Rauber' },
  'factory-interior': { alt: 'Interior of a heavy industrial plant', credit: 'Ant Rozetsky' }
};
