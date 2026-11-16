/* Al abrir una página se empieza siempre desde arriba (salvo enlaces a una sección con #) */
(function () {
  try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}
  var moved = false;
  ["wheel", "touchstart", "keydown", "mousedown"].forEach(function (t) { window.addEventListener(t, function () { moved = true; }, { passive: true, once: true }); });
  function top() { if (!location.hash && !moved) window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }
  top();
  document.addEventListener("DOMContentLoaded", top);
  window.addEventListener("load", function () { top(); setTimeout(top, 0); });
  window.addEventListener("pageshow", function (e) { if (e.persisted) top(); });
})();
/* Boss.Technology — interactividad en JS plano (sustituye a los componentes React del sitio Next). */
(function () {
  var C = window.BOSS || {};
  var LIGHT_PILL = ["bg-ink/[0.06]", "text-ink", "hover:bg-ink/[0.12]"];
  var DARK_PILL = ["bg-black/20", "text-white", "hover:bg-black/35"];
  var LIGHT_BAR = ["border-b", "border-ink/10", "bg-white/80", "backdrop-blur-md"];
  var DARK_BAR = ["border-b", "border-white/10", "bg-ink/85", "backdrop-blur-md"];
  var header = document.querySelector("header.fixed");

  /* Engines: sin menú desplegable ni enlaces por engine; un solo enlace a la página de Engines */
  var engHref = "";
  (function () {
    if (!header) return;
    var b = header.querySelector("nav button[aria-controls]"), bx = header.querySelector('nav a[href*="plataformas"]');
    if (!bx) return;
    engHref = bx.getAttribute("href").replace("plataformas", "aplicaciones");
    if (!b) return;
    var a = document.createElement("a");
    a.className = bx.className; a.href = engHref; a.textContent = "Engines";
    b.parentElement.replaceWith(a);
  })();
  function fixEnginesMobile(panel) {
    if (!panel || !engHref) return;
    [].slice.call(panel.querySelectorAll("p")).forEach(function (p) {
      if (p.textContent.trim() !== "Engines") return;
      var box = p.parentElement, ref = panel.querySelector("nav > a");
      var a = document.createElement("a");
      a.className = ref ? ref.className : ""; a.href = engHref; a.textContent = "Engines";
      box.replaceWith(a);
    });
  }
  (function () {
    var f = document.querySelector("footer");
    if (!f) return;
    [].slice.call(f.querySelectorAll("p")).forEach(function (p) {
      if (p.textContent.trim() !== "Engines") return;
      var ul = p.nextElementSibling;
      if (ul) [].slice.call(ul.querySelectorAll("a")).forEach(function (a) {
        var sp = document.createElement("span"); sp.className = "inline-block py-1.5 text-body-m text-white/55 lg:py-0"; sp.textContent = a.textContent; a.replaceWith(sp);
      });
      if (engHref) { var a = document.createElement("a"); a.href = engHref; a.textContent = "Engines"; a.className = "transition-colors hover:text-white"; p.textContent = ""; p.appendChild(a); }
    });
  })();

  function swap(el, from, to) { from.forEach(function (c) { el.classList.remove(c); }); to.forEach(function (c) { el.classList.add(c); }); }
  function has(el, list) { return list.every(function (c) { return el.classList.contains(c); }); }

  /* ---------- Navbar: fondo al hacer scroll y tema según la sección de detrás ---------- */
  var menuOpen = false;
  var pills = [];
  if (header) {
    header.querySelectorAll("a, button").forEach(function (el) {
      if (has(el, LIGHT_PILL) || has(el, DARK_PILL)) pills.push(el);
    });
  }
  function applyTheme(light, backdrop) {
    if (!header) return;
    pills.forEach(function (el) { light ? swap(el, DARK_PILL, LIGHT_PILL) : swap(el, LIGHT_PILL, DARK_PILL); });
    var logo = header.querySelector('a[aria-label="Boss.Technology"] > *');
    if (logo) logo.classList.toggle("[&_img]:brightness-0", light);
    header.querySelectorAll("nav p").forEach(function (p) {
      p.classList.toggle("text-ink", light); p.classList.toggle("text-white", !light);
    });
    swap(header, LIGHT_BAR.concat(DARK_BAR), []);
    /* Barra flotante: visible siempre sobre fondo claro; sobre oscuro solo al hacer scroll */
    header.setAttribute("data-bar", light ? "light" : (backdrop ? "dark" : "none"));
  }
  function sample() {
    if (!header) return;
    var els = document.elementsFromPoint(Math.round(window.innerWidth / 2), 8);
    var dark = false;
    for (var i = 0; i < els.length; i++) {
      if (header.contains(els[i])) continue;
      var m = els[i].closest && els[i].closest("[data-nav]");
      dark = !!m && m.getAttribute("data-nav") === "dark";
      break;
    }
    applyTheme(!dark, window.scrollY > 24 || menuOpen);
  }
  var raf = 0;
  function onScroll() { if (!raf) raf = requestAnimationFrame(function () { raf = 0; sample(); }); }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  sample();

  function fragment(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }

  /* ---------- Megamenú de productos ---------- */
  var megaBtn = header && header.querySelector("nav button[aria-controls]");
  if (megaBtn && C.mega) {
    var wrap = megaBtn.parentElement, panel = null, pinned = false, timer = null;
    var open = function () {
      clearTimeout(timer);
      if (!panel) { panel = fragment(C.mega); wrap.appendChild(panel); }
      megaBtn.setAttribute("aria-expanded", "true");
    };
    var close = function () {
      clearTimeout(timer); pinned = false;
      if (panel) { panel.remove(); panel = null; }
      megaBtn.setAttribute("aria-expanded", "false");
    };
    wrap.addEventListener("mouseenter", open);
    wrap.addEventListener("mouseleave", function () { if (!pinned) timer = setTimeout(close, 120); });
    megaBtn.addEventListener("click", function () { pinned = !pinned; pinned ? open() : close(); });
    megaBtn.addEventListener("focus", open);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    document.addEventListener("mousedown", function (e) { if (!wrap.contains(e.target)) close(); });
  }

  /* ---------- Menú móvil ---------- */
  var burger = header && header.querySelector('button[aria-label="Menu"]');
  if (burger && C.mobile) {
    var menuIcon = burger.innerHTML, mobilePanel = null;
    burger.addEventListener("click", function () {
      menuOpen = !menuOpen;
      if (menuOpen) { mobilePanel = fragment(C.mobile); fixEnginesMobile(mobilePanel); header.appendChild(mobilePanel); burger.innerHTML = C.xicon; }
      else { if (mobilePanel) mobilePanel.remove(); mobilePanel = null; burger.innerHTML = menuIcon; }
      burger.setAttribute("aria-expanded", String(menuOpen));
      sample();
    });
  }

  /* ---------- Titular rotativo del hero ---------- */
  var slot = document.querySelector("h1 .transition-\\[width\\]");
  var words = C.words || [];
  if (slot && words.length > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var sizer = slot.parentElement.querySelector(".invisible");
    var idx = 0;
    var measure = function () { if (sizer) slot.style.width = sizer.offsetWidth + 1 + "px"; };
    measure();
    setInterval(function () {
      idx = (idx + 1) % words.length;
      if (sizer) sizer.textContent = words[idx];
      var inner = document.createElement("span");
      inner.className = "inline-block animate-in fade-in duration-500";
      inner.textContent = words[idx];
      slot.replaceChildren(inner);
      measure();
    }, 2200);
  }

  /* ---------- Productos: la tarjeta activa cambia el dashboard ---------- */
  var cards = document.querySelectorAll("#productos .mt-10 a");
  var dash = document.querySelector("#productos .mt-10 > div:last-child");
  if (cards.length && dash && C.dash) {
    var activate = function (i) {
      cards.forEach(function (c, j) {
        var on = i === j;
        on ? c.setAttribute("aria-current", "true") : c.removeAttribute("aria-current");
        c.classList.toggle("ring-accent-base/70", on);
        c.classList.toggle("ring-transparent", !on);
        c.classList.toggle("hover:ring-white/15", !on);
      });
      if (C.dash[i]) dash.innerHTML = C.dash[i];
    };
    cards.forEach(function (c, i) { c.addEventListener("mouseenter", function () { activate(i); }); c.addEventListener("focus", function () { activate(i); }); });
  }

  /* ---------- Carrusel del blog ---------- */
  document.querySelectorAll(".snap-x.overflow-x-auto").forEach(function (track) {
    var section = track.closest("section");
    if (!section) return;
    var btns = section.querySelectorAll("button[aria-label]");
    if (btns.length < 2) return;
    var go = function (dir) { var card = track.firstElementChild; var w = card ? card.getBoundingClientRect().width + 30 : track.clientWidth; track.scrollBy({ left: w * dir, behavior: "smooth" }); };
    btns[0].addEventListener("click", function () { go(-1); });
    btns[1].addEventListener("click", function () { go(1); });
  });

  /* ---------- Formularios de contacto y reclutamiento: envían a /api/contact ---------- */
  var EN = C.lang === "en";
  var MSG = {
    required: EN ? "Please fill in your name, a valid email and a message." : "Completa tu nombre, un correo válido y un mensaje.",
    sending: EN ? "Sending…" : "Enviando…",
    ok: EN ? "Thanks! We received your message and will get back to you soon." : "¡Gracias! Recibimos tu mensaje y te responderemos pronto.",
    fail: EN ? "We couldn't send your message. Please try again or write to admin@boss.technology." : "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a admin@boss.technology."
  };
  document.querySelectorAll("form").forEach(function (f) {
    var hp = document.createElement("input"); // trampa anti-spam: invisible para personas
    hp.type = "text"; hp.name = "website"; hp.tabIndex = -1; hp.autocomplete = "off"; hp.setAttribute("aria-hidden", "true");
    hp.style.cssText = "position:absolute;left:-9999px;width:1px;height:1px;opacity:0";
    f.appendChild(hp);
    var btn = f.querySelector('button[type="submit"]');
    function note(text, bad) {
      var n = f.querySelector(".boss-form-note");
      if (!n) { n = document.createElement("p"); n.className = "boss-form-note mt-4 text-body-m"; n.setAttribute("role", "status"); n.setAttribute("aria-live", "polite"); f.appendChild(n); }
      n.textContent = text; n.style.color = bad ? "#e5484d" : "";
      n.classList.toggle("text-accent-base", !bad);
    }
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {};
      [].forEach.call(f.elements, function (el) { if (el.name) data[el.name] = (el.value || "").trim(); });
      var bad = false;
      [["firstName", !data.firstName], ["email", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")], ["message", !data.message]].forEach(function (r) {
        var el = f.elements[r[0]]; if (!el) return;
        el.setAttribute("aria-invalid", r[1] ? "true" : "false"); if (r[1]) bad = true;
      });
      if (bad) { note(MSG.required, true); return; }
      data.form = /reclutamiento/.test(location.pathname) ? "reclutamiento" : "contacto";
      data.lang = C.lang || "es"; data.page = location.href;
      if (btn) btn.disabled = true;
      note(MSG.sending);
      fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error(r.status); f.reset(); note(MSG.ok); })
        .catch(function () { note(MSG.fail, true); })
        .then(function () { if (btn) btn.disabled = false; });
    });
  });
})();

