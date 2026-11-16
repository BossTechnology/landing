import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/compania",
  title: "Compañía · Boss.Technology",
  description: "Somos el equipo detrás de Boss.Technology. Creamos productos de Business Observability que ayudan a los líderes a ver, entender y actuar en tiempo real.",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1">
        <section className="ch" data-nav="dark" aria-labelledby="ch-t">
          <div className="ch-in">
            <div className="ch-txt">
              <p className="ch-eb">
                <i />
                Compañía
              </p>
              <h1 id="ch-t" className="ch-h">
                {"Somos "}
                <em>
                  Boss.Technology.
                </em>
              </h1>
              <p className="ch-p">
                Una década llevando observabilidad a algunas de las empresas más grandes del mundo. Hoy creamos tecnología de Business Observability para que los líderes vean, entiendan y actúen sobre su empresa en tiempo real.
              </p>
            </div>
            <div className="ch-st">
              <div>
                <b>
                  2025
                </b>
                <span>
                  Año de fundación
                </span>
              </div>
              <div>
                <b>
                  10+
                </b>
                <span>
                  Años en observabilidad empresarial
                </span>
              </div>
              <div>
                <b>
                  3
                </b>
                <span>
                  Países: EE. UU., Colombia y Perú
                </span>
              </div>
              <div>
                <b>
                  Fortune 500
                </b>
                <span>
                  Experiencia del equipo directivo
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="liderazgo" className="scroll-mt-24 px-5 lg:px-6 sec-y">
          <div className="mx-auto max-w-[1152px]">
            <header className="sec-head ">
              <h2 className="sec-title">
                {"Equipo de "}
                <span className="text-accent-base">
                  Liderazgo
                </span>
              </h2>
              <p className="sec-sub">
                Equipo con amplia experiencia, pionero en Business Observability a nivel global, cuyos miembros han liderado e implementado proyectos de observabilidad empresarial en múltiples compañías Fortune 500.
              </p>
            </header>
            <div className="team mt-10 lg:mt-12">
              <article className="team-card" tabIndex={0}>
                <div className="team-media">
                  <img src="/assets/team/gonzalo-card.jpg" alt="Gonzalo Velasco" width="600" height="800" loading="lazy" />
                </div>
                <div className="team-cap">
                  <div className="team-top">
                    <h3 className="team-name">
                      Gonzalo Velasco
                    </h3>
                    <a className="team-li" href="https://www.linkedin.com/in/gonzvelasco/" target="_blank" rel="noopener" aria-label="LinkedIn · Gonzalo Velasco">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                  </div>
                  <p className="team-title">
                    CEO
                  </p>
                  <p className="team-role">
                    Emprendedor serial.
                  </p>
                </div>
              </article>
              <article className="team-card" tabIndex={0}>
                <div className="team-media">
                  <img src="/assets/team/sergio-card.jpg" alt="Sergio Nacach" width="600" height="800" loading="lazy" />
                </div>
                <div className="team-cap">
                  <div className="team-top">
                    <h3 className="team-name">
                      Sergio Nacach
                    </h3>
                    <a className="team-li" href="https://www.linkedin.com/in/sergionacach/" target="_blank" rel="noopener" aria-label="LinkedIn · Sergio Nacach">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                  </div>
                  <p className="team-title">
                    Director de Estrategia
                  </p>
                  <p className="team-role">
                    Ex-Presidente Latam de Kimberly-Clark, liderando una operación multi-billonaria.
                  </p>
                </div>
              </article>
              <article className="team-card" tabIndex={0}>
                <div className="team-media">
                  <img src="/assets/team/kevin-card.jpg" alt="Kevin Espinoza" width="600" height="800" loading="lazy" />
                </div>
                <div className="team-cap">
                  <div className="team-top">
                    <h3 className="team-name">
                      Kevin Espinoza
                    </h3>
                    <a className="team-li" href="https://www.linkedin.com/in/kevin-espinoza-oliveros-44981855/" target="_blank" rel="noopener" aria-label="LinkedIn · Kevin Espinoza">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                  </div>
                  <p className="team-title">
                    Director de Industrias
                  </p>
                  <p className="team-role">
                    Ex-Operation Manager de Ferreyros y Ex-General Manager de Budge África.
                  </p>
                </div>
              </article>
              <article className="team-card" tabIndex={0}>
                <div className="team-media">
                  <img src="/assets/team/federico-card.jpg" alt="Federico Lara" width="600" height="800" loading="lazy" />
                </div>
                <div className="team-cap">
                  <div className="team-top">
                    <h3 className="team-name">
                      Federico Lara
                    </h3>
                    <a className="team-li" href="https://www.linkedin.com/in/fedelara/" target="_blank" rel="noopener" aria-label="LinkedIn · Federico Lara">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                  </div>
                  <p className="team-title">
                    Director de Producto y Tecnología
                  </p>
                  <p className="team-role">
                    Ex-Field CTO de New Relic, Ex-CTO de Fedex Crossborder, co-fundador de Bongo Intl (adquirido por Fedex).
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="trayectoria" className="scroll-mt-24 px-5 lg:px-6 sec-y">
          <div className="mx-auto max-w-[1152px]">
            <header className="sec-head ">
              <h2 className="sec-title">
                Trayectoria
              </h2>
              <p className="sec-sub">
                Una década construyendo observabilidad con las empresas más grandes del mundo.
              </p>
            </header>
            <ol className="tr">
              <li className="tr-sep">
                Antes de Boss
              </li>
              <li className="tr-i pre">
                <div className="tr-y">
                  2019
                </div>
                <div className="tr-b">
                  <span className="tr-dot" />
                  <span className="tr-av">
                    <img src="/assets/team/federico-card.jpg" alt="Federico Lara" title="Federico Lara" width="34" height="34" loading="lazy" />
                  </span>
                  <span className="tr-org">
                    New Relic
                  </span>
                  <span className="tr-note">
                    Líder Gartner en observabilidad
                  </span>
                  <h3>
                    Observabilidad a escala global
                  </h3>
                  <p>
                    {"Federico Lara (hoy director de Producto y Tecnología de Boss) lidera "}
                    <b>
                      la observabilidad de algunas de las empresas más grandes del mundo
                    </b>
                    : primero como CTO para Latinoamérica y las Américas, y luego como Field CTO de New Relic.
                  </p>
                </div>
              </li>
              <li className="tr-i pre">
                <div className="tr-y">
                  2022
                </div>
                <div className="tr-b">
                  <span className="tr-dot" />
                  <span className="tr-av">
                    <img src="/assets/team/federico-card.jpg" alt="Federico Lara" title="Federico Lara" width="34" height="34" loading="lazy" />
                  </span>
                  <span className="tr-org">
                    New Relic
                  </span>
                  <span className="tr-note">
                    Líder Gartner en observabilidad
                  </span>
                  <h3>
                    Nace Business Observability
                  </h3>
                  <p>
                    {"Como Business Observability Leader crea "}
                    <b>
                      Pathpoint
                    </b>
                    {", la primera aplicación de Business Observability de la industria, y "}
                    <b>
                      Metric Monetization
                    </b>
                    : juntas llevan la observabilidad de la tecnología al negocio. En 2023 publica la guía «Six Steps to Achieve Business Observability».
                  </p>
                </div>
              </li>
              <li className="tr-i pre">
                <div className="tr-y">
                  2024
                </div>
                <div className="tr-b">
                  <span className="tr-dot" />
                  <span className="tr-av">
                    <img src="/assets/team/federico-card.jpg" alt="Federico Lara" title="Federico Lara" width="34" height="34" loading="lazy" />
                  </span>
                  <span className="tr-org">
                    Dynatrace
                  </span>
                  <span className="tr-note">
                    Líder Gartner en observabilidad
                  </span>
                  <h3>
                    El concepto se consolida
                  </h3>
                  <p>
                    Desde el equipo de Business Observability de Dynatrace impulsa el paso de una observabilidad reactiva a un modelo proactivo, guiado por el negocio y con acciones automatizadas.
                  </p>
                </div>
              </li>
              <li className="tr-sep boss">
                Boss.Technology
              </li>
              <li className="tr-i boss">
                <div className="tr-y">
                  2025
                </div>
                <div className="tr-b">
                  <span className="tr-dot" />
                  <span className="tr-av tr-av--team">
                    <img src="/assets/team/gonzalo-card.jpg" alt="Gonzalo Velasco" title="Gonzalo Velasco" width="34" height="34" loading="lazy" />
                    <img src="/assets/team/federico-card.jpg" alt="Federico Lara" title="Federico Lara" width="34" height="34" loading="lazy" />
                    <img src="/assets/team/kevin-card.jpg" alt="Kevin Espinoza" title="Kevin Espinoza" width="34" height="34" loading="lazy" />
                    <img src="/assets/team/sergio-card.jpg" alt="Sergio Nacach" title="Sergio Nacach" width="34" height="34" loading="lazy" />
                  </span>
                  <span className="tr-org">
                    Mayo
                  </span>
                  <h3>
                    Nace Boss.Technology
                  </h3>
                  <p>
                    <b>
                      Gonzalo Velasco, Federico Lara, Kevin Espinoza y Sergio Nacach
                    </b>
                    {" fundan Boss.Technology con una ambición clara: crear, desde Latinoamérica para el mundo, tecnología propia de Business Observability para empresas de cualquier sector, y no solo para equipos de TI."}
                  </p>
                </div>
              </li>
              <li className="tr-i boss">
                <div className="tr-y">
                  Hoy
                </div>
                <div className="tr-b">
                  <span className="tr-dot" />
                  <h3>
                    BzzzBX, Engines y Applied AI
                  </h3>
                  <p>
                    Creamos y operamos los productos de Business Observability más avanzados del mundo para minería, retail, gobierno y finanzas.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section id="vision" className="scroll-mt-24 px-5 lg:px-6 sec-y">
          <div className="mx-auto max-w-[1152px]">
            <div className="vz">
              <div>
                <p className="vz-eb">
                  Visión
                </p>
                <h2 className="vz-h">
                  Una compañía de tecnología global nacida de talento latinoamericano.
                </h2>
                <p className="vz-p">
                  Llevamos Business Observability a empresas de cualquier sector, con equipo propio y operación en tres países.
                </p>
              </div>
              <div className="vz-geo">
                <p>
                  Operación en
                </p>
                <ul>
                  <li>
                    <span className="vz-code" role="img" aria-label="Estados Unidos" style={{ background: "none", overflow: "hidden", boxShadow: "inset 0 0 0 1px rgba(5,5,16,.08)" }}>
                      <svg viewBox="0 0 30 20" width="44" height="44" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ display: "block" }}>
                        <rect width="30" height="20" fill="#fff" />
                        <rect y="0.000" width="30" height="1.538" fill="#b22234" />
                        <rect y="3.077" width="30" height="1.538" fill="#b22234" />
                        <rect y="6.154" width="30" height="1.538" fill="#b22234" />
                        <rect y="9.231" width="30" height="1.538" fill="#b22234" />
                        <rect y="12.308" width="30" height="1.538" fill="#b22234" />
                        <rect y="15.385" width="30" height="1.538" fill="#b22234" />
                        <rect y="18.462" width="30" height="1.538" fill="#b22234" />
                        <rect width="13" height="10.77" fill="#3c3b6e" />
                        <path transform="translate(2.2 2.2) scale(.55)" d="M0-1.6l.47 1.44H2L.77.73l.47 1.45L0 1.29l-1.24.89.47-1.45L-2-.16h1.53z" fill="#fff" />
                        <path transform="translate(6.5 2.2) scale(.55)" d="M0-1.6l.47 1.44H2L.77.73l.47 1.45L0 1.29l-1.24.89.47-1.45L-2-.16h1.53z" fill="#fff" />
                        <path transform="translate(10.8 2.2) scale(.55)" d="M0-1.6l.47 1.44H2L.77.73l.47 1.45L0 1.29l-1.24.89.47-1.45L-2-.16h1.53z" fill="#fff" />
                        <path transform="translate(2.2 5.4) scale(.55)" d="M0-1.6l.47 1.44H2L.77.73l.47 1.45L0 1.29l-1.24.89.47-1.45L-2-.16h1.53z" fill="#fff" />
                        <path transform="translate(6.5 5.4) scale(.55)" d="M0-1.6l.47 1.44H2L.77.73l.47 1.45L0 1.29l-1.24.89.47-1.45L-2-.16h1.53z" fill="#fff" />
                        <path transform="translate(10.8 5.4) scale(.55)" d="M0-1.6l.47 1.44H2L.77.73l.47 1.45L0 1.29l-1.24.89.47-1.45L-2-.16h1.53z" fill="#fff" />
                        <path transform="translate(2.2 8.6) scale(.55)" d="M0-1.6l.47 1.44H2L.77.73l.47 1.45L0 1.29l-1.24.89.47-1.45L-2-.16h1.53z" fill="#fff" />
                        <path transform="translate(6.5 8.6) scale(.55)" d="M0-1.6l.47 1.44H2L.77.73l.47 1.45L0 1.29l-1.24.89.47-1.45L-2-.16h1.53z" fill="#fff" />
                        <path transform="translate(10.8 8.6) scale(.55)" d="M0-1.6l.47 1.44H2L.77.73l.47 1.45L0 1.29l-1.24.89.47-1.45L-2-.16h1.53z" fill="#fff" />
                      </svg>
                    </span>
                    <span>
                      <b>
                        Estados Unidos
                      </b>
                    </span>
                  </li>
                  <li>
                    <span className="vz-code" role="img" aria-label="Colombia" style={{ background: "none", overflow: "hidden", boxShadow: "inset 0 0 0 1px rgba(5,5,16,.08)" }}>
                      <svg viewBox="0 0 30 20" width="44" height="44" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ display: "block" }}>
                        <rect width="30" height="10" fill="#fcd116" />
                        <rect y="10" width="30" height="5" fill="#003893" />
                        <rect y="15" width="30" height="5" fill="#ce1126" />
                      </svg>
                    </span>
                    <span>
                      <b>
                        Colombia
                      </b>
                    </span>
                  </li>
                  <li>
                    <span className="vz-code" role="img" aria-label="Perú" style={{ background: "none", overflow: "hidden", boxShadow: "inset 0 0 0 1px rgba(5,5,16,.08)" }}>
                      <svg viewBox="0 0 30 20" width="44" height="44" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ display: "block" }}>
                        <rect width="30" height="20" fill="#fff" />
                        <rect width="10" height="20" fill="#d91023" />
                        <rect x="20" width="10" height="20" fill="#d91023" />
                      </svg>
                    </span>
                    <span>
                      <b>
                        Perú
                      </b>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="trabaja" className="scroll-mt-24 px-5 lg:px-6 sec-y">
          <div className="mx-auto max-w-[1152px] overflow-hidden rounded-[32px] bg-paper p-6 lg:p-10">
            <header className="sec-head ">
              <h2 className="sec-title">
                Trabaja con nosotros
              </h2>
              <p className="sec-sub">
                Construimos el futuro de Business Observability. Si te mueve el impacto real, hablemos.
              </p>
            </header>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-paper-2 p-6 ring-1 ring-ink/5">
                <div className="gx-art" aria-hidden="true" style={{ height: "170px", margin: "-12px -12px 14px", borderRadius: "14px", overflow: "hidden", background: "radial-gradient(90% 80% at 50% 45%,#ffffff 0%,rgba(255,255,255,0) 75%)" }}>
                  <svg style={{ display: "block", width: "100%", height: "100%" }} viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <radialGradient id="gx901" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor="#4e49f2" stopOpacity=".20" />
                        <stop offset=".45" stopColor="#6c68f5" stopOpacity=".07" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                      </radialGradient>
                      {"\n"}
                      <linearGradient id="hx901" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#ebe9ff" />
                      </linearGradient>
                      {"\n"}
                      <linearGradient id="bx901" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#9692ff" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                      </linearGradient>
                      {"\n"}
                      <pattern id="px901" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r=".8" fill="#050510" fillOpacity=".11" />
                      </pattern>
                      {"\n"}
                      <radialGradient id="mx901" cx="50%" cy="50%" r="55%">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                      </radialGradient>
                      <mask id="kx901">
                        <rect width="400" height="220" fill="url(#mx901)" />
                      </mask>
                      {"\n"}
                      <filter id="fx901" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="10" />
                      </filter>
                    </defs>
                    {"\n"}
                    <rect width="400" height="220" fill="url(#px901)" mask="url(#kx901)" />
                    <path d="M200 120L292 150L200 180L108 150Z" fill="#ffffff" stroke="rgba(78,73,242,0.24)" strokeWidth="1.1" opacity="0.74" />
                    <path d="M200 92L292 122L200 152L108 122Z" fill="#ffffff" stroke="rgba(78,73,242,0.42)" strokeWidth="1.1" opacity="0.84" />
                    <path d="M200 64L292 94L200 124L108 94Z" fill="url(#hx901)" stroke="rgba(78,73,242,0.70)" strokeWidth="1.1" opacity="1.00" />
                    <ellipse className="gx-glow" cx="200" cy="96" rx="130" ry="70" fill="url(#gx901)" />
                    <path d="M108 150V158L200 188L292 158V150" fill="none" stroke="rgba(78,73,242,.16)" />
                    <path d="M40 176H130M270 176H360" stroke="rgba(78,73,242,.30)" strokeWidth="1" fill="none" />
                    <circle className="gx-d" cx="70" cy="176" r="2.4" fill="#4e49f2" />
                    <circle cx="70" cy="176" r="6" fill="#4e49f2" opacity=".18" />
                    <circle className="gx-d" cx="338" cy="176" r="2.4" fill="#4e49f2" />
                    <circle cx="338" cy="176" r="6" fill="#4e49f2" opacity=".18" />
                    <g transform="translate(0 -14)">
                      <g className="gx-n">
                        <rect x="180.0" y="76.0" width="40" height="40" rx="11.2" fill="#ffffff" stroke="rgba(78,73,242,.55)" />
                        <g transform="translate(190.6 86.6) scale(0.7833333333333332)" fill="none" stroke="#4e49f2" strokeWidth="1.72" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <h3 className="font-display text-[18px] font-semibold text-ink">
                  Sé pionero
                </h3>
                <p className="mt-2 text-body-m text-ink/65">
                  Construye una categoría nueva desde el inicio, con impacto visible en decisiones de negocio reales.
                </p>
              </div>
              <div className="rounded-2xl bg-paper-2 p-6 ring-1 ring-ink/5">
                <div className="gx-art" aria-hidden="true" style={{ height: "170px", margin: "-12px -12px 14px", borderRadius: "14px", overflow: "hidden", background: "radial-gradient(90% 80% at 50% 45%,#ffffff 0%,rgba(255,255,255,0) 75%)" }}>
                  <svg style={{ display: "block", width: "100%", height: "100%" }} viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <radialGradient id="gx902" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor="#4e49f2" stopOpacity=".20" />
                        <stop offset=".45" stopColor="#6c68f5" stopOpacity=".07" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                      </radialGradient>
                      {"\n"}
                      <linearGradient id="hx902" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#ebe9ff" />
                      </linearGradient>
                      {"\n"}
                      <linearGradient id="bx902" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#9692ff" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                      </linearGradient>
                      {"\n"}
                      <pattern id="px902" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r=".8" fill="#050510" fillOpacity=".11" />
                      </pattern>
                      {"\n"}
                      <radialGradient id="mx902" cx="50%" cy="50%" r="55%">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                      </radialGradient>
                      <mask id="kx902">
                        <rect width="400" height="220" fill="url(#mx902)" />
                      </mask>
                      {"\n"}
                      <filter id="fx902" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="10" />
                      </filter>
                    </defs>
                    {"\n"}
                    <rect width="400" height="220" fill="url(#px902)" mask="url(#kx902)" />
                    <circle cx="200" cy="110" r="62" stroke="rgba(78,73,242,.30)" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="110" r="96" stroke="rgba(78,73,242,.16)" fill="none" strokeDasharray="2 5" />
                    <g className="gx-n">
                      <rect x="128.0" y="74.0" width="28" height="28" rx="7.8" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(135.42 81.42) scale(0.5483333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21a8 8 0 0 1 16 0" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="278.0" y="70.0" width="28" height="28" rx="7.8" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(285.42 77.42) scale(0.5483333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 4 12a4 4 0 0 0 1 7.9Z" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="236.0" y="140.0" width="28" height="28" rx="7.8" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(243.42 147.42) scale(0.5483333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21a8 8 0 0 1 16 0" />
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
                      <ellipse className="gx-glow" cx="200" cy="110" rx="92.80000000000001" ry="69.6" fill="url(#gx902)" />
                      {"\n"}
                      <rect x="171.0" y="87.0" width="58" height="58" rx="15.1" fill="#4e49f2" opacity=".28" filter="url(#fx902)" />
                      {"\n"}
                      <rect x="171.0" y="81.0" width="58" height="58" rx="15.1" fill="url(#hx902)" stroke="url(#bx902)" strokeWidth="1.2" />
                      {"\n"}
                      <rect x="177.0" y="87.0" width="46" height="46" rx="11.6" fill="none" stroke="rgba(78,73,242,.14)" />
                      {"\n"}
                      <g transform="translate(187.82 97.82) scale(1.015)" fill="none" stroke="#4e49f2" strokeWidth="1.48" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21a8 8 0 0 1 16 0" />
                      </g>
                    </g>
                  </svg>
                </div>
                <h3 className="font-display text-[18px] font-semibold text-ink">
                  Equipo híbrido
                </h3>
                <p className="mt-2 text-body-m text-ink/65">
                  Trabajamos entre Estados Unidos, Colombia y Perú, con foco en resultados y no en horarios.
                </p>
              </div>
              <div className="rounded-2xl bg-paper-2 p-6 ring-1 ring-ink/5">
                <div className="gx-art" aria-hidden="true" style={{ height: "170px", margin: "-12px -12px 14px", borderRadius: "14px", overflow: "hidden", background: "radial-gradient(90% 80% at 50% 45%,#ffffff 0%,rgba(255,255,255,0) 75%)" }}>
                  <svg style={{ display: "block", width: "100%", height: "100%" }} viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <radialGradient id="gx903" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor="#4e49f2" stopOpacity=".20" />
                        <stop offset=".45" stopColor="#6c68f5" stopOpacity=".07" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                      </radialGradient>
                      {"\n"}
                      <linearGradient id="hx903" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#ebe9ff" />
                      </linearGradient>
                      {"\n"}
                      <linearGradient id="bx903" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#9692ff" />
                        <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                      </linearGradient>
                      {"\n"}
                      <pattern id="px903" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r=".8" fill="#050510" fillOpacity=".11" />
                      </pattern>
                      {"\n"}
                      <radialGradient id="mx903" cx="50%" cy="50%" r="55%">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                      </radialGradient>
                      <mask id="kx903">
                        <rect width="400" height="220" fill="url(#mx903)" />
                      </mask>
                      {"\n"}
                      <filter id="fx903" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="10" />
                      </filter>
                    </defs>
                    {"\n"}
                    <rect width="400" height="220" fill="url(#px903)" mask="url(#kx903)" />
                    <path d="M87 58H118.5V97.0H167" stroke="rgba(78,73,242,.30)" strokeWidth="1" fill="none" />
                    <path d="M61 110H105.5V110.0H167" stroke="rgba(78,73,242,.30)" strokeWidth="1" fill="none" />
                    <path d="M87 162H118.5V123.0H167" stroke="rgba(78,73,242,.30)" strokeWidth="1" fill="none" />
                    <path d="M313 58H281.5V97.0H233" stroke="rgba(78,73,242,.30)" strokeWidth="1" fill="none" />
                    <path d="M339 110H294.5V110.0H233" stroke="rgba(78,73,242,.30)" strokeWidth="1" fill="none" />
                    <path d="M313 162H281.5V123.0H233" stroke="rgba(78,73,242,.30)" strokeWidth="1" fill="none" />
                    <circle className="gx-d" cx="108" cy="110" r="2.4" fill="#4e49f2" />
                    <circle cx="108" cy="110" r="6" fill="#4e49f2" opacity=".18" />
                    <circle className="gx-d" cx="292" cy="72" r="2.4" fill="#4e49f2" />
                    <circle cx="292" cy="72" r="6" fill="#4e49f2" opacity=".18" />
                    <g className="gx-n">
                      <rect x="53.0" y="41.0" width="34" height="34" rx="9.5" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(62.01 50.01) scale(0.6658333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21a8 8 0 0 1 16 0" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="27.0" y="93.0" width="34" height="34" rx="9.5" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(36.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
                        <path d="m3 12 9 5 9-5" />
                        <path d="m3 17 9 5 9-5" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="53.0" y="145.0" width="34" height="34" rx="9.5" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(62.01 154.01) scale(0.6658333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="313.0" y="41.0" width="34" height="34" rx="9.5" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(322.01 50.01) scale(0.6658333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="339.0" y="93.0" width="34" height="34" rx="9.5" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(348.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                        <path d="m9 12 2 2 4-4" />
                      </g>
                    </g>
                    <g className="gx-n">
                      <rect x="313.0" y="145.0" width="34" height="34" rx="9.5" fill="#ffffff" stroke="rgba(5,5,16,.10)" />
                      <g transform="translate(322.01 154.01) scale(0.6658333333333333)" fill="none" stroke="#4e49f2" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21a8 8 0 0 1 16 0" />
                      </g>
                    </g>
                    <g className="gx-hub">
                      <ellipse className="gx-glow" cx="200" cy="110" rx="105.60000000000001" ry="79.2" fill="url(#gx903)" />
                      {"\n"}
                      <rect x="167.0" y="83.0" width="66" height="66" rx="17.2" fill="#4e49f2" opacity=".28" filter="url(#fx903)" />
                      {"\n"}
                      <rect x="167.0" y="77.0" width="66" height="66" rx="17.2" fill="url(#hx903)" stroke="url(#bx903)" strokeWidth="1.2" />
                      {"\n"}
                      <rect x="173.0" y="83.0" width="54" height="54" rx="13.2" fill="none" stroke="rgba(78,73,242,.14)" />
                      {"\n"}
                      <g transform="translate(186.14 96.14) scale(1.155)" fill="none" stroke="#4e49f2" strokeWidth="1.30" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="m7 15 4-4 3 3 6-6" />
                      </g>
                    </g>
                  </svg>
                </div>
                <h3 className="font-display text-[18px] font-semibold text-ink">
                  Aprende de quienes crearon la categoría
                </h3>
                <p className="mt-2 text-body-m text-ink/65">
                  Trabaja junto a quienes llevaron Business Observability a empresas Fortune 500.
                </p>
              </div>
            </div>
            <div className="mt-7 flex justify-center">
              <Link className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display whitespace-nowrap bg-accent-base text-on-accent hover:bg-[#3f3ad9]" href="/es/reclutamiento">
                Únete al equipo
                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
