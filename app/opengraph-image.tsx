import { ImageResponse } from "next/og";
import { SITE_URL } from "@/lib/seo";

export const runtime = "edge";
export const alt =
  "Abhijeet Sakpal — Senior Full-Stack Engineer & Team Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic OG image — rendered on demand by Vercel's edge runtime.
 * Used in social link previews (LinkedIn, WhatsApp, Slack, X, etc.).
 *
 * Mirrors the Hero copy on the homepage so the preview matches what
 * visitors see when they click through.
 */
export default async function OGImage() {
  // Strip protocol for cleaner display in the corner
  const displayUrl = SITE_URL.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 20% 0%, rgba(124,92,255,0.35), transparent 45%), radial-gradient(circle at 80% 100%, rgba(34,211,238,0.25), transparent 45%), #0a0a0f",
          color: "#e8e8ef",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #7c5cff, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "24px",
              color: "#fff",
            }}
          >
            AS
          </div>
          <div style={{ fontSize: "24px", fontWeight: 600 }}>
            Abhijeet<span style={{ opacity: 0.5 }}>.dev</span>
          </div>
        </div>

        {/* Headline — matches Hero on homepage */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "20px",
              color: "#7c5cff",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Senior Full-Stack Engineer · Team Lead
          </div>
          <div
            style={{
              fontSize: "60px",
              fontWeight: 800,
              lineHeight: 1.08,
              maxWidth: "1050px",
              letterSpacing: "-0.02em",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #7c5cff, #d946ef, #22d3ee)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              4+ years
            </span>
            ,{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #7c5cff, #d946ef, #22d3ee)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              6-dev team lead
            </span>
            , on-site in{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #7c5cff, #d946ef, #22d3ee)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Dubai &amp; Abu Dhabi
            </span>
            .
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "rgba(232,232,239,0.75)",
              maxWidth: "1000px",
              lineHeight: 1.4,
            }}
          >
            .NET Core · Angular · SQL Server · LLM Integration · Azure /
            Kubernetes
          </div>
        </div>

        {/* Footer line */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            color: "rgba(232,232,239,0.6)",
            borderTop: "1px solid rgba(124,92,255,0.3)",
            paddingTop: "24px",
          }}
        >
          <div>Available for freelance · Open to senior roles</div>
          <div>{displayUrl}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
