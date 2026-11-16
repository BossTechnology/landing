import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/casos/caso-3",
  title: "Pinch Jobs · Business cases · Boss.Technology",
  description: "Pinch Jobs: hundreds of simultaneous jobs, under one command",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1">
        <article>
          <section className="ph" data-nav="dark">
            <div className="ph-in">
              <Link className="ph-back" href="/en/casos">
                ← All customer stories
              </Link>
              <span className="ph-eb">
                Business case · Pinch Jobs
              </span>
              <h1 className="ph-h1">
                Pinch Jobs: hundreds of simultaneous jobs, under one command
              </h1>
            </div>
          </section>
          <div className="ph-cover">
            <img src="/assets/brand/case-pinchjobs.jpg" alt="" className="size-full object-cover" />
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-10 lg:px-6 lg:py-14">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Services
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Cleaning
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Field operations
              </span>
            </div>
          </div>
          <div className="mx-auto max-w-[1200px] px-5 pb-8 lg:px-6">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
              <aside className="lg:w-[280px] lg:shrink-0">
                <div className="rounded-2xl bg-paper p-6 lg:sticky lg:top-24">
                  <dl className="space-y-5">
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Industry
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Cleaning services
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Region
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        United States
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Focus
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Field operations, from order to payment
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Products
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        BzzzBX, Metamap, Actionables, Applied AI
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>
              <div className="min-w-0 max-w-[680px] flex-1 pb-8 cs">
                <section className="cs-sec">
                  <p className="cs-lead">
                    In a service company, the business happens on the street: every job is an order, a crew on the move and a payment to confirm. Pinch Jobs now sees that whole journey in real time, and runs it with AI.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The challenge
                  </p>
                  <h2>
                    Hundreds of jobs, many moving parts
                  </h2>
                  <p>
                    Every week, Pinch Jobs coordinates hundreds of cleaning services: incoming requests, customer confirmations, a schedule that keeps changing, crews moving between addresses and payments that need to close.
                  </p>
                  <p>
                    Each piece lived in its own tool. Knowing how the day was going, which job was running late or which payment was still pending meant cross-checking information by hand, usually too late.
                  </p>
                  <p>
                    To grow without losing control, leadership needed to see the whole operation, from order to payment, as one system.
                  </p>
                </section>
                <blockquote className="cs-sec cs-quote">
                  <p>
                    Every service is a promise to a customer. You need to see it being kept, not find out afterwards.
                  </p>
                </blockquote>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The approach
                  </p>
                  <h2>
                    From order to payment, in a single view
                  </h2>
                  <p>
                    {"With "}
                    <b>
                      BzzzBX
                    </b>
                    {" as the core and "}
                    <b>
                      Metamap
                    </b>
                    {" as the operations center, Pinch Jobs manages every work order, the schedule, confirmations, where each crew is and when the service is done in one place, down to the last step: payment confirmation."}
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Receive, reason, respond
                    </p>
                    <div className="cs-flow">
                      <ul className="src">
                        <li>
                          Requests and work orders
                        </li>
                        <li>
                          Schedule and confirmations
                        </li>
                        <li>
                          Crews in the field
                        </li>
                        <li>
                          Service completion
                        </li>
                        <li>
                          Payment systems
                        </li>
                      </ul>
                      <span className="cs-arw" aria-hidden="true">
                        →
                      </span>
                      <div className="cs-core">
                        <b>
                          Bzzz
                          <span>
                            BX
                          </span>
                        </b>
                        <ol>
                          <li>
                            <b>
                              Receives
                            </b>
                            every service event
                          </li>
                          <li>
                            <b>
                              Reasons
                            </b>
                            order, crew, customer and payment
                          </li>
                          <li>
                            <b>
                              Responds
                            </b>
                            alerts, actions and memory
                          </li>
                        </ol>
                      </div>
                      <span className="cs-arw o" aria-hidden="true">
                        →
                      </span>
                      <ul className="out">
                        <li>
                          Metamap: live operations
                        </li>
                        <li>
                          Delay alerts
                        </li>
                        <li>
                          Payment follow-up
                        </li>
                        <li>
                          AI on business data
                        </li>
                      </ul>
                    </div>
                    <p className="cs-cap">
                      BzzzBX connects to the tools Pinch Jobs already uses: it does not replace its scheduling system or payment gateway.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Day to day
                  </p>
                  <h2>
                    What operations sees and does
                  </h2>
                  <div className="cs-hub">
                    <ul style={{ marginTop: "6px" }}>
                      <li>
                        <b>
                          Work orders
                        </b>
                        <span>
                          Every request with its status, from the moment it arrives until it closes.
                        </span>
                      </li>
                      <li>
                        <b>
                          Schedule and confirmations
                        </b>
                        <span>
                          Which services are confirmed, which changed and which need a call to the customer.
                        </span>
                      </li>
                      <li>
                        <b>
                          Live crews
                        </b>
                        <span>
                          Where each crew is, which job it is on and whether it is on time.
                        </span>
                      </li>
                      <li>
                        <b>
                          Service completed
                        </b>
                        <span>
                          Every job closed as it happens, with its evidence.
                        </span>
                      </li>
                      <li>
                        <b>
                          Payments
                        </b>
                        <span>
                          Which services are paid, which are on the way and which need follow-up.
                        </span>
                      </li>
                      <li>
                        <b>
                          One view
                        </b>
                        <span>
                          The whole day’s operation on one map and one dashboard, no tool-hopping.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Applied AI
                  </p>
                  <h2>
                    From a question to an automatic action
                  </h2>
                  <p>
                    On the same contextualized data, Pinch Jobs connected its AI to BzzzBX through a governed bridge. The team asks questions in natural language, builds its own views and scenarios, and gets answers backed by evidence.
                  </p>
                  <div className="cs-ask">
                    <div className="q">
                      Which 10 customers have the highest outstanding balance, and since when?
                    </div>
                    <div className="a">
                      These 10 customers carry the largest receivable this month; three have services completed over 30 days ago with no confirmed payment. Here is the list, sorted, with the last service and payment status.
                      <small>
                        Evidence: work orders, service closures and payment systems · illustrative example
                      </small>
                    </div>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    {"When a question becomes routine, like the customers who owe the most or the crews with the most reschedules, it stops being an AI query: it becomes a BzzzBX "}
                    <b>
                      Actionable
                    </b>
                    {" that runs on its own, notifies the owner and triggers the action."}
                  </p>
                  <div className="cs-chain" style={{ marginTop: "18px" }}>
                    <div className="cs-ch" style={{ background: "var(--brand-paper-2)", borderColor: "var(--border)" }}>
                      <b style={{ color: "var(--muted-foreground)" }}>
                        One-off query
                      </b>
                      <ol>
                        <li>
                          Someone asks
                        </li>
                        <li>
                          AI analyzes
                        </li>
                        <li>
                          Answer on the spot
                        </li>
                      </ol>
                    </div>
                    <div className="cs-ch good">
                      <b>
                        With Actionables
                      </b>
                      <ol>
                        <li>
                          Pattern detected
                        </li>
                        <li>
                          Runs automatically
                        </li>
                        <li>
                          Owner alerted
                        </li>
                        <li>
                          Action executed
                        </li>
                      </ol>
                    </div>
                  </div>
                  <p style={{ marginTop: "20px" }}>
                    <b>
                      Lower AI cost.
                    </b>
                    {" AI solves a process the first time; once it becomes recurring, BzzzBX turns it into an Actionable that runs without consuming models. AI spend stops growing with every user and goes where it adds judgment."}
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The business case
                  </p>
                  <h2>
                    Three fronts of value
                  </h2>
                  <p>
                    The value is not in seeing the map, but in what the company does with it.
                  </p>
                  <div className="cs-fr" style={{ marginTop: "18px" }}>
                    <article className="main">
                      <small>
                        Revenue
                      </small>
                      <h3>
                        Faster collection
                      </h3>
                      <ul>
                        <li>
                          Pending payments visible instantly
                        </li>
                        <li>
                          Automatic balance follow-up
                        </li>
                        <li>
                          Fewer services left unbilled
                        </li>
                      </ul>
                      <p className="k">
                        Days to collect · outstanding balance
                      </p>
                    </article>
                    <article>
                      <small>
                        Operations
                      </small>
                      <h3>
                        More services on time
                      </h3>
                      <ul>
                        <li>
                          Delays detected as they happen
                        </li>
                        <li>
                          Schedule adjusted with live data
                        </li>
                        <li>
                          Crews assigned where needed
                        </li>
                      </ul>
                      <p className="k">
                        On-time rate · reschedules
                      </p>
                    </article>
                    <article>
                      <small>
                        Scale
                      </small>
                      <h3>
                        Grow without losing control
                      </h3>
                      <ul>
                        <li>
                          One view instead of several tools
                        </li>
                        <li>
                          Automated routines, not manual ones
                        </li>
                        <li>
                          Lower AI spend on recurring tasks
                        </li>
                      </ul>
                      <p className="k">
                        Services per coordinator
                      </p>
                    </article>
                  </div>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    What Boss delivers
                  </p>
                  <h2>
                    Three layers on top of what Pinch Jobs already has
                  </h2>
                  <div className="cs-layers" style={{ marginTop: "20px" }}>
                    <Link className="cs-layer" href="/en/productos/plataformas">
                      <i>
                        1
                      </i>
                      <div>
                        <b>
                          BzzzBX core
                        </b>
                        <span>
                          Joins orders, schedule, crews and payments into one real-time source of truth.
                        </span>
                        <em>
                          Discover BzzzBX →
                        </em>
                      </div>
                    </Link>
                    <Link className="cs-layer" href="/en/productos/aplicaciones">
                      <i>
                        2
                      </i>
                      <div>
                        <b>
                          Metamap and Actionables
                        </b>
                        <span>
                          Operations on a live map, plus routines that run on their own with alerts and actions.
                        </span>
                        <em>
                          See Engines →
                        </em>
                      </div>
                    </Link>
                    <Link className="cs-layer" href="/en/ia-aplicada">
                      <i>
                        3
                      </i>
                      <div>
                        <b>
                          AI on the same reality
                        </b>
                        <span>
                          Natural-language questions, with evidence, on business data.
                        </span>
                        <em>
                          Applied AI →
                        </em>
                      </div>
                    </Link>
                  </div>
                  <Link className="cs-cta" href="/en/contacto">
                    Book a meeting
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </section>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-6 lg:py-20">
            <h2 className="sec-title cs-more">
              More business cases
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link className="group flex flex-col overflow-hidden rounded-2xl bg-paper-2 ring-1 ring-ink/5 transition-shadow hover:shadow-lg" href="/en/casos/caso-4">
                <div className="h-[180px] overflow-hidden bg-[#d9d9d9]">
                  <img src="/assets/brand/case-mineria.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="font-display text-body-l font-semibold leading-snug text-ink">
                    Mining: maintenance that gets ahead of failure and syncs the whole mine
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-body-m text-accent-base">
                    Read story
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
              <Link className="group flex flex-col overflow-hidden rounded-2xl bg-paper-2 ring-1 ring-ink/5 transition-shadow hover:shadow-lg" href="/en/casos/caso-5">
                <div className="h-[180px] overflow-hidden bg-[#d9d9d9]">
                  <img src="/assets/brand/case-restaurantes.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="font-display text-body-l font-semibold leading-snug text-ink">
                    Restaurants: from order to table, with no blind spots
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-body-m text-accent-base">
                    Read story
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
              <Link className="group flex flex-col overflow-hidden rounded-2xl bg-paper-2 ring-1 ring-ink/5 transition-shadow hover:shadow-lg" href="/en/casos/caso-1">
                <div className="h-[180px] overflow-hidden bg-[#d9d9d9]">
                  <img src="/assets/brand/case-febor.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="font-display text-body-l font-semibold leading-snug text-ink">
                    FEBOR: every service channel, understood in real time
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-body-m text-accent-base">
                    Read story
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <section className="px-5 lg:px-6 sec-y sec-cta">
            <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
              <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
                Boss makes understanding your business effortless
              </h2>
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
        </article>
      </main>
    </>
  );
}
