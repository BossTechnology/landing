import { $, $$, type Ctx } from "./runtime";

/* ===================== Home ===================== */

/* "Factors": words light up, then cards cycle over the isometric scenes */
export function factores(ctx: Ctx) {
  const s = document.getElementById("factores");
  if (!s) return;
  const ws = $$(".vr-w", s), figs = $$(".mz-stack>.mz", s);
  if (!figs.length) return;
  let fi = 0, fig = figs[0], cards = $$(".mz-card", fig);
  const q = (c: string, k: string) => $$(`${c}[data-k="${k}"]`, fig);
  let started = false, vis = false, ci = -1, tick = 0;
  const on = (i: number) => { ws.forEach((w, k) => w.classList.toggle("cur", k === i)); ws[i]?.classList.add("on"); };
  const hl = (card: HTMLElement, v: boolean) => {
    (card.getAttribute("data-a") || "").split(" ").forEach((k) => {
      q(".mz-lab", k).concat(q(".mz-ln", k), q(".mz-ring", k)).forEach((el) => el.classList.toggle("hl", v));
    });
    const arc = $(`.mz-arc[data-c="${card.getAttribute("data-c")}"]`, fig);
    if (arc) arc.classList.toggle("hl", v);
  };
  const swap = () => {
    const old = fig; fi = (fi + 1) % figs.length; fig = figs[fi]; cards = $$(".mz-card", fig); ci = -1;
    old.classList.remove("cur"); fig.classList.add("cur");
  };
  const next = () => {
    if (!vis || document.hidden) return;
    const prev = cards[ci];
    if (prev) {
      prev.classList.remove("on"); prev.classList.add("out"); hl(prev, false);
      ctx.timeout(() => prev.classList.remove("out"), 700);
    }
    if (ci === cards.length - 1 && figs.length > 1) {
      swap();
      ctx.timeout(() => { ci = 0; const c = cards[0]; hl(c, true); ctx.timeout(() => c.classList.add("on"), 650); }, 900);
      return;
    }
    ci = (ci + 1) % cards.length;
    const c = cards[ci]; hl(c, true);
    ctx.timeout(() => c.classList.add("on"), 650);
  };
  const loop = () => { clearInterval(tick); tick = ctx.interval(next, 3200); };
  ctx.defer(() => clearInterval(tick));
  if (ctx.reduce) {
    s.classList.add("go", "flow", "act"); ws.forEach((w) => w.classList.add("on")); ws[ws.length - 1]?.classList.add("cur");
    ci = 0; cards[0].classList.add("on"); hl(cards[0], true);
    return;
  }
  const start = () => {
    started = true; s.classList.add("go"); on(0);
    ctx.timeout(() => { s.classList.add("flow"); on(1); }, 1500);
    ctx.timeout(() => { s.classList.add("act"); on(2); next(); loop(); }, 3200);
  };
  ctx.io((e) => {
    vis = e[0].isIntersecting;
    if (vis && !started) start();
    else if (vis && s.classList.contains("act")) loop();
    else if (!vis) clearInterval(tick);
  }, { threshold: 0.3 }).observe(s);
}

/* Cases row: hovered/focused card expands */
export function casosRow(ctx: Ctx) {
  const r = $("#casos .cx-row");
  if (!r) return;
  const p = Array.from(r.children);
  const on = (e: Element) => p.forEach((x) => x.classList.toggle("on", x === e));
  p.forEach((e) => { ctx.on(e, "mouseenter", () => on(e)); ctx.on(e, "focus", () => on(e)); });
}

/* ===================== Blog posts ===================== */

/* Table of contents follows the reading position; copy and share links */
export function post(ctx: Ctx) {
  const links = $$<HTMLAnchorElement>(".pst-toc a");
  if (links.length) {
    const hs = links.map((a) => document.getElementById((a.getAttribute("href") || "").slice(1)));
    const on = () => {
      const y = window.scrollY + 140;
      let i = 0;
      hs.forEach((h, k) => { if (h && h.getBoundingClientRect().top + window.scrollY <= y) i = k; });
      links.forEach((a, k) => a.classList.toggle("on", k === i));
    };
    ctx.on(window, "scroll", on, { passive: true });
    on();
  }
  const c = $(".pst-copy");
  if (c) ctx.on(c, "click", () => {
    try { navigator.clipboard.writeText(location.href); } catch { /* ignore */ }
    c.classList.add("ok"); c.setAttribute("aria-label", c.dataset.ok || "");
    ctx.timeout(() => c.classList.remove("ok"), 1600);
  });
  const url = encodeURIComponent(location.href.split("#")[0]);
  $$<HTMLAnchorElement>(".pst-share a").forEach((a) => {
    const base = a.getAttribute("href") || "";
    if (!base.includes("?url=")) a.href = base + "?url=" + url;
  });
  $$<HTMLAnchorElement>("[data-share=li]").forEach((a) => { a.href = "https://www.linkedin.com/sharing/share-offsite/?url=" + url; });
}

