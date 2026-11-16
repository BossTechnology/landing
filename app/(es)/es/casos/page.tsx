import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/casos",
  title: "Casos de negocio · Boss.Technology",
  description: "Historias reales de equipos que ya operan con Business Observability.",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1">
        <section className="ph" data-nav="dark">
          <div className="ph-in">
            <span className="ph-eb">
              Clientes
            </span>
            <h1 className="ph-h1">
              Casos de negocio
            </h1>
            <p className="ph-lead">
              Historias reales de equipos que ya operan con Business Observability.
            </p>
          </div>
        </section>
        <section className="px-5 lg:px-6 sec-y">
          <div className="mx-auto grid max-w-[1152px] gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2">
            <Link className="group flex flex-col" href="/es/casos/caso-1">
              <div className="aspect-[16/10] overflow-hidden rounded-[20px] bg-[#d9d9d9]">
                <img src="/assets/brand/case-febor.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h2 className="cs-card-t">
                FEBOR: todos sus canales de atención, entendidos en tiempo real
              </h2>
              <span className="mt-3 inline-flex items-center gap-1.5 text-body-m text-accent-base">
                Leer caso
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link className="group flex flex-col" href="/es/casos/caso-3">
              <div className="aspect-[16/10] overflow-hidden rounded-[20px] bg-[#d9d9d9]">
                <img src="/assets/brand/case-pinchjobs.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h2 className="cs-card-t">
                Pinch Jobs: cientos de servicios en simultáneo, bajo un solo control
              </h2>
              <span className="mt-3 inline-flex items-center gap-1.5 text-body-m text-accent-base">
                Leer caso
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link className="group flex flex-col" href="/es/casos/caso-4">
              <div className="aspect-[16/10] overflow-hidden rounded-[20px] bg-[#d9d9d9]">
                <img src="/assets/brand/case-mineria.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h2 className="cs-card-t">
                Minería: mantenimiento que se anticipa a la falla y sincroniza toda la mina
              </h2>
              <span className="mt-3 inline-flex items-center gap-1.5 text-body-m text-accent-base">
                Leer caso
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link className="group flex flex-col" href="/es/casos/caso-5">
              <div className="aspect-[16/10] overflow-hidden rounded-[20px] bg-[#d9d9d9]">
                <img src="/assets/brand/case-restaurantes.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h2 className="cs-card-t">
                Restaurantes: del pedido a la mesa, sin puntos ciegos
              </h2>
              <span className="mt-3 inline-flex items-center gap-1.5 text-body-m text-accent-base">
                Leer caso
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </section>
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              Decisiones a tiempo que se notan en tus resultados.
            </h2>
            <p className="sec-sub sec-dark-sub">
              Menos costos, ingresos protegidos y menos riesgo: cada caso empieza con un resultado de negocio medible.
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
