/* OFFSETEASE — custom graphics.
   Every figure is hand-built for this site: no chart library, no icon set.
   Geometry follows the wordmark — the ring, and rays on a 45-degree grid.
   Figures animate when scrolled into view (see .draw/.grow/.pop in site.css)
   and fall back to their finished state without JS or under reduced motion. */

import { esc, typo } from './html.mjs';

const R = (a) => (a * Math.PI) / 180;
const pt = (cx, cy, r, a) => [cx + Math.cos(R(a)) * r, cy + Math.sin(R(a)) * r];
const n = (v) => Math.round(v * 100) / 100;

/* A ray in the shape of the logo's: a rectangle on a radius. */
function ray(cx, cy, a, rIn, rOut, w) {
  const h = w / 2;
  const c = Math.cos(R(a)), s = Math.sin(R(a));
  const p = [[rIn, -h], [rOut, -h], [rOut, h], [rIn, h]]
    .map(([x, y]) => `${n(cx + x * c - y * s)} ${n(cy + x * s + y * c)}`);
  return `M${p[0]} L${p[1]} L${p[2]} L${p[3]} Z`;
}

const svgOpen = (vb, title, desc) =>
  `<svg viewBox="${vb}" role="img" aria-labelledby="${title.id}" preserveAspectRatio="xMidYMid meet">` +
  `<title id="${title.id}">${esc(title.text)}</title>` +
  (desc ? `<desc>${esc(desc)}</desc>` : '');

let uid = 0;
const nid = (p) => `${p}-${++uid}`;

/* ------------------------------------------------------------------ 01
   radial4 — four labelled arms around the ring.
   Used for The Source Standard's four dimensions, and the EcoVadis themes. */
export function radial4({ items, centre = ['The Source', 'Standard'], caption }) {
  const id = nid('radial');
  const cx = 450, cy = 268, rIn = 56, rOut = 172, lr = 196;
  const angles = [-143, -37, 37, 143];
  const arms = items.slice(0, 4).map((it, i) => {
    const a = angles[i];
    const [lx, ly] = pt(cx, cy, lr, a);
    const end = a > -90 && a < 90;          // pointing right
    const anchor = end ? 'start' : 'end';
    const d = (0.18 + i * 0.14).toFixed(2);
    const body = (it.body || []).map((ln, k) =>
      `<tspan x="${n(lx)}" dy="${k === 0 ? 22 : 17}" class="viz-body">${esc(ln)}</tspan>`).join('');
    return `<g>
      <path class="pop" style="--d:${d}s" d="${ray(cx, cy, a, rIn, rOut, 13)}" fill="var(--signal)" fill-opacity=".92"/>
      <circle class="pop" style="--d:${(+d + 0.1).toFixed(2)}s" cx="${n(pt(cx, cy, rOut + 14, a)[0])}" cy="${n(pt(cx, cy, rOut + 14, a)[1])}" r="4.5" fill="var(--signal)"/>
      <text class="fade" style="--d:${(+d + 0.16).toFixed(2)}s" x="${n(lx)}" y="${n(ly)}" text-anchor="${anchor}">
        <tspan class="viz-value">${esc(it.n)}</tspan>
        <tspan x="${n(lx)}" dy="19" class="viz-title" style="font-size:15px">${esc(it.title)}</tspan>
        ${body}
      </text>
    </g>`;
  }).join('');

  const svg = `
    ${svgOpen(`0 0 900 536`, { id, text: `${centre.join(' ')} — ${items.map(i => i.title).join(', ')}` },
      'A ring at the centre with four rays, each labelled with one dimension of the method.')}
      <circle class="draw" cx="${cx}" cy="${cy}" r="38" fill="none" stroke="var(--signal)" stroke-width="13" stroke-opacity=".95"/>
      ${arms}
      <text x="${cx}" y="${cy + 78}" text-anchor="middle" class="fade" style="--d:.7s">
        ${centre.map((l, i) => `<tspan x="${cx}" dy="${i === 0 ? 0 : 17}" class="viz-label">${esc(l)}</tspan>`).join('')}
      </text>
    </svg>`;

  const list = `<ol class="radial-list">` + items.slice(0, 4).map((it, i) => `
    <li style="--d:${(i * 0.08).toFixed(2)}s">
      <span class="radial-list__n">${esc(it.n)}</span>
      <span class="radial-list__t">${typo(it.title)}</span>
      <span class="radial-list__b">${typo((it.body || []).join(' '))}</span>
    </li>`).join('') + `</ol>`;

  return `<div class="figure figure--radial" data-viz>
    <div class="figure__wide">${svg}</div>
    ${list}
    ${caption ? `<p class="figure__cap">${typo(caption)}</p>` : ''}</div>`;
}

