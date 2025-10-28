import React from "react";

interface SpecificationRow {
  label: string;
  c2100a: string;
  c2100b: string;
  c1400a: string;
}

interface UseCase {
  icon: string;
  description: string;
}

interface SystemIntegration {
  icon: string;
  description: string;
}

const specificationRows: SpecificationRow[] = [
  {
    label: "設備容量",
    c2100a: "2,104 kWh",
    c2100b: "2,104 kWh",
    c1400a: "1,400 kWh",
  },
  {
    label: "運行容量",
    c2100a: "1,800 kWh",
    c2100b: "1,750 kWh",
    c1400a: "1,200 kWh",
  },
  {
    label: "峰值功率",
    c2100a: "500 kW",
    c2100b: "1,000 kW",
    c1400a: "500 kW",
  },
  {
    label: "電池電壓範圍",
    c2100a: "600–876 V DC",
    c2100b: "600–876 V DC",
    c1400a: "600–876 V DC",
  },
  {
    label: "輸出電壓",
    c2100a: "380V AC",
    c2100b: "380V AC",
    c1400a: ">95%",
  },
  {
    label: "頻率",
    c2100a: "50–60 Hz",
    c2100b: "50–60 Hz",
    c1400a: "50–60 Hz",
  },
  {
    label: "循環壽命",
    c2100a: "≥ 6,000 次循環",
    c2100b: "≥ 6,000 次循環",
    c1400a: "≥ 6,000 次循環",
  },
  {
    label: "往返效率",
    c2100a: "> 94 % (DC→DC)",
    c2100b: "> 94 % (DC→DC)",
    c1400a: "> 94 % (DC→DC)",
  },
  {
    label: "防護等級",
    c2100a: "IP65 (電池) / IP55 (接線)",
    c2100b: "IP65 (電池) / IP55 (接線)",
    c1400a: "IP65 (電池) / IP55 (接線)",
  },
  {
    label: "認證",
    c2100a:
      "UL 9540A, UL 2580, UL 1973, IEC 62619, CNS 62619, UN 38.3, IEC 60730-1",
    c2100b: "",
    c1400a: "",
  },
  {
    label: "尺寸 (寬 × 深 × 高)",
    c2100a: "W 269.7 × D 95.7 × H 115.4 英寸",
    c2100b: "W 269.7 × D 95.7 × H 115.4 英寸",
    c1400a: "W 238.2 × D 95.7 × H 115.4 英寸",
  },
  {
    label: "重量",
    c2100a: "60,000 磅",
    c2100b: "60,000 磅",
    c1400a: "50,000 磅",
  },
  {
    label: "製造地",
    c2100a: "台灣",
    c2100b: "台灣",
    c1400a: "台灣",
  },
];

const useCases: UseCase[] = [
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/info-hexagon-1@2x.png",
    description: "在高峰價格窗口期間通過放電來減少電網壓力。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/git-branch-02-2@2x.png",
    description: "為偏遠社區、電信站或島嶼度假村提供交鑰匙自主解決方案。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/sun-setting-02-2@2x.png",
    description: "數據中心、醫院和工業廠房的無縫故障轉移。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/hard-drive-2@2x.png",
    description: "參與頻率調節、容量拍賣和批發市場。",
  },
];

const systemIntegrations: SystemIntegration[] = [
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/link-05-2@2x.png",
    description: "設計用於直接連接到您的變電站或變壓器。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/home-smile-5@2x.png",
    description: "可配置的電力轉換設置、保護繼電器和安全互鎖。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/users-01-1@2x.png",
    description: "支持Modbus RTU/TCP、OPC-UA和IEC 61850以實現實時控制。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/wifi-1@2x.png",
    description: "通過長庚國際能源 EMS提供實時儀表板、自動警報和空中固件編排。",
  },
];

const productImages: string[] = [
  "https://c.animaapp.com/U7V4C1eZ/img/sub-2.png",
  "https://c.animaapp.com/U7V4C1eZ/img/product-pics-02-1.png",
  "https://c.animaapp.com/U7V4C1eZ/img/cold-sub3-1.png",
];

