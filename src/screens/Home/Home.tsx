import React from "react";
import { SiteFooterSection } from "../ColdSub/sections/SiteFooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { MainContentSection } from "./sections/MainContentSection";
import { MainContentWrapperSection } from "./sections/MainContentWrapperSection";
import { ProductFeaturesSection } from "./sections/ProductFeaturesSection";
import { ProductFeaturesWrapperSection } from "./sections/ProductFeaturesWrapperSection";

export const Home = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative bg-[#12211f] overflow-hidden"
      data-1-color-modes-mode="dark-mode"
      data-model-id="15710:39544"
    >
      <HeroBannerSection />
      <ProductFeaturesSection />
      <MainContentWrapperSection />
      <ProductFeaturesWrapperSection />
      <MainContentSection />
      <SiteFooterSection />
    </div>
  );
};
