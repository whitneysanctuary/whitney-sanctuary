"use client";

import Image from "next/image";
import { ParallaxHero } from "./ParallaxHero";
import type { RegionKey } from "@/lib/campaigns";
import { regions } from "@/lib/campaigns";

interface HeroProps {
  onCTA: () => void;
  regionKey?: RegionKey | null;
}

export function HeroSection({ onCTA, regionKey }: HeroProps) {
  const region = regionKey ? regions[regionKey] : null;

  return (
    <ParallaxHero>
      <section
        id="tour"
        className="relative h-screen min-h-[600px] w-full overflow-hidden"
      >
        <div
          data-parallax-bg
          className="absolute inset-0 -top-20 -bottom-20"
        >
          <Image
            src="/images/hero-facade.jpg"
            alt="The Whitney Sanctuary full-brick facade illuminated at night, 7810 Stonehaven Drive Waxhaw NC"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-20 text-center text-white md:pb-24">
          {region && (
            <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
              {region.heroArbitrageTag}
            </p>
          )}

          <p className="mb-3 text-sm font-light uppercase tracking-[0.3em] text-gold">
            7810 Stonehaven Drive &middot; Waxhaw, NC 28173
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            The Whitney Sanctuary
          </h1>
          <p className="mt-2 font-heading text-xl font-normal italic text-white/80 md:text-2xl">
            Legacy Compound
          </p>

          {region ? (
            <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-white/90 md:text-lg">
              {region.heroSubheadline}
            </p>
          ) : null}

          <p className="mt-4 text-2xl font-light tracking-wide text-gold md:text-3xl">
            $2,195,000
          </p>

          <button
            onClick={onCTA}
            className="mt-8 h-12 rounded-sm bg-gold px-10 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Request Private Showing
          </button>
        </div>
      </section>
    </ParallaxHero>
  );
}
