import React from "react";

interface SpecificationRow {
  label: string;
  h25: string;
  h40: string;
}

interface UseCase {
  icon: string;
  alt: string;
  text: string;
}

interface SystemIntegration {
  icon: string;
  alt: string;
  text: string;
}

interface ProductImage {
  src: string;
  alt: string;
}

export const ProductFeaturesSection = (): JSX.Element => {
  const specifications: SpecificationRow[] = [
    { label: "額定容量", h25: "25.7 kWh", h40: "41.5 kWh" },
    { label: "可用容量", h25: "25 kWh", h40: "40 kWh" },
    { label: "額定輸出功率", h25: "10 kW", h40: "10 kW" },
    { label: "內部電池電壓", h25: "48 – 54.4 V dc", h40: "48 – 54.4 V dc" },
    { label: "往返效率", h25: "> 94 %", h40: "> 94 %" },
    {
      label: "功率因數",
      h25: "0.8 領先 ~ 0.8 落後",
      h40: "0.8 領先 ~ 0.8 落後",
    },
    {
      label: "尺寸 (寬×高×深)",
      h25: "寬 48.8 × 深 29.9 × 高 45.4 英寸",
      h40: "寬 48.8 x 深 29.9 x 高 59.1 英寸",
    },
    { label: "電池模組防護等級", h25: "IP65", h40: "IP65" },
    { label: "其他組件保護", h25: "IP54", h40: "IP54" },
    {
      label: "交流輸出規格",
      h25: "120 V / 240 V 分相",
      h40: "120 V / 240 V 分相",
    },
    { label: "頻率", h25: "50Hz / 60Hz", h40: "50Hz / 60Hz" },
  ];

  const useCases: UseCase[] = [
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/home-03.png",
      alt: "Home",
      text: "家用太陽能儲能",
    },
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/building-07-9.png",
      alt: "Building",
      text: "家用及小型商用備用電源",
    },
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/sun-setting-02-3.png",
      alt: "Sun setting",
      text: "無縫整合至屋頂太陽能或混合型系統中",
    },
  ];

  const systemIntegrations: SystemIntegration[] = [
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/line-chart-down-05.png",
      alt: "Line chart down",
      text: "與冷電EMS整合，進行負載優化與能源監控",
    },
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/currency-dollar-circle.png",
      alt: "Currency dollar",
      text: "虛擬電廠就緒：在地或批發市場進行餘電交易",
    },
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/cloud-03.png",
      alt: "Cloud",
      text: "透過雲端控制，進行遠端診斷與智慧調度",
    },
  ];

  const productImages: ProductImage[] = [
    {
      src: "https://c.animaapp.com/U7V4C1eZ/img/sub-3@2x.png",
      alt: "Sub",
    },
    {
      src: "https://c.animaapp.com/U7V4C1eZ/img/cold2-1@2x.png",
      alt: "Cold",
    },
    {
      src: "https://c.animaapp.com/U7V4C1eZ/img/cold-sub3-2@2x.png",
      alt: "Cold",
    },
  ];

  return (
    <section className="flex-col items-center justify-center gap-16 pt-0 pb-12 px-0 self-stretch w-full flex-[0_0_auto] z-[2] bg-[#12211f] rounded-[24px_24px_0px_0px] overflow-hidden flex relative">
      <div className="max-w-screen-xl items-start justify-center gap-16 pt-24 pb-0 px-0 w-full flex-[0_0_auto] flex relative">
        <div className="flex-col max-w-[480px] items-start gap-8 flex-1 grow flex px-8 py-0 relative">
          <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col max-w-screen-md items-start gap-5 relative w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                  規格
                </div>
                <h2 className="self-stretch text-[#fbfdfd] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  Cold SUB - 家用儲能系統
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start relative flex-1 grow rounded-xl overflow-hidden border border-solid border-[#263b37] shadow-shadows-shadow-xs">
          <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-[0_0_auto] flex-col items-start relative">
              <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[11] bg-[#263b37] border-b [border-bottom-style:solid]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                    特徵
                  </div>
                </div>
              </div>
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex h-[72px] items-center px-6 py-4 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#263b37]"
                  style={{ zIndex: 10 - index }}
                >
                  <div className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-1 grow flex-col items-start relative">
              <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[11] bg-[#263b37] border-b [border-bottom-style:solid]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                    H25
                  </div>
                </div>
              </div>
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex h-[72px] items-center px-6 py-4 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#263b37]"
                  style={{ zIndex: 10 - index }}
                >
                  <div className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                    {spec.h25}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-1 grow flex-col items-start relative">
              <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[11] bg-[#263b37] border-b [border-bottom-style:solid]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                    H40
                  </div>
                </div>
              </div>
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex h-[72px] items-center px-6 py-4 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#263b37]"
                  style={{ zIndex: 10 - index }}
                >
                  <div className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                    {spec.h40}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col items-center justify-center gap-0.5 self-stretch flex relative w-full flex-[0_0_auto]">
        <div className="flex-col max-w-screen-xl items-center gap-16 px-0 py-12 bg-[#ffffff0a] rounded-[24px_24px_0px_0px] overflow-hidden flex relative w-full flex-[0_0_auto]">
          <div className="flex-wrap max-w-screen-xl items-start gap-[160px_160px] w-full flex-[0_0_auto] flex px-8 py-0 relative">
            <div className="flex flex-col items-start gap-5 relative flex-1 grow">
              <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                <h3 className="self-stretch mt-[-1.00px] text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  使用案例
                </h3>
              </div>
              <ul className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                {useCases.map((useCase, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div className="relative w-12 h-12 bg-[#30554e] rounded-full overflow-hidden aspect-[1]">
                      <img
                        className="absolute top-3 left-3 w-6 h-6 aspect-[1]"
                        alt={useCase.alt}
                        src={useCase.icon}
                      />
                    </div>
                    <div className="relative flex-1 font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#dbece6] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                      {useCase.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-5 relative flex-1 grow">
              <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                <h3 className="self-stretch mt-[-1.00px] text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  系統整合
                </h3>
              </div>
              <ul className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                {systemIntegrations.map((integration, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div className="relative w-12 h-12 bg-[#30554e] rounded-full overflow-hidden aspect-[1]">
                      <img
                        className="absolute top-3 left-3 w-6 h-6 aspect-[1]"
                        alt={integration.alt}
                        src={integration.icon}
                      />
                    </div>
                    <div className="relative flex-1 font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#dbece6] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                      {integration.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex max-w-screen-xl items-center gap-0.5 w-full relative flex-[0_0_auto]">
          {productImages.map((image, index) => (
            <img
              key={index}
              className="relative flex-1 grow aspect-[1] object-cover"
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
