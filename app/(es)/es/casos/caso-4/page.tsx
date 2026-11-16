import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/casos/caso-4",
  title: "Minería: mantenimiento que se anticipa a la falla · Casos de negocio · Boss.Technology",
  description: "Cómo una mina pasa de mantener por calendario a mantener por condición, y sincroniza mantenimiento, abastecimiento, personas y producción con BzzzBX.",
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
                Caso de negocio · Minería
              </span>
              <h1 className="ph-h1">
                Minería: mantenimiento que se anticipa a la falla y sincroniza toda la mina
              </h1>
            </div>
          </section>
          <div className="ph-cover">
            <img src="/assets/brand/case-mineria.jpg" alt="" className="size-full object-cover" />
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-10 lg:px-6 lg:py-14">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Minería
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Mantenimiento
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Operaciones
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
                        Minería a tajo abierto
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Enfoque
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Mantenimiento por condición
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Productos
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        BzzzBX, Machina, Metamap, Eyesite, Signal Maker
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
                    Una mina puede intervenir cada equipo crítico en el momento preciso, con el repuesto, el técnico y la bahía listos. La mayoría todavía espera a que la falla decida por ella.
                  </p>
                  <div className="cs-scene">
                    <time>
                      Martes, 03:40 · rampa norte
                    </time>
                    <p>
                      Un camión de acarreo se detiene a media subida con 220 toneladas encima. El sensor de temperatura del mando final venía avisando hace diez días, pero esa señal vivía en otro sistema. Lo que sigue es conocido:
                    </p>
                    <ul>
                      <li>
                        El repuesto no está en el almacén: llega en cuatro días.
                      </li>
                      <li>
                        El mecánico especialista está en el turno de la tarde.
                      </li>
                      <li>
                        La bahía del taller está ocupada con un servicio de 500 horas a un equipo sano.
                      </li>
                      <li>
                        Producción pierde el camión sin saber cuándo vuelve.
                      </li>
                    </ul>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    Nadie hizo nada mal. Cada área trabajó bien con la información que tenía. El problema es que ninguna tenía la información completa.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    El problema
                  </p>
                  <h2>
                    Los datos existen. Lo que falta es verlos juntos.
                  </h2>
                  <p>
                    Temperatura, presión, vibración, análisis de aceite, horas de operación, órdenes de trabajo, inventario, turnos y plan minero: casi todo ya se mide. Pero vive en sensores, en el sistema de despacho, en el CMMS, en el ERP, en el laboratorio y, a veces, en papel o en la voz del operador.
                  </p>
                  <p>
                    El resultado es que cada área decide sobre su parte de la verdad.
                  </p>
                  <figure className="cs-fig">
                    <p className="cs-fig-t">
                      Cada área ve una parte
                    </p>
                    <div className="cs-silos">
                      <div className="cs-silo">
                        <b>
                          Mantenimiento
                        </b>
                        <span className="y">
                          <i>
                            Ve:
                          </i>
                          {" horómetro y órdenes de trabajo"}
                        </span>
                        <span className="n">
                          <i>
                            No ve:
                          </i>
                          {" la condición en vivo ni el impacto en producción"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Abastecimiento
                        </b>
                        <span className="y">
                          <i>
                            Ve:
                          </i>
                          {" inventario y compras"}
                        </span>
                        <span className="n">
                          <i>
                            No ve:
                          </i>
                          {" qué repuesto se necesitará, hasta que el equipo ya está detenido"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Taller
                        </b>
                        <span className="y">
                          <i>
                            Ve:
                          </i>
                          {" bahías, técnicos y puentes grúa"}
                        </span>
                        <span className="n">
                          <i>
                            No ve:
                          </i>
                          {" lo que viene la próxima semana"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Producción
                        </b>
                        <span className="y">
                          <i>
                            Ve:
                          </i>
                          {" plan y tonelaje"}
                        </span>
                        <span className="n">
                          <i>
                            No ve:
                          </i>
                          {" cuándo recuperará el equipo detenido"}
                        </span>
                      </div>
                    </div>
                    <p className="cs-cap">
                      Donde no hay sensores, como en equipos sin instrumentar o registros manuales, la operación queda ciega.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    El cambio de filosofía
                  </p>
                  <h2>
                    Del calendario a la condición
                  </h2>
                  <p>
                    El programa por horómetro interviene cada 250 o 500 horas sin conocer el estado real del equipo. Eso produce dos errores a la vez: se interviene demasiado pronto un componente sano y demasiado tarde uno que se degrada más rápido de lo previsto.
                  </p>
                  <figure className="cs-fig cs-curve">
                    <p className="cs-fig-t">
                      Condición de un componente vs. intervenciones por horómetro
                    </p>
                    <svg viewBox="0 -8 620 208" role="img" aria-label="Curva de condición de un componente que decae con las horas. Las intervenciones a 250 y 500 horas llegan con el componente sano; la falla ocurre a 710 horas, antes del servicio de 750. La ventana óptima por condición está entre 575 y 640 horas.">
                      <g className="grid">
                        <line x1="40" y1="20" x2="600" y2="20" />
                        <text className="ax" x="34" y="24" textAnchor="end">
                          100 %
                        </text>
                        <line x1="40" y1="58" x2="600" y2="58" />
                        <text className="ax" x="34" y="62" textAnchor="end">
                          75 %
                        </text>
                        <line x1="40" y1="95" x2="600" y2="95" />
                        <text className="ax" x="34" y="99" textAnchor="end">
                          50 %
                        </text>
                      </g>
                      <rect className="win" x="362" y="14" width="36" height="156" rx="4" />
                      <line className="th" x1="40" y1="50" x2="600" y2="50" />
                      <line className="hr" x1="180" y1="14" x2="180" y2="170" />
                      <text className="hrl" x="180" y="190" textAnchor="middle">
                        250 h
                      </text>
                      <line className="hr" x1="320" y1="14" x2="320" y2="170" />
                      <text className="hrl" x="320" y="190" textAnchor="middle">
                        500 h
                      </text>
                      <line className="hr" x1="460" y1="14" x2="460" y2="170" />
                      <text className="hrl" x="460" y="190" textAnchor="middle">
                        750 h
                      </text>
                      <polyline className="hl" points="40,20 96,21 152,22 208,24 264,29 320,38 354,47 376,56 398,68 421,86 438,107" />
                      <circle className="ok" cx="180" cy="22" r="5" />
                      <text className="lb warn" x="180" y="6" textAnchor="middle">
                        Servicio innecesario
                      </text>
                      <circle className="ok" cx="320" cy="38" r="5" />
                      <text className="lb warn" x="310" y="78" textAnchor="end">
                        Otro servicio, aún sano
                      </text>
                      <text className="lb good" x="380" y="6" textAnchor="middle">
                        Ventana óptima
                      </text>
                      <circle className="fail" cx="438" cy="107" r="7" />
                      <text className="lb bad" x="428" y="129" textAnchor="end">
                        Falla antes del servicio de 750 h
                      </text>
                    </svg>
                    <div className="cs-leg">
                      <span>
                        <i />
                        Condición del componente
                      </span>
                      <span>
                        <i className="t" />
                        Umbral de alerta
                      </span>
                      <span>
                        <i className="w" />
                        Ventana de intervención
                      </span>
                      <span>
                        <i className="h" />
                        Servicio por horómetro
                      </span>
                    </div>
                    <p className="cs-cap">
                      Curva ilustrativa. Con mantenimiento por condición, la intervención se programa cuando la señal cruza el umbral, con días de anticipación a la falla.
                    </p>
                  </figure>
                </section>
                <blockquote className="cs-sec cs-quote">
                  <p>
                    La falla no debería decidir cuándo se detiene un equipo. Debería decidirlo la mina.
                  </p>
                </blockquote>
                <section className="cs-sec">
                  <p className="cs-eb">
                    La solución
                  </p>
                  <h2>
                    Un sistema nervioso central para la mina
                  </h2>
                  <p>
                    <b>
                      BzzzBX
                    </b>
                    {" se conecta a lo que la mina ya tiene y sigue una lógica simple: "}
                    <b>
                      recibe
                    </b>
                    {" cada señal una sola vez, la "}
                    <b>
                      razona
                    </b>
                    {" con contexto de negocio y "}
                    <b>
                      responde
                    </b>
                    {" en segundos. Donde la señal no existe, la genera: "}
                    <b>
                      Eyesite
                    </b>
                    {" cubre los puntos ciegos de campo y "}
                    <b>
                      Signal Maker
                    </b>
                    {" convierte inspecciones, reportes de voz y registros manuales en datos."}
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Recibir, razonar, responder
                    </p>
                    <div className="cs-flow">
                      <ul className="src">
                        <li>
                          Planta: OPC-UA, MQTT, Modbus
                        </li>
                        <li>
                          Telemetría y despacho
                        </li>
                        <li>
                          CMMS y órdenes de trabajo
                        </li>
                        <li>
                          ERP: inventario y compras
                        </li>
                        <li>
                          Laboratorio de aceite
                        </li>
                        <li className="gen">
                          Eyesite y Signal Maker
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
                            activo, componente, proceso e impacto
                          </li>
                          <li>
                            <b>
                              Responde
                            </b>
                            alertas, flujos y memoria auditable
                          </li>
                        </ol>
                      </div>
                      <span className="cs-arw o" aria-hidden="true">
                        →
                      </span>
                      <ul className="out">
                        <li>
                          Alertas priorizadas
                        </li>
                        <li>
                          Órdenes al CMMS
                        </li>
                        <li>
                          Machina: condición
                        </li>
                        <li>
                          Metamap: vista de la mina
                        </li>
                        <li>
                          Historial auditable
                        </li>
                      </ul>
                    </div>
                    <p className="cs-cap">
                      BzzzBX no reemplaza el CMMS ni el ERP: se conecta a ellos, les da contexto y dispara los flujos de trabajo.
                    </p>
                  </figure>
                  <p style={{ marginTop: "26px" }}>
                    {"Con esas señales, el modelo de deterioro correlaciona temperatura, presión, vibración, aceite, carga y horas de operación para estimar la condición de cada componente, su riesgo y su ventana de intervención. El calendario rígido se convierte en un "}
                    <b>
                      calendario dinámico
                    </b>
                    {", que el equipo opera desde "}
                    <b>
                      Machina
                    </b>
                    :
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Machina · condición de activos críticos
                    </p>
                    <div className="cs-mach">
                      <div className="cs-mrow hd">
                        <span>
                          Equipo
                        </span>
                        <span>
                          Condición
                        </span>
                        <span>
                          Decisión
                        </span>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Camión 07
                          </b>
                          <small>
                            Mando final
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar">
                            <i style={{ width: "92%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Saludable
                            </span>
                            <span>
                              92 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="">
                            Sin intervención
                          </em>
                          <br />
                          Sigue produciendo este mes
                        </div>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Camión 12
                          </b>
                          <small>
                            Motor · temperatura
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar w">
                            <i style={{ width: "61%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Deterioro anticipado
                            </span>
                            <span>
                              61 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="w">
                            Adelantar 12 días
                          </em>
                          <br />
                          Programada con repuesto y bahía
                        </div>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Pala 02
                          </b>
                          <small>
                            Sistema hidráulico
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar">
                            <i style={{ width: "84%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Estable
                            </span>
                            <span>
                              84 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="n">
                            Mantener plan
                          </em>
                          <br />
                          Sin cambios
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
                    Toda la operación
                  </p>
                  <h2>
                    Cuando mantenimiento decide, toda la mina se entera
                  </h2>
                  <p>
                    El valor mayor no está en predecir la falla, sino en lo que pasa después. Como todas las señales llegan al mismo núcleo, cada área ve la misma intervención al mismo tiempo, con días de anticipación:
                  </p>
                  <figure className="cs-fig">
                    <p className="cs-fig-t">
                      Una intervención, cuatro áreas sincronizadas
                    </p>
                    <div className="cs-hub">
                      <div className="cs-hub-c">
                        <small>
                          Intervención programada
                        </small>
                        <b>
                          Camión 12 · jueves 08:00 · 9 horas
                        </b>
                      </div>
                      <ul>
                        <li>
                          <b>
                            Abastecimiento
                          </b>
                          <span>
                            Kit de motor reservado; el componente en tránsito llega el miércoles.
                          </span>
                        </li>
                        <li>
                          <b>
                            Personas
                          </b>
                          <span>
                            Dos mecánicos especialistas asignados al turno A.
                          </span>
                        </li>
                        <li>
                          <b>
                            Taller
                          </b>
                          <span>
                            Bahía 3 y puente grúa reservados.
                          </span>
                        </li>
                        <li>
                          <b>
                            Producción
                          </b>
                          <span>
                            Plan del turno ajustado: −1 camión, tonelaje redistribuido.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <p className="cs-cap">
                      La orden llega al CMMS que la mina ya usa, con todo el contexto.
                    </p>
                  </figure>
                  <p style={{ marginTop: "26px" }}>
                    En el taller, una línea de tiempo por orden de trabajo compara lo planificado con lo real en cada etapa. Si algo se desvía, la desviación y su causa se ven mientras ocurren, no en el reporte de fin de mes.
                  </p>
                  <figure className="cs-fig">
                    <p className="cs-fig-t">
                      Orden de trabajo · planificado vs. real
                    </p>
                    <div className="cs-wo">
                      <div className="cs-wo-r">
                        <span>
                          Diagnóstico
                        </span>
                        <div className="cs-wo-t">
                          <i className="p" style={{ left: "0%", width: "12%" }} />
                          <i className="r" style={{ left: "0%", width: "11%" }} />
                        </div>
                      </div>
                      <div className="cs-wo-r">
                        <span>
                          Repuestos
                        </span>
                        <div className="cs-wo-t">
                          <i className="p" style={{ left: "12%", width: "18%" }} />
                          <i className="r late" style={{ left: "11%", width: "33%" }} />
                          <em style={{ left: "calc(44% + 6px)" }}>
                            repuesto en tránsito
                          </em>
                        </div>
                      </div>
                      <div className="cs-wo-r">
                        <span>
                          Reparación
                        </span>
                        <div className="cs-wo-t">
                          <i className="p" style={{ left: "30%", width: "48%" }} />
                          <i className="r" style={{ left: "44%", width: "44%" }} />
                        </div>
                      </div>
                      <div className="cs-wo-r">
                        <span>
                          Pruebas
                        </span>
                        <div className="cs-wo-t">
                          <i className="p" style={{ left: "78%", width: "12%" }} />
                          <i className="r" style={{ left: "88%", width: "10%" }} />
                        </div>
                      </div>
                      <div className="cs-wo-ax">
                        <span />
                        <div>
                          <span>
                            08:00
                          </span>
                          <span>
                            12:30
                          </span>
                          <span>
                            17:00
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="cs-leg">
                      <span>
                        <i style={{ background: "color-mix(in srgb,var(--cool-500) 45%,transparent)" }} />
                        Planificado
                      </span>
                      <span>
                        <i />
                        Real
                      </span>
                      <span>
                        <i style={{ background: "var(--status-bad)" }} />
                        Desviación
                      </span>
                    </div>
                    <p className="cs-cap">
                      La demora en repuestos se detecta en la etapa en que ocurre, y el cuello de botella queda registrado para la próxima intervención.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Causa y efecto
                  </p>
                  <h2>
                    El mismo desgaste, dos finales distintos
                  </h2>
                  <p>
                    Un mismo desgaste puede terminar en una detención no programada o en una intervención corta y planificada. La diferencia es si la mina lo ve a tiempo y si todas las áreas actúan sobre la misma señal.
                  </p>
                  <div className="cs-chain" style={{ marginTop: "22px" }}>
                    <div className="cs-ch bad">
                      <b>
                        Sin Business Observability, la falla decide
                      </b>
                      <ol>
                        <li>
                          Desgaste no visto
                        </li>
                        <li>
                          Falla en operación
                        </li>
                        <li>
                          Detención no programada
                        </li>
                        <li>
                          Repuesto y técnicos no listos
                        </li>
                        <li>
                          Toneladas y margen perdidos
                        </li>
                      </ol>
                    </div>
                    <div className="cs-ch good">
                      <b>
                        Con BzzzBX, la mina decide
                      </b>
                      <ol>
                        <li>
                          Señal temprana
                        </li>
                        <li>
                          Ventana óptima
                        </li>
                        <li>
                          Repuesto, técnicos y bahía listos
                        </li>
                        <li>
                          Intervención corta y programada
                        </li>
                        <li>
                          Toneladas y margen protegidos
                        </li>
                      </ol>
                    </div>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    Y el efecto no se queda en mantenimiento: un aumento de ausentismo en técnicos alarga el tiempo en taller, un repuesto que llega tarde deja un camión fuera de servicio, y ambos reducen toneladas movidas, alimentación a planta y cumplimiento del plan minero. BzzzBX hace visible esa cadena mientras ocurre.
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
                    {" y se valida con los datos de cada mina durante el levantamiento."}
                  </p>
                  <div className="cs-fr" style={{ marginTop: "22px" }}>
                    <article>
                      <small>
                        Costos
                      </small>
                      <h3>
                        Menos gasto de mantenimiento
                      </h3>
                      <ul>
                        <li>
                          Menos servicios innecesarios por horómetro
                        </li>
                        <li>
                          Menos fallas catastróficas
                        </li>
                        <li>
                          Menos horas extra y repuestos de urgencia
                        </li>
                        <li>
                          Una sola integración para toda la mina
                        </li>
                      </ul>
                      <p className="k">
                        Costo por hora operada · MTBF · costo por componente
                      </p>
                    </article>
                    <article className="main">
                      <small>
                        Ingresos protegidos
                      </small>
                      <h3>
                        Más toneladas
                      </h3>
                      <ul>
                        <li>
                          Más disponibilidad física de flota y planta
                        </li>
                        <li>
                          Menos detenciones no programadas
                        </li>
                        <li>
                          Menos tiempo en taller
                        </li>
                      </ul>
                      <p className="k">
                        Disponibilidad física · MTTR · toneladas movidas
                      </p>
                    </article>
                    <article>
                      <small>
                        Riesgo
                      </small>
                      <h3>
                        Menos incidentes
                      </h3>
                      <ul>
                        <li>
                          Desviaciones detectadas en segundos
                        </li>
                        <li>
                          Menos fallas en operación
                        </li>
                        <li>
                          Trazabilidad lista para auditoría
                        </li>
                      </ul>
                      <p className="k">
                        Incidentes por falla · eventos críticos a tiempo
                      </p>
                    </article>
                  </div>
                  <p style={{ marginTop: "26px" }}>
                    El frente de mayor peso suele ser el de ingresos protegidos, porque cada punto de disponibilidad se convierte en horas productivas. Ajusta los supuestos:
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Horas productivas recuperadas
                    </p>
                    <div className="cs-calc" data-loc="es-PE">
                      <div>
                        <label>
                          <span className="v">
                            Equipos en la flota
                            <b data-o="n">
                              40
                            </b>
                          </span>
                          <input type="range" min="10" max="200" step="5" defaultValue="40" data-i="n" aria-label="Equipos en la flota" />
                        </label>
                        <label>
                          <span className="v">
                            Puntos de disponibilidad ganados
                            <b data-o="d">
                              2
                            </b>
                          </span>
                          <input type="range" min="0.5" max="6" step="0.5" defaultValue="2" data-i="d" aria-label="Puntos de disponibilidad ganados" />
                        </label>
                        <label>
                          <span className="v">
                            Valor por hora-equipo (supuesto)
                            <b data-o="v">
                              US$ 500
                            </b>
                          </span>
                          <input type="range" min="100" max="2000" step="50" defaultValue="500" data-i="v" aria-label="Valor por hora-equipo (supuesto)" />
                        </label>
                      </div>
                      <div className="cs-res">
                        <small>
                          Horas-equipo recuperadas al año
                        </small>
                        <b data-o="h">
                          7,008
                        </b>
                        <span>
                          horas productivas adicionales
                        </span>
                        <div className="m">
                          <small>
                            Valor anual protegido
                          </small>
                          <b data-o="m">
                            US$ 3.5 M
                          </b>
                          <span>
                            antes de sumar ahorros de costo y riesgo evitado
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="cs-formula">
                      Δ disponibilidad × número de equipos × 8,760 h × valor por hora-equipo
                    </p>
                    <p className="cs-cap">
                      Ejemplo: 40 camiones que ganan 2 puntos de disponibilidad recuperan unas 7,000 horas-camión al año. Las cifras son supuestos; el caso real se calcula con la flota, la disponibilidad actual y el valor por hora de cada operación.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Qué entrega Boss
                  </p>
                  <h2>
                    Tres capas sobre lo que la mina ya tiene
                  </h2>
                  <p>
                    La solución conecta mina, planta y personas en un solo sistema vivo, y se instala en la nube o en el centro de datos de la mina, bajo sus políticas de seguridad.
                  </p>
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
                          Ingesta, contexto de negocio y memoria auditable de toda la operación, incluida la infraestructura técnica.
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
                          Engines y tableros
                        </b>
                        <span>
                          Machina para la condición de equipos y el mantenimiento predictivo, Metamap para la vista geográfica de la mina, y tableros por área y transversales.
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
                          IA sobre la misma verdad
                        </b>
                        <span>
                          Copilotos, agentes y automatizaciones con acceso gobernado a los datos de BzzzBX vía MCP.
                        </span>
                        <em>
                          IA aplicada →
                        </em>
                      </div>
                    </Link>
                  </div>
                  <div className="cs-ask">
                    <div className="q">
                      ¿Qué equipos tienen mayor riesgo de detención esta semana y qué tonelaje comprometen?
                    </div>
                    <div className="a">
                      Tres equipos: el camión 12 (temperatura de motor en alza), la pala 05 (presión hidráulica inestable) y el camión 31 (análisis de aceite fuera de rango). Comprometen unas 14,000 toneladas si fallan esta semana.
                      <small>
                        Evidencia: sensores de planta y flota, laboratorio de aceite, CMMS y plan minero · valores ilustrativos
                      </small>
                    </div>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    El mantenimiento es la puerta de entrada, no el límite. Sobre el mismo núcleo, la mina puede extender la observabilidad a combustible, energía, seguridad, cadena de suministro y costos sin una nueva integración.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Cómo empezar
                  </p>
                  <h2>
                    Primero, medir dónde está el valor
                  </h2>
                  <p>
                    Empezamos con un levantamiento corto, con los datos de la propia operación:
                  </p>
                  <ol className="cs-steps">
                    <li>
                      <span>
                        <b>
                          Fuentes y activos críticos.
                        </b>
                        {" Qué señales ya existen, dónde falta instrumentación o conectividad."}
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>
                          Línea base.
                        </b>
                        {" Disponibilidad, MTBF, MTTR y costo de mantenimiento actuales."}
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>
                          Caso Bo11y.
                        </b>
                        {" Cuantificamos el retorno de cada frente y definimos la implementación."}
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
                    Caso de negocio construido sobre escenarios típicos de operaciones mineras. Los valores son ilustrativos y se reemplazan por los de cada operación en el levantamiento.
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
