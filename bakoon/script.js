/* BAKOON SCL — concept one-pager interactions.
   Vanilla JS. No dependencies. */

(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ------------------------------------------------------------------ */
  /* Header, scroll progress, year                                       */
  /* ------------------------------------------------------------------ */

  const header = document.getElementById("site-header");
  const progressBar = document.getElementById("progress-bar");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  let scrollQueued = false;

  function onScroll() {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (header) header.classList.toggle("is-scrolled", y > 24);

      if (progressBar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(y / max, 1) : 0;
        progressBar.style.width = `${(ratio * 100).toFixed(2)}%`;
      }
      scrollQueued = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ------------------------------------------------------------------ */
  /* Mobile menu                                                         */
  /* ------------------------------------------------------------------ */

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = mobileMenu ? Array.from(mobileMenu.querySelectorAll("a")) : [];

  function setMenu(open) {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
    mobileMenu.classList.toggle("is-open", open);
    document.body.classList.toggle("is-locked", open);
    if (open) {
      const first = menuLinks[0];
      if (first) window.setTimeout(() => first.focus(), 120);
    }
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 960 && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Reveal on scroll                                                    */
  /* ------------------------------------------------------------------ */

  const revealEls = Array.from(document.querySelectorAll(".reveal"));

  // Small stagger inside repeated groups.
  document.querySelectorAll(".principles, .product-grid, .craft-stats, .timeline").forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      if (child.classList.contains("reveal")) {
        child.style.setProperty("--d", String(index % 4));
      }
    });
  });

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px 40px 0px", threshold: 0.05 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* Active nav                                                          */
  /* ------------------------------------------------------------------ */

  const navLinks = Array.from(document.querySelectorAll(".desktop-nav a"));
  const navSections = navLinks
    .map((link) => {
      const id = link.getAttribute("href");
      const section = id ? document.querySelector(id) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (navSections.length && "IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const match = navSections.find((item) => item.section === entry.target);
          if (!match) return;
          navLinks.forEach((link) => link.classList.remove("is-active"));
          match.link.classList.add("is-active");
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    navSections.forEach((item) => navObserver.observe(item.section));
  }

  /* ------------------------------------------------------------------ */
  /* Hero waveform canvas                                                */
  /* ------------------------------------------------------------------ */

  const canvas = document.getElementById("wave-canvas");

  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = 1;
    let filaments = [];
    let rafId = null;
    let active = true;

    const pointer = { x: 0.7, y: 0.5, tx: 0.7, ty: 0.5 };

    function makeFilaments() {
      const count = width < 720 ? 14 : 24;
      filaments = Array.from({ length: count }, (_, i) => ({
        base: (i + 0.5) / count,
        amp: 5 + Math.random() * 24,
        freq: 0.0015 + Math.random() * 0.0036,
        speed: 0.00012 + Math.random() * 0.00042,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.035 + Math.random() * 0.1,
        copper: Math.random() > 0.26,
        bright: i % 7 === 0,
      }));
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeFilaments();
      if (reducedMotion) draw(0);
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);

      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;

      const mouseY = pointer.y * height;

      for (const f of filaments) {
        const baseY = f.base * height + (pointer.y - 0.5) * 26 * (0.35 + f.base);
        const distance = Math.abs(baseY - mouseY);
        const influence = Math.exp(-(distance * distance) / (2 * Math.pow(height * 0.2, 2)));
        const amp = f.amp * (1 + influence * 1.15);
        const color = f.copper ? "201, 138, 91" : "241, 236, 227";

        ctx.beginPath();
        for (let x = -10; x <= width + 10; x += 7) {
          const wave =
            Math.sin(x * f.freq + time * f.speed + f.phase) +
            0.34 * Math.sin(x * f.freq * 2.7 - time * f.speed * 1.6 + f.phase * 1.7);
          const y = baseY + wave * amp;
          if (x === -10) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(${color}, ${f.alpha * (1 + influence * 0.8)})`;
        ctx.lineWidth = f.bright ? 1 : 0.6;
        if (f.bright) {
          ctx.shadowBlur = 9;
          ctx.shadowColor = `rgba(${color}, 0.35)`;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
    }

    function loop(now) {
      if (!active) return;
      draw(now * 0.001);
      rafId = requestAnimationFrame(loop);
    }

    function start() {
      if (reducedMotion || rafId !== null) return;
      active = true;
      rafId = requestAnimationFrame(loop);
    }

    function stop() {
      active = false;
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
    }

    resize();
    start();

    window.addEventListener("resize", () => {
      stop();
      resize();
      if (!document.hidden) start();
    });

    if ("ResizeObserver" in window) {
      let resizing = false;
      const ro = new ResizeObserver(() => {
        if (resizing) return;
        resizing = true;
        window.requestAnimationFrame(() => {
          stop();
          resize();
          if (!document.hidden) start();
          resizing = false;
        });
      });
      ro.observe(canvas);
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else start();
    });

    if (finePointer && !reducedMotion) {
      window.addEventListener(
        "pointermove",
        (event) => {
          pointer.tx = event.clientX / window.innerWidth;
          pointer.ty = event.clientY / window.innerHeight;
        },
        { passive: true }
      );
    }
  }

  /* ------------------------------------------------------------------ */
  /* Concept form                                                        */
  /* ------------------------------------------------------------------ */

  const form = document.getElementById("listen-form");

  if (form) {
    const success = document.getElementById("form-success");
    const japanese = document.documentElement.lang === "ja";

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (success) {
        success.textContent = japanese
          ? "ありがとうございます。コンセプト用フォームのため、データは送信されていません。"
          : "Thank you. This is a concept form, so no data was sent.";
      }

      form.reset();
      const buttonLabel = form.querySelector(".form-submit span");
      if (buttonLabel) {
        const original = buttonLabel.textContent;
        buttonLabel.textContent = japanese ? "送信済み" : "Received";
        window.setTimeout(() => {
          buttonLabel.textContent = original;
        }, 2600);
      }
    });
  }
})();
