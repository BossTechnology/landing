import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/casos",
  title: "Business cases · Boss.Technology",
  description: "Real stories from teams already operating with Business Observability.",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1">
        <section className="ph" data-nav="dark">
          <div className="ph-in">
            <span className="ph-eb">
              Customers
            </span>
            <h1 className="ph-h1">
              Business cases
            </h1>
            <p className="ph-lead">
              Real stories from teams already operating with Business Observability.
            </p>
          </div>
        </section>
        <section className="px-5 lg:px-6 sec-y">
          <div className="mx-auto grid max-w-[1152px] gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2">
            <Link className="group flex flex-col" href="/en/casos/caso-1">
              <div className="aspect-[16/10] overflow-hidden rounded-[20px] bg-[#d9d9d9]">
                <img src="/assets/brand/case-febor.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h2 className="cs-card-t">
                FEBOR: every service channel, understood in real time
              </h2>
              <span className="mt-3 inline-flex items-center gap-1.5 text-body-m text-accent-base">
                Read story
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link className="group flex flex-col" href="/en/casos/caso-3">
              <div className="aspect-[16/10] overflow-hidden rounded-[20px] bg-[#d9d9d9]">
                <img src="/assets/brand/case-pinchjobs.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h2 className="cs-card-t">
                Pinch Jobs: hundreds of simultaneous jobs, under one command
              </h2>
              <span className="mt-3 inline-flex items-center gap-1.5 text-body-m text-accent-base">
                Read story
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link className="group flex flex-col" href="/en/casos/caso-4">
              <div className="aspect-[16/10] overflow-hidden rounded-[20px] bg-[#d9d9d9]">
                <img src="/assets/brand/case-mineria.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h2 className="cs-card-t">
                Mining: maintenance that gets ahead of failure and syncs the whole mine
              </h2>
              <span className="mt-3 inline-flex items-center gap-1.5 text-body-m text-accent-base">
                Read story
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link className="group flex flex-col" href="/en/casos/caso-5">
              <div className="aspect-[16/10] overflow-hidden rounded-[20px] bg-[#d9d9d9]">
                <img src="/assets/brand/case-restaurantes.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h2 className="cs-card-t">
                Restaurants: from order to table, with no blind spots
              </h2>
              <span className="mt-3 inline-flex items-center gap-1.5 text-body-m text-accent-base">
                Read story
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </section>
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              On-time decisions that show up in your results.
            </h2>
            <p className="sec-sub sec-dark-sub">
              Lower costs, protected revenue and less risk: every case starts with a measurable business outcome.
            </p>
            <div className="mt-7">
              <Link className="inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-pill px-7 py-3.5 font-display whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-50 bg-accent-base text-on-accent hover:bg-[#3f3ad9]" href="/en/contacto">
                Book a meeting
                <span aria-hidden="true" className="text-[16px] leading-none">
                  →
                </span>
              </Link>
              <Link className="cta-2 inline-flex shrink-0 items-center justify-center gap-2 rounded-pill px-7 font-display whitespace-nowrap" href="/en/productos/plataformas">
                Discover BzzzBX
              </Link>
            </div>
            <ul className="cta-checks">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                </svg>
                In your cloud or data center
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                </svg>
                Your data never leaves
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                </svg>
                Works with your systems
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
