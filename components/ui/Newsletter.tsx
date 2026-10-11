"use client";

import { useState } from "react";
import Link from "next/link";

type State = "idle" | "loading" | "done" | "error";

export default function Newsletter({
  list = "website",
  idPrefix = "nl",
  tone = "light",
}: {
  list?: "website" | "moneynest" | "tradevault";
  idPrefix?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;
    const form = new FormData(e.currentTarget);
    setState("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          company: form.get("company"),
          consent: form.get("consent") === "on",
          list,
        }),
      });
      if (res.ok) {
        setState("done");
        return;
      }
      const { error } = await res.json().catch(() => ({ error: "" }));
      setState("error");
      setMessage(
        error === "invalid_email"
          ? "Enter a valid email address, like name@example.com."
          : error === "consent_required"
            ? "Tick the box to confirm you want to receive our emails."
            : error === "not_configured"
              ? "Subscriptions are not open yet. Please check back soon."
              : "We could not sign you up. Try again in a moment.",
      );
    } catch {
      setState("error");
      setMessage("No connection. Check your network and try again.");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className={`text-[16px] leading-relaxed ${dark ? "text-white" : "text-ink"}`}>
        <p className="font-semibold">You are on the list.</p>
        <p className={`mt-1 ${dark ? "text-white/70" : "text-muted"}`}>We will write when there is something worth sharing.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <label htmlFor={`${idPrefix}-email`} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          aria-describedby={`${idPrefix}-help`}
          aria-invalid={state === "error" ? true : undefined}
          className={`h-12 min-w-0 rounded-full border px-5 text-[16px] transition-colors focus:outline-none sm:flex-1 ${dark ? "border-white/20 bg-white/5 text-white placeholder:text-white/55 focus:border-white/60" : "border-line bg-paper text-ink placeholder:text-[#6b7385] focus:border-ink"}`}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className={`h-12 rounded-full px-6 text-[15px] font-medium transition-opacity hover:opacity-85 disabled:opacity-60 ${dark ? "bg-mint text-[#04120e]" : "bg-ink text-white"}`}
        >
          {state === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      <input
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <label className={`mt-4 flex items-start gap-3 text-[13px] leading-snug ${dark ? "text-white/70" : "text-muted"}`}>
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#0a0f1e]"
        />
        <span id={`${idPrefix}-help`}>
          I want to receive emails from Kervo. I can unsubscribe at any time. See the{" "}
          <Link href="/privacy" className={`underline underline-offset-2 ${dark ? "hover:text-white" : "hover:text-ink"}`}>
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <p role="alert" className={`mt-3 min-h-[1.25rem] text-[14px] ${dark ? "text-[#ff9b8f]" : "text-[#b42318]"}`}>
        {state === "error" ? message : ""}
      </p>
    </form>
  );
}
