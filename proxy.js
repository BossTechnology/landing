// Clean URLs for the static pages in public/ (production layer: the artifact sync doesn't produce this file).
//   /es/compania        → serves public/es/compania.html
//   /en                 → serves public/en/index.html
//   /es/compania.html   → 308 to /es/compania (old links and shared URLs keep working)
// "/" is served by the beforeFiles rewrite in next.config.mjs. prod/build.mjs rewrites the internal links,
// canonical, hreflang and sitemap to these URLs.
import { NextResponse } from "next/server";

export function proxy(request) {
  const url = request.nextUrl;
  const path = url.pathname;

  if (path.endsWith(".html")) {
    let clean = path.slice(0, -5);
    if (clean === "/index" || clean === "/es/index") clean = "/";
    else if (clean.endsWith("/index")) clean = clean.slice(0, -6);
    const to = url.clone();
    to.pathname = clean;
    return NextResponse.redirect(to, 308);
  }

  if (path === "/en") {
    const to = url.clone();
    to.pathname = "/en/index.html";
    return NextResponse.rewrite(to);
  }

  if (/^\/(es|en)\/[^.]+$/.test(path)) {
    const to = url.clone();
    to.pathname = `${path}.html`;
    return NextResponse.rewrite(to);
  }

  return NextResponse.next();
}

export const config = {
  // pages only: not the API, Next internals, static assets or SEO files
  matcher: ["/((?!api/|_next/|assets/|prod/|favicon|sitemap\\.xml|robots\\.txt).*)"],
};
