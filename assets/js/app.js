/* OFFSETEASE — interaction + motion runtime. No dependencies. */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ------------------------------------------------------------- reveal */
  function initReveal() {
    var items = $$('[data-reveal], [data-viz], .lines');
    if (!items.length) return;
    if (reduce.matches || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add('is-in');
        // stagger direct children that opt in
        var group = el.getAttribute('data-stagger');
        if (group) {
          $$(':scope > *', el).forEach(function (child, i) {
            child.style.setProperty('--d', (i * parseFloat(group)) + 's');
            child.classList.add('is-in');
          });
        }
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* --------------------------------------------- stagger delay assignment */
  function initStagger() {
    $$('[data-stagger-children]').forEach(function (el) {
      var step = parseFloat(el.getAttribute('data-stagger-children')) || 0.08;
      $$(':scope > *', el).forEach(function (c, i) {
        c.style.setProperty('--d', (i * step).toFixed(3) + 's');
      });
    });
  }

  /* ----------------------------------------------------- scroll engine */
  var scrubbers = [], parallaxers = [], stickies = [], ticking = false;
  function collect() {
    scrubbers = $$('[data-scrub]');
    parallaxers = $$('[data-parallax]');
    stickies = $$('[data-sticky]');
  }
  function frame() {
    ticking = false;
    var vh = window.innerHeight;

    scrubbers.forEach(function (el) {
      var r = el.getBoundingClientRect();
      // 0 when the element's top hits the bottom of the viewport, 1 when its bottom leaves the top
      var total = r.height + vh;
      var p = total > 0 ? (vh - r.top) / total : 0;
      p = p < 0 ? 0 : p > 1 ? 1 : p;
      el.style.setProperty('--p', p.toFixed(4));
    });

    parallaxers.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      var amt = parseFloat(el.getAttribute('data-parallax')) || 0.12;
      var centre = r.top + r.height / 2 - vh / 2;
      // clamp so an unusually tall viewport (or zoom) can never shear the layout
      var cap = r.height * 0.16;
      var off = -centre * amt;
      if (off > cap) off = cap; else if (off < -cap) off = -cap;
      el.style.setProperty('--py', off.toFixed(2) + 'px');
      el.style.transform = 'translate3d(0,' + off.toFixed(2) + 'px,0)';
    });

    stickies.forEach(function (el) {
      var steps = $$('[data-step]', el);
      if (!steps.length) return;
      var active = 0, best = Infinity;
      steps.forEach(function (s, i) {
        var r = s.getBoundingClientRect();
        var d = Math.abs(r.top + r.height / 2 - vh / 2);
        if (d < best) { best = d; active = i; }
      });
      if (el.__active === active) return;
      el.__active = active;
      steps.forEach(function (s, i) { s.setAttribute('data-active', i === active ? 'true' : 'false'); });
      $$('[data-stage]', el).forEach(function (s, i) {
        s.setAttribute('data-active', i === active ? 'true' : 'false');
      });
      el.style.setProperty('--step', active);
    });

    // global reading progress on the ray indicator
    if (rayArc) {
      var h = document.documentElement.scrollHeight - vh;
      var gp = h > 0 ? window.scrollY / h : 0;
      gp = gp < 0 ? 0 : gp > 1 ? 1 : gp;
      rayArc.style.strokeDashoffset = (RAY_C * (1 - gp)).toFixed(2);
      rayWrap.setAttribute('data-on', window.scrollY > 400 ? 'true' : 'false');
    }
  }
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(frame);
  }

  var rayWrap = null, rayArc = null, RAY_C = 0;
  function initRayProgress() {
    if (reduce.matches) return;
    rayWrap = $('.rayprog');
    if (!rayWrap) return;
    rayArc = $('.rayprog__arc', rayWrap);
    if (!rayArc) return;
    var r = parseFloat(rayArc.getAttribute('r'));
    RAY_C = 2 * Math.PI * r;
    rayArc.style.strokeDasharray = RAY_C;
    rayArc.style.strokeDashoffset = RAY_C;
  }

  /* --------------------------------------------------------- counters */
  function initCounters() {
    var els = $$('[data-count]');
    if (!els.length) return;
    if (reduce.matches || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target; io.unobserve(el);
        var raw = el.getAttribute('data-count');
        var target = parseFloat(raw.replace(/[^0-9.\-]/g, ''));
        if (isNaN(target)) { el.textContent = raw; return; }
        var prefix = raw.slice(0, raw.search(/[0-9.\-]/));
        var suffix = raw.slice(raw.search(/[0-9.\-]/)).replace(/^[0-9.,\-]+/, '');
        var dp = (raw.split('.')[1] || '').replace(/[^0-9]/g, '').length;
        var t0 = null, dur = 1500;
        function step(t) {
          if (t0 === null) t0 = t;
          var k = Math.min((t - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - k, 4);
          var v = target * eased;
          el.textContent = prefix + v.toFixed(dp).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
          if (k < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------- svg draw len */
  function initDrawLengths() {
    $$('.draw').forEach(function (el) {
      if (typeof el.getTotalLength !== 'function') return;
      try {
        var len = el.getTotalLength();
        if (len) el.style.setProperty('--len', Math.ceil(len));
      } catch (e) { /* non-path */ }
    });
  }

  /* --------------------------------------------------------------- nav */
  function initNav() {
    var nav = $('.nav');
    if (!nav) return;
    var last = window.scrollY, hero = $('.hero');

    function navState() {
      var y = window.scrollY;
      var threshold = hero ? Math.max(hero.offsetHeight - 120, 120) : 80;
      nav.classList.toggle('nav--solid', y > threshold);
      if (y > last && y > threshold + 200 && !root.hasAttribute('data-menu')) {
        nav.classList.add('nav--hidden');
      } else {
        nav.classList.remove('nav--hidden');
      }
      last = y;
    }
    window.addEventListener('scroll', navState, { passive: true });
    navState();

    // desktop mega menus
    var items = $$('.nav__item', nav);
    var closeTimer;
    function closeAll(except) {
      items.forEach(function (it) {
        if (it === except) return;
        it.setAttribute('data-open', 'false');
        var b = $('.nav__link', it);
        if (b && b.hasAttribute('aria-expanded')) b.setAttribute('aria-expanded', 'false');
      });
    }
    items.forEach(function (it) {
      var panel = $('.mega', it);
      if (!panel) return;
      var btn = $('.nav__link', it);
      function open() {
        clearTimeout(closeTimer);
        closeAll(it);
        it.setAttribute('data-open', 'true');
        btn.setAttribute('aria-expanded', 'true');
      }
      function close() { it.setAttribute('data-open', 'false'); btn.setAttribute('aria-expanded', 'false'); }
      it.addEventListener('mouseenter', open);
      it.addEventListener('mouseleave', function () { closeTimer = setTimeout(close, 140); });
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        it.getAttribute('data-open') === 'true' ? close() : open();
      });
      it.addEventListener('keydown', function (e) { if (e.key === 'Escape') { close(); btn.focus(); } });
    });
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) closeAll(null);
    });

    // mobile drawer
    var toggle = $('.nav__toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = root.getAttribute('data-menu') === 'open';
        if (open) { root.removeAttribute('data-menu'); document.body.style.overflow = ''; }
        else { root.setAttribute('data-menu', 'open'); document.body.style.overflow = 'hidden'; }
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    }
    $$('.drawer__head').forEach(function (h) {
      h.addEventListener('click', function () {
        var g = h.closest('.drawer__group');
        var open = g.getAttribute('data-open') === 'true';
        g.setAttribute('data-open', open ? 'false' : 'true');
        h.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.getAttribute('data-menu') === 'open') {
        root.removeAttribute('data-menu'); document.body.style.overflow = '';
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --------------------------------------------------------------- faq */
  function initFaq() {
    $$('.faq__q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq__item');
        var open = item.getAttribute('data-open') === 'true';
        item.setAttribute('data-open', open ? 'false' : 'true');
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    });
  }

  /* -------------------------------------------------------------- form */
  function initForm() {
    var form = $('[data-form]');
    if (!form) return;
    var status = $('.form__status', form);
    form.addEventListener('submit', function (e) {
      var ok = true;
      $$('.field', form).forEach(function (f) {
        var input = $('input, textarea', f);
        if (!input || !input.required) return;
        var valid = input.value.trim() !== '' && (input.type !== 'email' || /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(input.value));
        f.setAttribute('data-invalid', valid ? 'false' : 'true');
        if (!valid) ok = false;
      });
      if (!ok) { e.preventDefault(); return; }
      if (!form.getAttribute('action')) {
        // no endpoint configured — hand off to the mail client, and say so
        e.preventDefault();
        var get = function (n) { var el = form.elements[n]; return el ? el.value.trim() : ''; };
        var body = 'Name: ' + get('name') + '\nCompany: ' + get('company') +
                   '\nWork email: ' + get('email') + '\n\n' + get('context');
        window.location.href = 'mailto:' + (form.getAttribute('data-mailto') || 'info@offsetease.com') +
          '?subject=' + encodeURIComponent('Briefing request — ' + (get('company') || get('name'))) +
          '&body=' + encodeURIComponent(body);
        if (status) { status.setAttribute('data-show', 'true'); }
      }
    });
    $$('.field input, .field textarea', form).forEach(function (i) {
      i.addEventListener('input', function () { i.closest('.field').setAttribute('data-invalid', 'false'); });
    });
  }

  /* ------------------------------------------------------------ images */
  function initBlurUp() {
    $$('img.blurup').forEach(function (img) {
      if (img.complete && img.naturalWidth) { img.classList.add('is-loaded'); return; }
      img.addEventListener('load', function () { img.classList.add('is-loaded'); }, { once: true });
      img.addEventListener('error', function () { img.classList.add('is-loaded'); }, { once: true });
    });
  }

  /* --------------------------------------------------------------- go */
  function init() {
    root.classList.add('js');
    if (/[?&]motion=off\b/.test(location.search)) root.classList.add('motion-off');
    initStagger();
    initDrawLengths();
    initReveal();
    initCounters();
    initNav();
    initFaq();
    initForm();
    initBlurUp();
    initRayProgress();
    collect();
    if (!reduce.matches) {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
    }
    frame();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