/* ===================== Business cases ===================== */

/* Savings calculators (mining: availability; restaurants: orders) */
export function calc(ctx: Ctx) {
  const r = $(".cs-calc");
  if (!r) return;
  const L = r.getAttribute("data-loc") || undefined;
  const f = (n: number, d = 0) => n.toLocaleString(L, { maximumFractionDigits: d });
  const val = (k: string) => +($<HTMLInputElement>(`[data-i=${k}]`, r)?.value || 0);
  const out = (k: string, v: string | number) => { const el = $(`[data-o=${k}]`, r); if (el) el.textContent = String(v); };
  const money = (m: number) => "US$ " + (m >= 1e6 ? f(m / 1e6, 1) + " M" : f(Math.round(m / 1e3)) + " k");
  const mining = !!$("[data-i=d]", r);
  const u = () => {
    if (mining) {
      const n = val("n"), d = val("d"), v = val("v"), h = (d / 100) * n * 8760;
      out("n", n); out("d", f(d, 1)); out("v", "US$ " + f(v)); out("h", f(Math.round(h))); out("m", money(h * v));
    } else {
      const n = val("n"), p = val("p"), t = val("t"), o = n * p * 365;
      out("n", n); out("p", p); out("t", "US$ " + t); out("h", f(o)); out("m", money(o * t));
    }
  };
  $$("input", r).forEach((i) => ctx.on(i, "input", u));
  u();
}

/* ===================== Applied AI ===================== */

