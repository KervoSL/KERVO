"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      el.style.setProperty("--x", `${x}%`);
      el.style.setProperty("--y", `${y}%`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-[76px]">
      {/* Grid + spotlight background */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        ref={spotRef}
        className="pointer-events-none absolute inset-0 transition-opacity"
        style={
          {
            "--x": "50%",
            "--y": "35%",
            background:
              "radial-gradient(600px circle at var(--x) var(--y), rgba(37,99,255,0.14), transparent 65%)",
          } as React.CSSProperties
        }
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content w-full px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-10"
        >
          <svg width="56" height="56" viewBox="0 0 512 512" fill="currentColor" className="text-white">
            <path d="M140 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32z" />
            <path d="M249.4 236.6 388.9 96.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L214.1 181.3c-11.9 11.9-11.9 31.2 0 43.1L343.6 354c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L249.4 236.6z" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-[13vw] leading-[0.95] tracking-tightest font-semibold text-white sm:text-[9vw] md:text-[6.4vw] lg:text-[88px]"
        >
          Software that
          <br />
          <span className="text-neutral-500">empowers people.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-xl text-balance text-base md:text-lg text-neutral-400"
        >
          KERVO designs and builds world-class software — crafted with the
          same discipline as the tools people trust every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black text-sm font-medium px-7 py-3.5 transition-colors duration-300 hover:bg-accent hover:text-white"
          >
            Explore Products
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#who-we-are"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-7 py-3.5 transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
          >
            About KERVO
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 inset-x-0 flex justify-center"
        aria-hidden="true"
      >
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
