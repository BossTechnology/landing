/* Boss.Technology · production layer (loaded on every page by prod/build.mjs)
 *  1. Cookie consent + Google Analytics 4 (Consent Mode v2, basic mode: GA loads only after "Accept")
 *  2. Contact and careers forms: real submission to /api/contact (replaces the demo handler)
 */
(function () {
  "use strict";
  var EN = (document.documentElement.lang || "").slice(0, 2) === "en" || /^\/en\//.test(location.pathname);
  var me = document.currentScript || document.querySelector('script[src$="/prod/prod.js"]');
  var GA_ID = me && me.getAttribute("data-ga");
  var privacy = "/" + (EN ? "en" : "es") + "/legal/privacidad.html";

  /* ===================== 1. Consent + GA4 ===================== */
  var KEY = "boss-consent-v1";
  var store = {
    get: function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set: function (v) { try { localStorage.setItem(KEY, v); } catch (e) { /* private mode */ } },
  };
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  var gaLoaded = false;

  function loadGA() {
    if (!GA_ID || gaLoaded) return;
    gaLoaded = true;
    gtag("consent", "update", { analytics_storage: "granted" });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
  }

  var T = EN
    ? { text: "We use analytics cookies to understand how the site is used and improve it. You choose.", more: "Privacy policy", ok: "Accept", no: "Reject", prefs: "Cookie preferences", label: "Cookie consent" }
    : { text: "Usamos cookies de analítica para entender cómo se usa el sitio y mejorarlo. Tú decides.", more: "Política de privacidad", ok: "Aceptar", no: "Rechazar", prefs: "Preferencias de cookies", label: "Consentimiento de cookies" };

  var banner = null;
  function choose(v) {
    store.set(v);
    if (v === "granted") loadGA();
    else if (gaLoaded) { gtag("consent", "update", { analytics_storage: "denied" }); }
    if (banner) { banner.classList.remove("on"); var b = banner; setTimeout(function () { b.remove(); }, 300); banner = null; }
  }
  function showBanner() {
    if (banner || !GA_ID) return;
    banner = document.createElement("div");
    banner.className = "pc-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.setAttribute("aria-label", T.label);
    banner.innerHTML = '<p></p><div class="pc-actions"><button type="button" class="pc-btn pc-no"></button><button type="button" class="pc-btn pc-ok"></button></div>';
    var p = banner.querySelector("p");
    p.textContent = T.text + " ";
    var a = document.createElement("a"); a.href = privacy; a.textContent = T.more; p.appendChild(a);
    banner.querySelector(".pc-no").textContent = T.no;
    banner.querySelector(".pc-ok").textContent = T.ok;
    banner.querySelector(".pc-no").addEventListener("click", function () { choose("denied"); });
    banner.querySelector(".pc-ok").addEventListener("click", function () { choose("granted"); });
    document.body.appendChild(banner);
    requestAnimationFrame(function () { banner && banner.classList.add("on"); });
  }

  if (GA_ID) {
    gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" });
    var c = store.get();
    if (c === "granted") loadGA();
    else if (c !== "denied") showBanner();
  }

  /* "Cookie preferences" link next to the legal links in the footer */
  function footerLink() {
    if (!GA_ID) return;
    var legal = document.querySelector('footer a[href*="legal/terminos"]');
    if (!legal || legal.parentNode.querySelector(".pc-link")) return;
    var b = document.createElement("button");
    b.type = "button";
    b.className = legal.className + " pc-link";
    b.textContent = T.prefs;
    b.addEventListener("click", function () { showBanner(); });
    legal.parentNode.appendChild(b);
  }

  /* ===================== 2. Forms ===================== */
  var M = EN
    ? { required: "Please fill in your name, a valid email and a message.", sending: "Sending…", ok: "Bzzz. Thanks! We received your message and will get back to you soon. We also sent you a confirmation email.", fail: "We couldn't send your message. Please try again or write to admin@boss.technology." }
    : { required: "Completa tu nombre, un correo válido y un mensaje.", sending: "Enviando…", ok: "Bzzz. ¡Gracias! Recibimos tu mensaje y te responderemos pronto. Te enviamos un correo de confirmación.", fail: "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a admin@boss.technology." };
  var loadedAt = Date.now();

  function note(f, text, bad) {
    var n = f.querySelector(".pc-note");
    if (!n) {
      n = document.createElement("p");
      n.className = "pc-note";
      n.setAttribute("role", "status");
      n.setAttribute("aria-live", "polite");
      f.appendChild(n);
    }
    var demo = f.querySelector(".boss-demo-note"); if (demo) demo.remove();
    n.textContent = text;
    n.classList.toggle("bad", !!bad);
  }

  function setupForm(f) {
    if (f.getAttribute("data-pc")) return;
    f.setAttribute("data-pc", "1");
    // Labels in the artifact's forms aren't tied to their fields (no for/id): screen readers can't name them.
    Array.prototype.forEach.call(f.querySelectorAll("label:not([for])"), function (l, i) {
      var el = l.nextElementSibling;
      if (!el || !/^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) el = l.parentNode.querySelector("input,select,textarea");
      if (!el) return;
      if (!el.id) el.id = "pc-f-" + (el.name || i);
      l.htmlFor = el.id;
    });
    var hp = document.createElement("input"); // anti-spam trap, invisible to people
    hp.type = "text"; hp.name = "website"; hp.tabIndex = -1; hp.autocomplete = "off";
    hp.setAttribute("aria-hidden", "true"); hp.className = "pc-hp";
    f.appendChild(hp);
  }

  // Capture phase on window: runs before the artifact's demo handler on the form and stops it.
  window.addEventListener("submit", function (e) {
    var f = e.target;
    if (!f || f.tagName !== "FORM" || !f.closest("main")) return;
    e.preventDefault();
    e.stopPropagation();
    setupForm(f);
    var data = {};
    Array.prototype.forEach.call(f.elements, function (el) { if (el.name) data[el.name] = (el.value || "").trim(); });
    var bad = false;
    [["firstName", !data.firstName], ["email", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")], ["message", !data.message]].forEach(function (r) {
      var el = f.elements[r[0]]; if (!el) return;
      el.setAttribute("aria-invalid", r[1] ? "true" : "false");
      if (r[1]) bad = true;
    });
    if (bad) {
      note(f, M.required, true);
      var first = f.querySelector('[aria-invalid="true"]'); if (first) first.focus();
      return;
    }
    data.form = /reclutamiento/.test(location.pathname) ? "reclutamiento" : "contacto";
    data.lang = EN ? "en" : "es";
    data.page = location.href.split("#")[0];
    data.elapsed = Date.now() - loadedAt;
    var btn = f.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;
    note(f, M.sending);
    fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      .then(function (r) { if (!r.ok) throw new Error(String(r.status)); })
      .then(function () {
        f.reset();
        note(f, M.ok);
        if (gaLoaded) gtag("event", "generate_lead", { form_name: data.form, language: data.lang });
      })
      .catch(function () { note(f, M.fail, true); })
      .then(function () { if (btn) btn.disabled = false; });
  }, true);

  /* ===================== 3. Mobile menu accessibility ===================== */
  // The artifact's menu opens a panel on click; Escape didn't close it and the button didn't say what it controls.
  function menuA11y() {
    var btn = document.querySelector('header.fixed button[aria-label="Menu"]');
    if (!btn) return;
    btn.addEventListener("click", function () {
      setTimeout(function () {
        var panel = btn.closest("header").querySelector(":scope > div:not(:first-child)");
        if (panel) { panel.id = panel.id || "pc-mobile-menu"; btn.setAttribute("aria-controls", panel.id); }
        else btn.removeAttribute("aria-controls");
      }, 0);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") { btn.click(); btn.focus(); }
    });
  }

  function init() {
    menuA11y();
    footerLink();
    Array.prototype.forEach.call(document.querySelectorAll("main form"), setupForm);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
