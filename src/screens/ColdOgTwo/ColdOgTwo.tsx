import React from "react";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection/CustomerTestimonialsSection";
import { IntroductoryHeaderSection } from "./sections/IntroductoryHeaderSection";
import { QuickLinksSection } from "./sections/QuickLinksSection";
import { SpecificationsSection } from "./sections/SpecificationsSection";

export const ColdOgTwo = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]"
      data-1-color-modes-mode="dark-mode"
      data-model-id="15710:50018"
    >
      <IntroductoryHeaderSection />
      <SpecificationsSection />
      <CustomerTestimonialsSection />
      <QuickLinksSection />
    </div>
  );
};
