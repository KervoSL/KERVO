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
          <svg width="38" height="44" viewBox="0 0 85.54 100" fill="#0a0f1e"><path d="M61.04 14.52L59.44 15.19L57.90 16.20L52.34 21.89L27.18 48.33L26.17 49.67L25.37 51.67L25.17 53.01L25.17 54.02L25.50 55.89L26.24 57.56L27.04 58.63L56.43 89.22L57.50 90.23L58.63 91.03L60.31 91.83L62.32 92.30L83.94 92.24L84.47 91.97L84.87 91.57L85.21 90.83L85.14 89.69L84.67 88.89L50.67 54.82L50.20 53.88L50.20 53.01L50.80 51.87L85.07 17.54L85.54 16.47L85.48 15.53L85.27 15.06L84.81 14.52L83.94 14.12L62.85 14.12ZM18.07 0.00L17.00 0.60L2.74 11.98L1.81 12.92L1.00 14.06L0.20 16.06L0.00 17.34L0.00 82.60L0.20 84.07L0.60 85.34L1.41 86.81L2.68 88.29L16.87 99.46L18.01 100.00L18.74 100.00L19.68 99.60L20.35 98.86L20.55 98.26L20.55 1.61L20.21 0.80L19.54 0.20L19.01 0.00Z" /></svg>
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
