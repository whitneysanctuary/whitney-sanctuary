"use client";

import { FileDown, BadgeCheck } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const systems = [
  {
    system: "Architectural Roof",
    year: "2025",
    cost: "$30,000\u2013$45,000",
    impact: "Full tear-off. 20+ year life. Warranty transfers.",
  },
  {
    system: "HVAC & Heat Pump (one system)",
    year: "2026",
    cost: "$9,000\u2013$14,000",
    impact: "High-efficiency replacement. Manufacturer warranty.",
  },
  {
    system: "37-Window Fenestration Package",
    year: "2026",
    cost: "$85,000\u2013$135,000",
    impact: "Full thermal envelope renewal. West Shore Home.",
  },
  {
    system: "Grand Entry Door",
    year: "2026",
    cost: "$4,000\u2013$8,000",
    impact: "First impression renewed. Thermal seal.",
  },
  {
    system: "6-Inch Seamless Gutters",
    year: "2026",
    cost: "$10,000\u2013$15,000",
    impact: "40% greater capacity. Foundation protected.",
  },
  {
    system: "Crawlspace Vapor Barrier",
    year: "2026",
    cost: "$5,000\u2013$8,000",
    impact: "Moisture reduced. Partial encapsulation.",
  },
  {
    system: "Pool Heater + Salt Cell + LED Lights",
    year: "2026",
    cost: "$10,000\u2013$18,000",
    impact: "Complete aquatic system renewal.",
  },
  {
    system: "Plumbing Remediation",
    year: "2026",
    cost: "$4,000\u2013$8,000",
    impact: "All issues resolved. Zero liability.",
  },
  {
    system: "Electrical Remediation",
    year: "2026",
    cost: "$3,000\u2013$6,000",
    impact: "Clean inspection. Zero liability.",
  },
  {
    system: "Appliance Servicing (Wolf/Sub-Zero)",
    year: "2026",
    cost: "$2,000\u2013$4,000",
    impact: "Culinary suite fully operational.",
  },
  {
    system: "Full Landscaping Overhaul",
    year: "2026",
    cost: "$15,000\u2013$25,000",
    impact: "Complete compound transformation.",
  },
  {
    system: "Landscape Lighting",
    year: "2026",
    cost: "$8,000\u2013$15,000",
    impact: "Twilight curb appeal maximized.",
  },
  {
    system: "Touch-Up Paint (Interior+Exterior)",
    year: "2026",
    cost: "$3,000\u2013$6,000",
    impact: "Every surface refreshed.",
  },
  {
    system: "Pre-Inspection Completed",
    year: "2026",
    cost: "$10,000\u2013$20,000",
    impact: "All findings resolved. Nuclear shield.",
  },
];

export function ForensicSection({ onCTA }: { onCTA: () => void }) {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="forensic" className="bg-navy text-white">
      <div
        ref={ref}
        className={`fade-in-section ${isVisible ? "is-visible" : ""} mx-auto max-w-6xl px-6 py-20 md:py-28`}
      >
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Forensic Integrity
        </p>
        <h2 className="text-center font-heading text-3xl font-semibold text-white md:text-4xl">
          Zero-CapEx Technical Audit
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/60">
          Every major mechanical and structural system has been professionally
          renewed in 2025&ndash;2026. The depreciation clock is reset.
        </p>

        {/* Data table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-3 pr-6 text-xs font-semibold uppercase tracking-wider text-gold">
                  System
                </th>
                <th className="pb-3 pr-6 text-xs font-semibold uppercase tracking-wider text-gold">
                  Year
                </th>
                <th className="pb-3 pr-6 text-xs font-semibold uppercase tracking-wider text-gold">
                  Replacement Cost Saved
                </th>
                <th className="pb-3 text-xs font-semibold uppercase tracking-wider text-gold">
                  Strategic Impact
                </th>
              </tr>
            </thead>
            <tbody>
              {systems.map((s) => (
                <tr key={s.system} className="border-b border-white/5">
                  <td className="py-4 pr-6 font-semibold text-white">
                    {s.system}
                  </td>
                  <td className="py-4 pr-6 text-white/70">{s.year}</td>
                  <td className="py-4 pr-6 text-gold">{s.cost}</td>
                  <td className="py-4 text-white/70">{s.impact}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-gold/30">
                <td className="py-4 pr-6 font-bold text-gold">Total</td>
                <td className="py-4 pr-6" />
                <td className="py-4 pr-6 font-bold text-gold">
                  $201,000&ndash;$337,000
                </td>
                <td className="py-4 font-bold text-gold">
                  All major systems professionally renewed 2025&ndash;2026.
                  Pre-inspection certified. Zero deferred liability.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Blockquote */}
        <blockquote className="mx-auto mt-14 max-w-3xl border-l-4 border-gold pl-6 md:pl-8">
          <p className="font-heading text-lg leading-relaxed text-white/90 md:text-xl">
            &ldquo;$201,000-$337,000 in documented system renewals.
            Pre-inspection certified. Zero deferred liability.&rdquo;
          </p>
          <cite className="mt-4 block text-sm not-italic text-gold">
            &mdash; Infrastructure Integrity Certificate
          </cite>
        </blockquote>

        {/* Parcel verification badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-lg border border-gold/20 bg-white/5 px-6 py-3 backdrop-blur-sm">
            <BadgeCheck className="size-5 text-gold" strokeWidth={2} />
            <span className="text-sm font-semibold text-white/90">
              County-verified: Parcels 06156102 + 06156006R
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={onCTA}
            className="inline-flex h-12 items-center gap-2 rounded-sm bg-gold px-8 font-semibold text-navy transition-colors hover:bg-gold-dark"
          >
            <FileDown size={18} />
            Download the Full Infrastructure Report
          </button>
        </div>
      </div>
    </section>
  );
}
