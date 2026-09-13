# OffsetEase V4.4 — Fix List

From the forensic audit of <https://kishan0088.github.io/Offsetease_V4.4/> (13 Sep 2026).
Every item below was observed live or measured in the DOM/CSS/JS — nothing here is speculative.

**This site is generated.** Do not edit the `.html` files at the repo root — they are build output
and will be overwritten. Edit the sources, then rebuild:

```bash
npm run all
```

| What you want to change | Edit |
|---|---|
| Contact details, form key, nav, footer nav, colours, chrome figures | `src/data/site.mjs` |
| Homepage / About / Contact / Carbon supply / ESG hub copy | `src/data/pages.mjs` |
| The 18 service pages (steps, FAQs, standards, CTAs) | `src/data/services.mjs` |
| Page structure & components | `src/render.mjs`, `src/lib/components.mjs` |
| Styling | `assets/css/site.css` |
| Behaviour (reveals, nav, form, counters) | `assets/js/app.js` |
| Build-time assertions | `src/check.mjs` |

Priorities: **P0** = the site does not work until this is done. **P1** = will cost you deals.
**P2** = credibility and clarity. **P3** = polish. **P4** = accessibility/compliance.

---

## P0 — Blockers

### [ ] 0.1 The contact form is dead

**Observed:** I submitted the enquiry form on `/contact.html` with valid data. It returned:
*"This form is not connected yet. Please email info@offsetease.com — we reply within one business day."*
No network request was made.

**Cause:** `src/data/site.mjs:50` → `accessKey: ''`. That renders as `data-access-key=""`, and
`assets/js/app.js:427` (`const key = form.dataset.accessKey || ''`) short-circuits to the error path.

**Fix:**
1. Create a free access key at <https://web3forms.com> for `info@offsetease.com`.
2. `src/data/site.mjs:50` → `accessKey: 'your-real-key-here',`
3. `npm run all`
4. **Submit a real test enquiry from the built page and confirm it arrives in the inbox.**
   Do not mark this done on the code change alone.
5. Add a build guard in `src/check.mjs` so this can never ship empty again:

```js
// in src/check.mjs, alongside the existing assertions
if (!site.form.accessKey || site.form.accessKey.length < 20) {
  fail('Enquiry form access key is missing — the contact form will not submit.');
}
```

**Done when:** a test enquiry lands in the inbox, and `npm run check` fails if the key is removed.

---

### [ ] 0.2 On the Contact page, "Talk to us" links to the Contact page

**Observed:** both the header CTA and the hero CTA on `/contact.html` carry
`href="/Offsetease_V4.4/contact.html"`. Clicking the most prominent button reloads the page and
scrolls the visitor back to the top — *away* from the form, which sits entirely below a
full-viewport hero.

**Fix:**
- In `src/data/pages.mjs`, the Contact page hero CTA → `href: '#enquiry'`, label `View the form` or
  `Send an enquiry`.
- In `src/render.mjs`, suppress or re-target the header `nav__cta` when the current page *is*
  `/contact.html` (point it at `#enquiry`, or render it as inert).
- Shrink the Contact hero so the first three form fields are visible above the fold at 900px
  viewport height. Move the wind-turbine photo beside the form, not above it.

**Done when:** no CTA on `/contact.html` links to `/contact.html`, and the Name field is visible
without scrolling at 1440×900.

---

### [ ] 0.3 No privacy policy, no terms, no consent

**Observed:** grepped all 26 pages — zero matches for "privacy", "terms of", or any consent
checkbox. You collect name, work email and company, and you market CBAM / CSRD / EUDR services to
EU-facing companies.

**Fix:**
- Add `privacy.html` and `terms.html` as pages in `src/data/pages.mjs` + `src/render.mjs`.
- Add both to the footer "Company" column in `src/data/site.mjs:footerNav`.
- Add a required consent checkbox to the enquiry form in `src/render.mjs`:
  *"I agree to OffsetEase storing these details to respond to my enquiry. [Privacy policy]"*
- State data retention and who the processor is (Web3Forms is a third-party processor — it must
  be named).

**Done when:** both pages exist, are linked from the footer of every page, and the form cannot be
submitted without consent.

---

## P1 — Trust (these are what cost you enterprise deals)

### [ ] 1.1 Put real people on the About page

