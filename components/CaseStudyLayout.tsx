import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Target,
  Lock,
  Cpu,
  User,
  Layers,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/lib/data";
import { articleJsonLd } from "@/lib/seo";

export interface CaseStudyStat {
  value: string;
  label: string;
  /** Optional caveat shown as a small ⚠ tooltip-like marker */
  caveat?: string;
}

export interface CaseStudyProps {
  /** Slug for canonical URL + JSON-LD */
  slug: string;
  /** Plain-text title (used in Article schema; H1 can be a ReactNode) */
  schemaTitle: string;
  /** Plain-text description (used in Article schema metadata) */
  schemaDescription: string;
  /** Eyebrow above the title, e.g. "Case Study · Logistics" */
  eyebrow: string;
  /** Page H1 */
  title: React.ReactNode;
  /** Lead paragraph under the H1 */
  lead: string;
  /** Top stat tiles (3-4 recommended) */
  stats: CaseStudyStat[];
  /** Optional NDA / sanitization disclaimer banner */
  ndaNote?: string;

  /** Body sections (in render order) */
  problem: React.ReactNode;
  constraints: React.ReactNode;
  /** Architecture section content — typically a paragraph + a <Mermaid /> diagram */
  architecture: React.ReactNode;
  myRole: React.ReactNode;
  /** Outcome section — emphasize numbers; flag any sanitized metrics inline */
  outcome: React.ReactNode;
  /** Lessons / what I'd do differently */
  lessons: React.ReactNode;

  /** Tech stack chips */
  stack: string[];

  /** Optional caption for screenshot placeholder block; if provided we show a flagged placeholder card */
  screenshotPlaceholder?: string;

  /** CTA heading (e.g. "Have a similar workflow?") */
  ctaHeadline: string;
  /** CTA paragraph */
  ctaBody: string;
}

/**
 * Reusable layout for /case-studies/[slug] pages.
 *
 * Sections render in a fixed order (Problem → Constraints → Architecture
 * → My Role → Stack → Outcome → Lessons → CTA). This consistency lets
 * visitors compare case studies quickly.
 *
 * NDA hygiene:
 *   - Use the `ndaNote` prop to add a top-of-page disclaimer
 *   - Wrap any sanitized metric in <SanitizedMetric> so reviewers can
 *     find them with a regex grep before publishing
 */
export default function CaseStudyLayout(p: CaseStudyProps) {
  const jsonLd = articleJsonLd({
    headline: p.schemaTitle,
    description: p.schemaDescription,
    slug: `case-studies/${p.slug}`,
    category: p.eyebrow,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main" className="pt-28 pb-24">
        <div className="container-x max-w-4xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="section-eyebrow">{p.eyebrow}</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6 leading-[1.1]">
            {p.title}
          </h1>
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed max-w-2xl">
            {p.lead}
          </p>

          {/* NDA disclaimer */}
          {p.ndaNote && (
            <div className="rounded-xl border border-accent2/30 bg-accent2/5 p-4 mb-10 flex items-start gap-3">
              <Lock size={16} className="text-accent2 mt-0.5 shrink-0" />
              <p className="text-sm text-foreground/80 leading-relaxed">
                <strong className="text-foreground">Note:</strong> {p.ndaNote}
              </p>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {p.stats.map((s) => (
              <div key={s.label} className="card p-4 relative">
                <div className="text-2xl font-bold text-foreground tabular-nums tracking-tight">
                  {s.value}
                </div>
                <div className="text-[11px] text-muted mt-1.5 uppercase tracking-[0.18em] font-semibold">
                  {s.label}
                </div>
                {s.caveat && (
                  <span
                    title={s.caveat}
                    className="absolute top-3 right-3 text-[10px] text-accent2 cursor-help"
                  >
                    ⚠
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Sections */}
          <Section title="The problem" icon={Target}>
            {p.problem}
          </Section>

          <Section title="Constraints I had to design around" icon={Lock}>
            {p.constraints}
          </Section>

          <Section title="The architecture" icon={Cpu}>
            {p.architecture}
          </Section>

          {p.screenshotPlaceholder && (
            <div className="rounded-2xl border border-dashed border-border bg-surface/40 p-8 my-8 text-center">
              <div className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-2">
                Screenshot placeholder
              </div>
              <p className="text-sm text-foreground/60 italic">
                {p.screenshotPlaceholder}
              </p>
            </div>
          )}

          <Section title="My role" icon={User}>
            {p.myRole}
          </Section>

          <Section title="Tech stack" icon={Layers}>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Outcome" icon={TrendingUp}>
            {p.outcome}
          </Section>

          <Section title="Lessons learned" icon={Lightbulb}>
            {p.lessons}
          </Section>

          {/* CTA */}
          <div className="card p-8 md:p-10 mt-12 text-center relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/15 blur-3xl pointer-events-none"
            />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.2] mb-3">
                {p.ctaHeadline}
              </h3>
              <p className="text-foreground/70 mb-6 max-w-xl mx-auto leading-relaxed">
                {p.ctaBody}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/#contact" className="btn-primary">
                  Book a discovery call
                  <ArrowRight size={16} />
                </Link>
                <a href={`mailto:${profile.email}`} className="btn-ghost">
                  <Mail size={16} />
                  Email me
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <div className="rounded-lg bg-accent/10 p-2 text-accent">
          <Icon size={18} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.2]">
          {title}
        </h2>
      </div>
      <div className="text-foreground/80 leading-relaxed space-y-4 [&_strong]:text-foreground [&_strong]:font-semibold [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:marker:text-accent [&_p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}

/**
 * Inline highlight for sanitized / approximate metrics.
 * Visually marks the number so you (and reviewers) can find them quickly.
 *
 * Usage: <SanitizedMetric>~40%</SanitizedMetric>
 */
export function SanitizedMetric({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 bg-accent2/10 text-accent2 font-semibold tracking-tight"
      title="Approximate / sanitized metric — verify before publishing"
    >
      {children}
    </span>
  );
}
