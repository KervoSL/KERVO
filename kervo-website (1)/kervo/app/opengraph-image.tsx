import { ImageResponse } from "next/og";

export const alt = "Kervo — Building products for the way people live, work and manage their world.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="44" height="44" viewBox="0 0 512 512" fill="#ffffff">
            <path d="M140 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32z" />
            <path d="M249.4 236.6 388.9 96.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L214.1 181.3c-11.9 11.9-11.9 31.2 0 43.1L343.6 354c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L249.4 236.6z" />
          </svg>
          <div style={{ fontSize: 30, letterSpacing: 9, fontWeight: 600 }}>KERVO</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 68, lineHeight: 1.08, fontWeight: 600, letterSpacing: -2 }}>
          <span>Building products for the way people</span>
          <span style={{ color: "#727278" }}>live, work and manage their world.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9C9CA3" }}>MoneyNest · TradeVault · and more</div>
      </div>
    ),
    size,
  );
}
