import Image from "next/image";
import {
  MapPin,
  Briefcase,
  Plane,
  Code2,
  Zap,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "4+ Years Enterprise",
    text: "Shipping production apps in logistics, maritime, and ticketing domains.",
  },
  {
    icon: Code2,
    title: "Lead 6-Dev Team",
    text: "Owning architecture, code reviews, and complex production blockers.",
  },
  {
    icon: Zap,
    title: "Performance & SQL Tuning",
    text: "Cut API response times via service decomposition, async processing, and query tuning.",
  },
  {
    icon: Users,
    title: "Mentor & Reviewer",
    text: "Coach juniors on C#, Angular, and SOLID; run review gates that cut defects 30%.",
  },
  {
    icon: Plane,
    title: "UAE On-Site Delivery",
    text: "Direct client engagements in Abu Dhabi & Dubai — requirement to go-live.",
  },
  {
    icon: MapPin,
    title: "Based in Thane, India",
    text: "Working with clients globally across IST-friendly time zones.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: photo + heading (sticky on large screens) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Soft accent glow behind the photo */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/25 to-accent2/20 blur-2xl pointer-events-none"
              />
              {/* Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-border bg-surface aspect-[4/5] shadow-xl">
                <Image
                  src="/photo.jpg"
                  alt="Abhijeet Sakpal — senior full-stack engineer, professional headshot"
                  fill
                  priority
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 16rem, 90vw"
                  className="object-cover object-[center_18%]"
                />
                {/* Bottom subtle gradient for badge legibility */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"
                />
                {/* Status badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <div
                    role="status"
                    aria-live="polite"
                    className="inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 text-xs text-white"
                  >
                    <span aria-hidden="true" className="relative flex h-2 w-2">
                      <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    Available for projects
                  </div>
                  <div className="text-xs font-mono text-white/80">
                    Thane, IN
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="section-eyebrow">About</div>
              <h2 className="section-title">
                Senior <span className="gradient-text">full-stack</span>{" "}
                engineer.
              </h2>
              <p className="section-subtitle">
                Pragmatic, outcome-driven, and shipping-focused.
              </p>
            </div>
          </div>

          {/* Right: bio + highlights */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-foreground/85 text-lg leading-relaxed">
              I architect and ship enterprise-scale applications across{" "}
              <span className="text-foreground font-medium">
                .NET Core microservices, Angular, and SQL Server
              </span>{" "}
              — with production experience deploying containerized workloads on{" "}
              <span className="text-foreground font-medium">
                Docker, Kubernetes, and Microsoft Azure
              </span>
              .
            </p>

            <p className="text-foreground/85 text-lg leading-relaxed">
              Recently I&apos;ve been deep in{" "}
              <span className="text-foreground font-medium">LLM integration</span> —
              automating ticket classification and routing in production, which
              cut manual email handling by 40% on a real customer-support
              workflow. I lead a team of 6 developers, mentor juniors, and run
              VAPT-compliant releases that reduced post-release defects by 30%.
            </p>

            {/* Anonymized 'Worked With' sectors — credibility without breaking NDAs */}
            <div className="rounded-xl border border-border bg-surface/40 px-5 py-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-semibold mb-2">
                Worked with
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">
                A UAE port operator · a rail-logistics platform · enterprise
                customer-support teams across India · multi-tenant SaaS
                products for business operations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="card p-5 flex gap-4 items-start"
                >
                  <div className="rounded-lg bg-accent/10 p-2.5 text-accent shrink-0">
                    <h.icon size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {h.title}
                    </div>
                    <div className="text-sm text-foreground/70 mt-1 leading-relaxed">
                      {h.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
