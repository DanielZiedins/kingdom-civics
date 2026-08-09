import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0f1a2e 0%, #1a2f4f 45%, #2a1f12 100%)",
          color: "#f8f4ec",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              border: "2px solid #c9a227",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              color: "#c9a227",
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, letterSpacing: 6, fontWeight: 700 }}>KINGDOM</div>
            <div style={{ fontSize: 22, letterSpacing: 10 }}>CIVICS</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div style={{ fontSize: 58, lineHeight: 1.05, fontWeight: 700 }}>
            Understand government. Discern leadership. Seek the Kingdom.
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.4 }}>
            Christian civic education · Hamilton, Ontario · Biblical principles · Kingdom Lens
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
          <span>kingdom-civics.vercel.app</span>
          <span>{SITE_TAGLINE}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
