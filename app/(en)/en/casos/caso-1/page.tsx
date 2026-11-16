import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/casos/caso-1",
  title: "FEBOR · Business cases · Boss.Technology",
  description: "FEBOR: every service channel, understood in real time",
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
                Business case · FEBOR
              </span>
              <h1 className="ph-h1">
                FEBOR: every service channel, understood in real time
              </h1>
            </div>
          </section>
          <div className="ph-cover">
            <img src="/assets/brand/case-febor.jpg" alt="" className="size-full object-cover" />
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-10 lg:px-6 lg:py-14">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Financial services
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Cooperatives
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Member experience
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
                        Organization
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Financial cooperative · Colombia
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Focus
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Member experience
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Products
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        BzzzBX, BOB, Flashboards
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Deployment
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Google Cloud · FEBOR’s own cloud
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>
              <div className="min-w-0 max-w-[680px] flex-1 pb-8 cs">
                <section className="cs-sec">
                  <p className="cs-lead">
                    For a cooperative, every interaction with a member counts. FEBOR now sees all its service channels as one system, and acts in time instead of finding out later.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The challenge
                  </p>
                  <h2>
                    Many channels, one experience
                  </h2>
                  <p>
                    FEBOR serves its members by phone, messaging, digital channels, forms and branches. As in most organizations, each channel runs on its own tool with its own reports.
                  </p>
                  <p>
                    For leadership, that means a fragmented view: understanding how service is going requires pulling information from several sources, usually after things have happened.
                  </p>
                  <p>
                    The signals to get ahead were already there: team status, response times, pending requests, satisfaction surveys. The challenge was to bring them together, give them context and turn them into actions before the member noticed.
                  </p>
                </section>
                <blockquote className="cs-sec cs-quote">
                  <p>
                    The goal is not to measure more. It is to find out before the member does.
                  </p>
                </blockquote>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The approach
                  </p>
                  <h2>
                    A single view of service
                  </h2>
                  <p>
                    {"With "}
                    <b>
                      Business Observability
                    </b>
                    , FEBOR moved from reviewing reports per channel to seeing all of service in real time, by channel and by team, with alerts that reach the right owner and defined actions for each situation.
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Receive, reason, respond
                    </p>
                    <div className="cs-flow">
                      <ul className="src">
                        <li>
                          Phone
                        </li>
                        <li>
                          Messaging and chat
                        </li>
                        <li>
                          Digital channels
                        </li>
                        <li>
                          Request forms
                        </li>
                        <li>
                          Branches
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
                            interactions from every channel
                          </li>
                          <li>
                            <b>
                              Reasons
                            </b>
                            context, capacity and impact
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
                          Unified dashboard
                        </li>
                        <li>
                          Alerts to the owner
                        </li>
                        <li>
                          Actions and escalation
                        </li>
                        <li>
                          Daily summary
                        </li>
                      </ul>
                    </div>
                    <p className="cs-cap">
                      BzzzBX connects to the platforms FEBOR already uses and runs in its own cloud: data never leaves its infrastructure, and personal information is protected under Colombian law.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Day to day
                  </p>
                  <h2>
                    What the cooperative sees and does
                  </h2>
                  <div className="cs-hub">
                    <ul style={{ marginTop: "6px" }}>
                      <li>
                        <b>
                          Live availability
                        </b>
                        <span>
                          How many people are serving each channel right now, and who they are.
                        </span>
                      </li>
                      <li>
                        <b>
                          Service level
                        </b>
                        <span>
                          Response times, handled and pending interactions, by channel and by team.
                        </span>
                      </li>
                      <li>
                        <b>
                          Requests on time
                        </b>
                        <span>
                          Each request with its status and deadline; those close to the limit are flagged before they expire.
                        </span>
                      </li>
                      <li>
                        <b>
                          Quality and satisfaction
                        </b>
                        <span>
                          The member’s rating next to the interaction behind it, so action targets the cause.
                        </span>
                      </li>
                      <li>
                        <b>
                          Consistent information
                        </b>
                        <span>
                          The same answer, whichever channel the member uses.
                        </span>
                      </li>
                      <li>
                        <b>
                          Daily summary
                        </b>
                        <span>
                          An automatic close with alerts, actions taken and open items, ready to download.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    From alert to action
                  </p>
                  <h2>
                    Acting while it happens
                  </h2>
                  <p>
                    Every alert has an owner, an action and an escalation path, and it arrives through the tools the team already uses: Teams, email or WhatsApp. If no one responds, it escalates; if it repeats, it is recorded for feedback. The difference shows in how the same situation ends:
                  </p>
                  <div className="cs-chain" style={{ marginTop: "18px" }}>
                    <div className="cs-ch bad">
                      <b>
                        Without Business Observability
                      </b>
                      <ol>
                        <li>
                          A delay builds up
                        </li>
                        <li>
                          The member waits
                        </li>
                        <li>
                          It shows up at day’s end
                        </li>
                        <li>
                          The member complains
                        </li>
                      </ol>
                    </div>
                    <div className="cs-ch good">
                      <b>
                        With BzzzBX
                      </b>
                      <ol>
                        <li>
                          Detected in minutes
                        </li>
                        <li>
                          Alert to the owner
                        </li>
                        <li>
                          Capacity is redistributed
                        </li>
                        <li>
                          The member is served
                        </li>
                      </ol>
                    </div>
                  </div>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The business case
                  </p>
                  <h2>
                    Three fronts of value
                  </h2>
                  <p>
                    The value is not in the dashboard, but in what the cooperative can do with it.
                  </p>
                  <div className="cs-fr" style={{ marginTop: "18px" }}>
                    <article className="main">
                      <small>
                        Experience
                      </small>
                      <h3>
                        Better-served members
                      </h3>
                      <ul>
                        <li>
                          Fewer waits and missed contacts
                        </li>
                        <li>
                          Timely replies on every channel
                        </li>
                        <li>
                          Issues solved before the complaint
                        </li>
                      </ul>
                      <p className="k">
                        Service level · satisfaction · retention
                      </p>
                    </article>
                    <article>
                      <small>
                        Productivity
                      </small>
                      <h3>
                        Simpler management
                      </h3>
                      <ul>
                        <li>
                          One view instead of several tools
                        </li>
                        <li>
                          Automatic daily summary
                        </li>
                        <li>
                          Capacity placed where it is needed
                        </li>
                      </ul>
                      <p className="k">
                        Management time · load per team
                      </p>
                    </article>
                    <article>
                      <small>
                        Risk
                      </small>
                      <h3>
                        Control and traceability
                      </h3>
                      <ul>
                        <li>
                          Alerts with owner and record
                        </li>
                        <li>
                          Data on FEBOR’s infrastructure
                        </li>
                        <li>
                          Audit-ready information
                        </li>
                      </ul>
                      <p className="k">
                        Events handled on time
                      </p>
                    </article>
                  </div>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    What Boss delivers
                  </p>
                  <h2>
                    Three layers on top of what FEBOR already has
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
                          Joins every channel into one source of truth, in FEBOR’s cloud.
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
                          Dashboards and alerts
                        </b>
                        <span>
                          Live service, by channel and by team, with alerts and a daily summary.
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
                          Answer quality and information consistency across channels.
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
