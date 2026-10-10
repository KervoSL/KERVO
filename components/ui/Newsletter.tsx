"use client";

import { useState } from "react";
import Link from "next/link";

type State = "idle" | "loading" | "done" | "error";

export default function Newsletter() {
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
      <div role="status" className="text-[16px] leading-relaxed text-ink">
        <p className="font-semibold">You are on the list.</p>
        <p className="mt-1 text-muted">We will write when there is something worth sharing.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <label htmlFor="nl-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="nl-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          aria-describedby="nl-help"
          aria-invalid={state === "error" ? true : undefined}
          className="h-12 min-w-0 flex-1 rounded-full border border-line bg-paper px-5 text-[16px] text-ink placeholder:text-[#6b7385] transition-colors focus:border-ink focus:outline-none"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="h-12 rounded-full bg-ink px-6 text-[15px] font-medium text-white transition-opacity hover:opacity-85 disabled:opacity-60"
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
      <label className="mt-4 flex items-start gap-3 text-[13px] leading-snug text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#0a0f1e]"
        />
        <span id="nl-help">
          I want to receive emails from Kervo. I can unsubscribe at any time. See the{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-ink">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <p role="alert" className="mt-3 min-h-[1.25rem] text-[14px] text-[#b42318]">
        {state === "error" ? message : ""}
      </p>
    </form>
  );
}
