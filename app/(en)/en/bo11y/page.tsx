import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/bo11y",
  title: "Bo11y · What Business Observability is · Boss.Technology",
  description: "What Business Observability (Bo11y) is: seeing, understanding and acting on the whole business as it happens. How it relates to monitoring, BI, data lakes and artificial intelligence.",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1 bz bo">
        {"\n"}
        <section className="bo-hero bz-hero" data-nav="dark">
          <div className="bz-in bo-hero-g">
            <div>
              <span className="bz-eyebrow">
                Bo11y · Business Observability
              </span>
              <h1 className="bo-h1">
                {"Your company, as one "}
                <em>
                  living system
                </em>
                , in real time.
              </h1>
              <p className="bo-def">
                <b>
                  Business Observability
                </b>
                {" captures the live state of your company - operations, performance and behavior - and turns it into decisions and actions."}
              </p>
              <div className="bo-cta">
                <Link className="bz-btn bz-btn--p" href="/en/contacto">
                  Book a meeting
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
                <a className="bz-btn bo-btn-l" href="#ejemplo">
                  See an example
                </a>
              </div>
              <p className="bo-tiny">
                <b>
                  Bo11y
                </b>
                {" is short for Business Observability."}
              </p>
            </div>
            <ol className="bo-loop">
              <li>
                <span className="bz-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <div>
                  <h3>
                    See
                  </h3>
                  <p>
                    Every business signal in one place: systems, machines, people, customers, suppliers and the environment.
                  </p>
                </div>
              </li>
              <li>
                <span className="bz-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                    <path d="M8.5 11h5M11 8.5v5" />
                  </svg>
                </span>
                <div>
                  <h3>
                    Understand
                  </h3>
                  <p>
                    The context behind every data point: what is happening, why, and who it affects.
                  </p>
                </div>
              </li>
              <li>
                <span className="bz-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
                  </svg>
                </span>
                <div>
                  <h3>
                    Act
                  </h3>
                  <p>
                    Prioritize by business impact and respond in time, with alerts, predictions and automated workflows.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec" id="ejemplo">
          <div className="bz-in">
            <div className="bo-c">
              <span className="bo-case">
                <i />
                Example: a commercial distributor, on a Tuesday at 10:00 AM
              </span>
              <h2 className="bz-h2 bo-ej-h">
                {"Orders start shipping late. "}
                <span>
                  When do you find out, and what can you do?
                </span>
              </h2>
            </div>
            <div className="bo-lv">
              <article className="bo-l">
                <p className="bo-l-n">
                  Business Intelligence
                  <em>
                    You find out
                  </em>
                </p>
                <h3>
                  <span className="bo-num">
                    01 ·
                  </span>
                  {" What happened?"}
                </h3>
                <div className="bo-stage" aria-hidden="false">
                  <span className="bo-bars" aria-hidden="true" />
                  <div className="bo-alert">
                    <small>
                      Monthly report · day 30
                    </small>
                    {"On-time deliveries: "}
                    <b>
                      96% → 81%
                    </b>
                    . Two customers have already left.
                  </div>
                  <span className="bo-bars r" aria-hidden="true" />
                </div>
              </article>
              <article className="bo-l">
                <p className="bo-l-n">
                  Monitoring
                  <em>
                    You see
                  </em>
                </p>
                <h3>
                  <span className="bo-num">
                    02 ·
                  </span>
                  {" What is failing right now?"}
                </h3>
                <div className="bo-stage" aria-hidden="false">
                  <span className="bo-bars" aria-hidden="true" />
                  <div className="bo-alert">
                    <small>
                      Alert · 10:05 AM
                    </small>
                    <b>
                      40 orders
                    </b>
                    {" delayed. No cause, no cost."}
                  </div>
                  <span className="bo-bars r" aria-hidden="true" />
                </div>
              </article>
              <article className="bo-l bo-l--b">
                <p className="bo-l-n">
                  Business Observability
                  <em>
                    You act
                  </em>
                </p>
                <h3>
                  <span className="bo-num">
                    03 ·
                  </span>
                  {" What is happening, why, and what do I do now?"}
                </h3>
                <div className="bo-stage" aria-hidden="false">
                  <span className="bo-bars" aria-hidden="true" />
                  <div className="bo-alert">
                    <small>
                      Critical · 10:05 AM
                    </small>
                    <b className="bo-risk">
                      US$120,000 at risk
                    </b>
                    <ul className="bo-ev4">
                      <li>
                        <em>
                          Now
                        </em>
                        <span>
                          40 orders delayed
                        </span>
                      </li>
                      <li>
                        <em>
                          Why
                        </em>
                        <span>
                          warehouse absenteeism
                        </span>
                      </li>
                      <li>
                        <em>
                          Before
                        </em>
                        <span>
                          happened 4 times this year
                        </span>
                      </li>
                      <li>
                        <em>
                          Action
                        </em>
                        <span>
                          reassign shift, notify customers
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="bo-bars r" aria-hidden="true" />
                </div>
              </article>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec" id="tuneles" style={{ paddingTop: "0" }}>
          <div className="bz-in">
            <span className="bz-eyebrow">
              The problem
            </span>
            <h2 className="bz-h2">
              Most of the business happens outside your systems.
            </h2>
            <p className="bz-lead">
              Systems and applications are only one part. The rest happens in machines, people, suppliers and third parties, where almost no one looks in time.
            </p>
            <div className="bo-bb bo-bb2">
              <div>
                <i aria-hidden="true">
                  <svg viewBox="0 0 24 24" strokeLinejoin="round">
                    <path d="M12 2.8 20.5 7.4v9.2L12 21.2 3.5 16.6V7.4Z" fill="#0b0b12" />
                    <path d="M12 2.8 20.5 7.4 12 12 3.5 7.4Z" fill="#3a3a48" />
                    <path d="M12 12v9.2L3.5 16.6V7.4Z" fill="#1c1c26" />
                  </svg>
                </i>
                <b>
                  Black boxes
                </b>
                <span>
                  critical processes with no visibility
                </span>
              </div>
              <div>
                <i aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.9 4.2A10 10 0 0 1 12 4c6 0 9.5 6.5 9.5 6.5-.6 1-1.4 2.1-2.4 3.1M6.6 6.6C3.9 8.3 2.5 12 2.5 12S6 18.5 12 18.5c1.8 0 3.4-.5 4.7-1.3" />
                    <path d="M14.1 14.1a3 3 0 1 1-4.2-4.2M3 3l18 18" />
                  </svg>
                </i>
                <b>
                  Blind spots
                </b>
                <span>
                  data that exists, but no one captures
                </span>
              </div>
            </div>
            <div className="bo-tun" data-bo-tun="">
              <p className="bo-tun-ctx">
                <span className="bo-case">
                  <i />
                  Example: one order at a coffee shop, from the app to the customer
                </span>
              </p>
              <div className="bo-sw" role="group">
                <button type="button" data-v="dark" aria-pressed="true">
                  Today
                </button>
                <button type="button" data-v="lit" aria-pressed="false">
                  With Bo11y
                </button>
              </div>
              <span className="bo-hint">
                Click to see the difference
              </span>
              <ol className="bo-steps">
                <li className="">
                  <small>
                    01
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2" width="10" height="20" rx="2" />
                      <path d="M11 18h2" />
                    </svg>
                  </i>
                  <b>
                    App order
                  </b>
                  <span className="bo-off">
                    Received 10:02
                  </span>
                  <span className="bo-on">
                    Received 10:02
                  </span>
                </li>
                <li className="">
                  <small>
                    02
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20M6 15h4" />
                    </svg>
                  </i>
                  <b>
                    Payment
                  </b>
                  <span className="bo-off">
                    Approved
                  </span>
                  <span className="bo-on">
                    Approved
                  </span>
                </li>
                <li className="mid">
                  <small>
                    03
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21 8-9-5-9 5v8l9 5 9-5Z" />
                      <path d="m3 8 9 5 9-5M12 13v8" />
                    </svg>
                  </i>
                  <b>
                    Supplies
                  </b>
                  <span className="bo-off">
                    No data
                  </span>
                  <span className="bo-on">
                    Milk: 18 % left
                  </span>
                </li>
                <li className="mid">
                  <small>
                    04
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21a8 8 0 0 1 16 0" />
                    </svg>
                  </i>
                  <b>
                    Barista and shift
                  </b>
                  <span className="bo-off">
                    No data
                  </span>
                  <span className="bo-on">
                    One person short on shift
                  </span>
                </li>
                <li className="mid hot">
                  <small>
                    05
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6Z" />
                      <path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17M8 2v3M12 2v3" />
                    </svg>
                  </i>
                  <b>
                    Espresso
                  </b>
                  <span className="bo-off">
                    No data
                  </span>
                  <span className="bo-on">
                    Low pressure · machine 2
                  </span>
                </li>
                <li className="mid">
                  <small>
                    06
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
                      <circle cx="7" cy="18" r="2" />
                      <circle cx="17" cy="18" r="2" />
                    </svg>
                  </i>
                  <b>
                    Delivery
                  </b>
                  <span className="bo-off">
                    No data
                  </span>
                  <span className="bo-on">
                    Rider 6 min late
                  </span>
                </li>
                <li className="">
                  <small>
                    07
                  </small>
                  <i className="bo-si" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z" />
                      <path d="M12 9v3M12 15h.01" />
                    </svg>
                  </i>
                  <b>
                    Customer
                  </b>
                  <span className="bo-off">
                    Complaint at 10:25
                  </span>
                  <span className="bo-on">
                    Customer warned in advance
                  </span>
                </li>
              </ol>
              <div className="bo-blind" aria-hidden="true">
                <span>
                  Blind spot: you have no data on these stages
                </span>
              </div>
              <div className="bo-out bo-out--d">
                <i>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8v5M12 16.5h.01" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </i>
                <div>
                  <small>
                    Today
                  </small>
                  <b>
                    You find out once the customer has already complained.
                  </b>
                </div>
              </div>
              <div className="bo-out bo-out--l">
                <div>
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </i>
                  <small>
                    See
                  </small>
                  <b>
                    Low pressure on machine 2 and a late rider, as it happens.
                  </b>
                </div>
                <div>
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                    </svg>
                  </i>
                  <small>
                    Automate
                  </small>
                  <b>
                    Orders move to machine 1 and dispatch is reassigned.
                  </b>
                </div>
                <div>
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5.1A8 8 0 1 1 21 12Z" />
                      <path d="m8.5 12 2.5 2.5 4.5-4.5" />
                    </svg>
                  </i>
                  <small>
                    Anticipate
                  </small>
                  <b>
                    The customer is notified before they complain.
                  </b>
                </div>
              </div>
            </div>
          </div>
        </section>
        {"\n\n\n"}
        <section className="bz-sec bz-dark" data-nav="dark" id="ia">
          <div className="bz-in">
            <div className="bo-c">
              <span className="bz-eyebrow">
                Bo11y and artificial intelligence
              </span>
              <h2 className="bz-h2">
                AI without observability is like a brain without a body.
              </h2>
              <p className="bz-lead">
                AI agents and copilots are increasingly capable. What they lack is a shared, real-time understanding of the company. Bo11y gives them that.
              </p>
              <p style={{ marginTop: "28px" }}>
                <Link className="bz-btn bz-btn--p" href="/en/ia-aplicada">
                  Discover applied AI
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="bz-sec bo-bx-sec" id="bzzzbx">
          <div className="bz-in">
            <div className="bo-bx3" data-nav="dark">
              <img className="bo-bx3-img" src="/assets/brand/bzzzbx-hero-gold4.webp" alt="" width="2400" height="1340" loading="lazy" decoding="async" />
              <div className="bo-bx3-t">
                <span className="bz-eyebrow">
                  How it works in practice
                </span>
                <h2 className="bz-h2">
                  {"Bo11y is the approach. "}
                  <span>
                    BzzzBX makes it possible.
                  </span>
                </h2>
                <p className="bz-lead">
                  The server that joins every signal in your company into one real-time source of truth.
                </p>
                <ul className="bo-bx3-ck">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                    Connects to what you already have
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                    In your cloud or data center
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                    Your data never leaves
                  </li>
                </ul>
                <Link className="bz-btn bz-btn--p" href="/en/productos/plataformas">
                  Discover BzzzBX
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              What is happening in your business today?
            </h2>
            <p className="sec-sub sec-dark-sub">
              {"Let's talk and discover what Bo11y can show you."}
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
