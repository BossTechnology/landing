import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: "Boss.Technology · Business Observability",
  description: "Business Observability brinda a los líderes el poder de ver y entender todo lo que sucede en sus empresas, y actuar en tiempo real.",
});

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ".hv-hl{color:color-mix(in srgb,var(--brand-accent) 62%,#fff)}@media (max-width:767px){.hv--bg{height:auto;min-height:0}.hv--bg .hv-sticky{display:flex;flex-direction:column;align-items:center;padding-top:max(96px,12svh)}.hv--bg .hv-copy{position:relative;left:auto;top:auto;transform:none}.hv--bg .hv-bgv{position:relative;left:auto;bottom:auto;transform:none;flex:none;width:175vw;margin-top:-14vw}}" }} />
      <style dangerouslySetInnerHTML={{ __html: "body{background:var(--page-gradient);background-attachment:fixed;color:var(--foreground);font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif;font-size:16px;line-height:1.5}" }} />
      <main className="flex-1">
        <section data-nav="dark" className="hv hv--bg" id="hero" aria-labelledby="hv-title">
          <div className="hv-sticky">
            <video className="hv-bgv" autoPlay muted loop playsInline preload="auto" disablePictureInPicture disableRemotePlayback tabIndex={-1} aria-hidden="true" poster="/assets/home/hero-bg-v2-poster.jpg">
              <source src="/assets/home/hero-bg-v2.webm" type="video/webm" />
              <source src="/assets/home/hero-bg-v2.mp4" type="video/mp4" />
            </video>
            <div className="hv-copy">
              <h1 id="hv-title" className="hv-title">
                {"Inteligencia central en "}
                <span className="hv-hl">
                  tiempo real
                </span>
              </h1>
              <p className="hv-sub hv-tag">
                {"Activa un "}
                <span className="hv-hl">
                  nuevo poder
                </span>
                {" empresarial."}
              </p>
            </div>
            <a className="hv-cue hv-cue2" href="#factores">
              <span>
                Desliza para descubrir
              </span>
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </i>
            </a>
          </div>
        </section>
        <section className="py-12 lg:py-16" aria-labelledby="team-exp-title">
          <header className="sec-head px-5 lg:px-6 mb-6 lg:mb-8">
            <h2 id="team-exp-title" className="sec-title" style={{ fontSize: "clamp(var(--heading-xs-size),2.4vw,var(--heading-s-size))", lineHeight: "1.25", fontWeight: "600" }}>
              Experiencia de nuestro equipo en observabilidad
            </h2>
          </header>
          <div className="group/marquee relative overflow-hidden mask-fade-x">
            <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]" style={{ animationDuration: "90s" }}>
              <div className="flex shrink-0 items-stretch gap-[var(--marquee-gap)] pr-[var(--marquee-gap)] lg:gap-[var(--marquee-gap-lg)] lg:pr-[var(--marquee-gap-lg)]" style={{ "--marquee-gap": "32px", "--marquee-gap-lg": "52px" }}>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-1.svg" alt="" style={{ "--logo-h": "52px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-2.svg" alt="" style={{ "--logo-h": "59px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-3.svg" alt="" style={{ "--logo-h": "52px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-4.svg" alt="" style={{ "--logo-h": "45px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-5.svg" alt="" style={{ "--logo-h": "56px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-6.svg" alt="" style={{ "--logo-h": "41px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-7.svg" alt="" style={{ "--logo-h": "22px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-8.svg" alt="" style={{ "--logo-h": "28px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-febor.png" alt="" style={{ "--logo-h": "54px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-pinch.png" alt="" style={{ "--logo-h": "22px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
              </div>
              <div className="flex shrink-0 items-stretch gap-[var(--marquee-gap)] pr-[var(--marquee-gap)] lg:gap-[var(--marquee-gap-lg)] lg:pr-[var(--marquee-gap-lg)]" style={{ "--marquee-gap": "32px", "--marquee-gap-lg": "52px" }} aria-hidden="true">
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-1.svg" alt="" style={{ "--logo-h": "52px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-2.svg" alt="" style={{ "--logo-h": "59px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-3.svg" alt="" style={{ "--logo-h": "52px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-4.svg" alt="" style={{ "--logo-h": "45px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-5.svg" alt="" style={{ "--logo-h": "56px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-6.svg" alt="" style={{ "--logo-h": "41px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-7.svg" alt="" style={{ "--logo-h": "22px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-8.svg" alt="" style={{ "--logo-h": "28px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-febor.png" alt="" style={{ "--logo-h": "54px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-pinch.png" alt="" style={{ "--logo-h": "22px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
              </div>
              <div className="flex shrink-0 items-stretch gap-[var(--marquee-gap)] pr-[var(--marquee-gap)] lg:gap-[var(--marquee-gap-lg)] lg:pr-[var(--marquee-gap-lg)]" style={{ "--marquee-gap": "32px", "--marquee-gap-lg": "52px" }} aria-hidden="true">
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-1.svg" alt="" style={{ "--logo-h": "52px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-2.svg" alt="" style={{ "--logo-h": "59px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-3.svg" alt="" style={{ "--logo-h": "52px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-4.svg" alt="" style={{ "--logo-h": "45px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-5.svg" alt="" style={{ "--logo-h": "56px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-6.svg" alt="" style={{ "--logo-h": "41px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-7.svg" alt="" style={{ "--logo-h": "22px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-8.svg" alt="" style={{ "--logo-h": "28px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-febor.png" alt="" style={{ "--logo-h": "54px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-pinch.png" alt="" style={{ "--logo-h": "22px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
              </div>
              <div className="flex shrink-0 items-stretch gap-[var(--marquee-gap)] pr-[var(--marquee-gap)] lg:gap-[var(--marquee-gap-lg)] lg:pr-[var(--marquee-gap-lg)]" style={{ "--marquee-gap": "32px", "--marquee-gap-lg": "52px" }} aria-hidden="true">
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-1.svg" alt="" style={{ "--logo-h": "52px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-2.svg" alt="" style={{ "--logo-h": "59px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-3.svg" alt="" style={{ "--logo-h": "52px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-4.svg" alt="" style={{ "--logo-h": "45px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-5.svg" alt="" style={{ "--logo-h": "56px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-6.svg" alt="" style={{ "--logo-h": "41px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-7.svg" alt="" style={{ "--logo-h": "22px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-8.svg" alt="" style={{ "--logo-h": "28px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-febor.png" alt="" style={{ "--logo-h": "54px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
                <span className="flex shrink-0 items-center">
                  <img src="/assets/brand/client-pinch.png" alt="" style={{ "--logo-h": "22px" }} className="h-[calc(var(--logo-h)*0.72)] w-auto object-contain lg:h-[var(--logo-h)]" />
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="vr vr2 vr5" id="factores" aria-labelledby="go-title">
          <div className="vr-in">
            <header className="vr-head">
              <p className="vr-eb">
                Para quienes lideran
              </p>
              <h2 id="go-title" className="sec-title vr-h">
                {"No puedes decidir "}
                <span>
                  sobre lo que no ves.
                </span>
              </h2>
              <p className="vr-sub">
                Business Observability conecta y hace visibles todas las áreas, procesos y sistemas de tu empresa, en tiempo real.
              </p>
            </header>
            <div className="vr-grid">
              <style dangerouslySetInnerHTML={{ __html: ".mz-stack{display:grid}.mz-stack>.mz{grid-area:1/1;transition:opacity .9s ease}.mz-stack>.mz:not(.cur){opacity:0;pointer-events:none}.mz-stack>.mz:not(.cur) *{animation-play-state:paused}.mz-stack .mz-img{mix-blend-mode:normal}.mz-stack .mz-col{filter:none}.mz-stack .mz-tint{mix-blend-mode:normal;background:radial-gradient(closest-side,color-mix(in srgb,var(--brand-accent) 14%,transparent),transparent)}" }} />
              <div className="mz-stack">
                <figure className="mz cur">
                  <img className="mz-img mz-base" src="/assets/home/iso-mina-v6.webp" alt="Una operación minera en isométrico: mina, chancado, molienda, flotación y filtrado, conectados a un núcleo central" width="1300" height="900" loading="lazy" decoding="async" />
                  <img className="mz-img mz-col" src="/assets/home/iso-mina-v6.webp" alt="" aria-hidden="true" style={{ "--r0": "16.5%", "--r1": "9%", "--r2": "10%", "--r3": "13%", "--r4": "11%", WebkitMaskImage: "radial-gradient(circle at 36.15% 47.78%,#000 calc(var(--h0) * .55),transparent var(--h0)),radial-gradient(circle at 43.46% 70.56%,#000 calc(var(--h1) * .55),transparent var(--h1)),radial-gradient(circle at 50.00% 63.89%,#000 calc(var(--h2) * .55),transparent var(--h2)),radial-gradient(circle at 66.92% 50.00%,#000 calc(var(--h3) * .55),transparent var(--h3)),radial-gradient(circle at 61.15% 72.78%,#000 calc(var(--h4) * .55),transparent var(--h4))", maskImage: "radial-gradient(circle at 36.15% 47.78%,#000 calc(var(--h0) * .55),transparent var(--h0)),radial-gradient(circle at 43.46% 70.56%,#000 calc(var(--h1) * .55),transparent var(--h1)),radial-gradient(circle at 50.00% 63.89%,#000 calc(var(--h2) * .55),transparent var(--h2)),radial-gradient(circle at 66.92% 50.00%,#000 calc(var(--h3) * .55),transparent var(--h3)),radial-gradient(circle at 61.15% 72.78%,#000 calc(var(--h4) * .55),transparent var(--h4))" }} />
                  <span className="mz-tint" style={{ left: "36.15%", top: "47.78%", "--w": "26%", "--i": "0" }} />
                  <span className="mz-tint" style={{ left: "43.46%", top: "70.56%", "--w": "14%", "--i": "1" }} />
                  <span className="mz-tint" style={{ left: "50.00%", top: "63.89%", "--w": "15%", "--i": "2" }} />
                  <span className="mz-tint" style={{ left: "66.92%", top: "50.00%", "--w": "22%", "--i": "3" }} />
                  <span className="mz-tint" style={{ left: "61.15%", top: "72.78%", "--w": "17%", "--i": "4" }} />
                  <svg className="mz-svg" viewBox="0 0 1300 900" aria-hidden="true">
                    <path className="mz-ln" data-k="0" style={{ "--i": "0" }} pathLength="100" d="M470 430V300C470 220 470 140 470 95" />
                    <path className="mz-ln" data-k="1" style={{ "--i": "1" }} pathLength="100" d="M565 635V300C565 220 503 140 470 95" />
                    <path className="mz-ln" data-k="2" style={{ "--i": "2" }} pathLength="100" d="M650 575V300C650 220 533 140 470 95" />
                    <path className="mz-ln" data-k="3" style={{ "--i": "3" }} pathLength="100" d="M870 450V300C870 220 610 140 470 95" />
                    <path className="mz-ln" data-k="4" style={{ "--i": "4" }} pathLength="100" d="M795 655V300C795 220 584 140 470 95" />
                    <path className="mz-arc" data-c="0" pathLength="100" d="M470 430Q518 280 565 635" />
                    <path className="mz-arc" data-c="1" pathLength="100" d="M565 635Q608 425 650 575" />
                    <path className="mz-arc" data-c="2" pathLength="100" d="M650 575Q760 300 870 450" />
                    <path className="mz-arc" data-c="3" pathLength="100" d="M795 655Q832 330 870 450Q760 330 650 575" />
                    <path className="mz-up" style={{ "--i": "0" }} d="M470 430V300C470 220 470 140 470 95" />
                    <path className="mz-up" style={{ "--i": "1" }} d="M565 635V300C565 220 503 140 470 95" />
                    <path className="mz-up" style={{ "--i": "2" }} d="M650 575V300C650 220 533 140 470 95" />
                    <path className="mz-up" style={{ "--i": "3" }} d="M870 450V300C870 220 610 140 470 95" />
                    <path className="mz-up" style={{ "--i": "4" }} d="M795 655V300C795 220 584 140 470 95" />
                    <circle className="mz-src" style={{ "--i": "0" }} cx="470" cy="430" r="6" />
                    <circle className="mz-src" style={{ "--i": "1" }} cx="565" cy="635" r="6" />
                    <circle className="mz-src" style={{ "--i": "2" }} cx="650" cy="575" r="6" />
                    <circle className="mz-src" style={{ "--i": "3" }} cx="870" cy="450" r="6" />
                    <circle className="mz-src" style={{ "--i": "4" }} cx="795" cy="655" r="6" />
                  </svg>
                  <span className="mz-ring" data-k="0" style={{ left: "36.15%", top: "47.78%" }} />
                  <span className="mz-ring" data-k="1" style={{ left: "43.46%", top: "70.56%" }} />
                  <span className="mz-ring" data-k="2" style={{ left: "50.00%", top: "63.89%" }} />
                  <span className="mz-ring" data-k="3" style={{ left: "66.92%", top: "50.00%" }} />
                  <span className="mz-ring" data-k="4" style={{ left: "61.15%", top: "72.78%" }} />
                  <span className="mz-hub" style={{ left: "36.15%", top: "10.56%" }}>
                    <img src="/assets/brand/isotipo.svg" alt="" />
                  </span>
                  <div className="mz-cards" style={{ left: "40.15%", top: "10.56%" }} aria-live="polite">
                    <div className="mz-card" data-c="0" data-a="0 1">
                      <i>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                        </svg>
                      </i>
                      <b>
                        Reprogramar despacho de camiones
                      </b>
                      <small>
                        <em>
                          Mina
                        </em>
                        {" + "}
                        <em>
                          Chancado
                        </em>
                      </small>
                    </div>
                    <div className="mz-card" data-c="1" data-a="1 2">
                      <i>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                        </svg>
                      </i>
                      <b>
                        Ajustar alimentación al molino
                      </b>
                      <small>
                        <em>
                          Chancado
                        </em>
                        {" + "}
                        <em>
                          Molienda
                        </em>
                      </small>
                    </div>
                    <div className="mz-card" data-c="2" data-a="2 3">
                      <i>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                        </svg>
                      </i>
                      <b>
                        Ajustar dosificación de reactivos
                      </b>
                      <small>
                        <em>
                          Molienda
                        </em>
                        {" + "}
                        <em>
                          Flotación
                        </em>
                      </small>
                    </div>
                    <div className="mz-card" data-c="3" data-a="4 3 2">
                      <i>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                        </svg>
                      </i>
                      <b>
                        Bajar ritmo de molienda por falla en el filtro
                      </b>
                      <small>
                        <em>
                          Filtrado
                        </em>
                        {" + "}
                        <em>
                          Flotación
                        </em>
                        {" + "}
                        <em>
                          Molienda
                        </em>
                      </small>
                    </div>
                  </div>
                  <span className="mz-lab" data-k="0" style={{ left: "25.38%", top: "43.89%", "--i": "0" }}>
                    Mina
                  </span>
                  <span className="mz-lab" data-k="1" style={{ left: "36.00%", top: "78.33%", "--i": "1" }}>
                    Chancado
                  </span>
                  <span className="mz-lab" data-k="2" style={{ left: "56.54%", top: "57.78%", "--i": "2" }}>
                    Molienda
                  </span>
                  <span className="mz-lab" data-k="3" style={{ left: "67.69%", top: "41.33%", "--i": "3" }}>
                    Flotación
                  </span>
                  <span className="mz-lab" data-k="4" style={{ left: "55.38%", top: "83.11%", "--i": "4" }}>
                    Filtrado
                  </span>
                </figure>
                <figure className="mz">
                  <img className="mz-img mz-base" src="/assets/home/iso-agro-v1.webp" alt="Una operación agroexportadora en isométrico: campo, cosecha, packing, cámaras de frío y despacho, conectados a un núcleo central" width="1300" height="900" loading="lazy" decoding="async" />
                  <img className="mz-img mz-col" src="/assets/home/iso-agro-v1.webp" alt="" aria-hidden="true" style={{ "--r0": "16%", "--r1": "12%", "--r2": "15%", "--r3": "13%", "--r4": "12%", WebkitMaskImage: "radial-gradient(circle at 28.46% 53.33%,#000 calc(var(--h0) * .55),transparent var(--h0)),radial-gradient(circle at 45.00% 68.33%,#000 calc(var(--h1) * .55),transparent var(--h1)),radial-gradient(circle at 52.31% 36.67%,#000 calc(var(--h2) * .55),transparent var(--h2)),radial-gradient(circle at 66.92% 55.56%,#000 calc(var(--h3) * .55),transparent var(--h3)),radial-gradient(circle at 81.54% 60.00%,#000 calc(var(--h4) * .55),transparent var(--h4))", maskImage: "radial-gradient(circle at 28.46% 53.33%,#000 calc(var(--h0) * .55),transparent var(--h0)),radial-gradient(circle at 45.00% 68.33%,#000 calc(var(--h1) * .55),transparent var(--h1)),radial-gradient(circle at 52.31% 36.67%,#000 calc(var(--h2) * .55),transparent var(--h2)),radial-gradient(circle at 66.92% 55.56%,#000 calc(var(--h3) * .55),transparent var(--h3)),radial-gradient(circle at 81.54% 60.00%,#000 calc(var(--h4) * .55),transparent var(--h4))" }} />
                  <span className="mz-tint" style={{ left: "28.46%", top: "53.33%", "--w": "26%", "--i": "0" }} />
                  <span className="mz-tint" style={{ left: "45.00%", top: "68.33%", "--w": "18%", "--i": "1" }} />
                  <span className="mz-tint" style={{ left: "52.31%", top: "36.67%", "--w": "24%", "--i": "2" }} />
                  <span className="mz-tint" style={{ left: "66.92%", top: "55.56%", "--w": "20%", "--i": "3" }} />
                  <span className="mz-tint" style={{ left: "81.54%", top: "60.00%", "--w": "18%", "--i": "4" }} />
                  <svg className="mz-svg" viewBox="0 0 1300 900" aria-hidden="true">
                    <path className="mz-ln" data-k="0" style={{ "--i": "0" }} pathLength="100" d="M370 480V300C370 220 440 140 470 95" />
                    <path className="mz-ln" data-k="1" style={{ "--i": "1" }} pathLength="100" d="M585 615V300C585 220 504 140 470 95" />
                    <path className="mz-ln" data-k="2" style={{ "--i": "2" }} pathLength="100" d="M680 330V245C680 165 533 140 470 95" />
                    <path className="mz-ln" data-k="3" style={{ "--i": "3" }} pathLength="100" d="M870 500V300C870 220 590 140 470 95" />
                    <path className="mz-ln" data-k="4" style={{ "--i": "4" }} pathLength="100" d="M1060 540V300C1060 220 647 140 470 95" />
                    <path className="mz-arc" data-c="0" pathLength="100" d="M370 480Q478 320 585 615" />
                    <path className="mz-arc" data-c="1" pathLength="100" d="M585 615Q632 170 680 330" />
                    <path className="mz-arc" data-c="2" pathLength="100" d="M870 500Q775 210 680 330Q632 210 585 615" />
                    <path className="mz-arc" data-c="3" pathLength="100" d="M870 500Q965 340 1060 540" />
                    <path className="mz-up" style={{ "--i": "0" }} d="M370 480V300C370 220 440 140 470 95" />
                    <path className="mz-up" style={{ "--i": "1" }} d="M585 615V300C585 220 504 140 470 95" />
                    <path className="mz-up" style={{ "--i": "2" }} d="M680 330V245C680 165 533 140 470 95" />
                    <path className="mz-up" style={{ "--i": "3" }} d="M870 500V300C870 220 590 140 470 95" />
                    <path className="mz-up" style={{ "--i": "4" }} d="M1060 540V300C1060 220 647 140 470 95" />
                    <circle className="mz-src" style={{ "--i": "0" }} cx="370" cy="480" r="6" />
                    <circle className="mz-src" style={{ "--i": "1" }} cx="585" cy="615" r="6" />
                    <circle className="mz-src" style={{ "--i": "2" }} cx="680" cy="330" r="6" />
                    <circle className="mz-src" style={{ "--i": "3" }} cx="870" cy="500" r="6" />
                    <circle className="mz-src" style={{ "--i": "4" }} cx="1060" cy="540" r="6" />
                  </svg>
                  <span className="mz-ring" data-k="0" style={{ left: "28.46%", top: "53.33%" }} />
                  <span className="mz-ring" data-k="1" style={{ left: "45.00%", top: "68.33%" }} />
                  <span className="mz-ring" data-k="2" style={{ left: "52.31%", top: "36.67%" }} />
                  <span className="mz-ring" data-k="3" style={{ left: "66.92%", top: "55.56%" }} />
                  <span className="mz-ring" data-k="4" style={{ left: "81.54%", top: "60.00%" }} />
                  <span className="mz-hub" style={{ left: "36.15%", top: "10.56%" }}>
                    <img src="/assets/brand/isotipo.svg" alt="" />
                  </span>
                  <div className="mz-cards" style={{ left: "40.15%", top: "10.56%" }} aria-live="polite">
                    <div className="mz-card" data-c="0" data-a="0 1">
                      <i>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                        </svg>
                      </i>
                      <b>
                        Adelantar la cosecha del lote 4
                      </b>
                      <small>
                        <em>
                          Campo
                        </em>
                        {" + "}
                        <em>
                          Cosecha
                        </em>
                      </small>
                    </div>
                    <div className="mz-card" data-c="1" data-a="1 2">
                      <i>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                        </svg>
                      </i>
                      <b>
                        Reasignar cuadrillas al packing
                      </b>
                      <small>
                        <em>
                          Cosecha
                        </em>
                        {" + "}
                        <em>
                          Packing
                        </em>
                      </small>
                    </div>
                    <div className="mz-card" data-c="2" data-a="3 2 1">
                      <i>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                        </svg>
                      </i>
                      <b>
                        Frenar la cosecha: cámaras de frío al límite
                      </b>
                      <small>
                        <em>
                          Cámaras de frío
                        </em>
                        {" + "}
                        <em>
                          Packing
                        </em>
                        {" + "}
                        <em>
                          Cosecha
                        </em>
                      </small>
                    </div>
                    <div className="mz-card" data-c="3" data-a="3 4">
                      <i>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                        </svg>
                      </i>
                      <b>
                        Priorizar contenedor para el embarque
                      </b>
                      <small>
                        <em>
                          Cámaras de frío
                        </em>
                        {" + "}
                        <em>
                          Despacho
                        </em>
                      </small>
                    </div>
                  </div>
                  <span className="mz-lab" data-k="0" style={{ left: "17.31%", top: "46.11%", "--i": "0" }}>
                    Campo
                  </span>
                  <span className="mz-lab" data-k="1" style={{ left: "45.00%", top: "78.33%", "--i": "1" }}>
                    Cosecha
                  </span>
                  <span className="mz-lab" data-k="2" style={{ left: "32.31%", top: "30.00%", "--i": "2" }}>
                    Packing
                  </span>
                  <span className="mz-lab" data-k="3" style={{ left: "67.69%", top: "66.67%", "--i": "3" }}>
                    Cámaras de frío
                  </span>
                  <span className="mz-lab" data-k="4" style={{ left: "89.23%", top: "71.11%", "--i": "4" }}>
                    Despacho
                  </span>
                </figure>
              </div>
              <div className="vr-side">
                <ol className="vr-chain">
                  <li className="vr-w" style={{ "--i": "0" }}>
                    <span className="vr-n">
                      01
                    </span>
                    <b data-t="Ver">
                      Ver
                    </b>
                    <small>
                      Todas las áreas, en vivo
                    </small>
                  </li>
                  <li className="vr-w" style={{ "--i": "1" }}>
                    <span className="vr-n">
                      02
                    </span>
                    <b data-t="Entender">
                      Entender
                    </b>
                    <small>
                      Cómo se afectan entre sí, y por qué
                    </small>
                  </li>
                  <li className="vr-w" style={{ "--i": "2" }}>
                    <span className="vr-n">
                      03
                    </span>
                    <b data-t="Actuar">
                      Actuar
                    </b>
                    <small>
                      Acciones inteligentes, a tiempo
                    </small>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section id="productos" className="scroll-mt-24 px-5 lg:px-6 sec-y pd">
          <div className="mx-auto max-w-[1152px]">
            <header className="sec-head ">
              <h2 className="sec-title">
                Nuestros Productos
              </h2>
              <p className="sec-sub">
                Un núcleo que conecta todo tu negocio, y aplicaciones listas para operar sobre él.
              </p>
            </header>
            <div className="pd-grid">
              <Link className="pd-card pd-bx" href="/es/productos/plataformas">
                <div className="pd-txt">
                  <p className="pd-k">
                    Producto principal
                  </p>
                  <h3>
                    BzzzBX
                  </h3>
                  <p className="pd-t">
                    Business Observability Super Server
                  </p>
                  <p className="pd-p">
                    El centro de procesamiento en tiempo real de tu organización: recibe señales, las contextualiza y responde con alertas, predicciones y acciones. Y sobre él construyes lo que necesites.
                  </p>
                  <ul className="pd-tags">
                    <li>
                      En tu nube o centro de datos
                    </li>
                  </ul>
                  <span className="pd-cta">
                    Conoce BzzzBX
                    <span aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
                <div className="pd-fig pd-fig--photo">
                  <img src="/assets/home/bzzzbx-producto-mano.webp" alt="Servidor BzzzBX" width="1200" height="896" loading="lazy" decoding="async" />
                </div>
              </Link>
              <Link className="pd-card pd-en" href="/es/productos/aplicaciones">
                <div className="pd-txt">
                  <h3>
                    Engines
                  </h3>
                  <p className="pd-t">
                    Aplicaciones listas para casos de negocio
                  </p>
                  <p className="pd-p">
                    Engines especializados que se activan sobre los mismos datos de BzzzBX, sin una nueva integración.
                  </p>
                </div>
                <ul className="pd-eng sr-only">
                  <li>
                    Momentum
                  </li>
                  <li>
                    BOB
                  </li>
                  <li>
                    Sentient
                  </li>
                  <li>
                    Machina
                  </li>
                  <li>
                    Chass1s
                  </li>
                  <li>
                    EyeSite
                  </li>
                  <li>
                    Metamap
                  </li>
                  <li>
                    Flashboards
                  </li>
                </ul>
                <div className="ef ef--grid" aria-hidden="true">
                  <span className="ef-t">
                    <i>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 19.5 19.5 4.5" />
                        <path d="M9.5 4.5h10v10" />
                      </svg>
                    </i>
                    <span>
                      <b>
                        Momentum
                      </b>
                      <small>
                        Business journeys
                      </small>
                    </span>
                  </span>
                  <span className="ef-t">
                    <i>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.5 16.5a4.5 4.5 0 0 1 9 0" />
                        <path d="M11.5 16.5a4.5 4.5 0 0 1 9 0" />
                        <path d="M3.5 16.5v2M20.5 16.5v2" />
                      </svg>
                    </i>
                    <span>
                      <b>
                        BOB
                      </b>
                      <small>
                        Interacciones con clientes
                      </small>
                    </span>
                  </span>
                  <span className="ef-t">
                    <i>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="14" r="3.5" />
                        <path d="M12 6.5v-2.5" />
                        <path d="M7.4 8.4 5.6 6.6" />
                        <path d="M16.6 8.4l1.8-1.8" />
                        <path d="M4.5 14h-1.5" />
                        <path d="M21 14h-1.5" />
                      </svg>
                    </i>
                    <span>
                      <b>
                        Sentient
                      </b>
                      <small>
                        Estado de ambientes físicos
                      </small>
                    </span>
                  </span>
                  <span className="ef-t">
                    <i>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5.5 4.5v15" />
                        <path d="M9.8 4.5v15" />
                        <path d="M14.2 4.5v15" />
                        <path d="M18.5 4.5v15" />
                      </svg>
                    </i>
                    <span>
                      <b>
                        Machina
                      </b>
                      <small>
                        Mantenimientos predictivos
                      </small>
                    </span>
                  </span>
                  <span className="ef-t">
                    <i>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8.5V4h4.5" />
                        <path d="M15.5 4H20v4.5" />
                        <path d="M20 15.5V20h-4.5" />
                        <path d="M8.5 20H4v-4.5" />
                      </svg>
                    </i>
                    <span>
                      <b>
                        Chass1s
                      </b>
                      <small>
                        Generador de estrategia Bo11y
                      </small>
                    </span>
                  </span>
                  <span className="ef-t">
                    <i>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="7.5" />
                        <circle cx="12" cy="12" r="2.5" />
                        <path d="M2.5 12h2M19.5 12h2" />
                      </svg>
                    </i>
                    <span>
                      <b>
                        EyeSite
                      </b>
                      <small>
                        Captura de datos en campo
                      </small>
                    </span>
                  </span>
                  <span className="ef-t">
                    <i>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4 4.5 19" />
                        <path d="M12 4 9.5 19" />
                        <path d="M12 4 14.5 19" />
                        <path d="M12 4 19.5 19" />
                      </svg>
                    </i>
                    <span>
                      <b>
                        Metamap
                      </b>
                      <small>
                        Central de geocomando
                      </small>
                    </span>
                  </span>
                  <span className="ef-t">
                    <i>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3.4" y="4.6" width="17.2" height="14.8" rx="1" />
                        <path d="M10.6 4.6v14.8" />
                        <path d="M10.6 12h10" />
                      </svg>
                    </i>
                    <span>
                      <b>
                        Flashboards
                      </b>
                      <small>
                        Tableros en vivo
                      </small>
                    </span>
                  </span>
                </div>
                <span className="pd-cta">
                  Ver Engines
                  <span aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section id="casos" className="scroll-mt-24 sec-y cx">
          <div className="cx-in">
            <header className="cx-head">
              <div>
                <p className="cx-eb">
                  <i aria-hidden="true" />
                  Casos de negocio
                </p>
                <h2 className="sec-title cx-h">
                  Empresas que utilizan
                  <br />
                  Business Observability
                </h2>
              </div>
              <Link className="cx-more" href="/es/casos">
                <span aria-hidden="true">
                  →
                </span>
                Ver todos los casos
              </Link>
            </header>
            <div className="cx-row">
              <Link className="cx-p on" href="/es/casos/caso-1" style={{ "--i": "0" }}>
                <img src="/assets/brand/case-febor.jpg" alt="" loading="lazy" decoding="async" />
                <span className="cx-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path className="v" d="M12 5v14" />
                    <path d="M5 12h14" />
                    <path className="ar" d="M13 6l6 6-6 6" />
                  </svg>
                </span>
                <span className="cx-tx">
                  <b>
                    FEBOR
                  </b>
                  <span>
                    Una cooperativa que entiende todos sus canales de atención en tiempo real
                  </span>
                  <em>
                    Leer caso
                    <i aria-hidden="true">
                      →
                    </i>
                  </em>
                </span>
              </Link>
              <Link className="cx-p" href="/es/casos/caso-3" style={{ "--i": "1" }}>
                <img src="/assets/brand/case-pinchjobs.jpg" alt="" loading="lazy" decoding="async" />
                <span className="cx-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path className="v" d="M12 5v14" />
                    <path d="M5 12h14" />
                    <path className="ar" d="M13 6l6 6-6 6" />
                  </svg>
                </span>
                <span className="cx-tx">
                  <b>
                    Pinch Jobs
                  </b>
                  <span>
                    Cientos de servicios de limpieza en simultáneo, bajo un solo control
                  </span>
                  <em>
                    Leer caso
                    <i aria-hidden="true">
                      →
                    </i>
                  </em>
                </span>
              </Link>
              <Link className="cx-p" href="/es/casos/caso-4" style={{ "--i": "2" }}>
                <img src="/assets/brand/case-mineria.jpg" alt="" loading="lazy" decoding="async" />
                <span className="cx-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path className="v" d="M12 5v14" />
                    <path d="M5 12h14" />
                    <path className="ar" d="M13 6l6 6-6 6" />
                  </svg>
                </span>
                <span className="cx-tx">
                  <b>
                    Minería
                  </b>
                  <span>
                    Una operación minera que ve toda su cadena en tiempo real
                  </span>
                  <em>
                    Leer caso
                    <i aria-hidden="true">
                      →
                    </i>
                  </em>
                </span>
              </Link>
              <Link className="cx-p" href="/es/casos/caso-5" style={{ "--i": "3" }}>
                <img src="/assets/brand/case-restaurantes.jpg" alt="" loading="lazy" decoding="async" />
                <span className="cx-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path className="v" d="M12 5v14" />
                    <path d="M5 12h14" />
                    <path className="ar" d="M13 6l6 6-6 6" />
                  </svg>
                </span>
                <span className="cx-tx">
                  <b>
                    Restaurantes
                  </b>
                  <span>
                    Una cadena que sigue cada pedido, de la caja a la mesa
                  </span>
                  <em>
                    Leer caso
                    <i aria-hidden="true">
                      →
                    </i>
                  </em>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section id="blog" className="scroll-mt-24 sec-y-band" style={{ background: "transparent" }}>
          <div className="mx-auto max-w-[1200px] px-5 lg:px-6">
            <div className="flex flex-col gap-8 lg:gap-12">
              <div className="relative flex flex-col gap-6 sm:block">
                <header className="sec-head">
                  <h2 className="sec-title">
                    Colmena de ideas
                  </h2>
                  <p className="sec-sub">
                    Ideas, whitepapers y análisis de nuestro equipo sobre Business Observability, IA aplicada y cómo las empresas pasan de reaccionar a anticipar.
                  </p>
                </header>
              </div>
              <div className={"blog3 flex snap-x snap-mandatory gap-[30px] overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"}>
                <article className="relative flex w-[80vw] max-w-[380px] shrink-0 snap-start flex-col gap-[15px]">
                  <div className="relative h-[200px] overflow-hidden rounded-[15px] bg-[#d9d9d9] sm:h-[220px] lg:h-[257px]">
                    <img src="/assets/blog/bb-thumb.webp" alt="" className="size-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-2 text-body-xs leading-none text-black sm:left-[18px] sm:top-[17px]">
                      Business Observability
                    </span>
                  </div>
                  <p className="text-body-m text-black lg:text-body-l">
                    16 de noviembre, 2026
                  </p>
                  <h3 className="text-balance font-display text-[20px] font-bold leading-[1.15] text-black sm:text-[22px] lg:text-[24px]">
                    Cajas negras, puntos ciegos y túneles oscuros
                  </h3>
                  <Link href="/es/blog/cajas-negras" className="absolute inset-0 z-[1] rounded-[15px]" aria-label="Cajas negras, puntos ciegos y túneles oscuros" />
                </article>
                <article className="relative flex w-[80vw] max-w-[380px] shrink-0 snap-start flex-col gap-[15px]">
                  <div className="relative h-[200px] overflow-hidden rounded-[15px] bg-[#d9d9d9] sm:h-[220px] lg:h-[257px]">
                    <img src="/assets/blog/bi-thumb.webp" alt="" className="size-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-2 text-body-xs leading-none text-black sm:left-[18px] sm:top-[17px]">
                      Business Observability
                    </span>
                  </div>
                  <p className="text-body-m text-black lg:text-body-l">
                    16 de noviembre, 2026
                  </p>
                  <h3 className="text-balance font-display text-[20px] font-bold leading-[1.15] text-black sm:text-[22px] lg:text-[24px]">
                    Más allá del BI y los Data Lakes: ver el negocio mientras ocurre
                  </h3>
                  <Link href="/es/blog/bo11y-vs-bi" className="absolute inset-0 z-[1] rounded-[15px]" aria-label="Más allá del BI y los Data Lakes: ver el negocio mientras ocurre" />
                </article>
                <article className="relative flex w-[80vw] max-w-[380px] shrink-0 snap-start flex-col gap-[15px]">
                  <div className="relative h-[200px] overflow-hidden rounded-[15px] bg-[#d9d9d9] sm:h-[220px] lg:h-[257px]">
                    <img src="/assets/blog/ia-thumb.webp" alt="" className="size-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-2 text-body-xs leading-none text-black sm:left-[18px] sm:top-[17px]">
                      IA aplicada
                    </span>
                  </div>
                  <p className="text-body-m text-black lg:text-body-l">
                    12 de noviembre, 2026
                  </p>
                  <h3 className="text-balance font-display text-[20px] font-bold leading-[1.15] text-black sm:text-[22px] lg:text-[24px]">
                    Por qué la observabilidad es la base de la IA en las empresas
                  </h3>
                  <Link href="/es/blog/ia-observabilidad" className="absolute inset-0 z-[1] rounded-[15px]" aria-label="Por qué la observabilidad es la base de la IA en las empresas" />
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              Hablemos de tu operación
            </h2>
            <p className="sec-sub sec-dark-sub">
              Business Observability brinda a los líderes el poder de ver y entender todo lo que sucede en sus empresas, y actuar en tiempo real al máximo potencial del negocio.
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
