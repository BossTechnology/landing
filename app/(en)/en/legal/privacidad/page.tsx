import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/legal/privacidad",
  title: "Privacy Policy · Boss.Technology",
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
              Privacy Policy
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
                What data we collect
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                We collect the data you provide when filling in the contact form: name, email, company and the message you send us.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                How we use it
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                We use that data only to reply to your request and follow up commercially. We do not sell it or share it with third parties for advertising.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Retention
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                We keep the information for as long as needed to handle your request and comply with our legal obligations.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Your rights
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                {"You can request access, correction or deletion of your data by writing to "}
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
