# Launch checklist

Everything below is free. The order matters: redirects have to be live before
the indexing block lifts, or search engines meet 404s on URLs that currently
rank.

---

## 0. Before you start

The site is currently a **preview**. It ships `noindex` on every page and a
`Disallow: /` robots.txt, and its sitemap is deliberately empty. That is not a
bug — this build lives on `offsetease-v1-2.netlify.app`, and if it were indexed
there it would compete with the real `offsetease.com` for the same terms and
split every signal between two copies of the same content.

**Nothing on this list works until `offsetease.com` points at this build.**

---

## 1. Point the domain at this build

In Netlify: **Site configuration → Domain management → Add a domain** →
`offsetease.com`, then follow the DNS instructions.

While you are in the dashboard, also link the repository —
**Build & deploy → Continuous deployment → Link repository** →
`Kishan0088/Offsetease_V4.4`, branch `main`. Leave the build command and publish
directory blank; `netlify.toml` sets both. After this, every push deploys
itself.

---

## 2. Throw the switch

Set one environment variable in Netlify
(**Site configuration → Environment variables**):

```
SITE_INDEXABLE = true
SITE_ORIGIN    = https://offsetease.com
SITE_BASE      =            (empty)
```

Then trigger a deploy. That single flag:

- removes `noindex, nofollow` from all 48 pages
- writes a real `sitemap.xml` with 47 URLs
- writes a `robots.txt` that allows Googlebot, Bingbot and nine AI crawlers by
  name
- rewrites every canonical, `og:url`, JSON-LD `@id`, `llms.txt` link and feed
  URL to the production domain

It defaults to `false`, so forgetting it fails safe rather than exposing a
preview.

---

## 3. Verify before telling anyone

```bash
curl -s https://offsetease.com/robots.txt          # Allow: / + the AI agents
curl -s https://offsetease.com/sitemap.xml | grep -c '<loc>'   # 47
curl -sI https://offsetease.com/cbam               # 301 -> /cbam-compliance
curl -sI https://offsetease.com/about.html         # 301 -> /about
curl -s https://offsetease.com/ | grep -c noindex  # 0
```

All 54 URLs the old site published are mapped — 23 resolve directly, 31 via
301. Nothing 404s.

---

## 4. Submit to search engines

Both free, both take about ten minutes, and **nothing gets crawled quickly
without them.**

### Google Search Console — <https://search.google.com/search-console>

1. Add property → **Domain** → `offsetease.com`
2. Verify with the DNS TXT record it gives you (add it in your DNS host)
3. **Sitemaps** → enter `sitemap.xml` → Submit
4. **URL Inspection** → paste the homepage → *Request indexing*

### Bing Webmaster Tools — <https://www.bing.com/webmasters>

1. Add site → import from Google Search Console (one click), or verify
   separately
2. **Sitemaps** → submit `https://offsetease.com/sitemap.xml`
3. **URL submission** → submit the ten pages that matter most

Bing is not optional. **ChatGPT's web search runs on Bing's index**, so skipping
it costs you ChatGPT visibility directly.

---

## 5. What is already built for AI answer engines

No action needed — these ship with the launch flag:

| | Where |
|---|---|
| Crawler allowlist — GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-Web, Google-Extended, Applebot-Extended, Bingbot, CCBot | `robots.txt` |
| `llms.txt` — a plain-text map of the whole site for language models | `/llms.txt` |
| Organization + ProfessionalService entity, with `knowsAbout`, `makesOffer`, `contactPoint` | every page |
| WebSite node tying the domain to the organisation | every page |
| Direct one-paragraph answers on all 18 service pages | service pages |
| 75 FAQs with `FAQPage` schema | service pages |
| 8 sourced fact tables and 5 dated compliance timelines | service pages |
| `Service`, `BlogPosting`, `BreadcrumbList` schema | throughout |
| 26 dated, attributed citations | `/sources` |
| RSS feed | `/feed.xml` |

---

## 6. The two things still missing, and they matter

Neither can be written for you.

**Analytics.** There is none. No GA4, no Search Console link, no conversion
tracking. You will not know whether the relaunch worked, which of the 26 pages
with a form produces enquiries, or where anyone came from. Install GA4 through
Google Tag Manager, plus Microsoft Clarity for free session recordings.

**Named people.** No human is named anywhere on the site, and all 14 articles
credit the company rather than a person. This is the single biggest limit on
AI citation — ChatGPT, Claude and Perplexity cite named people and identifiable
organisations. It also caps E-E-A-T for regulatory advice, which Google treats
as YMYL. Publishing 3–5 named specialists with photographs, credentials and
LinkedIn links is the highest-value change left on the site.

Also still outstanding: no legal entity name, registered address or founding
year anywhere, which means the privacy policy does not name a data controller —
required under GDPR Article 13 for the EU clients this site targets.

---

## 7. What to expect

Indexing is not instant. Typical pattern after a correctly executed migration:

- **Days 1–3** — Google discovers the sitemap, starts crawling
- **Weeks 1–2** — most pages indexed; rankings wobble as 301s are processed
- **Weeks 3–6** — rankings settle, usually at or above the old site if the
  redirect map held
- **Months 2–3** — AI answer engines begin surfacing pages, once their crawlers
  have been through and the content has been seen more than once

Watch Search Console's **Coverage** and **404** reports daily for the first
30 days. A spike in 404s means a redirect was missed — tell whoever maintains
`src/data/redirects.mjs`.
