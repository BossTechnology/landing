import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/productos/plataformas",
  title: "BzzzBX · Business Observability Super Server · Boss.Technology",
  description: "BzzzBX es el servidor de Business Observability que une cada sistema, equipo y señal de tu empresa en una sola fuente de verdad en tiempo real, en tu propia infraestructura.",
});

export default function Page() {
  return (
    <>
      <main className="flex-1 bz">
        {"\n"}
        <section className="bz-hero bz-hero--rack" data-nav="dark" id="top">
          <div className="bz-hero-bg" aria-hidden="true">
            <img src="/assets/brand/bzzzbx-hero-gold4.webp" alt="" width="2400" height="1340" fetchPriority="high" />
          </div>
          <div className="bz-in">
            <div className="bz-hero-grid">
              <div>
                <span className="bz-kicker">
                  <i />
                  Producto
                </span>
                <h1 className="bz-name">
                  Bzzz
                  <span>
                    BX
                  </span>
                </h1>
                <p className="bz-tagline">
                  Business Observability Super Server
                </p>
                <p className="bz-what">
                  Servidor + plataforma + engines: todo en uno.
                </p>
                <p className="bz-sub">
                  Cada fuente de datos y señal de toda tu empresa, unificada en tiempo real con el poder de responder y actuar como una sola. En tu nube o en tu centro de datos.
                </p>
                <div className="bz-cta">
                  <Link className="bz-btn bz-btn--p" href="/es/contacto">
                    Agenda una reunión
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
                <ul className="bz-checks">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                    </svg>
                    Todo en uno
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                    </svg>
                    En tu infraestructura
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                    </svg>
                    Se integra con tus sistemas
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                    </svg>
                    Abierto para tus apps
                  </li>
                </ul>
              </div>
              <div className="bz-art" aria-hidden="true" />
            </div>
          </div>
        </section>
        {"\n\n"}
        <section className="bz-sec bz-sec--dk" id="como">
          <div className="bz-in">
            <span className="bz-eyebrow">
              Cómo funciona
            </span>
            <h2 className="bz-h2">
              Todas tus fuentes, en streaming, hacia un solo núcleo.
            </h2>
            <p className="bz-lead">
              El corazón de BzzzBX es un bus de eventos basado en Apache Kafka: cada señal entra una sola vez, se procesa en movimiento y queda disponible para toda la empresa.
            </p>
            <div className="fl">
              <ul className="fl-src">
                <li>
                  ERP y finanzas
                </li>
                <li>
                  CRM y ventas
                </li>
                <li>
                  Producción y planta
                </li>
                <li>
                  Maquinaria e IoT
                </li>
                <li>
                  Logística y flota
                </li>
                <li>
                  RR. HH. y turnos
                </li>
                <li>
                  Atención al cliente
                </li>
                <li>
                  Clima y mercado
                </li>
              </ul>
              <svg className="fl-fan" viewBox="0 0 60 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 6.25 C30 6.25 30 50 60 50" />
                <path d="M0 18.75 C30 18.75 30 50 60 50" />
                <path d="M0 31.25 C30 31.25 30 50 60 50" />
                <path d="M0 43.75 C30 43.75 30 50 60 50" />
                <path d="M0 56.25 C30 56.25 30 50 60 50" />
                <path d="M0 68.75 C30 68.75 30 50 60 50" />
                <path d="M0 81.25 C30 81.25 30 50 60 50" />
                <path d="M0 93.75 C30 93.75 30 50 60 50" />
              </svg>
              <div className="fl-down" aria-hidden="true" />
              <div className="fl-core">
                <p className="fl-name">
                  Bzzz
                  <span>
                    BX
                  </span>
                </p>
                <div className="fl-bus">
                  <i />
                  Bus de eventos · Apache Kafka
                </div>
                <div className="fl-stages">
                  <div className="fl-st">
                    <b>
                      Recibe
                    </b>
                    <span>
                      Cada señal, una sola vez y en streaming.
                    </span>
                  </div>
                  <div className="fl-st">
                    <b>
                      Razona
                    </b>
                    <span>
                      Contexto de negocio y correlación entre señales.
                    </span>
                  </div>
                  <div className="fl-st">
                    <b>
                      Responde
                    </b>
                    <span>
                      Reflejos en tiempo real y memoria auditable.
                    </span>
                  </div>
                </div>
              </div>
              <div className="fl-down" aria-hidden="true" />
              <svg className="fl-fan out" viewBox="0 0 60 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 50 C30 50 30 8.33 60 8.33" />
                <path d="M0 50 C30 50 30 25.0 60 25.0" />
                <path d="M0 50 C30 50 30 41.67 60 41.67" />
                <path d="M0 50 C30 50 30 58.33 60 58.33" />
                <path d="M0 50 C30 50 30 75.0 60 75.0" />
                <path d="M0 50 C30 50 30 91.67 60 91.67" />
              </svg>
              <ul className="fl-out">
                <li>
                  Alertas
                </li>
                <li>
                  Anomalías
                </li>
                <li>
                  Predicciones
                </li>
                <li>
                  Dashboards
                </li>
                <li>
                  IA y agentes
                </li>
                <li>
                  Flujos automáticos
                </li>
              </ul>
            </div>
            <div className="bz-duo">
              <article className="bz-duo-c">
                <p className="bz-row-n">
                  Contexto desde la entrada
                </p>
                <h3>
                  Cada evento llega con significado de negocio.
                </h3>
                <p className="d">
                  Al entrar, cada señal recibe su contexto de negocio: la relación entre tecnología y negocio se resuelve una sola vez.
                </p>
                <div className="bz-vis">
                  <div className="bz-vis-h">
                    <b>
                      Evento entrante
                    </b>
                    <span className="bz-ok">
                      Etiquetado
                    </span>
                  </div>
                  <div className="bz-evt">
                    <p>
                      Pedido rechazado
                    </p>
                    <dl>
                      <div>
                        <dt>
                          Origen
                        </dt>
                        <dd>
                          ERP · pedidos
                        </dd>
                      </div>
                      <div>
                        <dt>
                          Tipo
                        </dt>
                        <dd>
                          Evento de negocio
                        </dd>
                      </div>
                      <div>
                        <dt>
                          Unidad
                        </dt>
                        <dd>
                          Retail norte
                        </dd>
                      </div>
                      <div>
                        <dt>
                          Correlación
                        </dt>
                        <dd>
                          Pedido 48213
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="bz-dlq">
                    <span>
                      Cola de cuarentena
                    </span>
                    <span className="bz-ok">
                      0 eventos · saludable
                    </span>
                  </div>
                </div>
              </article>
              <article className="bz-duo-c">
                <p className="bz-row-n">
                  Dual Pollinator
                </p>
                <h3>
                  Reaccionar al instante y guardar la verdad, a la vez.
                </h3>
                <p className="d">
                  Desde una sola ingesta, cada señal sigue dos rutas en paralelo: una para actuar ahora y otra para saber por qué.
                </p>
                <div className="bz-vis">
                  <div className="bz-vis-h">
                    <b>
                      Dual Pollinator
                    </b>
                  </div>
                  <div className="bz-fork">
                    <span className="bz-node">
                      <b>
                        Una sola ingesta
                      </b>
                    </span>
                    <svg viewBox="0 0 300 44" fill="none" aria-hidden="true" preserveAspectRatio="none">
                      <path d="M150 0V14Q150 22 142 22H58Q50 22 50 30V44" style={{ stroke: "var(--bzzzbx-glow)" }} strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
                      <path d="M150 14Q150 22 158 22H242Q250 22 250 30V44" style={{ stroke: "var(--indigo-300)" }} strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <div className="bz-paths">
                      <div className="bz-path">
                        <small>
                          Ruta A · Reflejo
                        </small>
                        <b>
                          Actuar ahora
                        </b>
                        <span>
                          Alertas, IA y acciones en tiempo real.
                        </span>
                        <em>
                          milisegundos
                        </em>
                      </div>
                      <div className="bz-path">
                        <small>
                          Ruta B · Verdad durable
                        </small>
                        <b>
                          Saber por qué
                        </b>
                        <span>
                          Registro permanente para evidencia y auditoría.
                        </span>
                        <em>
                          permanente
                        </em>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec" id="conexion" style={{ paddingTop: "0" }}>
          <div className="bz-in">
            <div className="cn-head">
              <div>
                <span className="bz-eyebrow">
                  Cómo nos conectamos
                </span>
                <h2 className="bz-h2">
                  Si tu empresa genera datos,
                  <br />
                  nos conectamos.
                </h2>
                <p className="bz-lead">
                  Del ERP a la planta, de la tienda a la mina. Y donde los datos no existen, los generamos.
                </p>
              </div>
              <ul className="cn-leg">
                <li>
                  <i className="sw" />
                  Software y nube
                </li>
                <li>
                  <i className="ot" />
                  Industria y OT
                </li>
                <li>
                  <i className="ppl" />
                  Personas y documentos
                </li>
                <li>
                  <i className="ext" />
                  Entorno externo
                </li>
              </ul>
            </div>
          </div>
          <div className="cn">
            <div className="cn-row">
              <ul>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M8 6 2 12l6 6M16 6l6 6-6 6" />
                    </svg>
                  </i>
                  API REST
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
                      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
                      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
                    </svg>
                  </i>
                  Webhooks
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="4" r="2" />
                      <circle cx="4" cy="18" r="2" />
                      <circle cx="20" cy="18" r="2" />
                      <path d="M12 6 5 16.3M12 6l7 10.3M6 18h12" />
                    </svg>
                  </i>
                  GraphQL
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
                      <path d="M21 3v5h-5" />
                    </svg>
                  </i>
                  Captura de cambios (CDC)
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <ellipse cx="12" cy="5" rx="8" ry="3" />
                      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                    </svg>
                  </i>
                  SQL y bases de datos
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M3 10h18M9 10v10" />
                    </svg>
                  </i>
                  ERP
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="9" cy="8" r="4" />
                      <path d="M2 21a7 7 0 0 1 14 0" />
                      <path d="M17 4a4 4 0 0 1 0 8M22 21a6 6 0 0 0-4-5.6" />
                    </svg>
                  </i>
                  CRM
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <path d="M9 6h6M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01" />
                    </svg>
                  </i>
                  Punto de venta
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M2 10l10-7 10 7Z" />
                    </svg>
                  </i>
                  Core bancario
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </i>
                  OpenTelemetry
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 6h16M4 10h16M4 14h10M4 18h12" />
                    </svg>
                  </i>
                  Logs y Syslog
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="6" rx="2" />
                      <rect x="2" y="14" width="20" height="6" rx="2" />
                      <path d="M6 7h.01M6 17h.01" />
                    </svg>
                  </i>
                  Colas de mensajes
                </li>
              </ul>
              <ul aria-hidden="true">
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M8 6 2 12l6 6M16 6l6 6-6 6" />
                    </svg>
                  </i>
                  API REST
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
                      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
                      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
                    </svg>
                  </i>
                  Webhooks
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="4" r="2" />
                      <circle cx="4" cy="18" r="2" />
                      <circle cx="20" cy="18" r="2" />
                      <path d="M12 6 5 16.3M12 6l7 10.3M6 18h12" />
                    </svg>
                  </i>
                  GraphQL
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
                      <path d="M21 3v5h-5" />
                    </svg>
                  </i>
                  Captura de cambios (CDC)
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <ellipse cx="12" cy="5" rx="8" ry="3" />
                      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                    </svg>
                  </i>
                  SQL y bases de datos
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M3 10h18M9 10v10" />
                    </svg>
                  </i>
                  ERP
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="9" cy="8" r="4" />
                      <path d="M2 21a7 7 0 0 1 14 0" />
                      <path d="M17 4a4 4 0 0 1 0 8M22 21a6 6 0 0 0-4-5.6" />
                    </svg>
                  </i>
                  CRM
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <path d="M9 6h6M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01" />
                    </svg>
                  </i>
                  Punto de venta
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M2 10l10-7 10 7Z" />
                    </svg>
                  </i>
                  Core bancario
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </i>
                  OpenTelemetry
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 6h16M4 10h16M4 14h10M4 18h12" />
                    </svg>
                  </i>
                  Logs y Syslog
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="6" rx="2" />
                      <rect x="2" y="14" width="20" height="6" rx="2" />
                      <path d="M6 7h.01M6 17h.01" />
                    </svg>
                  </i>
                  Colas de mensajes
                </li>
              </ul>
            </div>
            <div className="cn-row rev">
              <ul>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4M6 13l3-3 3 2 5-5" />
                    </svg>
                  </i>
                  SCADA
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M7 7h4v4H7zM15 7h2M15 11h2M7 15h10" />
                    </svg>
                  </i>
                  PLC
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="5" width="14" height="14" rx="2" />
                      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                    </svg>
                  </i>
                  OPC-UA
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0M12 20h.01" />
                    </svg>
                  </i>
                  MQTT
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="5" width="14" height="14" rx="2" />
                      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                    </svg>
                  </i>
                  Modbus
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 3v18h18" />
                      <path d="m7 15 4-4 3 3 6-7" />
                    </svg>
                  </i>
                  Historiadores
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="2" />
                      <path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19.1 4.9a10 10 0 0 1 0 14.2M4.9 19.1a10 10 0 0 1 0-14.2" />
                    </svg>
                  </i>
                  Sensores IoT
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </i>
                  Telemetría GPS
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 20V9l6 4V9l6 4V5l8 5v10Z" />
                    </svg>
                  </i>
                  MES
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8a2.8 2.8 0 0 1-4-4l8-8Z" />
                      <path d="m3 3 6 6" />
                    </svg>
                  </i>
                  Mantenimiento (CMMS)
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="8" rx="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <path d="M6 6h.01M6 18h.01" />
                    </svg>
                  </i>
                  SNMP
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="14" width="18" height="7" rx="2" />
                      <path d="M7 17.5h.01M11 17.5h.01M8 10a6 6 0 0 1 8 0M5.5 7a10 10 0 0 1 13 0" />
                    </svg>
                  </i>
                  Gateways de borde
                </li>
              </ul>
              <ul aria-hidden="true">
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4M6 13l3-3 3 2 5-5" />
                    </svg>
                  </i>
                  SCADA
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M7 7h4v4H7zM15 7h2M15 11h2M7 15h10" />
                    </svg>
                  </i>
                  PLC
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="5" width="14" height="14" rx="2" />
                      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                    </svg>
                  </i>
                  OPC-UA
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0M12 20h.01" />
                    </svg>
                  </i>
                  MQTT
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="5" width="14" height="14" rx="2" />
                      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                    </svg>
                  </i>
                  Modbus
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 3v18h18" />
                      <path d="m7 15 4-4 3 3 6-7" />
                    </svg>
                  </i>
                  Historiadores
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="2" />
                      <path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19.1 4.9a10 10 0 0 1 0 14.2M4.9 19.1a10 10 0 0 1 0-14.2" />
                    </svg>
                  </i>
                  Sensores IoT
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </i>
                  Telemetría GPS
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 20V9l6 4V9l6 4V5l8 5v10Z" />
                    </svg>
                  </i>
                  MES
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8a2.8 2.8 0 0 1-4-4l8-8Z" />
                      <path d="m3 3 6 6" />
                    </svg>
                  </i>
                  Mantenimiento (CMMS)
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="8" rx="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <path d="M6 6h.01M6 18h.01" />
                    </svg>
                  </i>
                  SNMP
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="14" width="18" height="7" rx="2" />
                      <path d="M7 17.5h.01M11 17.5h.01M8 10a6 6 0 0 1 8 0M5.5 7a10 10 0 0 1 13 0" />
                    </svg>
                  </i>
                  Gateways de borde
                </li>
              </ul>
            </div>
            <div className="cn-row">
              <ul>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M3 15h18M9 3v18" />
                    </svg>
                  </i>
                  Excel y CSV
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                      <path d="M12 10v6M9 13l3-3 3 3" />
                    </svg>
                  </i>
                  SFTP
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                  </i>
                  Correo
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h4" />
                    </svg>
                  </i>
                  Formularios
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="9" y="2" width="6" height="12" rx="3" />
                      <path d="M19 10a7 7 0 0 1-14 0M12 17v5" />
                    </svg>
                  </i>
                  Voz y llamadas
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                      <path d="M14 2v6h6M8 13h8M8 17h5" />
                    </svg>
                  </i>
                  Documentos y PDF
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </i>
                  Cámaras y visión
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m12 3 1.9 5.8L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.2Z" />
                      <path d="M19 15v4M17 17h4" />
                    </svg>
                  </i>
                  Señales sintéticas
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </i>
                  Clima
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m22 7-8.5 8.5-5-5L2 17" />
                      <path d="M16 7h6v6" />
                    </svg>
                  </i>
                  Precios de mercado
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
                    </svg>
                  </i>
                  Redes sociales
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
                    </svg>
                  </i>
                  Datos públicos
                </li>
              </ul>
              <ul aria-hidden="true">
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M3 15h18M9 3v18" />
                    </svg>
                  </i>
                  Excel y CSV
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                      <path d="M12 10v6M9 13l3-3 3 3" />
                    </svg>
                  </i>
                  SFTP
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                  </i>
                  Correo
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h4" />
                    </svg>
                  </i>
                  Formularios
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="9" y="2" width="6" height="12" rx="3" />
                      <path d="M19 10a7 7 0 0 1-14 0M12 17v5" />
                    </svg>
                  </i>
                  Voz y llamadas
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                      <path d="M14 2v6h6M8 13h8M8 17h5" />
                    </svg>
                  </i>
                  Documentos y PDF
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </i>
                  Cámaras y visión
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m12 3 1.9 5.8L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.2Z" />
                      <path d="M19 15v4M17 17h4" />
                    </svg>
                  </i>
                  Señales sintéticas
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </i>
                  Clima
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m22 7-8.5 8.5-5-5L2 17" />
                      <path d="M16 7h6v6" />
                    </svg>
                  </i>
                  Precios de mercado
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
                    </svg>
                  </i>
                  Redes sociales
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
                    </svg>
                  </i>
                  Datos públicos
                </li>
              </ul>
            </div>
          </div>
          <div className="bz-in">
            <p className="cn-note" style={{ textAlign: "center" }}>
              ¿No ves tu sistema? Si genera datos, encontramos la forma de conectarlo.
            </p>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec bz-sec--dk bz-light" id="incluido">
          <div className="bz-in">
            <span className="bz-eyebrow">
              Incluido en BzzzBX
            </span>
            <h2 className="bz-h2">
              Valor desde el primer día.
            </h2>
            <p className="bz-lead">
              Cuatro formas de usar tus datos desde que BzzzBX está en marcha.
            </p>
            <div className="bz-tabs">
              <div className="bz-tb on" style={{ "--r": "1" }}>
                <button type="button" className="bz-tb-h" aria-expanded="true" aria-controls="bz-tp0">
                  <span className="n">
                    01
                  </span>
                  <span>
                    <span className="k">
                      Plataforma de observabilidad
                    </span>
                    <span className="t">
                      Hivemonic
                    </span>
                  </span>
                  <span className="ch" aria-hidden="true" />
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </button>
                <span className="pg" aria-hidden="true" />
                <div className="bz-tb-d">
                  <p className="d">
                    La consola de observabilidad donde tu equipo explora, mide y vigila todo el negocio en tiempo real. Crea dashboards y consultas sobre cualquier dato, configura alertas por umbral o anomalía, y sigue métricas, logs, trazas y eventos de negocio en un solo lugar, sin herramientas adicionales.
                  </p>
                  <ul className="bz-tg">
                    <li>
                      Dashboards
                    </li>
                    <li>
                      Alertas
                    </li>
                    <li>
                      Métricas, logs y trazas
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bz-tp on" id="bz-tp0">
                <div className="bz-con bz-hv">
                  <ul className="hv-side">
                    <li className="hv-logo">
                      H
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
                      </svg>
                      <span>
                        Servicios
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 6h10M8 12h12M6 18h8" />
                      </svg>
                      <span>
                        Trazas
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 6h14M5 10h14M5 14h10M5 18h12" />
                      </svg>
                      <span>
                        Logs
                      </span>
                    </li>
                    <li className="on">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16v16H4zM4 10h16M10 10v10" />
                      </svg>
                      <span>
                        Dashboards
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9a6 6 0 1 1 12 0c0 6 2.5 8 2.5 8h-17S6 15 6 9" />
                        <path d="M10.5 20a1.7 1.7 0 0 0 3 0" />
                      </svg>
                      <span>
                        Alertas
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
                      </svg>
                      <span>
                        Métricas
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3 2 20h20Z" />
                        <path d="M12 10v4M12 17v.5" />
                      </svg>
                      <span>
                        Excepciones
                      </span>
                    </li>
                  </ul>
                  <div className="hv-main">
                    <div className="hv-top">
                      <span className="hv-crumb">
                        Dashboards / Ventas por tienda
                      </span>
                      <span className="hv-time">
                        Últimos 15 min ▾
                      </span>
                    </div>
                    <div className="hv-q">
                      <span className="hv-a">
                        A
                      </span>
                      <span>
                        ventas_total
                      </span>
                      <span>
                        {"canal = 'tienda'"}
                      </span>
                      <span>
                        SUM
                      </span>
                      <span>
                        por tienda
                      </span>
                      <span className="hv-run">
                        Ejecutar
                      </span>
                    </div>
                    <div className="hv-panel">
                      <p>
                        Ventas por minuto
                      </p>
                      <svg className="hv-ch" viewBox="0 0 300 90" preserveAspectRatio="none" aria-hidden="true">
                        <g stroke="rgba(255,255,255,.07)" strokeWidth="1" vectorEffect="non-scaling-stroke">
                          <line x1="0" y1="22" x2="300" y2="22" />
                          <line x1="0" y1="45" x2="300" y2="45" />
                          <line x1="0" y1="68" x2="300" y2="68" />
                        </g>
                        <polyline className="c0" points="0,40 20,36 40,38 60,30 80,33 100,26 120,29 140,22 160,25 180,18 200,21 220,15 240,19 260,12 280,16 300,10" />
                        <polyline className="c1" points="0,60 20,57 40,59 60,52 80,55 100,50 120,53 140,47 160,51 180,46 200,49 220,44 240,47 260,42 280,45 300,41" />
                        <polyline className="c2" points="0,74 20,72 40,75 60,70 80,73 100,69 120,74 140,71 160,76 180,79 200,82 220,80 240,83 260,81 280,84 300,82" />
                      </svg>
                      <div className="hv-leg">
                        <span>
                          <i className="c0" />
                          Lima
                        </span>
                        <span>
                          <i className="c1" />
                          Arequipa
                        </span>
                        <span>
                          <i className="c2" />
                          Trujillo
                        </span>
                      </div>
                    </div>
                    <div className="hv-tiles">
                      <div>
                        <small>
                          Tasa de error
                        </small>
                        <b className="">
                          0,4 %
                        </b>
                      </div>
                      <div>
                        <small>
                          Latencia p95
                        </small>
                        <b className="">
                          182 ms
                        </b>
                      </div>
                      <div>
                        <small>
                          Alertas
                        </small>
                        <b className="bad">
                          2 activas
                        </b>
                      </div>
                    </div>
                    <div className="hv-two">
                      <div className="hv-panel hv-tr">
                        <p>
                          Traza · pedido
                          <span>
                            412 ms
                          </span>
                        </p>
                        <div className="tr-r">
                          <span>
                            checkout
                          </span>
                          <div>
                            <i className="c0" style={{ left: "0%", width: "100%" }} />
                          </div>
                        </div>
                        <div className="tr-r">
                          <span>
                            inventario
                          </span>
                          <div>
                            <i className="c1" style={{ left: "8%", width: "28%" }} />
                          </div>
                        </div>
                        <div className="tr-r">
                          <span>
                            pago
                          </span>
                          <div>
                            <i className="c2" style={{ left: "38%", width: "52%" }} />
                          </div>
                        </div>
                        <div className="tr-r">
                          <span>
                            despacho
                          </span>
                          <div>
                            <i className="c1" style={{ left: "60%", width: "34%" }} />
                          </div>
                        </div>
                      </div>
                      <div className="hv-panel hv-lg">
                        <p>
                          Logs y eventos en vivo
                          <i className="live" />
                        </p>
                        <div className="lg-r info">
                          <b>
                            INFO
                          </b>
                          <time>
                            10:42:07
                          </time>
                          <span>
                            Pedido 48213 creado · tienda Lima
                          </span>
                        </div>
                        <div className="lg-r warn">
                          <b>
                            WARN
                          </b>
                          <time>
                            10:42:08
                          </time>
                          <span>
                            Latencia alta en pasarela de pago
                          </span>
                        </div>
                        <div className="lg-r info">
                          <b>
                            INFO
                          </b>
                          <time>
                            10:42:08
                          </time>
                          <span>
                            Pago aprobado · US$ 129
                          </span>
                        </div>
                        <div className="lg-r error">
                          <b>
                            ERROR
                          </b>
                          <time>
                            10:42:11
                          </time>
                          <span>
                            Stock bajo · SKU 2231 · Arequipa
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bz-tb" style={{ "--r": "2" }}>
                <button type="button" className="bz-tb-h" aria-expanded="false" aria-controls="bz-tp1">
                  <span className="n">
                    02
                  </span>
                  <span>
                    <span className="k">
                      IA y agentes
                    </span>
                    <span className="t">
                      IA conectada por MCP
                    </span>
                  </span>
                  <span className="ch" aria-hidden="true" />
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </button>
                <span className="pg" aria-hidden="true" />
                <div className="bz-tb-d">
                  <p className="d">
                    Conecta tus asistentes de IA o corre agentes sobre los datos de BzzzBX, en tiempo real y con contexto de negocio.
                  </p>
                  <ul className="bz-tg">
                    <li>
                      Modelo a tu elección
                    </li>
                    <li>
                      Agentes en tiempo real
                    </li>
                    <li>
                      Permisos y trazabilidad
                    </li>
                  </ul>
                  <Link className="bz-more" href="/es/ia-aplicada">
                    Más de Observabilidad de Negocio e IA
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bz-tp" id="bz-tp1">
                <div className="bz-con">
                  <div className="bz-mflow">
                    <ul className="sr">
                      <li>
                        ERP
                      </li>
                      <li>
                        CRM
                      </li>
                      <li>
                        IoT
                      </li>
                      <li>
                        Apps
                      </li>
                      <li>
                        Externos
                      </li>
                    </ul>
                    <svg className="fan in" viewBox="0 0 40 100" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0 10.0 C20 10.0 20 50 40 50" />
                      <path d="M0 30.0 C20 30.0 20 50 40 50" />
                      <path d="M0 50 C20 50 20 50 40 50" />
                      <path d="M0 70.0 C20 70.0 20 50 40 50" />
                      <path d="M0 90.0 C20 90.0 20 50 40 50" />
                    </svg>
                    <span className="n bx">
                      BzzzBX
                    </span>
                    <i />
                    <span className="n">
                      MCP
                    </span>
                    <svg className="fan" viewBox="0 0 40 100" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0 50 C20 50 20 16.67 40 16.67" />
                      <path d="M0 50 C20 50 20 50 40 50" />
                      <path d="M0 50 C20 50 20 83.33 40 83.33" />
                    </svg>
                    <ul className="cl">
                      <li>
                        Asistentes de IA
                      </li>
                      <li>
                        Copilotos
                      </li>
                      <li>
                        Agentes
                      </li>
                    </ul>
                  </div>
                  <p className="bz-q">
                    ¿Qué clientes clave van a recibir tarde su pedido hoy, y por qué?
                  </p>
                  <div className="bz-a">
                    14 pedidos de 3 clientes clave. La planta 2 opera con un turno incompleto y el camión 7 lleva 40 min de retraso. Sugiero mover esos pedidos al turno B.
                    <small>
                      Evidencia cruzada: turnos de RR. HH., producción, GPS de flota, pedidos del ERP y cuentas del CRM
                    </small>
                  </div>
                </div>
              </div>
              <div className="bz-tb" style={{ "--r": "3" }}>
                <button type="button" className="bz-tb-h" aria-expanded="false" aria-controls="bz-tp2">
                  <span className="n">
                    03
                  </span>
                  <span>
                    <span className="k">
                      Más poder
                    </span>
                    <span className="t">
                      Engines avanzados
                    </span>
                  </span>
                  <span className="ch" aria-hidden="true" />
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </button>
                <span className="pg" aria-hidden="true" />
                <div className="bz-tb-d">
                  <p className="d">
                    Aplicaciones especializadas que ya usan nuestros clientes: Business Journeys, mantenimiento predictivo, puntos de interacción con clientes y GeoMapa de comando. Son adicionales: los activas solo si los necesitas, sobre los mismos datos y sin una nueva integración.
                  </p>
                  <Link className="bz-more" href="/es/productos/aplicaciones">
                    Ver Engines
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bz-tp" id="bz-tp2">
                <div className="bz-engp">
                  <ul className="ex-tiles gx gx--dk">
                    <li style={{ "--i": "0" }}>
                      <div className="gx-art" aria-hidden="true">
                        <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                          <defs>
                            <radialGradient id="gx201" cx="50%" cy="50%" r="50%">
                              <stop offset="0" stopColor="#4e49f2" stopOpacity=".42" />
                              <stop offset=".45" stopColor="#6c68f5" stopOpacity=".18" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                            </radialGradient>
                            {"\n"}
                            <linearGradient id="hx201" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#2a2a8a" />
                              <stop offset="1" stopColor="#0d0f33" />
                            </linearGradient>
                            {"\n"}
                            <linearGradient id="bx201" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0" stopColor="#b9b6ff" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                            </linearGradient>
                            {"\n"}
                            <pattern id="px201" width="16" height="16" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r=".8" fill="#fff" fillOpacity=".09" />
                            </pattern>
                            {"\n"}
                            <radialGradient id="mx201" cx="50%" cy="50%" r="55%">
                              <stop offset="0" stopColor="#fff" />
                              <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </radialGradient>
                            <mask id="kx201">
                              <rect width="400" height="220" fill="url(#mx201)" />
                            </mask>
                            {"\n"}
                            <filter id="fx201" x="-80%" y="-80%" width="260%" height="260%">
                              <feGaussianBlur stdDeviation="10" />
                            </filter>
                          </defs>
                          {"\n"}
                          <rect width="400" height="220" fill="url(#px201)" mask="url(#kx201)" />
                          <path d="M95 110H164" stroke="rgba(150,146,255,.32)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
                          <path d="M236 110H305" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M95 104H140M95 116H128" stroke="rgba(255,255,255,.12)" fill="none" />
                          <circle className="gx-d" cx="262" cy="110" r="2.4" fill="#b9b6ff" />
                          <circle cx="262" cy="110" r="6" fill="#b9b6ff" opacity=".18" />
                          <g className="gx-n">
                            <rect x="61.0" y="93.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(70.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="9" cy="20" r="1.5" />
                              <circle cx="18" cy="20" r="1.5" />
                              <path d="M2 3h3l2.7 11.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 7H6" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="305.0" y="93.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(150,146,255,.55)" />
                            <g transform="translate(314.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#b9b6ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5" />
                            </g>
                          </g>
                          <g className="gx-hub">
                            <ellipse className="gx-glow" cx="200" cy="110" rx="105.60000000000001" ry="79.2" fill="url(#gx201)" />
                            {"\n"}
                            <rect x="167.0" y="77.0" width="66" height="66" rx="17.2" fill="#4e49f2" opacity=".55" filter="url(#fx201)" />
                            {"\n"}
                            <rect x="167.0" y="77.0" width="66" height="66" rx="17.2" fill="url(#hx201)" stroke="url(#bx201)" strokeWidth="1.2" />
                            {"\n"}
                            <rect x="173.0" y="83.0" width="54" height="54" rx="13.2" fill="none" stroke="rgba(255,255,255,.08)" />
                            {"\n"}
                            <g transform="translate(186.14 96.14) scale(1.155)" fill="none" stroke="#fff" strokeWidth="1.30" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span>
                        Business Journeys
                      </span>
                    </li>
                    <li style={{ "--i": "1" }}>
                      <div className="gx-art" aria-hidden="true">
                        <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                          <defs>
                            <radialGradient id="gx202" cx="50%" cy="50%" r="50%">
                              <stop offset="0" stopColor="#4e49f2" stopOpacity=".42" />
                              <stop offset=".45" stopColor="#6c68f5" stopOpacity=".18" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                            </radialGradient>
                            {"\n"}
                            <linearGradient id="hx202" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#2a2a8a" />
                              <stop offset="1" stopColor="#0d0f33" />
                            </linearGradient>
                            {"\n"}
                            <linearGradient id="bx202" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0" stopColor="#b9b6ff" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                            </linearGradient>
                            {"\n"}
                            <pattern id="px202" width="16" height="16" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r=".8" fill="#fff" fillOpacity=".09" />
                            </pattern>
                            {"\n"}
                            <radialGradient id="mx202" cx="50%" cy="50%" r="55%">
                              <stop offset="0" stopColor="#fff" />
                              <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </radialGradient>
                            <mask id="kx202">
                              <rect width="400" height="220" fill="url(#mx202)" />
                            </mask>
                            {"\n"}
                            <filter id="fx202" x="-80%" y="-80%" width="260%" height="260%">
                              <feGaussianBlur stdDeviation="10" />
                            </filter>
                          </defs>
                          {"\n"}
                          <rect width="400" height="220" fill="url(#px202)" mask="url(#kx202)" />
                          <rect x="70" y="70" width="26" height="120" rx="6" fill="#0c0f2b" stroke="rgba(150,146,255,0.18)" />
                          <rect x="116" y="94" width="26" height="96" rx="6" fill="#0c0f2b" stroke="rgba(150,146,255,0.26)" />
                          <rect x="162" y="116" width="26" height="74" rx="6" fill="#0c0f2b" stroke="rgba(150,146,255,0.34)" />
                          <rect x="208" y="134" width="26" height="56" rx="6" fill="#0c0f2b" stroke="rgba(150,146,255,0.42)" />
                          <rect x="254" y="150" width="26" height="40" rx="6" fill="#0c0f2b" stroke="rgba(150,146,255,0.50)" />
                          <rect x="300" y="160" width="26" height="30" rx="6" fill="url(#hx202)" stroke="rgba(150,146,255,0.58)" />
                          <path d="M83 66C160 92 230 128 313 152" stroke="#9692ff" strokeOpacity=".6" fill="none" strokeDasharray="3 4" />
                          <circle className="gx-d" cx="313" cy="152" r="2.4" fill="#b9b6ff" />
                          <circle cx="313" cy="152" r="6" fill="#b9b6ff" opacity=".18" />
                          <g className="gx-hub">
                            <ellipse className="gx-glow" cx="320" cy="70" rx="83.2" ry="62.4" fill="url(#gx202)" />
                            {"\n"}
                            <rect x="294.0" y="44.0" width="52" height="52" rx="13.5" fill="#4e49f2" opacity=".55" filter="url(#fx202)" />
                            {"\n"}
                            <rect x="294.0" y="44.0" width="52" height="52" rx="13.5" fill="url(#hx202)" stroke="url(#bx202)" strokeWidth="1.2" />
                            {"\n"}
                            <rect x="300.0" y="50.0" width="40" height="40" rx="10.4" fill="none" stroke="rgba(255,255,255,.08)" />
                            {"\n"}
                            <g transform="translate(309.08 59.08) scale(0.91)" fill="none" stroke="#fff" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="3" />
                              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span>
                        Maquinaria y mantenimiento predictivo
                      </span>
                    </li>
                    <li style={{ "--i": "2" }}>
                      <div className="gx-art" aria-hidden="true">
                        <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                          <defs>
                            <radialGradient id="gx203" cx="50%" cy="50%" r="50%">
                              <stop offset="0" stopColor="#4e49f2" stopOpacity=".42" />
                              <stop offset=".45" stopColor="#6c68f5" stopOpacity=".18" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                            </radialGradient>
                            {"\n"}
                            <linearGradient id="hx203" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#2a2a8a" />
                              <stop offset="1" stopColor="#0d0f33" />
                            </linearGradient>
                            {"\n"}
                            <linearGradient id="bx203" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0" stopColor="#b9b6ff" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                            </linearGradient>
                            {"\n"}
                            <pattern id="px203" width="16" height="16" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r=".8" fill="#fff" fillOpacity=".09" />
                            </pattern>
                            {"\n"}
                            <radialGradient id="mx203" cx="50%" cy="50%" r="55%">
                              <stop offset="0" stopColor="#fff" />
                              <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </radialGradient>
                            <mask id="kx203">
                              <rect width="400" height="220" fill="url(#mx203)" />
                            </mask>
                            {"\n"}
                            <filter id="fx203" x="-80%" y="-80%" width="260%" height="260%">
                              <feGaussianBlur stdDeviation="10" />
                            </filter>
                          </defs>
                          {"\n"}
                          <rect width="400" height="220" fill="url(#px203)" mask="url(#kx203)" />
                          <path d="M87 58H118.5V97.0H167" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M61 110H105.5V110.0H167" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M87 162H118.5V123.0H167" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M313 58H281.5V97.0H233" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M339 110H294.5V110.0H233" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M313 162H281.5V123.0H233" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <circle className="gx-d" cx="108" cy="110" r="2.4" fill="#b9b6ff" />
                          <circle cx="108" cy="110" r="6" fill="#b9b6ff" opacity=".18" />
                          <circle className="gx-d" cx="292" cy="72" r="2.4" fill="#b9b6ff" />
                          <circle cx="292" cy="72" r="6" fill="#b9b6ff" opacity=".18" />
                          <g className="gx-n">
                            <rect x="53.0" y="41.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(62.01 50.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="27.0" y="93.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(36.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="5" width="18" height="14" rx="2" />
                              <path d="m3 7 9 6 9-6" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="53.0" y="145.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(62.01 154.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                              <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="313.0" y="41.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(322.01 50.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="339.0" y="93.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(348.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 9 4.5 4h15L21 9" />
                              <path d="M4 9v11h16V9" />
                              <path d="M3 9h18M9 20v-6h6v6" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="313.0" y="145.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(322.01 154.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                              <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
                            </g>
                          </g>
                          <g className="gx-hub">
                            <ellipse className="gx-glow" cx="200" cy="110" rx="105.60000000000001" ry="79.2" fill="url(#gx203)" />
                            {"\n"}
                            <rect x="167.0" y="77.0" width="66" height="66" rx="17.2" fill="#4e49f2" opacity=".55" filter="url(#fx203)" />
                            {"\n"}
                            <rect x="167.0" y="77.0" width="66" height="66" rx="17.2" fill="url(#hx203)" stroke="url(#bx203)" strokeWidth="1.2" />
                            {"\n"}
                            <rect x="173.0" y="83.0" width="54" height="54" rx="13.2" fill="none" stroke="rgba(255,255,255,.08)" />
                            {"\n"}
                            <g transform="translate(186.14 96.14) scale(1.155)" fill="none" stroke="#fff" strokeWidth="1.30" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="8" r="4" />
                              <path d="M4 21a8 8 0 0 1 16 0" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span>
                        Puntos de interacción con clientes
                      </span>
                    </li>
                    <li style={{ "--i": "3" }}>
                      <div className="gx-art" aria-hidden="true">
                        <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                          <defs>
                            <radialGradient id="gx204" cx="50%" cy="50%" r="50%">
                              <stop offset="0" stopColor="#4e49f2" stopOpacity=".42" />
                              <stop offset=".45" stopColor="#6c68f5" stopOpacity=".18" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                            </radialGradient>
                            {"\n"}
                            <linearGradient id="hx204" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#2a2a8a" />
                              <stop offset="1" stopColor="#0d0f33" />
                            </linearGradient>
                            {"\n"}
                            <linearGradient id="bx204" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0" stopColor="#b9b6ff" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                            </linearGradient>
                            {"\n"}
                            <pattern id="px204" width="16" height="16" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r=".8" fill="#fff" fillOpacity=".09" />
                            </pattern>
                            {"\n"}
                            <radialGradient id="mx204" cx="50%" cy="50%" r="55%">
                              <stop offset="0" stopColor="#fff" />
                              <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </radialGradient>
                            <mask id="kx204">
                              <rect width="400" height="220" fill="url(#mx204)" />
                            </mask>
                            {"\n"}
                            <filter id="fx204" x="-80%" y="-80%" width="260%" height="260%">
                              <feGaussianBlur stdDeviation="10" />
                            </filter>
                          </defs>
                          {"\n"}
                          <rect width="400" height="220" fill="url(#px204)" mask="url(#kx204)" />
                          <circle cx="200" cy="110" r="62" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <circle cx="200" cy="110" r="96" stroke="rgba(150,146,255,.16)" fill="none" strokeDasharray="2 5" />
                          <g className="gx-n">
                            <rect x="128.0" y="74.0" width="28" height="28" rx="7.8" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(135.42 81.42) scale(0.5483333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
                              <circle cx="7" cy="18" r="2" />
                              <circle cx="17" cy="18" r="2" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="278.0" y="70.0" width="28" height="28" rx="7.8" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(285.42 77.42) scale(0.5483333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 9 4.5 4h15L21 9" />
                              <path d="M4 9v11h16V9" />
                              <path d="M3 9h18M9 20v-6h6v6" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="236.0" y="140.0" width="28" height="28" rx="7.8" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(243.42 147.42) scale(0.5483333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="7" rx="2" />
                              <rect x="3" y="14" width="18" height="7" rx="2" />
                              <path d="M7 6.5h.01M7 17.5h.01" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="98.0" y="136.0" width="28" height="28" rx="7.8" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(105.42 143.42) scale(0.5483333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="8" r="4" />
                              <path d="M4 21a8 8 0 0 1 16 0" />
                            </g>
                          </g>
                          <circle className="gx-d" cx="200" cy="48" r="2.4" fill="#b9b6ff" />
                          <circle cx="200" cy="48" r="6" fill="#b9b6ff" opacity=".18" />
                          <circle className="gx-d" cx="296" cy="120" r="2.4" fill="#b9b6ff" />
                          <circle cx="296" cy="120" r="6" fill="#b9b6ff" opacity=".18" />
                          <g className="gx-hub">
                            <ellipse className="gx-glow" cx="200" cy="110" rx="92.80000000000001" ry="69.6" fill="url(#gx204)" />
                            {"\n"}
                            <rect x="171.0" y="81.0" width="58" height="58" rx="15.1" fill="#4e49f2" opacity=".55" filter="url(#fx204)" />
                            {"\n"}
                            <rect x="171.0" y="81.0" width="58" height="58" rx="15.1" fill="url(#hx204)" stroke="url(#bx204)" strokeWidth="1.2" />
                            {"\n"}
                            <rect x="177.0" y="87.0" width="46" height="46" rx="11.6" fill="none" stroke="rgba(255,255,255,.08)" />
                            {"\n"}
                            <g transform="translate(187.82 97.82) scale(1.015)" fill="none" stroke="#fff" strokeWidth="1.48" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                              <circle cx="12" cy="10" r="3" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span>
                        GeoMapa de comando
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bz-tb" style={{ "--r": "4" }}>
                <button type="button" className="bz-tb-h" aria-expanded="false" aria-controls="bz-tp3">
                  <span className="n">
                    04
                  </span>
                  <span>
                    <span className="k">
                      Plataforma abierta
                    </span>
                    <span className="t">
                      Crea tus propias apps
                    </span>
                  </span>
                  <span className="ch" aria-hidden="true" />
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </button>
                <span className="pg" aria-hidden="true" />
                <div className="bz-tb-d">
                  <p className="d">
                    Crea aplicaciones completas desde cero, no solo tableros: UI/UX diseñada 100 % a la medida de tu marca y tus procesos, con lógica de negocio, automatizaciones, ingesta de nuevas fuentes y modelos propios sobre los datos de BzzzBX.
                  </p>
                  <ul className="bz-tg">
                    <li>
                      UI/UX 100 % a medida
                    </li>
                    <li>
                      Lógica y automatizaciones
                    </li>
                    <li>
                      Modelos propios
                    </li>
                  </ul>
                  <Link className="bz-more" href="/es/contacto">
                    Cuéntanos tu caso
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bz-tp" id="bz-tp3">
                <div className="bz-con ap">
                  <div className="ap-bar">
                    <span className="ap-ic">
                      +
                    </span>
                    <span className="ap-nm">
                      Nueva app · Control de despachos
                    </span>
                    <span className="ap-pub">
                      Publicar app
                    </span>
                  </div>
                  <div className="ap-body">
                    <ul className="ap-pal">
                      <li className="g">
                        Interfaz
                      </li>
                      <li>
                        Pantallas
                      </li>
                      <li>
                        Componentes
                      </li>
                      <li>
                        Formularios
                      </li>
                      <li>
                        Estilos de marca
                      </li>
                      <li className="g">
                        Lógica
                      </li>
                      <li className="lg">
                        Ingesta
                      </li>
                      <li className="lg">
                        Regla de negocio
                      </li>
                      <li className="lg">
                        Automatización
                      </li>
                      <li className="lg">
                        Modelo
                      </li>
                    </ul>
                    <div className="ap-cv">
                      <div className="ap-scr">
                        <p>
                          Pantalla · Despachos en riesgo
                        </p>
                        <div className="ap-row">
                          <span>
                            <b>
                              Pedido 48213
                            </b>
                            <small>
                              Andina Retail
                            </small>
                          </span>
                          <em>
                            +42 min
                          </em>
                          <button type="button" tabIndex={-1}>
                            Reasignar
                          </button>
                        </div>
                        <div className="ap-row">
                          <span>
                            <b>
                              Pedido 48190
                            </b>
                            <small>
                              Norte Market
                            </small>
                          </span>
                          <em>
                            +35 min
                          </em>
                          <button type="button" tabIndex={-1}>
                            Reasignar
                          </button>
                        </div>
                      </div>
                      <div className="ap-fl">
                        <p>
                          Lógica de la app
                        </p>
                        <ol>
                          <li className="in">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                              </svg>
                            </i>
                            <span>
                              <b>
                                Ingesta
                              </b>
                              <small>
                                Pedidos del ERP y GPS de flota
                              </small>
                            </span>
                          </li>
                          <li className="rule">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M6 3v6a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v6M15 18l3 3 3-3" />
                              </svg>
                            </i>
                            <span>
                              <b>
                                Regla de negocio
                              </b>
                              <small>
                                Si el retraso supera 30 min
                              </small>
                            </span>
                          </li>
                          <li className="model">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                              </svg>
                            </i>
                            <span>
                              <b>
                                Modelo · IA
                              </b>
                              <small>
                                Pronóstico de demora por ruta
                              </small>
                            </span>
                          </li>
                          <li className="auto">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
                              </svg>
                            </i>
                            <span>
                              <b>
                                Automatización
                              </b>
                              <small>
                                Reasigna el turno y avisa al cliente
                              </small>
                            </span>
                          </li>
                        </ol>
                        <p className="ap-md">
                          Modelos estadísticos, de optimización o de IA, propios o de terceros
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="ap-src">
                    {"Datos de BzzzBX vía "}
                    <b>
                      API
                    </b>
                    {" · "}
                    <b>
                      SQL
                    </b>
                    {" · "}
                    <b>
                      MCP
                    </b>
                    , con los permisos de cada usuario
                  </p>
                </div>
              </div>
            </div>
          </div>
          <style dangerouslySetInnerHTML={{ __html: ".bz-tabs.hold .bz-tb.on .pg{animation-play-state:paused}" }} />
        </section>
        {"\n\n\n"}
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              Descubre lo que BzzzBX puede hacer por tu empresa.
            </h2>
            <p className="mt-5 max-w-[560px] text-pretty text-body-m text-[#d8d8d8] lg:mt-6 lg:text-body-l">
              Conversemos sobre tu operación.
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