/* ------------------------------------------------------------------ 02
   spine — an N-step process. HTML, so it reflows on small screens. */
export function spine({ steps, caption, dense = false }) {
  const items = steps.map((s, i) => `
    <li class="spine__step" style="--d:${(i * 0.1).toFixed(2)}s">
      <span class="spine__node" aria-hidden="true">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" stroke-width="3"/></svg>
      </span>
      <span class="spine__n">${esc(String(i + 1).padStart(2, '0'))}</span>
      <h3 class="spine__t">${typo(s.title)}</h3>
      ${s.body ? `<p class="spine__b">${typo(s.body)}</p>` : ''}
    </li>`).join('');
  return `<div class="figure"><ol class="spine${dense ? ' spine--dense' : ''}">${items}</ol>
    ${caption ? `<p class="figure__cap">${typo(caption)}</p>` : ''}</div>`;
}

/* ------------------------------------------------------------------ 03
   dots — a proportion made literal. Grounded in a stated ratio. */
export function dots({ total = 20, on = 1, legendOn, legendOff, caption }) {
  const cells = Array.from({ length: total }, (_, i) =>
    `<span class="matrix__d${i < on ? ' matrix__d--on' : ''}" style="--d:${(i * 0.028).toFixed(3)}s"></span>`).join('');
  return `<div class="figure">
    <div class="matrix" role="img" aria-label="${esc(`${on} in ${total}. ${legendOn}`)}">${cells}</div>
    <ul class="legend">
      <li><i class="legend__k legend__k--on"></i>${typo(legendOn)}</li>
      <li><i class="legend__k"></i>${typo(legendOff)}</li>
    </ul>
    ${caption ? `<p class="figure__cap">${typo(caption)}</p>` : ''}</div>`;
}

/* ------------------------------------------------------------------ 04
   horizon — comparative duration bars. Schematic: a log-feel scale with no
   invented precision, used for permanence. */
export function horizon({ rows, axis, caption, title }) {
  const id = nid('horizon');
  const W = 900, left = 168, right = 40, top = 46, rowH = 58;
  const H = top + rows.length * rowH + 46;
  const span = W - left - right;
  const ticks = axis.map((t, i) => {
    const x = left + (span * i) / (axis.length - 1);
    return `<g><line class="viz-grid" x1="${n(x)}" y1="${top - 14}" x2="${n(x)}" y2="${n(top + rows.length * rowH - 14)}"/>
      <text class="viz-label" x="${n(x)}" y="${n(top + rows.length * rowH + 6)}" text-anchor="middle">${esc(t)}</text></g>`;
  }).join('');
  const bars = rows.map((r, i) => {
    const y = top + i * rowH;
    const x1 = left + span * r.from, x2 = left + span * r.to;
    const fill = r.tone === 'moss' ? 'var(--moss)' : r.tone === 'amber' ? 'var(--amber)' : 'var(--signal)';
    return `<g>
      <text class="viz-title" x="0" y="${n(y + 4)}">${esc(r.label)}</text>
      ${r.sub ? `<text class="viz-label" x="0" y="${n(y + 20)}">${esc(r.sub)}</text>` : ''}
      <g class="growx" style="--d:${(0.15 + i * 0.12).toFixed(2)}s;transform-origin:${n(x1)}px ${n(y - 4)}px">
        <rect x="${n(x1)}" y="${n(y - 16)}" width="${n(Math.max(x2 - x1, 3))}" height="16" rx="1" fill="${fill}" fill-opacity=".92"/>
      </g>
    </g>`;
  }).join('');
  return figureWrap(`
    ${svgOpen(`0 0 ${W} ${H}`, { id, text: title || 'Comparative permanence' },
      'Horizontal bars comparing how long each category of carbon asset is expected to hold.')}
      ${ticks}${bars}
    </svg>`, caption);
}

/* ------------------------------------------------------------------ 05
   curve — a schematic curve with a shaded region. Deliberately unnumbered:
   it shows the shape of a relationship, not a claimed quantity. */
