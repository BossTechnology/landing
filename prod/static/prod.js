/* Boss.Technology · production layer (loaded on every page by prod/build.mjs)
 *  1. Cookie consent + Google Analytics 4 (Consent Mode v2, basic mode: GA loads only after "Accept")
 *  2. Contact and careers forms: real submission to /api/contact (replaces the demo handler)
 */
(function () {
  "use strict";
  var EN = (document.documentElement.lang || "").slice(0, 2) === "en" || /^\/en\//.test(location.pathname);
  var me = document.currentScript || document.querySelector('script[src$="/prod/prod.js"]');
  var GA_ID = me && me.getAttribute("data-ga");
  var privacy = "/" + (EN ? "en" : "es") + "/legal/privacidad";

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
    ? { required: "Please fill in your name, a valid email and a message.", requiredCountry: "Please fill in your name, a valid email, your country and a message.", consent: "To send the form, please accept the Privacy Policy and the Terms of Service.", requiredContact: "Please fill in your name, a valid email, your country, how you heard about us and a message.", partner: "Please tell us which partner referred you.", sending: "Sending…", ok: "Bzzz. Thanks! We received your message and will get back to you soon. We also sent you a confirmation email.", fail: "We couldn't send your message. Please try again or write to admin@boss.technology." }
    : { required: "Completa tu nombre, un correo válido y un mensaje.", requiredCountry: "Completa tu nombre, un correo válido, tu país y un mensaje.", consent: "Para enviar el formulario, acepta la Política de privacidad y los Términos de servicio.", requiredContact: "Completa tu nombre, un correo válido, tu país, cómo nos conociste y un mensaje.", partner: "Indícanos qué partner te recomendó.", sending: "Enviando…", ok: "Bzzz. ¡Gracias! Recibimos tu mensaje y te responderemos pronto. Te enviamos un correo de confirmación.", fail: "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a admin@boss.technology." };
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
      if (l.querySelector("input,select,textarea")) return; // wraps its own control
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
    Array.prototype.forEach.call(f.elements, function (el) {
      if (!el.name) return;
      data[el.name] = el.type === "checkbox" ? el.checked : (el.value || "").trim();
    });
    var bad = false;
    [["firstName", !data.firstName], ["email", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")], ["country", f.elements.country && !data.country], ["source", f.elements.source && !data.source], ["sourceDetail", data.source === "Partner" && !data.sourceDetail], ["message", !data.message]].forEach(function (r) {
      var el = f.elements[r[0]]; if (!el) return;
      el.setAttribute("aria-invalid", r[1] ? "true" : "false");
      if (r[1]) bad = true;
    });
    var consent = f.elements.consent;
    if (!bad && consent && !consent.checked) {
      consent.setAttribute("aria-invalid", "true");
      note(f, M.consent, true);
      consent.focus();
      return;
    }
    if (consent) consent.setAttribute("aria-invalid", "false");
    if (bad) {
      var onlyPartner = data.source === "Partner" && !data.sourceDetail && data.firstName && data.message && data.country && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "");
      note(f, onlyPartner ? M.partner : f.elements.source ? M.requiredContact : f.elements.country ? M.requiredCountry : M.required, true);
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
        if (gaLoaded) gtag("event", "generate_lead", { form_name: data.form, language: data.lang, lead_source: data.source || "" });
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
        var header = btn.closest("header");
        var panel = header.querySelector(":scope > div:not(:first-child)");
        if (panel) {
          panel.id = panel.id || "pc-mobile-menu"; btn.setAttribute("aria-controls", panel.id);
          // The artifact's menu panel links ES/EN to the wrong page: use the desktop nav's switch, which is right.
          var own = panel.querySelector("nav p"), good = header.querySelector("nav.hidden > p");
          if (own && good && !own.hasAttribute("data-pc")) { var c = good.cloneNode(true); c.setAttribute("data-pc", "1"); own.replaceWith(c); }
        }
        else btn.removeAttribute("aria-controls");
      }, 0);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") { btn.click(); btn.focus(); }
    });
  }

  /* Country selector in the "Book a meeting" form. Values are always in Spanish for the team. */
  var COUNTRIES = [["Estados Unidos", "United States"], ["Perú", "Peru"], ["Colombia", "Colombia"], ["Latam (otros)", "Other Latin American country"], ["Europa", "Europe"]];
  function countryField() {
    if (!/\/contacto(\.html)?$/.test(location.pathname)) return;
    var f = document.querySelector("main form");
    var company = f && f.querySelector('[name="company"]');
    if (!company || f.querySelector('[name="country"]')) return;
    var ref = company.parentNode, lab = ref.querySelector("label");
    var wrap = document.createElement("div");
    var label = document.createElement("label");
    label.className = lab ? lab.className : "";
    label.textContent = EN ? "Country" : "País";
    var select = document.createElement("select");
    select.name = "country";
    select.className = (company.className || "") + " ct-sel";
    select.setAttribute("aria-invalid", "false");
    var ph = new Option(EN ? "Select your country" : "Selecciona tu país", "", true, true);
    ph.disabled = true;
    select.add(ph);
    COUNTRIES.forEach(function (c) { select.add(new Option(EN ? c[1] : c[0], c[0])); });
    wrap.appendChild(label); wrap.appendChild(select);
    ref.parentNode.insertBefore(wrap, ref.nextSibling);
  }

  /* "How did you hear about us?" in the meeting form, after Country. Partner referrals ask which partner
     (required) so the team can attribute them; personal referrals and "Other" ask for an optional detail.
     Values are always in Spanish for the team. */
  var SOURCES = [
    ["Partner", "Me lo recomendó un partner", "A partner referred me"],
    ["Recomendación", "Me lo recomendó una persona", "Someone recommended you"],
    ["LinkedIn", "LinkedIn", "LinkedIn"],
    ["Redes sociales", "Otras redes sociales", "Other social media"],
    ["Buscador", "Google u otro buscador", "Google or another search engine"],
    ["Evento", "Evento o conferencia", "Event or conference"],
    ["Otro", "Otro", "Other"]];
  var SOURCE_DETAIL = {
    "Partner": EN ? ["Which partner?", "Partner name"] : ["¿Qué partner?", "Nombre del partner"],
    "Recomendación": EN ? ["Who recommended us?", "Name (optional)"] : ["¿Quién te recomendó?", "Nombre (opcional)"],
    "Otro": EN ? ["Tell us more", "Where did you hear about us? (optional)"] : ["Cuéntanos", "¿Dónde nos viste? (opcional)"]};
  function sourceField() {
    if (!/\/contacto(\.html)?$/.test(location.pathname)) return;
    var f = document.querySelector("main form");
    var country = f && f.querySelector('[name="country"]');
    var company = f && f.querySelector('[name="company"]');
    if (!country || !company || f.querySelector('[name="source"]')) return;
    var lab = company.parentNode.querySelector("label");
    var mk = function (text) { var l = document.createElement("label"); l.className = lab ? lab.className : ""; l.textContent = text; return l; };
    var wrap = document.createElement("div");
    var select = document.createElement("select");
    select.name = "source";
    select.className = (company.className || "") + " ct-sel";
    select.setAttribute("aria-invalid", "false");
    var ph = new Option(EN ? "Select an option" : "Selecciona una opción", "", true, true);
    ph.disabled = true;
    select.add(ph);
    SOURCES.forEach(function (o) { select.add(new Option(EN ? o[2] : o[1], o[0])); });
    wrap.appendChild(mk(EN ? "How did you hear about us?" : "¿Cómo nos conociste?"));
    wrap.appendChild(select);
    var dWrap = document.createElement("div");
    dWrap.className = "pc-source-detail";
    dWrap.hidden = true;
    var dLabel = mk("");
    var input = document.createElement("input");
    input.name = "sourceDetail"; input.type = "text"; input.maxLength = 200;
    input.className = company.className || "";
    input.setAttribute("aria-invalid", "false");
    dWrap.appendChild(dLabel); dWrap.appendChild(input);
    var update = function () {
      var d = SOURCE_DETAIL[select.value];
      dWrap.hidden = !d;
      if (d) { dLabel.textContent = d[0]; input.placeholder = d[1]; }
      else { input.value = ""; input.setAttribute("aria-invalid", "false"); }
    };
    select.addEventListener("change", update);
    f.addEventListener("reset", function () { setTimeout(update, 0); });
    var after = country.parentNode;
    after.parentNode.insertBefore(wrap, after.nextSibling);
    wrap.parentNode.insertBefore(dWrap, wrap.nextSibling);
  }

  /* Consent checkbox (privacy policy + terms) before the submit button, unchecked by default. */
  function consentField(f) {
    if (f.querySelector('[name="consent"]')) return;
    var btn = f.querySelector('button[type="submit"]');
    if (!btn) return;
    var root = "/" + (EN ? "en" : "es") + "/legal/";
    var label = document.createElement("label");
    label.className = "pc-consent";
    var box = document.createElement("input");
    box.type = "checkbox"; box.name = "consent"; box.value = "yes"; box.setAttribute("aria-invalid", "false");
    var txt = document.createElement("span");
    txt.innerHTML = EN
      ? 'I have read and accept the <a href="' + root + 'privacidad" target="_blank" rel="noopener">Privacy Policy</a> and the <a href="' + root + 'terminos" target="_blank" rel="noopener">Terms of Service</a>.'
      : 'He leído y acepto la <a href="' + root + 'privacidad" target="_blank" rel="noopener">Política de privacidad</a> y los <a href="' + root + 'terminos" target="_blank" rel="noopener">Términos de servicio</a>.';
    label.appendChild(box); label.appendChild(txt);
    btn.parentNode.insertBefore(label, btn);
  }

  /* Current section in the menu. The artifact's site.js only recognises ".html" URLs; with clean URLs
     (proxy.js) it marks nothing, so do it here for both forms. */
  function markCurrent() {
    var key = function (p) {
      p = (p || "").toLowerCase().replace(/\.html$/, "");
      if (/\/casos(\/|$)/.test(p)) return "casos";
      if (/productos\/aplicaciones$/.test(p)) return "engines";
      var m = p.match(/(plataformas|ia-aplicada|bo11y|compania)$/);
      return m ? m[1] : "";
    };
    var cur = key(location.pathname), header = document.querySelector("header.fixed");
    if (!cur || !header) return;
    var mark = function (root) {
      Array.prototype.forEach.call(root.querySelectorAll("a[href]"), function (a) {
        if (a.closest("[id^='_R_']") || a.closest("p") || a.hasAttribute("aria-current")) return;
        if (key(a.pathname) === cur) a.setAttribute("aria-current", "page");
      });
    };
    mark(header);
    new MutationObserver(function (ms) {
      ms.forEach(function (m) { Array.prototype.forEach.call(m.addedNodes, function (n) { if (n.nodeType === 1) mark(n); }); });
    }).observe(header, { childList: true, subtree: true });
  }

  function init() {
    markCurrent();
    countryField();
    sourceField();
    Array.prototype.forEach.call(document.querySelectorAll("main form"), consentField);
    menuA11y();
    footerLink();
    Array.prototype.forEach.call(document.querySelectorAll("main form"), setupForm);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
