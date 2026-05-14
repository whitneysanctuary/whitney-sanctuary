"use client";

import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { CulinarySection } from "@/components/CulinarySection";
import { WellnessSection } from "@/components/WellnessSection";
import MarketComparison from "@/components/MarketComparison";
import TaxCalculator from "@/components/TaxCalculator";
import { FreedomSection } from "@/components/FreedomSection";
import { ComingSoonGallery } from "@/components/ComingSoonGallery";
import { ForensicSection } from "@/components/ForensicSection";
import FaqSection from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { ComingSoonBanner } from "@/components/ComingSoonBanner";
import { LeadModal, type LeadSource } from "@/components/LeadModal";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { useUTM } from "@/hooks/useUTM";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<LeadSource>("showing");
  const { regionKey } = useUTM();
  useScrollDepth();

  function openModal(source: LeadSource) {
    setModalSource(source);
    setModalOpen(true);
  }

  return (
    <>
      <ComingSoonBanner />
      <main>
        <HeroSection
          onCTA={() => openModal("showing")}
          regionKey={regionKey}
        />
        <CulinarySection />
        <WellnessSection />
        <MarketComparison />
        <TaxCalculator />
        <FreedomSection />
        <ComingSoonGallery />
        <ForensicSection onCTA={() => openModal("report")} />
        <FaqSection />
      </main>

      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source={modalSource}
      />
    </>
  );
}
