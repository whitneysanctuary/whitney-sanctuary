"use client";

import { useEffect, useRef } from "react";

export function ParallaxHero({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches) return;

    let rafId: number;
    function onScroll() {
      rafId = requestAnimationFrame(() => {
        const el = containerRef.current?.querySelector<HTMLElement>(
          "[data-parallax-bg]"
        );
        if (!el) return;
        const y = window.scrollY * 0.3;
        el.style.transform = `translateY(${y}px)`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
