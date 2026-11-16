/* Multidimensional Streaming Data — animación */
(function () {
  var root = document.querySelector(".msd");
  if (!root) return;
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var svg = root.querySelector(".msd-lines");
  var box = root.querySelector(".msd-box");
  var ripple = root.querySelector(".msd-ripple");
  var nodes = [].slice.call(root.querySelectorAll(".msd-node"));
  var labels = [].slice.call(root.querySelectorAll(".msd-label"));
  var paths = [].slice.call(root.querySelectorAll(".msd-lines path"));
  var layers = [].slice.call(root.querySelectorAll(".msd-layer"));
  var legend = [].slice.call(root.querySelectorAll(".msd-legend-btn"));

  // Escalonado de entrada: de adentro hacia afuera
  var order = { 0: 0.55, 1: 1.05, 2: 1.55 };
  nodes.forEach(function (n, i) {
    var d = order[n.dataset.layer] + (i % 8) * 0.06;
    n.style.transitionDelay = d + "s";
    labels[i].style.transitionDelay = d + 0.15 + "s";
    paths[i].style.transitionDelay = d + 0.25 + "s";
  });
  layers.forEach(function (l, i) { l.style.transitionDelay = 0.4 + (2 - i) * 0.18 + "s"; });

  // Centrar el escenario en móvil
  var sc = root.querySelector(".msd-scroll");
  function center() { if (sc) sc.scrollLeft = (sc.scrollWidth - sc.clientWidth) / 2; }
  center(); addEventListener("resize", center);

  if (reduce) { root.classList.add("is-in"); return; }
  if (svg.pauseAnimations) svg.pauseAnimations();

  // Partículas: un paquete de datos viaja por cada línea hacia el BzzzBX
  var NS = "http://www.w3.org/2000/svg";
  paths.forEach(function (p, i) {
    var c = document.createElementNS(NS, "circle");
    c.setAttribute("r", p.dataset.layer === "0" ? 4 : 3.4);
    var m = document.createElementNS(NS, "animateMotion");
    var dur = 2.6 + (p.dataset.layer | 0) * 0.7 + (i % 3) * 0.3;
    m.setAttribute("dur", dur + "s");
    m.setAttribute("begin", (2.2 + ((i * 0.37) % dur)) + "s");
    m.setAttribute("repeatCount", "indefinite");
    m.setAttribute("keyPoints", "0;1");
    m.setAttribute("keyTimes", "0;1");
    m.setAttribute("calcMode", "spline");
    m.setAttribute("keySplines", "0.45 0 0.55 1");
    var mp = document.createElementNS(NS, "mpath");
    mp.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + p.id);
    mp.setAttribute("href", "#" + p.id);
    m.appendChild(mp);
    var vis = document.createElementNS(NS, "set");
    vis.setAttribute("attributeName", "visibility"); vis.setAttribute("to", "visible");
    vis.setAttribute("begin", m.getAttribute("begin"));
    c.setAttribute("visibility", "hidden");
    c.appendChild(vis); c.appendChild(m); svg.appendChild(c);
    m.addEventListener("repeatEvent", ping);
  });

  var pingT = 0;
  function ping() {
    if (pingT) return;
    box.classList.remove("ping"); void box.offsetWidth; box.classList.add("ping");
    pingT = setTimeout(function () { pingT = 0; }, 350);
  }

  // Onda que sale de la caja hacia los anillos
  var rippleTimer = 0;
  function rippleLoop() {
    if (!ripple.animate) return;
    ripple.animate(
      [{ transform: "scale(.12)", opacity: 0.55 }, { transform: "scale(1)", opacity: 0 }],
      { duration: 2600, easing: "cubic-bezier(.2,.7,.3,1)" }
    );
  }

  // Resaltado al pasar el mouse por un nodo o una capa
  function highlight(fn) {
    nodes.forEach(function (n, i) {
      var on = fn(n, i);
      n.classList.toggle("on", on); labels[i].classList.toggle("on", on); paths[i].classList.toggle("on", on);
    });
  }
  nodes.forEach(function (n, i) {
    n.addEventListener("mouseenter", function () { highlight(function (_, j) { return j === i; }); });
    n.addEventListener("mouseleave", function () { highlight(function () { return false; }); });
  });
  layers.forEach(function (l) {
    var k = l.dataset.layer;
    var on = function () { l.classList.add("on"); highlight(function (n) { return n.dataset.layer === k; }); };
    var off = function () { l.classList.remove("on"); highlight(function () { return false; }); };
    l.addEventListener("mouseenter", on); l.addEventListener("mouseleave", off);
    l.addEventListener("focus", on); l.addEventListener("blur", off);
  });

  // Leyenda (móvil/tablet): tocar un grupo resalta sus fuentes
  legend.forEach(function (b) {
    b.addEventListener("click", function () {
      var was = b.classList.contains("on");
      legend.forEach(function (x) { x.classList.remove("on"); });
      if (was) { highlight(function () { return false; }); return; }
      b.classList.add("on");
      highlight(function (n) { return n.dataset.layer === b.dataset.layer; });
    });
  });

  // Arranca al entrar en pantalla y se pausa al salir
  var started = false;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        root.classList.add("is-in");
        if (!started) { started = true; setTimeout(function () { root.classList.add("is-live"); }, 1800); }
        if (svg.unpauseAnimations) svg.unpauseAnimations();
        if (!rippleTimer) { rippleTimer = setInterval(rippleLoop, 3200); setTimeout(rippleLoop, 1200); }
      } else {
        if (svg.pauseAnimations) svg.pauseAnimations();
        clearInterval(rippleTimer); rippleTimer = 0;
      }
    });
  }, { threshold: 0.25 });
  io.observe(root.querySelector(".msd-stage"));
})();
