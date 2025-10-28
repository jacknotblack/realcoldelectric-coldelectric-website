import React from "react";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { ProductFeaturesSection } from "./sections/ProductFeaturesSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";

export const ColdSub = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]"
      data-1-color-modes-mode="dark-mode"
      data-model-id="15710:49019"
    >
      <HeroBannerSection />
      <ProductFeaturesSection />
      <ProductShowcaseSection />
      <SiteFooterSection />
    </div>
  );
};
