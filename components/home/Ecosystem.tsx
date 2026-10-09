import Image from "next/image";
import Link from "next/link";
import InView from "@/components/ui/InView";
import { KMark } from "@/components/ui/Icons";
import { PRODUCTS, type Product } from "@/lib/products";

const nodeStyle = (n: number) => ({ "--n": n }) as React.CSSProperties;

function StatusDot({ status, label }: { status: Product["status"]; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] text-muted">
      <span
        className={`h-1.5 w-1.5 rounded-full ${status === "live" ? "bg-[#00a884]" : "bg-[#a3abbb]"}`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

/**
 * Kervo → Products → each product (+ a slot for the next one).
 * Driven by PRODUCTS, so adding a product extends the diagram automatically.
 */
export default function Ecosystem() {
  const count = PRODUCTS.length + 1;

  return (
    <section className="section border-t border-line" aria-labelledby="ecosystem">
      <div className="container-x">
        <div className="max-w-[40rem]">
          <h2 id="ecosystem" className="t-h2">
            One company. A growing family of products.
          </h2>
          <p className="t-lead mt-6">
            Kervo sits behind every product: the same team and the same standard, with one place to
            build and run them all.
          </p>
        </div>

        <InView className="mt-14 md:mt-20">
          <div className="flex flex-col items-start md:items-center">
            <div className="eco-node eco-root flex items-center gap-4 rounded-2xl bg-ink px-6 py-5 text-white">
              <KMark size={30} />
              <div>
                <p className="text-[20px] font-semibold leading-tight tracking-[-0.02em]">Kervo</p>
                <p className="text-[14px] leading-tight text-white/60">Technology company</p>
              </div>
            </div>

            <div className="eco-line eco-trunk" aria-hidden="true" />

            <div className="relative w-full md:-mx-3 md:w-[calc(100%+1.5rem)]">
              <div
                className="eco-line eco-rail mx-auto hidden md:block"
                style={{ width: `${(100 * (count - 1)) / count}%` }}
                aria-hidden="true"
              />
              <ul
                className="relative ml-[14px] space-y-4 pl-6 md:ml-0 md:grid md:grid-cols-[repeat(var(--cols),minmax(0,1fr))] md:gap-0 md:space-y-0 md:pl-0"
                style={{ "--cols": count } as React.CSSProperties}
              >
                <span className="eco-line eco-mobile-rail" aria-hidden="true" />

                {PRODUCTS.map((p, i) => (
                  <li key={p.slug} className="relative md:px-3 md:pt-10">
                    <span className="eco-line eco-drop" aria-hidden="true" />
                    <span className="eco-line eco-stub" aria-hidden="true" />
                    <Link
                      href={p.href}
                      style={nodeStyle(i + 1)}
                      className="eco-node group block h-full rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <Image src={p.logo.src} alt={p.logo.alt} width={48} height={48} className="rounded-[22%]" />
                        <StatusDot status={p.status} label={p.statusLabel} />
                      </div>
                      <p className="t-h3 mt-6">{p.name}</p>
                      <p className="t-body mt-1.5 text-[15px]">{p.tagline}</p>
                    </Link>
                  </li>
                ))}

                <li className="relative md:px-3 md:pt-10">
                  <span className="eco-line eco-drop" aria-hidden="true" />
                  <span className="eco-line eco-stub" aria-hidden="true" />
                  <div
                    style={nodeStyle(count)}
                    className="eco-node h-full rounded-2xl border border-dashed border-[#bfc5d1] p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-[22%] border border-dashed border-[#bfc5d1] text-[#8a93a6]">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                        <path d="M9 3v12M3 9h12" />
                      </svg>
                    </div>
                    <p className="t-h3 mt-6">Next product</p>
                    <p className="t-body mt-1.5 text-[15px]">Not announced yet.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
