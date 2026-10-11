import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { KERVO_MARK_PATH } from "@/components/ui/Icons";

export const ogSize = { width: 1200, height: 630 };

async function dataUri(file: string, mime: string) {
  const buf = await readFile(path.join(process.cwd(), "public", file));
  return `data:${mime};base64,${buf.toString("base64")}`;
}

/** Social preview card for a product page. Dark panel, product icon, name and one line. */
export async function productOg({
  name,
  line,
  badge,
  icon,
  iconMime,
}: {
  name: string;
  line: string;
  badge: string;
  icon: string;
  iconMime: string;
}) {
  const src = await dataUri(icon, iconMime);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0e17",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#aab3c5", fontSize: 30 }}>
          <svg width="26" height="30" viewBox="0 0 85.54 100" fill="#aab3c5">
            <path d={KERVO_MARK_PATH} />
          </svg>
          <span>Kervo</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={104} height={104} alt="" style={{ borderRadius: 24 }} />
          <div style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: -4, marginTop: 36 }}>{name}</div>
          <div style={{ display: "flex", fontSize: 38, color: "#aab3c5", marginTop: 12 }}>{line}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#00d4aa" }}>{badge}</div>
      </div>
    ),
    ogSize,
  );
}
