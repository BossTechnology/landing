import Link from "next/link";
import FooterBee from "./FooterBee";

export default function FooterEs() {
  return (
    <footer data-nav="dark" className="relative overflow-hidden bg-ink">
      <div className="mx-auto max-w-[1200px] px-5 pt-16 lg:px-6 lg:pt-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <span className="flex items-center gap-2.5 shrink-0">
            <img src="/assets/brand/isotipo.svg" alt="" aria-hidden="true" width="32" height="31" className="h-[31px] w-[32px] shrink-0" />
            <img src="/assets/brand/wordmark-nav.svg" alt="Boss.Technology" width="190" height="23" className="h-[20px] w-auto shrink-0 sm:h-[23px]" />
          </span>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div>
              <p className="text-body-m text-white">
                Compañía
              </p>
              <ul className="mt-4 space-y-1 lg:mt-5 lg:space-y-3">
                <li>
                  <Link className="inline-block py-1.5 text-body-m text-white/55 transition-colors hover:text-white lg:py-0" href="/es/bo11y">
                    Bo11y
                  </Link>
                </li>
                <li>
                  <Link className="inline-block py-1.5 text-body-m text-white/55 transition-colors hover:text-white lg:py-0" href="/es/compania">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link className="inline-block py-1.5 text-body-m text-white/55 transition-colors hover:text-white lg:py-0" href="/es/casos">
                    Casos de negocio
                  </Link>
                </li>
                <li>
                  <Link className="inline-block py-1.5 text-body-m text-white/55 transition-colors hover:text-white lg:py-0" href="/es/blog">
                    Colmena de ideas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-body-m text-white">
                Productos
              </p>
              <ul className="mt-4 space-y-1 lg:mt-5 lg:space-y-3">
                <li>
                  <Link className="inline-block py-1.5 text-body-m text-white/55 transition-colors hover:text-white lg:py-0" href="/es/productos/plataformas">
                    BzzzBX
                  </Link>
                </li>
                <li>
                  <Link className="inline-block py-1.5 text-body-m text-white/55 transition-colors hover:text-white lg:py-0" href="/es/productos/aplicaciones">
                    Engines
                  </Link>
                </li>
                <li>
                  <Link className="inline-block py-1.5 text-body-m text-white/55 transition-colors hover:text-white lg:py-0" href="/es/ia-aplicada">
                    IA aplicada
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-body-m text-white">
                Contacto
              </p>
              <ul className="mt-4 space-y-1 lg:mt-5 lg:space-y-3">
                <li>
                  <Link className="inline-block py-1.5 text-body-m text-white/55 transition-colors hover:text-white lg:py-0" href="/es/contacto">
                    Agenda una reunión
                  </Link>
                </li>
                <li>
                  <Link className="inline-block py-1.5 text-body-m text-white/55 transition-colors hover:text-white lg:py-0" href="/es/reclutamiento">
                    Trabaja con nosotros
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-body-m text-white">
                Síguenos
              </p>
              <ul className="-ml-3 mt-2 flex items-center">
                <li>
                  <a href="https://www.linkedin.com/company/bosstechnology" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="flex size-11 items-center justify-center rounded-lg text-white/55 transition-colors hover:text-white">
                    <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 pb-12 text-body-xs sm:flex-row sm:items-center sm:justify-between">
            <p className="text-white/45">
              2026
              {" Boss.Technology. "}
              Todos los derechos reservados.
            </p>
            <div className="-my-2 flex flex-wrap items-center gap-x-8 gap-y-1">
              <Link className="py-2 text-white/70 underline underline-offset-4 transition-colors hover:text-white" href="/es/legal/privacidad">
                Política de privacidad
              </Link>
              <Link className="py-2 text-white/70 underline underline-offset-4 transition-colors hover:text-white" href="/es/legal/terminos">
                Términos de servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="/assets/brand/wordmark-footer.svg" alt="" aria-hidden="true" className="w-full" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 top-[-60%]" style={{ background: "linear-gradient(to bottom, rgba(5,5,16,0) 0%, rgba(78,73,242,0.18) 55%, rgba(150,158,230,0.55) 100%)" }} />
        <FooterBee />
      </div>
    </footer>
  );
}
