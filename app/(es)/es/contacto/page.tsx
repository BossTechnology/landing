import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/contacto",
  title: "Agenda una reunión · Boss.Technology",
  description: "Cuéntanos sobre tu proyecto y te respondemos en menos de 24 h.",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1">
        <section className="ph" data-nav="dark">
          <div className="ph-in">
            <span className="ph-eb">
              Contacto
            </span>
            <h1 className="ph-h1">
              Agenda una reunión y descubre lo que Boss puede hacer en tu operación.
            </h1>
            <p className="ph-lead">
              Cuéntanos sobre tu proyecto y te respondemos en menos de 24 h.
            </p>
          </div>
        </section>
        <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div>
                <form className="space-y-6" noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-body-xs text-ink/50">
                        Nombre
                      </label>
                      <input className="w-full border-0 border-b border-ink/20 bg-transparent py-2.5 text-body-m text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-accent-base" placeholder="Nombre" aria-invalid="false" name="firstName" />
                    </div>
                    <div>
                      <label className="block text-body-xs text-ink/50">
                        Apellido
                      </label>
                      <input className="w-full border-0 border-b border-ink/20 bg-transparent py-2.5 text-body-m text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-accent-base" placeholder="Apellido" name="lastName" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-body-xs text-ink/50">
                      Email
                    </label>
                    <input type="email" className="w-full border-0 border-b border-ink/20 bg-transparent py-2.5 text-body-m text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-accent-base" placeholder="tucorreo@ejemplo.com" aria-invalid="false" name="email" />
                  </div>
                  <div>
                    <label className="block text-body-xs text-ink/50">
                      Empresa
                    </label>
                    <input className="w-full border-0 border-b border-ink/20 bg-transparent py-2.5 text-body-m text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-accent-base" placeholder="Tu empresa (opcional)" name="company" />
                  </div>
                  <div>
                    <label className="block text-body-xs text-ink/50">
                      Mensaje
                    </label>
                    <textarea rows={3} className="w-full border-0 border-b border-ink/20 bg-transparent py-2.5 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-accent-base resize-none" placeholder="¿En qué podemos ayudarte?" aria-invalid="false" name="message" />
                  </div>
                  <button className="inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-pill px-7 py-3.5 font-display whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-50 bg-ink text-paper-2 hover:bg-ink-2 w-full" type="submit">
                    Agenda una reunión
                  </button>
                </form>
              </div>
            </div>
            <div className="ct-bee">
              <div className="ct-stage" aria-hidden="true">
                <i className="ct-ring" />
                <i className="ct-ring" />
                <i className="ct-ring" />
                <i className="ct-dot" />
                <i className="ct-dot" />
                <i className="ct-dot" />
                <i className="ct-dot" />
                <svg className="ct-bee-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.5883 31.244" fill="none">
                  {"\n  "}
                  <svg x="0" y="0" width="31.5883" height="15.7532" viewBox="0 0 31.5883 15.7528" preserveAspectRatio="none" overflow="visible">
                    <path d="M29.8054 6.99097V5.25833H24.5636V6.99097H22.7544V10.4784H21.0744V5.24826H19.1402V1.82128H20.909V0.0443231H19.1301V1.82128H17.3613V5.24826H14.096V5.21603V1.77695H12.3272V0H10.5422V1.77695H12.3151V5.24826H10.51V10.4784H8.82989V6.99097H7.02075V5.25833H1.77889V6.99097H0V12.2694H1.77889V14.0303H5.24187V15.7528H8.83191V14.0303H10.5805V12.1687H15.1871H21.0078V14.0303H22.7564V15.7528H26.3465V14.0303H29.8095V12.2694H31.5883V6.99097H29.8095H29.8054ZM14.0435 9.63625H12.2646V6.84389H14.0435V9.63625ZM19.3197 9.63625H17.5408V6.84389H19.3197V9.63625Z" fill="white" />
                  </svg>
                  {"\n  "}
                  <svg x="12.0573" y="13.538" width="7.796" height="9.142" viewBox="0 0 7.7965 9.14467" preserveAspectRatio="none" overflow="visible">
                    <path d="M5.27414 0H0V9.14467H5.36288C5.90744 9.14467 6.93403 8.5322 7.27286 8.09098C8.06549 7.06148 8.06146 4.79697 6.53872 4.44037C8.28332 2.96965 7.62783 0.278027 5.27414 0ZM2.3537 1.74069H4.28587C4.76588 1.74069 5.15917 2.13355 5.15917 2.61305V2.7843C5.15917 3.26379 4.76588 3.65666 4.28587 3.65666H2.3537V1.74069ZM5.47582 6.35634C5.47582 6.93254 5.00387 7.40196 4.42906 7.40196H2.3537V5.26841H4.42906C5.00589 5.26841 5.47582 5.73984 5.47582 6.31403V6.35432V6.35634Z" fill="white" />
                  </svg>
                  {"\n  "}
                  <svg x="3.6011" y="17.2186" width="5.2184" height="3.5556" viewBox="0 0 5.21968 3.55391" preserveAspectRatio="none" overflow="visible">
                    <path d="M5.21968 0H1.7083V1.77695H0V3.55391H1.77889V1.77695H5.21968V0Z" fill="white" />
                  </svg>
                  {"\n  "}
                  <svg x="9.3438" y="17.2186" width="1.7784" height="1.7778" viewBox="0 0 1.77889 1.77695" preserveAspectRatio="none" overflow="visible">
                    <path d="M1.77889 0H0V1.77695H1.77889V0Z" fill="white" />
                  </svg>
                  {"\n  "}
                  <svg x="7.0031" y="20.6679" width="17.7747" height="10.5761" viewBox="0 0 17.7747 10.5751" preserveAspectRatio="none" overflow="visible">
                    <path d="M15.9959 1.80919H17.7284V0.0322357H15.9495V1.80919H14.217V3.49145H3.55777V1.77696H1.82729V0H0.0484054V1.77696H1.77889V3.48541H0V6.99097H1.77889V3.55391H3.55777V5.26841H5.24388V7.02522H7.21034V8.79814H8.05944V10.5751H9.83833V8.79814H10.6733V7.02522H12.6398V5.26841H14.2311V3.58615H15.9959V7.02119H17.7747V3.51563H15.9959V1.80919Z" fill="white" />
                  </svg>
                  {"\n  "}
                  <svg x="22.9647" y="17.2529" width="5.2215" height="3.5524" viewBox="0 0 5.21968 3.55391" preserveAspectRatio="none" overflow="visible">
                    <path d="M3.50937 0H0V1.77695H3.44079V3.55391H5.21968V1.77695H3.50937V0Z" fill="white" />
                  </svg>
                  {"\n  "}
                  <svg x="20.6619" y="17.2529" width="1.7784" height="1.7747" viewBox="0 0 1.77889 1.77695" preserveAspectRatio="none" overflow="visible">
                    <path d="M1.77889 0H0V1.77695H1.77889V0Z" fill="white" />
                  </svg>
                  {"\n"}
                </svg>
              </div>
              <div className="ct-msg">
                <b>
                  Bzzz.
                </b>
                <h2>
                  Tu negocio tiene algo que contarte.
                </h2>
                <p>
                  En la primera conversación vemos juntos qué señales de tu operación ya existen y qué podrías estar viendo desde mañana.
                </p>
                <small>
                  Respuesta en menos de 24 h
                </small>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
