import { GraduationCap, Languages, Globe2 } from "lucide-react";
import { education, languages, additionalFacts } from "@/lib/data";

/**
 * Compact "More about me" section.
 *
 * Fills the gaps between the resume and portfolio:
 *   - Education (recruiters check this; clients don't, but it's a trust signal)
 *   - Languages (matters for international clients & UAE roles)
 *   - International delivery + availability + time zones (broadens applicable roles/projects)
 *
 * Single-row layout on desktop, stacked on mobile. Stays compact so it
 * doesn't dilute the more conversion-driving sections above it.
 */
export default function Education() {
  return (
    <section
      id="education"
      className="py-20 border-t border-border"
      aria-labelledby="education-heading"
    >
      <div className="container-x">
        <div className="mb-10">
          <div className="section-eyebrow">More About Me</div>
          <h2 id="education-heading" className="section-title">
            Education &amp;{" "}
            <span className="gradient-text">good-to-knows</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Education */}
          <div className="card p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="rounded-lg bg-accent/10 p-2 text-accent">
                <GraduationCap size={16} aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold text-foreground tracking-tight uppercase">
                Education
              </h3>
            </div>
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.degree}>
                  <div className="font-semibold text-foreground text-sm leading-snug">
                    {e.degree}
                  </div>
                  <div className="text-sm text-foreground/70 mt-0.5">
                    {e.institution}
                  </div>
                  <div className="text-xs text-muted mt-1 font-mono tracking-wider">
                    {e.period} · {e.location}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="card p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="rounded-lg bg-accent/10 p-2 text-accent">
                <Languages size={16} aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold text-foreground tracking-tight uppercase">
                Languages
              </h3>
            </div>
            <ul className="space-y-2.5">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-foreground/85 font-medium">
                    {l.name}
                  </span>
                  <span className="text-xs text-muted font-mono tracking-wider">
                    {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick facts */}
          <div className="card p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="rounded-lg bg-accent/10 p-2 text-accent">
                <Globe2 size={16} aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold text-foreground tracking-tight uppercase">
                Quick facts
              </h3>
            </div>
            <ul className="space-y-3">
              {additionalFacts.map((f) => (
                <li key={f.label}>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-semibold">
                    {f.label}
                  </div>
                  <div className="text-sm text-foreground/85 mt-0.5 leading-snug">
                    {f.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
