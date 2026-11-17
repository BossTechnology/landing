/* Hero: el video avanza con el scroll (currentTime sigue el progreso dentro de la sección sticky). */
(function () {
  "use strict";
  var sec = document.getElementById("hero");
  if (!sec) return;
  var v = sec.querySelector(".hv-video");
  if (!v) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  v.muted = true; v.pause();
  v.removeAttribute("autoplay");
  if (reduce) {                       // un cuadro fijo, sin scroll largo
    sec.classList.add("is-static"); sec.style.setProperty("--hp", 1);
    var still = v.getAttribute("data-still");
    if (still) v.setAttribute("poster", still);
    v.addEventListener("loadedmetadata", function () { try { v.currentTime = v.duration * .9; } catch (e) {} }, { once: true });
    return;
  }
  var dur = 0, target = 0, shown = -1, raf = 0, ready = false;
  var stage = sec.querySelector(".hv-sticky"), copy = sec.querySelector(".hv-copy");
  // móvil: el video se coloca justo debajo del CTA (posición real del bloque de texto)
  function layout() {
    if (window.innerWidth < 768 && copy) sec.style.setProperty("--cb", Math.round(copy.offsetTop + copy.offsetHeight) + "px");
    else sec.style.removeProperty("--cb");
  }
  function progress() {
    var r = sec.getBoundingClientRect(), span = r.height - Math.min(window.innerHeight, stage ? stage.offsetHeight : window.innerHeight);
    return span <= 0 ? 0 : Math.min(1, Math.max(0, -r.top / span));
  }
  function tick() {
    raf = 0;
    if (!ready) return;
    var d = target - shown;
    // suavizado: se acerca al objetivo sin saltos
    var next = Math.abs(d) < 1 / 48 ? target : shown + d * .35;
    if (Math.abs(next - v.currentTime) > 1 / 60 && !v.seeking) {
      try { v.currentTime = next; } catch (e) {}
      shown = next;
    } else if (v.seeking) { shown = shown; }
    if (Math.abs(target - shown) > 1 / 96) raf = requestAnimationFrame(tick);
  }
  function update() {
    var p = progress();
    sec.style.setProperty("--hp", p.toFixed(4));
    if (dur) target = p * (dur - .05);
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function init() {
    dur = v.duration || 0;
    ready = dur > 0;
    shown = v.currentTime || 0;
    update();
  }
  if (v.readyState >= 1) init(); else v.addEventListener("loadedmetadata", init, { once: true });
  v.addEventListener("seeked", function () { if (Math.abs(target - shown) > 1 / 96 && !raf) raf = requestAnimationFrame(tick); });
  // iOS: algunos navegadores sólo permiten buscar cuadros tras un gesto; preparamos el video sin reproducirlo
  function prime() {
    var pr = v.play();
    if (pr && pr.then) pr.then(function () { v.pause(); update(); }).catch(function () {});
    window.removeEventListener("touchstart", prime);
  }
  window.addEventListener("touchstart", prime, { passive: true });
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", function () { layout(); update(); });
  layout();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { layout(); update(); });
  update();
})();
