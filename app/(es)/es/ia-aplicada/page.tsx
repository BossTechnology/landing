import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/ia-aplicada",
  title: "IA aplicada · Boss.Technology",
  description: "Conecta asistentes, copilotos y agentes de IA a los datos vivos de tu empresa a través de BzzzBX: con contexto de negocio, evidencia y control.",
});

export default function Page() {
  return (
    <>
      <main className="flex-1 bz ia">
        {"\n"}
        <section className="bz-hero ia-hero" data-nav="dark" id="top">
          <div className="bz-in">
            <div className="bz-hero-grid">
              <div>
                <span className="bz-kicker">
                  <i />
                  Inteligencia artificial aplicada
                </span>
                <h1 className="ia-h1">
                  {"IA que trabaja sobre la "}
                  <em>
                    realidad de tu negocio
                  </em>
                  .
                </h1>
                <p className="bz-sub">
                  Así llevamos la IA a la operación. Conecta asistentes, copilotos y agentes a los datos vivos de tu empresa a través de BzzzBX: con contexto de negocio, evidencia y control.
                </p>
                <div className="bz-cta">
                  <Link className="bz-btn bz-btn--p" href="/es/contacto">
                    Agenda una reunión
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
              <div className="ia-viz">
                <canvas role="img" aria-label="Red de inteligencia artificial alimentada por los datos vivos del negocio a través de BzzzBX" />
              </div>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec ia-demo-sec" id="practica">
          <div className="bz-in">
            <span className="bz-eyebrow">
              En la práctica
            </span>
            <h2 className="bz-h2">
              Tu negocio responde. Y también actúa.
            </h2>
            <p className="bz-lead">
              Asistentes que responden con evidencia. Agentes que actúan bajo control.
            </p>
            <div className="bz-con ia-hv ia-demo">
              <div className="bz-mflow">
                <ul className="sr">
                  <li>
                    ERP
                  </li>
                  <li>
                    CRM
                  </li>
                  <li>
                    Planta
                  </li>
                  <li>
                    Flota
                  </li>
                  <li>
                    RR. HH.
                  </li>
                  <li>
                    Inventario
                  </li>
                  <li>
                    Atención
                  </li>
                  <li>
                    Clima
                  </li>
                </ul>
                <svg className="fan in" viewBox="0 0 40 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 6.25 C20 6.25 20 50 40 50" />
                  <path d="M0 18.75 C20 18.75 20 50 40 50" />
                  <path d="M0 31.25 C20 31.25 20 50 40 50" />
                  <path d="M0 43.75 C20 43.75 20 50 40 50" />
                  <path d="M0 56.25 C20 56.25 20 50 40 50" />
                  <path d="M0 68.75 C20 68.75 20 50 40 50" />
                  <path d="M0 81.25 C20 81.25 20 50 40 50" />
                  <path d="M0 93.75 C20 93.75 20 50 40 50" />
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
                    Asistentes
                  </li>
                  <li>
                    Copilotos
                  </li>
                  <li>
                    Agentes
                  </li>
                </ul>
              </div>
              <div className="ia-qas" aria-live="polite">
                <div className="ia-qa ia-qa--ask on">
                  <span className="ia-mode">
                    Asistente
                  </span>
                  <p className="bz-q">
                    ¿Qué clientes clave van a recibir tarde su pedido hoy, y por qué?
                  </p>
                  <div className="bz-a">
                    14 pedidos de 3 clientes clave. La planta 2 opera con un turno incompleto y el camión 7 lleva 40 min de retraso.
                    <small>
                      Evidencia: turnos, producción, GPS de flota, ERP y CRM
                    </small>
                  </div>
                </div>
                <div className="ia-qa ia-qa--agent">
                  <span className="ia-mode ia-mode--ag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
                    </svg>
                    Agente
                  </span>
                  <p className="ia-ev">
                    <b>
                      Detectó
                    </b>
                    Stock de la categoría top bajo el mínimo en 6 tiendas
                  </p>
                  <div className="bz-a ia-act">
                    Generó la transferencia de 420 unidades desde el CD Norte y avisó a los jefes de tienda.
                    <small>
                      Ejecutado por flujo aprobado · Evidencia: inventario, ventas y logística
                    </small>
                  </div>
                </div>
                <div className="ia-qa ia-qa--ask">
                  <span className="ia-mode">
                    Asistente
                  </span>
                  <p className="bz-q">
                    ¿Por qué cayó el margen esta semana?
                  </p>
                  <div className="bz-a">
                    −2,1 puntos: el flete subió 18 % en la ruta norte y se liquidó sobrestock en 4 tiendas.
                    <small>
                      Evidencia: ERP, logística, inventario y ventas
                    </small>
                  </div>
                </div>
                <div className="ia-qa ia-qa--agent">
                  <span className="ia-mode ia-mode--ag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
                    </svg>
                    Agente
                  </span>
                  <p className="ia-ev">
                    <b>
                      Detectó
                    </b>
                    Pala 4: vibración fuera de rango, falla probable en 36 h
                  </p>
                  <div className="bz-a ia-act">
                    Abrió la orden de mantenimiento y propuso reprogramar el turno de la flota.
                    <small>
                      Pendiente de aprobación del jefe de mantenimiento · Evidencia: sensores, historial y turnos
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bz-sec" id="problema">
          <div className="bz-in">
            <span className="bz-eyebrow">
              El problema
            </span>
            <h2 className="bz-h2">
              La IA sin observabilidad es como un cerebro sin cuerpo.
            </h2>
            <p className="bz-lead">
              Un modelo sabe mucho del mundo, pero casi nada de lo que pasa en tu empresa en este momento. Sin señales en vivo, la IA responde con lo que tiene a mano.
            </p>
            <div className="ia-vs">
              <article>
                <div className="vs-art" aria-hidden="true">
                  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                    <path d="M76 30C200.0 30 200.0 45 324 45" stroke="rgba(5,5,16,.2)" strokeDasharray="3 4" fill="none" />
                    <path d="M46 100C185.0 100 185.0 45 324 45" stroke="rgba(5,5,16,.2)" strokeDasharray="3 4" fill="none" />
                    <path d="M136 62C230.0 62 230.0 45 324 45" stroke="rgba(5,5,16,.2)" strokeDasharray="3 4" fill="none" />
                    <path d="M76 170C200.0 170 200.0 100 324 100" stroke="rgba(5,5,16,.2)" strokeDasharray="3 4" fill="none" />
                    <path d="M136 140C230.0 140 230.0 100 324 100" stroke="rgba(5,5,16,.2)" strokeDasharray="3 4" fill="none" />
                    <path d="M76 30C200.0 30 200.0 100 324 100" stroke="rgba(5,5,16,.2)" strokeDasharray="3 4" fill="none" />
                    <path d="M46 100C185.0 100 185.0 155 324 155" stroke="rgba(5,5,16,.2)" strokeDasharray="3 4" fill="none" />
                    <path d="M136 140C230.0 140 230.0 155 324 155" stroke="rgba(5,5,16,.2)" strokeDasharray="3 4" fill="none" />
                    <path d="M76 170C200.0 170 200.0 155 324 155" stroke="rgba(5,5,16,.2)" strokeDasharray="3 4" fill="none" />
                    <path d="M136 62C230.0 62 230.0 155 324 155" stroke="rgba(5,5,16,.2)" strokeDasharray="3 4" fill="none" />
                    <g transform="translate(232 74)">
                      <circle r="9" fill="#fff" stroke="rgba(220,38,38,.35)" />
                      <path d="M-3 -3l6 6M3 -3l-6 6" stroke="#dc2626" strokeWidth="1.6" strokeLinecap="round" />
                    </g>
                    <g transform="translate(236 128)">
                      <circle r="9" fill="#fff" stroke="rgba(220,38,38,.35)" />
                      <path d="M-3 -3l6 6M3 -3l-6 6" stroke="#dc2626" strokeWidth="1.6" strokeLinecap="round" />
                    </g>
                    <g transform="translate(205 103)">
                      <circle r="9" fill="#fff" stroke="rgba(220,38,38,.35)" />
                      <path d="M-3 -3l6 6M3 -3l-6 6" stroke="#dc2626" strokeWidth="1.6" strokeLinecap="round" />
                    </g>
                    <g className="gx-n">
                      <rect x="45.0" y="15.0" width="30" height="30" rx="8.4" fill="#ffffff" stroke="rgba(5,5,16,.12)" />
                      <g transform="translate(52.95 22.95) scale(0.5875)" fill="none" stroke="#8a8aa3" strokeWidth="2.30" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M3 10h18M9 10v10" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="15.0" y="85.0" width="30" height="30" rx="8.4" fill="#ffffff" stroke="rgba(5,5,16,.12)" />
                      <g transform="translate(22.95 92.95) scale(0.5875)" fill="none" stroke="#8a8aa3" strokeWidth="2.30" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="8" ry="3" />
                        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="45.0" y="155.0" width="30" height="30" rx="8.4" fill="#ffffff" stroke="rgba(5,5,16,.12)" />
                      <g transform="translate(52.95 162.95) scale(0.5875)" fill="none" stroke="#8a8aa3" strokeWidth="2.30" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21a8 8 0 0 1 16 0" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="105.0" y="47.0" width="30" height="30" rx="8.4" fill="#ffffff" stroke="rgba(5,5,16,.12)" />
                      <g transform="translate(112.95 54.95) scale(0.5875)" fill="none" stroke="#8a8aa3" strokeWidth="2.30" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
                        <path d="M14 3v6h6" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="105.0" y="125.0" width="30" height="30" rx="8.4" fill="#ffffff" stroke="rgba(5,5,16,.12)" />
                      <g transform="translate(112.95 132.95) scale(0.5875)" fill="none" stroke="#8a8aa3" strokeWidth="2.30" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="m7 15 4-4 3 3 6-6" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="324.0" y="29.0" width="32" height="32" rx="9.0" fill="#ffffff" stroke="rgba(5,5,16,.12)" />
                      <g transform="translate(332.48 37.480000000000004) scale(0.6266666666666666)" fill="none" stroke="#8a8aa3" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="8" width="16" height="12" rx="3" />
                        <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="324.0" y="84.0" width="32" height="32" rx="9.0" fill="#ffffff" stroke="rgba(5,5,16,.12)" />
                      <g transform="translate(332.48 92.48) scale(0.6266666666666666)" fill="none" stroke="#8a8aa3" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="8" width="16" height="12" rx="3" />
                        <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="324.0" y="139.0" width="32" height="32" rx="9.0" fill="#ffffff" stroke="rgba(5,5,16,.12)" />
                      <g transform="translate(332.48 147.48) scale(0.6266666666666666)" fill="none" stroke="#8a8aa3" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="8" width="16" height="12" rx="3" />
                        <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" />
                      </g>
                    </g>
                  </svg>
                </div>
                <small>
                  Sin BzzzBX
                </small>
                <h3>
                  Cada agente arma su propio contexto
                </h3>
                <ul>
                  <li>
                    Datos sueltos, en silos y desactualizados
                  </li>
                  <li>
                    Cada consulta repite la búsqueda y la reconciliación
                  </li>
                  <li>
                    Respuestas genéricas y riesgo de inventar
                  </li>
                  <li>
                    Permisos y decisiones dispersos entre herramientas
                  </li>
                </ul>
              </article>
              <article className="on">
                <div className="vs-art" aria-hidden="true">
                  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <radialGradient id="gx311" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor="#4e49f2" stopOpacity=".42" />
                        <stop offset=".45" stopColor="#6c68f5" stopOpacity=".18" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                      </radialGradient>
                      {"\n"}
                      <linearGradient id="hx311" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#2a2a8a" />
                        <stop offset="1" stopColor="#0d0f33" />
                      </linearGradient>
                      {"\n"}
                      <linearGradient id="bx311" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#b9b6ff" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                      </linearGradient>
                      {"\n"}
                      <pattern id="px311" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r=".8" fill="#fff" fillOpacity=".09" />
                      </pattern>
                      {"\n"}
                      <radialGradient id="mx311" cx="50%" cy="50%" r="55%">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                      </radialGradient>
                      <mask id="kx311">
                        <rect width="400" height="220" fill="url(#mx311)" />
                      </mask>
                      {"\n"}
                      <filter id="fx311" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="10" />
                      </filter>
                    </defs>
                    {"\n"}
                    <rect width="400" height="220" fill="url(#px311)" mask="url(#kx311)" />
                    <path d="M75 30C137.5 30 137.5 100 185 100" stroke="rgba(150,146,255,.4)" fill="none" />
                    <path d="M45 100C122.5 100 122.5 100 185 100" stroke="rgba(150,146,255,.4)" fill="none" />
                    <path d="M75 170C137.5 170 137.5 100 185 100" stroke="rgba(150,146,255,.4)" fill="none" />
                    <path d="M135 62C167.5 62 167.5 100 185 100" stroke="rgba(150,146,255,.4)" fill="none" />
                    <path d="M135 140C167.5 140 167.5 100 185 100" stroke="rgba(150,146,255,.4)" fill="none" />
                    <path d="M245 100C277.5 100 277.5 45 324 45" stroke="rgba(150,146,255,.55)" fill="none" />
                    <path d="M245 100C277.5 100 277.5 100 324 100" stroke="rgba(150,146,255,.55)" fill="none" />
                    <path d="M245 100C277.5 100 277.5 155 324 155" stroke="rgba(150,146,255,.55)" fill="none" />
                    <circle className="gx-d" cx="170" cy="100" r="2.4" fill="#b9b6ff" />
                    <circle cx="170" cy="100" r="6" fill="#b9b6ff" opacity=".18" />
                    <circle className="gx-d" cx="285" cy="72" r="2.4" fill="#b9b6ff" />
                    <circle cx="285" cy="72" r="6" fill="#b9b6ff" opacity=".18" />
                    <circle className="gx-d" cx="285" cy="128" r="2.4" fill="#b9b6ff" />
                    <circle cx="285" cy="128" r="6" fill="#b9b6ff" opacity=".18" />
                    <g className="gx-n">
                      <rect x="45.0" y="15.0" width="30" height="30" rx="8.4" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                      <g transform="translate(52.95 22.95) scale(0.5875)" fill="none" stroke="#9692ff" strokeWidth="2.30" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M3 10h18M9 10v10" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="15.0" y="85.0" width="30" height="30" rx="8.4" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                      <g transform="translate(22.95 92.95) scale(0.5875)" fill="none" stroke="#9692ff" strokeWidth="2.30" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="8" ry="3" />
                        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="45.0" y="155.0" width="30" height="30" rx="8.4" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                      <g transform="translate(52.95 162.95) scale(0.5875)" fill="none" stroke="#9692ff" strokeWidth="2.30" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21a8 8 0 0 1 16 0" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="105.0" y="47.0" width="30" height="30" rx="8.4" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                      <g transform="translate(112.95 54.95) scale(0.5875)" fill="none" stroke="#9692ff" strokeWidth="2.30" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
                        <path d="M14 3v6h6" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="105.0" y="125.0" width="30" height="30" rx="8.4" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                      <g transform="translate(112.95 132.95) scale(0.5875)" fill="none" stroke="#9692ff" strokeWidth="2.30" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="m7 15 4-4 3 3 6-6" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="324.0" y="29.0" width="32" height="32" rx="9.0" fill="#0c0f2b" stroke="rgba(150,146,255,.55)" />
                      <g transform="translate(332.48 37.480000000000004) scale(0.6266666666666666)" fill="none" stroke="#b9b6ff" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="8" width="16" height="12" rx="3" />
                        <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="324.0" y="84.0" width="32" height="32" rx="9.0" fill="#0c0f2b" stroke="rgba(150,146,255,.55)" />
                      <g transform="translate(332.48 92.48) scale(0.6266666666666666)" fill="none" stroke="#b9b6ff" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="8" width="16" height="12" rx="3" />
                        <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="324.0" y="139.0" width="32" height="32" rx="9.0" fill="#0c0f2b" stroke="rgba(150,146,255,.55)" />
                      <g transform="translate(332.48 147.48) scale(0.6266666666666666)" fill="none" stroke="#b9b6ff" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="8" width="16" height="12" rx="3" />
                        <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" />
                      </g>
                    </g>
                    <g className="gx-hub">
                      <ellipse className="gx-glow" cx="215" cy="100" rx="92.80000000000001" ry="69.6" fill="url(#gx311)" />
                      {"\n"}
                      <rect x="186.0" y="71.0" width="58" height="58" rx="15.1" fill="#4e49f2" opacity=".55" filter="url(#fx311)" />
                      {"\n"}
                      <rect x="186.0" y="71.0" width="58" height="58" rx="15.1" fill="url(#hx311)" stroke="url(#bx311)" strokeWidth="1.2" />
                      {"\n"}
                      <rect x="192.0" y="77.0" width="46" height="46" rx="11.6" fill="none" stroke="rgba(255,255,255,.08)" />
                      {"\n"}
                      <image href="/assets/brand/isotipo.svg" x="202.0" y="87.4" width="26" height="25.7" />
                    </g>
                  </svg>
                </div>
                <small>
                  Con BzzzBX
                </small>
                <h3>
                  Todos parten de la misma inteligencia central
                </h3>
                <ul>
                  <li>
                    Señales de toda la empresa, en tiempo real
                  </li>
                  <li>
                    Contexto de negocio ya preparado y correlacionado
                  </li>
                  <li>
                    Respuestas con evidencia y trazabilidad
                  </li>
                  <li>
                    Permisos, aprobaciones y control en un solo lugar
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec" id="como" style={{ paddingTop: "0" }}>
          <div className="bz-in">
            <span className="bz-eyebrow">
              Cómo funciona
            </span>
            <h2 className="bz-h2">
              De la señal a la respuesta, con control en cada paso.
            </h2>
            <div className="ia-how">
              <ol className="ia-steps">
                <li>
                  <i>
                    01
                  </i>
                  <div>
                    <b>
                      BzzzBX prepara la verdad
                    </b>
                    <span>
                      Recibe cada señal una sola vez, le da contexto de negocio y la correlaciona con el resto en tiempo real.
                    </span>
                  </div>
                </li>
                <li>
                  <i>
                    02
                  </i>
                  <div>
                    <b>
                      La IA se conecta por MCP
                    </b>
                    <span>
                      Asistentes, copilotos y agentes acceden a los datos a través de un estándar abierto, con el modelo que elijas.
                    </span>
                  </div>
                </li>
                <li>
                  <i>
                    03
                  </i>
                  <div>
                    <b>
                      Frost Bridge delimita el acceso
                    </b>
                    <span>
                      Cada asistente o agente ve solo lo que su alcance permite, y cada consulta queda registrada.
                    </span>
                  </div>
                </li>
              </ol>
              <figure className="fb">
                <p className="fb-t">
                  Frost Bridge · acceso con alcance definido
                </p>
                <div className="fb-g">
                  <ul className="fb-who">
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
                  <span className="fb-ar" aria-hidden="true" />
                  <div className="fb-gate">
                    <b>
                      Frost Bridge
                    </b>
                    <ul>
                      <li>
                        Alcance por agente
                      </li>
                      <li>
                        Políticas de acción
                      </li>
                      <li>
                        Registro de cada consulta
                      </li>
                    </ul>
                  </div>
                  <span className="fb-ar" aria-hidden="true" />
                  <div className="fb-data">
                    <p>
                      Bzzz
                      <span>
                        BX
                      </span>
                    </p>
                    <ul>
                      <li className="ok">
                        <i>
                          ✓
                        </i>
                        <span>
                          Ventas y pedidos
                        </span>
                        <b>
                          Permitido
                        </b>
                      </li>
                      <li className="ok">
                        <i>
                          ✓
                        </i>
                        <span>
                          Inventario
                        </span>
                        <b>
                          Permitido
                        </b>
                      </li>
                      <li className="no">
                        <i>
                          ✕
                        </i>
                        <span>
                          Datos personales
                        </span>
                        <b>
                          Bloqueado
                        </b>
                      </li>
                      <li className="no">
                        <i>
                          ✕
                        </i>
                        <span>
                          Finanzas
                        </span>
                        <b>
                          Fuera de alcance
                        </b>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="fb-flow">
                  <span>
                    Acción propuesta
                  </span>
                  <span className="fa">
                    →
                  </span>
                  <span>
                    Aprobación humana
                  </span>
                  <span className="fa">
                    →
                  </span>
                  <span>
                    Flujo determinista
                  </span>
                </div>
              </figure>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec" id="gobierno" style={{ paddingTop: "0" }}>
          <div className="bz-in">
            <div className="bz-row">
              <div className="bz-row-t">
                <p className="bz-row-n">
                  Gobierno
                </p>
                <h3>
                  Los agentes proponen. Los flujos deterministas ejecutan.
                </h3>
                <p>
                  La IA nunca toca el mundo exterior por su cuenta. Solo un motor de flujos auditable, con límites, tiene las credenciales para actuar.
                </p>
                <ul>
                  <li>
                    Si duda, no actúa.
                  </li>
                  <li>
                    Sin evidencia adjunta, no hay acción.
                  </li>
                  <li>
                    Cada acción queda registrada con su evidencia y aprobación.
                  </li>
                </ul>
              </div>
              <div className="bz-vis">
                <div className="bz-vis-h">
                  <b>
                    Acción propuesta
                  </b>
                  <span>
                    Notificar a clientes afectados
                  </span>
                </div>
                <ul className="bz-ctl">
                  <li className="y">
                    <i>
                      ✓
                    </i>
                    <span>
                      Umbral de confianza
                    </span>
                    <em>
                      Cumple
                    </em>
                  </li>
                  <li className="y">
                    <i>
                      ✓
                    </i>
                    <span>
                      Evidencia adjunta
                    </span>
                    <em>
                      Cumple
                    </em>
                  </li>
                  <li className="w">
                    <i>
                      …
                    </i>
                    <span>
                      Aprobación humana
                    </span>
                    <em>
                      Pendiente
                    </em>
                  </li>
                  <li className="y">
                    <i>
                      ✓
                    </i>
                    <span>
                      Alcance limitado
                    </span>
                    <em>
                      Cumple
                    </em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec" id="eficiencia" style={{ paddingTop: "0" }}>
          <div className="bz-in">
            <span className="bz-eyebrow">
              Más eficiente por diseño
            </span>
            <h2 className="bz-h2">
              Cuando el contexto llega preparado, la IA necesita menos.
            </h2>
            <div className="ia-grid ia-grid--3 gx">
              <article>
                <div className="gx-art" aria-hidden="true">
                  <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <radialGradient id="gx9" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor="#4e49f2" stopOpacity=".20" />
                        <stop offset=".45" stopColor="#6c68f5" stopOpacity=".07" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                      </radialGradient>
                      {"\n"}
                      <linearGradient id="hx9" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#ebe9ff" />
                      </linearGradient>
                      {"\n"}
                      <linearGradient id="bx9" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#9692ff" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                      </linearGradient>
                      {"\n"}
                      <pattern id="px9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r=".8" fill="#050510" fillOpacity=".11" />
                      </pattern>
                      {"\n"}
                      <radialGradient id="mx9" cx="50%" cy="50%" r="55%">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                      </radialGradient>
                      <mask id="kx9">
                        <rect width="400" height="220" fill="url(#mx9)" />
                      </mask>
                      {"\n"}
                      <filter id="fx9" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="10" />
                      </filter>
                    </defs>
                    {"\n"}
                    <rect width="400" height="220" fill="url(#px9)" mask="url(#kx9)" />
                    <path d="M95 110H164" stroke="rgba(78,73,242,.30)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
                    <path d="M236 110H305" stroke="rgba(78,73,242,.30)" strokeWidth="1" fill="none" />
                    <path d="M95 104H140M95 116H128" stroke="rgba(5,5,16,.10)" fill="none" />
                    <circle className="gx-d" cx="262" cy="110" r="2.4" fill="#4e49f2" />
                    <circle cx="262" cy="110" r="6" fill="#4e49f2" opacity=".18" />
                    <g className="gx-n">
                      <rect x="61.0" y="93.0" width="34" height="34" rx="9.5" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(70.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="8" ry="3" />
                        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="305.0" y="93.0" width="34" height="34" rx="9.5" fill="#ffffff" stroke="rgba(78,73,242,.55)" />
                      <g transform="translate(314.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </g>
                    </g>
                    <g className="gx-hub">
                      <ellipse className="gx-glow" cx="200" cy="110" rx="105.60000000000001" ry="79.2" fill="url(#gx9)" />
                      {"\n"}
                      <rect x="167.0" y="83.0" width="66" height="66" rx="17.2" fill="#4e49f2" opacity=".28" filter="url(#fx9)" />
                      {"\n"}
                      <rect x="167.0" y="77.0" width="66" height="66" rx="17.2" fill="url(#hx9)" stroke="url(#bx9)" strokeWidth="1.2" />
                      {"\n"}
                      <rect x="173.0" y="83.0" width="54" height="54" rx="13.2" fill="none" stroke="rgba(78,73,242,.14)" />
                      {"\n"}
                      <g transform="translate(186.14 96.14) scale(1.155)" fill="none" stroke="#4e49f2" strokeWidth="1.30" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.2 12.2a6 6 0 0 0-8.5-8.5L5 10.5V19h8.5Z" />
                        <path d="M16 8 2 22M17.5 15H9" />
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="bz-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 4c-6 0-12 4-14 12l-2 4" />
                    <path d="M8 14h6" />
                    <path d="M20 4c0 6-3 11-9 12" />
                  </svg>
                </span>
                <h3>
                  Modelos más livianos
                </h3>
                <p>
                  La evidencia llega correlacionada: un modelo más pequeño, incluso local, basta para interpretar y responder.
                </p>
              </article>
              <article>
                <div className="gx-art" aria-hidden="true">
                  <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <radialGradient id="gx10" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor="#4e49f2" stopOpacity=".20" />
                        <stop offset=".45" stopColor="#6c68f5" stopOpacity=".07" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                      </radialGradient>
                      {"\n"}
                      <linearGradient id="hx10" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#ebe9ff" />
                      </linearGradient>
                      {"\n"}
                      <linearGradient id="bx10" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#9692ff" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                      </linearGradient>
                      {"\n"}
                      <pattern id="px10" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r=".8" fill="#050510" fillOpacity=".11" />
                      </pattern>
                      {"\n"}
                      <radialGradient id="mx10" cx="50%" cy="50%" r="55%">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                      </radialGradient>
                      <mask id="kx10">
                        <rect width="400" height="220" fill="url(#mx10)" />
                      </mask>
                      {"\n"}
                      <filter id="fx10" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="10" />
                      </filter>
                    </defs>
                    {"\n"}
                    <rect width="400" height="220" fill="url(#px10)" mask="url(#kx10)" />
                    <rect x="70" y="70" width="26" height="120" rx="6" fill="#ffffff" stroke="rgba(78,73,242,0.18)" />
                    <rect x="116" y="94" width="26" height="96" rx="6" fill="#ffffff" stroke="rgba(78,73,242,0.26)" />
                    <rect x="162" y="116" width="26" height="74" rx="6" fill="#ffffff" stroke="rgba(78,73,242,0.34)" />
                    <rect x="208" y="134" width="26" height="56" rx="6" fill="#ffffff" stroke="rgba(78,73,242,0.42)" />
                    <rect x="254" y="150" width="26" height="40" rx="6" fill="#ffffff" stroke="rgba(78,73,242,0.50)" />
                    <rect x="300" y="160" width="26" height="30" rx="6" fill="url(#hx10)" stroke="rgba(78,73,242,0.58)" />
                    <path d="M83 66C160 92 230 128 313 152" stroke="#4e49f2" strokeOpacity=".6" fill="none" strokeDasharray="3 4" />
                    <circle className="gx-d" cx="313" cy="152" r="2.4" fill="#4e49f2" />
                    <circle cx="313" cy="152" r="6" fill="#4e49f2" opacity=".18" />
                    <g className="gx-hub">
                      <ellipse className="gx-glow" cx="320" cy="70" rx="83.2" ry="62.4" fill="url(#gx10)" />
                      {"\n"}
                      <rect x="294.0" y="50.0" width="52" height="52" rx="13.5" fill="#4e49f2" opacity=".28" filter="url(#fx10)" />
                      {"\n"}
                      <rect x="294.0" y="44.0" width="52" height="52" rx="13.5" fill="url(#hx10)" stroke="url(#bx10)" strokeWidth="1.2" />
                      {"\n"}
                      <rect x="300.0" y="50.0" width="40" height="40" rx="10.4" fill="none" stroke="rgba(78,73,242,.14)" />
                      {"\n"}
                      <g transform="translate(309.08 59.08) scale(0.91)" fill="none" stroke="#4e49f2" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .9-3 2s1.3 1.7 3 2 3 .9 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2" />
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="bz-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1.2 0-2.2-.6-2.6-1.6M12 6.5v11" />
                  </svg>
                </span>
                <h3>
                  Menos costo por consulta
                </h3>
                <p>
                  Menos tokens, menos llamadas entre herramientas y respuestas más rápidas.
                </p>
              </article>
              <article>
                <div className="gx-art" aria-hidden="true">
                  <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <radialGradient id="gx11" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor="#4e49f2" stopOpacity=".20" />
                        <stop offset=".45" stopColor="#6c68f5" stopOpacity=".07" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                      </radialGradient>
                      {"\n"}
                      <linearGradient id="hx11" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#ebe9ff" />
                      </linearGradient>
                      {"\n"}
                      <linearGradient id="bx11" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#9692ff" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                      </linearGradient>
                      {"\n"}
                      <pattern id="px11" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r=".8" fill="#050510" fillOpacity=".11" />
                      </pattern>
                      {"\n"}
                      <radialGradient id="mx11" cx="50%" cy="50%" r="55%">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                      </radialGradient>
                      <mask id="kx11">
                        <rect width="400" height="220" fill="url(#mx11)" />
                      </mask>
                      {"\n"}
                      <filter id="fx11" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="10" />
                      </filter>
                    </defs>
                    {"\n"}
                    <rect width="400" height="220" fill="url(#px11)" mask="url(#kx11)" />
                    <circle cx="200" cy="110" r="62" stroke="rgba(78,73,242,.30)" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="110" r="96" stroke="rgba(78,73,242,.16)" fill="none" strokeDasharray="2 5" />
                    <g className="gx-n">
                      <rect x="128.0" y="74.0" width="28" height="28" rx="7.8" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(135.42 81.42) scale(0.5483333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="7" rx="2" />
                        <rect x="3" y="14" width="18" height="7" rx="2" />
                        <path d="M7 6.5h.01M7 17.5h.01" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="278.0" y="70.0" width="28" height="28" rx="7.8" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(285.42 77.42) scale(0.5483333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="8" ry="3" />
                        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="236.0" y="140.0" width="28" height="28" rx="7.8" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(243.42 147.42) scale(0.5483333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 4 12a4 4 0 0 0 1 7.9Z" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="98.0" y="136.0" width="28" height="28" rx="7.8" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(105.42 143.42) scale(0.5483333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <path d="M3 9h18" />
                      </g>
                    </g>
                    <circle className="gx-d" cx="200" cy="48" r="2.4" fill="#4e49f2" />
                    <circle cx="200" cy="48" r="6" fill="#4e49f2" opacity=".18" />
                    <circle className="gx-d" cx="296" cy="120" r="2.4" fill="#4e49f2" />
                    <circle cx="296" cy="120" r="6" fill="#4e49f2" opacity=".18" />
                    <g className="gx-hub">
                      <ellipse className="gx-glow" cx="200" cy="110" rx="92.80000000000001" ry="69.6" fill="url(#gx11)" />
                      {"\n"}
                      <rect x="171.0" y="87.0" width="58" height="58" rx="15.1" fill="#4e49f2" opacity=".28" filter="url(#fx11)" />
                      {"\n"}
                      <rect x="171.0" y="81.0" width="58" height="58" rx="15.1" fill="url(#hx11)" stroke="url(#bx11)" strokeWidth="1.2" />
                      {"\n"}
                      <rect x="177.0" y="87.0" width="46" height="46" rx="11.6" fill="none" stroke="rgba(78,73,242,.14)" />
                      {"\n"}
                      <g transform="translate(187.82 97.82) scale(1.015)" fill="none" stroke="#4e49f2" strokeWidth="1.48" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                        <path d="m9 12 2 2 4-4" />
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="bz-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                </span>
                <h3>
                  Soberanía del dato
                </h3>
                <p>
                  El modelo puede correr en tu propia infraestructura. Tu información no tiene que salir.
                </p>
              </article>
            </div>
            <p className="ia-quote">
              {"La IA no es dueña de la verdad. "}
              <em>
                Opera sobre la verdad.
              </em>
            </p>
            <Link className="ia-read" href="/es/blog/ia-observabilidad">
              <small>
                Lee el artículo
              </small>
              <b>
                Por qué la observabilidad es la base de la IA en las empresas
              </b>
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>
        {"\n"}
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              ¿Quieres llevar la IA a tu operación real?
            </h2>
            <p className="sec-sub sec-dark-sub">
              Conversemos sobre cómo conectarla a tus datos con BzzzBX.
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
