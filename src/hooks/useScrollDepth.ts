"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function useScrollDepth() {
  const firedRef = useRef(new Set<number>());

  useEffect(() => {
    const thresholds = [25, 50, 75, 100];

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const t of thresholds) {
        if (pct >= t && !firedRef.current.has(t)) {
          firedRef.current.add(t);

          window.dataLayer?.push({
            event: "scroll_depth",
            scroll_percentage: t,
          });

          // At 50%+, fire retargeting audience qualification event
          if (t >= 50 && !firedRef.current.has(-t)) {
            firedRef.current.add(-t);

            window.dataLayer?.push({
              event: "retarget_qualified",
              scroll_percentage: t,
              qualification: "engaged_visitor",
            });

            window.fbq?.("trackCustom", "EngagedScroll", {
              percentage: t,
            });
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
