"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ALTERNATES } from "@/lib/routes";

type Lang = "es" | "en";

const COPY = {
  es: { ai: "IA aplicada", cases: "Casos", company: "Compañía", contact: "Contactar" },
  en: { ai: "Applied AI", cases: "Cases", company: "Company", contact: "Contact" },
};

const PILL = "flex min-h-11 items-center justify-center gap-1 rounded-[10px] px-4 py-2 transition-colors xl:min-h-0";
const BURGER = "flex size-11 shrink-0 items-center justify-center rounded-[10px] transition-colors xl:hidden";
const LIGHT_PILL = "bg-ink/[0.06] text-ink hover:bg-ink/[0.12]";
const DARK_PILL = "bg-black/20 text-white hover:bg-black/35";
const CTA = "inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-pill px-7 font-display whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-50 bg-accent-base text-on-accent hover:bg-[#3f3ad9]";
const M_LINK = "flex min-h-11 items-center rounded-xl px-3 text-body-m text-white transition-colors hover:bg-white/5";

/** Which top-level section a path belongs to, to mark it as current in the menu. */
function sectionOf(path: string): string {
  if (/\/casos(\/|$)/.test(path)) return "casos";
  const m = path.match(/\/(productos\/aplicaciones|productos\/plataformas|ia-aplicada|bo11y|compania)$/);
  return m ? m[1] : "";
}

function LangSwitch({ lang, here, other, className }: { lang: Lang; here: string; other: string; className: string }) {
  const item = (code: Lang, href: string, first: boolean) => {
    const current = code === lang;
    const a = (
      <Link
        aria-current={current ? "true" : undefined}
        className={`-my-3 -mx-1 px-1 py-3 uppercase transition-opacity hover:opacity-100 ${current ? "font-semibold" : "font-light opacity-70"}`}
        href={href}
      >
        {code}
      </Link>
    );
    return (
      <span className="flex items-center">
        {!first && <span className="mx-0.5 opacity-70">/</span>}
        {a}
      </span>
    );
  };
  return (
    <p className={className}>
      {item("es", lang === "es" ? here : other, true)}
      {item("en", lang === "en" ? here : other, false)}
    </p>
  );
}

export default function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname() || "/";
  const t = COPY[lang];
  const base = lang === "es" ? "/es" : "/en";
  const home = lang === "es" ? "/" : "/en";
  const other = ALTERNATES[pathname] ?? (lang === "es" ? "/en" : "/");
  const section = sectionOf(pathname);

  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<{ light: boolean; backdrop: boolean } | null>(null);

  // Light or dark bar depending on the section behind the header (sections declare data-nav="dark")
  const sample = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;
    const els = document.elementsFromPoint(Math.round(window.innerWidth / 2), 8);
    let dark = false;
    for (const el of els) {
      if (header.contains(el)) continue;
      const m = el.closest("[data-nav]");
      dark = !!m && m.getAttribute("data-nav") === "dark";
      break;
    }
    const next = { light: !dark, backdrop: window.scrollY > 24 || menuOpen };
    setTheme((cur) => (cur && cur.light === next.light && cur.backdrop === next.backdrop ? cur : next));
  }, [menuOpen]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; sample(); }); };
    sample();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [sample, pathname]);

  // A new page closes the mobile menu
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const light = theme?.light ?? false;
  const pill = light ? LIGHT_PILL : DARK_PILL;
  const bar = theme ? (theme.light ? "light" : theme.backdrop ? "dark" : "none") : undefined;
  const cur = (key: string) => (section === key ? "page" : undefined);

  const nav = [
    { key: "productos/plataformas", href: `${base}/productos/plataformas`, label: "BzzzBX" },
    { key: "productos/aplicaciones", href: `${base}/productos/aplicaciones`, label: "Engines" },
    { key: "ia-aplicada", href: `${base}/ia-aplicada`, label: t.ai },
    { key: "bo11y", href: `${base}/bo11y`, label: "Bo11y" },
    { key: "casos", href: `${base}/casos`, label: t.cases },
    { key: "compania", href: `${base}/compania`, label: t.company },
  ];

  return (
    <header ref={headerRef} data-bar={bar} className="fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-5 lg:px-6">
        <Link aria-label="Boss.Technology" className="shrink-0" href={home}>
          <span className={`flex items-center gap-2.5 transition-[filter] duration-300${light ? " [&_img]:brightness-0" : ""}`}>
            <img src="/assets/brand/isotipo.svg" alt="" aria-hidden="true" width={32} height={31} className="h-[31px] w-[32px] shrink-0" />
            <img src="/assets/brand/wordmark-nav.svg" alt="Boss.Technology" width={190} height={23} className="h-[20px] w-auto shrink-0 sm:h-[23px]" />
          </span>
        </Link>
        <nav className="hidden items-center gap-3 xl:flex" style={{ whiteSpace: "nowrap" }}>
          {nav.map((n) => (
            <Link key={n.key} aria-current={cur(n.key)} className={`${PILL} ${pill}`} href={n.href}>
              {n.label}
            </Link>
          ))}
          <Link className={`${CTA} h-[42px] py-0`} href={`${base}/contacto`}>{t.contact}</Link>
          <LangSwitch lang={lang} here={pathname} other={other} className={`flex items-center ${light ? "text-ink" : "text-white"}`} />
        </nav>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          className={`${BURGER} ${pill}`}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x size-5" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu size-5" aria-hidden="true"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="mx-4 mt-1 rounded-2xl border border-white/10 bg-ink/95 shadow-2xl shadow-black/50 backdrop-blur-md xl:hidden">
          <nav className="flex max-h-[calc(100dvh-7rem)] flex-col overflow-y-auto overscroll-contain p-2">
            {nav.slice(0, 2).map((n) => (
              <Link key={n.key} aria-current={cur(n.key)} className={M_LINK} href={n.href}>{n.label}</Link>
            ))}
            <div className="mt-1 border-t border-white/5 pt-1">
              {nav.slice(2).map((n) => (
                <Link key={n.key} aria-current={cur(n.key)} className={M_LINK} href={n.href}>{n.label}</Link>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/5 px-1 pt-4">
              <Link className={`${CTA.replace("shrink-0 ", "")} py-3.5 flex-1`} href={`${base}/contacto`}>{t.contact}</Link>
              <LangSwitch lang={lang} here={pathname} other={other} className="flex items-center text-white" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
