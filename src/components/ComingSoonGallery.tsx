"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

const galleryImages = [
  { src: "/images/hero-facade.jpg", alt: "The Whitney Sanctuary full-brick facade illuminated at night" },
  { src: "/images/hero-angle.jpg", alt: "The Whitney Sanctuary angled night view" },
  { src: "/images/hero-driveway.jpg", alt: "Driveway approach to The Whitney Sanctuary at night" },
  { src: "/images/heritage-cabin.jpg", alt: "The Heritage Studio — 150 sq ft reclaimed-wood cabin" },
  { src: "/images/entry-maple.jpg", alt: "Japanese maple at the entry, lit at golden hour" },
  { src: "/images/entry-bed.jpg", alt: "Landscape bed and uplighting at the front entry" },
  { src: "/images/side-path.jpg", alt: "Flagstone path along the side of the residence" },
  { src: "/images/rear-steps.jpg", alt: "Rear garden steps with specimen tree uplighting" },
  { src: "/images/uplight-tree.jpg", alt: "Multi-stem tree dramatically uplighted at night" },
  { src: "/images/rear-maple.jpg", alt: "Rear Japanese maple illuminated against the night sky" },
  { src: "/images/side-corridor.jpg", alt: "Side yard corridor lit by path lights" },
  { src: "/images/play-area.jpg", alt: "Children's play area with shade sail and path lighting" },
];

export function ComingSoonGallery() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="bg-linen">
      <div
        ref={ref}
        className={`fade-in-section ${isVisible ? "is-visible" : ""} mx-auto max-w-6xl px-6 py-16 md:py-20`}
      >
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Full Professional Photography &mdash; Coming Soon
        </p>
        <p className="mx-auto mb-10 max-w-xl text-center text-sm leading-relaxed text-slate">
          All images shown are iPhone captures of the landscape lighting
          installation. A complete professional photo and video shoot is
          scheduled.
        </p>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="shrink-0 snap-start"
              style={{ width: "min(400px, 80vw)" }}
            >
              <div className="overflow-hidden rounded-lg" style={{ border: "1px solid #C4A35A" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={533}
                  className="object-cover"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