/* Canvas: business data streams rise into the core and light up a neural network */
export function iaViz(ctx: Ctx) {
  const w = $(".ia-viz");
  if (!w) return;
  const cv = $<HTMLCanvasElement>("canvas", w);
  const c2 = cv?.getContext?.("2d");
  if (!cv || !c2) return;
  const g2 = c2;
  const rm = ctx.reduce;
  let W = 0, H = 0, dpr = 1, vis = true, raf = 0;
  type Node = { x: number; y: number; f: number; ph: number };
  type Graph = { cx: number; cy: number; N: Node[]; E: [number, number][]; R: number[]; S: { x0: number; ph: number; sp: number }[] };
  let G: Graph;
  const logo = new Image();
  logo.src = "/assets/brand/isotipo.svg";
  const rnd = (i: number) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const build = (): Graph => {
    const cx = W * 0.5, cy = H * 0.66, N: Node[] = [], E: [number, number][] = [], S: Graph["S"] = [];
    /* neural network (the AI) as a dome over the core */
    for (let i = 0; i < 130; i++) {
      const a = i * 2.39996323, r = Math.sqrt((i + 0.5) / 130);
      if (Math.sin(a) > -0.12 || r < 0.28) continue;
      N.push({ x: cx + Math.cos(a) * W * 0.47 * r + (rnd(i) - 0.5) * 10, y: cy - 24 + Math.sin(a) * H * 0.56 * r + (rnd(i + 7) - 0.5) * 10, f: -9, ph: rnd(i + 9) * 6 });
    }
    N.forEach((n, i) => {
      const d = N.map((m, j) => [j, Math.hypot(m.x - n.x, m.y - n.y)] as [number, number]).filter((x) => x[0] !== i).sort((a, b) => a[1] - b[1]);
      for (let k = 0; k < 3; k++) if (d[k] && d[k][0] > i && d[k][1] < W * 0.16) E.push([i, d[k][0]]);
    });
    const R = N.map((n, i) => [i, Math.hypot(n.x - cx, n.y - cy)] as [number, number]).sort((a, b) => a[1] - b[1]).slice(0, 6).map((x) => x[0]);
    /* data streams (the business) rising to the core */
    for (let k = 0; k < 18; k++) S.push({ x0: W * (0.04 + (0.92 * k) / 17), ph: rnd(k + 90), sp: 0.25 + 0.25 * rnd(k + 30) });
    return { cx, cy, N, E, R, S };
  };
  const sz = () => {
    const r = cv.getBoundingClientRect();
    W = r.width; H = r.height; dpr = Math.min(2, devicePixelRatio || 1);
    cv.width = W * dpr; cv.height = H * dpr; g2.setTransform(dpr, 0, 0, dpr, 0, 0);
    G = build();
  };
  let P: { path: number[]; k: number; u: number; t: number }[] = [];
  const fire = (t: number) => { const r = G.R[Math.floor(Math.random() * G.R.length)]; P.push({ path: [-1, r], k: 0, u: 0, t }); };
  const nbr = (i: number) => { const o: number[] = []; G.E.forEach((e) => { if (e[0] === i) o.push(e[1]); if (e[1] === i) o.push(e[0]); }); return o; };
  const pt = (i: number) => (i < 0 ? { x: G.cx, y: G.cy } : G.N[i]);
  let last = 0, nf = 0;
  const frame = (now: number) => {
    raf = 0;
    const ctx2 = g2, t = now / 1000, dt = Math.min(0.05, t - (last || t));
    last = t;
    ctx2.clearRect(0, 0, W, H);
    const { cx, cy } = G;
    G.S.forEach((s) => {
      const bx = s.x0, by = H + 10, c1x = bx, c1y = H * 0.9, c2x = cx + (bx - cx) * 0.12, c2y = cy + 70;
      ctx2.beginPath(); ctx2.moveTo(bx, by); ctx2.bezierCurveTo(c1x, c1y, c2x, c2y, cx, cy + 26);
      const g = ctx2.createLinearGradient(0, H, 0, cy);
      g.addColorStop(0, "rgba(150,146,255,0)"); g.addColorStop(1, "rgba(150,146,255,.28)");
      ctx2.strokeStyle = g; ctx2.lineWidth = 1; ctx2.stroke();
      if (!rm) for (let q = 0; q < 2; q++) {
        const u = (t * s.sp + s.ph + q * 0.5) % 1, a = 1 - u;
        const px = a * a * a * bx + 3 * a * a * u * c1x + 3 * a * u * u * c2x + u * u * u * cx;
        const py = a * a * a * by + 3 * a * a * u * c1y + 3 * a * u * u * c2y + u * u * u * (cy + 26);
        ctx2.beginPath(); ctx2.arc(px, py, 1.8, 0, 7);
        ctx2.fillStyle = "rgba(214,212,255," + 0.9 * Math.sin(u * Math.PI) + ")";
        ctx2.shadowColor = "#9692ff"; ctx2.shadowBlur = 10; ctx2.fill(); ctx2.shadowBlur = 0;
      }
    });
    G.E.forEach((e) => {
      const a = G.N[e[0]], b = G.N[e[1]];
      ctx2.beginPath(); ctx2.moveTo(a.x, a.y); ctx2.lineTo(b.x, b.y);
      ctx2.strokeStyle = "rgba(150,146,255,.16)"; ctx2.lineWidth = 1; ctx2.stroke();
    });
    G.R.forEach((i) => {
      const n = G.N[i];
      ctx2.beginPath(); ctx2.moveTo(cx, cy - 26); ctx2.lineTo(n.x, n.y); ctx2.strokeStyle = "rgba(150,146,255,.22)"; ctx2.stroke();
    });
    /* signals rise from the core into the network and light it up */
    if (!rm && t > nf) { fire(t); nf = t + 0.35 + Math.random() * 0.4; }
    P = P.filter((p) => {
      p.u += dt * 2.6;
      if (p.u >= 1) {
        const to = p.path[p.path.length - 1];
        if (to >= 0) G.N[to].f = t;
        p.k++;
        if (p.k > 3) return false;
        const nb = nbr(to);
        if (!nb.length) return false;
        p.path.push(nb[Math.floor(Math.random() * nb.length)]); p.u = 0;
      }
      const a = pt(p.path[p.path.length - 2]), b = pt(p.path[p.path.length - 1]);
      const x = a.x + (b.x - a.x) * p.u, y = a.y + (b.y - a.y) * p.u;
      ctx2.beginPath(); ctx2.moveTo(a.x, a.y); ctx2.lineTo(x, y); ctx2.strokeStyle = "rgba(150,146,255,.55)"; ctx2.lineWidth = 1.2; ctx2.stroke();
      ctx2.beginPath(); ctx2.arc(x, y, 2.2, 0, 7); ctx2.fillStyle = "#fff"; ctx2.shadowColor = "#9692ff"; ctx2.shadowBlur = 12; ctx2.fill(); ctx2.shadowBlur = 0;
      return true;
    });
    G.N.forEach((n) => {
      const k = Math.max(0, 1 - (t - n.f) / 1.2), b = 0.35 + 0.25 * Math.sin(t * 1.3 + n.ph);
      ctx2.beginPath(); ctx2.arc(n.x, n.y, 2.2 + k * 2.5, 0, 7);
      ctx2.fillStyle = "rgba(214,212,255," + (b + k * 0.6) + ")"; ctx2.shadowColor = "#9692ff"; ctx2.shadowBlur = 6 + k * 16; ctx2.fill(); ctx2.shadowBlur = 0;
    });
    /* core */
    const R = 34 + Math.sin(t * 2) * 1.2, gl = ctx2.createRadialGradient(cx, cy, 0, cx, cy, R * 3.4);
    gl.addColorStop(0, "rgba(78,73,242,.55)"); gl.addColorStop(1, "rgba(78,73,242,0)");
    ctx2.fillStyle = gl; ctx2.beginPath(); ctx2.arc(cx, cy, R * 3.4, 0, 7); ctx2.fill();
    ctx2.beginPath();
    if (ctx2.roundRect) ctx2.roundRect(cx - R, cy - R, R * 2, R * 2, R * 0.42); else ctx2.rect(cx - R, cy - R, R * 2, R * 2);
    ctx2.fillStyle = "#4e49f2"; ctx2.shadowColor = "#6757f8"; ctx2.shadowBlur = 30; ctx2.fill(); ctx2.shadowBlur = 0;
    ctx2.strokeStyle = "rgba(255,255,255,.25)"; ctx2.lineWidth = 1; ctx2.stroke();
    if (logo.complete && logo.naturalWidth) ctx2.drawImage(logo, cx - R * 0.62, cy - R * 0.62, R * 1.24, R * 1.24);
    if (!rm && vis) raf = ctx.raf(frame);
  };
  sz();
  ctx.on(window, "resize", () => { sz(); if (rm) ctx.raf(frame); });
  logo.onload = () => { if (rm && !ctx.disposed) ctx.raf(frame); };
  ctx.io((e) => { vis = e[0].isIntersecting; if (vis && !raf && !rm) raf = ctx.raf(frame); }).observe(w);
  raf = ctx.raf(frame);
}

