// Production layer for the Boss.Technology site.
//
// The site in index.html, es/, en/ and assets/ is synced from the «Website Boss» artifact and gets
// overwritten on every sync. Everything needed for production lives here instead and is applied to
// public/ at build time, after scripts/copy-site.mjs:
//   - SEO: canonical, hreflang, Open Graph/Twitter image, JSON-LD, sitemap.xml, robots.txt
//   - fixes broken relative asset paths and the "Web: " prefix in the home title
//   - removes internal pages (style guide) from the published site
//   - loads prod/static/prod.css (design and mobile fixes, cookie banner) and prod.js
//     (cookie consent + Google Analytics 4, real form submission)
//
// Env: SITE_URL (default https://boss.technology), GA_MEASUREMENT_ID (e.g. G-XXXXXXX; no GA if empty).
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const OUT = "public";
const SITE_URL = (process.env.SITE_URL || "https://boss.technology").replace(/\/+$/, "");
const GA_ID = (process.env.GA_MEASUREMENT_ID || "").trim();
const INTERNAL = ["es/guia-estilo.html", "en/guia-estilo.html", "en/style-guide.html"];

if (!existsSync(path.join(OUT, "index.html"))) {
  console.error("prod: public/index.html not found — run scripts/copy-site.mjs first");
  process.exit(1);
}
if (GA_ID && !/^G-[A-Z0-9]+$/i.test(GA_ID)) {
  console.error(`prod: GA_MEASUREMENT_ID "${GA_ID}" doesn't look like a GA4 ID (G-XXXXXXX)`);
  process.exit(1);
}

/* ---------- helpers ---------- */
const htmlFiles = [];
(function walk(dir) {
  for (const f of readdirSync(path.join(OUT, dir))) {
    const rel = path.posix.join(dir, f);
    if (statSync(path.join(OUT, rel)).isDirectory()) { if (!["assets", "prod"].includes(f)) walk(rel); }
    else if (f.endsWith(".html")) htmlFiles.push(rel);
  }
})("");

