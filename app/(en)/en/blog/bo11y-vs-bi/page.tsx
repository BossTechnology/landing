import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/blog/bo11y-vs-bi",
  title: "Beyond BI and Data Lakes: seeing the business as it happens · Boss.Technology",
  description: "BI and Data Lakes explain what happened. Business Observability shows what is happening. Why it does not replace them, but completes them.",
});

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ".post-body h3{margin-top:30px;font:600 20px/1.3 var(--font-family-display);color:var(--brand-ink)}.post-body .pst-pull{margin:36px 0;padding:4px 0 4px 24px;border-left:3px solid var(--brand-accent);font:500 clamp(21px,2.3vw,26px)/1.35 var(--font-family-display);letter-spacing:-.01em;color:var(--brand-ink);text-wrap:balance}.pst-box{margin:32px 0;padding:24px 26px;border-radius:var(--radius-xl,20px);background:var(--indigo-50);border:1px solid var(--indigo-100)}.pst-box h3{margin:0 0 6px;font:600 13px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--brand-accent)}.pst-box dl{margin:12px 0 0;display:grid;gap:12px}.pst-box dt{font:600 16px/1.3 var(--font-family-display);color:var(--brand-ink)}.pst-box dd{margin:2px 0 0;font-size:15.5px;line-height:1.55;color:var(--cool-700)}.post-fig--wide{margin-left:-6%;margin-right:-6%}@media (max-width:899px){.post-fig--wide{margin-left:0;margin-right:0}}.pst-vs{margin:28px 0 0;display:grid;gap:14px}@media (min-width:720px){.pst-vs{grid-template-columns:1fr 1fr}}.pst-vs div{padding:20px 22px;border-radius:var(--radius-xl,20px);border:1px solid var(--bz-line,rgba(5,5,16,.1));background:var(--brand-paper-2)}.pst-vs div.on{background:var(--brand-ink);border-color:transparent}.pst-vs small{font:600 12px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--cool-500)}.pst-vs div.on small{color:var(--indigo-300)}.pst-vs p{margin-top:8px!important;font-size:16.5px!important;line-height:1.55!important}.pst-vs div.on p{color:color-mix(in srgb,var(--brand-paper-2) 82%,transparent)!important}" }} />
      <style dangerouslySetInnerHTML={{ __html: "\n.wp-cover{position:relative;overflow:hidden;border-radius:var(--radius-xl,20px);background:radial-gradient(70% 90% at 85% 20%,color-mix(in srgb,var(--brand-accent) 34%,transparent),transparent 70%),var(--brand-ink);padding:32px 24px;color:#fff}\n.wp-cover::before{content:\"\";position:absolute;inset:0;background-image:radial-gradient(rgba(150,146,255,.14) 1px,transparent 1.4px);background-size:18px 18px;pointer-events:none}\n.wp-tl{position:relative;display:grid;gap:14px}\n@media (min-width:760px){.wp-cover{padding:48px 44px}.wp-tl{grid-template-columns:1fr 1fr 1.25fr;gap:18px;align-items:stretch}}\n.wp-st{position:relative;padding:20px 20px 22px;border-radius:16px;border:1px dashed rgba(255,255,255,.22);background:rgba(255,255,255,.03)}\n.wp-st small{display:block;font:600 11px/1 var(--font-family-sans);letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5)}\n.wp-st b{display:block;margin-top:10px;font:600 22px/1.15 var(--font-family-display);letter-spacing:-.01em}\n.wp-st span{display:block;margin-top:8px;font-size:14px;line-height:1.45;color:rgba(255,255,255,.62)}\n.wp-st i{display:inline-flex;margin-top:14px;padding:6px 10px;border-radius:999px;font:600 11px/1 var(--font-family-sans);letter-spacing:.06em;text-transform:uppercase;font-style:normal;background:rgba(255,255,255,.08);color:rgba(255,255,255,.7)}\n.wp-st.on{border:1px solid color-mix(in srgb,var(--indigo-300) 70%,transparent);background:color-mix(in srgb,var(--brand-accent) 22%,transparent);box-shadow:0 20px 50px -20px color-mix(in srgb,var(--brand-accent) 80%,transparent)}\n.wp-st.on small{color:var(--indigo-300)}\n.wp-st.on i{background:var(--status-ok,#2cb67d);color:#04130c}\n.wp-st.on i::before{content:\"\";width:6px;height:6px;margin-right:7px;border-radius:50%;background:#04130c;animation:wp-p 1.6s ease-in-out infinite}\n@keyframes wp-p{50%{opacity:.25}}\n@media (prefers-reduced-motion:reduce){.wp-st.on i::before{animation:none}}\n.wp-tbl{margin:28px 0;overflow-x:auto;border:1px solid var(--bz-line,rgba(5,5,16,.1));border-radius:var(--radius-xl,20px)}\n.wp-tbl table{width:100%;min-width:620px;border-collapse:collapse;font-size:15px;line-height:1.45}\n.wp-tbl th,.wp-tbl td{padding:13px 16px;text-align:left;vertical-align:top;border-top:1px solid var(--bz-line,rgba(5,5,16,.08))}\n.wp-tbl thead th{border-top:0;font:600 12px/1.2 var(--font-family-sans);letter-spacing:.1em;text-transform:uppercase;color:var(--cool-500);background:var(--brand-paper-2)}\n.wp-tbl tbody th{font-weight:600;color:var(--brand-ink);white-space:nowrap}\n.wp-tbl td{color:var(--cool-700)}\n.wp-tbl .on{background:var(--indigo-50);color:var(--brand-ink);font-weight:600}\n.wp-tbl thead .on{background:var(--brand-accent);color:var(--brand-on-accent)}\n.wp-sc{margin:24px 0 0;display:grid;gap:14px}\n@media (min-width:760px){.wp-sc{grid-template-columns:repeat(3,1fr)}}\n.wp-sc div{padding:20px;border-radius:var(--radius-xl,20px);border:1px solid var(--bz-line,rgba(5,5,16,.1));background:var(--brand-paper-2)}\n.wp-sc small{font:600 11px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--brand-accent)}\n.wp-sc b{display:block;margin-top:8px;font:600 17px/1.25 var(--font-family-display);color:var(--brand-ink)}\n.wp-sc p{margin-top:8px!important;font-size:15px!important;line-height:1.5!important}\n.pst-g>*{min-width:0}.wp-tbl thead th{vertical-align:bottom;padding-top:16px;padding-bottom:14px;text-transform:none;letter-spacing:0}.wp-tbl thead th b{display:block;font:600 16px/1.2 var(--font-family-display);color:var(--brand-ink)}.wp-tbl thead th small{display:block;margin-top:4px;font:500 12.5px/1.3 var(--font-family-sans);color:var(--cool-500)}.wp-tbl thead th.on b,.wp-tbl thead th.on small{color:var(--brand-on-accent)}.wp-tbl thead th.on small{opacity:.85}.wp-h0{font:600 11px/1 var(--font-family-sans);letter-spacing:.1em;text-transform:uppercase;color:var(--cool-500)}@media (max-width:640px){.wp-tbl{border:0;overflow:visible}.wp-tbl table{min-width:0}.wp-tbl thead{display:none}.wp-tbl tbody{display:grid;gap:12px}.wp-tbl tr{display:grid;grid-template-columns:1fr;border:1px solid var(--bz-line,rgba(5,5,16,.1));border-radius:16px;overflow:hidden;background:#fff}.wp-tbl th,.wp-tbl td{border:0;padding:8px 16px}.wp-tbl tbody th{padding-top:14px;background:var(--brand-paper-2)}.wp-tbl td::before{content:attr(data-l);display:block;font:600 10.5px/1.4 var(--font-family-sans);letter-spacing:.1em;text-transform:uppercase;color:var(--cool-500)}.wp-tbl td.on{padding-bottom:14px}.wp-tbl td.on::before{color:var(--brand-accent)}}" }} />
      <style dangerouslySetInnerHTML={{ __html: "@media (min-width:900px){.blg-grid--2{grid-template-columns:repeat(2,minmax(0,1fr))!important}}" }} />
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1 bz pst">
        <article>
          <header className="pst-h">
            <Link className="pst-back" href="/en/blog">
              ← Ideas Hive
            </Link>
            <ul className="pst-chips">
              <li>
                Business Observability
              </li>
              <li>
                Fundamentals
              </li>
            </ul>
            <h1>
              Beyond BI and Data Lakes: seeing the business as it happens
            </h1>
            <p className="pst-dek">
              For two decades, BI and Data Lakes taught companies to analyze what happened. Today the advantage lies in seeing what is happening and acting in time. Why Business Observability does not replace them, but completes them.
            </p>
            <div className="pst-by">
              <span className="pst-av" aria-hidden="true">
                B
              </span>
              <span>
                <b>
                  Boss.Technology
                </b>
                <small>
                  <time dateTime="2026-11-16">
                    November 16, 2026
                  </time>
                  {" · 6 min read"}
                </small>
              </span>
            </div>
          </header>
          {"\n"}
          <div className="pst-cover wp-cover" aria-hidden="true">
            <div className="wp-tl">
              <div className="wp-st">
                <small>
                  Business Intelligence
                </small>
                <b>
                  What happened
                </b>
                <span>
                  Reports and dashboards on historical data.
                </span>
                <i>
                  After the fact
                </i>
              </div>
              <div className="wp-st">
                <small>
                  Data Lakes
                </small>
                <b>
                  What could be analyzed
                </b>
                <span>
                  A flexible repository that must be modeled and queried.
                </span>
                <i>
                  After the fact
                </i>
              </div>
              <div className="wp-st on">
                <small>
                  Business Observability
                </small>
                <b>
                  What is happening
                </b>
                <span>
                  The live state of the business, in context and ready to act.
                </span>
                <i>
                  In the moment
                </i>
              </div>
            </div>
          </div>
          {"\n"}
          <div className="pst-g">
            <aside className="pst-side">
              <nav className="pst-toc" aria-label="In this article">
                <p>
                  In this article
                </p>
                <ol>
                  <li>
                    <a href="#the-latency-gap">
                      The latency gap
                    </a>
                  </li>
                  <li>
                    <a href="#what-changes">
                      What changes with Business Observability
                    </a>
                  </li>
                  <li>
                    <a href="#side-by-side">
                      BI, Data Lakes and Bo11y, side by side
                    </a>
                  </li>
                  <li>
                    <a href="#we-already-have-dashboards">
                      {"\"We already have dashboards\""}
                    </a>
                  </li>
                  <li>
                    <a href="#extension-not-replacement">
                      Extension, not replacement
                    </a>
                  </li>
                  <li>
                    <a href="#three-scenarios">
                      Three scenarios
                    </a>
                  </li>
                  <li>
                    <a href="#the-shift-is-cultural">
                      The shift is cultural
                    </a>
                  </li>
                  <li>
                    <a href="#where-to-go">
                      Where to go
                    </a>
                  </li>
                </ol>
              </nav>
              <div className="pst-share">
                <p>
                  Share
                </p>
                <div>
                  <a href="https://www.linkedin.com/sharing/share-offsite/" data-share="li" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
                    </svg>
                  </a>
                  <button type="button" className="pst-copy" aria-label="Copy link" data-ok="Link copied">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
                      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
                    </svg>
                  </button>
                </div>
              </div>
            </aside>
            <div className="pst-body post-body">
              {"\n"}
              <p>
                It is 10 a.m. on a Tuesday and the sales dashboard says everything is fine. It says so because it shows yesterday’s close. Meanwhile, conversion has been dropping since early morning in three stores, a supplier did not show up and the service team is starting to get complaints. Nobody will see it on the dashboard until tomorrow. By then, the sale is already lost.
              </p>
              {"\n"}
              <p>
                It is not a data problem. The company has more data than ever. It is a timing problem.
              </p>
              {"\n"}
              <aside className="pst-cta">
                <div>
                  <b>
                    See your business as it happens
                  </b>
                  <span>
                    Connect what you already have to BzzzBX, without replacing your BI.
                  </span>
                </div>
                <Link className="btn btn--primary btn--sm" href="/en/contacto">
                  Book a meeting
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </aside>
              {"\n"}
              <h2 id="the-latency-gap">
                The latency gap
              </h2>
              {"\n"}
              <p>
                {"For more than twenty years, "}
                <b>
                  Business Intelligence
                </b>
                {" has been how companies turn data into decisions. It takes structured, historical data and turns it into reports and dashboards that guide planning and performance reviews. It works, and it works well. But it was born with three limits: latency, rigid data and no context in the moment."}
              </p>
              {"\n"}
              <p>
                <b>
                  Data Lakes
                </b>
                {" arrived to solve the rigidity. They store structured, semi-structured and unstructured data in one place, so it can be analyzed more freely. But they are still repositories, not reflexes. Data must be modeled, queried and interpreted, which means the answer arrives after the action has already happened."}
              </p>
              {"\n"}
              <p className="pst-pull">
                Today’s challenge is not a lack of data. It is its immediacy.
              </p>
              {"\n"}
              <p>
                Both offer enormous analytical power. Both operate with delayed awareness. And in a market where latency means loss, that difference is paid in sales, customers and margin.
              </p>
              {"\n\n"}
              <h2 id="what-changes">
                What changes with Business Observability
              </h2>
              {"\n"}
              <p>
                Business Observability takes an idea proven in technology, IT observability, and applies it to the whole business. IT observability answers whether the technology works. Business Observability answers whether the business works: operations, sales, finance, customers, suppliers, people and external factors, in real time.
              </p>
              {"\n"}
              <p>
                {"The difference is not only speed. While BI interprets the past and Data Lakes store potential, Business Observability builds a "}
                <b>
                  living model of the business
                </b>
                : continuously updated, with business context and connected to operations. Every signal enters once, is related to the others and is available to whoever needs to act.
              </p>
              {"\n"}
              <blockquote>
                {"BI explains what happened. Business Observability shows what is happening. "}
                <em>
                  Together, they connect the past with what comes next.
                </em>
              </blockquote>
              {"\n\n"}
              <h2 id="side-by-side">
                BI, Data Lakes and Bo11y, side by side
              </h2>
              {"\n"}
              <p>
                They are not three versions of the same thing. They answer different questions, for different people, at different moments. Each column is an approach; each row, a criterion to compare them.
              </p>
              {"\n"}
              <div className="wp-tbl">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <span className="wp-h0">
                          Criterion
                        </span>
                      </th>
                      <th>
                        <b>
                          BI
                        </b>
                        <small>
                          What happened
                        </small>
                      </th>
                      <th>
                        <b>
                          Data Lakes
                        </b>
                        <small>
                          What could be analyzed
                        </small>
                      </th>
                      <th className="on">
                        <b>
                          Business Observability
                        </b>
                        <small>
                          What is happening
                        </small>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {"\n"}
                    <tr>
                      <th>
                        Orientation
                      </th>
                      <td data-l="BI">
                        Historical
                      </td>
                      <td data-l="Data Lakes">
                        Historical and exploratory
                      </td>
                      <td className="on" data-l="Business Observability">
                        Continuous, real time
                      </td>
                    </tr>
                    {"\n"}
                    <tr>
                      <th>
                        Purpose
                      </th>
                      <td data-l="BI">
                        Reporting and analysis
                      </td>
                      <td data-l="Data Lakes">
                        Storage and exploration
                      </td>
                      <td className="on" data-l="Business Observability">
                        Awareness and action
                      </td>
                    </tr>
                    {"\n"}
                    <tr>
                      <th>
                        Users
                      </th>
                      <td data-l="BI">
                        Analysts and executives
                      </td>
                      <td data-l="Data Lakes">
                        Data scientists
                      </td>
                      <td className="on" data-l="Business Observability">
                        Everyone: business, operations and IT
                      </td>
                    </tr>
                    {"\n"}
                    <tr>
                      <th>
                        Output
                      </th>
                      <td data-l="BI">
                        Dashboards and reports
                      </td>
                      <td data-l="Data Lakes">
                        Data models
                      </td>
                      <td className="on" data-l="Business Observability">
                        Live dashboards, alerts and actions
                      </td>
                    </tr>
                    {"\n"}
                    <tr>
                      <th>
                        Integration
                      </th>
                      <td data-l="BI">
                        ETL processes
                      </td>
                      <td data-l="Data Lakes">
                        Ingestion and query
                      </td>
                      <td className="on" data-l="Business Observability">
                        Native to operational systems
                      </td>
                    </tr>
                    {"\n"}
                    <tr>
                      <th>
                        Decision window
                      </th>
                      <td data-l="BI">
                        After the fact
                      </td>
                      <td data-l="Data Lakes">
                        After the fact
                      </td>
                      <td className="on" data-l="Business Observability">
                        In the moment
                      </td>
                    </tr>
                    {"\n"}
                  </tbody>
                </table>
              </div>
              {"\n\n"}
              <h2 id="we-already-have-dashboards">
                {"\"We already have dashboards\""}
              </h2>
              {"\n"}
              <p>
                When a company first meets Business Observability, the first reaction is usually skepticism. The same phrases come up:
              </p>
              {"\n"}
              <ul>
                <li>
                  {"\"We already have dashboards.\""}
                </li>
                <li>
                  {"\"Our Data Lake connects everything.\""}
                </li>
                <li>
                  {"\"We can generate reports at any time.\""}
                </li>
              </ul>
              {"\n"}
              <p>
                All true. And all describe visibility after the fact, not continuous awareness. A report you can generate at any time still needs someone to know they should generate it.
              </p>
              {"\n"}
              <p>
                The turning point comes when leaders see their live data connected to business context, not just system metrics. When a drop in conversion shows up together with its cause, its impact on sales and who should act, the conversation stops being about dashboards and becomes about decisions.
              </p>
              {"\n\n"}
              <h2 id="extension-not-replacement">
                Extension, not replacement
              </h2>
              {"\n"}
              <p>
                Business Observability does not replace BI or the Data Lake. It extends them. BI and Data Lakes keep providing depth and historical perspective; observability adds breadth and immediacy. Together they form a complete cycle:
              </p>
              {"\n"}
              <div className="pst-box">
                <h3>
                  A cognitive cycle for the enterprise
                </h3>
                <dl>
                  {"\n"}
                  <div>
                    <dt>
                      Data Lake · memory
                    </dt>
                    <dd>
                      Keeps long-term history for deep analysis and models.
                    </dd>
                  </div>
                  {"\n"}
                  <div>
                    <dt>
                      BI · reasoning
                    </dt>
                    <dd>
                      Analyzes trends, compares periods and supports planning.
                    </dd>
                  </div>
                  {"\n"}
                  <div>
                    <dt>
                      Business Observability · the senses
                    </dt>
                    <dd>
                      Perceives what is happening, interprets it in context and signals when and where to act.
                    </dd>
                  </div>
                  {"\n"}
                </dl>
              </div>
              {"\n"}
              <p>
                That is why BzzzBX connects to what the company already has, instead of asking to replace it. A single integration feeds operations, the existing BI and AI initiatives in real time.
              </p>
              {"\n\n"}
              <h2 id="three-scenarios">
                Three scenarios
              </h2>
              {"\n"}
              <p>
                The shift is easiest to see in operations. Three typical scenarios of what happens when a company stops waiting for the report:
              </p>
              {"\n"}
              <div className="wp-sc">
                {"\n"}
                <div>
                  <small>
                    Retail
                  </small>
                  <b>
                    Stores that adjust during the day
                  </b>
                  <p>
                    By combining point-of-sale data with store traffic and restocking, falling conversion and staffing gaps show up as they happen, not at month-end.
                  </p>
                </div>
                {"\n"}
                <div>
                  <small>
                    Digital services
                  </small>
                  <b>
                    The failure is fixed before the complaint
                  </b>
                  <p>
                    When service delivery degrades, operations gets the alert in seconds, along with the customer impact, and fixes it before the issue escalates on social media.
                  </p>
                </div>
                {"\n"}
                <div>
                  <small>
                    Logistics
                  </small>
                  <b>
                    Delays that are managed, not explained
                  </b>
                  <p>
                    If a delivery is about to run late, dispatch and customer service know in time, adjust the route and notify the customer before they ask.
                  </p>
                </div>
                {"\n"}
              </div>
              {"\n\n"}
              <h2 id="the-shift-is-cultural">
                The shift is cultural
              </h2>
              {"\n"}
              <p>
                The deepest change is not technological. With Business Observability, decisions no longer wait for the report: they are made as the data emerges. Teams stop being data consumers and become data participants.
              </p>
              {"\n"}
              <p className="pst-pull">
                Business Observability turns insight into instinct.
              </p>
              {"\n"}
              <p>
                The organization adopts a new rhythm: continuous, adaptive and anticipatory. Every area takes part in the outcome in real time, and sees how its decisions affect the others.
              </p>
              {"\n\n"}
              <h2 id="where-to-go">
                Where to go
              </h2>
              {"\n"}
              <p>
                The evolution from BI to Data Lakes and on to Business Observability mirrors human cognition: from remembering the past to perceiving the present. Taking the step does not require dismantling what works:
              </p>
              {"\n"}
              <ul>
                <li>
                  Keep BI and the Data Lake for historical analysis and planning.
                </li>
                <li>
                  Identify the decisions that arrive late today: where a one-day delay costs sales, customers or margin.
                </li>
                <li>
                  Connect those signals once to a core with business context, and define which alert and which action belong to each one.
                </li>
              </ul>
              {"\n"}
              <p>
                In the age of instant change, business intelligence is no longer measured by how much a company understands its past, but by how quickly it understands itself. Continuously, in context and together.
              </p>
              {"\n"}
              <div className="post-links">
                <Link className="bz-more" href="/en/bo11y">
                  What is Bo11y
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link className="bz-more" href="/en/productos/plataformas">
                  Discover BzzzBX
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link className="bz-more" href="/en/casos">
                  Business cases
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </article>
        {"\n"}
        <section className="pst-rel">
          <div className="pst-rel-h">
            <h2>
              Related articles
            </h2>
            <Link className="btn-link" href="/en/blog">
              See all articles
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          <div className="blg-grid blg-grid--2">
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
        </section>
        {"\n"}
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              Does your BI tell you what happened last week?
            </h2>
            <p className="mt-5 max-w-[560px] text-pretty text-body-m text-[#d8d8d8] lg:mt-6 lg:text-body-l">
              Let’s talk about seeing your operation in the moment with BzzzBX.
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
        {"\n"}
      </main>
    </>
  );
}
