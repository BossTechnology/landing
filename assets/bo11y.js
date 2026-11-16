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
})();