export const ProductFeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 pt-0 pb-12 px-0 relative self-stretch w-full flex-[0_0_auto] z-[2] bg-[#12211f] rounded-[24px_24px_0px_0px] overflow-hidden">
      <div className="flex-col max-w-screen-xl items-center gap-16 pt-24 pb-0 px-0 w-full flex-[0_0_auto] flex relative">
        <header className="flex-col items-start gap-8 self-stretch flex px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex items-end gap-12 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col max-w-screen-md items-start gap-5 relative flex-1 grow">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                  規格
                </p>
                <h2 className="self-stretch text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  Cold OG 主要規格
                </h2>
              </div>
            </div>
            <p className="flex-1 text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
              針對您的電網規模或離網部署，提供容量、功率評級、效率、安全認證和尺寸數據的完整技術分析。
            </p>
          </div>
        </header>

        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] rounded-xl overflow-hidden border border-solid border-[#263b37] shadow-shadows-shadow-xs">
          <table className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <thead className="w-[266px] flex flex-col items-start relative">
              <tr className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[13] bg-[#263b37] border-b [border-bottom-style:solid]">
                <th className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                    特徵
                  </span>
                </th>
              </tr>
              {specificationRows.map((row, index) => (
                <tr
                  key={index}
                  className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${12 - index}] border-b [border-bottom-style:solid] border-[#2a4540]`}
                >
                  <th className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                    {row.label}
                  </th>
                </tr>
              ))}
            </thead>

            <tbody className="flex-1 grow flex flex-col items-start relative">
              <tr className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[13] bg-[#263b37] border-b [border-bottom-style:solid]">
                <td className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                    C2100A
                  </span>
                </td>
              </tr>
              {specificationRows.map((row, index) => (
                <tr
                  key={index}
                  className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${12 - index}] border-b [border-bottom-style:solid] border-[#2a4540]`}
                >
                  <td
                    className={`relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] ${row.c2100a.length > 50 ? "" : "whitespace-nowrap"} [font-style:var(--text-sm-regular-font-style)]`}
                  >
                    {row.c2100a}
                  </td>
                </tr>
              ))}
            </tbody>

            <tbody className="flex-1 grow flex flex-col items-start relative">
              <tr className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[13] bg-[#263b37] border-b [border-bottom-style:solid]">
                <td className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                    C2100B
                  </span>
                </td>
              </tr>
              {specificationRows.map((row, index) => (
                <tr
                  key={index}
                  className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${12 - index}] border-b [border-bottom-style:solid] border-[#2a4540]`}
                >
                  <td
                    className={`relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)] ${row.c2100b === "" ? "opacity-0" : ""}`}
                  >
                    {row.c2100b || "120V/240V 分相"}
                  </td>
                </tr>
              ))}
            </tbody>

            <tbody className="flex-1 grow flex flex-col items-start relative">
              <tr className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[13] bg-[#263b37] border-b [border-bottom-style:solid]">
                <td className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                    C1400A
                  </span>
                </td>
              </tr>
              {specificationRows.map((row, index) => (
                <tr
                  key={index}
                  className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${12 - index}] border-b [border-bottom-style:solid] border-[#2a4540]`}
                >
                  <td
                    className={`relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)] ${row.c1400a === "" ? "opacity-0" : ""}`}
                  >
                    {row.c1400a || "120V/240V 分相"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex-col items-center justify-center gap-0.5 self-stretch flex relative w-full flex-[0_0_auto]">
        <div className="flex-col max-w-screen-xl items-center gap-16 px-0 py-12 bg-[#ffffff0a] rounded-[24px_24px_0px_0px] overflow-hidden flex relative w-full flex-[0_0_auto]">
          <div className="flex-wrap max-w-screen-xl items-start gap-[96px_96px] flex px-8 py-0 relative w-full flex-[0_0_auto]">
            <article className="flex flex-col items-start gap-5 relative flex-1 grow">
              <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                <h3 className="self-stretch mt-[-1.00px] text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  使用案例
                </h3>
              </div>
              <ul className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                {useCases.map((useCase, index) => (
                  <li
                    key={index}
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
              <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                <h3 className="self-stretch mt-[-1.00px] text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  系統整合
                </h3>
              </div>
              <ul className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                {systemIntegrations.map((integration, index) => (
                  <li
                    key={index}
                    className="flex min-w-60 max-w-[560px] items-center gap-4 relative w-full flex-[0_0_auto]"
                  >
                    <div className="relative w-12 h-12 bg-[#30554e] rounded-full overflow-hidden aspect-[1]">
                      <img
                        className="absolute top-3 left-3 w-6 h-6 aspect-[1]"
                        alt=""
                        src={integration.icon}
                      />
                    </div>
                    <p
                      className={`relative ${index === 0 ? "flex items-center justify-center self-stretch w-[496px] mt-[-1.00px]" : "w-fit whitespace-nowrap"} font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#dbece6] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]`}
                    >
                      {integration.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="flex max-w-screen-xl items-center gap-0.5 w-full relative flex-[0_0_auto]">
          {productImages.map((image, index) => (
            <img
              key={index}
              className={`relative flex-1 grow aspect-[1] ${index > 0 ? "object-cover" : ""}`}
              alt=""
              src={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