/* ---------- Aparición suave al hacer scroll (todas las páginas) ---------- */
(function () {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var sel = ["main section .sec-head", "main section header", ".sec-title", ".sec-sub", ".pd-card", ".ns-card", ".bz-card", ".bo-l", ".ia-grid article",
    ".ia-vs article", ".team-card", ".tr-i", ".cx-row", ".blog3 > article", "#blog article", ".bz-h2", ".bz-lead", ".bo-loop li", ".ia-steps li", ".vz", ".bo-bridge"].join(",");
  var skip = "#hero, #objetivos, #bzzzbx, header.fixed, footer";
  var els = [].slice.call(document.querySelectorAll(sel)).filter(function (el) {
    return !el.closest(skip) && !el.parentElement.closest(".mo-in") && el.getBoundingClientRect().top > window.innerHeight * .9;
  });
  els.forEach(function (el) {
    var sib = el.parentElement ? [].indexOf.call(el.parentElement.children, el) : 0;
    el.style.setProperty("--mo-d", (Math.min(sib, 5) * .08) + "s");
    el.classList.add("mo-in");
  });
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("mo-on"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: .08 });
  els.forEach(function (el) { io.observe(el); });
})();

/* ---------- CTA de cierre: segundo botón y garantías ---------- */
(function () {
  var box = document.querySelector("section.sec-cta > div.relative");
  if (!box) return;
  var en = (window.BOSS || {}).lang === "en" || document.documentElement.lang === "en";
  var row = box.querySelector(".mt-7"), bx = document.querySelector('header a[href*="plataformas"]');
  if (row && bx && !row.querySelector(".cta-2")) {
    var a = document.createElement("a");
    a.className = "cta-2 inline-flex shrink-0 items-center justify-center gap-2 rounded-pill px-7 font-display whitespace-nowrap";
    a.href = bx.getAttribute("href"); a.textContent = en ? "Discover BzzzBX" : "Conoce BzzzBX";
    row.appendChild(a);
  }
  var items = en ? ["In your cloud or data center", "Your data never leaves", "Works with your systems"]
                 : ["En tu nube o centro de datos", "Tu dato no sale", "Se integra con tus sistemas"];
  var ul = document.createElement("ul"); ul.className = "cta-checks";
  ul.innerHTML = items.map(function (t) { return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.3 2.3 4.7-5"/></svg>' + t + "</li>"; }).join("");
  box.appendChild(ul);
})();

/* ---------- Menú: resalta la sección en la que está el visitante ---------- */
(function () {
  var header = document.querySelector("header.fixed");
  if (!header) return;
  function key(p) {
    p = (p || "").toLowerCase();
    if (/\/casos(\/|\.html$)/.test(p)) return "casos";
    if (/productos\/aplicaciones\.html$/.test(p)) return "engines";
    var m = p.match(/(plataformas|ia-aplicada|bo11y|compania)\.html$/);
    return m ? m[1] : "";
  }
  var cur = key(location.pathname);
  if (!cur) return;
  function mark(root) {
    root.querySelectorAll("a[href]").forEach(function (a) {
      if (a.closest("[id^='_R_']")) return;            // no marcar dentro del megamenú
      if (a.closest("p") || a.hasAttribute("aria-current")) return;   // no tocar el selector de idioma
      if (key(a.pathname) === cur) a.setAttribute("aria-current", "page");
    });
  }
  mark(header.querySelector("nav") || header);
  // el menú móvil se crea al abrirlo: se marca cuando aparece
  new MutationObserver(function (ms) {
    ms.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.nodeType === 1 && !n.matches("nav, nav *")) mark(n); }); });
  }).observe(header, { childList: true });
})();

