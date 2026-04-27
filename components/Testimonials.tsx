import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 border-t border-border">
      <div className="container-x">
        <div className="text-center mb-14">
          <div className="section-eyebrow">Kind Words</div>
          <h2 className="section-title">
            What people <span className="gradient-text">say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="card p-7 flex flex-col">
              <Quote
                size={28}
                className="text-accent/60 mb-4 shrink-0"
                aria-hidden
              />
              <blockquote className="text-foreground/85 leading-relaxed text-sm flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {t.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="size-10 rounded-full object-cover border border-border"
                  />
                ) : (
                  <div className="size-10 rounded-full bg-gradient-to-br from-accent to-accent2 grid place-items-center text-white font-semibold text-sm">
                    {t.name
                      .split(" ")
                      .map((s) => s[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-sm truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted truncate">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
