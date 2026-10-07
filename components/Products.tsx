"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { PRODUCTS, STATUS_LABEL, STATUS_STYLES, type Product } from "@/lib/products";

function ProductMark({ product, size }: { product: Product; size: number }) {
  if (product.logo) {
    return (
      <Image
        src={product.logo.src}
        alt={product.logo.alt}
        width={size}
        height={size}
        className="rounded-[22%]"
      />
    );
  }
  return (
    <div
      className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
      style={{ width: size, height: size }}
    >
      {product.mark}
    </div>
  );
}

function StatusBadge({ status }: { status: Product["status"] }) {
  return (
    <span
      className={`shrink-0 text-[11px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full ${STATUS_STYLES[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

function ProductLink({ product, large = false }: { product: Product; large?: boolean }) {
  if (!product.href) {
    return <span className="text-sm font-medium text-neutral-600">Announced when ready</span>;
  }
  const classes = large
    ? "inline-flex items-center gap-2 rounded-full bg-white text-black text-sm font-medium px-6 py-3 transition-colors duration-300 hover:bg-accent hover:text-white"
    : "inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-accent transition-colors duration-300";
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      aria-label={`${product.ctaLabel ?? "Visit"} (opens in a new tab)`}
    >
      {product.ctaLabel ?? "Visit product"}
      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function FeaturedCard({ product }: { product: Product }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid grid-cols-1 lg:grid-cols-5 overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 transition-colors duration-500 hover:border-white/25"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(520px circle at 85% 20%, rgba(37,99,255,0.10), transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="relative lg:col-span-3 p-8 sm:p-10 md:p-14 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Flagship product</span>
          <StatusBadge status={product.status} />
        </div>
        <h3 className="mt-10 md:mt-14 text-[34px] md:text-[44px] leading-[1.1] font-semibold text-white">{product.name}</h3>
        <p className="mt-2 text-neutral-500">{product.category}</p>
        <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed text-neutral-300">{product.description}</p>
        <div className="mt-10 md:mt-12">
          <ProductLink product={product} large />
        </div>
      </div>

      <div className="relative lg:col-span-2 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10 bg-black/40 min-h-[220px] py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProductMark product={product} size={144} />
        </motion.div>
      </div>
    </motion.article>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full flex flex-col rounded-2xl border border-white/10 bg-neutral-950 p-8 md:p-9 transition-colors duration-500 hover:border-white/25"
    >
      <div className="flex items-start justify-between gap-4">
        <ProductMark product={product} size={48} />
        <StatusBadge status={product.status} />
      </div>
      <h3 className="mt-8 text-xl md:text-2xl font-semibold text-white">{product.name}</h3>
      <p className="mt-1 text-sm text-neutral-500">{product.category}</p>
      <p className="mt-4 text-[15px] text-neutral-400 leading-relaxed">{product.description}</p>
      <div className="mt-auto pt-8">
        <ProductLink product={product} />
      </div>
    </motion.article>
  );
}

export default function Products() {
  const featured = PRODUCTS.find((p) => p.featured);
  const others = PRODUCTS.filter((p) => p !== featured);

  return (
    <section id="products" className="relative bg-black py-28 md:py-40 border-t border-white/10 scroll-mt-16">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Our products</span>
          <h2 className="mt-5 text-balance text-[32px] sm:text-[40px] md:text-[52px] leading-[1.1] font-semibold text-white max-w-2xl">
            Everything Kervo builds, in one place.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 space-y-5">
          {featured && (
            <Reveal>
              <FeaturedCard product={featured} />
            </Reveal>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
