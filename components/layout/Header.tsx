"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { KMark } from "@/components/ui/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { NAV } from "@/lib/site";
import { MONEYNEST_URL } from "@/lib/products";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close after any navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll while the menu is open; close on Escape and when the
  // viewport grows past the mobile breakpoint.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-[rgba(245,246,248,0.86)] backdrop-blur-xl">
      <div className="container-x flex h-[var(--header-h)] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Kervo, home">
          <KMark size={22} />
          <span className="text-[18px] font-semibold tracking-[-0.025em]">Kervo</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`link-draw py-1 text-[15px] transition-colors duration-300 hover:text-ink ${
                isActive(item.href) ? "text-ink" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={MONEYNEST_URL} external size="sm">
            Try MoneyNest
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 h-[1.5px] w-6 bg-ink transition-all duration-500 ease-out ${
                open ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-6 bg-ink transition-all duration-500 ease-out ${
                open ? "top-[5px] -rotate-45" : "top-[10px]"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto bg-paper transition-[opacity,visibility,transform] duration-500 ease-out md:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="container-x flex min-h-full flex-col pb-10 pt-4" aria-label="Mobile">
          <ul>
            {NAV.map((item, i) => (
              <li
                key={item.href}
                className={`border-b border-line transition-all duration-500 ease-out ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="block py-5 text-[28px] font-semibold tracking-[-0.025em]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`mt-8 transition-all duration-500 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? "320ms" : "0ms" }}
          >
            <a
              href={MONEYNEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-ink px-6 py-4 text-[16px] font-medium text-white"
            >
              Try MoneyNest
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
