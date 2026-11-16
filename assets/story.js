/* Home · storytelling scroll-driven. Sin dependencias.
   #objetivos : un objetivo al centro y preguntas flotando (retail → minería → banca y finanzas)
   #bzzzbx    : caja épica (fuentes → caja → resultados) y luego la caja se abre en capas translúcidas */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var seg = function (p, a, b) { return clamp((p - a) / (b - a), 0, 1); };
  var ease = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
  var all = function (root, sel) { return [].slice.call(root.querySelectorAll(sel)); };
  function progress(sec) {
    var r = sec.getBoundingClientRect(), span = r.height - window.innerHeight;
    return span <= 0 ? 0 : clamp(-r.top / span, 0, 1);
  }
  function scrollToP(sec, p) {
    var r = sec.getBoundingClientRect(), span = r.height - window.innerHeight;
    var top = window.pageYOffset + r.top + p * span;
    window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
  }
  function onFrame(fn) {
    var tick = false;
    function run() { tick = false; fn(); }
    window.addEventListener("scroll", function () { if (!tick) { tick = true; requestAnimationFrame(run); } }, { passive: true });
    window.addEventListener("resize", function () { fn(true); });
  }

  /* ═════════ 1 · ¿Qué afecta tus objetivos? ═════════ */
  (function () {
    var sec = document.getElementById("objetivos");
    if (!sec) return;
    var stage = sec.querySelector(".go-stage");
    var sets = all(sec, ".go-set"), goals = all(sec, ".go-goal"), pills = all(sec, ".go-pill");
    var bridge = sec.querySelector(".go-bridge");
    var n = sets.length, cur = 0;

    function paintStatic(i) {
      cur = i;
      sets.forEach(function (el, k) { el.classList.toggle("on", k === i); el.style.setProperty("--q", 1); el.style.setProperty("--x", 0); });
      goals.forEach(function (el, k) { el.classList.toggle("on", k === i); el.setAttribute("aria-hidden", k === i ? "false" : "true"); });
      pills.forEach(function (el, k) { el.setAttribute("aria-selected", k === i ? "true" : "false"); });
      stage.style.setProperty("--rq", 1); stage.style.setProperty("--rx", 0);
    }

    if (reduce) {
      paintStatic(0);
      pills.forEach(function (b, i) { b.addEventListener("click", function () { paintStatic(i); }); });
      return;
    }

    // Sin scroll-jacking: la sección se desplaza normal y los sectores pasan solos (y con clic en las pestañas)
    sec.classList.add("is-auto");
    var D = 6500, f = 0, prev = 0, vis = false, hold = false, raf = 0;
    function render() {
      var s = Math.floor(f) % n, u = f - Math.floor(f);
      sets.forEach(function (el, i) {
        var q = i === s ? seg(u, .02, .4) : 0, x = i === s ? seg(u, .9, 1) : 0;
        el.classList.toggle("on", i === s);
        el.style.setProperty("--q", q.toFixed(3)); el.style.setProperty("--x", ease(x).toFixed(3));
      });
      goals.forEach(function (el, i) {
        var g = i === s ? ease(seg(u, 0, .1)) * (1 - ease(seg(u, .92, 1))) : 0;
        el.style.setProperty("--g", g.toFixed(3));
        el.setAttribute("aria-hidden", i === s ? "false" : "true");
      });
      pills.forEach(function (el, i) {
        el.setAttribute("aria-selected", i === s ? "true" : "false");
        el.style.setProperty("--pp", i === s ? u.toFixed(3) : 0);
      });
    }
    function loop(t) {
      raf = 0;
      if (!vis) return;
      if (prev && !hold) f = (f + (t - prev) / D) % n;
      prev = t; render();
      raf = requestAnimationFrame(loop);
    }
    function start() { if (!raf) { prev = 0; raf = requestAnimationFrame(loop); } }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) start(); }, { threshold: .2 }).observe(stage);
    } else { vis = true; start(); }
    pills.forEach(function (b, i) { b.addEventListener("click", function () { f = i + .4; render(); }); });
    window.__goRender = function (p) { f = clamp(p, 0, .9999) * n; render(); };
    render();
  })();

  /* ═════════ 2 · Caja épica → se abre ═════════ */
  (function () {
    var sec = document.getElementById("bzzzbx");
    if (!sec) return;
    var world = sec.querySelector(".bx-world"), glow = sec.querySelector(".bx-glow"), box = sec.querySelector(".bx-box");
    var L = {};
    all(world, "[data-l]").forEach(function (im) { L[im.getAttribute("data-l")] = im; });
    var caps = all(sec, ".bx-cap"), tabs = all(sec, ".bx-tab");
    var S0 = [.14, .34, .52, .70, .86];
    var lastKey = "", lastCur = -2;
    // lienzo de la vista explotada del Deck Final (px del render), origen en (500,60)
    var CW = 1720, OX = 500, OY = 60;
    // tapa cerrada: afín que la asienta sobre la base (coordenadas del render)
    var LM = [1.1192374, .2767007, -262.1514, .0515941, 1.1020633, 569.2618];
    var CL = { x: (528 + 2185) / 2 - OX, y: (744 + 1532) / 2 - OY, w: 1657 };   // caja cerrada
    var DOWN = { pcb: 300, glass: 560 };                    // cuánto bajan dentro de la base al cerrarse
    var WIN = { lid: [0, .6], glass: [.18, .9], pcb: [.08, .75] };
    var HOT = { g1: "glass", g2: "glass" };

    function lidMatrix(f, u) {      // f=1 cerrada, 0 abierta
      var a = LM[0], b = LM[1], tx = LM[2], c = LM[3], d = LM[4], ty = LM[5];
      // en coordenadas del lienzo: t' = A·O + t − O
      var tX = a * OX + b * OY + tx - OX, tY = c * OX + d * OY + ty - OY;
      var m = [1 + (a - 1) * f, c * f, b * f, 1 + (d - 1) * f, tX * f * u, tY * f * u];
      return "matrix(" + m.map(function (v) { return v.toFixed(5); }).join(",") + ")";
    }
    function layers(oo, u) {
      L.lid.style.transform = lidMatrix(1 - ease(seg(oo, WIN.lid[0], WIN.lid[1])), u);
      ["glass", "pcb"].forEach(function (k) {
        var f = ease(seg(oo, WIN[k][0], WIN[k][1]));
        L[k].style.transform = "translate3d(0," + (DOWN[k] * (1 - f) * u).toFixed(2) + "px,0)";
        L[k].style.opacity = ease(seg(f, .38, .62)).toFixed(3);
      });
    }

    function render(p, force) {
      var mobile = window.innerWidth < 900;
      var w = box.clientWidth || 1, u = w / CW;
      var key = p.toFixed(4) + "|" + w;
      if (key === lastKey && !force) return; lastKey = key;
      var a = seg(p, 0, .36), b = seg(p, .5, .62), o = seg(p, .58, .94), h = seg(p, .54, .66);
      sec.style.setProperty("--a", a.toFixed(4));
      sec.style.setProperty("--b", ease(b).toFixed(4));
      sec.style.setProperty("--o", o.toFixed(4));
      sec.style.setProperty("--h", ease(h).toFixed(4));
      var oo = seg(o, 0, .96), oq = ease(oo), oe = ease(o), k = 1 - oq;
      layers(oo, u);
      // caja cerrada al centro de la escena; al abrirse, la vista explotada ocupa el escenario
      var stage = box.parentNode, stageH = stage.clientHeight || 1, stageW = stage.clientWidth || 1;
      var targetW = mobile ? Math.min(stageW * .8, stageH * .62) : Math.min(stageW * .42, stageH * .62);
      var sc = targetW / (CL.w * u), cy = (mobile ? .33 : .44) * stageH - box.offsetTop;
      var s = 1 + (sc - 1) * k;
      var tx = (w / 2 - sc * CL.x * u) * k, ty = (cy - sc * CL.y * u) * k;
      world.style.transform = "translate3d(" + tx.toFixed(2) + "px," + ty.toFixed(2) + "px,0) scale(" + s.toFixed(4) + ")";
      world.style.opacity = ease(seg(p, 0, .05)).toFixed(3);
      box.style.setProperty("--cyp", ((cy / (box.clientHeight || 1)) * 100).toFixed(2) + "%");
      glow.style.setProperty("--gl", (ease(seg(p, 0, .3)) * .75 * (1 - .5 * oe)).toFixed(3));
      // capacidades activas
      var active = -1;
      S0.forEach(function (st, i) { if (o >= st + .02) active = i; });
      if (active !== lastCur || force) {
        lastCur = active;
        caps.forEach(function (c, i) { c.classList.toggle("cur", i === active); });
        var hot = o > .98 ? null : (active >= 0 ? caps[active].getAttribute("data-l") : null); if (hot && HOT[hot]) hot = HOT[hot];
        Object.keys(L).forEach(function (n) { L[n].classList.toggle("is-hot", n === hot); });
      }
      tabs.forEach(function (t) { t.classList.toggle("on", (+t.getAttribute("data-p") >= .9) === (o > .5)); });
    }

    // Sin animación: dos estados con pestañas (en tiempo real / por dentro)
    if (reduce) {
      var statePs = [.44, 1];
      tabs.forEach(function (t, i) { t.addEventListener("click", function () { render(statePs[i], true); }); });
      render(.44, true);
      return;
    }

    sec.classList.add("is-live");
    onFrame(function (force) { render(progress(sec), force === true); });
    window.__bxRender = function (p) {
      var r = sec.getBoundingClientRect();
      window.scrollTo(0, window.pageYOffset + r.top + p * (r.height - window.innerHeight));
      lastKey = ""; render(p, true);
    };
    render(progress(sec), true);
  })();
})();