/* ---------- Abejita: progreso de lectura, footer, toasts y enjambre secreto ---------- */
(function () {
  var en = (window.BOSS || {}).lang === "en" || document.documentElement.lang === "en";
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var BEE = '<svg class="bee-ico" viewBox="0 0 31.59 31.25" aria-hidden="true" fill="currentColor">' +
    '<path d="M29.8054 6.99097V5.25833H24.5636V6.99097H22.7544V10.4784H21.0744V5.24826H19.1402V1.82128H20.909V0.0443231H19.1301V1.82128H17.3613V5.24826H14.096V1.77695H12.3272V0H10.5422V1.77695H12.3151V5.24826H10.51V10.4784H8.82989V6.99097H7.02075V5.25833H1.77889V6.99097H0V12.2694H1.77889V14.0303H5.24187V15.7528H8.83191V14.0303H10.5805V12.1687H21.0078V14.0303H22.7564V15.7528H26.3465V14.0303H29.8095V12.2694H31.5883V6.99097ZM14.0435 9.63625H12.2646V6.84389H14.0435ZM19.3197 9.63625H17.5408V6.84389H19.3197Z"/>' +
    '<path transform="translate(12.06 13.54)" d="M5.27414 0H0V9.14467H5.36288C5.90744 9.14467 6.93403 8.5322 7.27286 8.09098C8.06549 7.06148 8.06146 4.79697 6.53872 4.44037C8.28332 2.96965 7.62783 0.278027 5.27414 0ZM2.3537 1.74069H4.28587C4.76588 1.74069 5.15917 2.13355 5.15917 2.61305V2.7843C5.15917 3.26379 4.76588 3.65666 4.28587 3.65666H2.3537ZM5.47582 6.35634C5.47582 6.93254 5.00387 7.40196 4.42906 7.40196H2.3537V5.26841H4.42906C5.00589 5.26841 5.47582 5.73984 5.47582 6.31403Z"/>' +
    '<path transform="translate(3.6 17.22)" d="M5.21968 0H1.7083V1.77695H0V3.55391H1.77889V1.77695H5.21968Z"/><rect x="9.34" y="17.22" width="1.78" height="1.78"/>' +
    '<path transform="translate(7 20.67)" d="M15.9959 1.80919H17.7284V0.0322357H15.9495V1.80919H14.217V3.49145H3.55777V1.77696H1.82729V0H0.0484054V1.77696H1.77889V3.48541H0V6.99097H1.77889V3.55391H3.55777V5.26841H5.24388V7.02522H7.21034V8.79814H8.05944V10.5751H9.83833V8.79814H10.6733V7.02522H12.6398V5.26841H14.2311V3.58615H15.9959V7.02119H17.7747V3.51563H15.9959Z"/>' +
    '<path transform="translate(22.96 17.25)" d="M3.50937 0H0V1.77695H3.44079V3.55391H5.21968V1.77695H3.50937Z"/><rect x="20.66" y="17.25" width="1.78" height="1.78"/></svg>';
  window.BOSS_BEE = BEE;

  /* Toast con la voz de la abeja */
  var toastEl = null, toastT = 0;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "bee-toast"; toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.innerHTML = BEE + "<span></span>"; toastEl.lastChild.textContent = msg;
    requestAnimationFrame(function () { toastEl.classList.add("on"); });
    clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove("on"); }, 2600);
  }
  window.BOSS_TOAST = toast;
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest(".pst-copy")) toast(en ? "Bzzz, link copied" : "Bzzz, enlace copiado");
  });
  document.querySelectorAll("form").forEach(function (f) {
    f.addEventListener("submit", function () {
      setTimeout(function () {
        var n = f.querySelector(".boss-demo-note");
        if (n && n.textContent.indexOf("Bzzz") < 0) n.textContent = "Bzzz. " + n.textContent;
      }, 0);
    });
  });

  /* 2. La abeja posada en el wordmark del footer */
  var wm = document.querySelector('footer img[src*="wordmark-footer"]');
  var fbee = null;
  if (wm && wm.parentElement) {
    fbee = document.createElement("button"); fbee.type = "button"; fbee.className = "ft-bee";
    fbee.setAttribute("aria-label", en ? "Bzzz" : "Bzzz"); fbee.innerHTML = BEE;
    wm.parentElement.appendChild(fbee);
    var flying = false;
    var fly = function () {
      if (flying || reduce) return; flying = true; fbee.classList.add("fly");
      setTimeout(function () { fbee.classList.remove("fly"); flying = false; }, 2700);
    };
    fbee.addEventListener("mouseenter", fly);
  }

  /* 4. Enjambre secreto: escribe "bzzz" o haz 5 clics rápidos en la abeja del footer */
  function swarm() {
    if (reduce) { toast("Bzzz."); return; }
    if (document.querySelector(".bee-swarm")) return;
    var box = document.createElement("div"); box.className = "bee-swarm"; box.setAttribute("aria-hidden", "true");
    document.body.appendChild(box);
    var W = window.innerWidth, H = window.innerHeight, n = W < 700 ? 14 : 26, cx = W * .5, cy = H * .5;
    for (var i = 0; i < n; i++) {
      var s = document.createElement("span"); s.innerHTML = BEE; var sz = 14 + Math.random() * 18;
      s.style.width = sz + "px"; s.firstChild.style.width = "100%";
      var y0 = Math.random() * H, fromLeft = i % 2 === 0, x0 = fromLeft ? -40 : W + 40;
      var mx = cx + (Math.random() - .5) * W * .5, my = cy + (Math.random() - .5) * H * .5;
      var x1 = fromLeft ? W + 60 : -60, y1 = Math.random() * H, d = 2200 + Math.random() * 1200;
      box.appendChild(s);
      s.animate([
        { transform: "translate(" + x0 + "px," + y0 + "px) rotate(0deg)" },
        { transform: "translate(" + mx + "px," + my + "px) rotate(" + (fromLeft ? 12 : -12) + "deg)", offset: .5 },
        { transform: "translate(" + x1 + "px," + y1 + "px) rotate(0deg)" }
      ], { duration: d, delay: Math.random() * 500, easing: "ease-in-out", fill: "both" });
    }
    setTimeout(function () { box.remove(); toast(en ? "Bzzz. The hive says hi." : "Bzzz. La colmena te saluda."); }, 3900);
  }
  window.BOSS_SWARM = swarm;
  var typed = "";
  document.addEventListener("keydown", function (e) {
    var t = e.target; if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    if (!e.key || e.key.length !== 1) return;
    typed = (typed + e.key.toLowerCase()).slice(-4);
    if (typed === "bzzz") { typed = ""; swarm(); }
  });
  if (fbee) {
    var clicks = [];
    fbee.addEventListener("click", function () {
      var now = Date.now(); clicks = clicks.filter(function (c) { return now - c < 1600; }); clicks.push(now);
      if (clicks.length >= 5) { clicks = []; swarm(); }
    });
  }
})();

