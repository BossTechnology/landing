import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/blog/ai-observability",
  title: "Why observability is the foundation of AI in the enterprise · Boss.Technology",
  description: "AI creates value when it operates on the reality of the business. How observability and BzzzBX become structural for enterprise AI: central intelligence, lighter models and governance.",
});

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ".post-body h3{margin-top:30px;font:600 20px/1.3 var(--font-family-display);color:var(--brand-ink)}.post-body .pst-pull{margin:36px 0;padding:4px 0 4px 24px;border-left:3px solid var(--brand-accent);font:500 clamp(21px,2.3vw,26px)/1.35 var(--font-family-display);letter-spacing:-.01em;color:var(--brand-ink);text-wrap:balance}.pst-box{margin:32px 0;padding:24px 26px;border-radius:var(--radius-xl,20px);background:var(--indigo-50);border:1px solid var(--indigo-100)}.pst-box h3{margin:0 0 6px;font:600 13px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--brand-accent)}.pst-box dl{margin:12px 0 0;display:grid;gap:12px}.pst-box dt{font:600 16px/1.3 var(--font-family-display);color:var(--brand-ink)}.pst-box dd{margin:2px 0 0;font-size:15.5px;line-height:1.55;color:var(--cool-700)}.post-fig--wide{margin-left:-6%;margin-right:-6%}@media (max-width:899px){.post-fig--wide{margin-left:0;margin-right:0}}.pst-vs{margin:28px 0 0;display:grid;gap:14px}@media (min-width:720px){.pst-vs{grid-template-columns:1fr 1fr}}.pst-vs div{padding:20px 22px;border-radius:var(--radius-xl,20px);border:1px solid var(--bz-line,rgba(5,5,16,.1));background:var(--brand-paper-2)}.pst-vs div.on{background:var(--brand-ink);border-color:transparent}.pst-vs small{font:600 12px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--cool-500)}.pst-vs div.on small{color:var(--indigo-300)}.pst-vs p{margin-top:8px!important;font-size:16.5px!important;line-height:1.55!important}.pst-vs div.on p{color:color-mix(in srgb,var(--brand-paper-2) 82%,transparent)!important}" }} />
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
                Applied AI
              </li>
              <li>
                BzzzBX
              </li>
            </ul>
            <h1>
              Why observability is the foundation of AI in the enterprise
            </h1>
            <p className="pst-dek">
              {"AI agents are more capable every month. But a brilliant agent that can't see the whole business still decides blind. This is the difference between mission-centric and action-centric AI, and why observability is what sets them apart."}
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
                  <time dateTime="2026-11-12">
                    November 12, 2026
                  </time>
                  {" · 9 min read"}
                </small>
              </span>
            </div>
          </header>
          {"\n"}
          <div className="pst-cover">
            <img src="/assets/blog/ia-hero.webp" alt="" width="1600" height="760" />
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
                    <a href="#the-agent-that-did-its-job">
                      The agent that did its job
                    </a>
                  </li>
                  <li>
                    <a href="#a-brain-without-a-body">
                      A brain without a body
                    </a>
                  </li>
                  <li>
                    <a href="#two-ways-to-turn-activity-into-action">
                      Two ways to turn activity into action
                    </a>
                  </li>
                  <li>
                    <a href="#reasoning-across-the-business">
                      Reasoning across the business
                    </a>
                  </li>
                  <li>
                    <a href="#different-intelligences-one-purpose">
                      Different intelligences, one purpose
                    </a>
                  </li>
                  <li>
                    <a href="#the-economics-of-prepared-context">
                      The economics of prepared context
                    </a>
                  </li>
                  <li>
                    <a href="#governance-ai-proposes-workflows-execute">
                      Governance: AI proposes, workflows execute
                    </a>
                  </li>
                  <li>
                    <a href="#where-to-go-from-here">
                      Where to go from here
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
                On a Tuesday morning, the replenishment agent at a distribution company does exactly what it was asked to do. It detects that a key customer is about to run out of product, checks inventory, finds available units at the northern distribution center and schedules an urgent shipment. Mission accomplished, in minutes, with no human involved.
              </p>
              {"\n"}
              <p>
                {"What the agent didn't know is that the northern plant had lost a third of its shift to absenteeism that morning, that two of its trucks were in maintenance, and that the urgent shipment displaced four other orders committed to higher-margin customers. Nobody had given it that context. It wasn't part of its mission."}
              </p>
              {"\n"}
              <p>
                {"The result: one task solved and a bigger problem created. And the most unsettling part is that, looking only at the agent's metric, everything looked fine."}
              </p>
              {"\n"}
              <aside className="pst-cta">
                <div>
                  <b>
                    Bring AI to your real operation
                  </b>
                  <span>
                    Connect assistants and agents to your company’s live data with BzzzBX.
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
              <h2 id="the-agent-that-did-its-job">
                The agent that did its job
              </h2>
              {"\n"}
              <p>
                {"The scene repeats itself every time a company takes artificial intelligence from the demo to the operation. The pilot works with sample data, assistants answer fluently and agents complete their tasks. But once the system touches the reality of the business, a question appears that no model can answer on its own: "}
                <b>
                  what else is moving while I act?
                </b>
              </p>
              {"\n"}
              <p>
                {"The problem isn't the agent's intelligence. Today's models reason, plan and use tools with a capability that seemed distant two years ago. The problem is what the agent can see. In most companies, that is a fraction: the systems someone connected it to, the permissions someone granted, the data it manages to gather in the moment."}
              </p>
              {"\n"}
              <p className="pst-pull">
                An agent can complete its mission perfectly and, at the same time, damage the business it was meant to serve.
              </p>
              {"\n\n"}
              <h2 id="a-brain-without-a-body">
                A brain without a body
              </h2>
              {"\n"}
              <p>
                There is an image we use often at Boss.Technology: AI without observability is like a brain without a body. A brain, however brilliant, depends on its senses to move through the world. Without eyes, touch or memory of what just happened, it can only speculate.
              </p>
              {"\n"}
              <p>
                {"The same happens to AI inside a company. A model knows a lot about the world, but almost nothing about what is happening in your operation right now. Without live signals, business context and history, it answers with whatever is at hand: scattered documents, last week's report or general knowledge. That is where generic answers, runaway costs and the risk of making things up come from."}
              </p>
              {"\n"}
              <p>
                Business observability is, in this metaphor, the nervous system: it receives every signal in the company, gives it context, relates it to the others and keeps it available to anyone who needs to reason about it.
              </p>
              {"\n\n"}
              <h2 id="two-ways-to-turn-activity-into-action">
                Two ways to turn activity into action
              </h2>
              {"\n"}
              <p>
                Two ways of bringing AI into operations coexist today. They are worth naming, because the difference between them defines much of the value a company will get from its investment.
              </p>
              {"\n"}
              <h3>
                The agentic approach: mission first
              </h3>
              {"\n"}
              <p>
                In the agentic approach, each assistant, agent or crew receives a mission and assembles its own context to complete it. It queries the ERP, reads email, checks orders, requests permissions, reconciles what it finds and delivers an answer or takes an action. It is a powerful model for research, bounded automation and development.
              </p>
              {"\n"}
              <p>
                But as missions multiply, the architecture becomes a labyrinth. Each agent repeats the work of searching and reconciling data. Permissions and decision records are scattered across tools. Integrations become dependencies. And every silo ends up as a black box: results are measured, but inputs, decisions and the authority behind them are not inspected.
              </p>
              {"\n"}
              <p className="pst-pull">
                {"Measuring an agent's performance is not the same as being in control of it."}
              </p>
              {"\n"}
              <h3>
                The Act-centric approach: action on shared understanding
              </h3>
              {"\n"}
              <p>
                {"The Act-centric approach (from "}
                <i>
                  action centric
                </i>
                ) reverses the order. First comes a shared understanding of the organization, and missions and actions are built on top of it. Every signal in the company enters once, receives business context and is correlated with the others in real time. People, applications and agents start from the same central intelligence instead of rebuilding it for every task.
              </p>
              {"\n"}
              <div className="pst-vs">
                <div>
                  <small>
                    Agentic
                  </small>
                  <p>
                    How do I complete this task? Each mission assembles its own context, permissions and records.
                  </p>
                </div>
                <div className="on">
                  <small>
                    Act-centric
                  </small>
                  <p>
                    Does this action fit the conditions, dependencies, risks and objectives of the whole company?
                  </p>
                </div>
              </div>
              {"\n"}
              <figure className="post-fig">
                <img src="/assets/blog/ia-cover.webp" alt="" width="1600" height="900" loading="lazy" />
                <figcaption>
                  Receive, reason and respond: signals from across the company feed a central intelligence that people and agents use to act.
                </figcaption>
              </figure>
              {"\n"}
              <p>
                The two approaches are not mutually exclusive. Agents also reason and can share context. The difference lies in the breadth, continuity and governance of that context: whether each agent sees its own part, or all of them work on the whole business.
              </p>
              {"\n\n"}
              <h2 id="reasoning-across-the-business">
                Reasoning across the business
              </h2>
              {"\n"}
              <p>
                {"Back to Tuesday's agent. With a central intelligence in place, its question would not have been only how to supply the customer, but whether that shipment made sense given current conditions: plant capacity, available trucks, committed orders and their margins. It would have proposed something else, or escalated the decision with the full evidence."}
              </p>
              {"\n"}
              <p>
                For that reasoning to be possible, intelligence needs two references:
              </p>
              {"\n"}
              <ul>
                <li>
                  <b>
                    Golden signals
                  </b>
                  : the conditions that deserve attention. Not all the data, but the data that indicates something relevant is changing.
                </li>
                <li>
                  <b>
                    Key Business Results (KBRs)
                  </b>
                  : what the organization seeks to achieve. They connect operational activity to business purpose and make it possible to verify whether an action had the intended effect.
                </li>
              </ul>
              {"\n"}
              <p>
                With both, an operations company can detect supply pressure against its commitments, prioritize orders and verify fulfillment against the KBR. A network of distributed sites can let golden signals point to the locations that need attention, authorize action and observe the outcome, instead of checking equipment, staffing, security and weather site by site.
              </p>
              {"\n"}
              <aside className="pst-box">
                <h3>
                  Short glossary
                </h3>
                <dl>
                  <dt>
                    Real Time Central Intelligence
                  </dt>
                  <dd>
                    {"The shared understanding that connects the organization's activity, relationships, history and objectives, available to people, applications and agents."}
                  </dd>
                  <dt>
                    Golden signals
                  </dt>
                  <dd>
                    The conditions that deserve attention because they anticipate a change that matters to the business.
                  </dd>
                  <dt>
                    KBRs
                  </dt>
                  <dd>
                    Key Business Results: the outcomes the organization pursues and against which every action is verified.
                  </dd>
                </dl>
              </aside>
              {"\n\n"}
              <h2 id="different-intelligences-one-purpose">
                Different intelligences, one purpose
              </h2>
              {"\n"}
              <p>
                {"A company doesn't have a single intelligence. It has many, and each brings a different perspective. Human judgment understands nuance, relationships and priorities. Applied AI interprets large volumes of information. Machines report their state and performance. Living systems, like weather or crops, impose conditions. Social relationships shape the behavior of customers and teams. Specialized agents solve concrete tasks."}
              </p>
              {"\n"}
              <figure className="post-fig post-fig--wide">
                <img src="/assets/blog/ia-carretera.webp" alt="Illustration of a highway where different forms of intelligence travel together: human, artificial, mechanical, natural, social, specialized agents, scientific and spatial, guided by signs for context, golden signals, governance and shared purpose" width="1536" height="1024" loading="lazy" />
                <figcaption>
                  The highway of central intelligence: different intelligences travel together. Context informs, golden signals guide attention, governance defines authority and KBRs mark the shared destination.
                </figcaption>
              </figure>
              {"\n"}
              <p>
                {"The highway sums up the idea. All these intelligences travel in the same direction, but they only arrive together if they share the road. The signs matter as much as the vehicles: "}
                <b>
                  context
                </b>
                {" makes conditions understandable, "}
                <b>
                  golden signals
                </b>
                {" show where to focus, "}
                <b>
                  governance
                </b>
                {" defines who can do what, and "}
                <b>
                  shared purpose
                </b>
                , expressed in KBRs, marks the destination.
              </p>
              {"\n"}
              <h3>
                Continuous Consciousness
              </h3>
              {"\n"}
              <p>
                {"We call this understanding that develops over time "}
                <b>
                  Continuous Consciousness
                </b>
                : the way an organization observes reality, connects context, learns from experience and guides purposeful action. Every action and every observed outcome expands that understanding; exploration and experimentation add new perspectives.
              </p>
              {"\n"}
              <p>
                To be precise: this is an organizational and architectural concept. It describes evolving understanding, not subjective machine awareness or automatic model retraining.
              </p>
              {"\n\n"}
              <h2 id="the-economics-of-prepared-context">
                The economics of prepared context
              </h2>
              {"\n"}
              <p>
                One argument often goes unnoticed in conversations about AI: cost. When every agent has to search, gather and reconcile information on its own, complex missions demand large models, many calls between tools and waiting time. As missions grow, so do queries to source systems.
              </p>
              {"\n"}
              <p>
                When context arrives prepared, the equation changes. The central intelligence processes signals continuously and AI focuses on interpreting a bounded problem. That has concrete consequences:
              </p>
              {"\n"}
              <ul>
                <li>
                  <b>
                    Lighter models
                  </b>
                  : a smaller model, even a local one, is enough to interpret and answer.
                </li>
                <li>
                  <b>
                    Lower cost
                  </b>
                  : fewer tokens, fewer calls, less repeated AI work.
                </li>
                <li>
                  <b>
                    Speed
                  </b>
                  : context is ready; freshness follows source delivery, not a new search.
                </li>
                <li>
                  <b>
                    Scale
                  </b>
                  : one intelligence serves teams and agents; you plan ingestion and storage, not the orchestration of every mission.
                </li>
                <li>
                  <b>
                    Sovereignty
                  </b>
                  : the customer controls deployment and data; the model can run on its own infrastructure.
                </li>
              </ul>
              {"\n\n"}
              <h2 id="governance-ai-proposes-workflows-execute">
                Governance: AI proposes, workflows execute
              </h2>
              {"\n"}
              <p>
                {"Connecting AI to real operations requires control, and control cannot be an afterthought. Security organizations like OWASP already identify risks specific to generative AI, including "}
                <b>
                  excessive agency
                </b>
                {" (when a system has more autonomy or permissions than it should) and "}
                <b>
                  prompt injection
                </b>
                . With scattered missions, both risks multiply.
              </p>
              {"\n"}
              <p>
                {"In BzzzBX, "}
                <b>
                  Frost Bridge
                </b>
                {" scopes which data and tools each assistant or agent can access, and policies define what it can do. Agents reason and propose; only deterministic, auditable, bounded workflows execute actions, with confidence thresholds, attached evidence, human approval and stop controls."}
              </p>
              {"\n"}
              <figure className="fb">
                <p className="fb-t">
                  Frost Bridge · scoped access
                </p>
                <div className="fb-g">
                  <ul className="fb-who">
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
                  <span className="fb-ar" aria-hidden="true" />
                  <div className="fb-gate">
                    <b>
                      Frost Bridge
                    </b>
                    <ul>
                      <li>
                        Scope per agent
                      </li>
                      <li>
                        Action policies
                      </li>
                      <li>
                        Every query logged
                      </li>
                    </ul>
                  </div>
                  <span className="fb-ar" aria-hidden="true" />
                  <div className="fb-data">
                    <p>
                      Bzzz
                      <span>
                        BX
                      </span>
                    </p>
                    <ul>
                      <li className="ok">
                        <i>
                          ✓
                        </i>
                        <span>
                          Sales and orders
                        </span>
                        <b>
                          Allowed
                        </b>
                      </li>
                      <li className="ok">
                        <i>
                          ✓
                        </i>
                        <span>
                          Inventory
                        </span>
                        <b>
                          Allowed
                        </b>
                      </li>
                      <li className="no">
                        <i>
                          ✕
                        </i>
                        <span>
                          Personal data
                        </span>
                        <b>
                          Blocked
                        </b>
                      </li>
                      <li className="no">
                        <i>
                          ✕
                        </i>
                        <span>
                          Finance
                        </span>
                        <b>
                          Out of scope
                        </b>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="fb-flow">
                  <span>
                    Proposed action
                  </span>
                  <span className="fa">
                    →
                  </span>
                  <span>
                    Human approval
                  </span>
                  <span className="fa">
                    →
                  </span>
                  <span>
                    Deterministic workflow
                  </span>
                </div>
                <figcaption>
                  Illustrative. Each assistant or agent sees only what its scope allows, and every action goes through approval and an auditable workflow.
                </figcaption>
              </figure>
              {"\n"}
              <p>
                Working on evidence reduces the risk of hallucination, but data and decisions still require validation. That is why traceability links every action to the condition that triggered it, the source, the owner and the approval, and records the observed outcome.
              </p>
              {"\n\n"}
              <h2 id="where-to-go-from-here">
                Where to go from here
              </h2>
              {"\n"}
              <p>
                The recommendation is not to abandon agents. It is to place them where they perform best and give them the context they need:
              </p>
              {"\n"}
              <ul>
                <li>
                  Use agents for research, development and varied missions, with explicit access and execution limits.
                </li>
                <li>
                  Build the missions that touch operations on shared intelligence, with governed action and organizational objectives.
                </li>
                <li>
                  Measure every action against business results, not just against the assigned task.
                </li>
              </ul>
              {"\n"}
              <p>
                On that foundation, AI stops being an isolated experiment and becomes a business capability: internal chat that answers with evidence, agents that watch golden signals and propose actions before problems escalate, copilots per area working on the same truth, predictions of demand, failures or churn, and automation with full traceability.
              </p>
              {"\n"}
              <blockquote>
                {"AI does not own the truth. "}
                <em>
                  It operates on the truth.
                </em>
              </blockquote>
              {"\n"}
              <p>
                Completing the mission is no longer enough. The question that separates companies that get value from AI from those that pile up pilots is a different one: whether every action understands its consequences across the organization. Business observability is what makes that answer possible.
              </p>
              {"\n"}
              <div className="post-links">
                <Link className="bz-more" href="/en/ia-aplicada">
                  Explore Applied AI
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link className="bz-more" href="/en/productos/plataformas">
                  Explore BzzzBX
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link className="bz-more" href="/en/bo11y">
                  What is Bo11y
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
          </div>
        </section>
        {"\n"}
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              Want to bring AI into your real operations?
            </h2>
            <p className="mt-5 max-w-[560px] text-pretty text-body-m text-[#d8d8d8] lg:mt-6 lg:text-body-l">
              {"Let's talk about connecting it to your data with BzzzBX."}
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
