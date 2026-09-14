# Offsetease — v4.4

A 28-page, zero-dependency static site for Offsetease: high-integrity carbon
supply and project development, Renewable Energy (EACs), and eighteen in-depth
ESG & sustainability services.

The header carries three destinations — **Carbon supply**, **Renewable Energy
(EACs)**, **ESG & sustainability** — and one button, **Contact us**. Carbon
project development is not a separate page: it lives inside Carbon supply,
where the full origination-to-issuance pipeline is set out in detail.

**Preview:** https://kishan0088.github.io/Offsetease_V4.4/
**Live site (untouched by this repository):** https://offsetease.com

---

## This is a preview build, and it deliberately does not compete with the live site

`src/data/site.mjs` has `indexable: false`. While that is set, every page ships
`<meta name="robots" content="noindex, nofollow">`, `robots.txt` disallows
everything and `sitemap.xml` is emitted empty. That is on purpose: publishing a
full duplicate of the company's copy on a second public domain would split
search signals with offsetease.com.

To promote this build to production:

1. Set `indexable: true`.
2. Point `origin` at `https://offsetease.com` and set `basePath: ''`.
3. Rebuild. Canonicals, the sitemap and `robots.txt` all follow automatically.

---

## Build

No install step, no `node_modules`, no network access required.

```bash
node src/build.mjs   # writes 28 .html files to the repository root
node src/check.mjs   # validates the result; exits non-zero on any error
```

GitHub Actions runs both on every push to `main` and deploys the repository
root to Pages (`.github/workflows/pages.yml`).

### What the validator enforces

It fails the build — not just warns — on: dead internal links and dead
fragments, missing or duplicated `<title>` / meta descriptions, missing
canonical / Open Graph / Twitter tags, JSON-LD that does not parse, more than
one `<h1>`, skipped heading levels, `<img>` without `alt` or without intrinsic
`width`/`height`, duplicate `id`s, links or buttons with no accessible name,
`target="_blank"` without `rel="noopener"`, missing skip link or `lang`,
orphan pages, placeholder text, brand-spelling slips, any page missing a link
to the privacy policy, any internal URL that forgot the deployment base path,
and — once `indexable` is true — a missing enquiry-form access key.

---

## Layout of the source

```
src/
  data/
    site.mjs       deployment, contact, brand tokens, form key   ← edit this first
    pages.mjs      copy for the seven core pages
    services.mjs   copy for the eighteen ESG service pages
  lib/
    html.mjs       escaping, the `html` tagged template, kinetic-text helper
    paths.mjs      every internal URL goes through url() / absolute()
    media.mjs      <picture> generation from the photo manifest
    layout.mjs     document shell, nav, footer, JSON-LD
    components.mjs hero, story, five-checks, ladder, cards, FAQ, CTA …
  render.mjs       one function per page template
  build.mjs        writes the HTML, sitemap, robots.txt and web manifest
  check.mjs        post-build validation
assets/
  brand/           lockup, mark, favicons, social card, measured geometry
  css/site.css     the whole design system, one file
  js/app.js        the whole behaviour layer, one file
  fonts/           Schibsted Grotesk + IBM Plex Mono, latin & latin-ext
  img/photos/      AVIF + WebP ladders and manifest.json
```

Adding a nineteenth ESG service means adding one object to
`src/data/services.mjs`. The page, its nav entry, its footer link, its
breadcrumb, its JSON-LD and its sitemap row all follow.

---

## The enquiry form

