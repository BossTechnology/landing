// Copia el sitio estático (index.html, es/, en/, assets/) a public/ antes de dev/build.
// El artefacto «Website Boss» es la fuente de verdad: estos archivos viven en la raíz del repo
// tal como los publica el artefacto, y Next.js los sirve desde public/.
import { cpSync, rmSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";

const OUT = "public";
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
for (const dir of ["assets", "es", "en"]) {
  if (existsSync(dir)) cpSync(dir, `${OUT}/${dir}`, { recursive: true });
}

// La página principal del artefacto se guarda sin <head> (el artefacto lo agrega al publicar):
// aquí se arma el documento completo para producción.
let home = readFileSync("index.html", "utf8");
if (!/^\s*<!doctype/i.test(home)) {
  const mark = '<div class="relative flex min-h-full flex-col">';
  const at = home.indexOf(mark);
  const head = (at > -1 ? home.slice(0, at) : "").replace(/<script>document\.documentElement\.lang=[\s\S]*?<\/script>/, "").trim();
  const body = at > -1 ? home.slice(at) : home;
  const cls = "inter_16f1b7d3-module__cF7rpG__variable host_grotesk_77adc0cd-module__TAJ6_q__variable h-full antialiased";
  home = `<!doctype html>\n<html lang="es" class="${cls}"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>\n${head}\n</head><body class="min-h-full">${body}</body></html>\n`;
}
writeFileSync(`${OUT}/index.html`, home);
console.log("copy-site: sitio copiado a public/");
