/* OFFSETEASE — generative hero field.
   The logo's five ray angles drive a slow radiant emanation: particles stream
   outward from a single origin ("the source"), crossed by expanding measurement
   rings. Pure canvas 2D, paused when off-screen or hidden. */
(function () {
  'use strict';
  var canvas = document.querySelector('[data-hero-canvas]');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d', { alpha: true });
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var RAYS = [-150, -105, -60, 120, 165].map(function (d) { return d * Math.PI / 180; });
  var W = 0, H = 0, DPR = 1, ox = 0, oy = 0, scale = 1;
  var particles = [], rings = [], raf = 0, visible = true, t = 0;

  function resize() {
    var r = canvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    var narrow = W < 760;
    ox = narrow ? W * 0.74 : W * 0.70;
    oy = narrow ? H * 0.26 : H * 0.40;
    scale = Math.max(W, H) / 900;
    seed();
  }

  function rnd(a, b) { return a + Math.random() * (b - a); }

  function mkParticle(init) {
    var a = RAYS[(Math.random() * RAYS.length) | 0] + rnd(-0.10, 0.10);
    return {
      a: a,
      r: init ? rnd(40, 820) * scale : rnd(28, 60) * scale,
      v: rnd(0.16, 0.62) * scale,
      len: rnd(14, 72) * scale,
      w: rnd(0.5, 1.5),
      life: 0,
      max: rnd(340, 900)
    };
  }

  function seed() {
    var n = W < 640 ? 70 : W < 1100 ? 110 : 150;
    particles = [];
    for (var i = 0; i < n; i++) particles.push(mkParticle(true));
    rings = [];
    for (var j = 0; j < 4; j++) rings.push({ r: rnd(60, 700) * scale, v: rnd(0.10, 0.20) * scale });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    var maxR = Math.hypot(Math.max(ox, W - ox), Math.max(oy, H - oy)) * 1.05;

    // expanding measurement rings
    ctx.lineWidth = 1;
    for (var j = 0; j < rings.length; j++) {
      var g = rings[j];
      var k = g.r / maxR;
      ctx.strokeStyle = 'rgba(91,201,212,' + (0.10 * (1 - k) * (1 - k)).toFixed(4) + ')';
      ctx.beginPath();
      ctx.arc(ox, oy, g.r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // the static sunburst spine — faint, anchored to the mark's geometry
    ctx.lineWidth = 1;
    for (var s = 0; s < RAYS.length; s++) {
      var ang = RAYS[s];
      var grad = ctx.createLinearGradient(
        ox + Math.cos(ang) * 40 * scale, oy + Math.sin(ang) * 40 * scale,
        ox + Math.cos(ang) * maxR, oy + Math.sin(ang) * maxR);
      grad.addColorStop(0, 'rgba(91,201,212,0.20)');
      grad.addColorStop(1, 'rgba(91,201,212,0)');
      ctx.strokeStyle = grad;
      ctx.beginPath();
      ctx.moveTo(ox + Math.cos(ang) * 40 * scale, oy + Math.sin(ang) * 40 * scale);
      ctx.lineTo(ox + Math.cos(ang) * maxR, oy + Math.sin(ang) * maxR);
      ctx.stroke();
    }

    // streaming particles
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      var fade = Math.min(p.life / 90, 1) * Math.max(0, 1 - p.r / maxR);
      if (fade > 0.002) {
        var c = Math.cos(p.a), sn = Math.sin(p.a);
        ctx.strokeStyle = 'rgba(150,224,230,' + (fade * 0.55).toFixed(4) + ')';
        ctx.lineWidth = p.w;
        ctx.beginPath();
        ctx.moveTo(ox + c * p.r, oy + sn * p.r);
        ctx.lineTo(ox + c * (p.r + p.len), oy + sn * (p.r + p.len));
        ctx.stroke();
      }
    }

    // the ring at the origin — the O of the wordmark
    var rr = 26 * scale;
    ctx.lineWidth = Math.max(1.4, 8 * scale * 0.34);
    ctx.strokeStyle = 'rgba(91,201,212,0.55)';
    ctx.beginPath(); ctx.arc(ox, oy, rr, 0, Math.PI * 2); ctx.stroke();
    var halo = ctx.createRadialGradient(ox, oy, 0, ox, oy, rr * 7);
    halo.addColorStop(0, 'rgba(91,201,212,0.16)');
    halo.addColorStop(1, 'rgba(91,201,212,0)');
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(ox, oy, rr * 7, 0, Math.PI * 2); ctx.fill();
  }

  function step() {
    t++;
    var maxR = Math.hypot(Math.max(ox, W - ox), Math.max(oy, H - oy)) * 1.05;
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.r += p.v; p.life++;
      if (p.r > maxR || p.life > p.max) particles[i] = mkParticle(false);
    }
    for (var j = 0; j < rings.length; j++) {
      rings[j].r += rings[j].v;
      if (rings[j].r > maxR) rings[j].r = 40 * scale;
    }
    draw();
    raf = requestAnimationFrame(step);
  }

  function start() { if (!raf && visible && !reduce.matches) raf = requestAnimationFrame(step); }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }

  resize();
  if (reduce.matches) { draw(); }
  else {
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        visible = es[0].isIntersecting;
        visible ? start() : stop();
      }, { threshold: 0 }).observe(canvas);
    } else { start(); }
    document.addEventListener('visibilitychange', function () {
      document.hidden ? stop() : start();
    });
    start();
  }

  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { resize(); if (reduce.matches) draw(); }, 180);
  }, { passive: true });
})();
