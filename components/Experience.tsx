import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="container-x">
        <div className="mb-14">
          <div className="section-eyebrow">Career</div>
          <h2 className="section-title">
            Where I&apos;ve <span className="gradient-text">delivered</span>
          </h2>
        </div>

        <div className="space-y-10">
          {experience.map((job, idx) => (
            <div key={idx} className="relative pl-10 md:pl-14">
              {idx !== experience.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[11px] md:left-[17px] top-7 md:top-8 -bottom-12 w-px bg-border"
                />
              )}

              <div className="absolute left-0 md:left-1 top-1 size-6 md:size-7 rounded-full border-2 border-accent bg-bg flex items-center justify-center z-10">
                <div className="size-2 rounded-full bg-accent" />
              </div>

              <div className="card p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {job.role}
                  </h3>
                  <span className="text-xs text-muted font-mono">
                    {job.period}
                  </span>
                </div>
                <div className="text-accent text-sm font-medium mb-4">
                  {job.company}
                </div>
                <ul className="space-y-2.5">
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground/85 leading-relaxed flex gap-2"
                    >
                      <span className="text-accent2 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