/* Q&A demo cycles through questions while visible */
export function iaDemo(ctx: Ctx) {
  const d = $(".ia-demo");
  if (!d || ctx.reduce) return;
  const q = $$(".ia-qa", d);
  if (q.length < 2) return;
  let i = 0, vis = false;
  ctx.io((e) => { vis = e[0].isIntersecting; }).observe(d);
  ctx.interval(() => {
    if (!vis || document.hidden) return;
    q[i].classList.remove("on"); i = (i + 1) % q.length; q[i].classList.add("on");
  }, 6500);
}

/* ===================== BzzzBX ===================== */

/* Light effects placed over the hero render (sweep, spill, bee, LEDs) */
export function bzFx(ctx: Ctx) {
  const bg = $("#top .bz-hero-bg");
  const img = bg && $<HTMLImageElement>("img", bg);
  if (!bg || !img) return;
  const fx = ctx.added(document.createElement("div"));
  fx.className = "bz-fx"; fx.setAttribute("aria-hidden", "true");
  ([["sweep", 1640, 815], ["spill", 1605, 975], ["bee", 1200, 742], ["strip", 1605, 900], ["led", 1393, 762, 0], ["led", 1448, 773, 1], ["led", 1505, 783, 2]] as [string, number, number, number?][]).forEach((p) => {
    const e = document.createElement("i");
    e.className = "bz-fx-" + p[0]; e.setAttribute("data-x", String(p[1])); e.setAttribute("data-y", String(p[2]));
    if (p[3] != null) e.style.setProperty("--i", String(p[3]));
    fx.appendChild(e);
  });
  bg.appendChild(fx);
  const place = () => {
    const iw = 2400, ih = 1340, rb = bg.getBoundingClientRect(), r = img.getBoundingClientRect(), c = getComputedStyle(img);
    const op = c.objectPosition.split(" "), px = parseFloat(op[0]) / 100, py = parseFloat(op[1] || "50%") / 100;
    const s = c.objectFit === "contain" ? Math.min(r.width / iw, r.height / ih) : c.objectFit === "cover" ? Math.max(r.width / iw, r.height / ih) : r.width / iw;
    const dx = r.left - rb.left + (r.width - iw * s) * px, dy = r.top - rb.top + (r.height - ih * s) * py;
    fx.style.setProperty("--s", String(s));
    Array.from(fx.children as HTMLCollectionOf<HTMLElement>).forEach((e) => {
      e.style.left = dx + +(e.getAttribute("data-x") || 0) * s + "px";
      e.style.top = dy + +(e.getAttribute("data-y") || 0) * s + "px";
    });
  };
  place();
  ctx.on(window, "resize", place);
  if (!img.complete) ctx.on(img, "load", place);
}

