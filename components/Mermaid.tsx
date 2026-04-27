"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  chart: string;
  caption?: string;
  /** Accessible label for screen readers — falls back to caption */
  ariaLabel?: string;
}

/**
 * Mermaid diagram renderer.
 *
 * - Dynamically imports mermaid (~50KB) only on pages that use it
 * - Re-renders when the user toggles light/dark theme
 * - Uses our accent colors via Mermaid themeVariables for visual consistency
 * - Falls back to a code block if Mermaid fails to load
 *
 * Pass valid Mermaid syntax (https://mermaid.js.org/syntax/flowchart.html)
 * via the `chart` prop. Optional `caption` shows below the diagram.
 */
export default function Mermaid({ chart, caption, ariaLabel }: Props) {
  const label = ariaLabel ?? caption ?? "Architecture diagram";
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(`mermaid-${Math.random().toString(36).slice(2, 9)}`);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Track theme changes by observing the dark class on <html>
  useEffect(() => {
    const update = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Render / re-render diagram
  useEffect(() => {
    let cancelled = false;
    setError(null);

    (async () => {
      try {
        const { default: mermaid } = await import("mermaid");

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          themeVariables: {
            background: isDark ? "#111118" : "#f5f6fa",
            primaryColor: isDark ? "#1f1f2a" : "#ffffff",
            primaryTextColor: isDark ? "#e8e8ef" : "#0f172a",
            primaryBorderColor: "#7c5cff",
            lineColor: isDark ? "#8b8b99" : "#64748b",
            secondaryColor: isDark ? "#1f1f2a" : "#ffffff",
            tertiaryColor: isDark ? "#0a0a0f" : "#ffffff",
            mainBkg: isDark ? "#1f1f2a" : "#ffffff",
            nodeBorder: "#7c5cff",
            edgeLabelBackground: isDark ? "#111118" : "#f5f6fa",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "14px",
          },
          flowchart: {
            curve: "basis",
            htmlLabels: true,
            padding: 14,
          },
        });

        const { svg } = await mermaid.render(idRef.current, chart);
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = svg;
      } catch (err) {
        if (cancelled) return;
        setError(
          err instanceof Error ? err.message : "Failed to render diagram"
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, isDark]);

  return (
    <figure className="my-8" role="figure" aria-label={label}>
      <div className="rounded-2xl border border-border bg-surface/40 p-6 overflow-x-auto">
        {error ? (
          <pre
            role="alert"
            className="text-xs text-red-400 font-mono whitespace-pre-wrap"
          >
            Diagram render error: {error}
            {"\n\n"}
            {chart}
          </pre>
        ) : (
          <div
            ref={containerRef}
            role="img"
            aria-label={label}
            className="flex justify-center"
          />
        )}
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-muted mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
