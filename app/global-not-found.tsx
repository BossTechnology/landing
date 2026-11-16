import type { Metadata } from "next";
import "@/styles/site.css";
import "@/styles/tokens.css";
import "./not-found.css";

export const metadata: Metadata = {
  title: "Página no encontrada · Boss.Technology",
  robots: { index: false },
  icons: { icon: { url: "/assets/brand/favicon.svg", type: "image/svg+xml" } },
};

export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body className="nf">
        <a className="logo" href="/"><img src="/assets/brand/wordmark-nav.svg" alt="Boss.Technology" width={190} height={23} /></a>
        <p className="code">404</p>
        <h1>Esta página no existe</h1>
        <p>Puede que el enlace esté roto o que la página se haya movido.</p>
        <p className="en" lang="en">This page doesn&apos;t exist. The link may be broken or the page may have moved.</p>
        <div className="row">
          <a className="btn pri" href="/">Ir al inicio</a>
          <a className="btn sec" href="/en" lang="en">Go to home</a>
          <a className="btn sec" href="/es/contacto">Contacto</a>
        </div>
      </body>
    </html>
  );
}
