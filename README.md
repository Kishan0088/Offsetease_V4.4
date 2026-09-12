# Offsetease — v4.4

**High-integrity carbon, at the source.**

A cinematic, scroll-driven marketing site for Offsetease: 31 pages, no
framework, no runtime dependencies, no build step required to view it.

The brand name is always **Offsetease** or **OFFSETEASE** — never
inter-capitalised. The build fails its own check if that slips.

---

## Quick start

The site in the repository root is already built. To look at it:

```bash
python3 -m http.server 4477
```

Then open <http://localhost:4477>. That is the whole requirement — Python 3 ships
with macOS and most Linux distributions. Opening `index.html` directly from the
file system also works, because every internal link is relative.

To rebuild the HTML after editing content:

```bash
node src/build.mjs && node src/check.mjs
```

Node 18 or newer. There is nothing to `npm install` — the generator uses only
the Node standard library.

| Command | What it does |
|---|---|
| `npm run build` | Regenerates all 31 HTML pages, the sitemap, robots.txt and the web manifest |
| `npm run check` | Validates links, assets, headings, alt text, metadata, JSON-LD and brand spelling |
| `npm run serve` | Serves the built site on port 4477 |
| `npm run dev` | Builds, then serves and opens a browser |

---

## How the site is built

Page content lives in plain JavaScript data files. A small generator turns that
data into static HTML. There is no template language to learn and no
dependency that can rot.

```
src/
  build.mjs              the generator — run this to rebuild
  check.mjs              the validator — run this before committing
  data/
    site.mjs             ← global config: domain, contact details, figures
    nav.mjs              ← site architecture: every URL, the menus, the footer
    pages/
      index.mjs          the page registry (order = sitemap order)
      home.mjs           the home page narrative
      markets.mjs        environmental markets, 7 pages
      esg.mjs            ESG & sustainability, 17 pages
      company.mjs        industries, insights, about, contact, FAQ
  lib/
    html.mjs             escaping, typographic polish, small element helpers
    figures.mjs          every custom diagram and chart on the site
  templates/
    layout.mjs           document shell: head, header, footer, structured data
    hero.mjs             the three hero variants
    blocks.mjs           the twelve section types a page is assembled from
    page.mjs             assembles hero + blocks + FAQ + closing CTA

assets/
  brand/                 logo SVGs, favicons, the traced geometry
  css/site.css           the entire design system, one file
  css/fonts.css          self-hosted @font-face declarations
  fonts/                 Inter (variable) and IBM Plex Mono, woff2
  img/photos/            photography, two widths each, plus blur-up placeholders
  js/app.js              motion runtime, navigation, accordions, form
  js/hero-canvas.js      the generative hero field
```

### Editing content

Almost everything a non-developer needs is in **`src/data/site.mjs`**: the
canonical domain, email, phone, LinkedIn, the list of registries and standards,
and the pipeline figures.

Page copy lives in `src/data/pages/`. A page is an array of typed blocks:

```js
{
  type: 'prose',            // prose · points · figure · tiles · split · statement
  tone: 'bone',             // paper · bone · dark · deep · abyss
  n: '02',                  // the section number shown in the kicker
  kicker: 'Why it matters',
  title: 'One backbone. Every framework.',
  paras: ['…', '…']
}
```

Add a block, rebuild, done. `npm run check` will tell you if anything broke.

### The live pipeline figures

`src/data/site.mjs` contains:

```js
pipeline: {
  tonnesUnderDevelopment: null,
  projectsInOrigination: null,
  countries: null
}
```

These are deliberately `null`. The source content marked them as figures to be
supplied, and **no number has been invented to fill the gap**. While they are
`null`, the home page hero renders without the numeric strip and the page reads
perfectly well. Set real, current values and the animated counters appear
automatically. Refresh them quarterly.

The same principle applies throughout: every dated claim on the site (CBAM's
January 2026 definitive regime, the EUDR deadlines, SBTi V2 from 2028) comes
from the supplied source content. Schematic charts say so in their captions, and
carry no invented axis values.

---

## Brand

The visual system is built from the supplied logo — an oversized ring with a
sunburst radiating from it.

Measuring the original raster showed the mark is an **eight-point sunburst on a
45° grid**, with the three rays on the right omitted because the wordmark sits
there. The rays are exact rectangles: inner radius 1.39×, outer radius 5.10× and
width 0.53× the ring's outer radius. That geometry is recorded in
`assets/brand/brand-geometry.json` and drives:

- `offsetease-logo.svg` — the primary lockup, traced from the original and
  verified against it by pixel difference
- `offsetease-logo-compact.svg` — the same mark with shortened rays, so the
  wordmark stays legible at navigation size
- `favicon.svg` and the PNG icons — the full eight-ray sunburst, symmetrical
- the hero canvas, which streams particles along the five real ray angles
- the section markers, the scroll indicator and the diagram geometry

