"use client";

import { useEffect, useState } from "react";

const lines = [
  { t: "// Production stats — last 12 months", c: "text-foreground/40" },
  { t: "const impact = {", c: "text-foreground/85" },
  { t: '  manualWorkCut: "40%",', c: "text-foreground/85" },
  { t: '  postReleaseDefects: "-30%",', c: "text-foreground/85" },
  { t: '  teamLed: 6,', c: "text-foreground/85" },
  { t: '  onSiteEngagements: ["Abu Dhabi", "Dubai"],', c: "text-foreground/85" },
  { t: "};", c: "text-foreground/85" },
  { t: "", c: "" },
  { t: "// Currently shipping", c: "text-foreground/40" },
  { t: 'await deploy({ stack: ".NET + Angular + LLM" });', c: "text-accent" },
];

export default function HeroCodeCard() {
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (typedCount >= lines.length) return;
    const timeout = setTimeout(() => setTypedCount((n) => n + 1), 220);
    return () => clearTimeout(timeout);
  }, [typedCount]);

  return (
    <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 to-accent2/20 blur-2xl pointer-events-none" />

      <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-md shadow-2xl overflow-hidden">
        {/* Window chrome — purely decorative */}
        <div
          aria-hidden="true"
          className="flex items-center gap-2 border-b border-border px-4 py-3 bg-surface/90"
        >
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-red-400/70" />
            <div className="size-3 rounded-full bg-yellow-400/70" />
            <div className="size-3 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 text-center text-xs text-muted font-mono">
            ~/abhijeet/impact.ts
          </div>
        </div>

        {/* Code body */}
        <div
          aria-hidden="true"
          className="p-5 font-mono text-sm leading-relaxed min-h-[280px]"
        >
          {lines.slice(0, typedCount).map((line, i) => (
            <div
              key={i}
              className={`${line.c} motion-safe:animate-fade-in`}
              style={{ minHeight: "1.5em" }}
            >
              {line.t || "\u00A0"}
              {i === typedCount - 1 && (
                <span className="inline-block w-2 h-4 bg-accent ml-0.5 align-middle motion-safe:animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
