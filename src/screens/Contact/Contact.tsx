import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection";
import { FooterSection } from "./sections/FooterSection";
import { MainHeaderSection } from "./sections/MainHeaderSection";

export const Contact = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(18,33,31,0)_100%)]"
      data-1-color-modes-mode="dark-mode"
      data-model-id="15710:54308"
    >
      <ContactFormSection />
      <MainHeaderSection />
      <FooterSection />
    </div>
  );
};
