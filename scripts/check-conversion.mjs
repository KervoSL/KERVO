// Regression checks for the conversion journey, run against a running site (no browser needed).
// Usage: node scripts/check-conversion.mjs http://localhost:3000
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const CANONICAL = "https://moneynest.es";
const failures = [];
const ok = (cond, msg) => {
  if (!cond) failures.push(msg);
};

const page = async (path) => {
  const res = await fetch(base + path);
  ok(res.ok, `${path} answered ${res.status}`);
  return res.text();
};
const forms = (html) => (html.match(/<form[\s>]/g) ?? []).length;

const pages = ["/", "/products", "/products/moneynest", "/products/tradevault", "/about", "/contact", "/privacy", "/terms", "/cookies", "/legal-notice"];
const html = Object.fromEntries(await Promise.all(pages.map(async (p) => [p, await page(p)])));

// Every outbound MoneyNest link uses the one canonical domain.
for (const [path, h] of Object.entries(html)) {
  for (const m of h.matchAll(/href="(https?:\/\/[^"]+)"/gi)) {
    const url = new URL(m[1]);
    if (/money-?nest/i.test(url.hostname)) {
      ok(m[1].replace(/\/$/, "") === CANONICAL, `${path}: unexpected MoneyNest link ${m[1]}`);
    }
  }
}

// The main CTA reaches the app from the home page and from the product page, in a new tab.
for (const path of ["/", "/products/moneynest"]) {
  const re = new RegExp(`<a[^>]*href="${CANONICAL.replace(/[.]/g, "\\.")}"[^>]*>`, "g");
  const anchors = html[path].match(re) ?? [];
  ok(anchors.length > 0, `${path}: no CTA to ${CANONICAL}`);
  ok(anchors.every((a) => a.includes('target="_blank"') && a.includes("noopener")), `${path}: CTA must open in a new tab with rel=noopener`);
}

// One newsletter form per page: the product pages carry their own, so the footer one is hidden there.
for (const p of pages) ok(forms(html[p]) === 1, `${p}: expected exactly 1 newsletter form, found ${forms(html[p])}`);

// Plans and prices match MoneyNest's billing definitions.
const mn = html["/products/moneynest"];
ok(mn.includes('id="pricing"'), "/products/moneynest: missing #pricing section");
for (const s of ["€1", "€9.99", "€2", "€19.99", "7-day free trial"]) ok(mn.includes(s), `/products/moneynest: pricing is missing "${s}"`);

// The privacy policy must describe the newsletter the site actually runs.
ok(/newsletter|bolet[ií]n/i.test(html["/privacy"]), "/privacy: does not mention the newsletter");

// The footer exposes every legal page.
for (const l of ["/privacy", "/terms", "/cookies", "/legal-notice"]) ok(html["/"].includes(`href="${l}"`), `/: footer is missing ${l}`);

// Official contact details: socials and email, no GitHub link.
for (const [path, h] of Object.entries(html)) {
  ok(!/github\.com/i.test(h.replace(/<script[\s\S]*?<\/script>/g, "")), `${path}: should not link to GitHub`);
}
for (const u of ["https://www.instagram.com/kervo.sl/", "https://www.tiktok.com/@kervo_sl", "mailto:hello@kervo.info"]) {
  ok(html["/"].includes(`href="${u}"`), `/: footer is missing ${u}`);
  ok(html["/contact"].includes(`href="${u}"`), `/contact: missing ${u}`);
}

// The signup endpoint refuses bad input.
const post = (body) => fetch(base + "/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json", "x-forwarded-for": "198.51.100." + Math.floor(Math.random() * 250) }, body: JSON.stringify(body) });
ok((await post({ email: "nope", consent: true })).status === 400, "/api/subscribe: invalid email must return 400");
ok((await post({ email: "a@example.com", consent: false })).status === 400, "/api/subscribe: missing consent must return 400");

console.log(`Conversion checks: ${failures.length ? "FAILED" : "passed"}.`);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