/* Equipo de abejas en el hero de Compañía (orgánico, alineado a la izquierda) */
(function () {
  var h = document.querySelector("section.ch"); if (!h || !window.BOSS_BEE || h.querySelector(".ch-team")) return;
  var cols = ["#9692ff","#b8b4ff","#7fb6e6","#9cc9b4","#e3c98f","#e8ab97","#d9a3c2","#a2a2b5","#c9c3f2","#86c2c4","#f0eee6","#b5a6e8"];
  var t = document.createElement("div"); t.className = "ch-team"; t.setAttribute("aria-hidden", "true");
  for (var i = 0; i < 20; i++) {
    var s = document.createElement("span"); s.innerHTML = window.BOSS_BEE;
    s.style.color = cols[Math.floor(Math.random() * cols.length)];
    s.style.setProperty("--s", (0.72 + Math.random() * 0.5).toFixed(2));
    s.style.setProperty("--r", (Math.random() * 26 - 13).toFixed(0) + "deg");
    s.style.marginBottom = Math.round(Math.random() * 16) + "px";
    s.style.marginLeft = (i ? Math.round(Math.random() * 12 - 2) : 0) + "px";
    s.style.setProperty("--d", (0.3 + i * 0.045 + Math.random() * 0.12).toFixed(2) + "s");
    t.appendChild(s);
  }
  h.appendChild(t);
  var tx = h.querySelector(".ch-txt");
  var place = function () { if (tx) t.style.paddingLeft = Math.max(16, tx.getBoundingClientRect().left - h.getBoundingClientRect().left) + "px"; };
  place(); window.addEventListener("resize", place);
  /* Vida del equipo: de vez en cuando una abejita salta y saluda */
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var bees = [].slice.call(t.children), vis = true, last = -1;
  if ("IntersectionObserver" in window) new IntersectionObserver(function (e) { vis = e[0].isIntersecting; }).observe(h);
  var wave = function () {
    if (vis && !document.hidden) {
      var n = Math.random() < 0.25 ? 2 : 1;
      for (var k = 0; k < n; k++) {
        var j; do { j = Math.floor(Math.random() * bees.length); } while (j === last && bees.length > 1);
        last = j; var b = bees[j];
        b.classList.remove("wave", "wave2"); void b.offsetWidth;
        b.classList.add(Math.random() < 0.5 ? "wave" : "wave2");
      }
    }
    setTimeout(wave, 1600 + Math.random() * 2400);
  };
  setTimeout(wave, 2600);
})();

