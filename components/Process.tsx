import { process } from "@/lib/data";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-border">
      <div className="container-x">
        <div className="mb-14">
          <div className="section-eyebrow">How I Work</div>
          <h2 className="section-title">
            A predictable process,{" "}
            <span className="gradient-text">with no surprises</span>
          </h2>
          <p className="section-subtitle">
            Most freelance engagements fail not because of bad code, but bad
            communication. Here&apos;s how I keep things tight from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <Reveal key={p.step} delayMs={i * 90}>
              <div className="card p-7 h-full flex flex-col relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-3 -right-2 text-[5rem] font-extrabold leading-none text-accent/[0.07] select-none pointer-events-none"
                >
                  {p.step}
                </div>

                <div className="relative flex flex-col h-full">
                  <div className="text-[11px] font-mono font-semibold text-accent mb-3 tracking-widest">
                    STEP {p.step}
                  </div>
                  <h3 className="card-title mb-3">{p.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <div className="text-xs text-muted font-mono pt-3 border-t border-border mt-auto tracking-wider">
                    {p.duration}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
