import type { Metadata } from "next";
import CaseStudyLayout, {
  SanitizedMetric,
} from "@/components/CaseStudyLayout";
import Mermaid from "@/components/Mermaid";

export const metadata: Metadata = {
  title: "Case Study: RTOS — Rail Terminal Operations & Legacy Modernization",
  description:
    "How I modernized critical rail-terminal operations modules — replacing legacy VB.NET with .NET Core + Angular — while keeping production running and integrating with third-party systems.",
};

const architectureChart = `
flowchart LR
  subgraph LEGACY["Legacy (before)"]
    direction TB
    VB["VB.NET monolith<br/>(decade-old)"]
    LDB[("Tightly coupled<br/>SQL Server")]
    VB --- LDB
  end

  subgraph NEW["Modernized (after)"]
    direction TB
    API[".NET Core Web API"]
    NG["Angular SPA<br/>(role-based)"]
    INT["Third-party<br/>integrations"]
    INV["Invoice<br/>generator"]
    NDB[("SQL Server<br/>(new schema +<br/>tuned procs)")]
    NG --> API
    API --> NDB
    API --> INT
    API --> INV
  end

  LEGACY -. "incremental rewrite<br/>module by module" .-> NEW
`;

export default function RtosCaseStudy() {
  return (
    <CaseStudyLayout
      slug="rtos"
      schemaTitle="RTOS — Modernizing a Decade-Old VB.NET Rail Terminal System Without Downtime"
      schemaDescription="Sanitized case study on incrementally migrating a legacy VB.NET rail-terminal operations system to .NET Core + Angular using a strangler-fig pattern, while keeping production running 24/7."
      eyebrow="Case Study · Rail Logistics / Modernization"
      title={
        <>
          Modernizing a{" "}
          <span className="gradient-text">decade-old VB.NET</span> rail terminal
          system without stopping operations
        </>
      }
      lead="A rail-terminal operations system managing container movement, truck-loading coordination, and third-party integrations across customer accounts — modernized incrementally from legacy VB.NET to .NET Core + Angular while keeping the trains running."
      ndaNote="Customer name, terminal volumes, billing values, and integration partners are kept generic per client confidentiality. The architecture, modernization strategy, and lessons described here are mine. Specific volumes and revenue figures are sanitized — verify with me directly before reusing."
      stats={[
        { value: "VB.NET → .NET Core", label: "Stack migrated" },
        { value: "Incremental", label: "Rollout strategy" },
        { value: "Bug-fix ↓", label: "Turnaround improved", caveat: "Magnitude confirmed — exact % sanitized" },
        { value: "0", label: "Operational outages" },
      ]}
      problem={
        <>
          <p>
            A rail-logistics operator&apos;s primary terminal-operations system
            had been running for a decade on a VB.NET stack. The functionality
            was fine — the codebase was the problem.
          </p>
          <p>
            Every change took disproportionately long. Tooling was outdated,
            developers familiar with VB.NET were getting harder to find, and
            the architecture was tangled enough that a small bug fix often
            risked unrelated regressions.
          </p>
          <p>
            Meanwhile the business needed <strong>new
            features</strong> — additional truck-loading workflows, more
            third-party system integrations, automated invoicing across more
            customer accounts. Every new ask compounded the technical debt.
          </p>
          <p>
            The directive: modernize critical paths to .NET Core + Angular
            <strong> without disrupting daily rail operations</strong>.
          </p>
        </>
      }
      constraints={
        <ul>
          <li>
            <strong>Zero downtime tolerance.</strong> Container movement and
            truck loading happen 24/7. The system can&apos;t be taken offline
            for migration.
          </li>
          <li>
            <strong>Run both stacks in parallel.</strong> The legacy VB.NET
            modules had to keep running while we replaced them piece by piece.
            Bugs in the new code couldn&apos;t cascade into the old.
          </li>
          <li>
            <strong>Data continuity.</strong> The same SQL Server backed both
            stacks for the transition. Schema changes had to be backward-
            compatible with the legacy app until cutover.
          </li>
          <li>
            <strong>Third-party integrations.</strong> The system talks to
            several external partners — those contracts and protocols
            couldn&apos;t change just because we were rewriting.
          </li>
          <li>
            <strong>Invoice accuracy across customer accounts.</strong>{" "}
            Automated billing flows had to produce identical results to the
            legacy system during the transition — auditable line by line.
          </li>
        </ul>
      }
      architecture={
        <>
          <p>
            The strategy was deliberate: <strong>strangler-fig
            pattern</strong>. Identify the highest-pain modules, rewrite them
            in .NET Core + Angular, route traffic to the new module, retire
            the legacy code only after parity was proven in production.
          </p>

          <Mermaid
            chart={architectureChart}
            caption="Strangler-fig modernization: legacy VB.NET monolith and the new .NET Core + Angular stack ran side-by-side, with modules migrated incrementally."
          />

          <p>Three principles drove the rewrite:</p>

          <ul>
            <li>
              <strong>Same database, new schema layer.</strong> Both stacks
              read from the same SQL Server. New schema additions were always
              backward-compatible with the legacy app. Stored procedures
              shared between old and new were rewritten with care.
            </li>
            <li>
              <strong>Dual-write where it mattered.</strong> For modules
              undergoing migration, both legacy and new wrote to the database
              — and we compared outputs in shadow mode for weeks before
              cutting over user traffic. Caught subtle behavioral differences
              early.
            </li>
            <li>
              <strong>Integration adapters first.</strong> Third-party
              integrations got abstracted into adapters with the exact same
              external behavior — same protocols, same fields, same retry
              semantics. This meant partners didn&apos;t have to change
              anything during the rewrite.
            </li>
          </ul>
        </>
      }
      screenshotPlaceholder="Add a sanitized before/after screenshot if you have one — even an architecture diagram of one specific module migration would land well here."
      myRole={
        <>
          <p>
            <strong>Lead engineer on the modernization track.</strong> I owned
            module selection, the strangler-fig rollout plan, the new .NET
            Core + Angular implementation, and the data-parity verification
            during cutover.
          </p>
          <ul>
            <li>
              Picked the modules to rewrite first based on bug-fix turnaround
              and business friction
            </li>
            <li>
              Designed the parallel-run + shadow-mode verification approach
            </li>
            <li>
              Rewrote critical paths in .NET Core Web API + built Angular UIs
              for them
            </li>
            <li>
              Owned the third-party integration adapter layer — kept partner
              contracts identical
            </li>
            <li>
              Coordinated with onshore + offshore teams via TFS and Git on
              the branching strategy
            </li>
          </ul>
        </>
      }
      stack={[
        "Angular",
        ".NET Core",
        "VB.NET (legacy)",
        "C#",
        "SQL Server",
        "Stored procedures",
        "Microsoft IIS",
        "TFS / Git",
        "Strangler-fig pattern",
      ]}
      outcome={
        <ul>
          <li>
            Critical paths migrated from VB.NET to .NET Core +{" "}
            <strong>zero operational outages</strong> during the transition.
          </li>
          <li>
            <strong>Bug-fix turnaround improved meaningfully</strong>{" "}
            <SanitizedMetric>(magnitude verified, exact figure sanitized)</SanitizedMetric>{" "}
            on migrated modules — the new stack is far easier to test, debug,
            and ship.
          </li>
          <li>
            <strong>Maintainability won.</strong> Onboarding new developers
            became substantially faster on the .NET Core / Angular sections.
          </li>
          <li>
            <strong>New features land cleanly</strong> — adding new
            third-party integrations, new truck-loading workflows, and new
            invoicing rules is now straightforward instead of a quarter-long
            project.
          </li>
          <li>
            Pattern repeatable: established a playbook for migrating
            additional legacy modules whenever they become bottlenecks.
          </li>
        </ul>
      }
      lessons={
        <ul>
          <li>
            <strong>Pick modules by friction, not by glamour.</strong>{" "}
            Tempting to rewrite the hardest, oldest, most interesting parts
            first. Better: pick what&apos;s causing the most operational pain
            and ship that. Demonstrates value early.
          </li>
          <li>
            <strong>Shadow mode pays for itself.</strong> Running both stacks
            and comparing outputs before user cutover surfaced bugs we never
            would have found in QA. Worth the engineering cost every time.
          </li>
          <li>
            <strong>Don&apos;t modernize what nobody touches.</strong> Some
            legacy modules just work and get touched once a year. Leave them.
            Modernization isn&apos;t the goal — reducing pain is.
          </li>
          <li>
            <strong>Document the legacy first.</strong> A few days spent
            writing down what the old code actually does saves weeks of
            rediscovery during the rewrite — and produces a useful trail when
            you find an &ldquo;impossible&rdquo; bug later.
          </li>
        </ul>
      }
      ctaHeadline="Stuck on a legacy stack you can't take down?"
      ctaBody="If your team is paying daily tax on a VB.NET, classic ASP, or older .NET Framework codebase — and you can't afford a big-bang rewrite — let's talk about an incremental modernization plan that ships value every few weeks."
    />
  );
}
