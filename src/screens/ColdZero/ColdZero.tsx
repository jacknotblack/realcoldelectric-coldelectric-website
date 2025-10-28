import React from "react";
import { ProductFeaturesSection } from "../Home/sections/ProductFeaturesSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { MainFooterSection } from "./sections/MainFooterSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";

export const ColdZero = (): JSX.Element => {
  return (
    <main
      className="flex flex-col items-center relative overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]"
      data-1-color-modes-mode="dark-mode"
      data-model-id="15710:49353"
    >
      <HeroBannerSection />
      <ProductFeaturesSection />
      <ProductShowcaseSection />
      <MainFooterSection />
    </main>
  );
};