export function curve({ points, xLabel, yLabel, markers = [], caption, title, area = true }) {
  const id = nid('curve');
  const W = 900, H = 420, l = 62, r = 30, t = 30, b = 58;
  const iw = W - l - r, ih = H - t - b;
  const X = (v) => l + v * iw, Y = (v) => t + (1 - v) * ih;
  const d = points.map((p, i) => `${i ? 'L' : 'M'}${n(X(p[0]))} ${n(Y(p[1]))}`).join(' ');
  const areaD = `${d} L${n(X(points[points.length - 1][0]))} ${n(Y(0))} L${n(X(points[0][0]))} ${n(Y(0))} Z`;
  const grid = [0, 0.25, 0.5, 0.75, 1].map(v =>
    `<line class="viz-grid" x1="${l}" y1="${n(Y(v))}" x2="${n(W - r)}" y2="${n(Y(v))}"/>`).join('');
  const marks = markers.map((m, i) => `
    <g class="pop" style="--d:${(0.6 + i * 0.14).toFixed(2)}s">
      <circle cx="${n(X(m.x))}" cy="${n(Y(m.y))}" r="5" fill="var(--signal)" stroke="var(--abyss)" stroke-width="2"/>
      <text class="viz-label" x="${n(X(m.x))}" y="${n(Y(m.y) - 14)}" text-anchor="${m.x > 0.8 ? 'end' : 'middle'}">${esc(m.label)}</text>
    </g>`).join('');
  return figureWrap(`
    ${svgOpen(`0 0 ${W} ${H}`, { id, text: title || 'Schematic curve' },
      'A schematic curve. It shows the shape of the relationship, not measured values.')}
      ${grid}
      <line class="viz-axis" x1="${l}" y1="${n(Y(0))}" x2="${n(W - r)}" y2="${n(Y(0))}"/>
      <line class="viz-axis" x1="${l}" y1="${t}" x2="${l}" y2="${n(Y(0))}"/>
      ${area ? `<path class="fade" style="--d:.45s" d="${areaD}" fill="var(--signal)" fill-opacity=".13"/>` : ''}
      <path class="draw" style="--d:.1s" d="${d}" fill="none" stroke="var(--signal)" stroke-width="2.5" stroke-linecap="round"/>
      ${marks}
      <text class="viz-label" x="${n(l + iw / 2)}" y="${n(H - 16)}" text-anchor="middle">${esc(xLabel)}</text>
      <text class="viz-label" x="0" y="0" transform="translate(14 ${n(t + ih / 2)}) rotate(-90)" text-anchor="middle">${esc(yLabel)}</text>
    </svg>`, caption);
}

/* ------------------------------------------------------------------ 06
   nested — concentric bands. Used for the three GHG scopes and for
   value-chain tiers: the thing that matters is what encloses what. */
export function nested({ bands, caption, title }) {
  const id = nid('nested');
  const W = 900, H = 470, cx = 300, cy = 235;
  const radii = [200, 148, 92];
  const rings = bands.map((bnd, i) => {
    const rr = radii[i] || 60;
    const tone = ['var(--signal)', 'var(--signal-dim)', 'var(--mid)'][i] || 'var(--mid)';
    return `<g class="pop" style="--d:${(i * 0.14).toFixed(2)}s">
      <circle cx="${cx}" cy="${cy}" r="${rr}" fill="${tone}" fill-opacity="${0.1 + i * 0.06}"
              stroke="${tone}" stroke-width="1.5" stroke-dasharray="${i === 0 ? '5 5' : 'none'}"/>
    </g>`;
  }).join('');
  const labels = bands.map((bnd, i) => {
    const y = 84 + i * 118;
    return `<g class="fade" style="--d:${(0.3 + i * 0.14).toFixed(2)}s">
      <line class="viz-grid" x1="560" y1="${y - 26}" x2="880" y2="${y - 26}"/>
      <text class="viz-value" x="560" y="${y - 6}">${esc(bnd.n)}</text>
      <text class="viz-title" x="560" y="${y + 14}" style="font-size:16px">${esc(bnd.title)}</text>
      ${(bnd.body || []).map((ln, k) =>
        `<text class="viz-label" x="560" y="${y + 34 + k * 15}">${esc(ln)}</text>`).join('')}
    </g>`;
  }).join('');
  const centres = bands.map((bnd, i) => {
    const rr = radii[i] || 60;
    return `<text class="viz-label fade" style="--d:${(0.2 + i * 0.14).toFixed(2)}s" x="${cx}" y="${cy - rr + 22}" text-anchor="middle">${esc(bnd.n)}</text>`;
  }).join('');
  return figureWrap(`
    ${svgOpen(`0 0 ${W} ${H}`, { id, text: title || 'Nested scopes' },
      'Concentric bands: each wider band encloses the one inside it.')}
      ${rings}${centres}${labels}
    </svg>`, caption);
}

