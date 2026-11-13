"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Sends a Vercel Analytics custom event whenever an element carrying `data-track`
 * is clicked. One delegated listener, so server components can just add the attribute.
 * The value is a short name, for example "try-moneynest:hero".
 */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      const name = el?.dataset.track;
      if (!name) return;
      const [event, place] = name.split(":");
      track(event, place ? { place } : undefined);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
