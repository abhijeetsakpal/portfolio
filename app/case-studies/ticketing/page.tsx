import type { Metadata } from "next";
import CaseStudyLayout, {
  SanitizedMetric,
} from "@/components/CaseStudyLayout";
import Mermaid from "@/components/Mermaid";

export const metadata: Metadata = {
  title: "Case Study: LLM-Powered Ticket Classification",
  description:
    "How I cut manual email handling on a customer-support workflow by integrating LLM classification into a .NET Core + Angular ticketing platform — without a rewrite.",
};

const architectureChart = `
flowchart TB
  EMAIL[("📥 Email inbox")]
  ING["Ingestion Service<br/>.NET Core Web API"]
  LLM["LLM Classifier<br/>(category + priority<br/>+ confidence)"]
  ROUTER{Confidence<br/>≥ 0.7?}
  HQ["High-priority queue<br/>(auto-assigned)"]
  NQ["Normal queue<br/>(team-routed)"]
  MQ["Manual review queue<br/>(human-in-the-loop)"]
  AUDIT["Audit log<br/>(every decision stored)"]

  EMAIL --> ING
  ING --> LLM
  LLM --> ROUTER
  LLM -.-> AUDIT
  ROUTER -- "Yes" --> HQ
  ROUTER -- "Yes" --> NQ
  ROUTER -- "No / low confidence" --> MQ
`;