/* ------------------------------------------------------------------ 07
   matrix2x2 — a two-axis assessment grid (double materiality, climate risk). */
export function matrix2x2({ xLabel, yLabel, quadrants, plots = [], caption, title }) {
  const id = nid('matrix');
  const W = 900, H = 520, l = 92, r = 40, t = 34, b = 70;
  const iw = W - l - r, ih = H - t - b;
  const X = (v) => l + v * iw, Y = (v) => t + (1 - v) * ih;
  const q = quadrants.map((qq, i) => {
    const col = i % 2, row = (i / 2) | 0;
    const x = l + (col * iw) / 2, y = t + (row * ih) / 2;
    return `<g class="fade" style="--d:${(0.2 + i * 0.1).toFixed(2)}s">
      <rect x="${n(x)}" y="${n(y)}" width="${n(iw / 2)}" height="${n(ih / 2)}"
            fill="var(--signal)" fill-opacity="${qq.weight ?? 0.04}"/>
      <text class="viz-label" x="${n(x + 16)}" y="${n(y + 24)}">${esc(qq.label)}</text>
    </g>`;
  }).join('');
  const dotsEls = plots.map((p, i) => `
    <g class="pop" style="--d:${(0.5 + i * 0.09).toFixed(2)}s">
      <circle cx="${n(X(p.x))}" cy="${n(Y(p.y))}" r="${p.r || 7}" fill="var(--signal)" fill-opacity=".9"/>
      <text class="viz-label" x="${n(X(p.x) + (p.r || 7) + 8)}" y="${n(Y(p.y) + 4)}">${esc(p.label)}</text>
    </g>`).join('');
  return figureWrap(`
    ${svgOpen(`0 0 ${W} ${H}`, { id, text: title || 'Assessment matrix' },
      'A two-axis grid dividing the field into four quadrants.')}
      ${q}
      <line class="viz-grid" x1="${n(l + iw / 2)}" y1="${t}" x2="${n(l + iw / 2)}" y2="${n(t + ih)}"/>
      <line class="viz-grid" x1="${l}" y1="${n(t + ih / 2)}" x2="${n(l + iw)}" y2="${n(t + ih / 2)}"/>
      <line class="viz-axis" x1="${l}" y1="${n(t + ih)}" x2="${n(l + iw)}" y2="${n(t + ih)}"/>
      <line class="viz-axis" x1="${l}" y1="${t}" x2="${l}" y2="${n(t + ih)}"/>
      ${dotsEls}
      <text class="viz-label" x="${n(l + iw / 2)}" y="${n(H - 22)}" text-anchor="middle">${esc(xLabel)} &#8594;</text>
      <text class="viz-label" x="0" y="0" transform="translate(26 ${n(t + ih / 2)}) rotate(-90)" text-anchor="middle">${esc(yLabel)} &#8594;</text>
    </svg>`, caption);
}

/* ------------------------------------------------------------------ 08
   compare — two stacked bars set against each other. Used for CBAM's
   verified-versus-default question. Proportions are illustrative. */
export function compare({ rows, note, caption, title }) {
  const id = nid('compare');
  const W = 900, H = 300, l = 210, r = 120, t = 52;
  const span = W - l - r, rowH = 88;
  const bars = rows.map((row, i) => {
    const y = t + i * rowH;
    const w = span * row.value;
    const fill = row.tone === 'amber' ? 'var(--amber)' : 'var(--signal)';
    return `<g>
      <text class="viz-title" x="0" y="${n(y + 20)}" style="font-size:16px">${esc(row.label)}</text>
      <text class="viz-body" x="0" y="${n(y + 41)}" style="font-size:11.5px">${esc(row.sub)}</text>
      <g class="growx" style="--d:${(0.15 + i * 0.16).toFixed(2)}s;transform-origin:${l}px ${n(y + 14)}px">
        <rect x="${l}" y="${n(y)}" width="${n(w)}" height="36" rx="1" fill="${fill}" fill-opacity=".92"/>
      </g>
      <text class="viz-value fade" style="--d:${(0.5 + i * 0.16).toFixed(2)}s" x="${n(l + w + 14)}" y="${n(y + 24)}">${esc(row.tag)}</text>
    </g>`;
  }).join('');
  return figureWrap(`
    ${svgOpen(`0 0 ${W} ${H}`, { id, text: title || 'Comparison' },
      'Two bars compared. Lengths are illustrative of direction, not measured values.')}
      ${bars}
      ${note ? `<text class="viz-body" x="0" y="${n(H - 14)}">${esc(note)}</text>` : ''}
    </svg>`, caption);
}

