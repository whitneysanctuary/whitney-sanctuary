"use client";

import Image from "next/image";
import { Flame, Refrigerator, LayoutGrid } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const features = [
  {
    icon: Flame,
    title: "Wolf Dual-Fuel Range",
    desc: "Professional-grade cooking with precise convection and infrared broiling.",
  },
  {
    icon: Refrigerator,
    title: "Sub-Zero Refrigeration",
    desc: "Dual-compressor preservation for restaurant-level freshness.",
  },
  {
    icon: LayoutGrid,
    title: "Integrated Storage",
    desc: "Custom cabinetry and butler's pantry for effortless entertaining.",
  },
];

export function CulinarySection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="culinary" className="bg-linen">
      <div
        ref={ref}
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        {/* Split panel */}
        <div className="grid md:grid-cols-2">
          {/* Image panel */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px]">
            <Image
              src="/images/heritage-cabin.jpg"
              alt="The Heritage Studio — 150 sq ft reclaimed-wood cabin on the non-HOA rear lot"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Narrative panel */}
          <div className="flex flex-col justify-center px-8 py-14 md:px-16 lg:px-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              The Culinary Heart
            </p>
            <h2 className="font-heading text-3xl font-semibold text-navy md:text-4xl">
              Professional-Grade.
              <br />
              Zero Compromise.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-slate">
              The Wolf range and Sub-Zero suite transformed this kitchen from a
              room into a ritual — a place where Sunday dinner became the weekly
              anchor for a family that had spent too many years eating
              separately. Every surface, every tool, every sight-line was
              designed for the host who demands the best.
            </p>
          </div>
        </div>

        {/* Detail strip */}
        <div className="border-t border-gold/20 bg-white">
          <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-gold/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 px-8 py-8"
              >
                <f.icon className="mt-0.5 size-6 shrink-0 text-slate" strokeWidth={1.5} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