export default function TicketingCaseStudy() {
  return (
    <CaseStudyLayout
      slug="ticketing"
      schemaTitle="LLM-Powered Ticket Classification — Cut Manual Email Handling by ~40%"
      schemaDescription="Sanitized case study on integrating LLM classification into a .NET Core + Angular ticketing platform. Architecture, decisions, and outcomes from the engineer who led the rollout."
      eyebrow="Case Study · Customer Support Ops"
      title={
        <>
          How I cut manual email handling by{" "}
          <span className="gradient-text">~40%</span> with LLM ticket
          classification
        </>
      }
      lead="A real-world deployment of LLM-powered automation inside an existing .NET Core + Angular customer-support platform — without a rewrite."
      ndaNote="Client and product details are kept generic. The architecture, decisions, and lessons described here are mine; specific customer names, internal volumes, and financial numbers are sanitized or approximated. Ranges shown like ~40% are illustrative of the magnitude of impact — verify exact figures with me directly."
      stats={[
        { value: "~40%", label: "Manual work cut", caveat: "Approximate — sanitized for NDA" },
        { value: "< 60s", label: "Classification latency" },
        { value: "6", label: "Devs led" },
        { value: "0", label: "VAPT findings at release" },
      ]}
      problem={
        <>
          <p>
            A customer-support operations team was drowning in email — billing
            questions, technical issues, feature requests, refund disputes —
            all dumped into one inbox.
          </p>
          <p>
            An operator had to read each one, pick the right category, decide
            which team to route it to, and flag urgent ones. This consumed
            roughly{" "}
            <SanitizedMetric>~40% of two operators&apos; daily hours</SanitizedMetric>{" "}
            on pure triage work — before any actual support happened.
          </p>
          <p>
            The team lead asked: &ldquo;Can we use AI for this without ripping
            out the platform we just built?&rdquo;
          </p>
        </>
      }
      constraints={
        <ul>
          <li>
            <strong>Existing stack:</strong> .NET Core Web API + Angular +
            MySQL — already in production. No rewrite budget.
          </li>
          <li>
            <strong>Security:</strong> VAPT-compliant release pipeline. LLM
            provider had to be reviewable and customer data could not leak
            into model training.
          </li>
          <li>
            <strong>Latency:</strong> Classification couldn&apos;t add more
            than ~60 seconds to ticket creation — operators expected
            near-real-time triage.
          </li>
          <li>
            <strong>Cost:</strong> Hundreds of tickets per day. Per-call LLM
            cost mattered.
          </li>
          <li>
            <strong>Fallback:</strong> If the LLM was unavailable, the ticket
            still had to land in the inbox — never lost.
          </li>
        </ul>
      }
      architecture={
        <>
          <p>
            I designed a <strong>thin classification layer</strong> sitting
            between email ingestion and the existing ticket pipeline. Critical
            constraint: this didn&apos;t replace any existing logic — it
            augmented it.
          </p>

          <Mermaid
            chart={architectureChart}
            caption="High-level flow: email → ingestion → LLM classifier → routing decision based on confidence threshold."
          />

          <p>
            Each incoming email gets passed to a{" "}
            <strong>structured-output prompt</strong> that returns JSON with
            category, priority, suggested team, and a confidence score. If
            confidence is below 0.7, the ticket goes to a manual-review queue
            — humans stay in the loop on edge cases. This single guardrail
            kept misrouting at near-zero.
          </p>

          <p>Five engineering decisions made the difference:</p>

          <ul>
            <li>
              <strong>Configuration-driven prompts.</strong> Categories,
              priority rules, and team mappings are stored in the database.
              Business users adjust them through an admin UI. New product line
              = no code release needed.
            </li>
            <li>
              <strong>Async processing with retries.</strong> Classification
              runs out-of-band on a background worker. Ticket creation never
              blocks on the LLM call. Exponential-backoff retries; after 3
              failures, the ticket falls through to manual triage — never
              dropped.
            </li>
            <li>
              <strong>Caching identical-content tickets.</strong> Auto-mailers
              (out-of-office replies, system notifications) often arrive in
              clusters. Hashing the email body and caching the classification
              result for 24 hours cut LLM costs by{" "}
              <SanitizedMetric>~22%</SanitizedMetric> with zero accuracy loss.
            </li>
            <li>
              <strong>Audit log for every classification.</strong> Input,
              output, confidence, model version, timestamp — all logged.
              Non-negotiable for compliance, and invaluable for prompt tuning.
            </li>
            <li>
              <strong>Staged rollout via feature flags.</strong> 10% of
              tickets through the LLM for a week → metrics check → 50% →
              100%. Caught one rare prompt-injection attempt early thanks to
              this rollout.
            </li>
          </ul>
        </>
      }
      myRole={
        <>
          <p>
            <strong>Lead engineer + team lead.</strong> I owned end-to-end
            delivery — architecture, prompt engineering, the .NET classifier
            service, the Kubernetes deployment, the audit and review tooling
            — and led 6 developers through the rollout.
          </p>
          <ul>
            <li>Designed the classification layer + structured-output prompts</li>
            <li>Set up the staged rollout via feature flags</li>
            <li>Drove the VAPT compliance review with the security team</li>
            <li>Mentored 2 juniors on prompt tuning + the audit dashboards</li>
          </ul>
        </>
      }
      stack={[
        ".NET Core Web API",
        "Angular",
        "TypeScript",
        "MySQL",
        "Docker",
        "Kubernetes",
        "Microsoft Azure",
        "LLM Integration",
        "Background workers",
        "Structured outputs",
      ]}
      outcome={
        <ul>
          <li>
            <SanitizedMetric>~40%</SanitizedMetric> reduction in manual
            email-handling time across the support ops team.
          </li>
          <li>
            Average{" "}
            <strong>
              first-response time dropped from ~45 minutes to under 8 minutes
            </strong>{" "}
            for high-priority tickets (auto-routed and assigned).
          </li>
          <li>
            <strong>Zero VAPT findings</strong> on the new pipeline at release.
            Reduced overall post-release defect count by{" "}
            <SanitizedMetric>~30%</SanitizedMetric> across the platform through
            stronger review gates I introduced.
          </li>
          <li>
            <strong>Mentored 2 junior developers</strong> on the
            classification layer and prompt engineering — they now own
            tuning.
          </li>
          <li>
            Business teams update categorization rules without engaging
            engineering. Iteration cycle on triage logic dropped from{" "}
            <strong>weeks to hours</strong>.
          </li>
        </ul>
      }
      lessons={
        <ul>
          <li>
            <strong>Start with a smaller model.</strong> Initial spec was
            over-built. A smaller, cheaper model handled 80% of categories
            fine — we could have started there and only escalated edge cases
            to the larger model.
          </li>
          <li>
            <strong>Build the eval harness on day one.</strong> Manual testing
            for the first ~3 weeks slowed iteration. Once we automated
            regression evaluation against a labeled dataset, prompt iteration
            got 10x faster.
          </li>
          <li>
            <strong>Talk to the operators sooner.</strong> The biggest
            accuracy win came from a day spent watching two operators triage.
            Their tribal rules became prompt instructions worth more than any
            hyperparameter tuning.
          </li>
          <li>
            <strong>Invest in observability before scale.</strong> The audit
            log we built as a compliance afterthought turned into the most
            valuable diagnostic tool we had.
          </li>
        </ul>
      }
      ctaHeadline="Have a similar workflow?"
      ctaBody="If your team is drowning in repetitive triage work and you already have a .NET / Angular stack, let's talk. I can tell you in 20 minutes whether LLM automation is the right fix — or if something simpler will do."
    />
  );
}
