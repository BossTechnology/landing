import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/en/casos/caso-4",
  title: "Mining: maintenance that gets ahead of failure · Business cases · Boss.Technology",
  description: "How a mine moves from calendar-based to condition-based maintenance and syncs maintenance, supply, people and production with BzzzBX.",
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
                Business case · Mining
              </span>
              <h1 className="ph-h1">
                Mining: maintenance that gets ahead of failure and syncs the whole mine
              </h1>
            </div>
          </section>
          <div className="ph-cover">
            <img src="/assets/brand/case-mineria.jpg" alt="" className="size-full object-cover" />
          </div>
          <div className="mx-auto max-w-[1200px] px-5 py-10 lg:px-6 lg:py-14">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Mining
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Maintenance
              </span>
              <span className="rounded-full bg-accent-base/10 px-4 py-2 text-body-m font-medium text-accent-base">
                Operations
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
                        Open-pit mining
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Focus
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        Condition-based maintenance
                      </dd>
                    </div>
                    <div>
                      <dt className="text-body-xs uppercase tracking-wide text-ink/45">
                        Products
                      </dt>
                      <dd className="mt-1 text-body-m text-ink">
                        BzzzBX, Machina, Metamap, Eyesite, Signal Maker
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
                    A mine can service every critical asset at exactly the right moment, with the part, the technician and the bay ready. Most still wait for the failure to decide for them.
                  </p>
                  <div className="cs-scene">
                    <time>
                      Tuesday, 03:40 · north ramp
                    </time>
                    <p>
                      A haul truck stops halfway up the ramp with 220 tonnes on board. The final drive temperature sensor had been warning for ten days, but that signal lived in another system. What follows is familiar:
                    </p>
                    <ul>
                      <li>
                        The part is not in the warehouse: it arrives in four days.
                      </li>
                      <li>
                        The specialist mechanic is on the afternoon shift.
                      </li>
                      <li>
                        The workshop bay is busy with a 500-hour service on a healthy truck.
                      </li>
                      <li>
                        Production loses the truck without knowing when it will be back.
                      </li>
                    </ul>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    Nobody did anything wrong. Every area did its job with the information it had. The problem is that none of them had the full picture.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The problem
                  </p>
                  <h2>
                    The data exists. What is missing is seeing it together.
                  </h2>
                  <p>
                    {"Temperature, pressure, vibration, oil analysis, operating hours, work orders, inventory, shifts and the mine plan: almost everything is already measured. But it lives in sensors, the dispatch system, the CMMS, the ERP, the lab and, sometimes, on paper or in the operator's voice."}
                  </p>
                  <p>
                    As a result, every area decides on its own part of the truth.
                  </p>
                  <figure className="cs-fig">
                    <p className="cs-fig-t">
                      Each area sees one part
                    </p>
                    <div className="cs-silos">
                      <div className="cs-silo">
                        <b>
                          Maintenance
                        </b>
                        <span className="y">
                          <i>
                            Sees:
                          </i>
                          {" hour meter and work orders"}
                        </span>
                        <span className="n">
                          <i>
                            Misses:
                          </i>
                          {" live condition and production impact"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Supply
                        </b>
                        <span className="y">
                          <i>
                            Sees:
                          </i>
                          {" inventory and purchasing"}
                        </span>
                        <span className="n">
                          <i>
                            Misses:
                          </i>
                          {" which part will be needed, until the asset is already down"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Workshop
                        </b>
                        <span className="y">
                          <i>
                            Sees:
                          </i>
                          {" bays, technicians and cranes"}
                        </span>
                        <span className="n">
                          <i>
                            Misses:
                          </i>
                          {" what is coming next week"}
                        </span>
                      </div>
                      <div className="cs-silo">
                        <b>
                          Production
                        </b>
                        <span className="y">
                          <i>
                            Sees:
                          </i>
                          {" plan and tonnage"}
                        </span>
                        <span className="n">
                          <i>
                            Misses:
                          </i>
                          {" when the stopped asset will be back"}
                        </span>
                      </div>
                    </div>
                    <p className="cs-cap">
                      Where there are no sensors, such as uninstrumented assets or manual records, the operation is blind.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    A change of philosophy
                  </p>
                  <h2>
                    From the calendar to the condition
                  </h2>
                  <p>
                    Hour-meter programs service every 250 or 500 hours without knowing the real state of the asset. That creates two mistakes at once: healthy components are serviced too early, and fast-degrading ones too late.
                  </p>
                  <figure className="cs-fig cs-curve">
                    <p className="cs-fig-t">
                      Component condition vs. hour-meter services
                    </p>
                    <svg viewBox="0 -8 620 208" role="img" aria-label="Condition curve of a component declining with operating hours. Services at 250 and 500 hours find a healthy component; the failure happens at 710 hours, before the 750-hour service. The optimal condition-based window is between 575 and 640 hours.">
                      <g className="grid">
                        <line x1="40" y1="20" x2="600" y2="20" />
                        <text className="ax" x="34" y="24" textAnchor="end">
                          100 %
                        </text>
                        <line x1="40" y1="58" x2="600" y2="58" />
                        <text className="ax" x="34" y="62" textAnchor="end">
                          75 %
                        </text>
                        <line x1="40" y1="95" x2="600" y2="95" />
                        <text className="ax" x="34" y="99" textAnchor="end">
                          50 %
                        </text>
                      </g>
                      <rect className="win" x="362" y="14" width="36" height="156" rx="4" />
                      <line className="th" x1="40" y1="50" x2="600" y2="50" />
                      <line className="hr" x1="180" y1="14" x2="180" y2="170" />
                      <text className="hrl" x="180" y="190" textAnchor="middle">
                        250 h
                      </text>
                      <line className="hr" x1="320" y1="14" x2="320" y2="170" />
                      <text className="hrl" x="320" y="190" textAnchor="middle">
                        500 h
                      </text>
                      <line className="hr" x1="460" y1="14" x2="460" y2="170" />
                      <text className="hrl" x="460" y="190" textAnchor="middle">
                        750 h
                      </text>
                      <polyline className="hl" points="40,20 96,21 152,22 208,24 264,29 320,38 354,47 376,56 398,68 421,86 438,107" />
                      <circle className="ok" cx="180" cy="22" r="5" />
                      <text className="lb warn" x="180" y="6" textAnchor="middle">
                        Unneeded service
                      </text>
                      <circle className="ok" cx="320" cy="38" r="5" />
                      <text className="lb warn" x="310" y="78" textAnchor="end">
                        Another service, still healthy
                      </text>
                      <text className="lb good" x="380" y="6" textAnchor="middle">
                        Optimal window
                      </text>
                      <circle className="fail" cx="438" cy="107" r="7" />
                      <text className="lb bad" x="428" y="129" textAnchor="end">
                        Failure before the 750 h service
                      </text>
                    </svg>
                    <div className="cs-leg">
                      <span>
                        <i />
                        Component condition
                      </span>
                      <span>
                        <i className="t" />
                        Alert threshold
                      </span>
                      <span>
                        <i className="w" />
                        Intervention window
                      </span>
                      <span>
                        <i className="h" />
                        Hour-meter service
                      </span>
                    </div>
                    <p className="cs-cap">
                      Illustrative curve. With condition-based maintenance, the job is scheduled when the signal crosses the threshold, days ahead of the failure.
                    </p>
                  </figure>
                </section>
                <blockquote className="cs-sec cs-quote">
                  <p>
                    A failure should not decide when an asset stops. The mine should.
                  </p>
                </blockquote>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The solution
                  </p>
                  <h2>
                    A central nervous system for the mine
                  </h2>
                  <p>
                    <b>
                      BzzzBX
                    </b>
                    {" connects to what the mine already has and follows a simple logic: it "}
                    <b>
                      receives
                    </b>
                    {" every signal once, "}
                    <b>
                      reasons
                    </b>
                    {" over it with business context and "}
                    <b>
                      responds
                    </b>
                    {" in seconds. Where the signal does not exist, it creates it: "}
                    <b>
                      Eyesite
                    </b>
                    {" covers blind spots in the field and "}
                    <b>
                      Signal Maker
                    </b>
                    {" turns inspections, voice reports and manual records into data."}
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Receive, reason, respond
                    </p>
                    <div className="cs-flow">
                      <ul className="src">
                        <li>
                          Plant: OPC-UA, MQTT, Modbus
                        </li>
                        <li>
                          Telemetry and dispatch
                        </li>
                        <li>
                          CMMS and work orders
                        </li>
                        <li>
                          ERP: inventory and purchasing
                        </li>
                        <li>
                          Oil analysis lab
                        </li>
                        <li className="gen">
                          Eyesite and Signal Maker
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
                            every signal, only once
                          </li>
                          <li>
                            <b>
                              Reasons
                            </b>
                            asset, component, process and impact
                          </li>
                          <li>
                            <b>
                              Responds
                            </b>
                            alerts, workflows and auditable memory
                          </li>
                        </ol>
                      </div>
                      <span className="cs-arw o" aria-hidden="true">
                        →
                      </span>
                      <ul className="out">
                        <li>
                          Prioritized alerts
                        </li>
                        <li>
                          Work orders to the CMMS
                        </li>
                        <li>
                          Machina: condition
                        </li>
                        <li>
                          Metamap: mine view
                        </li>
                        <li>
                          Auditable history
                        </li>
                      </ul>
                    </div>
                    <p className="cs-cap">
                      BzzzBX does not replace the CMMS or the ERP: it connects to them, adds context and triggers the workflows.
                    </p>
                  </figure>
                  <p style={{ marginTop: "26px" }}>
                    {"With those signals, the degradation model correlates temperature, pressure, vibration, oil, load and operating hours to estimate each component's condition, risk and intervention window. The rigid calendar becomes a "}
                    <b>
                      dynamic calendar
                    </b>
                    {", which the team runs from "}
                    <b>
                      Machina
                    </b>
                    :
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Machina · condition of critical assets
                    </p>
                    <div className="cs-mach">
                      <div className="cs-mrow hd">
                        <span>
                          Asset
                        </span>
                        <span>
                          Condition
                        </span>
                        <span>
                          Decision
                        </span>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Truck 07
                          </b>
                          <small>
                            Final drive
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar">
                            <i style={{ width: "92%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Healthy
                            </span>
                            <span>
                              92 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="">
                            No intervention
                          </em>
                          <br />
                          Keeps producing this month
                        </div>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Truck 12
                          </b>
                          <small>
                            Engine · temperature
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar w">
                            <i style={{ width: "61%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Early degradation
                            </span>
                            <span>
                              61 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="w">
                            Bring forward 12 days
                          </em>
                          <br />
                          Scheduled with part and bay
                        </div>
                      </div>
                      <div className="cs-mrow">
                        <div>
                          <b>
                            Shovel 02
                          </b>
                          <small>
                            Hydraulic system
                          </small>
                        </div>
                        <div>
                          <div className="cs-bar">
                            <i style={{ width: "84%" }} />
                          </div>
                          <div className="cs-pct">
                            <span>
                              Stable
                            </span>
                            <span>
                              84 %
                            </span>
                          </div>
                        </div>
                        <div className="cs-dec">
                          <em className="n">
                            Keep the plan
                          </em>
                          <br />
                          No changes
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
                    The whole operation
                  </p>
                  <h2>
                    When maintenance decides, the whole mine knows
                  </h2>
                  <p>
                    The biggest value is not predicting the failure, but what happens next. Since every signal reaches the same core, every area sees the same intervention at the same time, days ahead:
                  </p>
                  <figure className="cs-fig">
                    <p className="cs-fig-t">
                      One intervention, four areas in sync
                    </p>
                    <div className="cs-hub">
                      <div className="cs-hub-c">
                        <small>
                          Scheduled intervention
                        </small>
                        <b>
                          Truck 12 · Thursday 08:00 · 9 hours
                        </b>
                      </div>
                      <ul>
                        <li>
                          <b>
                            Supply
                          </b>
                          <span>
                            Engine kit reserved; the part in transit arrives Wednesday.
                          </span>
                        </li>
                        <li>
                          <b>
                            People
                          </b>
                          <span>
                            Two specialist mechanics assigned to shift A.
                          </span>
                        </li>
                        <li>
                          <b>
                            Workshop
                          </b>
                          <span>
                            Bay 3 and overhead crane reserved.
                          </span>
                        </li>
                        <li>
                          <b>
                            Production
                          </b>
                          <span>
                            Shift plan adjusted: −1 truck, tonnage redistributed.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <p className="cs-cap">
                      The work order reaches the CMMS the mine already uses, with full context.
                    </p>
                  </figure>
                  <p style={{ marginTop: "26px" }}>
                    In the workshop, a timeline per work order compares plan and actual at each stage. If something slips, the deviation and its cause are visible as they happen, not in the end-of-month report.
                  </p>
                  <figure className="cs-fig">
                    <p className="cs-fig-t">
                      Work order · plan vs. actual
                    </p>
                    <div className="cs-wo">
                      <div className="cs-wo-r">
                        <span>
                          Diagnosis
                        </span>
                        <div className="cs-wo-t">
                          <i className="p" style={{ left: "0%", width: "12%" }} />
                          <i className="r" style={{ left: "0%", width: "11%" }} />
                        </div>
                      </div>
                      <div className="cs-wo-r">
                        <span>
                          Parts
                        </span>
                        <div className="cs-wo-t">
                          <i className="p" style={{ left: "12%", width: "18%" }} />
                          <i className="r late" style={{ left: "11%", width: "33%" }} />
                          <em style={{ left: "calc(44% + 6px)" }}>
                            part in transit
                          </em>
                        </div>
                      </div>
                      <div className="cs-wo-r">
                        <span>
                          Repair
                        </span>
                        <div className="cs-wo-t">
                          <i className="p" style={{ left: "30%", width: "48%" }} />
                          <i className="r" style={{ left: "44%", width: "44%" }} />
                        </div>
                      </div>
                      <div className="cs-wo-r">
                        <span>
                          Testing
                        </span>
                        <div className="cs-wo-t">
                          <i className="p" style={{ left: "78%", width: "12%" }} />
                          <i className="r" style={{ left: "88%", width: "10%" }} />
                        </div>
                      </div>
                      <div className="cs-wo-ax">
                        <span />
                        <div>
                          <span>
                            08:00
                          </span>
                          <span>
                            12:30
                          </span>
                          <span>
                            17:00
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="cs-leg">
                      <span>
                        <i style={{ background: "color-mix(in srgb,var(--cool-500) 45%,transparent)" }} />
                        Planned
                      </span>
                      <span>
                        <i />
                        Actual
                      </span>
                      <span>
                        <i style={{ background: "var(--status-bad)" }} />
                        Deviation
                      </span>
                    </div>
                    <p className="cs-cap">
                      The parts delay is caught at the stage where it happens, and the bottleneck is recorded for the next intervention.
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    Cause and effect
                  </p>
                  <h2>
                    Same wear, two different endings
                  </h2>
                  <p>
                    The same wear can end in an unplanned stop or in a short, planned intervention. The difference is whether the mine sees it in time and whether every area acts on the same signal.
                  </p>
                  <div className="cs-chain" style={{ marginTop: "22px" }}>
                    <div className="cs-ch bad">
                      <b>
                        Without Business Observability, the failure decides
                      </b>
                      <ol>
                        <li>
                          Unseen wear
                        </li>
                        <li>
                          Failure in operation
                        </li>
                        <li>
                          Unplanned stop
                        </li>
                        <li>
                          Part and technicians not ready
                        </li>
                        <li>
                          Tonnes and margin lost
                        </li>
                      </ol>
                    </div>
                    <div className="cs-ch good">
                      <b>
                        With BzzzBX, the mine decides
                      </b>
                      <ol>
                        <li>
                          Early signal
                        </li>
                        <li>
                          Optimal window
                        </li>
                        <li>
                          Part, technicians and bay ready
                        </li>
                        <li>
                          Short, planned intervention
                        </li>
                        <li>
                          Tonnes and margin protected
                        </li>
                      </ol>
                    </div>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    And the effect does not stay in maintenance: higher absenteeism among technicians stretches workshop time, a late part keeps a truck out of service, and both reduce tonnes moved, plant feed and mine plan compliance. BzzzBX makes that chain visible as it happens.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    The business case
                  </p>
                  <h2>
                    Three sources of return
                  </h2>
                  <p>
                    {"Return is measured with "}
                    <b>
                      Bo11y
                    </b>
                    {" and validated with each mine's own data during the assessment."}
                  </p>
                  <div className="cs-fr" style={{ marginTop: "22px" }}>
                    <article>
                      <small>
                        Costs
                      </small>
                      <h3>
                        Lower maintenance spend
                      </h3>
                      <ul>
                        <li>
                          Fewer unneeded hour-meter services
                        </li>
                        <li>
                          Fewer catastrophic failures
                        </li>
                        <li>
                          Less overtime and fewer rush parts
                        </li>
                        <li>
                          A single integration for the whole mine
                        </li>
                      </ul>
                      <p className="k">
                        Cost per operating hour · MTBF · cost per component
                      </p>
                    </article>
                    <article className="main">
                      <small>
                        Protected revenue
                      </small>
                      <h3>
                        More tonnes
                      </h3>
                      <ul>
                        <li>
                          Higher physical availability of fleet and plant
                        </li>
                        <li>
                          Fewer unplanned stops
                        </li>
                        <li>
                          Less time in the workshop
                        </li>
                      </ul>
                      <p className="k">
                        Physical availability · MTTR · tonnes moved
                      </p>
                    </article>
                    <article>
                      <small>
                        Risk
                      </small>
                      <h3>
                        Fewer incidents
                      </h3>
                      <ul>
                        <li>
                          Deviations detected in seconds
                        </li>
                        <li>
                          Fewer failures in operation
                        </li>
                        <li>
                          Audit-ready traceability
                        </li>
                      </ul>
                      <p className="k">
                        Equipment-failure incidents · critical events caught in time
                      </p>
                    </article>
                  </div>
                  <p style={{ marginTop: "26px" }}>
                    Protected revenue usually weighs the most, because every point of availability turns into productive hours. Adjust the assumptions:
                  </p>
                  <figure className="cs-fig cs-fig--dark">
                    <p className="cs-fig-t">
                      Productive hours recovered
                    </p>
                    <div className="cs-calc" data-loc="en-US">
                      <div>
                        <label>
                          <span className="v">
                            Assets in the fleet
                            <b data-o="n">
                              40
                            </b>
                          </span>
                          <input type="range" min="10" max="200" step="5" defaultValue="40" data-i="n" aria-label="Assets in the fleet" />
                        </label>
                        <label>
                          <span className="v">
                            Availability points gained
                            <b data-o="d">
                              2
                            </b>
                          </span>
                          <input type="range" min="0.5" max="6" step="0.5" defaultValue="2" data-i="d" aria-label="Availability points gained" />
                        </label>
                        <label>
                          <span className="v">
                            Value per asset-hour (assumption)
                            <b data-o="v">
                              US$ 500
                            </b>
                          </span>
                          <input type="range" min="100" max="2000" step="50" defaultValue="500" data-i="v" aria-label="Value per asset-hour (assumption)" />
                        </label>
                      </div>
                      <div className="cs-res">
                        <small>
                          Asset-hours recovered per year
                        </small>
                        <b data-o="h">
                          7,008
                        </b>
                        <span>
                          additional productive hours
                        </span>
                        <div className="m">
                          <small>
                            Annual value protected
                          </small>
                          <b data-o="m">
                            US$ 3.5 M
                          </b>
                          <span>
                            before adding cost savings and avoided risk
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="cs-formula">
                      Δ availability × number of assets × 8,760 h × value per asset-hour
                    </p>
                    <p className="cs-cap">
                      {"Example: 40 trucks gaining 2 points of availability recover about 7,000 truck-hours a year. Figures are assumptions; the real case is calculated with each operation's fleet, current availability and value per hour."}
                    </p>
                  </figure>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    What Boss delivers
                  </p>
                  <h2>
                    Three layers on top of what the mine already has
                  </h2>
                  <p>
                    {"The solution connects mine, plant and people in a single living system, deployed in the mine's cloud or data center under its own security policies."}
                  </p>
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
                          Ingestion, business context and auditable memory for the whole operation, technical infrastructure included.
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
                          Engines and dashboards
                        </b>
                        <span>
                          Machina for asset condition and predictive maintenance, Metamap for the geographic view of the mine, and dashboards by area and across areas.
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
                          AI on the same truth
                        </b>
                        <span>
                          Copilots, agents and automations with governed access to BzzzBX data via MCP.
                        </span>
                        <em>
                          Applied AI →
                        </em>
                      </div>
                    </Link>
                  </div>
                  <div className="cs-ask">
                    <div className="q">
                      Which assets have the highest risk of stopping this week, and how many tonnes are at stake?
                    </div>
                    <div className="a">
                      Three assets: truck 12 (rising engine temperature), shovel 05 (unstable hydraulic pressure) and truck 31 (oil analysis out of range). About 14,000 tonnes are at stake if they fail this week.
                      <small>
                        Evidence: plant and fleet sensors, oil lab, CMMS and mine plan · illustrative values
                      </small>
                    </div>
                  </div>
                  <p style={{ marginTop: "22px" }}>
                    Maintenance is the entry point, not the limit. On the same core, the mine can extend observability to fuel, energy, safety, supply chain and costs with no new integration.
                  </p>
                </section>
                <section className="cs-sec">
                  <p className="cs-eb">
                    How to start
                  </p>
                  <h2>
                    First, measure where the value is
                  </h2>
                  <p>
                    {"We start with a short assessment, using the operation's own data:"}
                  </p>
                  <ol className="cs-steps">
                    <li>
                      <span>
                        <b>
                          Sources and critical assets.
                        </b>
                        {" Which signals already exist, and where instrumentation or connectivity is missing."}
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>
                          Baseline.
                        </b>
                        {" Current availability, MTBF, MTTR and maintenance cost."}
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>
                          Bo11y case.
                        </b>
                        {" We quantify the return of each source and define the implementation."}
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
                    {"Business case built on typical mining scenarios. Values are illustrative and replaced with each operation's own data during the assessment."}
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
