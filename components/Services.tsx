import { Sparkles, Code2, Cloud, Check } from "lucide-react";
import { services } from "@/lib/data";
import Reveal from "./Reveal";

const icons = [Sparkles, Code2, Cloud];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-border">
      <div className="container-x">
        <div className="text-center mb-14">
          <div className="section-eyebrow">What I Do</div>
          <h2 className="section-title">
            Services for <span className="gradient-text">ambitious teams</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Three focused offerings — chosen because I&apos;ve shipped each of
            them to production at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.title} delayMs={i * 100}>
              <div className="card p-7 flex flex-col h-full">
                <div className="rounded-xl bg-accent/10 p-3 w-fit text-accent mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="card-title mb-3">{s.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-5">
                  {s.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-foreground/85 leading-relaxed"
                    >
                      <Check
                        size={16}
                        className="text-accent2 mt-0.5 shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
