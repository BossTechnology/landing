import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/blog",
  title: "Ideas Hive · Boss.Technology",
  description: "Business Observability gives leaders the power to see and understand everything happening across their companies.",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1 blg">
        <header className="blg-head">
          <h1>
            Ideas Hive
          </h1>
          <p>
            Business Observability, applied AI and real cases: how companies see, understand and act on their business in real time.
          </p>
        </header>
        {"\n"}
        <div className="blg-in">
          <div className="blg-grid">
            <article className="blg-card">
              <Link href="/en/blog/black-boxes" className="blg-link" aria-label="Black boxes, blind spots and dark tunnels" />
              <div className="blg-th">
                <img src="/assets/blog/bb-thumb.webp" alt="" loading="lazy" />
              </div>
              <div className="blg-meta">
                <span className="blg-cat">
                  Business Observability
                </span>
                <time dateTime="2026-11-16">
                  November 16, 2026
                </time>
              </div>
              <h3>
                Black boxes, blind spots and dark tunnels
              </h3>
              <p>
                What your company cannot see also decides its results. How to observe what you control and what you don’t.
              </p>
              <ul className="blg-tags">
                <li>
                  Fundamentals
                </li>
                <li>
                  Operations
                </li>
              </ul>
            </article>
            <article className="blg-card">
              <Link href="/en/blog/bo11y-vs-bi" className="blg-link" aria-label="Beyond BI and Data Lakes: seeing the business as it happens" />
              <div className="blg-th">
                <img src="/assets/blog/bi-thumb.webp" alt="" loading="lazy" />
              </div>
              <div className="blg-meta">
                <span className="blg-cat">
                  Business Observability
                </span>
                <time dateTime="2026-11-16">
                  November 16, 2026
                </time>
              </div>
              <h3>
                Beyond BI and Data Lakes: seeing the business as it happens
              </h3>
              <p>
                BI and Data Lakes explain what happened. Business Observability shows what is happening, and why it completes them.
              </p>
              <ul className="blg-tags">
                <li>
                  Fundamentals
                </li>
                <li>
                  Data Lakes
                </li>
              </ul>
            </article>
            <article className="blg-card">
              <Link href="/en/blog/ai-observability" className="blg-link" aria-label="Why observability is the foundation of AI in the enterprise" />
              <div className="blg-th">
                <img src="/assets/blog/ia-thumb.webp" alt="" loading="lazy" />
              </div>
              <div className="blg-meta">
                <span className="blg-cat">
                  Applied AI
                </span>
                <time dateTime="2026-11-12">
                  November 12, 2026
                </time>
              </div>
              <h3>
                Why observability is the foundation of AI in the enterprise
              </h3>
              <p>
                Without live signals, AI answers with whatever is at hand. Here is how we give it context, evidence and control.
              </p>
              <ul className="blg-tags">
                <li>
                  Applied AI
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
