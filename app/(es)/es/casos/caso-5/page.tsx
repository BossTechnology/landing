import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/casos/caso-5",
  title: "Cadena de restaurantes · Casos de negocio · Boss.Technology",
  description: "Restaurantes: del pedido a la mesa, sin puntos ciegos",
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
                Caso de negocio · Restaurantes
              </span>
              <h1 className="ph-h1">
                Restaurantes: del pedido a la mesa, sin puntos ciegos
              </h1>
            </div>
          </section>
          <div className="ph-cover">
            <img src="/assets/brand/case-restaurantes.jpg" alt="" className="size-full object-cover" />
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-10 lg:px-6 lg:py-14">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Restaurantes
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Cadenas
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Operación de locales
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
                        Cadenas de restaurantes
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Enfoque
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Recorrido del pedido y costo por local
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Productos
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        BzzzBX, Momentum, Metamap, monsterMETER
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Tipo
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Caso de negocio · valores ilustrativos
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>
              <div className="min-w-0 max-w-[680px] flex-1 pb-8 cs">
                <section className="cs-sec">
                  <p className="cs-lead">
                    Una cadena de restaurantes puede ver cada pedido, cada caja y cada local mientras el servicio ocurre. La mayoría todavía se entera al día siguiente, en el reporte de ventas.
                  </p>
                  <div className="cs-scene">
                    <time>
                      Viernes, 20:15 · hora pico
                    </time>
                    <p>
                      En uno de los locales más concurridos de la cadena, varias cosas pasan a la vez:
                    </p>
                    <ul>
                      <li>
                        Una de las cajas empieza a rechazar pagos con tarjeta.
                      </li>
                      <li>
                        Faltan dos personas en cocina y los pedidos se acumulan.
                      </li>
                      <li>
                        Los pedidos de delivery salen tarde y algunos se cancelan.
                      </li>
                      <li>
                        La cámara de frío lleva una hora por encima de su temperatura.
                      </li>
                    </ul>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    Cada sistema registró su parte. Nadie vio la cadena completa hasta que el daño ya estaba hecho.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    El problema
                  </p>
                  <h2>
                    Cada área ve su tramo. Nadie ve el pedido completo.
                  </h2>
                  <p>
                    Ventas, pagos, pedidos, personal y servicios viven en sistemas distintos. Un problema en la caja se convierte en pedidos incompletos, luego en esperas y cancelaciones, y al final en ventas y margen perdidos. Pero esa cadena solo se ve cuando se conectan las señales.
                  </p>
                  <figure className="cs-fig">
                    <p className="cs-fig-t">
                      Cada área ve una parte
                    </p>
                    <div className="cs-silos">
                      <div className="cs-silo">
                        <b>
                          Caja y pagos
                        </b>
                        <span className="y">
                          <i>
                            Ve:
                          </i>
                          {" ventas y tickets"}
                        </span>
                        <span className="n">
                          <i>
                            No ve:
                          </i>
                          {" qué pedidos se pierden cuando un medio de pago falla"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Cocina
                        </b>
                        <span className="y">
                          <i>
                            Ve:
                          </i>
                          {" pedidos en preparación"}
                        </span>
                        <span className="n">
                          <i>
                            No ve:
                          </i>
                          {" si hay personal suficiente para la hora pico"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Delivery
                        </b>
                        <span className="y">
                          <i>
                            Ve:
                          </i>
                          {" pedidos despachados"}
                        </span>
                        <span className="n">
                          <i>
                            No ve:
                          </i>
                          {" dónde se demora cada pedido y por qué"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Administración
                        </b>
                        <span className="y">
                          <i>
                            Ve:
                          </i>
                          {" facturas de servicios"}
                        </span>
                        <span className="n">
                          <i>
                            No ve:
                          </i>
                          {" qué local consume de más, hasta que llega la factura"}
                        </span>
                      </div>
                    </div>
                  </figure>
                </section>
                <blockquote className="cs-sec cs-quote">
                  <p>
                    No basta con saber si un sistema funciona. Importa saber si el cliente puede comprar y si su pedido llega.
                  </p>
                </blockquote>
                <section className="cs-sec">
                  <p className="cs-eb">
                    La solución
                  </p>
                  <h2>
                    Un sistema nervioso central para toda la cadena
                  </h2>
                  <p>
                    <b>
                      BzzzBX
                    </b>
                    {" se conecta a lo que la cadena ya tiene, recibe cada señal una sola vez, le da contexto de local, proceso e impacto, y responde en segundos. Sobre ese núcleo trabajan tres engines: "}
                    <b>
                      Momentum
                    </b>
                    {" sigue el recorrido de cada pedido, "}
                    <b>
                      Metamap
                    </b>
                    {" muestra cada local en un mapa operativo y "}
                    <b>
                      monsterMETER
                    </b>
                    {" hace visibles los consumos y costos de los servicios."}
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Recibir, razonar, responder
                    </p>
                    <div className="cs-flow">
                      <ul className="src">
                        <li>
                          POS y cajas
                        </li>
                        <li>
                          Pagos
                        </li>
                        <li>
                          Pedidos y delivery
                        </li>
                        <li>
                          Personal y turnos
                        </li>
                        <li>
                          Energía, agua y gas
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
                            cada señal, una sola vez
                          </li>
                          <li>
                            <b>
                              Razona
                            </b>
                            local, pedido, proceso e impacto
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
                          Momentum: recorrido del pedido
                        </li>
                        <li>
                          Metamap: mapa de locales
                        </li>
                        <li>
                          monsterMETER: costos
                        </li>
                        <li>
                          Alertas por impacto
                        </li>
                      </ul>
                    </div>
                    <p className="cs-cap">
                      BzzzBX no reemplaza el POS ni el sistema de pedidos: se conecta a ellos y corre en la nube de la propia cadena.
                    </p>
                  </figure>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Metamap · locales que requieren atención ahora
                    </p>
                    <div className="cs-mach">
                      <div className="cs-mrow hd">
                        <span>
                          Local
                        </span>
                        <span>
                          Pedidos a tiempo
                        </span>
                        <span>
                          Decisión
                        </span>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Local 07
                          </b>
                          <small>
                            Pagos rechazados en caja 2
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar w">
                            <i style={{ width: "64%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Deterioro
                            </span>
                            <span>
                              64 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="w">
                            Actuar ya
                          </em>
                          <br />
                          Activar caja de respaldo y avisar al gerente
                        </div>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Local 12
                          </b>
                          <small>
                            Personal en cocina
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar w">
                            <i style={{ width: "78%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Bajo meta
                            </span>
                            <span>
                              78 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="w">
                            Reforzar
                          </em>
                          <br />
                          Mover una persona desde un local cercano
                        </div>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Local 03
                          </b>
                          <small>
                            Operación normal
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar ">
                            <i style={{ width: "94%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Saludable
                            </span>
                            <span>
                              94 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="">
                            Sin acción
                          </em>
                          <br />
                          Sigue el plan del turno
                        </div>
                      </div>
                    </div>
                    <p className="cs-cap">
                      Valores ilustrativos.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Causa y efecto
                  </p>
                  <h2>
                    La misma falla, dos finales distintos
                  </h2>
                  <div className="cs-chain">
                    <div className="cs-ch bad">
                      <b>
                        Sin Business Observability
                      </b>
                      <ol>
                        <li>
                          Falla de pago
                        </li>
                        <li>
                          Pedidos incompletos
                        </li>
                        <li>
                          Esperas y cancelaciones
                        </li>
                        <li>
                          Ventas y margen perdidos
                        </li>
                      </ol>
                    </div>
                    <div className="cs-ch good">
                      <b>
                        Con BzzzBX
                      </b>
                      <ol>
                        <li>
                          Falla detectada en segundos
                        </li>
                        <li>
                          Alerta al gerente del local
                        </li>
                        <li>
                          Caja de respaldo activa
                        </li>
                        <li>
                          Ventas protegidas
                        </li>
                      </ol>
                    </div>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    Lo mismo ocurre con los costos: una cámara de frío que trabaja de más o un consumo anormal de gas se ve en el día, por local, antes de que llegue la factura.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    El caso de negocio
                  </p>
                  <h2>
                    Tres frentes de retorno
                  </h2>
                  <p>
                    {"El retorno se mide con "}
                    <b>
                      Bo11y
                    </b>
                    , a partir de las líneas base de los primeros locales conectados.
                  </p>
                  <div className="cs-fr" style={{ marginTop: "22px" }}>
                    <article>
                      <small>
                        Costos
                      </small>
                      <h3>
                        Menos costo por local
                      </h3>
                      <ul>
                        <li>
                          Consumos anormales detectados al momento
                        </li>
                        <li>
                          Dotación ajustada a la demanda real
                        </li>
                        <li>
                          Menos reportes manuales
                        </li>
                      </ul>
                      <p className="k">
                        Costo de servicios por local
                      </p>
                    </article>
                    <article className="main">
                      <small>
                        Ingresos
                      </small>
                      <h3>
                        Más pedidos completados
                      </h3>
                      <ul>
                        <li>
                          Menos cancelaciones y pedidos perdidos
                        </li>
                        <li>
                          Cajas y pagos disponibles en hora pico
                        </li>
                        <li>
                          Entregas a tiempo
                        </li>
                      </ul>
                      <p className="k">
                        Pedidos completados · entregas a tiempo
                      </p>
                    </article>
                    <article>
                      <small>
                        Riesgo
                      </small>
                      <h3>
                        Menos sorpresas
                      </h3>
                      <ul>
                        <li>
                          Fallas detectadas en segundos
                        </li>
                        <li>
                          Cadena de frío vigilada
                        </li>
                        <li>
                          Trazabilidad por local
                        </li>
                      </ul>
                      <p className="k">
                        Incidentes atendidos a tiempo
                      </p>
                    </article>
                  </div>
                  <p style={{ marginTop: "26px" }}>
                    El frente de mayor peso suele ser el de ingresos: cada pedido que no se pierde es venta. Ajusta los supuestos:
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Ventas protegidas al año
                    </p>
                    <div className="cs-calc" data-loc="es-PE">
                      <div>
                        <label>
                          <span className="v">
                            Locales en la cadena
                            <b data-o="n">
                              40
                            </b>
                          </span>
                          <input type="range" min="10" max="150" step="5" defaultValue="40" data-i="n" aria-label="Locales en la cadena" />
                        </label>
                        <label>
                          <span className="v">
                            Pedidos recuperados por local al día
                            <b data-o="p">
                              6
                            </b>
                          </span>
                          <input type="range" min="1" max="30" step="1" defaultValue="6" data-i="p" aria-label="Pedidos recuperados por local al día" />
                        </label>
                        <label>
                          <span className="v">
                            Ticket promedio (supuesto)
                            <b data-o="t">
                              US$ 15
                            </b>
                          </span>
                          <input type="range" min="5" max="40" step="1" defaultValue="15" data-i="t" aria-label="Ticket promedio (supuesto)" />
                        </label>
                      </div>
                      <div className="cs-res">
                        <small>
                          Pedidos recuperados al año
                        </small>
                        <b data-o="h">
                          -
                        </b>
                        <span>
                          pedidos que hoy se pierden
                        </span>
                        <div className="m">
                          <small>
                            Ventas protegidas
                          </small>
                          <b data-o="m">
                            -
                          </b>
                          <span>
                            antes de sumar ahorros de costos y riesgo evitado
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="cs-formula">
                      Locales × pedidos recuperados por día × 365 × ticket promedio
                    </p>
                    <p className="cs-cap">
                      Las cifras son supuestos; el caso real se calcula con los datos de cada cadena.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Cómo empezar
                  </p>
                  <h2>
                    Dos locales primero, luego toda la red
                  </h2>
                  <ol className="cs-steps">
                    <li>
                      <span>
                        <b>
                          Piloto en 45 días.
                        </b>
                        {" BzzzBX activo en la nube de la cadena y los dos primeros locales conectados, con tableros y alertas."}
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>
                          Réplica.
                        </b>
                        {" El mismo procedimiento se lleva a más locales y se activan los engines con líneas base reales."}
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>
                          Red completa.
                        </b>
                        {" La cadena suma locales al ritmo que decida, sin una nueva integración por local."}
                      </span>
                    </li>
                  </ol>
                  <Link className="cs-cta" href="/es/contacto">
                    Agenda una reunión
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                  <p className="cs-note">
                    Caso de negocio construido sobre escenarios típicos de cadenas de restaurantes. Los valores son ilustrativos y se reemplazan por los de cada cadena.
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-6 lg:py-20">
            <h2 className="sec-title cs-more">
              Más casos de negocio
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
