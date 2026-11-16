"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { bees, carousels, forms, reveal, videos } from "@/lib/fx/global";
import { bo11yTunnel, bzFx, bzTabs, calc, casosRow, factores, iaDemo, iaViz, post } from "@/lib/fx/pages";
import { createCtx, type Effect, type Lang } from "@/lib/fx/runtime";

// Each effect looks for its own markup and does nothing on pages that don't have it.
const EFFECTS: Effect[] = [videos, reveal, carousels, forms, bees, factores, casosRow, post, calc, iaViz, iaDemo, bzFx, bzTabs, bo11yTunnel];

/** Runs the page effects after every navigation and undoes them when leaving the page. */
export default function Fx({ lang }: { lang: Lang }) {
  const pathname = usePathname() || "/";
  useEffect(() => {
    const ctx = createCtx(lang, pathname);
    for (const fx of EFFECTS) {
      try { fx(ctx); } catch (e) { console.error(`fx ${fx.name} failed`, e); }
    }
    return () => ctx.dispose();
  }, [lang, pathname]);
  return null;
}
