import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/blog",
  title: "Colmena de ideas · Boss.Technology",
  description: "Business Observability brinda a los líderes el poder de ver y entender todo lo que sucede en sus empresas.",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1 blg">
        <header className="blg-head">
          <h1>
            Colmena de ideas
          </h1>
          <p>
            Business Observability, IA aplicada y casos reales: cómo las empresas ven, entienden y actúan sobre su negocio en tiempo real.
          </p>
        </header>
        {"\n"}
        <div className="blg-in">
          <div className="blg-grid">
            <article className="blg-card">
              <Link href="/es/blog/cajas-negras" className="blg-link" aria-label="Cajas negras, puntos ciegos y túneles oscuros" />
              <div className="blg-th">
                <img src="/assets/blog/bb-thumb.webp" alt="" loading="lazy" />
              </div>
              <div className="blg-meta">
                <span className="blg-cat">
                  Business Observability
                </span>
                <time dateTime="2026-11-16">
                  16 de noviembre, 2026
                </time>
              </div>
              <h3>
                Cajas negras, puntos ciegos y túneles oscuros
              </h3>
              <p>
                Lo que tu empresa no ve también decide sus resultados. Cómo observar lo que controlas y lo que no.
              </p>
              <ul className="blg-tags">
                <li>
                  Fundamentos
                </li>
                <li>
                  Operación
                </li>
              </ul>
            </article>
            <article className="blg-card">
              <Link href="/es/blog/bo11y-vs-bi" className="blg-link" aria-label="Más allá del BI y los Data Lakes: ver el negocio mientras ocurre" />
              <div className="blg-th">
                <img src="/assets/blog/bi-thumb.webp" alt="" loading="lazy" />
              </div>
              <div className="blg-meta">
                <span className="blg-cat">
                  Business Observability
                </span>
                <time dateTime="2026-11-16">
                  16 de noviembre, 2026
                </time>
              </div>
              <h3>
                Más allá del BI y los Data Lakes: ver el negocio mientras ocurre
              </h3>
              <p>
                BI y Data Lakes explican lo que pasó. Business Observability muestra lo que está pasando, y por qué los completa.
              </p>
              <ul className="blg-tags">
                <li>
                  Fundamentos
                </li>
                <li>
                  Data Lakes
                </li>
              </ul>
            </article>
            <article className="blg-card">
              <Link href="/es/blog/ia-observabilidad" className="blg-link" aria-label="Por qué la observabilidad es la base de la IA en las empresas" />
              <div className="blg-th">
                <img src="/assets/blog/ia-thumb.webp" alt="" loading="lazy" />
              </div>
              <div className="blg-meta">
                <span className="blg-cat">
                  IA aplicada
                </span>
                <time dateTime="2026-11-12">
                  12 de noviembre, 2026
                </time>
              </div>
              <h3>
                Por qué la observabilidad es la base de la IA en las empresas
              </h3>
              <p>
                Sin señales en vivo, la IA responde con lo que tiene a mano. Así le damos contexto, evidencia y control.
              </p>
              <ul className="blg-tags">
                <li>
                  IA aplicada
                </li>
                <li>
                  BzzzBX
                </li>
              </ul>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
