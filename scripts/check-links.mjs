// Crawls the running site starting at the sitemap and checks every internal link and image.
// Usage: node scripts/check-links.mjs http://localhost:3000
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const seen = new Set();
const failures = [];

async function get(path) {
  const res = await fetch(base + path, { redirect: "follow" });
  return res;
}

const sitemap = await (await get("/sitemap.xml")).text();
const queue = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
queue.push("/");

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  seen.add(path);
  const res = await get(path);
  if (!res.ok) {
    failures.push(`${res.status} ${path}`);
    continue;
  }
  if (!(res.headers.get("content-type") ?? "").includes("text/html")) continue;
  const html = await res.text();
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    let target = m[1].replaceAll("&amp;", "&");
    if (/^(https?:|mailto:|tel:|#|data:)/.test(target)) continue;
    target = target.split("#")[0];
    if (!target.startsWith("/")) continue;
    if (target.startsWith("/_next/image")) {
      const r = await get(target);
      if (!r.ok) failures.push(`${r.status} ${target} (on ${path})`);
      continue;
    }
    if (target.startsWith("/_next/")) continue;
    if (!seen.has(target)) {
      const r = await get(target);
      if (!r.ok) failures.push(`${r.status} ${target} (on ${path})`);
      seen.add(target);
    }
  }
}

console.log(`Checked ${seen.size} URLs.`);
if (failures.length) {
  console.error("Broken links:\n" + failures.join("\n"));
  process.exit(1);
}
