import type { MetadataRoute } from "next";
import { ALTERNATES, ROUTES } from "@/lib/routes";
import { SITE_URL } from "@/lib/seo";

const abs = (p: string) => SITE_URL + (p === "/" ? "/" : p);

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => {
    const alt = ALTERNATES[path];
    const en = path === "/en" || path.startsWith("/en/");
    return {
      url: abs(path),
      alternates: alt ? { languages: { es: abs(en ? alt : path), en: abs(en ? path : alt) } } : undefined,
    };
  });
}
