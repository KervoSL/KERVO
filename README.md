# Kervo website

Corporate site of Kervo SL, the company behind MoneyNest and TradeVault. Next.js 14 (App Router), TypeScript, Tailwind CSS.

## Run it

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

Node 20 or newer.

## How it is organised

| Path | What lives there |
| --- | --- |
| `lib/products.ts` | Single source of truth for products. Home, ecosystem, footer, sitemap and structured data all read it. |
| `lib/moneynest.ts` | Verified MoneyNest content: features, steps, privacy points, plans. |
| `lib/site.ts` | Site name, URLs, navigation, legal company details. |
| `lib/seo.ts` | `pageMeta()` and `breadcrumbs()` helpers used by every page. |
| `components/home`, `components/moneynest` | Page sections. |
| `app/api/subscribe` | Newsletter endpoint (Buttondown). |
| `public/moneynest` | Real MoneyNest screenshots (WebP). |

### Adding a product

1. Add an entry to `PRODUCTS` in `lib/products.ts` (logo in `public/products`).
2. Create `app/products/<slug>/page.tsx`, using `pageMeta()` and `breadcrumbs()`.
3. Home, ecosystem, footer and sitemap pick it up automatically.

## Configuration

See `.env.example`. Nothing is required to build; defaults are used for anything unset.

## Before launch

- Set `NEXT_PUBLIC_SITE_URL` once the final domain is live, then submit `/sitemap.xml` in Google Search Console.
- Set `BUTTONDOWN_API_KEY` to activate the newsletter and test a real sign-up in production.
- Fill `LEGAL_DETAILS` in `lib/site.ts` (registered office, tax ID, registry) and have the legal pages reviewed.
- Confirm `NEXT_PUBLIC_CONTACT_EMAIL` and the MoneyNest prices in `lib/moneynest.ts`.

## Checks

`.github/workflows/ci.yml` runs lint, build and a link check (`scripts/check-links.mjs`) on every pull request and push to `main`.
To run the link check locally: build, start with `npm start`, then `node scripts/check-links.mjs http://localhost:3000`.

## Deploying

Vercel, with an empty Root Directory and the Next.js framework preset (forced by `vercel.json`).
Work on a branch and open a pull request to get a preview URL before merging into `main`.
