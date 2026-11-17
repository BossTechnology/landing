/* Bo11y · interruptor "Hoy / Con Bo11y" de los túneles oscuros */
(function () {
  var box = document.querySelector("[data-bo-tun]");
  if (!box) return;
  var btns = box.querySelectorAll(".bo-sw button");
  function set(dark) {
    box.classList.toggle("dark", dark);
    btns.forEach(function (b) { b.setAttribute("aria-pressed", String((b.getAttribute("data-v") === "dark") === dark)); });
  }
  btns.forEach(function (b) {
    b.addEventListener("click", function () { box.classList.add("seen"); set(b.getAttribute("data-v") === "dark"); });
  });
  set(true);
  /* Se activa solo: muestra "Hoy" unos segundos y luego cambia a "Con Bo11y" (una vez, si el usuario no tocó el selector) */
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var auto = function () { setTimeout(function () { if (!box.classList.contains("seen")) { box.classList.add("seen"); set(false); } }, 2400); };
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { io.disconnect(); auto(); } }, { threshold: 0.5 });
    io.observe(box);
  } else auto();
})();
