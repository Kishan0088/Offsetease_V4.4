#!/usr/bin/env python3
"""Encode a source image into the AVIF/WebP ladder the site's <picture> expects.

Usage:  python3 tools/encode-photos.py <name>=<source.png> [<name>=<src> ...]

Writes assets/img/photos/<name>-<w>.{avif,webp} and merges the entry into
manifest.json. Quality is searched down until each file fits its byte budget,
so a noisy frame costs the same as a clean one on the wire.
"""
import sys, os, json, io, base64
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
OUT = os.path.join(ROOT, "assets/img/photos")
MAN = os.path.join(OUT, "manifest.json")
WEBP_MAX = 1440
# width -> (avif budget, webp budget) in bytes
BUDGET = {720: (46_000, 60_000), 1440: (140_000, 175_000), 2160: (230_000, None)}


def fit(im, w, fmt, budget):
    """Encode at the highest quality that still fits the budget."""
    h = round(im.height * w / im.width)
    if h % 2:
        h += 1
    r = im.resize((w, h), Image.LANCZOS)
    lo, hi = (28, 64) if fmt == "avif" else (45, 82)
    best = None
    for q in range(hi, lo - 1, -2):
        buf = io.BytesIO()
        if fmt == "avif":
            r.save(buf, "AVIF", quality=q, speed=4)
        else:
            r.save(buf, "WEBP", quality=q, method=6)
        best = (q, buf.getvalue())
        if len(best[1]) <= budget:
            break
    return r, best


def main(pairs):
    man = json.load(open(MAN)) if os.path.exists(MAN) else {}
    for spec in pairs:
        name, src = spec.split("=", 1)
        im = Image.open(src).convert("RGB")
        widths = [w for w in (720, 1440, 2160) if w <= im.width]
        entry = {"w": im.width, "h": im.height,
                 "ratio": round(im.width / im.height, 4),
                 "widths": widths, "bytes": {}}
        for w in widths:
            ab, wb = BUDGET[w]
            _, (qa, adata) = fit(im, w, "avif", ab)
            open(f"{OUT}/{name}-{w}.avif", "wb").write(adata)
            rec = {"avif": len(adata), "qa": qa}
            if w <= WEBP_MAX:
                _, (qw, wdata) = fit(im, w, "webp", wb)
                open(f"{OUT}/{name}-{w}.webp", "wb").write(wdata)
                rec.update(webp=len(wdata), qw=qw)
            entry["bytes"][str(w)] = rec
        # LQIP: 20px wide WebP, inlined as a data URI for blur-up
        lq = im.resize((20, max(1, round(im.height * 20 / im.width))), Image.LANCZOS)
        b = io.BytesIO(); lq.save(b, "WEBP", quality=42, method=6)
        entry["lqip"] = "data:image/webp;base64," + base64.b64encode(b.getvalue()).decode()
        px = im.resize((1, 1), Image.LANCZOS).getpixel((0, 0))
        entry["tone"] = "#%02x%02x%02x" % px
        man[name] = entry
        print(f"{name:18} {im.width}x{im.height}  " +
              "  ".join(f"{w}:{entry['bytes'][str(w)]['avif']//1024}k" for w in widths))
    json.dump(dict(sorted(man.items())), open(MAN, "w"), indent=1)


if __name__ == "__main__":
    main(sys.argv[1:])
