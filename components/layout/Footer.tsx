import Link from "next/link";
import { KMark } from "@/components/ui/Icons";
import Newsletter from "@/components/ui/Newsletter";
import { PRODUCTS } from "@/lib/products";
import { CONTACT_EMAIL, GITHUB_URL, LEGAL_LINKS, LEGAL_NAME } from "@/lib/site";

const linkCls = "link-draw text-[15px] text-muted transition-colors duration-300 hover:text-ink";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x pb-10 pt-16 md:pt-20">
        <div className="relative grid gap-8 border-b border-line pb-14 md:grid-cols-12 md:gap-12 md:pb-16">
          <div className="md:col-span-6">
            <h2 className="t-h3 max-w-[16em]">News from Kervo, in your inbox.</h2>
            <p className="t-body mt-3 max-w-[28rem]">
              Updates on MoneyNest, TradeVault and the products we build next.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Newsletter />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Kervo, home">
              <KMark size={24} />
              <span className="text-[20px] font-semibold tracking-[-0.025em]">Kervo</span>
            </Link>
            <p className="t-body mt-5 max-w-[26rem]">
              A technology company that designs, builds and operates its own digital products.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link-draw mt-5 inline-block text-[15px] text-ink">
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav aria-label="Products" className="md:col-span-2 md:col-start-7">
            <h2 className="text-[15px] font-semibold">Products</h2>
            <ul className="mt-5 space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link href={p.href} className={linkCls}>
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className={linkCls}>
                  All products
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company" className="md:col-span-2">
            <h2 className="text-[15px] font-semibold">Company</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/about" className={linkCls}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkCls}>
                  Contact
                </Link>
              </li>
              <li>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  GitHub<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal" className="md:col-span-2">
            <h2 className="text-[15px] font-semibold">Legal</h2>
            <ul className="mt-5 space-y-3">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.</p>
          <p>Products designed, built and run by Kervo.</p>
        </div>
      </div>
    </footer>
  );
}