The contact form posts to [Web3Forms](https://web3forms.com). Paste your free
access key into `site.form.accessKey` in `src/data/site.mjs` and rebuild.

**While that key is empty the form is not rendered at all.** The contact page
shows a direct email/phone block instead, the page's own CTA reads "How to
reach us" rather than "Send an enquiry", and `check.mjs` warns. Asking a
visitor for five fields and a consent tick and *then* telling them it cannot
send is worse than not offering the form — so the site offers the channels that
actually work until the key exists.

The moment a key is set the full form returns: labelled controls with
`aria-describedby` error nodes and `aria-invalid`, a honeypot, a required
consent checkbox, and `?topic=` prefill so an intent-matched CTA arrives with
the subject already chosen. Once `indexable` is true, a missing key **fails**
the build.

### Deliberate deviations from the UX audit

- **About stays out of the primary navigation.** The audit recommends adding
  it; you asked for exactly three links plus one button. Your call wins. About
  is the first link in the footer's Company column.
- **No `FAQPage` schema on Carbon supply, ESG & sustainability or About.**
  Those pages have no FAQ content in the approved copy, and inventing question
  and answer pairs to win rich results would be fabricating content.
  `BreadcrumbList` is now emitted on every page below the root.

---

## Brand

The mark was measured off the supplied artwork rather than eyeballed. It is an
**eight-point sunburst on a 45° grid with three rays omitted** — the three that
would collide with the wordmark. The five surviving rays sit at 120°, 165°,
210°, 255° and 300°, each running from radius 36 to 134 at width 13.5, around a
hub circle of radius 22 with an 8-unit stroke.

Those numbers live in `assets/brand/brand-geometry.json` and are the single
source for the lockup, the favicons, the hero's orbital field, the Five Checks
dial and the scrollytelling progress dial. The mark is emitted as exact
primitives (five `<rect>`s and a `<circle>`), so it stays crisp at any size and
each ray can animate independently. The wordmark is a contour trace of the
supplied raster, inlined once per document and referenced by `<use>`.

> **Gotcha, twice paid for:** never put a CSS `transform` (or `transform-box`)
> directly on an SVG element that carries a `transform="rotate(…)"` attribute.
> The CSS property replaces the attribute rather than composing with it, and
> every ray collapses onto the hub. Rotation goes on a wrapper `<g>`; CSS
> animates the child.

---

## Colour

The page is **light by default**. `:root` carries the light token set (bone
ground, deep-teal text) and dark is opt-in punctuation — `.on-ink`, `.on-deep`,
`.on-abyss`, plus every surface that sits over photography (`.hero`, `.band`,
`.close`, `.story`, `.footer`), which declare the dark set and apply `color`.

A section never needs to know where it sits: it re-declares four tokens
(`--bg`, `--fg`, `--fg-soft`, `--rule`) and everything inside inherits the right
contrast. `--accent` is the display gold; `--accent-text` is a deeper tone
reserved for mono labels at 11–12px, where the display gold misses AA.

Every visible text node on the light surfaces was measured against its
composited background — all pass WCAG AA.

## Motion

Everything is progressive enhancement — the page is complete and readable with
JavaScript disabled, and every entrance animation is skipped under
`prefers-reduced-motion: reduce`.

- Kinetic headlines: words rise from behind a per-word mask, staggered — but the
  **readable state is the default**, so the value proposition never waits on a
  deferred script. Reserved for the hero `h1` and the closing CTA; the other ~38
  headings simply appear.
- Reveal-on-scroll via one `IntersectionObserver`; `data-stagger` spaces
  siblings without hand-written delays.
- Pinned scrollytelling (`data-story`): **two viewports total**, whatever the
  scene count — cross-fading photography, a progress spine and a ray dial.
  Collapses to a plain stacked list below 940px and under reduced motion.
- The Five Checks light up one ray at a time as the list is read.
- Count-up figures, hero and band parallax, pointer-tracked card glow, magnetic
  primary buttons — all fine-pointer only, and all skipped on `saveData`.
- Desktop mega-menu on ESG (hover **and** a real disclosure button for keyboard
  users), mobile menu accordions with 44px targets, and a persistent mobile CTA
  past a quarter of the page, because the header CTA retracts on scroll-down.
- The origination-to-supply pipeline is a scroll-drawn instrument: a rail fills
  across the four stages and each badge ignites as the rail reaches it.
- Seven cinematic clips (11 MB total, `assets/video/`) back five heroes and two
  bands — one clip per placement, chosen for what the copy beside it actually
  says: hands planting under *Stakeholders are partners*, worked plots from the
  air under *Traceable to the ground*, a cotton mill under *ESG that creates
  value*. Each is lazy, `preload="none"`, and only ever requested on a wide,
  fine-pointer, non-data-saver screen — phones and metered connections get the
  poster and pay nothing. They pause when scrolled out of view, and no page
  loads more than two.
- Each clip's poster is its own first frame, so the band dissolves into motion
  instead of cross-fading between two different pictures.
- Photography is matched to what the copy says, not to its keywords. The
  *Durable removals* card cites "86% of durable CDR deliveries were biochar",
  so it shows biochar being handled, not the basalt it names second; *Avoidance &
  reduction* says "clean cookstoves", so it shows the open fire one replaces;
  EUDR shows coffee, one of its seven covered commodities. Where the copy names
  a country the photograph is of that country; where it names an EU regulation
  that binds exporters, the photograph is of the industry regulated, not of
  Europe. 45 image slots draw on 42 distinct photographs — only four are used
  twice, and none three times.
- Scroll progress uses a CSS `scroll()` timeline where supported, with a rAF
  fallback. All scroll-linked work shares a single rAF loop.
- The brand mark does not rotate or animate on hover. It is the one element on
  the page that stays still.

---

## Performance

- No framework, no CDN, no third-party runtime. Two files: one CSS, one JS.
- Self-hosted variable fonts, latin + latin-ext only, preloaded, `swap`.
- Photography ships as an AVIF ladder (720 / 1440 / 2160) with a WebP fallback
  capped at 1440 — a fallback for browsers without AVIF should not outweigh the
  format it is backing up. Every image has intrinsic dimensions and an inline
  base64 LQIP for blur-up, so there is no layout shift.
- Hero art is preloaded with `fetchpriority="high"`; everything else is lazy.

---

## Pre-launch checklist

Flip all of these in the same deploy, or the site ranks for nothing:

- [ ] `src/data/site.mjs` → `indexable: true`
- [ ] `src/data/site.mjs` → `origin: 'https://offsetease.com'`, `basePath: ''`
- [ ] `src/data/site.mjs` → a real `form.accessKey` (the build now **fails**
      without one once `indexable` is true)
- [ ] Submit a real enquiry through the production form and confirm delivery
- [ ] `robots.txt` no longer says `Disallow: /`, and `sitemap.xml` is populated
      (both follow automatically from `indexable`)
- [ ] Canonicals, `og:image` and `twitter:image` resolve on offsetease.com
- [ ] Redirect map from the current live offsetease.com URLs to these
- [ ] `node src/check.mjs` passes

## Known gaps — blocked on information, not on code

Nothing below was invented. Each is a deliberate hole with a clearly marked
place to put the real thing.

| Gap | Where it goes |
|---|---|
| **Leadership** — 2–4 people: photo, name, role, one specific line of provenance, LinkedIn | `about.team.leadership` in `src/data/pages.mjs` (empty array; the section renders when filled) |
| **Registered entity, address, CIN/GSTIN** | `site.legalName` + a new `site.address` in `src/data/site.mjs`; the footer and the `PostalAddress` JSON-LD read from there |
| **Registry record for the 37,798 tCO₂e** — standard, methodology, VVB, project ID, URL | `home.impact` in `src/data/pages.mjs`; the Carbon projects page already carries a CTA asking for it |
| **Photography of the actual project** — farmers, saplings, MRV fieldwork | drop into `assets/img/photos/` and re-run the encoder; currently the Impact and Carbon-projects art is Unsplash and says so in `CREDITS.md` |
| **One case study and one attributed quote** | no component yet — add alongside `home.impact` |
| **Which registries you hold accounts with**, and which bodies you are a member of | `supply.standards` is deliberately worded as "credits we supply are issued under" and "our screening maps to" — it claims no relationship. ICROA was removed, because listing an accreditation you do not hold is what a diligence team flags |
| **Commercial parameters** — price bands, minimum volumes, lead times | no component yet; the audit's suggested "current supply sheet" needs real numbers |
| **Web3Forms access key** | `site.form.accessKey` |
| **Legal review** of `privacy.html` and `terms.html` | both pages carry a visible notice saying they were drafted alongside the build and not reviewed by a lawyer |

Market figures move. Every one is dated and linked on `/sources.html`;
re-check them quarterly and update `site.lastReviewed`.
