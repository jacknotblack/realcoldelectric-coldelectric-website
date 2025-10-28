import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { StatisticsSection } from "./sections/StatisticsSection";
import { TimelineSection } from "./sections/TimelineSection";

export const About = () => {
  return (
    <div
      className="flex flex-col items-center relative overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(18,33,31,0)_100%)]"
      data-1-color-modes-mode="dark-mode"
      data-model-id="15710:53969"
    >
      <HeaderSection />
      <MainContentSection />
      <FeaturesSection />
      <div className="items-start justify-center z-[3] flex relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-[1280px]"
          alt="Container"
          src="https://c.animaapp.com/U7V4C1eZ/img/container-1.svg"
        />
      </div>
      <StatisticsSection />
      <TimelineSection />
      <FooterSection />
    </div>
  );
};
