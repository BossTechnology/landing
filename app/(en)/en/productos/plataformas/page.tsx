import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/productos/plataformas",
  title: "BzzzBX · Business Observability Super Server · Boss.Technology",
  description: "BzzzBX is the Business Observability server that joins every system, machine and signal in your company into one real-time source of truth, on your own infrastructure.",
});

export default function Page() {
  return (
    <>
      <main className="flex-1 bz">
        {"\n"}
        <section className="bz-hero bz-hero--rack" data-nav="dark" id="top">
          <div className="bz-hero-bg" aria-hidden="true">
            <img src="/assets/brand/bzzzbx-hero-gold4.webp" alt="" width="2400" height="1340" fetchPriority="high" />
          </div>
          <div className="bz-in">
            <div className="bz-hero-grid">
              <div>
                <span className="bz-kicker">
                  <i />
                  Product
                </span>
                <h1 className="bz-name">
                  Bzzz
                  <span>
                    BX
                  </span>
                </h1>
                <p className="bz-tagline">
                  Business Observability Super Server
                </p>
                <p className="bz-what">
                  Server + platform + engines: all in one.
                </p>
                <p className="bz-sub">
                  Every data source and signal across your company, unified in real time with the power to respond and act as one. In your cloud or your data center.
                </p>
                <div className="bz-cta">
                  <Link className="bz-btn bz-btn--p" href="/en/contacto">
                    Book a meeting
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
                <ul className="bz-checks">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                    </svg>
                    All in one
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                    </svg>
                    In your infrastructure
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                    </svg>
                    Works with your systems
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                    </svg>
                    Open for your apps
                  </li>
                </ul>
              </div>
              <div className="bz-art" aria-hidden="true" />
            </div>
          </div>
        </section>
        {"\n\n"}
        <section className="bz-sec bz-sec--dk" id="como">
          <div className="bz-in">
            <span className="bz-eyebrow">
              How it works
            </span>
            <h2 className="bz-h2">
              All your sources, streaming into a single core.
            </h2>
            <p className="bz-lead">
              The heart of BzzzBX is an event bus built on Apache Kafka: every signal enters once, is processed in motion and becomes available to the whole company.
            </p>
            <div className="fl">
              <ul className="fl-src">
                <li>
                  ERP and finance
                </li>
                <li>
                  CRM and sales
                </li>
                <li>
                  Production and plant
                </li>
                <li>
                  Machinery and IoT
                </li>
                <li>
                  Logistics and fleet
                </li>
                <li>
                  HR and shifts
                </li>
                <li>
                  Customer service
                </li>
                <li>
                  Weather and markets
                </li>
              </ul>
              <svg className="fl-fan" viewBox="0 0 60 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 6.25 C30 6.25 30 50 60 50" />
                <path d="M0 18.75 C30 18.75 30 50 60 50" />
                <path d="M0 31.25 C30 31.25 30 50 60 50" />
                <path d="M0 43.75 C30 43.75 30 50 60 50" />
                <path d="M0 56.25 C30 56.25 30 50 60 50" />
                <path d="M0 68.75 C30 68.75 30 50 60 50" />
                <path d="M0 81.25 C30 81.25 30 50 60 50" />
                <path d="M0 93.75 C30 93.75 30 50 60 50" />
              </svg>
              <div className="fl-down" aria-hidden="true" />
              <div className="fl-core">
                <p className="fl-name">
                  Bzzz
                  <span>
                    BX
                  </span>
                </p>
                <div className="fl-bus">
                  <i />
                  Event bus · Apache Kafka
                </div>
                <div className="fl-stages">
                  <div className="fl-st">
                    <b>
                      Receive
                    </b>
                    <span>
                      Every signal, once and in streaming.
                    </span>
                  </div>
                  <div className="fl-st">
                    <b>
                      Reason
                    </b>
                    <span>
                      Business context and correlation across signals.
                    </span>
                  </div>
                  <div className="fl-st">
                    <b>
                      Respond
                    </b>
                    <span>
                      Real-time reflexes and auditable memory.
                    </span>
                  </div>
                </div>
              </div>
              <div className="fl-down" aria-hidden="true" />
              <svg className="fl-fan out" viewBox="0 0 60 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 50 C30 50 30 8.33 60 8.33" />
                <path d="M0 50 C30 50 30 25.0 60 25.0" />
                <path d="M0 50 C30 50 30 41.67 60 41.67" />
                <path d="M0 50 C30 50 30 58.33 60 58.33" />
                <path d="M0 50 C30 50 30 75.0 60 75.0" />
                <path d="M0 50 C30 50 30 91.67 60 91.67" />
              </svg>
              <ul className="fl-out">
                <li>
                  Alerts
                </li>
                <li>
                  Anomalies
                </li>
                <li>
                  Predictions
                </li>
                <li>
                  Dashboards
                </li>
                <li>
                  AI and agents
                </li>
                <li>
                  Automated workflows
                </li>
              </ul>
            </div>
            <div className="bz-duo">
              <article className="bz-duo-c">
                <p className="bz-row-n">
                  Context from the moment of entry
                </p>
                <h3>
                  Every event arrives with business meaning.
                </h3>
                <p className="d">
                  On entry, every signal receives its business context: the link between technology and business is resolved once.
                </p>
                <div className="bz-vis">
                  <div className="bz-vis-h">
                    <b>
                      Incoming event
                    </b>
                    <span className="bz-ok">
                      Tagged
                    </span>
                  </div>
                  <div className="bz-evt">
                    <p>
                      Order rejected
                    </p>
                    <dl>
                      <div>
                        <dt>
                          Source
                        </dt>
                        <dd>
                          ERP · orders
                        </dd>
                      </div>
                      <div>
                        <dt>
                          Type
                        </dt>
                        <dd>
                          Business event
                        </dd>
                      </div>
                      <div>
                        <dt>
                          Unit
                        </dt>
                        <dd>
                          Retail north
                        </dd>
                      </div>
                      <div>
                        <dt>
                          Correlation
                        </dt>
                        <dd>
                          Order 48213
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="bz-dlq">
                    <span>
                      Quarantine queue
                    </span>
                    <span className="bz-ok">
                      0 events · healthy
                    </span>
                  </div>
                </div>
              </article>
              <article className="bz-duo-c">
                <p className="bz-row-n">
                  Dual Pollinator
                </p>
                <h3>
                  React instantly and keep the truth, at the same time.
                </h3>
                <p className="d">
                  From a single ingestion, every signal follows two parallel paths: one to act now and one to know why.
                </p>
                <div className="bz-vis">
                  <div className="bz-vis-h">
                    <b>
                      Dual Pollinator
                    </b>
                  </div>
                  <div className="bz-fork">
                    <span className="bz-node">
                      <b>
                        One ingestion
                      </b>
                    </span>
                    <svg viewBox="0 0 300 44" fill="none" aria-hidden="true" preserveAspectRatio="none">
                      <path d="M150 0V14Q150 22 142 22H58Q50 22 50 30V44" style={{ stroke: "var(--bzzzbx-glow)" }} strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
                      <path d="M150 14Q150 22 158 22H242Q250 22 250 30V44" style={{ stroke: "var(--indigo-300)" }} strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <div className="bz-paths">
                      <div className="bz-path">
                        <small>
                          Path A · Reflex
                        </small>
                        <b>
                          Act now
                        </b>
                        <span>
                          Real-time alerts, AI and actions.
                        </span>
                        <em>
                          milliseconds
                        </em>
                      </div>
                      <div className="bz-path">
                        <small>
                          Path B · Durable truth
                        </small>
                        <b>
                          Know why
                        </b>
                        <span>
                          A permanent record for evidence and audit.
                        </span>
                        <em>
                          permanent
                        </em>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec" id="conexion" style={{ paddingTop: "0" }}>
          <div className="bz-in">
            <div className="cn-head">
              <div>
                <span className="bz-eyebrow">
                  How we connect
                </span>
                <h2 className="bz-h2">
                  If your company produces data,
                  <br />
                  we connect to it.
                </h2>
                <p className="bz-lead">
                  From the ERP to the plant floor, from the store to the mine. And where data does not exist, we create it.
                </p>
              </div>
              <ul className="cn-leg">
                <li>
                  <i className="sw" />
                  Software and cloud
                </li>
                <li>
                  <i className="ot" />
                  Industry and OT
                </li>
                <li>
                  <i className="ppl" />
                  People and documents
                </li>
                <li>
                  <i className="ext" />
                  External environment
                </li>
              </ul>
            </div>
          </div>
          <div className="cn">
            <div className="cn-row">
              <ul>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M8 6 2 12l6 6M16 6l6 6-6 6" />
                    </svg>
                  </i>
                  REST API
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
                      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
                      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
                    </svg>
                  </i>
                  Webhooks
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="4" r="2" />
                      <circle cx="4" cy="18" r="2" />
                      <circle cx="20" cy="18" r="2" />
                      <path d="M12 6 5 16.3M12 6l7 10.3M6 18h12" />
                    </svg>
                  </i>
                  GraphQL
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
                      <path d="M21 3v5h-5" />
                    </svg>
                  </i>
                  Change data capture (CDC)
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <ellipse cx="12" cy="5" rx="8" ry="3" />
                      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                    </svg>
                  </i>
                  SQL and databases
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M3 10h18M9 10v10" />
                    </svg>
                  </i>
                  ERP
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="9" cy="8" r="4" />
                      <path d="M2 21a7 7 0 0 1 14 0" />
                      <path d="M17 4a4 4 0 0 1 0 8M22 21a6 6 0 0 0-4-5.6" />
                    </svg>
                  </i>
                  CRM
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <path d="M9 6h6M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01" />
                    </svg>
                  </i>
                  Point of sale
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M2 10l10-7 10 7Z" />
                    </svg>
                  </i>
                  Core banking
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </i>
                  OpenTelemetry
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 6h16M4 10h16M4 14h10M4 18h12" />
                    </svg>
                  </i>
                  Logs and Syslog
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="6" rx="2" />
                      <rect x="2" y="14" width="20" height="6" rx="2" />
                      <path d="M6 7h.01M6 17h.01" />
                    </svg>
                  </i>
                  Message queues
                </li>
              </ul>
              <ul aria-hidden="true">
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M8 6 2 12l6 6M16 6l6 6-6 6" />
                    </svg>
                  </i>
                  REST API
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
                      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
                      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
                    </svg>
                  </i>
                  Webhooks
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="4" r="2" />
                      <circle cx="4" cy="18" r="2" />
                      <circle cx="20" cy="18" r="2" />
                      <path d="M12 6 5 16.3M12 6l7 10.3M6 18h12" />
                    </svg>
                  </i>
                  GraphQL
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
                      <path d="M21 3v5h-5" />
                    </svg>
                  </i>
                  Change data capture (CDC)
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <ellipse cx="12" cy="5" rx="8" ry="3" />
                      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                    </svg>
                  </i>
                  SQL and databases
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M3 10h18M9 10v10" />
                    </svg>
                  </i>
                  ERP
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="9" cy="8" r="4" />
                      <path d="M2 21a7 7 0 0 1 14 0" />
                      <path d="M17 4a4 4 0 0 1 0 8M22 21a6 6 0 0 0-4-5.6" />
                    </svg>
                  </i>
                  CRM
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <path d="M9 6h6M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01" />
                    </svg>
                  </i>
                  Point of sale
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M2 10l10-7 10 7Z" />
                    </svg>
                  </i>
                  Core banking
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </i>
                  OpenTelemetry
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 6h16M4 10h16M4 14h10M4 18h12" />
                    </svg>
                  </i>
                  Logs and Syslog
                </li>
                <li className="sw">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="6" rx="2" />
                      <rect x="2" y="14" width="20" height="6" rx="2" />
                      <path d="M6 7h.01M6 17h.01" />
                    </svg>
                  </i>
                  Message queues
                </li>
              </ul>
            </div>
            <div className="cn-row rev">
              <ul>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4M6 13l3-3 3 2 5-5" />
                    </svg>
                  </i>
                  SCADA
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M7 7h4v4H7zM15 7h2M15 11h2M7 15h10" />
                    </svg>
                  </i>
                  PLC
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="5" width="14" height="14" rx="2" />
                      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                    </svg>
                  </i>
                  OPC-UA
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0M12 20h.01" />
                    </svg>
                  </i>
                  MQTT
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="5" width="14" height="14" rx="2" />
                      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                    </svg>
                  </i>
                  Modbus
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 3v18h18" />
                      <path d="m7 15 4-4 3 3 6-7" />
                    </svg>
                  </i>
                  Historians
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="2" />
                      <path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19.1 4.9a10 10 0 0 1 0 14.2M4.9 19.1a10 10 0 0 1 0-14.2" />
                    </svg>
                  </i>
                  IoT sensors
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </i>
                  GPS telemetry
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 20V9l6 4V9l6 4V5l8 5v10Z" />
                    </svg>
                  </i>
                  MES
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8a2.8 2.8 0 0 1-4-4l8-8Z" />
                      <path d="m3 3 6 6" />
                    </svg>
                  </i>
                  Maintenance (CMMS)
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="8" rx="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <path d="M6 6h.01M6 18h.01" />
                    </svg>
                  </i>
                  SNMP
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="14" width="18" height="7" rx="2" />
                      <path d="M7 17.5h.01M11 17.5h.01M8 10a6 6 0 0 1 8 0M5.5 7a10 10 0 0 1 13 0" />
                    </svg>
                  </i>
                  Edge gateways
                </li>
              </ul>
              <ul aria-hidden="true">
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4M6 13l3-3 3 2 5-5" />
                    </svg>
                  </i>
                  SCADA
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M7 7h4v4H7zM15 7h2M15 11h2M7 15h10" />
                    </svg>
                  </i>
                  PLC
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="5" width="14" height="14" rx="2" />
                      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                    </svg>
                  </i>
                  OPC-UA
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0M12 20h.01" />
                    </svg>
                  </i>
                  MQTT
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="5" width="14" height="14" rx="2" />
                      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                    </svg>
                  </i>
                  Modbus
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 3v18h18" />
                      <path d="m7 15 4-4 3 3 6-7" />
                    </svg>
                  </i>
                  Historians
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="2" />
                      <path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19.1 4.9a10 10 0 0 1 0 14.2M4.9 19.1a10 10 0 0 1 0-14.2" />
                    </svg>
                  </i>
                  IoT sensors
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </i>
                  GPS telemetry
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 20V9l6 4V9l6 4V5l8 5v10Z" />
                    </svg>
                  </i>
                  MES
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8a2.8 2.8 0 0 1-4-4l8-8Z" />
                      <path d="m3 3 6 6" />
                    </svg>
                  </i>
                  Maintenance (CMMS)
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="8" rx="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <path d="M6 6h.01M6 18h.01" />
                    </svg>
                  </i>
                  SNMP
                </li>
                <li className="ot">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="14" width="18" height="7" rx="2" />
                      <path d="M7 17.5h.01M11 17.5h.01M8 10a6 6 0 0 1 8 0M5.5 7a10 10 0 0 1 13 0" />
                    </svg>
                  </i>
                  Edge gateways
                </li>
              </ul>
            </div>
            <div className="cn-row">
              <ul>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M3 15h18M9 3v18" />
                    </svg>
                  </i>
                  Excel and CSV
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                      <path d="M12 10v6M9 13l3-3 3 3" />
                    </svg>
                  </i>
                  SFTP
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                  </i>
                  Email
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h4" />
                    </svg>
                  </i>
                  Forms
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="9" y="2" width="6" height="12" rx="3" />
                      <path d="M19 10a7 7 0 0 1-14 0M12 17v5" />
                    </svg>
                  </i>
                  Voice and calls
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                      <path d="M14 2v6h6M8 13h8M8 17h5" />
                    </svg>
                  </i>
                  Documents and PDF
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </i>
                  Cameras and vision
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m12 3 1.9 5.8L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.2Z" />
                      <path d="M19 15v4M17 17h4" />
                    </svg>
                  </i>
                  Synthetic signals
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </i>
                  Weather
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m22 7-8.5 8.5-5-5L2 17" />
                      <path d="M16 7h6v6" />
                    </svg>
                  </i>
                  Market prices
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
                    </svg>
                  </i>
                  Social media
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
                    </svg>
                  </i>
                  Public data
                </li>
              </ul>
              <ul aria-hidden="true">
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M3 15h18M9 3v18" />
                    </svg>
                  </i>
                  Excel and CSV
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                      <path d="M12 10v6M9 13l3-3 3 3" />
                    </svg>
                  </i>
                  SFTP
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                  </i>
                  Email
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h4" />
                    </svg>
                  </i>
                  Forms
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="9" y="2" width="6" height="12" rx="3" />
                      <path d="M19 10a7 7 0 0 1-14 0M12 17v5" />
                    </svg>
                  </i>
                  Voice and calls
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                      <path d="M14 2v6h6M8 13h8M8 17h5" />
                    </svg>
                  </i>
                  Documents and PDF
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </i>
                  Cameras and vision
                </li>
                <li className="ppl">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m12 3 1.9 5.8L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.2Z" />
                      <path d="M19 15v4M17 17h4" />
                    </svg>
                  </i>
                  Synthetic signals
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </i>
                  Weather
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m22 7-8.5 8.5-5-5L2 17" />
                      <path d="M16 7h6v6" />
                    </svg>
                  </i>
                  Market prices
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
                    </svg>
                  </i>
                  Social media
                </li>
                <li className="ext">
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
                    </svg>
                  </i>
                  Public data
                </li>
              </ul>
            </div>
          </div>
          <div className="bz-in">
            <p className="cn-note" style={{ textAlign: "center" }}>
              {"Don't see your system? If it produces data, we will find a way to connect it."}
            </p>
          </div>
        </section>
        {"\n"}
        <section className="bz-sec bz-sec--dk bz-light" id="incluido">
          <div className="bz-in">
            <span className="bz-eyebrow">
              Included in BzzzBX
            </span>
            <h2 className="bz-h2">
              Value from day one.
            </h2>
            <p className="bz-lead">
              Four ways to use your data as soon as BzzzBX is running.
            </p>
            <div className="bz-tabs">
              <div className="bz-tb on" style={{ "--r": "1" }}>
                <button type="button" className="bz-tb-h" aria-expanded="true" aria-controls="bz-tp0">
                  <span className="n">
                    01
                  </span>
                  <span>
                    <span className="k">
                      Observability platform
                    </span>
                    <span className="t">
                      Hivemonic
                    </span>
                  </span>
                  <span className="ch" aria-hidden="true" />
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </button>
                <span className="pg" aria-hidden="true" />
                <div className="bz-tb-d">
                  <p className="d">
                    The observability console where your team explores, measures and watches the whole business in real time. Build dashboards and queries on any data, set alerts by threshold or anomaly, and follow metrics, logs, traces and business events in one place, with no extra tools.
                  </p>
                  <ul className="bz-tg">
                    <li>
                      Dashboards
                    </li>
                    <li>
                      Alerts
                    </li>
                    <li>
                      Metrics, logs and traces
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bz-tp on" id="bz-tp0">
                <div className="bz-con bz-hv">
                  <ul className="hv-side">
                    <li className="hv-logo">
                      H
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
                      </svg>
                      <span>
                        Services
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 6h10M8 12h12M6 18h8" />
                      </svg>
                      <span>
                        Traces
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 6h14M5 10h14M5 14h10M5 18h12" />
                      </svg>
                      <span>
                        Logs
                      </span>
                    </li>
                    <li className="on">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16v16H4zM4 10h16M10 10v10" />
                      </svg>
                      <span>
                        Dashboards
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9a6 6 0 1 1 12 0c0 6 2.5 8 2.5 8h-17S6 15 6 9" />
                        <path d="M10.5 20a1.7 1.7 0 0 0 3 0" />
                      </svg>
                      <span>
                        Alerts
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
                      </svg>
                      <span>
                        Metrics
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3 2 20h20Z" />
                        <path d="M12 10v4M12 17v.5" />
                      </svg>
                      <span>
                        Exceptions
                      </span>
                    </li>
                  </ul>
                  <div className="hv-main">
                    <div className="hv-top">
                      <span className="hv-crumb">
                        Dashboards / Sales by store
                      </span>
                      <span className="hv-time">
                        Last 15 min ▾
                      </span>
                    </div>
                    <div className="hv-q">
                      <span className="hv-a">
                        A
                      </span>
                      <span>
                        sales_total
                      </span>
                      <span>
                        {"channel = 'store'"}
                      </span>
                      <span>
                        SUM
                      </span>
                      <span>
                        by store
                      </span>
                      <span className="hv-run">
                        Run
                      </span>
                    </div>
                    <div className="hv-panel">
                      <p>
                        Sales per minute
                      </p>
                      <svg className="hv-ch" viewBox="0 0 300 90" preserveAspectRatio="none" aria-hidden="true">
                        <g stroke="rgba(255,255,255,.07)" strokeWidth="1" vectorEffect="non-scaling-stroke">
                          <line x1="0" y1="22" x2="300" y2="22" />
                          <line x1="0" y1="45" x2="300" y2="45" />
                          <line x1="0" y1="68" x2="300" y2="68" />
                        </g>
                        <polyline className="c0" points="0,40 20,36 40,38 60,30 80,33 100,26 120,29 140,22 160,25 180,18 200,21 220,15 240,19 260,12 280,16 300,10" />
                        <polyline className="c1" points="0,60 20,57 40,59 60,52 80,55 100,50 120,53 140,47 160,51 180,46 200,49 220,44 240,47 260,42 280,45 300,41" />
                        <polyline className="c2" points="0,74 20,72 40,75 60,70 80,73 100,69 120,74 140,71 160,76 180,79 200,82 220,80 240,83 260,81 280,84 300,82" />
                      </svg>
                      <div className="hv-leg">
                        <span>
                          <i className="c0" />
                          Lima
                        </span>
                        <span>
                          <i className="c1" />
                          Arequipa
                        </span>
                        <span>
                          <i className="c2" />
                          Trujillo
                        </span>
                      </div>
                    </div>
                    <div className="hv-tiles">
                      <div>
                        <small>
                          Error rate
                        </small>
                        <b className="">
                          0.4 %
                        </b>
                      </div>
                      <div>
                        <small>
                          p95 latency
                        </small>
                        <b className="">
                          182 ms
                        </b>
                      </div>
                      <div>
                        <small>
                          Alerts
                        </small>
                        <b className="bad">
                          2 firing
                        </b>
                      </div>
                    </div>
                    <div className="hv-two">
                      <div className="hv-panel hv-tr">
                        <p>
                          Trace · order
                          <span>
                            412 ms
                          </span>
                        </p>
                        <div className="tr-r">
                          <span>
                            checkout
                          </span>
                          <div>
                            <i className="c0" style={{ left: "0%", width: "100%" }} />
                          </div>
                        </div>
                        <div className="tr-r">
                          <span>
                            inventory
                          </span>
                          <div>
                            <i className="c1" style={{ left: "8%", width: "28%" }} />
                          </div>
                        </div>
                        <div className="tr-r">
                          <span>
                            payment
                          </span>
                          <div>
                            <i className="c2" style={{ left: "38%", width: "52%" }} />
                          </div>
                        </div>
                        <div className="tr-r">
                          <span>
                            dispatch
                          </span>
                          <div>
                            <i className="c1" style={{ left: "60%", width: "34%" }} />
                          </div>
                        </div>
                      </div>
                      <div className="hv-panel hv-lg">
                        <p>
                          Live logs and events
                          <i className="live" />
                        </p>
                        <div className="lg-r info">
                          <b>
                            INFO
                          </b>
                          <time>
                            10:42:07
                          </time>
                          <span>
                            Order 48213 created · Lima store
                          </span>
                        </div>
                        <div className="lg-r warn">
                          <b>
                            WARN
                          </b>
                          <time>
                            10:42:08
                          </time>
                          <span>
                            High latency at payment gateway
                          </span>
                        </div>
                        <div className="lg-r info">
                          <b>
                            INFO
                          </b>
                          <time>
                            10:42:08
                          </time>
                          <span>
                            Payment approved · US$129
                          </span>
                        </div>
                        <div className="lg-r error">
                          <b>
                            ERROR
                          </b>
                          <time>
                            10:42:11
                          </time>
                          <span>
                            Low stock · SKU 2231 · Arequipa
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bz-tb" style={{ "--r": "2" }}>
                <button type="button" className="bz-tb-h" aria-expanded="false" aria-controls="bz-tp1">
                  <span className="n">
                    02
                  </span>
                  <span>
                    <span className="k">
                      AI and agents
                    </span>
                    <span className="t">
                      AI connected via MCP
                    </span>
                  </span>
                  <span className="ch" aria-hidden="true" />
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </button>
                <span className="pg" aria-hidden="true" />
                <div className="bz-tb-d">
                  <p className="d">
                    Connect your AI assistants or run agents on BzzzBX data, in real time and with business context.
                  </p>
                  <ul className="bz-tg">
                    <li>
                      Model of your choice
                    </li>
                    <li>
                      Real-time agents
                    </li>
                    <li>
                      Permissions and traceability
                    </li>
                  </ul>
                  <Link className="bz-more" href="/en/ia-aplicada">
                    More on Business Observability and AI
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bz-tp" id="bz-tp1">
                <div className="bz-con">
                  <div className="bz-mflow">
                    <ul className="sr">
                      <li>
                        ERP
                      </li>
                      <li>
                        CRM
                      </li>
                      <li>
                        IoT
                      </li>
                      <li>
                        Apps
                      </li>
                      <li>
                        External
                      </li>
                    </ul>
                    <svg className="fan in" viewBox="0 0 40 100" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0 10.0 C20 10.0 20 50 40 50" />
                      <path d="M0 30.0 C20 30.0 20 50 40 50" />
                      <path d="M0 50 C20 50 20 50 40 50" />
                      <path d="M0 70.0 C20 70.0 20 50 40 50" />
                      <path d="M0 90.0 C20 90.0 20 50 40 50" />
                    </svg>
                    <span className="n bx">
                      BzzzBX
                    </span>
                    <i />
                    <span className="n">
                      MCP
                    </span>
                    <svg className="fan" viewBox="0 0 40 100" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0 50 C20 50 20 16.67 40 16.67" />
                      <path d="M0 50 C20 50 20 50 40 50" />
                      <path d="M0 50 C20 50 20 83.33 40 83.33" />
                    </svg>
                    <ul className="cl">
                      <li>
                        AI assistants
                      </li>
                      <li>
                        Copilots
                      </li>
                      <li>
                        Agents
                      </li>
                    </ul>
                  </div>
                  <p className="bz-q">
                    Which key customers will get their order late today, and why?
                  </p>
                  <div className="bz-a">
                    14 orders from 3 key customers. Plant 2 is running a short shift and truck 7 is 40 min behind. I suggest moving those orders to shift B.
                    <small>
                      Cross-checked evidence: HR shifts, production, fleet GPS, ERP orders and CRM accounts
                    </small>
                  </div>
                </div>
              </div>
              <div className="bz-tb" style={{ "--r": "3" }}>
                <button type="button" className="bz-tb-h" aria-expanded="false" aria-controls="bz-tp2">
                  <span className="n">
                    03
                  </span>
                  <span>
                    <span className="k">
                      More power
                    </span>
                    <span className="t">
                      Advanced Engines
                    </span>
                  </span>
                  <span className="ch" aria-hidden="true" />
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </button>
                <span className="pg" aria-hidden="true" />
                <div className="bz-tb-d">
                  <p className="d">
                    Specialized applications our customers already use: Business Journeys, predictive maintenance, customer touchpoints and the command GeoMap. They are add-ons: switch them on only if you need them, on the same data and with no new integration.
                  </p>
                  <Link className="bz-more" href="/en/productos/aplicaciones">
                    See Engines
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bz-tp" id="bz-tp2">
                <div className="bz-engp">
                  <ul className="ex-tiles gx gx--dk">
                    <li style={{ "--i": "0" }}>
                      <div className="gx-art" aria-hidden="true">
                        <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                          <defs>
                            <radialGradient id="gx201" cx="50%" cy="50%" r="50%">
                              <stop offset="0" stopColor="#4e49f2" stopOpacity=".42" />
                              <stop offset=".45" stopColor="#6c68f5" stopOpacity=".18" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                            </radialGradient>
                            {"\n"}
                            <linearGradient id="hx201" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#2a2a8a" />
                              <stop offset="1" stopColor="#0d0f33" />
                            </linearGradient>
                            {"\n"}
                            <linearGradient id="bx201" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0" stopColor="#b9b6ff" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                            </linearGradient>
                            {"\n"}
                            <pattern id="px201" width="16" height="16" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r=".8" fill="#fff" fillOpacity=".09" />
                            </pattern>
                            {"\n"}
                            <radialGradient id="mx201" cx="50%" cy="50%" r="55%">
                              <stop offset="0" stopColor="#fff" />
                              <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </radialGradient>
                            <mask id="kx201">
                              <rect width="400" height="220" fill="url(#mx201)" />
                            </mask>
                            {"\n"}
                            <filter id="fx201" x="-80%" y="-80%" width="260%" height="260%">
                              <feGaussianBlur stdDeviation="10" />
                            </filter>
                          </defs>
                          {"\n"}
                          <rect width="400" height="220" fill="url(#px201)" mask="url(#kx201)" />
                          <path d="M95 110H164" stroke="rgba(150,146,255,.32)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
                          <path d="M236 110H305" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M95 104H140M95 116H128" stroke="rgba(255,255,255,.12)" fill="none" />
                          <circle className="gx-d" cx="262" cy="110" r="2.4" fill="#b9b6ff" />
                          <circle cx="262" cy="110" r="6" fill="#b9b6ff" opacity=".18" />
                          <g className="gx-n">
                            <rect x="61.0" y="93.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(70.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="9" cy="20" r="1.5" />
                              <circle cx="18" cy="20" r="1.5" />
                              <path d="M2 3h3l2.7 11.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 7H6" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="305.0" y="93.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(150,146,255,.55)" />
                            <g transform="translate(314.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#b9b6ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5" />
                            </g>
                          </g>
                          <g className="gx-hub">
                            <ellipse className="gx-glow" cx="200" cy="110" rx="105.60000000000001" ry="79.2" fill="url(#gx201)" />
                            {"\n"}
                            <rect x="167.0" y="77.0" width="66" height="66" rx="17.2" fill="#4e49f2" opacity=".55" filter="url(#fx201)" />
                            {"\n"}
                            <rect x="167.0" y="77.0" width="66" height="66" rx="17.2" fill="url(#hx201)" stroke="url(#bx201)" strokeWidth="1.2" />
                            {"\n"}
                            <rect x="173.0" y="83.0" width="54" height="54" rx="13.2" fill="none" stroke="rgba(255,255,255,.08)" />
                            {"\n"}
                            <g transform="translate(186.14 96.14) scale(1.155)" fill="none" stroke="#fff" strokeWidth="1.30" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span>
                        Business Journeys
                      </span>
                    </li>
                    <li style={{ "--i": "1" }}>
                      <div className="gx-art" aria-hidden="true">
                        <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                          <defs>
                            <radialGradient id="gx202" cx="50%" cy="50%" r="50%">
                              <stop offset="0" stopColor="#4e49f2" stopOpacity=".42" />
                              <stop offset=".45" stopColor="#6c68f5" stopOpacity=".18" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                            </radialGradient>
                            {"\n"}
                            <linearGradient id="hx202" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#2a2a8a" />
                              <stop offset="1" stopColor="#0d0f33" />
                            </linearGradient>
                            {"\n"}
                            <linearGradient id="bx202" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0" stopColor="#b9b6ff" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                            </linearGradient>
                            {"\n"}
                            <pattern id="px202" width="16" height="16" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r=".8" fill="#fff" fillOpacity=".09" />
                            </pattern>
                            {"\n"}
                            <radialGradient id="mx202" cx="50%" cy="50%" r="55%">
                              <stop offset="0" stopColor="#fff" />
                              <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </radialGradient>
                            <mask id="kx202">
                              <rect width="400" height="220" fill="url(#mx202)" />
                            </mask>
                            {"\n"}
                            <filter id="fx202" x="-80%" y="-80%" width="260%" height="260%">
                              <feGaussianBlur stdDeviation="10" />
                            </filter>
                          </defs>
                          {"\n"}
                          <rect width="400" height="220" fill="url(#px202)" mask="url(#kx202)" />
                          <rect x="70" y="70" width="26" height="120" rx="6" fill="#0c0f2b" stroke="rgba(150,146,255,0.18)" />
                          <rect x="116" y="94" width="26" height="96" rx="6" fill="#0c0f2b" stroke="rgba(150,146,255,0.26)" />
                          <rect x="162" y="116" width="26" height="74" rx="6" fill="#0c0f2b" stroke="rgba(150,146,255,0.34)" />
                          <rect x="208" y="134" width="26" height="56" rx="6" fill="#0c0f2b" stroke="rgba(150,146,255,0.42)" />
                          <rect x="254" y="150" width="26" height="40" rx="6" fill="#0c0f2b" stroke="rgba(150,146,255,0.50)" />
                          <rect x="300" y="160" width="26" height="30" rx="6" fill="url(#hx202)" stroke="rgba(150,146,255,0.58)" />
                          <path d="M83 66C160 92 230 128 313 152" stroke="#9692ff" strokeOpacity=".6" fill="none" strokeDasharray="3 4" />
                          <circle className="gx-d" cx="313" cy="152" r="2.4" fill="#b9b6ff" />
                          <circle cx="313" cy="152" r="6" fill="#b9b6ff" opacity=".18" />
                          <g className="gx-hub">
                            <ellipse className="gx-glow" cx="320" cy="70" rx="83.2" ry="62.4" fill="url(#gx202)" />
                            {"\n"}
                            <rect x="294.0" y="44.0" width="52" height="52" rx="13.5" fill="#4e49f2" opacity=".55" filter="url(#fx202)" />
                            {"\n"}
                            <rect x="294.0" y="44.0" width="52" height="52" rx="13.5" fill="url(#hx202)" stroke="url(#bx202)" strokeWidth="1.2" />
                            {"\n"}
                            <rect x="300.0" y="50.0" width="40" height="40" rx="10.4" fill="none" stroke="rgba(255,255,255,.08)" />
                            {"\n"}
                            <g transform="translate(309.08 59.08) scale(0.91)" fill="none" stroke="#fff" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="3" />
                              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span>
                        Machinery and predictive maintenance
                      </span>
                    </li>
                    <li style={{ "--i": "2" }}>
                      <div className="gx-art" aria-hidden="true">
                        <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                          <defs>
                            <radialGradient id="gx203" cx="50%" cy="50%" r="50%">
                              <stop offset="0" stopColor="#4e49f2" stopOpacity=".42" />
                              <stop offset=".45" stopColor="#6c68f5" stopOpacity=".18" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                            </radialGradient>
                            {"\n"}
                            <linearGradient id="hx203" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#2a2a8a" />
                              <stop offset="1" stopColor="#0d0f33" />
                            </linearGradient>
                            {"\n"}
                            <linearGradient id="bx203" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0" stopColor="#b9b6ff" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                            </linearGradient>
                            {"\n"}
                            <pattern id="px203" width="16" height="16" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r=".8" fill="#fff" fillOpacity=".09" />
                            </pattern>
                            {"\n"}
                            <radialGradient id="mx203" cx="50%" cy="50%" r="55%">
                              <stop offset="0" stopColor="#fff" />
                              <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </radialGradient>
                            <mask id="kx203">
                              <rect width="400" height="220" fill="url(#mx203)" />
                            </mask>
                            {"\n"}
                            <filter id="fx203" x="-80%" y="-80%" width="260%" height="260%">
                              <feGaussianBlur stdDeviation="10" />
                            </filter>
                          </defs>
                          {"\n"}
                          <rect width="400" height="220" fill="url(#px203)" mask="url(#kx203)" />
                          <path d="M87 58H118.5V97.0H167" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M61 110H105.5V110.0H167" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M87 162H118.5V123.0H167" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M313 58H281.5V97.0H233" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M339 110H294.5V110.0H233" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <path d="M313 162H281.5V123.0H233" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <circle className="gx-d" cx="108" cy="110" r="2.4" fill="#b9b6ff" />
                          <circle cx="108" cy="110" r="6" fill="#b9b6ff" opacity=".18" />
                          <circle className="gx-d" cx="292" cy="72" r="2.4" fill="#b9b6ff" />
                          <circle cx="292" cy="72" r="6" fill="#b9b6ff" opacity=".18" />
                          <g className="gx-n">
                            <rect x="53.0" y="41.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(62.01 50.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="27.0" y="93.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(36.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="5" width="18" height="14" rx="2" />
                              <path d="m3 7 9 6 9-6" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="53.0" y="145.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(62.01 154.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                              <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="313.0" y="41.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(322.01 50.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="339.0" y="93.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(348.01 102.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 9 4.5 4h15L21 9" />
                              <path d="M4 9v11h16V9" />
                              <path d="M3 9h18M9 20v-6h6v6" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="313.0" y="145.0" width="34" height="34" rx="9.5" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(322.01 154.01) scale(0.6658333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.03" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                              <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
                            </g>
                          </g>
                          <g className="gx-hub">
                            <ellipse className="gx-glow" cx="200" cy="110" rx="105.60000000000001" ry="79.2" fill="url(#gx203)" />
                            {"\n"}
                            <rect x="167.0" y="77.0" width="66" height="66" rx="17.2" fill="#4e49f2" opacity=".55" filter="url(#fx203)" />
                            {"\n"}
                            <rect x="167.0" y="77.0" width="66" height="66" rx="17.2" fill="url(#hx203)" stroke="url(#bx203)" strokeWidth="1.2" />
                            {"\n"}
                            <rect x="173.0" y="83.0" width="54" height="54" rx="13.2" fill="none" stroke="rgba(255,255,255,.08)" />
                            {"\n"}
                            <g transform="translate(186.14 96.14) scale(1.155)" fill="none" stroke="#fff" strokeWidth="1.30" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="8" r="4" />
                              <path d="M4 21a8 8 0 0 1 16 0" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span>
                        Customer touchpoints
                      </span>
                    </li>
                    <li style={{ "--i": "3" }}>
                      <div className="gx-art" aria-hidden="true">
                        <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                          <defs>
                            <radialGradient id="gx204" cx="50%" cy="50%" r="50%">
                              <stop offset="0" stopColor="#4e49f2" stopOpacity=".42" />
                              <stop offset=".45" stopColor="#6c68f5" stopOpacity=".18" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity="0" />
                            </radialGradient>
                            {"\n"}
                            <linearGradient id="hx204" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#2a2a8a" />
                              <stop offset="1" stopColor="#0d0f33" />
                            </linearGradient>
                            {"\n"}
                            <linearGradient id="bx204" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0" stopColor="#b9b6ff" />
                              <stop offset="1" stopColor="#4e49f2" stopOpacity=".5" />
                            </linearGradient>
                            {"\n"}
                            <pattern id="px204" width="16" height="16" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r=".8" fill="#fff" fillOpacity=".09" />
                            </pattern>
                            {"\n"}
                            <radialGradient id="mx204" cx="50%" cy="50%" r="55%">
                              <stop offset="0" stopColor="#fff" />
                              <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </radialGradient>
                            <mask id="kx204">
                              <rect width="400" height="220" fill="url(#mx204)" />
                            </mask>
                            {"\n"}
                            <filter id="fx204" x="-80%" y="-80%" width="260%" height="260%">
                              <feGaussianBlur stdDeviation="10" />
                            </filter>
                          </defs>
                          {"\n"}
                          <rect width="400" height="220" fill="url(#px204)" mask="url(#kx204)" />
                          <circle cx="200" cy="110" r="62" stroke="rgba(150,146,255,.32)" strokeWidth="1" fill="none" />
                          <circle cx="200" cy="110" r="96" stroke="rgba(150,146,255,.16)" fill="none" strokeDasharray="2 5" />
                          <g className="gx-n">
                            <rect x="128.0" y="74.0" width="28" height="28" rx="7.8" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(135.42 81.42) scale(0.5483333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
                              <circle cx="7" cy="18" r="2" />
                              <circle cx="17" cy="18" r="2" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="278.0" y="70.0" width="28" height="28" rx="7.8" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(285.42 77.42) scale(0.5483333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 9 4.5 4h15L21 9" />
                              <path d="M4 9v11h16V9" />
                              <path d="M3 9h18M9 20v-6h6v6" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="236.0" y="140.0" width="28" height="28" rx="7.8" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(243.42 147.42) scale(0.5483333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="7" rx="2" />
                              <rect x="3" y="14" width="18" height="7" rx="2" />
                              <path d="M7 6.5h.01M7 17.5h.01" />
                            </g>
                          </g>
                          <g className="gx-n">
                            <rect x="98.0" y="136.0" width="28" height="28" rx="7.8" fill="#0c0f2b" stroke="rgba(255,255,255,.12)" />
                            <g transform="translate(105.42 143.42) scale(0.5483333333333333)" fill="none" stroke="#9692ff" strokeWidth="2.46" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="8" r="4" />
                              <path d="M4 21a8 8 0 0 1 16 0" />
                            </g>
                          </g>
                          <circle className="gx-d" cx="200" cy="48" r="2.4" fill="#b9b6ff" />
                          <circle cx="200" cy="48" r="6" fill="#b9b6ff" opacity=".18" />
                          <circle className="gx-d" cx="296" cy="120" r="2.4" fill="#b9b6ff" />
                          <circle cx="296" cy="120" r="6" fill="#b9b6ff" opacity=".18" />
                          <g className="gx-hub">
                            <ellipse className="gx-glow" cx="200" cy="110" rx="92.80000000000001" ry="69.6" fill="url(#gx204)" />
                            {"\n"}
                            <rect x="171.0" y="81.0" width="58" height="58" rx="15.1" fill="#4e49f2" opacity=".55" filter="url(#fx204)" />
                            {"\n"}
                            <rect x="171.0" y="81.0" width="58" height="58" rx="15.1" fill="url(#hx204)" stroke="url(#bx204)" strokeWidth="1.2" />
                            {"\n"}
                            <rect x="177.0" y="87.0" width="46" height="46" rx="11.6" fill="none" stroke="rgba(255,255,255,.08)" />
                            {"\n"}
                            <g transform="translate(187.82 97.82) scale(1.015)" fill="none" stroke="#fff" strokeWidth="1.48" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                              <circle cx="12" cy="10" r="3" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span>
                        Command GeoMap
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bz-tb" style={{ "--r": "4" }}>
                <button type="button" className="bz-tb-h" aria-expanded="false" aria-controls="bz-tp3">
                  <span className="n">
                    04
                  </span>
                  <span>
                    <span className="k">
                      Open platform
                    </span>
                    <span className="t">
                      Build your own apps
                    </span>
                  </span>
                  <span className="ch" aria-hidden="true" />
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </button>
                <span className="pg" aria-hidden="true" />
                <div className="bz-tb-d">
                  <p className="d">
                    Build complete applications from scratch, not just dashboards: UI/UX designed 100% around your brand and your processes, with business logic, automations, ingestion of new sources and your own models on BzzzBX data.
                  </p>
                  <ul className="bz-tg">
                    <li>
                      100% custom UI/UX
                    </li>
                    <li>
                      Logic and automations
                    </li>
                    <li>
                      Your own models
                    </li>
                  </ul>
                  <Link className="bz-more" href="/en/contacto">
                    Tell us your case
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bz-tp" id="bz-tp3">
                <div className="bz-con ap">
                  <div className="ap-bar">
                    <span className="ap-ic">
                      +
                    </span>
                    <span className="ap-nm">
                      New app · Dispatch control
                    </span>
                    <span className="ap-pub">
                      Publish app
                    </span>
                  </div>
                  <div className="ap-body">
                    <ul className="ap-pal">
                      <li className="g">
                        Interface
                      </li>
                      <li>
                        Screens
                      </li>
                      <li>
                        Components
                      </li>
                      <li>
                        Forms
                      </li>
                      <li>
                        Brand styles
                      </li>
                      <li className="g">
                        Logic
                      </li>
                      <li className="lg">
                        Ingestion
                      </li>
                      <li className="lg">
                        Business rule
                      </li>
                      <li className="lg">
                        Automation
                      </li>
                      <li className="lg">
                        Model
                      </li>
                    </ul>
                    <div className="ap-cv">
                      <div className="ap-scr">
                        <p>
                          Screen · Dispatches at risk
                        </p>
                        <div className="ap-row">
                          <span>
                            <b>
                              Order 48213
                            </b>
                            <small>
                              Andina Retail
                            </small>
                          </span>
                          <em>
                            +42 min
                          </em>
                          <button type="button" tabIndex={-1}>
                            Reassign
                          </button>
                        </div>
                        <div className="ap-row">
                          <span>
                            <b>
                              Order 48190
                            </b>
                            <small>
                              Norte Market
                            </small>
                          </span>
                          <em>
                            +35 min
                          </em>
                          <button type="button" tabIndex={-1}>
                            Reassign
                          </button>
                        </div>
                      </div>
                      <div className="ap-fl">
                        <p>
                          App logic
                        </p>
                        <ol>
                          <li className="in">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                              </svg>
                            </i>
                            <span>
                              <b>
                                Ingestion
                              </b>
                              <small>
                                ERP orders and fleet GPS
                              </small>
                            </span>
                          </li>
                          <li className="rule">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M6 3v6a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v6M15 18l3 3 3-3" />
                              </svg>
                            </i>
                            <span>
                              <b>
                                Business rule
                              </b>
                              <small>
                                If the delay exceeds 30 min
                              </small>
                            </span>
                          </li>
                          <li className="model">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                              </svg>
                            </i>
                            <span>
                              <b>
                                Model · AI
                              </b>
                              <small>
                                Delay forecast by route
                              </small>
                            </span>
                          </li>
                          <li className="auto">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
                              </svg>
                            </i>
                            <span>
                              <b>
                                Automation
                              </b>
                              <small>
                                Reassigns the shift and notifies the customer
                              </small>
                            </span>
                          </li>
                        </ol>
                        <p className="ap-md">
                          Statistical, optimization or AI models, your own or third-party
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="ap-src">
                    {"BzzzBX data via "}
                    <b>
                      API
                    </b>
                    {" · "}
                    <b>
                      SQL
                    </b>
                    {" · "}
                    <b>
                      MCP
                    </b>
                    {", with each user's permissions"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <style dangerouslySetInnerHTML={{ __html: ".bz-tabs.hold .bz-tb.on .pg{animation-play-state:paused}" }} />
        </section>
        {"\n\n\n"}
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              Discover what BzzzBX can do for your company.
            </h2>
            <p className="mt-5 max-w-[560px] text-pretty text-body-m text-[#d8d8d8] lg:mt-6 lg:text-body-l">
              {"Let's talk about your operation."}
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