/* Abeja de celebración bajo el año de fundación (2025) en la trayectoria */
(function () {
  if (!window.BOSS_BEE) return;
  var y = [].slice.call(document.querySelectorAll(".tr-i.boss .tr-y")).filter(function (e) { return e.textContent.trim() === "2025"; })[0];
  if (!y || y.querySelector(".tr-bee")) return;
  var b = document.createElement("span"); b.className = "tr-bee"; b.setAttribute("aria-hidden", "true"); b.innerHTML = window.BOSS_BEE;
  var cols = ["#4e49f2", "#9692ff", "#e3c98f", "#7fb6e6", "#e8ab97", "#9cc9b4"];
  for (var i = 0; i < 12; i++) { var c = document.createElement("i"); c.style.setProperty("--a", (i * 30 + Math.random() * 14) + "deg"); c.style.setProperty("--c", cols[i % cols.length]); b.appendChild(c); }
  y.appendChild(b);
  var play = function () { b.classList.remove("go"); void b.offsetWidth; b.classList.add("go"); };
  /* Se activa sola al llegar al hito (apenas es visible) y vuelve a celebrar cada vez que regresas */
  var li = y.closest(".tr-i") || y;
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) play(); else b.classList.remove("go");
    }, { rootMargin: "0px 0px -15% 0px", threshold: 0 });
    io.observe(li);
  } else play();
})();

