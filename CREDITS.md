# Credits

## Photography

Every photograph is from [Unsplash](https://unsplash.com), used under the
[Unsplash Licence](https://unsplash.com/license), which permits free commercial
use without attribution. Attribution is given anyway where it is known.

### Named photographers

| File | Photographer |
|---|---|
| `hero-canopy` | JOHN TOWNER |
| `mangrove-river` | Collins Lesulie |
| `river-delta` | Jonny Gios |
| `eroded-terrain` | Roberto Shumski |
| `basalt-columns` | Alessandra Renda |
| `molten-steel` | yasin hemmati |
| `carbon-texture` | Clément M. |
| `container-port` | CHUTTERSNAP |
| `wind-fog` | Sander Weeteling |
| `tree-nursery` | Sean Foster |
| `fog-forest` | Daniel Rauber |
| `factory-interior` | Ant Rozetsky |

### Attribution outstanding

These eleven arrived as Unsplash photo IDs in the approved design bundle, and
the photographer names could not be resolved from this environment. The IDs are
recorded so the credits can be completed — each resolves at
`https://unsplash.com/photos/<id>`.

| File | Unsplash photo ID |
|---|---|
| `earth-night` | `photo-1451187580459-43490279c0fa` |
| `earth-orbit` | `photo-1446776811953-b23d57bd21aa` |
| `forest-water` | `photo-1497436072909-60f360e1d4b1` |
| `forest-fog` | `photo-1509316975850-ff9c5deb0cd9` |
| `lone-tree` | `photo-1502082553048-f009c37129b9` |
| `sunlit-forest` | `photo-1523712999610-f77fbcfc3843` |
| `wind-turbines` | `photo-1466611653911-95081537e5b7` |
| `solar-farm` | `photo-1497435334941-8c899ee9e8e9` |
| `valley-dawn` | `photo-1470071459604-3b5ec3a7fe05` |
| `farmland-sunrise` | `photo-1500382017468-9049fed747ef` |
| `industrial-plant` | `photo-1516937941344-00b4e0337589` |

Each image is re-encoded to an AVIF ladder (720 / 1440 / 2160 where the source
allows) with a WebP fallback capped at 1440, and carries an inline base64 LQIP
for blur-up loading. Source dimensions, byte sizes and placeholders are in
`assets/img/photos/manifest.json`.

## Typefaces

- **Schibsted Grotesk** — Schibsted / Bakken & Bæck.
  [SIL Open Font License 1.1](https://openfontlicense.org). Self-hosted as a
  variable font (`wght` 400–700), latin and latin-ext subsets.
- **IBM Plex Mono** — IBM. [SIL Open Font License 1.1](https://openfontlicense.org).
  Self-hosted, weights 400 and 500, latin and latin-ext subsets.

Both are served from `assets/fonts/`, so the site has no third-party runtime
dependency and renders offline.

## Brand

The Offsetease wordmark is the property of Offsetease. The vectors in
`assets/brand/` were derived from the supplied raster artwork
(`offsetease_logo_white.png`): the sunburst was **measured** and re-emitted as
exact geometry, and the wordmark was contour-traced. The reconstructed
measurements are in `assets/brand/brand-geometry.json` and explained in the
**Brand** section of `README.md`.

## Content

Site copy is the client's approved content document. Every market figure marked
as a proof point is attributed to a named, dated source on
[`/sources.html`](sources.html) — 26 sources spanning 2024–2026, each linked to
the original.

The privacy policy and terms of use were drafted for this build and describe how
the site actually behaves. They have not been reviewed by a lawyer, and each
page says so on its face.

## Code

No third-party JavaScript, CSS or build tooling. Every layout primitive,
diagram, animation and the static generator itself were written for this site.
