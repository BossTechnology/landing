import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/casos/caso-3",
  title: "Pinch Jobs · Casos de negocio · Boss.Technology",
  description: "Pinch Jobs: cientos de servicios en simultáneo, bajo un solo control",
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
                Caso de negocio · Pinch Jobs
              </span>
              <h1 className="ph-h1">
                Pinch Jobs: cientos de servicios en simultáneo, bajo un solo control
              </h1>
            </div>
          </section>
          <div className="ph-cover">
            <img src="/assets/brand/case-pinchjobs.jpg" alt="" className="size-full object-cover" />
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-10 lg:px-6 lg:py-14">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Servicios
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Limpieza
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Operación en campo
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
                        Industria
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Servicios de limpieza
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Región
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Estados Unidos
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Foco
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Operación en campo, de la orden al cobro
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Productos
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        BzzzBX, Metamap, Actionables, IA aplicada
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>
              <div className="min-w-0 max-w-[680px] flex-1 pb-8 cs">
                <section className="cs-sec">
                  <p className="cs-lead">
                    En una empresa de servicios, el negocio ocurre en la calle: cada trabajo es una orden, un equipo en movimiento y un pago por confirmar. Pinch Jobs hoy ve todo ese recorrido en tiempo real, y lo opera con IA.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    El reto
                  </p>
                  <h2>
                    Cientos de trabajos, muchas piezas en movimiento
                  </h2>
                  <p>
                    Cada semana, Pinch Jobs coordina cientos de servicios de limpieza: pedidos que llegan, confirmaciones con el cliente, una agenda que cambia, equipos que se desplazan entre direcciones y pagos que deben cerrarse.
                  </p>
                  <p>
                    Cada pieza vivía en su propia herramienta. Saber cómo iba el día, qué trabajo estaba atrasado o qué cobro seguía pendiente exigía cruzar información a mano, casi siempre tarde.
                  </p>
                  <p>
                    Para crecer sin perder control, la gerencia necesitaba ver la operación completa, de la orden al cobro, como un solo sistema.
                  </p>
                </section>
                <blockquote className="cs-sec cs-quote">
                  <p>
                    Cada servicio es una promesa al cliente. Hay que verla cumplirse, no enterarse después.
                  </p>
                </blockquote>
                <section className="cs-sec">
                  <p className="cs-eb">
                    El enfoque
                  </p>
                  <h2>
                    De la orden al cobro, en una sola vista
                  </h2>
                  <p>
                    {"Con "}
                    <b>
                      BzzzBX
                    </b>
                    {" como núcleo y "}
                    <b>
                      Metamap
                    </b>
                    {" como centro de operación, Pinch Jobs gestiona en un solo lugar cada orden de trabajo, la agenda, las confirmaciones, dónde está cada equipo y cuándo termina el servicio, hasta el último paso: la confirmación del pago."}
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Recibir, razonar, responder
                    </p>
                    <div className="cs-flow">
                      <ul className="src">
                        <li>
                          Pedidos y órdenes de trabajo
                        </li>
                        <li>
                          Agenda y confirmaciones
                        </li>
                        <li>
                          Equipos en campo
                        </li>
                        <li>
                          Cierre del servicio
                        </li>
                        <li>
                          Sistemas de pago
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
                            cada evento del servicio
                          </li>
                          <li>
                            <b>
                              Razona
                            </b>
                            orden, equipo, cliente y cobro
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
                          Metamap: operación en vivo
                        </li>
                        <li>
                          Alertas por atraso
                        </li>
                        <li>
                          Seguimiento de cobros
                        </li>
                        <li>
                          IA con datos de negocio
                        </li>
                      </ul>
                    </div>
                    <p className="cs-cap">
                      BzzzBX se conecta a las herramientas que Pinch Jobs ya usa: no reemplaza su sistema de agenda ni su pasarela de pagos.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    En el día a día
                  </p>
                  <h2>
                    Qué ve y qué hace la operación
                  </h2>
                  <div className="cs-hub">
                    <ul style={{ marginTop: "6px" }}>
                      <li>
                        <b>
                          Órdenes de trabajo
                        </b>
                        <span>
                          Cada pedido con su estado, desde que entra hasta que se cierra.
                        </span>
                      </li>
                      <li>
                        <b>
                          Agenda y confirmaciones
                        </b>
                        <span>
                          Qué servicios están confirmados, cuáles cambiaron y cuáles requieren contacto con el cliente.
                        </span>
                      </li>
                      <li>
                        <b>
                          Equipos en vivo
                        </b>
                        <span>
                          Dónde está cada equipo, qué trabajo está haciendo y si va a tiempo.
                        </span>
                      </li>
                      <li>
                        <b>
                          Servicio completado
                        </b>
                        <span>
                          El cierre de cada trabajo, al momento, con su evidencia.
                        </span>
                      </li>
                      <li>
                        <b>
                          Pagos
                        </b>
                        <span>
                          Qué servicios ya están pagados, cuáles están en camino y cuáles requieren seguimiento.
                        </span>
                      </li>
                      <li>
                        <b>
                          Una sola vista
                        </b>
                        <span>
                          La operación del día completa, en un mapa y un tablero, sin cruzar herramientas.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    IA aplicada
                  </p>
                  <h2>
                    De la pregunta a la acción automática
                  </h2>
                  <p>
                    Sobre los mismos datos con contexto, Pinch Jobs conectó su IA a BzzzBX mediante un puente gobernado. El equipo hace preguntas en lenguaje natural, arma sus propias vistas y escenarios, y recibe respuestas con evidencia.
                  </p>
                  <div className="cs-ask">
                    <div className="q">
                      ¿Cuáles son los 10 clientes con mayor saldo pendiente, y desde cuándo?
                    </div>
                    <div className="a">
                      Los 10 clientes suman el mayor saldo por cobrar del mes; tres de ellos tienen servicios completados hace más de 30 días sin pago confirmado. Te dejo la lista ordenada con el último servicio y el estado del cobro.
                      <small>
                        Evidencia: órdenes de trabajo, cierres de servicio y sistemas de pago · ejemplo ilustrativo
                      </small>
                    </div>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    {"Cuando una pregunta se vuelve rutina, como los clientes con más deuda o los equipos con más reprogramaciones, deja de ser una consulta a la IA: se convierte en un "}
                    <b>
                      Actionable
                    </b>
                    {" de BzzzBX que se ejecuta solo, avisa al responsable y dispara la acción."}
                  </p>
                  <div className="cs-chain" style={{ marginTop: "18px" }}>
                    <div className="cs-ch" style={{ background: "var(--brand-paper-2)", borderColor: "var(--border)" }}>
                      <b style={{ color: "var(--muted-foreground)" }}>
                        Consulta puntual
                      </b>
                      <ol>
                        <li>
                          Alguien pregunta
                        </li>
                        <li>
                          La IA analiza
                        </li>
                        <li>
                          Respuesta en el momento
                        </li>
                      </ol>
                    </div>
                    <div className="cs-ch good">
                      <b>
                        Con Actionables
                      </b>
                      <ol>
                        <li>
                          Se detecta el patrón
                        </li>
                        <li>
                          Corre automáticamente
                        </li>
                        <li>
                          Alerta al responsable
                        </li>
                        <li>
                          Acción ejecutada
                        </li>
                      </ol>
                    </div>
                  </div>
                  <p style={{ marginTop: "20px" }}>
                    <b>
                      Menos costo de IA.
                    </b>
                    {" La IA resuelve un proceso la primera vez; cuando se vuelve recurrente, BzzzBX lo convierte en un Actionable que corre sin consumir modelos. Así el gasto en IA deja de crecer con cada usuario y se concentra donde aporta criterio."}
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    El caso de negocio
                  </p>
                  <h2>
                    Tres frentes de valor
                  </h2>
                  <p>
                    El valor no está en ver el mapa, sino en lo que la empresa hace con él.
                  </p>
                  <div className="cs-fr" style={{ marginTop: "18px" }}>
                    <article className="main">
                      <small>
                        Ingresos
                      </small>
                      <h3>
                        Cobro más rápido
                      </h3>
                      <ul>
                        <li>
                          Pagos pendientes visibles al momento
                        </li>
                        <li>
                          Seguimiento automático de saldos
                        </li>
                        <li>
                          Menos servicios sin cobrar
                        </li>
                      </ul>
                      <p className="k">
                        Días de cobro · saldo pendiente
                      </p>
                    </article>
                    <article>
                      <small>
                        Operación
                      </small>
                      <h3>
                        Más servicios a tiempo
                      </h3>
                      <ul>
                        <li>
                          Atrasos detectados mientras ocurren
                        </li>
                        <li>
                          Agenda ajustada con datos en vivo
                        </li>
                        <li>
                          Equipos asignados donde hacen falta
                        </li>
                      </ul>
                      <p className="k">
                        Puntualidad · reprogramaciones
                      </p>
                    </article>
                    <article>
                      <small>
                        Escala
                      </small>
                      <h3>
                        Crecer sin perder control
                      </h3>
                      <ul>
                        <li>
                          Una sola vista en lugar de varias herramientas
                        </li>
                        <li>
                          Rutinas automatizadas, no manuales
                        </li>
                        <li>
                          Menos gasto en IA para tareas recurrentes
                        </li>
                      </ul>
                      <p className="k">
                        Servicios por coordinador
                      </p>
                    </article>
                  </div>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Qué entrega Boss
                  </p>
                  <h2>
                    Tres capas sobre lo que Pinch Jobs ya tiene
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
                          Une órdenes, agenda, equipos y pagos en una sola fuente de verdad, en tiempo real.
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
                          Metamap y Actionables
                        </b>
                        <span>
                          La operación en un mapa en vivo, y rutinas que se ejecutan solas con alertas y acciones.
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
                          Preguntas en lenguaje natural, con evidencia, sobre los datos del negocio.
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
              <Link className="group flex flex-col overflow-hidden rounded-2xl bg-paper-2 ring-1 ring-ink/5 transition-shadow hover:shadow-lg" href="/es/casos/caso-1">
                <div className="h-[180px] overflow-hidden bg-[#d9d9d9]">
                  <img src="/assets/brand/case-febor.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="font-display text-body-l font-semibold leading-snug text-ink">
                    FEBOR: todos sus canales de atención, entendidos en tiempo real
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
