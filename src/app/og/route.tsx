import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get("title") ?? "Understand government. Discern leadership. Seek the Kingdom.";
  const kicker = request.nextUrl.searchParams.get("kicker") ?? "KINGDOM CIVICS";
  const shortTitle = title.length > 90 ? `${title.slice(0, 87)}…` : title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "linear-gradient(135deg, #0b1b2c 0%, #16324a 52%, #2a1f12 100%)",
          color: "#f8f4ec",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", letterSpacing: 6, fontWeight: 700 }}>
            <span style={{ fontSize: 22 }}>KINGDOM</span>
            <span style={{ fontSize: 18, letterSpacing: 10 }}>CIVICS</span>
          </div>
          <span style={{ fontSize: 16, letterSpacing: 3, color: "#e0c27e" }}>{kicker}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 980 }}>
          <div style={{ fontSize: 52, lineHeight: 1.08, fontWeight: 700 }}>{shortTitle}</div>
          <div style={{ fontSize: 22, color: "#c5ced3", lineHeight: 1.4 }}>
            Global Christian civic education · Evidence over endorsements
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#d6bd84" }}>
          <span>www.kingdomcivics.org</span>
          <span>Kingdom first. Always.</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
