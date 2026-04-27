import { ArrowUpRight } from "lucide-react";
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
          <p className="text-foreground/65 mt-4 max-w-2xl">
            A selection of production systems I&apos;ve built — across no-code
            platforms, AI-powered tools, and mission-critical logistics
            systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delayMs={idx * 80}>
            <article
              className="card p-7 group flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <ArrowUpRight
                  size={20}
                  className="text-muted group-hover:text-accent transition-all group-hover:rotate-45 shrink-0 mt-1"
                />
              </div>

              <p className="text-foreground/85 text-sm leading-relaxed mb-4">
                {p.summary}
              </p>

              <div className="rounded-lg border border-accent/20 bg-accent/5 p-4 mb-5">
                <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">
                  Impact
                </div>
                <p className="text-sm text-foreground">{p.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
