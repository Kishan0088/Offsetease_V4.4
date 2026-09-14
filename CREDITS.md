# Credits

## Photography

Most photographs are from [Unsplash](https://unsplash.com), used under the
[Unsplash Licence](https://unsplash.com/license), which permits free commercial
use without attribution. Four are single frames pulled from the Pexels clips
listed under **Video** below, so that each cinematic band and hero dissolves
from its own first frame into motion rather than cutting between two different
pictures. Attribution is given anyway where it is known.

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

### Frames used as stills

| File | Source clip |
|---|---|
| `canopy-fog` | Pexels 30770305 — Vũ Ngọc Long |
| `planting-hands` | Pexels 9737856 — K |
| `fields-aerial` | Pexels 34999648 — Atikur Rahman |
| `wind-fogbank` | Pexels 30013228 — Tom Schönmann |

## Video

Four clips from [Pexels](https://www.pexels.com), used under the
[Pexels Licence](https://www.pexels.com/license/), which permits free commercial
use without attribution. Attribution is given anyway.

| File | Used on | Pexels ID | Author |
|---|---|---|---|
| `canopy-fog-1080.mp4` | Home hero | [30770305](https://www.pexels.com/video/misty-rainforest-aerial-view-in-dense-fog-30770305/) | Vũ Ngọc Long |
| `planting-hands-900.mp4` | Home — *Our Model* band | [9737856](https://www.pexels.com/video/two-women-planting-seedlings-at-farm-9737856/) | K |
| `fields-aerial-900.mp4` | Carbon Supply — *Traceable to the ground* band | [34999648](https://www.pexels.com/video/aerial-view-of-farmers-in-a-rice-field-34999648/) | Atikur Rahman |
| `wind-fogbank-900.mp4` | Renewable Energy (EACs) hero | [30013228](https://www.pexels.com/video/wind-turbines-in-foggy-landscape-30013228/) | Tom Schönmann |

Each clip is re-encoded from the 1080p master: audio stripped, trimmed to a
single beat, scaled to 1600px wide (1440 for the aerial, whose crop texture is
expensive), H.264 high profile with `+faststart`. The three drone moves are cut
as palindromes — forward then reversed — so they loop without a visible jump;
the hand-planting clip runs forward only, because reversed planting reads as
unplanting. Together they weigh 6.5 MB, against 6.6 MB for the single generic
river clip they replace, and no page loads more than two.

They are lazy: `preload="none"`, fetched by IntersectionObserver, and only on
a viewport ≥1024px with a fine pointer and no Save-Data header. Everyone else
gets the poster still, which is the clip's own first frame.

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
