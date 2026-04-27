"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  durationMs?: number;
  className?: string;
}

/**
 * Renders a numeric value that counts up from 0 when scrolled into view.
 * Preserves any non-numeric prefix/suffix in the source string ("4+", "40%", "↓ 30%").
 */
export default function AnimatedCounter({ value, durationMs = 1200, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const startedRef = useRef(false);

  // Parse: "40%" -> { num: 40, prefix: "", suffix: "%" }
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const target = match ? parseInt(match[2], 10) : null;
  const prefix = match?.[1] ?? "";
  const suffix = match?.[3] ?? "";

  useEffect(() => {
    if (target === null) return;
    setDisplay(`${prefix}0${suffix}`);

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (startedRef.current) return;
        if (entries.some((e) => e.isIntersecting)) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
            const current = Math.round(target * eased);
            setDisplay(`${prefix}${current}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, prefix, suffix, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
