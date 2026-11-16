import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/bo11y",
  title: "Bo11y · Qué es Business Observability · Boss.Technology",
  description: "Qué es Business Observability (Bo11y): ver, entender y actuar sobre todo el negocio mientras sucede. Cómo se relaciona con el monitoreo, el BI, los data lakes y la inteligencia artificial.",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1 bz bo">
        {"\n"}
        <section className="bo-hero bz-hero" data-nav="dark">
          <div className="bz-in bo-hero-g">
            <div>
              <span className="bz-eyebrow">
                Bo11y · Business Observability
              </span>
              <h1 className="bo-h1">
                {"Tu empresa, como un solo "}
                <em>
                  sistema vivo
                </em>
                {" y en tiempo real."}
              </h1>
              <p className="bo-def">
                <b>
                  Business Observability
                </b>
                {" captura el estado vivo de tu empresa - operaciones, desempeño y comportamiento - y lo convierte en decisiones y acciones."}
              </p>
              <div className="bo-cta">
                <Link className="bz-btn bz-btn--p" href="/es/contacto">
                  Agenda una reunión
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
                <a className="bz-btn bo-btn-l" href="#ejemplo">
                  Ver un ejemplo
                </a>
              </div>
              <p className="bo-tiny">
                <b>
                  Bo11y
                </b>
                {" es la forma corta de Business Observability."}
              </p>
            </div>
            <ol className="bo-loop">
              <li>
                <span className="bz-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <div>
                  <h3>
                    Ver
                  </h3>
                  <p>
                    Todas las señales del negocio en un solo lugar: sistemas, máquinas, personas, clientes, proveedores y entorno.
                  </p>
                </div>
              </li>
              <li>
                <span className="bz-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                    <path d="M8.5 11h5M11 8.5v5" />
                  </svg>
                </span>
                <div>
                  <h3>
                    Entender
                  </h3>
                  <p>
                    El contexto detrás de cada dato: qué pasa, por qué pasa y a quién afecta.
                  </p>
                </div>
              </li>
              <li>
                <span className="bz-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
                  </svg>
                </span>
                <div>
                  <h3>
                    Actuar
                  </h3>
                  <p>
                    Prioriza por impacto en el negocio y responde a tiempo, con alertas, predicciones y flujos automáticos.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec" id="ejemplo">
          <div className="bz-in">
            <div className="bo-c">
              <span className="bo-case">
                <i />
                Ejemplo: una distribuidora comercial, un martes a las 10:00 AM
              </span>
              <h2 className="bz-h2 bo-ej-h">
                {"Los pedidos empiezan a salir tarde. "}
                <span>
                  ¿Cuándo te enteras y qué puedes hacer?
                </span>
              </h2>
            </div>
            <div className="bo-lv">
              <article className="bo-l">
                <p className="bo-l-n">
                  Business Intelligence
                  <em>
                    Te enteras
                  </em>
                </p>
                <h3>
                  <span className="bo-num">
                    01 ·
                  </span>
                  {" ¿Qué pasó?"}
                </h3>
                <div className="bo-stage" aria-hidden="false">
                  <span className="bo-bars" aria-hidden="true" />
                  <div className="bo-alert">
                    <small>
                      Reporte mensual · día 30
                    </small>
                    {"Entregas a tiempo: "}
                    <b>
                      96 % → 81 %
                    </b>
                    . Dos clientes ya se fueron.
                  </div>
                  <span className="bo-bars r" aria-hidden="true" />
                </div>
              </article>
              <article className="bo-l">
                <p className="bo-l-n">
                  Monitoreo
                  <em>
                    Ves
                  </em>
                </p>
                <h3>
                  <span className="bo-num">
                    02 ·
                  </span>
                  {" ¿Qué está fallando ahora?"}
                </h3>
                <div className="bo-stage" aria-hidden="false">
                  <span className="bo-bars" aria-hidden="true" />
                  <div className="bo-alert">
                    <small>
                      Alerta · 10:05 AM
                    </small>
                    <b>
                      40 pedidos
                    </b>
                    {" atrasados. Sin causa ni costo."}
                  </div>
                  <span className="bo-bars r" aria-hidden="true" />
                </div>
              </article>
              <article className="bo-l bo-l--b">
                <p className="bo-l-n">
                  Business Observability
                  <em>
                    Actúas
                  </em>
                </p>
                <h3>
                  <span className="bo-num">
                    03 ·
                  </span>
                  {" ¿Qué pasa, por qué y qué hago ahora?"}
                </h3>
                <div className="bo-stage" aria-hidden="false">
                  <span className="bo-bars" aria-hidden="true" />
                  <div className="bo-alert">
                    <small>
                      Crítico · 10:05 AM
                    </small>
                    <b className="bo-risk">
                      US$ 120.000 en riesgo
                    </b>
                    <ul className="bo-ev4">
                      <li>
                        <em>
                          Ahora
                        </em>
                        <span>
                          40 pedidos atrasados
                        </span>
                      </li>
                      <li>
                        <em>
                          Por qué
                        </em>
                        <span>
                          ausentismo en almacén
                        </span>
                      </li>
                      <li>
                        <em>
                          Antes
                        </em>
                        <span>
                          ya pasó 4 veces este año
                        </span>
                      </li>
                      <li>
                        <em>
                          Acción
                        </em>
                        <span>
                          reasignar turno y avisar
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="bo-bars r" aria-hidden="true" />
                </div>
              </article>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec" id="tuneles" style={{ paddingTop: "0" }}>
          <div className="bz-in">
            <span className="bz-eyebrow">
              El problema
            </span>
            <h2 className="bz-h2">
              La mayor parte del negocio ocurre fuera de tus sistemas.
            </h2>
            <p className="bz-lead">
              Los sistemas y aplicaciones son solo una parte. El resto pasa en máquinas, personas, proveedores y terceros, donde casi nadie mira a tiempo.
            </p>
            <div className="bo-bb bo-bb2">
              <div>
                <i aria-hidden="true">
                  <svg viewBox="0 0 24 24" strokeLinejoin="round">
                    <path d="M12 2.8 20.5 7.4v9.2L12 21.2 3.5 16.6V7.4Z" fill="#0b0b12" />
                    <path d="M12 2.8 20.5 7.4 12 12 3.5 7.4Z" fill="#3a3a48" />
                    <path d="M12 12v9.2L3.5 16.6V7.4Z" fill="#1c1c26" />
                  </svg>
                </i>
                <b>
                  Cajas negras
                </b>
                <span>
                  procesos críticos sin visibilidad
                </span>
              </div>
              <div>
                <i aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.9 4.2A10 10 0 0 1 12 4c6 0 9.5 6.5 9.5 6.5-.6 1-1.4 2.1-2.4 3.1M6.6 6.6C3.9 8.3 2.5 12 2.5 12S6 18.5 12 18.5c1.8 0 3.4-.5 4.7-1.3" />
                    <path d="M14.1 14.1a3 3 0 1 1-4.2-4.2M3 3l18 18" />
                  </svg>
                </i>
                <b>
                  Puntos ciegos
                </b>
                <span>
                  datos que existen, pero nadie captura
                </span>
              </div>
            </div>
            <div className="bo-tun" data-bo-tun="">
              <p className="bo-tun-ctx">
                <span className="bo-case">
                  <i />
                  Ejemplo: un pedido en una cafetería, de la app al cliente
                </span>
              </p>
              <div className="bo-sw" role="group">
                <button type="button" data-v="dark" aria-pressed="true">
                  Hoy
                </button>
                <button type="button" data-v="lit" aria-pressed="false">
                  Con Bo11y
                </button>
              </div>
              <span className="bo-hint">
                Haz clic para ver la diferencia
              </span>
              <ol className="bo-steps">
                <li className="">
                  <small>
                    01
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2" width="10" height="20" rx="2" />
                      <path d="M11 18h2" />
                    </svg>
                  </i>
                  <b>
                    Pedido en la app
                  </b>
                  <span className="bo-off">
                    Recibido 10:02
                  </span>
                  <span className="bo-on">
                    Recibido 10:02
                  </span>
                </li>
                <li className="">
                  <small>
                    02
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20M6 15h4" />
                    </svg>
                  </i>
                  <b>
                    Pago
                  </b>
                  <span className="bo-off">
                    Aprobado
                  </span>
                  <span className="bo-on">
                    Aprobado
                  </span>
                </li>
                <li className="mid">
                  <small>
                    03
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21 8-9-5-9 5v8l9 5 9-5Z" />
                      <path d="m3 8 9 5 9-5M12 13v8" />
                    </svg>
                  </i>
                  <b>
                    Insumos
                  </b>
                  <span className="bo-off">
                    Sin datos
                  </span>
                  <span className="bo-on">
                    Leche: queda 18 %
                  </span>
                </li>
                <li className="mid">
                  <small>
                    04
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21a8 8 0 0 1 16 0" />
                    </svg>
                  </i>
                  <b>
                    Barista y turno
                  </b>
                  <span className="bo-off">
                    Sin datos
                  </span>
                  <span className="bo-on">
                    1 persona menos en turno
                  </span>
                </li>
                <li className="mid hot">
                  <small>
                    05
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6Z" />
                      <path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17M8 2v3M12 2v3" />
                    </svg>
                  </i>
                  <b>
                    Espresso
                  </b>
                  <span className="bo-off">
                    Sin datos
                  </span>
                  <span className="bo-on">
                    Presión baja · máquina 2
                  </span>
                </li>
                <li className="mid">
                  <small>
                    06
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
                      <circle cx="7" cy="18" r="2" />
                      <circle cx="17" cy="18" r="2" />
                    </svg>
                  </i>
                  <b>
                    Despacho
                  </b>
                  <span className="bo-off">
                    Sin datos
                  </span>
                  <span className="bo-on">
                    Moto con 6 min de retraso
                  </span>
                </li>
                <li className="">
                  <small>
                    07
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z" />
                      <path d="M12 9v3M12 15h.01" />
                    </svg>
                  </i>
                  <b>
                    Cliente
                  </b>
                  <span className="bo-off">
                    Reclamo a las 10:25
                  </span>
                  <span className="bo-on">
                    Aviso previo al cliente
                  </span>
                </li>
              </ol>
              <div className="bo-blind" aria-hidden="true">
                <span>
                  Punto ciego: en estas etapas no tienes datos
                </span>
              </div>
              <div className="bo-out bo-out--d">
                <i>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8v5M12 16.5h.01" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </i>
                <div>
                  <small>
                    Hoy
                  </small>
                  <b>
                    Te enteras cuando el cliente ya reclamó.
                  </b>
                </div>
              </div>
              <div className="bo-out bo-out--l">
                <div>
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </i>
                  <small>
                    Ves
                  </small>
                  <b>
                    Presión baja en la máquina 2 y moto retrasada, mientras ocurre.
                  </b>
                </div>
                <div>
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                    </svg>
                  </i>
                  <small>
                    Automatizas
                  </small>
                  <b>
                    Los pedidos pasan a la máquina 1 y se reasigna el despacho.
                  </b>
                </div>
                <div>
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5.1A8 8 0 1 1 21 12Z" />
                      <path d="m8.5 12 2.5 2.5 4.5-4.5" />
                    </svg>
                  </i>
                  <small>
                    Anticipas
                  </small>
                  <b>
                    El cliente recibe un aviso antes de reclamar.
                  </b>
                </div>
              </div>
            </div>
          </div>
        </section>
        {"\n\n\n"}
        <section className="bz-sec bz-dark" data-nav="dark" id="ia">
          <div className="bz-in">
            <div className="bo-c">
              <span className="bz-eyebrow">
                Bo11y e inteligencia artificial
              </span>
              <h2 className="bz-h2">
                La IA sin observabilidad es como un cerebro sin cuerpo.
              </h2>
              <p className="bz-lead">
                Los agentes y copilotos de IA son cada vez más capaces. Lo que les falta es una comprensión compartida y en tiempo real de la empresa. Bo11y se la da.
              </p>
              <p style={{ marginTop: "28px" }}>
                <Link className="bz-btn bz-btn--p" href="/es/ia-aplicada">
                  Conoce IA aplicada
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="bz-sec bo-bx-sec" id="bzzzbx">
          <div className="bz-in">
            <div className="bo-bx3" data-nav="dark">
              <img className="bo-bx3-img" src="/assets/brand/bzzzbx-hero-gold4.webp" alt="" width="2400" height="1340" loading="lazy" decoding="async" />
              <div className="bo-bx3-t">
                <span className="bz-eyebrow">
                  Cómo se lleva a la práctica
                </span>
                <h2 className="bz-h2">
                  {"Bo11y es el enfoque. "}
                  <span>
                    BzzzBX lo hace posible.
                  </span>
                </h2>
                <p className="bz-lead">
                  El servidor que reúne todas las señales de tu empresa en una sola fuente de verdad, en tiempo real.
                </p>
                <ul className="bo-bx3-ck">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                    Se conecta a lo que ya tienes
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                    En tu nube o centro de datos
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                    Tu dato no sale
                  </li>
                </ul>
                <Link className="bz-btn bz-btn--p" href="/es/productos/plataformas">
                  Conoce BzzzBX
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              ¿Qué está pasando hoy en tu negocio?
            </h2>
            <p className="sec-sub sec-dark-sub">
              Conversemos y descubre lo que Bo11y puede mostrarte.
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
