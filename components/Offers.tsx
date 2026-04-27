import Link from "next/link";
import { ArrowRight, Check, Clock, Sparkles } from "lucide-react";
import { offers } from "@/lib/data";
import Reveal from "./Reveal";

/**
 * Productized service offers.
 *
 * Pricing strategy:
 *   - "Starting at" wording protects against scope creep
 *   - USD primary (international clients), INR shown smaller for India context
 *   - Each offer has a clear duration cap and concrete deliverables
 *   - Middle card is highlighted as "Most popular" — anchoring trick that
 *     makes higher-tier offer feel more reasonable
 */
export default function Offers() {
  return (
    <section id="offers" className="py-24 border-t border-border">
      <div className="container-x">
        <div className="text-center mb-14">
          <div className="section-eyebrow">Productized Offers</div>
          <h2 className="section-title">
            Fixed scope, fixed price,{" "}
            <span className="gradient-text">no surprises</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Three engagements I run regularly — each with a clear timeline,
            deliverables, and starting price. Custom scope welcome too.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((o, i) => {
            const isFeatured = i === 0; // first offer is the lead/audit (most popular)
            return (
              <Reveal key={o.title} delayMs={i * 90}>
                <div
                  className={`card p-7 h-full flex flex-col relative ${
                    isFeatured
                      ? "border-accent/50 shadow-[0_0_50px_-12px_rgb(var(--color-accent)/0.45)]"
                      : ""
                  }`}
                >
                  {/* Badge */}
                  <div
                    className={`absolute -top-3 left-7 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] ${
                      isFeatured
                        ? "bg-accent text-white shadow-md shadow-accent/30"
                        : "bg-surface border border-border text-foreground/70"
                    }`}
                  >
                    {o.badge}
                  </div>

                  <h3 className="card-title mt-3 mb-3 flex items-start gap-2">
                    {isFeatured && (
                      <Sparkles
                        size={18}
                        className="text-accent mt-1 shrink-0"
                      />
                    )}
                    <span>{o.title}</span>
                  </h3>

                  <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                    {o.pitch}
                  </p>

                  {/* Pricing block */}
                  <div className="rounded-xl border border-border bg-surface/40 p-4 mb-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xl font-bold text-foreground tracking-tight tabular-nums">
                          {o.priceUsd}
                        </div>
                        <div className="text-xs text-muted mt-0.5 tabular-nums">
                          {o.priceInr}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted font-mono tracking-wider">
                        <Clock size={12} />
                        {o.duration}
                      </div>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-5">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold mb-3">
                      Deliverables
                    </div>
                    <ul className="space-y-2">
                      {o.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-foreground/85 leading-relaxed"
                        >
                          <Check
                            size={14}
                            className="text-accent2 mt-1 shrink-0"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best for */}
                  <div className="text-xs text-foreground/60 italic leading-relaxed mb-6 pt-4 border-t border-border">
                    <span className="not-italic font-semibold text-foreground/80">
                      Best for:
                    </span>{" "}
                    {o.bestFor}
                  </div>

                  {/* CTA */}
                  <Link
                    href="#contact"
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                      isFeatured
                        ? "bg-accent text-white shadow-md shadow-accent/20 hover:bg-accent/90 hover:shadow-accent/40"
                        : "border border-border bg-surface/60 text-foreground/90 hover:border-accent/40 hover:text-foreground"
                    }`}
                  >
                    {o.cta}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Fine print */}
        <p className="text-center text-xs text-muted mt-10 max-w-2xl mx-auto leading-relaxed">
          Prices in USD. INR equivalent shown for reference at indicative
          exchange rates. Final scope, milestones, and price agreed via a
          written proposal after our discovery call.
        </p>
      </div>
    </section>
  );
}
