import React from "react";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ProductFeaturesSection } from "./sections/ProductFeaturesSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";

export const Products = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative bg-[#12211f] overflow-hidden"
      data-1-color-modes-mode="dark-mode"
      data-model-id="16180:44042"
    >
      <HeroBannerSection />
      <ProductFeaturesSection />
      <ProductShowcaseSection />
      <OverviewSection />
      <SiteFooterSection />
    </div>
  );
};