/* ------------------------------------------------------------------ 09
   backbone — one dataset feeding many frameworks. */
export function backbone({ source, targets, caption, title }) {
  const id = nid('backbone');
  const W = 900, H = 60 + targets.length * 46;
  const sx = 300, sy = H / 2;
  const paths = targets.map((tg, i) => {
    const ty = 40 + i * 46;
    const d = `M${sx} ${n(sy)} C ${sx + 120} ${n(sy)}, ${sx + 130} ${n(ty)}, ${sx + 250} ${n(ty)}`;
    return `<g>
      <path class="draw" style="--d:${(0.15 + i * 0.07).toFixed(2)}s" d="${d}" fill="none"
            stroke="var(--signal)" stroke-width="1.4" stroke-opacity=".55"/>
      <circle class="pop" style="--d:${(0.5 + i * 0.07).toFixed(2)}s" cx="${sx + 250}" cy="${n(ty)}" r="3.5" fill="var(--signal)"/>
      <text class="viz-title fade" style="--d:${(0.55 + i * 0.07).toFixed(2)}s;font-size:15px" x="${sx + 266}" y="${n(ty + 5)}">${esc(tg)}</text>
    </g>`;
  }).join('');
  return figureWrap(`
    ${svgOpen(`0 0 ${W} ${H}`, { id, text: title || 'One dataset, many frameworks' },
      'A single source on the left branching into the frameworks it serves on the right.')}
      <g class="pop">
        <rect x="10" y="${n(sy - 36)}" width="290" height="72" rx="2" fill="var(--signal)" fill-opacity=".14"
              stroke="var(--signal)" stroke-width="1.5"/>
        <text class="viz-title" x="30" y="${n(sy - 8)}" style="font-size:15px">${esc(source.title)}</text>
        <text class="viz-body" x="30" y="${n(sy + 14)}">${esc(source.sub)}</text>
      </g>
      ${paths}
    </svg>`, caption);
}

/* ------------------------------------------------------------------ 10
   ladder — ascending bands. EcoVadis medals, CDP's A-to-D scale. */
export function ladder({ rungs, caption, note }) {
  const items = rungs.map((r, i) => `
    <li class="ladder__r${r.on ? ' ladder__r--on' : ''}" style="--d:${(i * 0.1).toFixed(2)}s;--h:${n(34 + (i / (rungs.length - 1)) * 66)}%">
      <span class="ladder__bar"></span>
      <span class="ladder__l">${typo(r.label)}</span>
      ${r.sub ? `<span class="ladder__s">${typo(r.sub)}</span>` : ''}
    </li>`).join('');
  return `<div class="figure"><ol class="ladder">${items}</ol>
    ${note ? `<p class="figure__cap">${typo(note)}</p>` : ''}
    ${caption ? `<p class="figure__cap">${typo(caption)}</p>` : ''}</div>`;
}

/* ------------------------------------------------------------------ 11
   timeline — dated milestones. Only dates stated in the source content. */
export function timeline({ events, caption }) {
  const items = events.map((e, i) => `
    <li class="tl__e" style="--d:${(i * 0.1).toFixed(2)}s">
      <span class="tl__dot" aria-hidden="true"></span>
      <span class="tl__d">${typo(e.date)}</span>
      <h3 class="tl__t">${typo(e.title)}</h3>
      <p class="tl__b">${typo(e.body)}</p>
    </li>`).join('');
  return `<div class="figure"><ol class="tl">${items}</ol>
    ${caption ? `<p class="figure__cap">${typo(caption)}</p>` : ''}</div>`;
}

/* ------------------------------------------------------------------ 12
   divide — the market split in two. A single rule, two unequal fields. */
