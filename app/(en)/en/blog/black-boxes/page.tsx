import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/blog/black-boxes",
  title: "Black boxes, blind spots and dark tunnels · Boss.Technology",
  description: "What your company cannot see also decides its results. How Business Observability connects what you control and what you don’t, to understand and act in time.",
});

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ".post-body h3{margin-top:30px;font:600 20px/1.3 var(--font-family-display);color:var(--brand-ink)}.post-body .pst-pull{margin:36px 0;padding:4px 0 4px 24px;border-left:3px solid var(--brand-accent);font:500 clamp(21px,2.3vw,26px)/1.35 var(--font-family-display);letter-spacing:-.01em;color:var(--brand-ink);text-wrap:balance}.pst-box{margin:32px 0;padding:24px 26px;border-radius:var(--radius-xl,20px);background:var(--indigo-50);border:1px solid var(--indigo-100)}.pst-box h3{margin:0 0 6px;font:600 13px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--brand-accent)}.pst-box dl{margin:12px 0 0;display:grid;gap:12px}.pst-box dt{font:600 16px/1.3 var(--font-family-display);color:var(--brand-ink)}.pst-box dd{margin:2px 0 0;font-size:15.5px;line-height:1.55;color:var(--cool-700)}.post-fig--wide{margin-left:-6%;margin-right:-6%}@media (max-width:899px){.post-fig--wide{margin-left:0;margin-right:0}}.pst-vs{margin:28px 0 0;display:grid;gap:14px}@media (min-width:720px){.pst-vs{grid-template-columns:1fr 1fr}}.pst-vs div{padding:20px 22px;border-radius:var(--radius-xl,20px);border:1px solid var(--bz-line,rgba(5,5,16,.1));background:var(--brand-paper-2)}.pst-vs div.on{background:var(--brand-ink);border-color:transparent}.pst-vs small{font:600 12px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--cool-500)}.pst-vs div.on small{color:var(--indigo-300)}.pst-vs p{margin-top:8px!important;font-size:16.5px!important;line-height:1.55!important}.pst-vs div.on p{color:color-mix(in srgb,var(--brand-paper-2) 82%,transparent)!important}" }} />
      <style dangerouslySetInnerHTML={{ __html: "\n.pst-g>*{min-width:0}\n.bb-cover{position:relative;overflow:hidden;border-radius:var(--radius-xl,20px);background:radial-gradient(60% 90% at 50% 0%,color-mix(in srgb,var(--brand-accent) 30%,transparent),transparent 70%),var(--brand-ink);padding:32px 24px;color:#fff}\n.bb-cover::before{content:\"\";position:absolute;inset:0;background-image:radial-gradient(rgba(150,146,255,.13) 1px,transparent 1.4px);background-size:18px 18px;pointer-events:none}\n.bb-row{position:relative;display:grid;gap:14px}\n@media (min-width:760px){.bb-cover{padding:44px}.bb-row{grid-template-columns:repeat(3,1fr);gap:18px}}\n.bb-it{padding:22px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1)}\n.bb-it b{display:block;margin-top:16px;font:600 22px/1.15 var(--font-family-display)}\n.bb-it span{display:block;margin-top:6px;font-size:14px;line-height:1.45;color:rgba(255,255,255,.62)}\n.bb-ic{position:relative;height:56px}\n.bb-ic--box i{position:absolute;left:26px;top:4px;width:48px;height:48px;border-radius:8px;background:#000;border:1px solid rgba(255,255,255,.28);box-shadow:inset 0 0 0 6px rgba(255,255,255,.04)}\n.bb-ic--box i::before,.bb-ic--box i::after{content:\"\";position:absolute;top:50%;width:22px;height:2px;background:var(--indigo-300)}\n.bb-ic--box i::before{left:-26px}.bb-ic--box i::after{right:-26px}\n.bb-ic--box{padding-left:26px}\n.bb-ic--spot i{position:absolute;left:0;top:4px;width:48px;height:48px;border-radius:50%;border:2px dashed rgba(255,255,255,.4)}\n.bb-ic--spot i::after{content:\"\";position:absolute;inset:14px;border-radius:50%;background:var(--indigo-300);opacity:.25;animation:bb-p 2.4s ease-in-out infinite}\n.bb-ic--tun i{position:absolute;left:0;right:0;top:22px;height:12px;border-radius:999px;background:linear-gradient(90deg,var(--indigo-300) 0 12%,#000 12% 88%,var(--indigo-300) 88%);border:1px solid rgba(255,255,255,.2)}\n.bb-ic--tun i::after{content:\"\";position:absolute;left:12%;right:12%;top:50%;border-top:2px dashed rgba(255,255,255,.35)}\n@keyframes bb-p{50%{opacity:.7}}\n@media (prefers-reduced-motion:reduce){.bb-ic--spot i::after{animation:none}}\n.bb-sc{margin:24px 0 0;display:grid;gap:14px}\n@media (min-width:760px){.bb-sc{grid-template-columns:1fr 1fr}}\n.bb-sc div{padding:20px 22px;border-radius:var(--radius-xl,20px);border:1px solid var(--bz-line,rgba(5,5,16,.1));background:var(--brand-paper-2)}\n.bb-sc small{font:600 11px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--brand-accent)}\n.bb-sc b{display:block;margin-top:8px;font:600 17px/1.25 var(--font-family-display);color:var(--brand-ink)}\n.bb-sc p{margin-top:8px!important;font-size:15px!important;line-height:1.5!important}\n.bb-sc em{display:block;margin-top:10px;font-style:normal;font-size:14px;line-height:1.45;color:var(--brand-ink);padding-top:10px;border-top:1px solid var(--bz-line,rgba(5,5,16,.1))}\n.bb-sh{margin:24px 0 0;padding:0;list-style:none;display:grid;gap:10px}\n.bb-sh li{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;padding:14px 18px;border-radius:14px;background:var(--brand-paper-2);border:1px solid var(--bz-line,rgba(5,5,16,.08))}\n.bb-sh s{text-decoration:none;color:var(--cool-500);font-size:15px}\n.bb-sh i{font-style:normal;color:var(--brand-accent)}\n.bb-sh b{font:600 15.5px/1.3 var(--font-family-display);color:var(--brand-ink)}\n@media (max-width:560px){.bb-sh li{grid-template-columns:1fr;gap:2px}.bb-sh i{display:none}}\n.bb-env{margin:24px 0 0;display:grid;gap:12px}\n@media (min-width:760px){.bb-env{grid-template-columns:1fr 1fr}}\n.bb-env div{padding:20px 22px;border-radius:var(--radius-xl,20px)}\n.bb-env div:first-child{background:var(--indigo-50);border:1px solid var(--indigo-100)}\n.bb-env div:last-child{background:var(--brand-ink);color:#fff}\n.bb-env small{font:600 11px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--brand-accent)}\n.bb-env div:last-child small{color:var(--indigo-300)}\n.bb-env p{margin-top:8px!important;font-size:15px!important;line-height:1.5!important}\n.bb-env div:last-child p{color:rgba(255,255,255,.75)!important}\n" }} />
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
              Black boxes, blind spots and dark tunnels
            </h1>
            <p className="pst-dek">
              Every system is green and the business still fails. What decides an outcome rarely lives in a single system, or even inside your company. A new way to look at operations: by what affects the outcome, not by who owns each piece.
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
                  {" · 7 min read"}
                </small>
              </span>
            </div>
          </header>
          {"\n"}
          <div className="pst-cover bb-cover" aria-hidden="true">
            <div className="bb-row">
              <div className="bb-it">
                <div className="bb-ic bb-ic--box">
                  <i />
                </div>
                <b>
                  Black boxes
                </b>
                <span>
                  Entities that do something important, but whose inside you cannot see.
                </span>
              </div>
              <div className="bb-it">
                <div className="bb-ic bb-ic--spot">
                  <i />
                </div>
                <b>
                  Blind spots
                </b>
                <span>
                  Systems, decisions and services that affect the outcome out of your view.
                </span>
              </div>
              <div className="bb-it">
                <div className="bb-ic bb-ic--tun">
                  <i />
                </div>
                <b>
                  Dark tunnels
                </b>
                <span>
                  Complete journeys that cross black boxes and blind spots.
                </span>
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
                    <a href="#all-green">
                      All green, and nothing works
                    </a>
                  </li>
                  <li>
                    <a href="#three-hidden-worlds">
                      Three hidden worlds
                    </a>
                  </li>
                  <li>
                    <a href="#what-you-control">
                      What you control and what you don’t
                    </a>
                  </li>
                  <li>
                    <a href="#four-scenarios">
                      Four scenarios
                    </a>
                  </li>
                  <li>
                    <a href="#what-changes">
                      What changes
                    </a>
                  </li>
                  <li>
                    <a href="#what-it-is-not">
                      What it is not
                    </a>
                  </li>
                  <li>
                    <a href="#one-reality">
                      One observable reality
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
                At 9 a.m. on a Saturday, a coffee shop is ready: full staff, inventory, point of sale, network and customers at the door. Every system is green. And it does not sell a single coffee. The power is out in the area: no refrigeration, no espresso machine, no air conditioning.
              </p>
              {"\n"}
              <p>
                The technology was healthy. The outcome was impossible. Observability that stops at the software boundary misses the very event that matters most.
              </p>
              {"\n"}
              <aside className="pst-cta">
                <div>
                  <b>
                    Find your dark tunnels
                  </b>
                  <span>
                    Let’s identify together which part of your operation you cannot see today.
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
              <h2 id="all-green">
                All green, and nothing works
              </h2>
              {"\n"}
              <p>
                Traditional visibility is organized by ownership: my application, my infrastructure, my department, my report. It is useful, but incomplete. Customers, citizens and employees do not experience a company according to its org chart. They experience one continuous reality.
              </p>
              {"\n"}
              <p>
                That is why Business Observability is not just a newer monitoring technology. It is another way of seeing the organization: as a living system where everything affects everything. Rain alters traffic, traffic delays staff, staffing sets service capacity, capacity sets wait time and wait time turns into complaints. Each system records a different fact. For the business it is one event.
              </p>
              {"\n"}
              <p className="pst-pull">
                The goal is not to control everything. It is to make the reality that decides the outcome observable, whoever owns each piece.
              </p>
              {"\n\n"}
              <h2 id="three-hidden-worlds">
                Three hidden worlds
              </h2>
              {"\n"}
              <p>
                Every organization has areas that are hard to understand in real time. We name them because what gets named can be managed.
              </p>
              {"\n"}
              <h3>
                Black boxes: closed entities
              </h3>
              {"\n"}
              <p>
                A black box does something important, but its internal state is opaque. It does not matter whether it is owned or third-party, digital or physical. An espresso machine: coffee, water and instructions go in; a drink comes out; the internal failure is hidden. A connected tractor whose software and diagnostics are controlled by the manufacturer. An outsourced fulfillment center: an order goes in, a package comes out, and what happens in between is invisible. A SaaS, an AI model or a payment platform.
              </p>
              {"\n"}
              <p>
                A black box is not bad or broken. It is a visibility condition.
              </p>
              {"\n"}
              <h3>
                Blind spots: what acts out of your view
              </h3>
              {"\n"}
              <p>
                They are narrower: systems, checks, decisions or services that affect the outcome but are not continuously present in the operation’s view. The information exists. Someone could log into a portal or call the provider. The problem is that it does not take part in real time. Think fraud checks, identity verification, SMS or email delivery, third-party APIs, tax or credit lookups, or a vendor decision that lives in its portal.
              </p>
              {"\n"}
              <h3>
                Dark tunnels: the whole journey
              </h3>
              {"\n"}
              <p>
                A dark tunnel is the end-to-end journey: it crosses systems, people, devices, companies, approvals, physical places and external conditions. The company clearly sees the beginning and the end, but the middle is split among many owners and technologies.
              </p>
              {"\n"}
              <blockquote>
                {"If the customer lives one journey and the company sees many unrelated systems, tickets and reports, "}
                <em>
                  there is a dark tunnel between them.
                </em>
              </blockquote>
              {"\n\n"}
              <h2 id="what-you-control">
                What you control and what you don’t
              </h2>
              {"\n"}
              <p>
                There is a second, separate idea: the boundary of authority. Modern companies operate in two environments at once.
              </p>
              {"\n"}
              <div className="bb-env">
                <div>
                  <small>
                    Controlled environment
                  </small>
                  <p>
                    What the company directly commands: its systems, processes, people, assets and locations.
                  </p>
                </div>
                <div>
                  <small>
                    Uncontrolled environment
                  </small>
                  <p>
                    What affects it without its authority: suppliers, banks, APIs, logistics operators, partners, customer devices, and the physical world: weather, traffic, power, roads and social conditions.
                  </p>
                </div>
              </div>
              {"\n"}
              <p>
                The customer journey does not recognize that boundary. It simply works or fails. That is why business observability has to understand the full reality on both sides, and treat the physical world not as external context, but as part of the system.
              </p>
              {"\n\n"}
              <h2 id="four-scenarios">
                Four scenarios
              </h2>
              {"\n"}
              <div className="bb-sc">
                {"\n"}
                <div>
                  <small>
                    Payments
                  </small>
                  <b>
                    The cost of a hidden decision
                  </b>
                  <p>
                    A merchant sees a payment as a simple event: approved or declined. In between there is fraud screening, tokenization, routing, the acquirer and the issuing bank’s risk analysis. If the issuer declines a customer who has bought many times before as suspected fraud, the merchant accepts the decline as a fact.
                  </p>
                  <em>
                    It is not about controlling the bank’s algorithm, but about connecting that decision with the customer’s history, abandonment and lost margin.
                  </em>
                </div>
                {"\n"}
                <div>
                  <small>
                    Fulfillment
                  </small>
                  <b>
                    A black box in the middle of commerce
                  </b>
                  <p>
                    The merchant knows the order was sent and, days later, that it shipped. In between there is inventory, picking, labor, equipment, labels, the carrier and exceptions.
                  </p>
                  <em>
                    It is not about replacing the operator, but about knowing whether the order is stuck, whether the delay is isolated or systemic and which customers will be affected.
                  </em>
                </div>
                {"\n"}
                <div>
                  <small>
                    Banking
                  </small>
                  <b>
                    Beyond the branch
                  </b>
                  <p>
                    A customer opens an account digitally, receives a card by courier and later deposits at a partner store. For them it is one experience. For the bank it crosses credit bureaus, the card maker, the courier, the customer’s phone, the partner’s network and payment rails.
                  </p>
                  <em>
                    No participant controls the whole journey. Business Observability connects enough signals to know where the experience is and what action is still possible.
                  </em>
                </div>
                {"\n"}
                <div>
                  <small>
                    Public service
                  </small>
                  <b>
                    When the real world is the workflow
                  </b>
                  <p>
                    A storm hits several locations. Internal systems look normal, but roads are blocked, power is down, staff cannot arrive and one location has stopped reporting.
                  </p>
                  <em>
                    The question is whether leadership can see, in one reality, the event, the locations and people at risk, the current state and the next action.
                  </em>
                </div>
                {"\n"}
              </div>
              {"\n"}
              <p>
                The same happens in streaming: the experience does not begin when the video starts, but much earlier, when the device wakes, the user is authenticated, the catalog loads and rights are verified. If the customer leaves before the first frame, was the failure in streaming, or in a hidden dependency inside the tunnel?
              </p>
              {"\n\n"}
              <h2 id="what-changes">
                What changes
              </h2>
              {"\n"}
              <p>
                The underlying shift is not more monitoring. It is changing what the organization considers observable.
              </p>
              {"\n"}
              <ul className="bb-sh">
                {"\n"}
                <li>
                  <s>
                    From ownership
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    to relevance: if it affects the outcome, it is observed
                  </b>
                </li>
                {"\n"}
                <li>
                  <s>
                    From isolated health
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    to relationships: a healthy component can coexist with a failing journey
                  </b>
                </li>
                {"\n"}
                <li>
                  <s>
                    From digital only
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    to digital and physical: people, machines, locations, weather and power
                  </b>
                </li>
                {"\n"}
                <li>
                  <s>
                    From reporting the past
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    to the present state, while action is still possible
                  </b>
                </li>
                {"\n"}
                <li>
                  <s>
                    From visibility
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    to action: alert, reroute, escalate, communicate or automate
                  </b>
                </li>
                {"\n"}
                <li>
                  <s>
                    From perfect data
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    to useful, trustworthy evidence
                  </b>
                </li>
                {"\n"}
              </ul>
              {"\n\n"}
              <h2 id="what-it-is-not">
                What it is not
              </h2>
              {"\n"}
              <p>
                To avoid misunderstandings, a few clear limits:
              </p>
              {"\n"}
              <ul>
                <li>
                  Not every black box must be opened. Often it is enough to observe its inputs, outputs, state and consequences.
                </li>
                <li>
                  Nobody controls weather, traffic or suppliers. The goal is to understand their effect and keep options for action.
                </li>
                <li>
                  It does not replace IT observability: infrastructure and applications remain part of the observable reality.
                </li>
                <li>
                  It is not total visibility from day one. You start with what matters most, prove value and expand coverage.
                </li>
              </ul>
              {"\n\n"}
              <h2 id="one-reality">
                One observable reality
              </h2>
              {"\n"}
              <p>
                Companies do not operate inside clean boundaries. Their outcomes emerge from a mix of owned systems, outsourced services, machines, people, customer devices, suppliers, locations, weather, traffic, power and hidden decisions. Traditional visibility sees those pieces separately. The organization does not live separately.
              </p>
              {"\n"}
              <p className="pst-pull">
                From managing what we own to understanding everything that affects the outcome.
              </p>
              {"\n"}
              <p>
                Business Observability is the discipline of bringing those realities into one field of awareness: not because the company owns everything, but because everything that matters to the outcome deserves to be understood. One reality: connected, observable, understandable and actionable.
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
        </section>
        {"\n"}
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              Which part of your operation can’t you see today?
            </h2>
            <p className="mt-5 max-w-[560px] text-pretty text-body-m text-[#d8d8d8] lg:mt-6 lg:text-body-l">
              Let’s talk about making it observable with BzzzBX.
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
