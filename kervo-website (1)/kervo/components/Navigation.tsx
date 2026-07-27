"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#who-we-are", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#principles", label: "Principles" },
  { href: "#why-kervo", label: "Why KERVO" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[9997] transition-all duration-500 ease-premium ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-content px-6 md:px-10 h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="KERVO home">
          <svg width="22" height="22" viewBox="0 0 512 512" fill="currentColor" className="text-white">
            <path d="M140 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32z" />
            <path d="M249.4 236.6 388.9 96.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L214.1 181.3c-11.9 11.9-11.9 31.2 0 43.1L343.6 354c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L249.4 236.6z" />
          </svg>
          <span className="text-sm font-semibold tracking-wordmark uppercase text-white">Kervo</span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-neutral-300 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#products"
            className="inline-flex items-center rounded-full bg-white text-black text-[13px] font-medium px-5 py-2.5 hover:bg-accent hover:text-white transition-colors duration-300"
          >
            Explore Products
          </a>
        </div>

        <button
          className="md:hidden text-white p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-black border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-neutral-200 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#products"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-white text-black text-sm font-medium px-5 py-3"
              >
                Explore Products
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