export function divide({ left, right, caption }) {
  const id = nid('divide');
  const W = 900, H = 300;
  return figureWrap(`
    ${svgOpen(`0 0 ${W} ${H}`, { id, text: `${left.title} against ${right.title}` },
      'The market shown as two fields divided by a single line.')}
      <g class="fade">
        <rect x="0" y="40" width="${W / 2 - 10}" height="200" fill="var(--slate)" fill-opacity=".13"/>
        <text class="viz-value" x="0" y="26" style="fill:var(--slate)">${esc(left.n)}</text>
        <text class="viz-title" x="0" y="${H - 42}" style="font-size:19px;fill:var(--slate)">${esc(left.title)}</text>
        ${left.body.map((l, i) => `<text class="viz-label" x="0" y="${H - 20 + i * 15}">${esc(l)}</text>`).join('')}
      </g>
      <g class="fade" style="--d:.25s">
        <rect class="growx" style="transform-origin:${W / 2 + 10}px 0" x="${W / 2 + 10}" y="40" width="${W / 2 - 10}" height="200"
              fill="var(--signal)" fill-opacity=".2"/>
        <text class="viz-value" x="${W / 2 + 10}" y="26">${esc(right.n)}</text>
        <text class="viz-title" x="${W / 2 + 10}" y="${H - 42}" style="font-size:19px">${esc(right.title)}</text>
        ${right.body.map((l, i) => `<text class="viz-label" x="${W / 2 + 10}" y="${H - 20 + i * 15}">${esc(l)}</text>`).join('')}
      </g>
      <line class="draw" style="--d:.1s" x1="${W / 2}" y1="20" x2="${W / 2}" y2="260" stroke="var(--signal)" stroke-width="2"/>
    </svg>`, caption);
}

/* ------------------------------------------------------------------ 13
   plots — plot-level geolocation, for EUDR traceability. Positions are a
   generated pattern, not real coordinates. */
export function plots({ caption, title }) {
  const id = nid('plots');
  const W = 900, H = 420;
  let seed = 7;
  const rand = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const shapes = Array.from({ length: 22 }, (_, i) => {
    const cx = 70 + rand() * (W - 200), cy = 50 + rand() * (H - 140);
    const w = 34 + rand() * 74, h = 26 + rand() * 52;
    const ok = i % 7 !== 3;
    return `<g class="pop" style="--d:${(i * 0.035).toFixed(2)}s">
      <rect x="${n(cx)}" y="${n(cy)}" width="${n(w)}" height="${n(h)}" rx="1"
            fill="${ok ? 'var(--signal)' : 'var(--amber)'}" fill-opacity="${ok ? 0.16 : 0.24}"
            stroke="${ok ? 'var(--signal)' : 'var(--amber)'}" stroke-width="1.2"/>
      <circle cx="${n(cx + w / 2)}" cy="${n(cy + h / 2)}" r="2.4" fill="${ok ? 'var(--signal)' : 'var(--amber)'}"/>
    </g>`;
  }).join('');
  return figureWrap(`
    ${svgOpen(`0 0 ${W} ${H}`, { id, text: title || 'Plot-level geolocation' },
      'A field of mapped plots, each with a centroid. One is flagged for review. Illustrative, not real coordinates.')}
      <defs><pattern id="${id}-g" width="45" height="45" patternUnits="userSpaceOnUse">
        <path d="M45 0H0v45" fill="none" stroke="currentColor" stroke-opacity=".1" stroke-width="1"/>
      </pattern></defs>
      <rect x="0" y="0" width="${W}" height="${H - 50}" fill="url(#${id}-g)"/>
      ${shapes}
      <g class="fade" style="--d:.9s">
        <circle cx="8" cy="${H - 28}" r="5" fill="var(--signal)" fill-opacity=".3" stroke="var(--signal)"/>
        <text class="viz-label" x="22" y="${H - 24}">Verified deforestation-free</text>
        <circle cx="250" cy="${H - 28}" r="5" fill="var(--amber)" fill-opacity=".4" stroke="var(--amber)"/>
        <text class="viz-label" x="264" y="${H - 24}">Flagged for review</text>
      </g>
    </svg>`, caption);
}

/* ------------------------------------------------------------------ shared */
function figureWrap(svg, caption) {
  return `<div class="figure" data-viz><div class="figure__scroll">${svg}</div>` +
    `${caption ? `<p class="figure__cap">${typo(caption)}</p>` : ''}</div>`;
}

/* Registry / standard chips. */
export function chips(items, featured = []) {
  return `<ul class="chips">` + items.map(i =>
    `<li class="chip${featured.includes(i) ? ' chip--fill' : ''}">${typo(i)}</li>`).join('') + `</ul>`;
}
