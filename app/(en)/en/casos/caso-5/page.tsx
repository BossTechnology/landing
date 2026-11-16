import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/casos/caso-5",
  title: "Restaurant chain · Business cases · Boss.Technology",
  description: "Restaurants: from order to table, with no blind spots",
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
                Business case · Restaurants
              </span>
              <h1 className="ph-h1">
                Restaurants: from order to table, with no blind spots
              </h1>
            </div>
          </section>
          <div className="ph-cover">
            <img src="/assets/brand/case-restaurantes.jpg" alt="" className="size-full object-cover" />
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-10 lg:px-6 lg:py-14">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Restaurants
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Chains
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Store operations
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
                        Restaurant chains
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Focus
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Order journey and cost per location
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Products
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        BzzzBX, Momentum, Metamap, monsterMETER
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Type
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Business case · illustrative values
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>
              <div className="min-w-0 max-w-[680px] flex-1 pb-8 cs">
                <section className="cs-sec">
                  <p className="cs-lead">
                    A restaurant chain can see every order, every register and every location while service is happening. Most still find out the next day, in the sales report.
                  </p>
                  <div className="cs-scene">
                    <time>
                      Friday, 8:15 PM · peak hour
                    </time>
                    <p>
                      At one of the chain’s busiest locations, several things happen at once:
                    </p>
                    <ul>
                      <li>
                        One of the registers starts declining card payments.
                      </li>
                      <li>
                        The kitchen is two people short and orders pile up.
                      </li>
                      <li>
                        Delivery orders go out late and some are cancelled.
                      </li>
                      <li>
                        The walk-in cooler has been above temperature for an hour.
                      </li>
                    </ul>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    Each system recorded its part. No one saw the whole chain until the damage was done.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The problem
                  </p>
                  <h2>
                    Each area sees its stretch. No one sees the whole order.
                  </h2>
                  <p>
                    Sales, payments, orders, staff and utilities live in different systems. A register problem turns into incomplete orders, then waits and cancellations, and finally lost sales and margin. But that chain only shows up once the signals are connected.
                  </p>
                  <figure className="cs-fig">
                    <p className="cs-fig-t">
                      Each area sees one part
                    </p>
                    <div className="cs-silos">
                      <div className="cs-silo">
                        <b>
                          Registers and payments
                        </b>
                        <span className="y">
                          <i>
                            Sees:
                          </i>
                          {" sales and tickets"}
                        </span>
                        <span className="n">
                          <i>
                            Misses:
                          </i>
                          {" which orders are lost when a payment method fails"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Kitchen
                        </b>
                        <span className="y">
                          <i>
                            Sees:
                          </i>
                          {" orders in preparation"}
                        </span>
                        <span className="n">
                          <i>
                            Misses:
                          </i>
                          {" whether there is enough staff for peak hour"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Delivery
                        </b>
                        <span className="y">
                          <i>
                            Sees:
                          </i>
                          {" dispatched orders"}
                        </span>
                        <span className="n">
                          <i>
                            Misses:
                          </i>
                          {" where each order is delayed and why"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Back office
                        </b>
                        <span className="y">
                          <i>
                            Sees:
                          </i>
                          {" utility bills"}
                        </span>
                        <span className="n">
                          <i>
                            Misses:
                          </i>
                          {" which location overconsumes, until the bill arrives"}
                        </span>
                      </div>
                    </div>
                  </figure>
                </section>
                <blockquote className="cs-sec cs-quote">
                  <p>
                    Knowing a system works is not enough. What matters is whether the customer can buy and whether the order arrives.
                  </p>
                </blockquote>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The solution
                  </p>
                  <h2>
                    A central nervous system for the whole chain
                  </h2>
                  <p>
                    <b>
                      BzzzBX
                    </b>
                    {" connects to what the chain already has, receives each signal once, gives it the context of location, process and impact, and responds in seconds. Three engines run on that core: "}
                    <b>
                      Momentum
                    </b>
                    {" follows each order’s journey, "}
                    <b>
                      Metamap
                    </b>
                    {" shows every location on an operations map and "}
                    <b>
                      monsterMETER
                    </b>
                    {" makes utility consumption and costs visible."}
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Receive, reason, respond
                    </p>
                    <div className="cs-flow">
                      <ul className="src">
                        <li>
                          POS and registers
                        </li>
                        <li>
                          Payments
                        </li>
                        <li>
                          Orders and delivery
                        </li>
                        <li>
                          Staff and shifts
                        </li>
                        <li>
                          Power, water and gas
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
                            every signal, once
                          </li>
                          <li>
                            <b>
                              Reasons
                            </b>
                            location, order, process and impact
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
                          Momentum: order journey
                        </li>
                        <li>
                          Metamap: location map
                        </li>
                        <li>
                          monsterMETER: costs
                        </li>
                        <li>
                          Impact-ranked alerts
                        </li>
                      </ul>
                    </div>
                    <p className="cs-cap">
                      BzzzBX does not replace the POS or the ordering system: it connects to them and runs in the chain’s own cloud.
                    </p>
                  </figure>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Metamap · locations that need attention now
                    </p>
                    <div className="cs-mach">
                      <div className="cs-mrow hd">
                        <span>
                          Location
                        </span>
                        <span>
                          Orders on time
                        </span>
                        <span>
                          Decision
                        </span>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Location 07
                          </b>
                          <small>
                            Payments declined at register 2
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar w">
                            <i style={{ width: "64%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Deteriorating
                            </span>
                            <span>
                              64 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="w">
                            Act now
                          </em>
                          <br />
                          Switch to backup register and alert the manager
                        </div>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Location 12
                          </b>
                          <small>
                            Kitchen staffing
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar w">
                            <i style={{ width: "78%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Below target
                            </span>
                            <span>
                              78 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="w">
                            Reinforce
                          </em>
                          <br />
                          Move one person from a nearby location
                        </div>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Location 03
                          </b>
                          <small>
                            Normal operation
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar ">
                            <i style={{ width: "94%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Healthy
                            </span>
                            <span>
                              94 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="">
                            No action
                          </em>
                          <br />
                          Shift plan stays
                        </div>
                      </div>
                    </div>
                    <p className="cs-cap">
                      Illustrative values.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Cause and effect
                  </p>
                  <h2>
                    The same failure, two different endings
                  </h2>
                  <div className="cs-chain">
                    <div className="cs-ch bad">
                      <b>
                        Without Business Observability
                      </b>
                      <ol>
                        <li>
                          Payment failure
                        </li>
                        <li>
                          Incomplete orders
                        </li>
                        <li>
                          Waits and cancellations
                        </li>
                        <li>
                          Lost sales and margin
                        </li>
                      </ol>
                    </div>
                    <div className="cs-ch good">
                      <b>
                        With BzzzBX
                      </b>
                      <ol>
                        <li>
                          Failure detected in seconds
                        </li>
                        <li>
                          Location manager alerted
                        </li>
                        <li>
                          Backup register on
                        </li>
                        <li>
                          Sales protected
                        </li>
                      </ol>
                    </div>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    The same goes for costs: a cooler working too hard or abnormal gas use shows up the same day, per location, before the bill arrives.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The business case
                  </p>
                  <h2>
                    Three fronts of return
                  </h2>
                  <p>
                    {"Return is measured with "}
                    <b>
                      Bo11y
                    </b>
                    , from the baselines of the first connected locations.
                  </p>
                  <div className="cs-fr" style={{ marginTop: "22px" }}>
                    <article>
                      <small>
                        Costs
                      </small>
                      <h3>
                        Lower cost per location
                      </h3>
                      <ul>
                        <li>
                          Abnormal consumption spotted instantly
                        </li>
                        <li>
                          Staffing matched to real demand
                        </li>
                        <li>
                          Fewer manual reports
                        </li>
                      </ul>
                      <p className="k">
                        Utility cost per location
                      </p>
                    </article>
                    <article className="main">
                      <small>
                        Revenue
                      </small>
                      <h3>
                        More completed orders
                      </h3>
                      <ul>
                        <li>
                          Fewer cancellations and lost orders
                        </li>
                        <li>
                          Registers and payments up at peak hour
                        </li>
                        <li>
                          On-time deliveries
                        </li>
                      </ul>
                      <p className="k">
                        Completed orders · on-time deliveries
                      </p>
                    </article>
                    <article>
                      <small>
                        Risk
                      </small>
                      <h3>
                        Fewer surprises
                      </h3>
                      <ul>
                        <li>
                          Failures detected in seconds
                        </li>
                        <li>
                          Cold chain watched
                        </li>
                        <li>
                          Traceability per location
                        </li>
                      </ul>
                      <p className="k">
                        Incidents handled on time
                      </p>
                    </article>
                  </div>
                  <p style={{ marginTop: "26px" }}>
                    The heaviest front is usually revenue: every order not lost is a sale. Adjust the assumptions:
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Sales protected per year
                    </p>
                    <div className="cs-calc" data-loc="en-US">
                      <div>
                        <label>
                          <span className="v">
                            Locations in the chain
                            <b data-o="n">
                              40
                            </b>
                          </span>
                          <input type="range" min="10" max="150" step="5" defaultValue="40" data-i="n" aria-label="Locations in the chain" />
                        </label>
                        <label>
                          <span className="v">
                            Orders recovered per location per day
                            <b data-o="p">
                              6
                            </b>
                          </span>
                          <input type="range" min="1" max="30" step="1" defaultValue="6" data-i="p" aria-label="Orders recovered per location per day" />
                        </label>
                        <label>
                          <span className="v">
                            Average ticket (assumption)
                            <b data-o="t">
                              US$15
                            </b>
                          </span>
                          <input type="range" min="5" max="40" step="1" defaultValue="15" data-i="t" aria-label="Average ticket (assumption)" />
                        </label>
                      </div>
                      <div className="cs-res">
                        <small>
                          Orders recovered per year
                        </small>
                        <b data-o="h">
                          -
                        </b>
                        <span>
                          orders lost today
                        </span>
                        <div className="m">
                          <small>
                            Sales protected
                          </small>
                          <b data-o="m">
                            -
                          </b>
                          <span>
                            before adding cost savings and avoided risk
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="cs-formula">
                      Locations × orders recovered per day × 365 × average ticket
                    </p>
                    <p className="cs-cap">
                      Figures are assumptions; the real case is calculated with each chain’s data.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    How to start
                  </p>
                  <h2>
                    Two locations first, then the whole network
                  </h2>
                  <ol className="cs-steps">
                    <li>
                      <span>
                        <b>
                          Pilot in 45 days.
                        </b>
                        {" BzzzBX running in the chain’s cloud and the first two locations connected, with dashboards and alerts."}
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>
                          Rollout.
                        </b>
                        {" The same procedure extends to more locations and the engines switch on with real baselines."}
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>
                          Full network.
                        </b>
                        {" The chain adds locations at its own pace, with no new integration per location."}
                      </span>
                    </li>
                  </ol>
                  <Link className="cs-cta" href="/en/contacto">
                    Book a meeting
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                  <p className="cs-note">
                    Business case built on typical restaurant-chain scenarios. Values are illustrative and are replaced with each chain’s own.
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-6 lg:py-20">
            <h2 className="sec-title cs-more">
              More business cases
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <Link className="group flex flex-col overflow-hidden rounded-2xl bg-paper-2 ring-1 ring-ink/5 transition-shadow hover:shadow-lg" href="/en/casos/caso-3">
                <div className="h-[180px] overflow-hidden bg-[#d9d9d9]">
                  <img src="/assets/brand/case-pinchjobs.jpg" alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="font-display text-body-l font-semibold leading-snug text-ink">
                    Pinch Jobs: hundreds of simultaneous jobs, under one command
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
