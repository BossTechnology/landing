/* BzzzBX: el equipo se arma (se cierra) al hacer scroll. Sin dependencias. */
(function () {
  "use strict";
  var sec = document.getElementById("bzzzbx");
  if (!sec) return;
  var stage = sec.querySelector(".asm-stage");
  var world = sec.querySelector(".asm-world");
  var items = [].slice.call(sec.querySelectorAll(".asm-item"));
  var bar = sec.querySelector(".asm-meter");
  var label = sec.querySelector(".asm-state");
  var glow = sec.querySelector(".asm-glow");
  var L = {};
  [].forEach.call(world.querySelectorAll("img[data-l]"), function (im) { L[im.getAttribute("data-l")] = im; });
  var openTxt = sec.getAttribute("data-state-open") || "";
  var closedTxt = sec.getAttribute("data-state-closed") || "";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var seg = function (p, a, b) { return clamp((p - a) / (b - a), 0, 1); };
  var ease = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };

  // Capa -> item que la activa (Recibe, Razona, Protege, Recuerda)
  var HOT = ["p1", "p2", "p3", "base"];
  var START = [0.04, 0.24, 0.44, 0.64];

  var lastKey = "", lastActive = -1, lastClosed = null;

  function render(p) {
    var w = stage.clientWidth || 1;
    var u = w / 792;               // px por unidad de la imagen original
    var key = p.toFixed(4) + "|" + w;
    if (key === lastKey) return;
    lastKey = key;

    // iconos: salen hacia la izquierda y se desvanecen
    var ic = ease(seg(p, 0, 0.32));
    ["i1", "i2", "i3", "i4"].forEach(function (k, i) {
      var t = ease(seg(p, i * 0.03, 0.30 + i * 0.03));
      L[k].style.transform = "translate3d(" + (-170 * u * t).toFixed(2) + "px," + (-6 * u * t).toFixed(2) + "px,0)";
      L[k].style.opacity = (1 - seg(p, 0.02 + i * 0.03, 0.26 + i * 0.03)).toFixed(3);
    });

    // placas: bajan hacia la base y se funden
    var down = { p3: 90, p2: 235, p1: 370 };
    ["p3", "p2", "p1"].forEach(function (k, i) {
      var t = ease(seg(p, 0.08 + i * 0.03, 0.56));
      L[k].style.transform = "translate3d(0," + (down[k] * u * t).toFixed(2) + "px,0)";
      L[k].style.opacity = (1 - easeOut(seg(p, 0.46 + i * 0.03, 0.74))).toFixed(3);
    });

    // tapa: baja y cierra la base
    var lt = ease(seg(p, 0.40, 0.98));
    L.lid.style.transform = "translate3d(0," + (853 * u * lt).toFixed(2) + "px,0)";

    // la unidad cerrada se acerca y se centra
    var s = 1 + 0.42 * ease(seg(p, 0.35, 1));
    var ty = -455 * u * ease(seg(p, 0.35, 1));
    world.style.transform = "translate3d(0," + ty.toFixed(2) + "px,0) scale(" + s.toFixed(4) + ")";

    stage.style.setProperty("--glow", seg(p, 0.86, 1).toFixed(3));
    sec.style.setProperty("--p", p.toFixed(4));

    // items y capas resaltadas
    var active = -1;
    START.forEach(function (st, i) { if (p >= st) active = i; });
    if (active !== lastActive) {
      items.forEach(function (el, i) { el.classList.toggle("on", i <= active); });
      lastActive = active;
    }
    HOT.forEach(function (k, i) { L[k].classList.toggle("is-hot", i === active && p < 0.5 + i * 0.05 && p > 0.02); });

    var closed = p > 0.92;
    if (closed !== lastClosed) {
      label.textContent = closed ? closedTxt : openTxt;
      lastClosed = closed;
    }
  }

  function progress() {
    var r = sec.getBoundingClientRect();
    var span = r.height - window.innerHeight;
    if (span <= 0) return 0;
    return clamp(-r.top / span, 0, 1);
  }

  // Sin animación (movimiento reducido): se muestra el esquema abierto con todo explicado.
  if (reduce) {
    items.forEach(function (el) { el.classList.add("on"); });
    sec.style.setProperty("--p", 1);
    label.textContent = openTxt;
    return;
  }

  sec.classList.add("is-live");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; render(progress()); });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { lastKey = ""; onScroll(); });
  // utilidad de depuración/QA
  window.__asmRender = function (p) { lastKey = ""; render(p); };
  render(progress());
})();
