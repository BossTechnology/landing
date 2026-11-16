import type { Metadata } from "next";
import { ALTERNATES } from "./routes";

export const SITE_URL = "https://boss.technology";

const langOf = (path: string) => (path === "/en" || path.startsWith("/en/") ? "en" : "es");

/** Builds title, description, canonical, hreflang and Open Graph tags for a page. */
export function pageMetadata(p: { path: string; title: string; description: string; ogTitle?: string; ogDescription?: string }): Metadata {
  const lang = langOf(p.path);
  const alt = ALTERNATES[p.path];
  const es = lang === "es" ? p.path : alt;
  const en = lang === "en" ? p.path : alt;
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: {
      canonical: p.path,
      languages: es && en ? { es, en, "x-default": es } : undefined,
    },
    openGraph: {
      type: "website",
      siteName: "Boss.Technology",
      url: p.path,
      title: p.ogTitle ?? p.title,
      description: p.ogDescription ?? p.description,
      locale: lang === "en" ? "en_US" : "es_PE",
      images: [{ url: `/assets/brand/og-${lang}.jpg`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [`/assets/brand/og-${lang}.jpg`] },
  };
}
