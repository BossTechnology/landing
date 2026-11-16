import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/casos/caso-1",
  title: "FEBOR · Casos de negocio · Boss.Technology",
  description: "FEBOR: todos sus canales de atención, entendidos en tiempo real",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1">
        <article>
          <section className="ph" data-nav="dark">
            <div className="ph-in">
              <Link className="ph-back" href="/es/casos">
                ← Todos los casos
              </Link>
              <span className="ph-eb">
                Caso de negocio · FEBOR
              </span>
              <h1 className="ph-h1">
                FEBOR: todos sus canales de atención, entendidos en tiempo real
              </h1>
            </div>
          </section>
          <div className="ph-cover">
            <img src="/assets/brand/case-febor.jpg" alt="" className="size-full object-cover" />
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-10 lg:px-6 lg:py-14">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Servicios financieros
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Cooperativas
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Experiencia del asociado
              </span>
            </div>
          </div>
          <div className="mx-auto max-w-[1200px] px-5 pb-8 lg:px-6">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
              <aside className="lg:w-[280px] lg:shrink-0">
                <div className="rounded-2xl bg-paper p-6 lg:sticky lg:top-24">
                  <dl className="space-y-5">
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Organización
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Cooperativa financiera · Colombia
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Foco
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Experiencia del asociado
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Productos
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        BzzzBX, BOB, Flashboards
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Despliegue
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Google Cloud · nube propia de FEBOR
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>
              <div className="min-w-0 max-w-[680px] flex-1 pb-8 cs">
                <section className="cs-sec">
                  <p className="cs-lead">
                    Para una cooperativa, cada interacción con un asociado cuenta. FEBOR hoy ve todos sus canales de atención como un solo sistema, y actúa a tiempo en lugar de enterarse después.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    El reto
                  </p>
                  <h2>
                    Muchos canales, una sola experiencia
                  </h2>
                  <p>
                    FEBOR atiende a sus asociados por teléfono, mensajería, canales digitales, formularios y oficinas. Como en la mayoría de las organizaciones, cada canal funciona con su propia herramienta y sus propios reportes.
                  </p>
                  <p>
                    Para la gerencia, eso significa una visión fragmentada: entender cómo va la atención exige reunir información de varias fuentes, casi siempre después de que las cosas ocurren.
                  </p>
                  <p>
                    Las señales para anticiparse existían: estados de los equipos, tiempos de respuesta, solicitudes pendientes, encuestas de satisfacción. El reto era unirlas, darles contexto y convertirlas en acciones antes de que el asociado lo notara.
                  </p>
                </section>
                <blockquote className="cs-sec cs-quote">
                  <p>
                    El objetivo no es medir más. Es enterarse antes que el asociado.
                  </p>
                </blockquote>
                <section className="cs-sec">
                  <p className="cs-eb">
                    El enfoque
                  </p>
                  <h2>
                    Una vista única de la atención
                  </h2>
                  <p>
                    {"Con "}
                    <b>
                      Business Observability
                    </b>
                    , FEBOR pasó de revisar reportes por canal a ver la atención completa en tiempo real, por canal y por equipo, con alertas que llegan al responsable y acciones definidas para cada situación.
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Recibir, razonar, responder
                    </p>
                    <div className="cs-flow">
                      <ul className="src">
                        <li>
                          Telefonía
                        </li>
                        <li>
                          Mensajería y chat
                        </li>
                        <li>
                          Canales digitales
                        </li>
                        <li>
                          Formularios de solicitud
                        </li>
                        <li>
                          Oficinas
                        </li>
                      </ul>
                      <span className="cs-arw" aria-hidden="true">
                        →
                      </span>
                      <div className="cs-core">
                        <b>
                          Bzzz
                          <span>
                            BX
                          </span>
                        </b>
                        <ol>
                          <li>
                            <b>
                              Recibe
                            </b>
                            las interacciones de cada canal
                          </li>
                          <li>
                            <b>
                              Razona
                            </b>
                            contexto, capacidad e impacto
                          </li>
                          <li>
                            <b>
                              Responde
                            </b>
                            alertas, acciones y memoria
                          </li>
                        </ol>
                      </div>
                      <span className="cs-arw o" aria-hidden="true">
                        →
                      </span>
                      <ul className="out">
                        <li>
                          Tablero unificado
                        </li>
                        <li>
                          Alertas al responsable
                        </li>
                        <li>
                          Acciones y escalamiento
                        </li>
                        <li>
                          Resumen diario
                        </li>
                      </ul>
                    </div>
                    <p className="cs-cap">
                      BzzzBX se conecta a las plataformas que FEBOR ya usa y opera en su propia nube: los datos no salen de su infraestructura y la información personal se protege conforme a la ley colombiana.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    En el día a día
                  </p>
                  <h2>
                    Qué ve y qué hace la cooperativa
                  </h2>
                  <div className="cs-hub">
                    <ul style={{ marginTop: "6px" }}>
                      <li>
                        <b>
                          Disponibilidad en vivo
                        </b>
                        <span>
                          Cuántas personas están atendiendo en cada canal en este momento, y quiénes.
                        </span>
                      </li>
                      <li>
                        <b>
                          Nivel de servicio
                        </b>
                        <span>
                          Tiempos de respuesta, interacciones atendidas y pendientes, por canal y por equipo.
                        </span>
                      </li>
                      <li>
                        <b>
                          Solicitudes a tiempo
                        </b>
                        <span>
                          Cada solicitud con su estado y su plazo; las que se acercan al límite se señalan antes de vencer.
                        </span>
                      </li>
                      <li>
                        <b>
                          Calidad y satisfacción
                        </b>
                        <span>
                          La evaluación del asociado junto a la interacción que la originó, para actuar sobre la causa.
                        </span>
                      </li>
                      <li>
                        <b>
                          Información coherente
                        </b>
                        <span>
                          La misma respuesta, sin importar el canal por el que pregunte el asociado.
                        </span>
                      </li>
                      <li>
                        <b>
                          Resumen del día
                        </b>
                        <span>
                          Un cierre automático con alertas, acciones tomadas y temas a seguir, listo para descargar.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    De la alerta a la acción
                  </p>
                  <h2>
                    Actuar mientras ocurre
                  </h2>
                  <p>
                    Cada alerta tiene un responsable, una acción y un escalamiento, y llega por el medio que el equipo ya usa: Teams, correo o WhatsApp. Si nadie responde, escala al siguiente nivel; si se repite, se registra para retroalimentar. La diferencia se ve en cómo termina la misma situación:
                  </p>
                  <div className="cs-chain" style={{ marginTop: "18px" }}>
                    <div className="cs-ch bad">
                      <b>
                        Sin Business Observability
                      </b>
                      <ol>
                        <li>
                          Se acumula una demora
                        </li>
                        <li>
                          El asociado espera
                        </li>
                        <li>
                          Se reporta al cierre
                        </li>
                        <li>
                          El asociado reclama
                        </li>
                      </ol>
                    </div>
                    <div className="cs-ch good">
                      <b>
                        Con BzzzBX
                      </b>
                      <ol>
                        <li>
                          Se detecta en minutos
                        </li>
                        <li>
                          Alerta al responsable
                        </li>
                        <li>
                          Se redistribuye la capacidad
                        </li>
                        <li>
                          El asociado es atendido
                        </li>
                      </ol>
                    </div>
                  </div>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    El caso de negocio
                  </p>
                  <h2>
                    Tres frentes de valor
                  </h2>
                  <p>
                    El valor no está en el tablero, sino en lo que la cooperativa puede hacer con él.
                  </p>
                  <div className="cs-fr" style={{ marginTop: "18px" }}>
                    <article className="main">
                      <small>
                        Experiencia
                      </small>
                      <h3>
                        Asociados mejor atendidos
                      </h3>
                      <ul>
                        <li>
                          Menos esperas y contactos perdidos
                        </li>
                        <li>
                          Respuestas a tiempo en todos los canales
                        </li>
                        <li>
                          Problemas resueltos antes de la queja
                        </li>
                      </ul>
                      <p className="k">
                        Nivel de atención · satisfacción · retención
                      </p>
                    </article>
                    <article>
                      <small>
                        Productividad
                      </small>
                      <h3>
                        Gestión más simple
                      </h3>
                      <ul>
                        <li>
                          Una sola vista en lugar de varias herramientas
                        </li>
                        <li>
                          Resumen diario automático
                        </li>
                        <li>
                          Capacidad asignada donde hace falta
                        </li>
                      </ul>
                      <p className="k">
                        Tiempo de gestión · carga por equipo
                      </p>
                    </article>
                    <article>
                      <small>
                        Riesgo
                      </small>
                      <h3>
                        Control y trazabilidad
                      </h3>
                      <ul>
                        <li>
                          Alertas con responsable y registro
                        </li>
                        <li>
                          Datos en la infraestructura de FEBOR
                        </li>
                        <li>
                          Información lista para auditoría
                        </li>
                      </ul>
                      <p className="k">
                        Eventos atendidos a tiempo
                      </p>
                    </article>
                  </div>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Qué entrega Boss
                  </p>
                  <h2>
                    Tres capas sobre lo que FEBOR ya tiene
                  </h2>
                  <div className="cs-layers" style={{ marginTop: "20px" }}>
                    <Link className="cs-layer" href="/es/productos/plataformas">
                      <i>
                        1
                      </i>
                      <div>
                        <b>
                          Núcleo BzzzBX
                        </b>
                        <span>
                          Une todos los canales en una sola fuente de verdad, en la nube de FEBOR.
                        </span>
                        <em>
                          Conoce BzzzBX →
                        </em>
                      </div>
                    </Link>
                    <Link className="cs-layer" href="/es/productos/aplicaciones">
                      <i>
                        2
                      </i>
                      <div>
                        <b>
                          Tableros y alertas
                        </b>
                        <span>
                          La atención en vivo, por canal y por equipo, con alertas y resumen diario.
                        </span>
                        <em>
                          Ver Engines →
                        </em>
                      </div>
                    </Link>
                    <Link className="cs-layer" href="/es/ia-aplicada">
                      <i>
                        3
                      </i>
                      <div>
                        <b>
                          IA sobre la misma realidad
                        </b>
                        <span>
                          Calidad de las respuestas y consistencia de la información entre canales.
                        </span>
                        <em>
                          IA aplicada →
                        </em>
                      </div>
                    </Link>
                  </div>
                  <Link className="cs-cta" href="/es/contacto">
                    Agenda una reunión
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </section>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-6 lg:py-20">
            <h2 className="sec-title cs-more">
              Más casos de negocio
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link className="group flex flex-col overflow-hidden rounded-2xl bg-paper-2 ring-1 ring-ink/5 transition-shadow hover:shadow-lg" href="/es/casos/caso-5">
                <div className="h-[180px] overflow-hidden bg-[#d9d9d9]">
                  <img src="/assets/brand/case-restaurantes.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="font-display text-body-l font-semibold leading-snug text-ink">
                    Restaurantes: del pedido a la mesa, sin puntos ciegos
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-body-m text-accent-base">
                    Leer caso
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
              <Link className="group flex flex-col overflow-hidden rounded-2xl bg-paper-2 ring-1 ring-ink/5 transition-shadow hover:shadow-lg" href="/es/casos/caso-3">
                <div className="h-[180px] overflow-hidden bg-[#d9d9d9]">
                  <img src="/assets/brand/case-pinchjobs.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="font-display text-body-l font-semibold leading-snug text-ink">
                    Pinch Jobs: cientos de servicios en simultáneo, bajo un solo control
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-body-m text-accent-base">
                    Leer caso
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
              <Link className="group flex flex-col overflow-hidden rounded-2xl bg-paper-2 ring-1 ring-ink/5 transition-shadow hover:shadow-lg" href="/es/casos/caso-4">
                <div className="h-[180px] overflow-hidden bg-[#d9d9d9]">
                  <img src="/assets/brand/case-mineria.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="font-display text-body-l font-semibold leading-snug text-ink">
                    Minería: mantenimiento que se anticipa a la falla y sincroniza toda la mina
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-body-m text-accent-base">
                    Leer caso
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <section className="px-5 lg:px-6 sec-y sec-cta">
            <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
              <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
                Boss hace que entender tu negocio sea sencillo
              </h2>
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
        </article>
      </main>
    </>
  );
}
