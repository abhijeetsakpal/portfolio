import type { Metadata } from "next";
import CaseStudyLayout, {
  SanitizedMetric,
} from "@/components/CaseStudyLayout";
import Mermaid from "@/components/Mermaid";

export const metadata: Metadata = {
  title: "Case Study: Uniflow — No-Code Application Builder",
  description:
    "How I built a metadata-driven no-code/low-code platform that lets business users generate dynamic apps with forms, workflows, and approval matrices — by uploading an Excel template.",
};

const architectureChart = `
flowchart LR
  XLSX[("📄 Excel template<br/>uploaded by business user")]
  PARSE["Parser service<br/>(.NET Core)"]
  META[("🗄️ Metadata store<br/>SQL Server")]
  ENGINE["Runtime engine<br/>(reads metadata,<br/>renders UI + rules)"]
  UI["Generated app<br/>(Angular SPA)"]
  USERS[("👥 Business users")]

  XLSX --> PARSE
  PARSE --> META
  META --> ENGINE
  ENGINE --> UI
  USERS --> UI
`;

export default function UniflowCaseStudy() {
  return (
    <CaseStudyLayout
      slug="uniflow"
      schemaTitle="Uniflow — Metadata-Driven No-Code Application Builder"
      schemaDescription="Case study on building a no-code platform that turns Excel templates into full-featured enterprise applications without redeployment."
      eyebrow="Case Study · Internal Tools / No-Code"
      title={
        <>
          A no-code platform that turns an{" "}
          <span className="gradient-text">Excel template</span> into a working
          enterprise app
        </>
      }
      lead="How I designed a metadata-driven application builder where business teams generate full apps — forms, workflows, approval matrices, role-based menus — without engineering involvement."
      ndaNote="Architecture and design decisions described here are mine. Specific customer deployments, internal volumes, and proprietary template logic are kept generic. Anything you read as a number is approximate / illustrative — verify with me before reusing in proposals."
      stats={[
        {
          value: "0",
          label: "Redeploys per new app",
        },
        {
          value: "<1 hr",
          label: "Avg new-app turnaround",
          caveat: "Approximate — depends on template complexity",
        },
        {
          value: "100%",
          label: "Config-driven UI",
        },
        {
          value: "Hours",
          label: "From weeks to hours",
        },
      ]}
      problem={
        <>
          <p>
            Operations teams across the organization were constantly asking
            engineering for &ldquo;just a small CRUD app&rdquo; —{" "}
            <em>this approval flow, that intake form, a status board for
            this team</em>. Every request sat in a backlog for weeks because it
            needed a developer.
          </p>
          <p>
            Most of these apps were structurally identical — a form, a list
            view, an approval chain, a notification, role-based menus. Only
            the fields and rules differed.
          </p>
          <p>
            We needed a way for business users to{" "}
            <strong>generate working applications themselves</strong>, while
            still meeting the same security, audit, and integration standards
            as our hand-built apps.
          </p>
        </>
      }
      constraints={
        <ul>
          <li>
            <strong>No bypass of governance.</strong> Generated apps had to
            inherit role-based access, audit logging, and the same auth that
            our handwritten apps used.
          </li>
          <li>
            <strong>Zero deploy on each new app.</strong> Adding a new app
            couldn&apos;t require a code release. That&apos;s the whole
            point.
          </li>
          <li>
            <strong>Familiar entry point.</strong> Business users wouldn&apos;t
            adopt a complex DSL. They needed something they already
            understood — Excel.
          </li>
          <li>
            <strong>Explainable runtime.</strong> When a generated app
            misbehaves, an engineer needs to be able to read the metadata and
            understand why — not crawl through generated code.
          </li>
        </ul>
      }
      architecture={
        <>
          <p>
            The core insight: <strong>store the application as data, not as
            code</strong>. Forms, workflow rules, approval chains, menu
            structure, role permissions — all stored in a relational
            metadata store. A single runtime engine reads that metadata and
            renders the app.
          </p>

          <Mermaid
            chart={architectureChart}
            caption="An Excel upload becomes metadata; the runtime engine reads metadata to render the app."
          />

          <p>Three layers worth flagging:</p>

          <ul>
            <li>
              <strong>Excel parser.</strong> Each tab in the template maps to
              a specific schema (forms, fields, validations, workflows,
              roles). The parser is strict — invalid templates fail loudly
              with line-by-line errors before anything is committed.
            </li>
            <li>
              <strong>Metadata store.</strong> A normalized SQL schema with
              foreign-key integrity. Everything an app does is queryable —
              no JSON blobs, no opaque magic strings.
            </li>
            <li>
              <strong>Runtime engine.</strong> The Angular front-end and the
              .NET API both read the same metadata. New app types don&apos;t
              ship as new code — they emerge from data.
            </li>
          </ul>
        </>
      }
      screenshotPlaceholder="Add a screenshot of the Excel template tab structure (sanitized) — or a diagram of the schema. This is a strong visual hook."
      myRole={
        <>
          <p>
            <strong>Architect + lead developer.</strong> I designed the
            metadata schema, built the Excel parser, and shipped the runtime
            engine&apos;s first version end-to-end. As the team scaled, I
            handed off the front-end runtime to others while continuing to
            own the schema.
          </p>
          <ul>
            <li>Designed the relational metadata model</li>
            <li>Built the Excel parser + validation pipeline</li>
            <li>
              Wrote the runtime engine&apos;s form renderer + workflow executor
            </li>
            <li>Documented the template format for non-engineering users</li>
          </ul>
        </>
      }
      stack={[
        "Angular",
        ".NET Core",
        "C#",
        "SQL Server",
        "Stored procedures",
        "Excel parsing (EPPlus)",
        "Role-based access control",
      ]}
      outcome={
        <ul>
          <li>
            New apps go live <strong>without a code release</strong>. Business
            teams iterate on rules in hours, not weeks.
          </li>
          <li>
            Generated apps <strong>inherit the same security and audit
            posture</strong> as hand-built apps — no shadow IT.
          </li>
          <li>
            Engineering backlog of small CRUD-app requests dropped
            substantially{" "}
            <SanitizedMetric>(magnitude verified, exact % sanitized)</SanitizedMetric>
            , freeing the team for higher-leverage work.
          </li>
          <li>
            Pattern is reusable: the metadata model now supports{" "}
            <em>multiple categories of apps</em> the original spec
            didn&apos;t anticipate.
          </li>
        </ul>
      }
      lessons={
        <ul>
          <li>
            <strong>Excel was the right choice for input.</strong> Tempting to
            build a fancy visual designer instead. Spreadsheets won because
            adoption beat aesthetics — every business user already knew Excel.
          </li>
          <li>
            <strong>Validate aggressively at the parse step.</strong> Once
            metadata is in the store, broken apps cause subtle runtime
            failures. Catch them at upload, not at render.
          </li>
          <li>
            <strong>Documentation is the product.</strong> A no-code platform
            without good docs becomes a code platform — except now the
            engineers who have to debug it weren&apos;t the ones who built it.
          </li>
        </ul>
      }
      ctaHeadline="Have repeated CRUD asks?"
      ctaBody="If your engineering team is stuck building variations of the same form-list-workflow app, there's a better answer than building each one. Let's talk about whether a metadata-driven approach makes sense for your stack."
    />
  );
}
