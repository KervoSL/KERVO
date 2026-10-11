import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Best-effort throttle per IP. Serverless instances do not share memory, so this only slows
// down naive loops; the honeypot and Buttondown's own checks do the rest.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) hits.clear();
  return recent.length > 5;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Newsletter sign-up. Subscribers are stored by Buttondown (https://buttondown.com).
 * Set BUTTONDOWN_API_KEY in the hosting environment to enable it. Without the key
 * the endpoint answers 503 and nothing is collected.
 */
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  let body: { email?: unknown; company?: unknown; consent?: unknown; list?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend it worked.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: "consent_required" }, { status: 400 });
  }

  const LISTS = new Set(["website", "moneynest", "tradevault"]);
  const list = typeof body.list === "string" && LISTS.has(body.list) ? body.list : "website";

  const key = process.env.BUTTONDOWN_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: { Authorization: `Token ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email_address: email, tags: list === "website" ? ["website"] : ["website", list] }),
    });
    if (res.ok) return NextResponse.json({ ok: true });
    const data = await res.json().catch(() => ({}));
    const text = JSON.stringify(data).toLowerCase();
    if (res.status === 400 && (text.includes("already") || text.includes("exists"))) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "provider" }, { status: 502 });
  } catch {
    return NextResponse.json({ error: "provider" }, { status: 502 });
  }
}
