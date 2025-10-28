import React from "react";
import { BenefitsSection } from "./sections/BenefitsSection";
import { FeaturesOverviewSection } from "./sections/FeaturesOverviewSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { MainFooterSection } from "./sections/MainFooterSection";
import { MeshGradientSection } from "./sections/MeshGradientSection";
import { PerformanceMetricsSection } from "./sections/PerformanceMetricsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const MicroGrid = (): JSX.Element => {
  return (
    <main
      className="flex flex-col items-center relative overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]"
      data-1-color-modes-mode="dark-mode"
      data-model-id="15710:42073"
    >
      <HeroBannerSection />
      <FeaturesOverviewSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PerformanceMetricsSection />
      <MeshGradientSection />
      <MainFooterSection />
    </main>
  );
};
