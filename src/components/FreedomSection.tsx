"use client";

import Image from "next/image";
import {
  Trees,
  Shield,
  Fence,
  Flower2,
  House,
  Egg,
  LandPlot,
} from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const features = [
  {
    icon: Flower2,
    title: "Japanese Garden & Creek",
    desc: "Hand-laid bridge beneath mature maples. A private creek and walking paths create a biophilic sanctuary for high-stress executives.",
  },
  {
    icon: House,
    title: "150 sq ft Heritage Cabin",
    desc: "Rustic reclaimed-wood cabin with power. Guest retreat, creative studio, or private office steps from the main residence.",
  },
  {
    icon: Egg,
    title: "Chicken Coop & Small Farm",
    desc: "Sustainable living within a master-planned community. Working coop and garden beds deliver farm-to-table utility year-round.",
  },
  {
    icon: LandPlot,
    title: "Non-HOA Rear Lot",
    desc: "Parcel #06156006R — 0.784 acres of unrestricted land. Zoned via Town of Marvin, not the HOA. Total creative freedom.",
  },
];

export function FreedomSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="garden" className="bg-linen">
      <div
        ref={ref}
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        {/* Image + narrative */}
        <div className="grid md:grid-cols-2">
          {/* Narrative */}
          <div className="flex flex-col justify-center px-8 py-14 md:order-1 md:px-16 lg:px-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              The Freedom Reveal
            </p>
            <h2 className="font-heading text-3xl font-semibold text-navy md:text-4xl">
              Two Parcels. One Deed.
              <br />
              Total Autonomy.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-slate">
              The rear lot &mdash; a 0.784-acre non-HOA parcel that conveys on
              the same deed &mdash; delivers what no other property in
              Weddington Chase can offer: total lifestyle autonomy inside a
              resort-style master-planned community. Japanese walking garden.
              Private creek with a hand-laid bridge. A heritage cabin. A working
              chicken coop. This is the Freedom Premium.
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] md:order-2 md:aspect-auto md:min-h-[560px]">
            <Image
              src="/images/side-corridor.jpg"
              alt="Side yard view of the 1.26-acre compound, The Whitney Sanctuary Waxhaw NC"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Four feature callouts */}
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <f.icon
                    className="size-6 text-gold"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Side-by-side infographic */}
        <div className="mx-auto max-w-4xl px-6 pb-10">
          <h3 className="mb-10 text-center font-heading text-2xl font-semibold text-navy">
            1.26-Acre Compound vs. Standard 0.3-Acre HOA Lot
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Whitney compound */}
            <div className="rounded-lg border-2 border-gold bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Trees className="size-7 text-gold" strokeWidth={1.5} />
                <h4 className="font-heading text-lg font-semibold text-navy">
                  The Whitney Compound
                </h4>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-slate">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-gold" />
                  1.26 acres across two parcels on a single deed
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-gold" />
                  Japanese garden, private creek, heritage cabin
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-gold" />
                  Rear parcel: zero HOA restrictions (Town of Marvin zoning)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-gold" />
                  Freedom Premium: $250K&ndash;$450K in corridor value
                </li>
              </ul>
              <p className="mt-6 text-center text-2xl font-bold text-gold">
                1.26 Acres
              </p>
            </div>

            {/* Standard HOA lot */}
            <div className="rounded-lg border border-slate/20 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Fence
                  className="size-7 text-slate/50"
                  strokeWidth={1.5}
                />
                <h4 className="font-heading text-lg font-semibold text-slate">
                  Standard HOA Lot
                </h4>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-slate/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-slate/30" />
                  0.3 acres &mdash; single platted lot
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-slate/30" />
                  Standard landscaping, shared common areas
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-slate/30" />
                  Full HOA covenant restrictions
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-slate/30" />
                  No assemblage or expansion potential
                </li>
              </ul>
              <p className="mt-6 text-center text-2xl font-bold text-slate/40">
                0.3 Acres
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-5 py-2.5">
              <Shield className="size-4 text-gold" strokeWidth={2} />
              <span className="text-sm font-semibold text-navy">
                Irreplaceable &mdash; no adjacent parcel can replicate this
                configuration
              </span>
            </div>
          </div>
        </div>

        {/* Parcel disclosure */}
        <div className="border-t border-gold/15 bg-white/60 px-6 py-8">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-slate">
            Two parcels convey at closing. The rear lot (Parcel #06156006R,
            0.784 acres) sits outside the HOA. Zoned via Town of Marvin. Total
            creative freedom. Deed: Book 8351, Page 858 &mdash; both parcels,
            single transaction.
          </p>
        </div>
      </div>
    </section>
  );
}