/* Capability tabs: rotate automatically on desktop, pause while the reader interacts */
export function bzTabs(ctx: Ctx) {
  const r = $(".bz-tabs");
  if (!r) return;
  const b = $$(".bz-tb-h", r);
  const D = 7000, desk = matchMedia("(min-width:1024px)");
  let cur = 0, t: number | null = null, vis = false, hold = false, left = D, t0 = 0, tt = 0;
  const show = (i: number) => {
    cur = i;
    $$(".bz-tb,.bz-tp", r).forEach((el) => el.classList.remove("on"));
    b.forEach((y) => y.setAttribute("aria-expanded", "false"));
    (b[i].parentNode as HTMLElement).classList.add("on");
    document.getElementById("bz-tp" + i)?.classList.add("on");
    b[i].setAttribute("aria-expanded", "true");
  };
  const tick = () => { t = null; show((cur + 1) % b.length); left = D; arm(); };
  const arm = () => {
    if (t || hold || ctx.reduce || !vis || !desk.matches) return;
    r.classList.add("auto"); t0 = Date.now(); t = ctx.timeout(tick, left);
  };
  const pause = () => { if (t) { clearTimeout(t); t = null; left = Math.max(400, left - (Date.now() - t0)); } };
  const halt = () => { pause(); r.classList.remove("auto"); };
  /* while the reader is on the section (mouse, focus or touch) rotation stops and the progress bar freezes */
  const enter = () => { hold = true; r.classList.add("hold"); pause(); };
  const leave = () => { hold = false; r.classList.remove("hold"); arm(); };
  ctx.on(r, "mouseenter", enter);
  ctx.on(r, "mouseleave", leave);
  ctx.on(r, "focusin", enter);
  ctx.on(r, "focusout", (e: FocusEvent) => { if (!r.contains(e.relatedTarget as Node)) leave(); });
  ctx.on(r, "touchstart", () => { enter(); clearTimeout(tt); tt = ctx.timeout(leave, 12000); }, { passive: true });
  b.forEach((x, i) => ctx.on(x, "click", () => { halt(); show(i); left = D; r.classList.remove("auto"); void r.offsetWidth; arm(); }));
  ctx.io((es) => { vis = es[0].isIntersecting; if (vis) arm(); else halt(); }, { threshold: 0.4 }).observe(r);
  ctx.defer(() => { if (t) clearTimeout(t); });
}

/* ===================== Bo11y ===================== */

/* "Today / With Bo11y" switch for the dark tunnels */
export function bo11yTunnel(ctx: Ctx) {
  const box = $("[data-bo-tun]");
  if (!box) return;
  const btns = $$(".bo-sw button", box);
  const set = (dark: boolean) => {
    box.classList.toggle("dark", dark);
    btns.forEach((b) => b.setAttribute("aria-pressed", String((b.getAttribute("data-v") === "dark") === dark)));
  };
  btns.forEach((b) => ctx.on(b, "click", () => { box.classList.add("seen"); set(b.getAttribute("data-v") === "dark"); }));
  set(true);
}
