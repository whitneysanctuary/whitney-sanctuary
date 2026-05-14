"use client";

import Image from "next/image";
import { ThermometerSun, Wind, Sun, Layers } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const features = [
  {
    icon: ThermometerSun,
    title: "Heated Marble Floors",
    desc: "Radiant warmth underfoot from the moment you wake.",
    stat: "Primary Ensuite",
  },
  {
    icon: Wind,
    title: "New HVAC System",
    desc: "One of two systems replaced 2026, high-efficiency heat pump, full manufacturer warranty.",
    stat: "Replaced 2026",
  },
  {
    icon: Sun,
    title: "Professional Remote Studio",
    desc: "250 sq. ft. sunroom overlooking the Japanese garden. Productivity meets peace.",
    stat: "250 sq. ft.",
  },
  {
    icon: Layers,
    title: "37-Window Fenestration Package",
    desc: "Every window in this home is new. MI 1655/1600 Series throughout. Laser-measured, licensed installation by West Shore Home. Grand entry fully renewed. The interior light quality is categorically different from any comparable 2002-era home in this corridor.",
    stat: "2026 — Market replacement: $85,000–$135,000",
  },
];

export function WellnessSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="wellness" className="bg-white">
      <div
        ref={ref}
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        {/* Full-width image with overlay */}
        <div className="relative aspect-[21/9] min-h-[340px] w-full">
          <Image
            src="/images/entry-maple.jpg"
            alt="Japanese maple at the entry, lit at golden hour — a signature biophilic feature"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              The Wellness Wing
            </p>
            <h2 className="max-w-xl font-heading text-3xl font-semibold leading-tight text-white md:text-5xl">
              Spa-Level Wellness.
              <br />
              Every Major System — Brand New.
            </h2>
          </div>
        </div>

        {/* Three-column feature grid */}
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-linen">
                  <f.icon className="size-6 text-slate" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {f.desc}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-gold">
                  {f.stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
