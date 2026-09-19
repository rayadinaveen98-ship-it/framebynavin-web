import { ImageResponse } from "next/og";

export const alt = "FrameByNavin — Cinema, Stories, Ideas";
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
          background: "#08090a",
          color: "#edf0f2",
          padding: "58px 64px",
          fontFamily: "Arial, sans-serif",
          border: "2px solid #292d30",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 27, fontWeight: 800, letterSpacing: "0.08em" }}>
            FRAMEBYNAVIN<span style={{ color: "#ff4438" }}>●</span>
          </div>
          <div style={{ display: "flex", color: "#8b949a", fontSize: 18, letterSpacing: "0.18em" }}>
            CREATOR SYSTEM / INDIA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#8b949a", fontSize: 19, letterSpacing: "0.2em", marginBottom: 28 }}>
            CINEMA ANALYSIS / VISUAL STORYTELLING
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.055em" }}>
            <div style={{ display: "flex" }}>SEE THE <span style={{ color: "#ff4438", marginLeft: 22 }}>FRAME.</span></div>
            <div style={{ display: "flex" }}>BUILD THE WORLD.</div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 26, borderTop: "2px solid #292d30", color: "#8b949a", fontSize: 18 }}>
          <div style={{ display: "flex" }}>CINEMA · STORIES · APPS · GAMES</div>
          <div style={{ display: "flex", color: "#edf0f2" }}>FRAME BY FRAME</div>
        </div>
      </div>
    ),
    size,
  );
}
