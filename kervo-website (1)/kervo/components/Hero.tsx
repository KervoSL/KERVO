"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LogoMark from "./Logo";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (e: MouseEvent) => {
      el.style.setProperty("--x", `${(e.clientX / window.innerWidth) * 100}%`);
      el.style.setProperty("--y", `${(e.clientY / window.innerHeight) * 100}%`);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-black pt-[68px] md:pt-[76px] pb-24">
      {/* Grid + spotlight background */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        ref={spotRef}
        className="pointer-events-none absolute inset-0"
        style={
          {
            "--x": "50%",
            "--y": "35%",
            background: "radial-gradient(600px circle at var(--x) var(--y), rgba(37,99,255,0.12), transparent 65%)",
          } as React.CSSProperties
        }
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content w-full px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="flex justify-center mb-8 md:mb-10"
        >
          <LogoMark size={48} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="text-[12px] md:text-[13px] tracking-wordmark uppercase text-neutral-500"
        >
          Kervo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="mx-auto mt-6 max-w-4xl text-balance text-[34px] leading-[1.08] sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.04] tracking-tightest font-semibold text-white"
        >
          Building products for the way people{" "}
          <span className="text-neutral-500">live, work and manage their world.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
          className="mx-auto mt-7 md:mt-8 max-w-xl text-balance text-base md:text-lg text-neutral-400"
        >
          Kervo is a technology company creating its own digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: EASE }}
          className="mt-10 md:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/#products"
            className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-white text-black text-sm font-medium px-7 py-3.5 transition-colors duration-300 hover:bg-accent hover:text-white"
          >
            Explore products
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-7 py-3.5 transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
          >
            About Kervo
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 inset-x-0 hidden sm:flex justify-center"
        aria-hidden="true"
      >
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
