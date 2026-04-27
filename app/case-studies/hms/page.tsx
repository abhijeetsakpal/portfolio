import type { Metadata } from "next";
import CaseStudyLayout, {
  SanitizedMetric,
} from "@/components/CaseStudyLayout";
import Mermaid from "@/components/Mermaid";

export const metadata: Metadata = {
  title: "Case Study: HMS — Harbor Management System",
  description:
    "How I helped a UAE port operator automate vessel-operations scheduling, tug assignment, and invoicing — replacing manual coordination with a real-time scheduling system.",
};

const architectureChart = `
flowchart TB
  PORT[("🚢 Vessel arrival<br/>+ service requests")]
  SCH["Scheduling engine<br/>(.NET Core)"]
  TUG["Tug & berth<br/>assignment"]
  TIME["Service<br/>timeline tracking"]
  INV["Invoice<br/>generator"]
  DASH["Operator dashboard<br/>(Angular, real-time)"]
  ERP[("🔗 Customer ERP<br/>integration")]
  DB[("🗄️ SQL Server")]

  PORT --> SCH
  SCH --> TUG
  SCH --> TIME
  TIME --> INV
  INV --> ERP
  SCH --> DASH
  DB --- SCH
`;

export default function HmsCaseStudy() {
  return (
    <CaseStudyLayout
      slug="hms"
      schemaTitle="Harbor Management System — Real-Time Vessel Operations for a UAE Port Operator"
      schemaDescription="Sanitized case study on shipping a vessel-operations control tower (scheduling, tug & berth assignment, automated invoicing) for a UAE port operator, including on-site delivery in Abu Dhabi and Dubai."
      eyebrow="Case Study · Maritime / Ports"
      title={
        <>
          A vessel-operations system that replaced{" "}
          <span className="gradient-text">paper schedules</span> with a
          real-time control tower
        </>
      }
      lead="Built and delivered an end-to-end harbor management system for a UAE port operator — vessel scheduling, tug & berth assignment, service tracking, automated invoicing — through on-site engagements in Abu Dhabi and Dubai."
      ndaNote="Customer name, traffic volumes, revenue impact, and operational specifics are kept generic per client confidentiality. Architectural decisions, my role, and lessons described here are mine. Numbers shown are illustrative of magnitude; exact figures available on request under NDA."
      stats={[
        {
          value: "On-site",
          label: "Delivered in UAE",
        },
        {
          value: "End-to-end",
          label: "Owned modules",
        },
        {
          value: "↓ Manual",
          label: "Coordination errors",
          caveat: "Magnitude confirmed — exact % sanitized",
        },
        {
          value: "Auto",
          label: "Invoice generation",
        },
      ]}
      problem={
        <>
          <p>
            A UAE port operator was running vessel operations on a mix of
            spreadsheets, walkie-talkies, and tribal knowledge. Tug
            assignments were made by phone. Mooring decisions were tracked on
            paper. Invoices were compiled manually at month-end from
            scattered logs.
          </p>
          <p>
            The result was predictable: <strong>billing errors, missed
            services, friction with shipping-line customers, and zero
            visibility</strong> into operations until the day&apos;s end.
          </p>
          <p>
            The operator wanted a single system to schedule, track, and bill
            for vessel services — without disrupting the daily ops while it
            was being built.
          </p>
        </>
      }
      constraints={
        <ul>
          <li>
            <strong>Real-time operations.</strong> Vessels don&apos;t wait. The
            system had to be reliable, fast, and usable in a high-pressure
            control room — not a polished but slow web app.
          </li>
          <li>
            <strong>On-site requirement gathering.</strong> Port operations
            have nuances no document captures. Getting it right meant being
            in Abu Dhabi and Dubai with the operators.
          </li>
          <li>
            <strong>Integration with customer ERPs.</strong> Shipping lines
            had their own billing systems. Our invoices had to flow into
            their reconciliation cleanly.
          </li>
          <li>
            <strong>Accurate billing was non-negotiable.</strong> A wrong
            invoice damages trust with shipping-line customers; the system
            had to be auditable line-by-line.
          </li>
          <li>
            <strong>Phased rollout.</strong> No big-bang go-live. The
            operator needed to switch one workflow at a time without losing
            continuity.
          </li>
        </ul>
      }
      architecture={
        <>
          <p>
            The system is built around a central{" "}
            <strong>scheduling engine</strong> that owns a vessel&apos;s
            timeline from arrival to departure — every requested service, the
            assigned tug, the berth, start/end times, the operator who
            performed it.
          </p>

          <Mermaid
            chart={architectureChart}
            caption="Vessel arrival triggers scheduling, which feeds tug/berth assignment, service tracking, invoicing, and the real-time operator dashboard."
          />

          <p>
            That timeline becomes the source of truth for two downstream
            consumers:
          </p>

          <ul>
            <li>
              <strong>Operator dashboard</strong> — real-time view of all
              active vessels, what&apos;s scheduled, what&apos;s in progress,
              what&apos;s overrun. Angular SPA with role-based screens for
              dispatchers, operators, and supervisors.
            </li>
            <li>
              <strong>Invoice generator</strong> — runs against the timeline
              data + a tariff structure to produce shipping-line invoices.
              Output flows directly into customer ERPs via configurable
              integrations.
            </li>
          </ul>

          <p>
            All scheduling state lives in SQL Server with stored procedures
            for the high-volume transaction paths — query tuning was
            critical because dashboard refreshes happen every few seconds in
            a busy port.
          </p>
        </>
      }
      screenshotPlaceholder="Add a sanitized screenshot of the operator dashboard or a service-timeline view — anonymized vessel names. This sells the case study."
      myRole={
        <>
          <p>
            <strong>End-to-end delivery owner</strong> for core scheduling and
            invoicing modules. Travelled on-site to Abu Dhabi and Dubai for
            requirement sessions, deployment, UAT sign-off, and go-live
            production support.
          </p>
          <ul>
            <li>
              Gathered requirements directly from port operators in working
              sessions
            </li>
            <li>
              Designed the scheduling engine + tariff/invoice logic
            </li>
            <li>
              Built the Angular dashboards (role-based, real-time)
            </li>
            <li>
              Drove deployment on Microsoft IIS, configured app pools,
              bindings, SSL across dev/staging/prod
            </li>
            <li>
              Supported the operator team through go-live and the first
              billing cycles
            </li>
          </ul>
        </>
      }
      stack={[
        "Angular",
        ".NET Core",
        "C#",
        "SQL Server",
        "Stored procedures",
        "Microsoft IIS",
        "Real-time dashboards",
        "ERP integrations",
      ]}
      outcome={
        <ul>
          <li>
            Replaced paper-based vessel scheduling with a{" "}
            <strong>single source of truth</strong> visible to all
            stakeholders in real time.
          </li>
          <li>
            <SanitizedMetric>Significant reduction</SanitizedMetric> in manual
            coordination errors and missed services — exact magnitude
            available under NDA.
          </li>
          <li>
            <strong>Automated invoice generation</strong> eliminated
            month-end manual compilation. Billing errors against shipping
            lines dropped meaningfully.
          </li>
          <li>
            Phased rollout meant <strong>no operational disruption</strong>{" "}
            during transition — workflows migrated one at a time.
          </li>
          <li>
            Established a working pattern for future maritime modules — same
            scheduling-engine core was reused for downstream features.
          </li>
        </ul>
      }
      lessons={
        <ul>
          <li>
            <strong>On-site time was non-negotiable.</strong> A week of
            sitting in the control room taught me more than any document
            ever could. Port operations have nuances — pilot timing, tide
            windows, seasonal traffic — that don&apos;t make it into a spec.
          </li>
          <li>
            <strong>The boring CRUD was the hard part.</strong> The
            scheduling logic was tractable. Getting tariffs, exceptions,
            partial services, and integration with shipping-line ERPs right
            took more time than the &ldquo;interesting&rdquo; algorithm work.
          </li>
          <li>
            <strong>Phased rollout buys trust.</strong> Operators trusted the
            system because we never asked them to bet everything on it at
            once. Each successful module increased their willingness to
            move the next workflow over.
          </li>
        </ul>
      }
      ctaHeadline="Run a port, terminal, or scheduling-heavy operation?"
      ctaBody="If your team is coordinating real-world assets — vessels, vehicles, equipment, crews — through spreadsheets and phone calls, there's a better way. Let's talk about what a control-tower system would look like for your operation."
    />
  );
}
