import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abhijeet Sakpal — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "20px",
              color: "#7c5cff",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Full Stack Developer
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: "1000px",
              letterSpacing: "-0.02em",
            }}
          >
            I build{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #7c5cff, #d946ef, #22d3ee)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              AI-powered apps
            </span>{" "}
            that ship.
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "rgba(232,232,239,0.7)",
              maxWidth: "950px",
              lineHeight: 1.4,
            }}
          >
            .NET Core · Angular · LLM Integration · Azure / Kubernetes
          </div>
        </div>

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
          <div>4+ years · Logistics · Maritime · Ticketing</div>
          <div>abhijeetsakpal.dev</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
