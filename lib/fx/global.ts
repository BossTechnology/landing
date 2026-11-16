import { BEE } from "./bee";
import { $, $$, type Ctx } from "./runtime";

/* ---------- Smooth reveal on scroll (every page) ---------- */
export function reveal(ctx: Ctx) {
  if (!("IntersectionObserver" in window) || ctx.reduce) return;
  const sel = ["main section .sec-head", "main section header", ".sec-title", ".sec-sub", ".pd-card", ".ns-card", ".bz-card", ".bo-l", ".ia-grid article",
    ".ia-vs article", ".team-card", ".tr-i", ".cx-row", ".blog3 > article", "#blog article", ".bz-h2", ".bz-lead", ".bo-loop li", ".ia-steps li", ".vz", ".bo-bridge"].join(",");
  const skip = "#hero, #objetivos, #bzzzbx, header.fixed, footer";
  const els = $$(sel).filter((el) =>
    !el.closest(skip) && !el.parentElement?.closest(".mo-in") && el.getBoundingClientRect().top > window.innerHeight * 0.9);
  els.forEach((el) => {
    const sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
    el.style.setProperty("--mo-d", Math.min(sib, 5) * 0.08 + "s");
    el.classList.add("mo-in");
  });
  ctx.defer(() => els.forEach((el) => el.classList.remove("mo-in", "mo-on")));
  const io = ctx.io((es) => {
    es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("mo-on"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  els.forEach((el) => io.observe(el));
}

/* ---------- Background videos: make sure they are muted so autoplay is allowed ---------- */
export function videos() {
  $$<HTMLVideoElement>("video[autoplay]").forEach((v) => {
    v.muted = true;
    v.defaultPlaybackRate = 1;
    v.playbackRate = 1;
    if (v.paused) v.play().catch(() => {});
  });
}

/* ---------- Horizontal carousels with prev/next buttons ---------- */
export function carousels(ctx: Ctx) {
  $$(".snap-x.overflow-x-auto").forEach((track) => {
    const section = track.closest("section");
    if (!section) return;
    const btns = $$("button[aria-label]", section);
    if (btns.length < 2) return;
    const go = (dir: number) => {
      const card = track.firstElementChild;
      const w = card ? card.getBoundingClientRect().width + 30 : track.clientWidth;
      track.scrollBy({ left: w * dir, behavior: "smooth" });
    };
    ctx.on(btns[0], "click", () => go(-1));
    ctx.on(btns[1], "click", () => go(1));
  });
}

/* ---------- Contact and careers forms: send to /api/contact ---------- */
export function forms(ctx: Ctx) {
  const MSG = ctx.en
    ? { required: "Please fill in your name, a valid email and a message.", sending: "Sending…", ok: "Bzzz. Thanks! We received your message and will get back to you soon.", fail: "We couldn't send your message. Please try again or write to admin@boss.technology." }
    : { required: "Completa tu nombre, un correo válido y un mensaje.", sending: "Enviando…", ok: "Bzzz. ¡Gracias! Recibimos tu mensaje y te responderemos pronto.", fail: "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a admin@boss.technology." };
  $$<HTMLFormElement>("main form").forEach((f) => {
    const hp = ctx.added(document.createElement("input")); // anti-spam trap, invisible to people
    hp.type = "text"; hp.name = "website"; hp.tabIndex = -1; hp.autocomplete = "off"; hp.setAttribute("aria-hidden", "true");
    hp.style.cssText = "position:absolute;left:-9999px;width:1px;height:1px;opacity:0";
    f.appendChild(hp);
    const btn = $<HTMLButtonElement>('button[type="submit"]', f);
    const note = (text: string, bad?: boolean) => {
      let n = $(".boss-form-note", f);
      if (!n) {
        n = ctx.added(document.createElement("p"));
        n.className = "boss-form-note mt-4 text-body-m"; n.setAttribute("role", "status"); n.setAttribute("aria-live", "polite");
        f.appendChild(n);
      }
      n.textContent = text; n.style.color = bad ? "#e5484d" : "";
      n.classList.toggle("text-accent-base", !bad);
    };
    ctx.on(f, "submit", (e: SubmitEvent) => {
      e.preventDefault();
      const data: Record<string, string> = {};
      Array.from(f.elements).forEach((el) => {
        const i = el as HTMLInputElement;
        if (i.name) data[i.name] = (i.value || "").trim();
      });
      let bad = false;
      ([["firstName", !data.firstName], ["email", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")], ["message", !data.message]] as const).forEach(([name, invalid]) => {
        const el = f.elements.namedItem(name) as HTMLElement | null;
        if (!el) return;
        el.setAttribute("aria-invalid", invalid ? "true" : "false");
        if (invalid) bad = true;
      });
      if (bad) { note(MSG.required, true); return; }
      data.form = /reclutamiento/.test(location.pathname) ? "reclutamiento" : "contacto";
      data.lang = ctx.lang;
      data.page = location.href;
      if (btn) btn.disabled = true;
      note(MSG.sending);
      fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
        .then((r) => { if (!r.ok) throw new Error(String(r.status)); f.reset(); note(MSG.ok); })
        .catch(() => note(MSG.fail, true))
        .finally(() => { if (btn) btn.disabled = false; });
    });
  });
}

/* ---------- The bee: toasts, footer bee, secret swarm, team and milestone bees ---------- */
export function bees(ctx: Ctx) {
  const { en, reduce } = ctx;

  let toastEl: HTMLElement | null = null;
  const toast = (msg: string) => {
    if (!toastEl) {
      toastEl = ctx.added(document.createElement("div"));
      toastEl.className = "bee-toast"; toastEl.setAttribute("role", "status");
      document.body.appendChild(toastEl);
    }
    const el = toastEl;
    el.innerHTML = BEE + "<span></span>";
    el.lastChild!.textContent = msg;
    ctx.raf(() => el.classList.add("on"));
    ctx.timeout(() => el.classList.remove("on"), 2600);
  };
  ctx.on(document, "click", (e: MouseEvent) => {
    if ((e.target as Element)?.closest?.(".pst-copy")) toast(en ? "Bzzz, link copied" : "Bzzz, enlace copiado");
  });

  /* Secret swarm: type "bzzz" or click the footer bee 5 times quickly */
  const swarm = () => {
    if (reduce) { toast("Bzzz."); return; }
    if ($(".bee-swarm")) return;
    const box = ctx.added(document.createElement("div"));
    box.className = "bee-swarm"; box.setAttribute("aria-hidden", "true");
    document.body.appendChild(box);
    const W = window.innerWidth, H = window.innerHeight, n = W < 700 ? 14 : 26, cx = W * 0.5, cy = H * 0.5;
    for (let i = 0; i < n; i++) {
      const s = document.createElement("span");
      s.innerHTML = BEE;
      const sz = 14 + Math.random() * 18;
      s.style.width = sz + "px"; (s.firstChild as HTMLElement).style.width = "100%";
      const y0 = Math.random() * H, fromLeft = i % 2 === 0, x0 = fromLeft ? -40 : W + 40;
      const mx = cx + (Math.random() - 0.5) * W * 0.5, my = cy + (Math.random() - 0.5) * H * 0.5;
      const x1 = fromLeft ? W + 60 : -60, y1 = Math.random() * H, d = 2200 + Math.random() * 1200;
      box.appendChild(s);
      s.animate([
        { transform: `translate(${x0}px,${y0}px) rotate(0deg)` },
        { transform: `translate(${mx}px,${my}px) rotate(${fromLeft ? 12 : -12}deg)`, offset: 0.5 },
        { transform: `translate(${x1}px,${y1}px) rotate(0deg)` },
      ], { duration: d, delay: Math.random() * 500, easing: "ease-in-out", fill: "both" });
    }
    ctx.timeout(() => { box.remove(); toast(en ? "Bzzz. The hive says hi." : "Bzzz. La colmena te saluda."); }, 3900);
  };
  let typed = "";
  ctx.on(document, "keydown", (e: KeyboardEvent) => {
    const t = e.target as HTMLElement | null;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    if (!e.key || e.key.length !== 1) return;
    typed = (typed + e.key.toLowerCase()).slice(-4);
    if (typed === "bzzz") { typed = ""; swarm(); }
  });

  /* Bee perched on the footer wordmark */
  const fbee = $<HTMLButtonElement>("footer .ft-bee");
  if (fbee) {
    let flying = false;
    ctx.on(fbee, "mouseenter", () => {
      if (flying || reduce) return;
      flying = true; fbee.classList.add("fly");
      ctx.timeout(() => { fbee.classList.remove("fly"); flying = false; }, 2700);
    });
    let clicks: number[] = [];
    ctx.on(fbee, "click", () => {
      const now = Date.now();
      clicks = clicks.filter((c) => now - c < 1600); clicks.push(now);
      if (clicks.length >= 5) { clicks = []; swarm(); }
    });
  }

  teamBees(ctx);
  milestoneBee(ctx);
  loopBee(ctx);
}

/* Team of bees in the Company hero (organic, left aligned) */
function teamBees(ctx: Ctx) {
  const h = $("section.ch");
  if (!h || $(".ch-team", h)) return;
  const cols = ["#9692ff", "#b8b4ff", "#7fb6e6", "#9cc9b4", "#e3c98f", "#e8ab97", "#d9a3c2", "#a2a2b5", "#c9c3f2", "#86c2c4", "#f0eee6", "#b5a6e8"];
  const t = ctx.added(document.createElement("div"));
  t.className = "ch-team"; t.setAttribute("aria-hidden", "true");
  for (let i = 0; i < 20; i++) {
    const s = document.createElement("span");
    s.innerHTML = BEE;
    s.style.color = cols[Math.floor(Math.random() * cols.length)];
    s.style.setProperty("--s", (0.72 + Math.random() * 0.5).toFixed(2));
    s.style.setProperty("--r", (Math.random() * 26 - 13).toFixed(0) + "deg");
    s.style.marginBottom = Math.round(Math.random() * 16) + "px";
    s.style.marginLeft = (i ? Math.round(Math.random() * 12 - 2) : 0) + "px";
    s.style.setProperty("--d", (0.3 + i * 0.045 + Math.random() * 0.12).toFixed(2) + "s");
    t.appendChild(s);
  }
  h.appendChild(t);
  const tx = $(".ch-txt", h);
  const place = () => { if (tx) t.style.paddingLeft = Math.max(16, tx.getBoundingClientRect().left - h.getBoundingClientRect().left) + "px"; };
  place();
  ctx.on(window, "resize", place);
  /* Now and then a bee jumps and waves */
  if (ctx.reduce) return;
  const list = Array.from(t.children) as HTMLElement[];
  let vis = true, last = -1;
  ctx.io((e) => { vis = e[0].isIntersecting; }).observe(h);
  const wave = () => {
    if (vis && !document.hidden) {
      const n = Math.random() < 0.25 ? 2 : 1;
      for (let k = 0; k < n; k++) {
        let j;
        do { j = Math.floor(Math.random() * list.length); } while (j === last && list.length > 1);
        last = j;
        const b = list[j];
        b.classList.remove("wave", "wave2"); void b.offsetWidth;
        b.classList.add(Math.random() < 0.5 ? "wave" : "wave2");
      }
    }
    ctx.timeout(wave, 1600 + Math.random() * 2400);
  };
  ctx.timeout(wave, 2600);
}

/* Celebration bee under the founding year (2025) in the timeline */
function milestoneBee(ctx: Ctx) {
  const y = $$(".tr-i.boss .tr-y").find((e) => e.textContent?.trim() === "2025");
  if (!y || $(".tr-bee", y)) return;
  const b = ctx.added(document.createElement("span"));
  b.className = "tr-bee"; b.setAttribute("aria-hidden", "true"); b.innerHTML = BEE;
  const cols = ["#4e49f2", "#9692ff", "#e3c98f", "#7fb6e6", "#e8ab97", "#9cc9b4"];
  for (let i = 0; i < 12; i++) {
    const c = document.createElement("i");
    c.style.setProperty("--a", i * 30 + Math.random() * 14 + "deg");
    c.style.setProperty("--c", cols[i % cols.length]);
    b.appendChild(c);
  }
  y.appendChild(b);
  const play = () => { b.classList.remove("go"); void b.offsetWidth; b.classList.add("go"); };
  const li = y.closest(".tr-i") || y;
  ctx.io((e) => { if (e[0].isIntersecting) play(); else b.classList.remove("go"); }, { rootMargin: "0px 0px -15% 0px", threshold: 0 }).observe(li);
}

/* Bo11y: on load a bee hops from See to Understand to Act, lighting each card */
function loopBee(ctx: Ctx) {
  const loop = $(".bo-hero .bo-loop");
  if (!loop || !loop.animate || ctx.reduce) return;
  const items = Array.from(loop.children) as HTMLElement[];
  if (items.length < 3) return;
  const bee = ctx.added(document.createElement("span"));
  bee.className = "bo-bee"; bee.setAttribute("aria-hidden", "true"); bee.innerHTML = BEE;
  loop.appendChild(bee);
  const W = 26;
  const spot = (li: HTMLElement) => {
    const ic = $(".bz-ic", li) || li, r = ic.getBoundingClientRect(), L = loop.getBoundingClientRect();
    return { x: r.left - L.left + r.width / 2 - W / 2, y: r.top - L.top - W + 4 };
  };
  const tf = (x: number, y: number, extra = "") => `translate(${x}px,${y}px)${extra}`;
  type P = { x: number; y: number };
  const hop = (a: P, b: P, dur: number) => {
    const top = Math.min(a.y, b.y) - 46;
    return bee.animate([
      { transform: tf(a.x, a.y) },
      { transform: tf((a.x + b.x) / 2, top, " rotate(-12deg)"), offset: 0.5 },
      { transform: tf(b.x, b.y, " scale(1.1,.88)"), offset: 0.88 },
      { transform: tf(b.x, b.y) },
    ], { duration: dur, easing: "ease-in-out", fill: "forwards" }).finished;
  };
  const light = (li: HTMLElement) => { li.classList.remove("lit"); void li.offsetWidth; li.classList.add("lit"); };
  const wait = (ms: number) => new Promise<void>((r) => ctx.timeout(r, ms));
  const run = () => {
    const p = items.slice(0, 3).map(spot), start = { x: p[0].x - 70, y: p[0].y - 30 };
    bee.style.opacity = "1";
    bee.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 250, fill: "forwards" });
    hop(start, p[0], 560)
      .then(() => { light(items[0]); return wait(380); })
      .then(() => hop(p[0], p[1], 460))
      .then(() => { light(items[1]); return wait(380); })
      .then(() => hop(p[1], p[2], 460))
      .then(() => { light(items[2]); return wait(650); })
      .then(() => {
        /* Exit flight: zigzag to the right, like a bee, fading out */
        const x0 = p[2].x, y0 = p[2].y, D = Math.max(260, loop.getBoundingClientRect().width - x0 + 140);
        const pts = [[0, 0, 0, 1], [.08, -34, -14, 1], [.2, -18, 12, 1], [.34, -58, -8, .95], [.48, -40, 16, .85], [.62, -82, -10, .7], [.76, -64, 14, .5], [.9, -104, -6, .25], [1, -120, 4, 0]];
        const k = pts.map((q) => ({ transform: tf(x0 + q[0] * D, y0 + q[1], ` rotate(${q[2]}deg)`), opacity: q[3] }));
        return bee.animate(k, { duration: 1150, easing: "cubic-bezier(.4,.1,.6,1)", fill: "forwards" }).finished;
      })
      .then(() => bee.remove())
      .catch(() => bee.remove());
  };
  const io = ctx.io((e) => { if (e[0].isIntersecting) { io.disconnect(); ctx.timeout(run, 900); } }, { threshold: 0.5 });
  io.observe(loop);
}
