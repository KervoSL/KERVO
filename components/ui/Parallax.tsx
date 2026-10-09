"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Subtle scroll parallax. The outer node is measured, the inner node moves,
 * so the movement never feeds back into the measurement.
 * Disabled for reduced-motion users.
 */
export default function Parallax({
  children,
  speed = 0.06,
  className = "",
}: {
  children: ReactNode;
  /** Fraction of the distance from viewport centre. Negative moves the other way. */
  speed?: number;
  className?: string;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = o.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -300 || r.top > vh + 300) return;
      const offset = r.top + r.height / 2 - vh / 2;
      i.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={outer} className={className}>
      <div ref={inner} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