// Clean URLs (served by proxy.js): "index.html" → "/", "en/index.html" → "/en", "es/compania.html" → "/es/compania"
const urlOf = (file) => (file === "index.html" || file === "es/index.html" ? "/" : "/" + file.replace(/(\/index)?\.html$/, ""));
const abs = (file) => SITE_URL + urlOf(file);
const langOf = (file) => (file.startsWith("en/") ? "en" : "es");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const resolve = (from, href) => path.posix.normalize(path.posix.join(path.posix.dirname(from), href.split(/[?#]/)[0]));
const log = [];

/* ---------- 1. internal pages are not published ---------- */
for (const f of INTERNAL) {
  if (existsSync(path.join(OUT, f))) { rmSync(path.join(OUT, f)); log.push(`removed internal page ${f}`); }
}
const pages = htmlFiles.filter((f) => !INTERNAL.includes(f));

/* ---------- 2. read pages, fix broken relative paths, find language alternates ---------- */
const docs = {};
if (readFileSync(path.join(OUT, "index.html"), "utf8").includes("<!-- prod -->")) {
  console.error("prod: public/ was already processed — run scripts/copy-site.mjs first");
  process.exit(1);
}
for (const file of pages) {
  let html = readFileSync(path.join(OUT, file), "utf8");
  // Relative asset paths that don't exist from this page but do from the site root
  // (content copied between the root home and en/ without adjusting the path).
  html = html.replace(/\b(src|href|poster)="(?!https?:|\/|#|data:|mailto:|tel:)([^"]+)"/g, (m, attr, val) => {
    const target = resolve(file, val);
    if (existsSync(path.join(OUT, target)) || !existsSync(path.join(OUT, val.split(/[?#]/)[0]))) return m;
    const fixed = path.posix.relative(path.posix.dirname(file), val) || val;
    log.push(`fixed path in ${file}: ${val} → ${fixed}`);
    return `${attr}="${fixed}"`;
  });
  html = html.replace(/<title>Web: /, "<title>");
  docs[file] = html;
}
const alt = {};
for (const file of pages) {
  const other = langOf(file) === "es" ? "en" : "es";
  const header = docs[file].slice(docs[file].indexOf("<header"), docs[file].indexOf("</header>"));
  const m = header.match(new RegExp(`href="([^"]+)"[^>]*>${other}</a>`));
  const target = m && resolve(file, m[1]);
  if (target && docs[target]) alt[file] = target;
}

/* ---------- 3. SEO and production assets in every page ---------- */
// Social networks cache the preview image by URL: version it by content so a new image shows up.
const OG_VERSION = Object.fromEntries(["es", "en"].map((l) =>
  [l, createHash("sha256").update(readFileSync(`prod/static/og-${l}.jpg`)).digest("hex").slice(0, 8)]));
const ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Boss.Technology",
  url: SITE_URL + "/",
  logo: SITE_URL + "/assets/brand/isotipo.svg",
  email: "admin@boss.technology",
  sameAs: ["https://www.linkedin.com/company/bosstechnology"],
};
for (const file of pages) {
  let html = docs[file];
  const lang = langOf(file);
  const es = lang === "es" ? file : alt[file];
  const en = lang === "en" ? file : alt[file];
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "Boss.Technology";
  const img = `${SITE_URL}/prod/og-${lang}.jpg?v=${OG_VERSION[lang]}`;
  const tags = [
    `<link rel="canonical" href="${abs(file)}"/>`,
    ...(es && en ? [
      `<link rel="alternate" hreflang="es" href="${abs(es)}"/>`,
      `<link rel="alternate" hreflang="en" href="${abs(en)}"/>`,
      `<link rel="alternate" hreflang="x-default" href="${abs(es)}"/>`,
    ] : []),
    `<meta property="og:url" content="${abs(file)}"/>`,
    `<meta property="og:image" content="${img}"/>`,
    `<meta property="og:image:width" content="1200"/>`,
    `<meta property="og:image:height" content="630"/>`,
    `<meta property="og:image:alt" content="${esc(title)}"/>`,
    `<meta name="twitter:card" content="summary_large_image"/>`,
    `<meta name="twitter:image" content="${img}"/>`,
  ];
  if (!/property="og:type"/.test(html)) tags.push(`<meta property="og:type" content="website"/>`);
  if (lang === "en") html = html.replace(/<meta property="og:locale" content="es_PE"\/>/, `<meta property="og:locale" content="en_US"/>`);
  if (file === "index.html" || file === "en/index.html") {
    const site = { "@context": "https://schema.org", "@type": "WebSite", name: "Boss.Technology", url: SITE_URL + "/", inLanguage: lang };
    tags.push(`<script type="application/ld+json">${JSON.stringify([ORG, site])}</script>`);
  }
  tags.push(`<link rel="stylesheet" href="/prod/prod.css"/>`);
  tags.push(`<script defer src="/prod/prod.js"${GA_ID ? ` data-ga="${GA_ID}"` : ""}></script>`);
  // Internal page links → absolute clean URLs. Also matches the escaped hrefs inside the menu HTML
  // that the artifact keeps as a JSON string in window.BOSS.
  html = html.replace(/href=(\\?")([^"\\]+?\.html)(#[^"\\]*)?\1/g, (m, q, val, hash) => {
    if (/^(https?:|\/\/|mailto:|tel:)/.test(val)) return m;
    const target = val.startsWith("/") ? val.slice(1) : resolve(file, val);
    if (!existsSync(path.join(OUT, target)) && !INTERNAL.includes(target)) return m;
    return `href=${q}${INTERNAL.includes(target) ? "/" : urlOf(target)}${hash || ""}${q}`;
  });
  html = html.replace(/<\/head>/, `<!-- prod -->${tags.join("")}<!-- /prod --></head>`);
  writeFileSync(path.join(OUT, file), html);
}

/* ---------- 3b. next.config.mjs (from the artifact) ---------- */
// It redirects "/en" to "/en/index.html". Config redirects run before proxy.js, so together with the
// ".html → clean URL" redirect it would loop. The artifact sync brings the rule back, so remove it on every build.
{
  const cfgFile = "next.config.mjs";
  const cfg = readFileSync(cfgFile, "utf8");
  const rule = /^[ \t]*\{\s*source:\s*["']\/en["'],\s*destination:\s*["']\/en\/index\.html["'][^}]*\},?[ \t]*\r?\n/m;
  if (rule.test(cfg)) { writeFileSync(cfgFile, cfg.replace(rule, "")); log.push("next.config.mjs: removed the /en → /en/index.html redirect (clean URLs)"); }
}

/* ---------- 4. sitemap.xml and robots.txt ---------- */
const lastmod = new Date().toISOString().slice(0, 10);
const sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
for (const file of [...pages].sort()) {
  const lang = langOf(file), es = lang === "es" ? file : alt[file], en = lang === "en" ? file : alt[file];
  const links = es && en ? `<xhtml:link rel="alternate" hreflang="es" href="${abs(es)}"/><xhtml:link rel="alternate" hreflang="en" href="${abs(en)}"/>` : "";
  sm.push(`  <url><loc>${abs(file)}</loc><lastmod>${lastmod}</lastmod>${links}</url>`);
}
sm.push("</urlset>", "");
writeFileSync(path.join(OUT, "sitemap.xml"), sm.join("\n"));
writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

/* ---------- 5. production assets ---------- */
mkdirSync(path.join(OUT, "prod"), { recursive: true });
cpSync("prod/static", path.join(OUT, "prod"), { recursive: true });

for (const l of log) console.log("prod:", l);
console.log(`prod: ${pages.length} pages ready for ${SITE_URL}${GA_ID ? ` · GA4 ${GA_ID}` : " · GA4 off (no GA_MEASUREMENT_ID)"}`);
