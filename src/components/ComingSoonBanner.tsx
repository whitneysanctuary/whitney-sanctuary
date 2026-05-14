"use client";

import { useState } from "react";

export function ComingSoonBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-3 px-6 text-center text-navy">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] md:text-base">
        Coming Soon — Active Listing 6/1/2026 — MLS #4362179
      </span>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/70 transition-colors hover:text-navy text-xl leading-none font-light"
      >
        ✕
      </button>
    </div>
  );
}
