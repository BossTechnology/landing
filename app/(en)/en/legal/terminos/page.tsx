import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/legal/terminos",
  title: "Terms of Service · Boss.Technology",
  description: "Business Observability gives leaders the power to see and understand everything happening across their companies, and act in real time.",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1">
        <section className="ph ph--sm" data-nav="dark">
          <div className="ph-in">
            <span className="ph-eb">
              Legal
            </span>
            <h1 className="ph-h1">
              Terms of Service
            </h1>
            <p className="ph-lead">
              Last updated: October 2026
            </p>
          </div>
        </section>
        <div className="legal-col mx-auto max-w-[1200px] px-5 py-12 lg:px-6 lg:py-16">
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Use of the site
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                Accessing and using this site implies acceptance of these terms. The content is provided for information purposes about Boss.Technology products.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Intellectual property
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                The trademarks, logos and content on this site belong to Boss.Technology and may not be reproduced without prior authorization.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Limitation of liability
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                We aim to keep the information up to date, but we do not guarantee it is error free or that the service will be uninterrupted.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Contact
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                {"For any questions about these terms, write to us at "}
                <a href="mailto:admin@boss.technology">
                  admin@boss.technology
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
