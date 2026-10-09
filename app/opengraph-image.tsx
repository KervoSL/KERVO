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
          background: "#f5f6f8",
          color: "#0a0f1e",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="44" height="44" viewBox="0 0 512 512" fill="#0a0f1e">
            <path d="M140 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32z" />
            <path d="M249.4 236.6 388.9 96.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L214.1 181.3c-11.9 11.9-11.9 31.2 0 43.1L343.6 354c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L249.4 236.6z" />
          </svg>
          <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: -1 }}>Kervo</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05, fontWeight: 700, letterSpacing: -3 }}>
          <span>Products for the way people</span>
          <span>live, work and manage</span>
          <span>their world.</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#566074" }}>
          A technology company building its own digital products
        </div>
      </div>
    ),
    size,
  );
}
