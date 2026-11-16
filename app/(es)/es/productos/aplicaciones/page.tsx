import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/productos/aplicaciones",
  title: "Engines · Boss.Technology",
  description: "Aplicaciones listas para casos de negocio que se activan sobre los mismos datos de BzzzBX, sin una nueva integración.",
});

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "section.ph.eg-hero{min-height:0!important;padding:132px 24px 72px!important}\n.eg-hero .ph-cta{margin-top:28px}\n.eg{max-width:1152px;margin:0 auto;padding:var(--sec-band,72px) 20px 0}\n.eg-head{text-align:center}.eg-head p{font:600 12px/1 var(--font-family-sans);letter-spacing:.14em;text-transform:uppercase;color:var(--brand-accent)}\n.eg-head h2{margin-top:12px}\n.eg-grid{margin:32px 0 0;padding:0;list-style:none;display:grid;gap:12px;grid-template-columns:1fr}\n@media (min-width:640px){.eg-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media (min-width:1024px){.eg-grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}}\n.eg-grid li{display:flex;flex-direction:column;gap:6px;padding:20px;border-radius:var(--radius-xl,20px);background:var(--card,#fff);border:1px solid var(--indigo-100)}\n.eg-grid i{display:grid;place-items:center;width:38px;height:38px;margin-bottom:8px;border-radius:11px;background:var(--indigo-50);color:var(--brand-accent)}\n.eg-grid i svg{width:22px;height:22px}\n.eg-grid b{font:600 18px/1.2 var(--font-family-display);color:var(--brand-ink)}\n.eg-grid small{font:600 11px/1.2 var(--font-family-sans);letter-spacing:.08em;text-transform:uppercase;color:var(--brand-accent)}\n.eg-grid span{margin-top:4px;font-size:14.5px;line-height:1.5;color:var(--muted-foreground)}" }} />
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1">
        <section className="ph eg-hero" data-nav="dark">
          <div className="ph-in">
            <span className="ph-eb">
              Productos
            </span>
            <h1 className="ph-h1">
              Engines
            </h1>
            <p className="ph-lead">
              Aplicaciones listas para operar sobre BzzzBX. Se activan sobre los mismos datos, sin una nueva integración.
            </p>
            <div className="ph-cta">
              <Link className="inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-pill px-7 py-3.5 font-display whitespace-nowrap transition-colors bg-accent-base text-on-accent hover:bg-[#3f3ad9]" href="/es/contacto">
                Agenda una reunión
                <span aria-hidden="true" className="text-[16px] leading-none">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="eg">
          <header className="eg-head">
            <p>
              8 Engines
            </p>
            <h2 className="sec-title">
              Un Engine para cada frente del negocio.
            </h2>
          </header>
          <ul className="eg-grid">
            <li>
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 19.5 19.5 4.5" />
                  <path d="M9.5 4.5h10v10" />
                </svg>
              </i>
              <small>
                Business journeys
              </small>
              <b>
                Momentum
              </b>
              <span>
                Sigue cada recorrido del negocio de punta a punta y muestra dónde se traba.
              </span>
            </li>
            <li>
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.5 16.5a4.5 4.5 0 0 1 9 0" />
                  <path d="M11.5 16.5a4.5 4.5 0 0 1 9 0" />
                  <path d="M3.5 16.5v2M20.5 16.5v2" />
                </svg>
              </i>
              <small>
                Interacciones con clientes
              </small>
              <b>
                BOB
              </b>
              <span>
                Escucha y analiza las conversaciones con clientes en todos los canales.
              </span>
            </li>
            <li>
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="14" r="3.5" />
                  <path d="M12 6.5v-2.5" />
                  <path d="M7.4 8.4 5.6 6.6" />
                  <path d="M16.6 8.4l1.8-1.8" />
                  <path d="M4.5 14h-1.5" />
                  <path d="M21 14h-1.5" />
                </svg>
              </i>
              <small>
                Ambientes físicos
              </small>
              <b>
                Sentient
              </b>
              <span>
                Vigila las condiciones de tiendas, plantas y almacenes en tiempo real.
              </span>
            </li>
            <li>
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5.5 4.5v15" />
                  <path d="M9.8 4.5v15" />
                  <path d="M14.2 4.5v15" />
                  <path d="M18.5 4.5v15" />
                </svg>
              </i>
              <small>
                Mantenimiento predictivo
              </small>
              <b>
                Machina
              </b>
              <span>
                Anticipa fallas de equipos antes de que detengan la operación.
              </span>
            </li>
            <li>
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8.5V4h4.5" />
                  <path d="M15.5 4H20v4.5" />
                  <path d="M20 15.5V20h-4.5" />
                  <path d="M8.5 20H4v-4.5" />
                </svg>
              </i>
              <small>
                Estrategia Bo11y
              </small>
              <b>
                Chass1s
              </b>
              <span>
                Arma la estrategia y el caso de negocio de Business Observability.
              </span>
            </li>
            <li>
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="7.5" />
                  <circle cx="12" cy="12" r="2.5" />
                  <path d="M2.5 12h2M19.5 12h2" />
                </svg>
              </i>
              <small>
                Captura de datos en campo
              </small>
              <b>
                EyeSite
              </b>
              <span>
                Convierte lo que ocurre en campo en datos, donde antes no existían.
              </span>
            </li>
            <li>
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4 4.5 19" />
                  <path d="M12 4 9.5 19" />
                  <path d="M12 4 14.5 19" />
                  <path d="M12 4 19.5 19" />
                </svg>
              </i>
              <small>
                Geocomando
              </small>
              <b>
                Metamap
              </b>
              <span>
                Ubica activos, flotas y sitios en un mapa en vivo.
              </span>
            </li>
            <li>
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3.4" y="4.6" width="17.2" height="14.8" rx="1" />
                  <path d="M10.6 4.6v14.8" />
                  <path d="M10.6 12h10" />
                </svg>
              </i>
              <small>
                Tableros en vivo
              </small>
              <b>
                Flashboards
              </b>
              <span>
                Tableros en tiempo real para cada área y para la gerencia.
              </span>
            </li>
          </ul>
        </section>
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              Agenda una demo de los Engines.
            </h2>
            <p className="mt-5 max-w-[560px] text-pretty text-body-m text-[#d8d8d8] lg:mt-6 lg:text-body-l">
              Agenda una reunión y te mostramos demos de los Engines con casos de tu industria.
            </p>
            <div className="mt-7">
              <Link className="inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-pill px-7 py-3.5 font-display whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-50 bg-accent-base text-on-accent hover:bg-[#3f3ad9]" href="/es/contacto">
                Agenda una reunión
                <span aria-hidden="true" className="text-[16px] leading-none">
                  →
                </span>
              </Link>
              <Link className="cta-2 inline-flex shrink-0 items-center justify-center gap-2 rounded-pill px-7 font-display whitespace-nowrap" href="/es/productos/plataformas">
                Conoce BzzzBX
              </Link>
            </div>
            <ul className="cta-checks">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                </svg>
                En tu nube o centro de datos
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                </svg>
                Tu dato no sale
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                </svg>
                Se integra con tus sistemas
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