**Observed:** the About page has a section headed **"OUR TEAM & EXPERTISE"** containing zero names,
zero photos, zero LinkedIn links, zero bios, and no founding year. The phrase
*"a senior specialist replies within one business day"* appears **28 times** sitewide, always about
a person who is never identified.

**Fix:** 2–4 real people in `src/data/pages.mjs` → About. For each: photograph, full name, role,
one line of specific provenance (not "experienced" — *"eight years originating ARR projects in
Gujarat"*), LinkedIn URL. Two named humans beat "senior specialists" by an order of magnitude.

**Blocked on you:** photos and bios. Nothing else on this list is worth more per hour of effort.

---

### [ ] 1.2 Publish the legal entity and a real address

**Observed:** "Based in India · serving India and global markets" is the entire geographic
disclosure. The `Organization` JSON-LD contains only `"addressCountry":"IN"`.

**Fix:** in `src/data/site.mjs`:
- `legalName` → the registered entity name (currently just `'OffsetEase'`)
- add `address: { street, city, state, postalCode, country }`
- add `cin` / `gstin`
- render the full address in the footer and expand the JSON-LD `PostalAddress` in `src/lib/layout.mjs`

A modest registered address beats no address. "India" describes 1.4 billion people — a European
procurement team cannot verify you exist.

---

### [ ] 1.3 Make the flagship project verifiable

**Observed:** "37,798 tCO₂e verified and issued", "502 ha planted", "468 farmers as partners",
"3.9M tCO₂e projected over 30 years", "third-party verified, with on-site and satellite MRV" —
with **no standard, no methodology, no VVB, no registry, no project ID, no link.**

The section is headed *"IMPACT — PROVEN, NOT PROMISED."* Everything in it is promised.

**Fix:** name the standard (Verra / GCC / Plan Vivo / …), the methodology, the validating body and
the registry, and deep-link the registry project page. If issuance is pending, say so plainly —
*"validation complete, issuance expected Q3 2026"* is stronger than an unsourced number.

---

### [ ] 1.4 Replace stock photography in every section that makes a claim

**Observed:** `CREDITS.md` states it — all 23 photographs are Unsplash. That includes the hero of
your Gujarat/Rajasthan agroforestry programme (pomegranate, guava, mahogany, custard apple), which
is illustrated with a stock aerial of a **mangrove river** shot in an unrelated country.

**Why this is the most damaging item on the list:** anyone who has stood in an ARR plot in Rajasthan
clocks the mismatch in one glance — and then re-reads everything above it as marketing.

**Fix:**
- Send someone to the project with a phone. Ten honest, slightly imperfect photographs of actual
  saplings, actual farmers, actual MRV fieldwork.
- Keep stock only for abstract sections (the CBAM molten-steel shot is fine).
- Ban stock from: the Impact section, the About page, "Our model / Farmers are stakeholders", and
  the "Traceable to the ground" block on Carbon supply.

---

### [ ] 1.5 Add one case study and one attributed quote

**Observed:** grepped all 26 pages for *testimonial*, *trusted by*, *our clients*, *case study* —
zero real matches. No named customer, quote, logo or engagement exists anywhere on the site.

**Fix:** one anonymised case study with real shape beats ten adjectives:

> *A listed Indian auto-component maker. 11,000 t retired across two vintages. 40 projects screened,
> 3 supplied. Delivered in nine weeks.*

No client name required. Then one attributed quote with a name and a face — from a client, a
verifier, or a farmer co-operative lead.

---

### [ ] 1.6 Separate market statistics from your own statistics

**Observed:** the hero stat row mixes them in one identical component:

| Cell | Whose number |
|---|---|
| `$14.80/t` | MSCI — market |
| `51%` | Terrapass/SBTi — market |
| `37,798 tCO₂e` | **yours** |
| `5 / 5` | your policy |

Worse on the About page: under **"WHERE WE WORK"**, `49` / `214,000` / `114,000` are AlliedOffsets'
figures for *the whole of India*, displayed in the same big stat trio you use for your own data.
A skimming visitor reads "214,000 verified credits issued" as yours — six times the number the
homepage claims. The disambiguating labels are set at **10px**.

**Fix:** two visually distinct components in `src/lib/components.mjs`:
- **Ours** — gold numeral, dark card, footnote *"OffsetEase programme data"*.
- **Market** — muted numeral, ruled line, source and year on the same line at readable size.

Never place them in the same row. Combine with fix **3.1** (label size).

---

### [ ] 1.7 Make all 26 sources clickable

**Observed:** `/sources.html` lists 26 named, dated sources and says *"Verify against the primary
source before relying on a figure"* — and not one is a link. They are plain text domain fragments.
I grepped every external `href` on the entire site: the only one is `linkedin.com/company/offsetease`,
repeated 27 times.

**Fix:**
- In `src/data/site.mjs` (sources array), add a `url` to every entry; render as
  `<a href="…" target="_blank" rel="noopener">`.
- Make in-body citations like `(MSCI Carbon Markets, 2025)` link to the matching entry anchor.
- Promote "Sources & data" into the primary nav or the footer's top row — it is your single best
  trust asset and it is currently buried under "Company".

---

### [ ] 1.8 Fix the "Standards, frameworks & bodies we work to" wall

**Observed:** the Carbon supply page lists Verra, Gold Standard, Puro.earth, Isometric, GCC,
Plan Vivo, ACR, Climate Action Reserve, ICVCM/CCP, VCMI, CORSIA and ICROA as styled pills, with no
evidence of any relationship. It occupies the visual slot where a logo wall goes, so it reads as
affiliation. **ICROA is an accreditation** — listing it without being accredited is the kind of
thing a diligence team flags.

**Fix:** split into two blocks in `src/data/pages.mjs`:
- **"Registries we hold accounts with"** — with your account name and a link.
- **"Frameworks our screening maps to"** — one line each on *how* it is applied.

Remove any body you are not an actual member of.

---

## P2 — Content

### [ ] 2.1 Copy errors (30 minutes, high embarrassment cost)

| File / line | Current | Change to |
|---|---|---|
| `src/data/pages.mjs:15` | `'Science-led climate, carbon & climate intelligence'` — **"climate" twice, in the first six words on the site** | `'Science-led carbon & climate intelligence'` |
| `src/data/pages.mjs:30` | `'Scroll — the integrity story, in seven chapters'` — there are **six** `data-chapter` sections (Signal, Challenge, Integrity, Standard, Capability, Impact) | `'…in six chapters'`, or add a seventh |

---

### [ ] 2.2 "Carbon projects" is a headline capability with no page

**Observed:** the homepage presents **four** capabilities. `src/data/pages.mjs:122` →
`'Carbon projects'` links to `/carbon-supply.html#pipeline` — an anchor inside the Carbon supply
page. Two of your four capabilities resolve to the same URL.

**Fix:** either build a real `carbon-projects.html` (you have the material — origination,
feasibility, PDD, validation, registration, MRV, benefit sharing), or merge the two cards into one
honest "Carbon supply & project development". Do not present four doors where three exist.

---

### [ ] 2.3 One product, three names

| Where | Name used |
|---|---|
| Primary nav (`src/data/site.mjs:66`) | **Certificates** |
| Homepage capability card | **Renewable attributes (I-RECs)** |
| Footer + page `<title>` | **Energy Attribute Certificates** |

A visitor hunting for I-RECs will not recognise "Certificates" in the nav.

**Fix:** pick one — **"Energy Attribute Certificates (I-RECs)"** — and use it in all three places.

---

### [ ] 2.4 The CBAM steps contradict the CBAM body copy

**Observed:** `src/data/services.mjs:374–380`, under the heading *"The work, in the order we do it"*:

```
1. Calculate product-level embedded emissions
2. Produce verified data to replace defaults
3. Support your declarants
4. Model the margin impact
5. Confirm exactly where you sit in scope   ← last
```

Two paragraphs above, the page says: *"Scope confirmation is **the first step**, because the rules
changed just before the definitive regime began."*

**Fix:** move `'Confirm exactly where you sit in scope'` to position 1. Then read all eighteen step
lists for the same error — EcoVadis has a milder version ("Prioritise the highest-weighted themes"
sits at step 4, after "Build evidence across all four themes"; you would prioritise first).

---

### [ ] 2.5 The 18 service pages are one template with the nouns swapped

**Measured `<main>` word counts:** ISCC 255 · EUDR 299 · CBAM 322 · EcoVadis 348 · CSRD 357 ·
SBTi 373 · GHG accounting 426. Every page uses the identical two section headings —
*"The work, in the order we do it."* and *"What usually comes with this."* — and has **exactly two**
FAQs, each one sentence long.

Meanwhile the ESG hub promises *"Eighteen **in-depth** services… and **the questions clients actually
ask**."* Two one-line FAQs is not that.

**Fix — do not expand all eighteen.** Pick the four with real commercial pull —
**CBAM, CSRD & ESRS, BRSR, EcoVadis** — and build each to 1,200–1,800 words with something no
competitor has:
- a scope checker or in-scope list (CN codes for CBAM; turnover/employee thresholds for CSRD)
- a deadline calendar
- a worked example with real numbers
- 6–10 genuine FAQs
- one downloadable artefact

Let the other fourteen remain short directory entries — and stop calling them "in-depth".
Four excellent pages beat eighteen identical ones.

---

### [ ] 2.6 Stop repeating yourself

| Phrase | Occurrences |
|---|---|
| "A senior specialist replies within one business day" | **28** |
| "The Five Checks" | **26 pages** |
| India market stats (49 / 214,000 / 114,000) | About **and** Carbon supply |
| Full Five Checks block, verbatim | Homepage **and** Carbon supply |

**Fix:** vary the closing CTA per page in `src/data/services.mjs` (`cta` field) — make the promise
specific to what that page is about. Show the full Five Checks block once (Carbon supply) and link
to it from the homepage with a three-line summary.

---

### [ ] 2.7 Give visitors something to do that isn't "email us"

**Observed:** across 26 pages there is no price, no minimum order, no lead time, no engagement
model, no available volume, no sample deliverable, no download. The only action anywhere is
"start a conversation."

**Fix:** add one low-commitment CTA alongside the high-commitment one:
- a **current supply sheet** (project type / vintage / standard / indicative price band / volume)
  behind an email gate
- on CBAM/CSRD/BRSR: a one-line "are you in scope" statement and the next deadline

You already publish $14.80/t and $125–145/t for biochar. Say what *you* can sell and roughly for what.

---

## P3 — UI & UX

### [ ] 3.1 The meaning is set at 10px, the number at 74px

**Measured:** `.stats__l` is `font-size: 10px` (IBM Plex Mono, `0.06em` letter-spacing) — and that
class carries *"A–AAA rated credits, 2025 average"* and *"verified and issued from our agroforestry
programme"*, i.e. the only thing distinguishing your data from the market's. Chapter-rail labels are
**9.5px**. Scroll cue 10.5px. **32 text nodes on the homepage render below 12.5px.**

**Fix in `assets/css/site.css`:**
- `.stats__l` → `13px`, letter-spacing `0.04em`
- `.rail__dot span` → `12px`
- `.proof__figl`, `.split__l`, `.scroll-cue` → `12px` minimum
- Add a solid scrim behind the hero stat strip — it currently sits translucent over a photograph
  and was illegible at 800×600.

---

### [ ] 3.2 Two measured WCAG AA contrast failures

Composited against fully-resolved backgrounds:

| Selector | Text | Size | Ratio | Required |
|---|---|---|---|---|
| `.split__l` | "A–AAA rated" | 11px | **3.26:1** | 4.5:1 |
| `.proof__figl` | "premium reported for CCP-aligned credits" | 10.5px | **3.28:1** | 4.5:1 |

Both use `rgba(10, 61, 68, 0.58)` on bone.

**Fix:** raise the muted foreground to `0.72` alpha minimum at these sizes. `.proof__t` already uses
`0.78` and passes at 5.54:1 — match it.

**Also:** the scrollytelling body copy sits directly on photographs with no scrim. On mobile,
*"Credits rated A or higher made up 36% of 2025's retirement value"* runs grey-on-pale-blue water.
Add a `linear-gradient` scrim behind the text column (not a flat overlay on the whole image).

---

### [ ] 3.3 A grid class called `cols--2` renders three columns for four cards

**Measured at 1440px:** the "Four capabilities" section uses `class="cols cols--2"`; its computed
`grid-template-columns` is `414.664px 414.664px 414.664px` — three columns, four children. The
fourth card sits alone with two columns of dead space beside it.

**Fix:** 2×2 grid at ≥1024px, or `repeat(4, 1fr)` at ≥1400px. Never leave an orphan in a marketing
card grid. Rename the class while you're there — `cols--2` producing three columns will bite again.

---

### [ ] 3.4 The headline is invisible until JavaScript runs, then assembles for 1.4s

**Observed:** repeatedly — at 1440×900 and 375×812, several seconds after navigation, the hero
rendered as eyebrow → ~380px void → subline, with **no headline**.

**Cause:** `assets/css/site.css` sets `.js .kinetic .kw__i { transform: translateY(112%) …; opacity: 0 }`.
The `js` class is applied by a synchronous inline script in `<head>` *before first paint*, and is
only cleared when the deferred `app.js` runs and IntersectionObserver adds `is-in`. The reveal then
runs `transform 1.05s` with `62ms` per-word stagger — 7 words, last word lands ~1.42s later.

**Why it matters:** your value proposition is the likely LCP element and it depends on a deferred
script. If JS fails it never appears. And the effect is applied to **every heading on the site**, so
the reader waits at every scroll stop.

**Fix:**
1. Invert the CSS so the readable state is the default — animate only when `is-in` is present:

```css
.js .kinetic.is-in .kw__i { animation: kwRise 0.6s var(--ease) calc(var(--kw) * 35ms) both; }
/* remove the opacity:0 / translateY default on .js .kinetic .kw__i */
```

2. Cut the stagger to `35ms` and the transform to `0.6s`.
3. Restrict `.kinetic` to the hero H1 and **one** other moment. Let the other ~38 headings just be there.

---

### [ ] 3.5 3,600px of scroll-jacking for 75 words

**Measured:** `#challenge-film` is **3,600px** tall on desktop — four full viewports of pinned
scrollytelling. Payload: three cards totalling ~75 words. The homepage is **13.7 viewports** on
desktop and **14.7 on mobile**.

**Fix:** cut the pin to two viewports maximum, or drop it and present the three points as a static
three-up. Note that on mobile you already unpin and stack it — and the mobile version reads
*better*. That should tell you something.

---

### [ ] 3.6 Desktop gets 4 nav links; mobile gets 24

**Measured:** the desktop header shows Carbon supply · Certificates · ESG & sustainability · About ·
Talk to us. The hamburger is `display: none` above 1020px. The mobile menu contains **24 links** —
the full ESG catalogue (GHG accounting, PCF, LCA, EPD, BRSR, CSRD, IFRS S1/S2, Double materiality,
EcoVadis, CDP, CBAM, EUDR, ISCC, Supplier ESG, SBTi, Net zero, TCFD, ESG strategy).

On desktop, a visitor looking for CBAM has **no header path at all** — they must guess it lives
under "ESG & sustainability" or scroll 13.7 screens to the footer. There is no dropdown anywhere.
Your desktop visitors are the enterprise buyers; they currently get the least navigation.

**Fix:**
- Mega-menu on "ESG & sustainability" mirroring the hub's five discipline groups.
- Add **Contact** as a real nav item alongside the CTA button.
- Add **Sources & data**.

---

### [ ] 3.7 Mobile menu tap targets are 18px

**Measured at 375×812 with the menu open:** the six primary links are 69px tall; **18 of the 24
links are 18px tall**. WCAG 2.5.8 requires 24×24; Apple and Google specify 44×44. The menu's
`scrollHeight` is **1350px inside an 812px viewport** — 538px below the fold, with no visual signal
that it scrolls.

**Fix:** 44px minimum tap height for every menu link (increase padding, not font size). Group the
eighteen services under tappable accordion headers so the menu fits. Add a fade or chevron at the
bottom edge.

---

### [ ] 3.8 No mid-page conversion path

**Observed:** two in-body CTAs across 13.7 viewports (hero + closing block). The sticky header
*hides itself on scroll-down* — I confirmed `nav` gains `is-hidden` at scrollY 1000 after a real
wheel scroll (`assets/js/app.js:88`) — so the header CTA is gone during exactly the activity you
want to interrupt.

**Fix:**
- Contextual CTA after the Five Checks: *"Ask us to screen a project you're considering →"*
- Contextual CTA after the impact stats: *"See the registry entry for this programme →"*
- Mobile: persistent bottom bar with one button past 25% scroll depth.
- Keep the gold CTA pinned when the header bar retracts.

---

### [ ] 3.9 Mobile detail

- [ ] The hero eyebrow wraps to two lines at 375px, making the duplicated "CLIMATE" *more*
      conspicuous (fixed by **2.1**).
- [ ] Stat labels at 10px mono wrap to three lines — "A–AAA rated / credits, 2025 / average" —
      inside a small cell (fixed by **3.1**).
- [ ] Page is 14.7 viewports on mobile, longer than desktop. Fixed by **3.5** plus trimming the
      hero.

*Working well on mobile, leave alone:* the unpinned scrollytelling, no horizontal overflow at
375px, the fluid 38px H1.

---

## P4 — Accessibility

**Already correct — do not regress these:** working skip link, `lang="en-IN"`, `<main>` landmark,
`aria-label` on all three navs, `alt` on all 11 homepage images (4 decorative ones correctly empty
+ `aria-hidden`), `:focus-visible` styling throughout, a real `prefers-reduced-motion` block that
short-circuits the reveals. This is better than most sites in the sector.

### [ ] 4.1 Heading order — footer/menu `<h2>`s precede the `<h1>`

**Observed:** the mobile menu markup sits before `<main>` in the DOM and contains three `<h2>`s —
"Measure & report", "Certify & comply", "Target & reduce". A screen-reader user pulling the heading
list hears those **before** the page `<h1>`.

**Fix:** demote them to `<p class="label">` in `src/lib/layout.mjs` (they are visual group labels,
not document structure), or move the menu after `<main>`.

### [ ] 4.2 "0 of 5 checks passed" is the static accessible text

**Observed:** the Five Checks counter renders `0` in the HTML and is incremented by
IntersectionObserver. With JS off or reduced-motion on, the announced text is
*"0 of 5 checks passed"* — the exact opposite of the message.

**Fix:** render `5` in the markup and treat the count-up as decoration (`aria-hidden` on the
animating numeral, with a visually-hidden static "All 5 checks passed").

### [ ] 4.3 Contrast — see **3.2**.

### [ ] 4.4 Privacy / consent — see **0.3**.

---

## Pre-launch checklist

Flip all of these **in the same deploy**, or you ship a site that ranks for nothing.

- [ ] `src/data/site.mjs` → `indexable: true`
- [ ] `src/data/site.mjs` → `origin: 'https://offsetease.com'`, `basePath: ''`
- [ ] Confirm `robots.txt` no longer emits `Disallow: /` (currently it does)
- [ ] Confirm `sitemap.xml` is populated — **it is currently an empty `<urlset>`**
- [ ] Confirm every page's `<meta name="robots">` is gone or set to `index, follow`
- [ ] Confirm canonicals point at `offsetease.com`, not `kishan0088.github.io`
- [ ] Confirm `og:image` / `twitter:image` resolve on the production domain
- [ ] Submit a real enquiry through the production form and confirm delivery
- [ ] Redirect map from the current live offsetease.com URLs to the new ones
- [ ] `npm run check` passes

---

## Things only you can supply

Everything below is blocked on you, not on code. In rough order of value:

1. **Photographs of the actual agroforestry project** — farmers, saplings, MRV fieldwork.
2. **2–4 named team members** — photo, name, role, one specific line of provenance, LinkedIn.
3. **The registry entry** for the 37,798 tCO₂e — standard, methodology, VVB, project ID, URL.
4. **Registered entity name, full address, CIN/GSTIN.**
5. **One case study** — anonymised is fine, but with real volumes, timelines and screening numbers.
6. **One attributed quote** with a name and a face.
7. **Web3Forms access key.**
8. **Which registries you actually hold accounts with**, and which bodies you are actually a
   member of.
9. **Indicative commercial parameters** — price bands, minimum volumes, typical lead times.

---

## Suggested order of work

**Week 1 (site is broken until this is done):** 0.1 · 0.2 · 2.1 · 2.3 · 2.4 · 3.3
**Week 2 (trust):** 1.1 · 1.2 · 1.3 · 1.6 · 1.7 · 0.3
**Week 3 (readability & motion):** 3.1 · 3.2 · 3.4 · 3.5 · 4.1 · 4.2
**Week 4 (navigation & conversion):** 3.6 · 3.7 · 3.8 · 2.7 · 2.2
**Ongoing:** 1.4 (photography) · 1.5 (case study) · 2.5 (deepen four service pages)

---

## Scores at time of audit

**Overall 4/10** — UI 6 · UX 4 · Content 5 · Trust 3 · Conversion 2

The engineering is better than the business substance it wraps: 429KB initial payload, AVIF ladder
with LQIPs, self-hosted variable fonts, zero third-party JavaScript, a real static generator with a
check step. The craft is genuinely good. It is being spent defending claims the site never
substantiates — and then the one button that lets a visitor act returns an error.

Fix P0 and P1 and this becomes a strong site.
