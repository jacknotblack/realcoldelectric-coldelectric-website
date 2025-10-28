import React from "react";

interface FeatureCardData {
  badge: string;
  title: string;
  description: string;
}

const featuresData: FeatureCardData[] = [
  {
    badge: "15+",
    title: "研發經驗",
    description: "15年研發, 專業打造",
  },
  {
    badge: "100%",
    title: "台灣製造",
    description: "台灣裝造, 安全安心",
  },
  {
    badge: "10",
    title: "品質保證",
    description: "10年保固, 服務迅速",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex-col items-center gap-16 pt-0 pb-16 px-0 self-stretch w-full flex-[0_0_auto] z-[4] flex relative">
      <img
        className="relative self-stretch w-full h-[896px] object-cover"
        alt="Product manufacturing facility showcasing energy solutions"
        src="https://c.animaapp.com/U7V4C1eZ/img/product-pics-0221.png"
      />

      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex-col items-center justify-center gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex items-center justify-center gap-5 self-stretch w-full flex-[0_0_auto] flex-col relative">
            <div className="inline-flex gap-3 flex-col items-start relative flex-[0_0_auto]">
              <h2 className="w-fit text-[#f5f6f6] text-4xl text-center tracking-[-0.72px] leading-[44px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold">
                我們以提供高品質、專業可靠的能源解決方案為傲。
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-screen-xl items-center justify-center gap-16 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex w-[900px] items-center justify-center relative flex-[0_0_auto]">
          {featuresData.map((feature, index) => (
            <article
              key={index}
              className="flex flex-col items-center justify-center gap-4 relative flex-1 grow"
            >
              <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2.5 relative flex-[0_0_auto] bg-[#2a4540] rounded-2xl overflow-hidden">
                <div className="relative w-fit mt-[-2.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
                  {feature.badge}
                </div>
              </div>

              <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                  {feature.title}
                </h3>

                <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] text-center tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