| Token | Value | Use |
|---|---|---|
| `--core` | `#0A3D44` | the brand primary |
| `--abyss` `--deep` `--raised` `--mid` | teal scale | cinematic grounds |
| `--signal` | `#5BC9D4` | the accent — one colour, used sparingly |
| `--bone` `--paper` `--ink` `--slate` | neutrals | editorial surfaces and text |
| `--moss` `--amber` | environmental tones | nature-based and risk signals only |

Type is **Inter** throughout — a refined grotesque with exceptional readability —
with **IBM Plex Mono** for technical labels, figure captions and section numbers.

---

## Motion

Motion is written from scratch in `assets/js/app.js` (about 13 KB unminified) and
`assets/js/hero-canvas.js`.

- Entrance reveals and staggers via `IntersectionObserver`
- Scroll-linked progress published as a CSS custom property, from a single
  `requestAnimationFrame` loop shared by every scroll effect
- Clamped parallax, so an unusual viewport can never shear the layout
- Animated counters, SVG draw-on, masked wipes, sticky narrative stages
- A generative hero field on canvas: particles streaming outward from a single
  origin along the logo's ray angles, paused when off-screen or when the tab
  is hidden, and rendered as a single static frame under reduced motion

Everything degrades honestly:

- **No JavaScript** — all content is visible. Reveal styles are scoped behind a
  `.js` class added in the document head, so nothing is ever hidden from a
  visitor whose script did not load.
- **`prefers-reduced-motion: reduce`** — every transition, animation and
  parallax is disabled and final states are shown immediately.
- **`?motion=off`** — append it to any URL to freeze entrance animations in
  their finished state. A QA aid for screenshots, print checks and debugging.

---

## Performance, SEO and accessibility

- No framework, no third-party script, no external font or CSS request. One
  stylesheet, two small scripts, both deferred.
- Fonts are self-hosted woff2, subset to latin and latin-ext, with the primary
  face preloaded. The latin path is 73 KB.
- Every photograph is served at two widths with `srcset` and explicit
  `width`/`height`, lazily except the hero, behind an inline blur-up
  placeholder. No layout shift.
- Every page carries a unique title and meta description, a canonical URL, Open
  Graph and Twitter tags, and JSON-LD for `Organization`, `WebSite`, `WebPage`,
  `BreadcrumbList`, `Service` and `FAQPage`.
- Every colour pair used for text meets **WCAG 2.1 AA** (4.5:1); meaningful
  borders and axes meet 3:1. The palette was solved against that constraint
  rather than checked afterwards.
- One `<h1>` per page, ordered headings, visible focus rings, a skip link,
  labelled form fields, `aria-expanded` on every disclosure, and alt text on
  every image.
- Complex diagrams scroll inside their own track below 760px rather than
  shrinking their labels into illegibility. The signature radial becomes a
  stacked list on a phone.

`npm run check` enforces the mechanical parts of this on every build.

---

## URLs

Pages are flat `.html` files at the repository root. GitHub Pages, Netlify,
Cloudflare Pages and most static hosts serve `/about` from `about.html`
automatically, and every canonical URL uses that extensionless form.

Two pages differ from the original content plan: the children of Carbon Project
Development are published at `/nature-based-carbon` and `/durable-removals`
rather than nested under `/carbon-project-development/`. Flat files keep the
site working when opened directly from the file system, and the hierarchy is
expressed through breadcrumbs and `BreadcrumbList` structured data, which is
what search engines actually read.

Change `site.origin` in `src/data/site.mjs` and rebuild to point every canonical
URL, sitemap entry and JSON-LD id at a different domain.

---

## Deployment

### GitHub Pages

A workflow is included at `.github/workflows/pages.yml`. Enable Pages for the
repository (**Settings → Pages → Source: GitHub Actions**) and every push to
`main` rebuilds and deploys.

### Netlify or Cloudflare Pages

Point the project at this repository and use:

- **Build command:** `node src/build.mjs`
- **Publish directory:** `.`

`netlify.toml` and `_headers` are included with sensible cache headers and a
404 mapping.

### Any static host

The repository root is the site. Upload it as-is.

---

## Testing before you ship

```bash
npm run build && npm run check
```

Then look at the site at three widths — a phone, a tablet and a desktop — with
`?motion=off` for layout and without it for motion.

---

## What is deliberately not here

- **Stock video.** The brief suggested cinematic video. Every video source
  reachable from this build environment required an API key, and an
  uncompressed stock clip would have added megabytes to a repository that
  currently loads in well under a second. The hero is a generative canvas
  instead, built from the logo's own geometry, which is lighter, sharper at any
  resolution, and not a clip a competitor can also license. `hero.photo` and the
  `band` block accept an image today; dropping in a `<video>` poster-backed
  element is a contained change to `src/templates/hero.mjs` if a real,
  brand-shot film becomes available.
- **Invented numbers.** See *The live pipeline figures* above.
- **Named authors and case studies.** The Insights hub ships as twelve genuine
  question-and-answer briefings drawn from the source content rather than stub
  links to articles that do not exist yet.

---

© Offsetease LLP. Content and brand assets are the property of Offsetease LLP.
See `CREDITS.md` for photography and typeface licensing.
