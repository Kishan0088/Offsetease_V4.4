/* =========================================================================
   OFFSETEASE — behaviour layer
   Vanilla, no dependencies, deferred. Every enhancement degrades to a
   perfectly usable static page if this file never runs.
   ========================================================================= */
(() => {
  'use strict';

  const doc = document;
  const root = doc.documentElement;
  const mqReduce = matchMedia('(prefers-reduced-motion: reduce)');
  const mqFine = matchMedia('(hover: hover) and (pointer: fine)');
  const saveData = navigator.connection && navigator.connection.saveData;

  const reduced = () => mqReduce.matches;
  const $ = (sel, ctx = doc) => ctx.querySelector(sel);
  const $$ = (sel, ctx = doc) => Array.from(ctx.querySelectorAll(sel));
  const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);

  /* ---- rAF scheduler: one loop, many subscribers ----------------------- */
  const frameJobs = new Set();
  let ticking = false;
  function onFrame(fn) {
    frameJobs.add(fn);
    return () => frameJobs.delete(fn);
  }
  function tick() {
    for (const fn of frameJobs) fn();
    ticking = false;
  }
  function requestTick() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(tick);
    }
  }
  addEventListener('scroll', requestTick, { passive: true });
  addEventListener('resize', requestTick, { passive: true });

  /* ---- Photographs: fade in once decoded ------------------------------- */
  function initPhotos() {
    $$('.ph img').forEach((img) => {
      if (img.complete && img.naturalWidth) {
        img.classList.add('is-loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
        img.addEventListener('error', () => img.classList.add('is-loaded'), { once: true });
      }
    });
  }

  /* ---- Reveal on scroll ------------------------------------------------ */
  function initReveal() {
    const targets = $$('.reveal, .kinetic, .ladder__row, .split__side');
    if (!targets.length) return;
    if (reduced() || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );
    targets.forEach((el) => io.observe(el));

    // Stagger siblings inside a group without hand-writing delays.
    $$('[data-stagger]').forEach((group) => {
      const step = Number(group.dataset.stagger) || 80;
      Array.from(group.children).forEach((child, i) => {
        child.style.setProperty('--rd', `${Math.min(i, 8) * step}ms`);
      });
    });
  }

  /* ---- Navigation ------------------------------------------------------ */
  function initNav() {
    const nav = $('[data-nav]');
    if (!nav) return;
    let last = scrollY;
    let openMenu = false;

    const update = () => {
      const y = scrollY;
      nav.classList.toggle('is-top', y < 12);
      if (!openMenu) {
        const goingDown = y > last && y > 260;
        nav.classList.toggle('is-hidden', goingDown && y - last > 2);
      }
      last = y;
    };
    onFrame(update);
    update();

    const toggle = $('[data-menu-toggle]');
    const menu = $('[data-menu]');
    if (!toggle || !menu) return;

    $$('.menu__big', menu).forEach((el, i) => el.style.setProperty('--mi', i));

    const setMenu = (open) => {
      openMenu = open;
      menu.hidden = false;
      // let `hidden` clear before the transition starts
      requestAnimationFrame(() => menu.classList.toggle('is-open', open));
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      root.classList.toggle('is-menu-open', open);
      doc.body.classList.toggle('is-menu-open', open);
      nav.classList.remove('is-hidden');
      if (open) {
        const first = $('a, button', menu);
        if (first) first.focus({ preventScroll: true });
      } else {
        setTimeout(() => {
          if (!openMenu) menu.hidden = true;
        }, 450);
        toggle.focus({ preventScroll: true });
      }
    };

    toggle.addEventListener('click', () => setMenu(!openMenu));
    menu.addEventListener('click', (e) => {
      // A link, or the backdrop either side of the content column.
      if (e.target.closest('a') || e.target === menu) setMenu(false);
    });
    doc.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && openMenu) setMenu(false);
      if (e.key === 'Tab' && openMenu) {
        const items = $$('a[href], button:not([disabled])', menu);
        if (!items.length) return;
        const first = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && doc.activeElement === first) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && doc.activeElement === lastEl) {
          e.preventDefault();
          first.focus();
        }
      }
    });
    matchMedia('(min-width: 1021px)').addEventListener('change', (e) => {
      if (e.matches && openMenu) setMenu(false);
    });
  }

  /* ---- Desktop mega-menu ----------------------------------------------- */
  function initMega() {
    $$('[data-mega-wrap]').forEach((wrap) => {
      const toggle = $('[data-mega-toggle]', wrap);
      const panel = $('[data-mega]', wrap);
      if (!toggle || !panel) return;
      let open = false;
      let closeTimer = 0;
      let openTimer = 0;

      const set = (next) => {
        open = next;
        panel.hidden = false;
        requestAnimationFrame(() => panel.classList.toggle('is-open', next));
        toggle.setAttribute('aria-expanded', String(next));
        if (!next) {
          clearTimeout(closeTimer);
          closeTimer = setTimeout(() => {
            if (!open) panel.hidden = true;
          }, 320);
        } else {
          clearTimeout(closeTimer);
        }
      };
      set(false);

      toggle.addEventListener('click', () => set(!open));
      wrap.addEventListener('pointerenter', () => {
        if (!mqFine.matches) return;
        clearTimeout(closeTimer);
        clearTimeout(openTimer);
        openTimer = setTimeout(() => set(true), 130);
      });
      wrap.addEventListener('pointerleave', () => {
        if (!mqFine.matches) return;
        clearTimeout(openTimer);
        clearTimeout(closeTimer);
        closeTimer = setTimeout(() => set(false), 260);
      });
      wrap.addEventListener('focusout', (e) => {
        if (!wrap.contains(e.relatedTarget)) set(false);
      });
      doc.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && open) {
          set(false);
          toggle.focus();
        }
      });
      doc.addEventListener('click', (e) => {
        if (open && !wrap.contains(e.target)) set(false);
      });
    });
  }

  /* ---- Mobile menu accordions ------------------------------------------ */
  function initAccordions() {
    $$('[data-acc]').forEach((btn) => {
      const group = btn.closest('.menu__group');
      if (!group) return;
      btn.addEventListener('click', () => {
        const next = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', String(next));
        group.classList.toggle('is-open', next);
      });
    });
  }

  /* ---- Pipeline: draw the rail, ignite each stage ---------------------- */
  function initStages() {
    const wrap = $('[data-stages]');
    if (!wrap) return;
    const rail = $('.stages__rail i', wrap);
    const cards = $$('[data-stage]', wrap);
    if (!rail || !cards.length) return;

    if (reduced()) {
      rail.style.width = '100%';
      cards.forEach((c) => c.classList.add('is-lit'));
      return;
    }

    onFrame(() => {
      const r = wrap.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      // 0 when the block's top reaches three-quarters down the viewport,
      // 1 once its bottom has passed the midpoint.
      const start = innerHeight * 0.75;
      const end = innerHeight * 0.35;
      const p = clamp((start - r.top) / Math.max(1, r.height + start - end));
      rail.style.width = `${(p * 100).toFixed(1)}%`;
      cards.forEach((c, i) => {
        c.classList.toggle('is-lit', p >= (i + 0.35) / cards.length);
      });
    });
  }

  /* ---- Cinematic video bands ------------------------------------------- */
  function initVideo() {
    const vids = $$('[data-video]');
    if (!vids.length) return;
    // A multi-megabyte clip is a desktop luxury, not a mobile tax.
    if (reduced() || saveData || innerWidth < 1024 || !mqFine.matches) return;
    if (!('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target;
          if (!e.isIntersecting) {
            if (!v.paused) v.pause();
            return;
          }
          if (!v.src) {
            v.src = v.dataset.video;
            v.addEventListener(
              'canplay',
              () => {
                v.classList.add('is-playing');
                v.play().catch(() => {});
              },
              { once: true }
            );
            v.load();
          } else {
            v.play().catch(() => {});
          }
        });
      },
      { rootMargin: '200px 0px' }
    );
    vids.forEach((v) => io.observe(v));
  }

  /* ---- Persistent mobile CTA ------------------------------------------- */
  function initSticky() {
    const bar = $('[data-sticky]');
    if (!bar) return;
    try {
      if (sessionStorage.getItem('oe_sticky_off') === '1') {
        bar.remove();
        return;
      }
    } catch (e) {
      /* private mode: just show it */
    }
    bar.hidden = false;
    const dismiss = $('[data-sticky-close]', bar);
    if (dismiss) {
      dismiss.addEventListener('click', () => {
        bar.classList.remove('is-up');
        setTimeout(() => bar.remove(), 450);
        try {
          sessionStorage.setItem('oe_sticky_off', '1');
        } catch (e) {
          /* nothing to do */
        }
      });
    }
    onFrame(() => {
      const max = doc.documentElement.scrollHeight - innerHeight;
      if (max <= 0) return;
      const p = scrollY / max;
      // Show past a quarter of the page, hide again over the footer CTA.
      bar.classList.toggle('is-up', p > 0.25 && p < 0.93);
    });
  }

  /* ---- Scroll progress (fallback where scroll-timeline is unsupported) -- */
  function initProgress() {
    const bar = $('.progress__bar');
    if (!bar) return;
    if (CSS.supports('animation-timeline: scroll()')) return;
    onFrame(() => {
      const max = doc.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? clamp(scrollY / max) : 0})`;
    });
  }

  /* ---- Chapter rail ---------------------------------------------------- */
  function initRail() {
    const rail = $('[data-rail]');
    if (!rail) return;
    const chapters = $$('[data-chapter]');
    if (chapters.length < 2) {
      rail.remove();
      return;
    }
    const dots = chapters.map((section, i) => {
      const dot = doc.createElement('a');
      dot.className = 'rail__dot';
      dot.href = `#${section.id}`;
      dot.innerHTML = `<i></i><span>${section.dataset.chapter}</span>`;
      dot.addEventListener('click', () => {
        // let the browser handle the smooth scroll; just pre-light the dot
        dots.forEach((d) => d.classList.remove('is-active'));
        dot.classList.add('is-active');
      });
      rail.appendChild(dot);
      return dot;
    });
    rail.style.pointerEvents = 'auto';

    onFrame(() => {
      const mid = innerHeight * 0.42;
      let active = 0;
      chapters.forEach((s, i) => {
        const r = s.getBoundingClientRect();
        if (r.top <= mid) active = i;
      });
      dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
      // Keep the rail legible: the page is light by default, so the rail
      // inverts only over the dark punctuation sections.
      const cur = chapters[active];
      rail.classList.toggle(
        'is-dark',
        /(^|\s)(on-ink|on-deep|on-abyss|story|hero)(\s|$)/.test(cur.className)
      );
    });
  }

  /* ---- Scrollytelling -------------------------------------------------- */
  function initStory() {
    $$('[data-story]').forEach((story) => {
      const scenes = $$('.story__scene', story);
      const layers = $$('.story__layer', story);
      const fill = $('.story__spine i', story);
      const count = $('.story__count', story);
      const rays = $$('.story__dial .checks__ray', story);
      if (!scenes.length) return;

      const isPinned = () => !reduced() && innerWidth > 940;

      const apply = (progress) => {
        const n = scenes.length;
        const idx = Math.min(n - 1, Math.floor(progress * n * 0.999));
        scenes.forEach((s, i) => s.classList.toggle('is-on', i === idx));
        layers.forEach((l, i) => l.classList.toggle('is-on', i === Math.min(layers.length - 1, idx)));
        rays.forEach((r, i) => r.classList.toggle('is-lit', i <= idx));
        if (fill) fill.style.height = `${clamp(progress) * 100}%`;
        if (count) {
          count.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`;
        }
      };

      const measure = () => {
        if (!isPinned()) {
          story.style.height = '';
          scenes.forEach((s) => s.classList.add('is-on'));
          layers.forEach((l, i) => l.classList.toggle('is-on', i === 0));
          rays.forEach((r) => r.classList.add('is-lit'));
          return;
        }
        // Two viewports total, however many scenes: four viewports of
        // scroll-jacking to deliver 75 words is a tax on the reader.
        story.style.height = '200vh';
      };

      measure();
      addEventListener('resize', measure, { passive: true });

      onFrame(() => {
        if (!isPinned()) return;
        const r = story.getBoundingClientRect();
        const total = story.offsetHeight - innerHeight;
        if (total <= 0) return;
        apply(clamp(-r.top / total));
      });
      apply(0);
    });
  }

  /* ---- The Five Checks: light up as the list is read ------------------- */
  function initChecks() {
    const block = $('[data-checks]');
    if (!block) return;
    const items = $$('.checks__item', block);
    const rays = $$('.checks__ray', block);
    const counter = $('[data-checks-count]', block);

    if (reduced() || !('IntersectionObserver' in window)) {
      items.forEach((i) => i.classList.add('is-lit'));
      rays.forEach((r) => r.classList.add('is-lit'));
      if (counter) counter.textContent = String(items.length);
      return;
    }

    let lit = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = items.indexOf(e.target);
          e.target.classList.add('is-lit');
          if (rays[i]) rays[i].classList.add('is-lit');
          lit = Math.max(lit, i + 1);
          if (counter) counter.textContent = String(lit);
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -34% 0px', threshold: 0.5 }
    );
    items.forEach((i) => io.observe(i));
  }

  /* ---- Count-up numbers ------------------------------------------------ */
  function initCounters() {
    const els = $$('[data-count]');
    if (!els.length) return;
    if (reduced() || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          run(e.target);
        });
      },
      { threshold: 0.6 }
    );
    els.forEach((el) => io.observe(el));

    function run(el) {
      const value = $('.fig__v', el) || el;
      const finalText = value.textContent;
      // Split the label into decoration + number + decoration, e.g.
      // "$14.80" -> ["$", "14.80", ""] and "37,798" -> ["", "37,798", ""].
      const parts = finalText.match(/^(\D*)([\d][\d,]*(?:\.\d+)?)(.*)$/s);
      if (!parts) return;
      const [, before, numText, after] = parts;
      const target = parseFloat(numText.replace(/,/g, ''));
      if (!Number.isFinite(target)) return;
      const decimals = (numText.split('.')[1] || '').length;
      // en-US so grouping stays "214,000" rather than the Indian "2,14,000"
      // that the source copy does not use.
      const fmt = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: numText.includes(','),
      });
      const dur = 1100;
      const start = performance.now();
      const step = (now) => {
        const p = clamp((now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        value.textContent = before + fmt.format(target * eased) + after;
        if (p < 1) requestAnimationFrame(step);
        else value.textContent = finalText;
      };
      requestAnimationFrame(step);
    }
  }

  /* ---- Pointer glow + subtle 3D tilt (fine pointers only) -------------- */
  function initPointer() {
    if (!mqFine.matches || reduced() || saveData) return;

    $$('.card').forEach((card) => {
      card.addEventListener(
        'pointermove',
        (e) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - r.left}px`);
          card.style.setProperty('--my', `${e.clientY - r.top}px`);
        },
        { passive: true }
      );
    });

    $$('.tilt').forEach((el) => {
      let raf = 0;
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `perspective(1100px) rotateX(${(-y * 4.5).toFixed(2)}deg) rotateY(${(x * 5.5).toFixed(2)}deg) translateZ(0)`;
        });
      };
      el.addEventListener('pointerenter', () => el.classList.add('is-tilting'));
      el.addEventListener('pointermove', onMove, { passive: true });
      el.addEventListener('pointerleave', () => {
        el.classList.remove('is-tilting');
        cancelAnimationFrame(raf);
        el.style.transform = '';
      });
    });

    // Magnetic primary buttons.
    $$('[data-magnetic]').forEach((btn) => {
      const strength = 0.24;
      btn.addEventListener(
        'pointermove',
        (e) => {
          const r = btn.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * strength;
          const y = (e.clientY - r.top - r.height / 2) * strength;
          btn.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
        },
        { passive: true }
      );
      btn.addEventListener('pointerleave', () => {
        btn.style.translate = '';
      });
    });
  }

  /* ---- Hero parallax --------------------------------------------------- */
  function initParallax() {
    if (reduced() || saveData) return;
    const layers = $$('[data-parallax]');
    if (!layers.length) return;
    onFrame(() => {
      layers.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > innerHeight + 200) return;
        const depth = Number(el.dataset.parallax) || 0.12;
        const centre = r.top + r.height / 2 - innerHeight / 2;
        el.style.translate = `0 ${(-centre * depth).toFixed(1)}px`;
      });
    });
  }

  /* ---- FAQ ------------------------------------------------------------- */
  function initFaq() {
    $$('.faq__item').forEach((item) => {
      const btn = $('.faq__q', item);
      const panel = $('.faq__a', item);
      if (!btn || !panel) return;
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        item.classList.toggle('is-open', !open);
      });
    });
  }

  /* ---- Enquiry form ---------------------------------------------------- */
  function initForm() {
    const form = $('[data-form]');
    if (!form) return;
    const status = $('[data-form-status]', form);
    const submit = $('[type="submit"]', form);
    const key = form.dataset.accessKey || '';

    // Intent-matched CTAs pass ?topic=… so the visitor does not re-state what
    // the link they just clicked already said.
    const wanted = new URLSearchParams(location.search).get('topic');
    if (wanted && form.elements.topic) {
      const match = [...form.elements.topic.options].find(
        (o) => o.value.toLowerCase() === wanted.toLowerCase()
      );
      if (match) form.elements.topic.value = match.value;
    }

    const say = (tone, msg) => {
      status.hidden = false;
      status.dataset.tone = tone;
      status.textContent = msg;
    };

    const showFieldError = (input) => {
      const wrap = input.closest('.field') || input.closest('.consent');
      const err = wrap && $('.field__err', wrap);
      const ok = input.validity.valid;
      // Screen readers need the state, not just the sentence.
      input.setAttribute('aria-invalid', String(!ok));
      if (!err) return;
      err.textContent = ok
        ? ''
        : input.type === 'checkbox'
          ? 'Please confirm this before sending.'
          : input.validationMessage;
    };

    $$('input, select, textarea', form).forEach((input) => {
      input.addEventListener('blur', () => showFieldError(input));
      input.addEventListener('change', () => showFieldError(input));
      input.addEventListener('input', () => {
        if (input.validity.valid) showFieldError(input);
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.hidden = true;

      if (!form.checkValidity()) {
        $$('input, select, textarea', form).forEach(showFieldError);
        const firstBad = $(':invalid', form);
        if (firstBad) firstBad.focus();
        say('err', 'Please check the highlighted fields.');
        return;
      }

      // Honeypot: a real person never fills this.
      if (form.elements.botcheck && form.elements.botcheck.value) return;

      if (!key) {
        say(
          'err',
          'This form is not connected yet. Please email info@offsetease.com — we reply within one business day.'
        );
        return;
      }

      submit.disabled = true;
      const labelEl = $('.btn__label', submit) || submit;
      const original = labelEl.textContent;
      labelEl.textContent = 'Sending…';

      try {
        const body = new FormData(form);
        body.append('access_key', key);
        const res = await fetch(form.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body,
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.success !== false) {
          form.reset();
          say('ok', 'Thank you — your enquiry is with us. A senior specialist replies within one business day.');
          status.focus?.();
        } else {
          throw new Error(data.message || 'Request failed');
        }
      } catch (err) {
        say(
          'err',
          'Something went wrong sending that. Please email info@offsetease.com and we will pick it up straight away.'
        );
      } finally {
        submit.disabled = false;
        labelEl.textContent = original;
      }
    });
  }

  /* ---- Boot ------------------------------------------------------------ */
  function boot() {
    initPhotos();
    initReveal();
    initNav();
    initMega();
    initAccordions();
    initStages();
    initVideo();
    initSticky();
    initProgress();
    initRail();
    initStory();
    initChecks();
    initCounters();
    initPointer();
    initParallax();
    initFaq();
    initForm();
    requestTick();
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
