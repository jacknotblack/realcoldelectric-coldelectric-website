import React from "react";

interface SpecificationRow {
  label: string;
  value: string;
}

interface UseCase {
  icon: string;
  description: string;
}

const SPECIFICATIONS: SpecificationRow[] = [
  { label: "設備容量", value: "420 kWh" },
  { label: "運行容量", value: "380 kWh" },
  { label: "峰值功率", value: "200 kW" },
  { label: "電池電壓範圍", value: "1,140 – 1,288 V DC" },
  { label: "輸出電壓", value: "依賴於PCS配置" },
  { label: "循環壽命", value: "6,000次循環" },
  { label: "雙向效率", value: "> 94 %" },
  { label: "尺寸 (寬 × 深 × 高)", value: "62.6 × 56.3 × 93.1 英寸" },
  { label: "重量", value: "8,157 磅" },
  { label: "防護等級", value: "IP65（電池）/ IP54（接線）" },
  {
    label: "電池認證",
    value: "UL 2580, UL 1973, IEC 62619, CNS 62619, UN 38.3, UL 9540A",
  },
  {
    label: "ESS認證",
    value: "UL 1973, IEC 62619, CNS 62619, UN 38.3, UL 9540A（進行中）",
  },
];

const USE_CASES_LEFT: UseCase[] = [
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/upload-cloud-02@2x.png",
    description: "校園和商業備用：為數據中心、醫院或辦公園區提供無縫電力",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/git-branch-02-2@2x.png",
    description: "微電網中心：混合太陽能、柴油或風能發電以實現彈性島模式運行",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/sun-setting-02-2@2x.png",
    description: "峰值削減和需求響應：在高費率期間自動放電",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/hard-drive-2@2x.png",
    description: "虛擬電廠和電網服務：聚合容量以進行頻率調節和輔助市場",
  },
];

const USE_CASES_RIGHT: UseCase[] = [
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/stars-01-3@2x.png",
    description: "冷電EMS：基於AI的預測、負載優化和市場投標",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/link-05-2@2x.png",
    description: "PCS連接性：通過CAN/Modbus即插即用",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/file-check-02@2x.png",
    description: "SCADA/OPC-UA/IEC 61850：與公用事業控制系統集成",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/life-buoy-01@2x.png",
    description: "24/7遠程監控：雲端遙測、固件協調和實時警報",
  },
];

const PRODUCT_IMAGES: string[] = [
  "https://c.animaapp.com/U7V4C1eZ/img/scr-20250613-jg7.png",
  "https://c.animaapp.com/U7V4C1eZ/img/product-pics-02.png",
  "https://c.animaapp.com/U7V4C1eZ/img/chatgpt-image-jun-13--2025--02-36-02-pm.png",
];

export const SpecificationsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 pt-0 pb-12 px-0 relative self-stretch w-full flex-[0_0_auto] z-[2] bg-[#12211f] rounded-[24px_24px_0px_0px] overflow-hidden">
      <div className="max-w-screen-xl items-start justify-center gap-16 pt-24 pb-0 px-0 w-full flex-[0_0_auto] flex relative">
        <div className="flex-col max-w-[480px] items-start gap-8 flex-1 grow flex px-8 py-0 relative">
          <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col max-w-screen-md items-start gap-5 relative w-full flex-[0_0_auto]">
              <header className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                  規格
                </p>
                <h2 className="self-stretch text-[#fbfdfd] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  Cold OG2關鍵規格
                </h2>
              </header>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[736px] items-start relative rounded-xl overflow-hidden border border-solid border-[#263b37] shadow-shadows-shadow-xs">
          <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start relative flex-1 grow">
              <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[12] bg-[#263b37] border-b [border-bottom-style:solid]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <h3 className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                    特徵
                  </h3>
                </div>
              </div>

              {SPECIFICATIONS.map((spec, index) => (
                <div
                  key={`spec-label-${index}`}
                  className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${11 - index}] border-b [border-bottom-style:solid] border-[#2a4540]`}
                >
                  <p className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                    {spec.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start relative flex-1 grow">
              <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[12] bg-[#263b37] border-b [border-bottom-style:solid]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <h3 className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                    詳細信息
                  </h3>
                </div>
              </div>

              {SPECIFICATIONS.map((spec, index) => (
                <div
                  key={`spec-value-${index}`}
                  className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${11 - index}] border-b [border-bottom-style:solid] border-[#2a4540]`}
                >
                  <p
                    className={`relative ${index === 10 || index === 11 ? "flex-1 mt-[-1.00px]" : "w-fit"} ${index === 3 ? "[font-family:'Manrope',Helvetica] font-normal text-[#dbece6] text-sm tracking-[0] leading-5 whitespace-nowrap" : "font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] [font-style:var(--text-sm-regular-font-style)]"} ${index === 7 || index === 10 || index === 11 ? "" : "whitespace-nowrap"}`}
                  >
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col items-center justify-center gap-0.5 self-stretch flex relative w-full flex-[0_0_auto]">
        <div className="flex-col max-w-screen-xl items-center gap-16 px-0 py-12 bg-[#ffffff0a] rounded-[24px_24px_0px_0px] overflow-hidden flex relative w-full flex-[0_0_auto]">
          <div className="flex-wrap max-w-screen-xl items-start gap-[96px_96px] w-full flex-[0_0_auto] flex px-8 py-0 relative">
            <article className="flex flex-col items-start gap-5 relative flex-1 grow">
              <header className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                <h2 className="self-stretch mt-[-1.00px] text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  使用案例
                </h2>
              </header>

              <ul className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                {USE_CASES_LEFT.map((useCase, index) => (
                  <li
                    key={`use-case-left-${index}`}
                    className="flex min-w-60 max-w-[560px] items-center gap-4 relative w-full flex-[0_0_auto]"
                  >
                    <div className="relative w-12 h-12 bg-[#30554e] rounded-full overflow-hidden aspect-[1]">
                      <img
                        className="absolute top-3 left-3 w-6 h-6 aspect-[1]"
                        alt=""
                        src={useCase.icon}
                      />
                    </div>
                    <p className="relative w-[483px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#dbece6] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                      {useCase.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="flex flex-col items-start gap-5 relative flex-1 grow">
              <header className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                <h2 className="self-stretch mt-[-1.00px] text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  使用案例
                </h2>
              </header>

              <ul className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                {USE_CASES_RIGHT.map((useCase, index) => (
                  <li
                    key={`use-case-right-${index}`}
                    className="flex min-w-60 max-w-[560px] items-center gap-4 relative w-full flex-[0_0_auto]"
                  >
                    <div className="relative w-12 h-12 bg-[#30554e] rounded-full overflow-hidden aspect-[1]">
                      <img
                        className="absolute top-3 left-3 w-6 h-6 aspect-[1]"
                        alt=""
                        src={useCase.icon}
                      />
                    </div>
                    <p
                      className={`relative ${index === 3 ? "w-fit whitespace-nowrap" : "flex items-center justify-center self-stretch w-[496px] mt-[-1.00px]"} font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#dbece6] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]`}
                    >
                      {useCase.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="flex max-w-screen-xl items-center gap-0.5 w-full relative flex-[0_0_auto]">
          {PRODUCT_IMAGES.map((imageSrc, index) => (
            <img
              key={`product-image-${index}`}
              className={`relative flex-1 grow aspect-[1] ${index > 0 ? "object-cover" : ""}`}
              alt=""
              src={imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
