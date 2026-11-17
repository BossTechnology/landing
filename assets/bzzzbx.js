/* BzzzBX · pasos de la arquitectura (clic o teclado; avanza solo hasta que el usuario interactúa) */
(function () {
  var list = document.querySelector("[data-bz-steps]");
  if (!list) return;
  var steps = Array.prototype.slice.call(list.querySelectorAll(".bz-step"));
  if (!steps.length) return;
  list.classList.add("js");
  var cur = 0, timer = null, touched = false, visible = false;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function show(i) {
    cur = i;
    steps.forEach(function (s, j) {
      var on = j === i;
      s.classList.toggle("on", on);
      var b = s.querySelector("button");
      if (b) b.setAttribute("aria-expanded", String(on));
    });
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  function start() {
    if (touched || reduce || timer || !visible) return;
    timer = setInterval(function () { show((cur + 1) % steps.length); }, 5000);
  }

  steps.forEach(function (s, i) {
    var b = s.querySelector("button");
    if (!b) return;
    b.addEventListener("click", function () { touched = true; stop(); show(i); });
  });

  show(0);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      visible = es[0].isIntersecting;
      visible ? start() : stop();
    }, { threshold: 0.35 }).observe(list);
  }
})();