/* Bo11y: al cargar, una abejita salta de Ver a Entender a Actuar e ilumina cada tarjeta */
(function () {
  var loop = document.querySelector(".bo-hero .bo-loop");
  if (!loop || !window.BOSS_BEE || !loop.animate) return;
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var items = [].slice.call(loop.children); if (items.length < 3) return;
  var bee = document.createElement("span"); bee.className = "bo-bee"; bee.setAttribute("aria-hidden", "true"); bee.innerHTML = window.BOSS_BEE;
  loop.appendChild(bee);
  var W = 26;
  var spot = function (li) {
    var ic = li.querySelector(".bz-ic") || li, r = ic.getBoundingClientRect(), L = loop.getBoundingClientRect();
    return { x: r.left - L.left + r.width / 2 - W / 2, y: r.top - L.top - W + 4 };
  };
  var tf = function (x, y, extra) { return "translate(" + x + "px," + y + "px)" + (extra || ""); };
  var hop = function (a, b, dur) {
    var top = Math.min(a.y, b.y) - 46;
    return bee.animate([
      { transform: tf(a.x, a.y) },
      { transform: tf((a.x + b.x) / 2, top, " rotate(-12deg)"), offset: 0.5 },
      { transform: tf(b.x, b.y, " scale(1.1,.88)"), offset: 0.88 },
      { transform: tf(b.x, b.y) }
    ], { duration: dur, easing: "ease-in-out", fill: "forwards" }).finished;
  };
  var light = function (li) { li.classList.remove("lit"); void li.offsetWidth; li.classList.add("lit"); };
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var run = function () {
    var p = items.slice(0, 3).map(spot), start = { x: p[0].x - 70, y: p[0].y - 30 };
    bee.style.opacity = "1";
    bee.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 250, fill: "forwards" });
    hop(start, p[0], 560)
      .then(function () { light(items[0]); return wait(380); })
      .then(function () { return hop(p[0], p[1], 460); })
      .then(function () { light(items[1]); return wait(380); })
      .then(function () { return hop(p[1], p[2], 460); })
      .then(function () { light(items[2]); return wait(650); })
      .then(function () {
        /* Vuelo de salida: zigzag hacia la derecha, como una abeja, desvaneciéndose */
        var x0 = p[2].x, y0 = p[2].y, D = Math.max(260, loop.getBoundingClientRect().width - x0 + 140), k = [];
        var pts = [[0, 0, 0, 1], [.08, -34, -14, 1], [.2, -18, 12, 1], [.34, -58, -8, .95], [.48, -40, 16, .85], [.62, -82, -10, .7], [.76, -64, 14, .5], [.9, -104, -6, .25], [1, -120, 4, 0]];
        pts.forEach(function (q) { k.push({ transform: tf(x0 + q[0] * D, y0 + q[1], " rotate(" + q[2] + "deg)"), opacity: q[3] }); });
        return bee.animate(k, { duration: 1150, easing: "cubic-bezier(.4,.1,.6,1)", fill: "forwards" }).finished;
      })
      .then(function () { bee.remove(); })
      .catch(function () { bee.remove(); });
  };
  var go = function () { setTimeout(run, 900); };
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { io.disconnect(); go(); } }, { threshold: 0.5 });
    io.observe(loop);
  } else go();
})();
