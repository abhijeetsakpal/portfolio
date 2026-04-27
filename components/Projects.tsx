import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container-x">
        <div className="mb-14">
          <div className="section-eyebrow">Selected Work</div>
          <h2 className="section-title">
            Projects with <span className="gradient-text">measurable impact</span>
          </h2>
          <p className="section-subtitle">
            A selection of production systems I&apos;ve built — across no-code
            platforms, AI-powered tools, and mission-critical logistics
            systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => {
            const card = (
              <article className="card p-7 group flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="card-title group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted group-hover:text-accent transition-all group-hover:rotate-45 shrink-0 mt-1"
                  />
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {p.summary}
                </p>

                <div className="rounded-lg border border-accent/20 bg-accent/5 p-4 mb-5">
                  <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">
                    Impact
                  </div>
                  <p className="text-sm text-foreground">{p.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {p.hasCaseStudy && (
                  <div className="mt-auto pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-widest">
                      <FileText size={13} />
                      Read case study →
                    </span>
                  </div>
                )}
              </article>
            );

            return (
              <Reveal key={p.slug} delayMs={idx * 80}>
                {p.hasCaseStudy ? (
                  <Link
                    href={`/case-studies/${p.slug}`}
                    className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-2xl"
                  >
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
