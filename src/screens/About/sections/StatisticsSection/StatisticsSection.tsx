import React from "react";

interface CoreValue {
  icon: string;
  iconAlt: string;
  title: string;
}

interface TableRow {
  feature: string;
  description: string;
  benefit: string;
}

const coreValues: CoreValue[] = [
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/lightning-01.png",
    iconAlt: "Lightning",
    title: "能源韌性：無論挑戰如何, 始終保持電力流動。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/stars-01-1.png",
    iconAlt: "Stars",
    title: "智能優先：從電池到電網, 我們所締造的一切都是智能的。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/layout-alt-02.png",
    iconAlt: "Layout alt",
    title:
      "設計安全：確保每個層級的安全性, 從內部製造的電池單元嚴格品管, 到整個系統皆然。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/file-code-02.png",
    iconAlt: "File code",
    title: "開放合作：與社區、開發商和公用事業合作, 加速能源轉型。",
  },
];

const tableData: TableRow[] = [
  {
    feature: "再生能源配置優化",
    description: "顧問專家分析, 規劃長期綠色能 源應用與配置。",
    benefit: "確保您的綠色能源投資獲得最佳回報。",
  },
  {
    feature: "契約容量最佳化",
    description: "分析契約容量, 找到最適合的用 電費率。",
    benefit: "有效降低基本電費支出, 節省營 運成本。",
  },
  {
    feature: "儲能電池 AI調控",
    description: "智慧調控儲能, 優化儲能充放電 效益。",
    benefit: "最大化儲能系統的效率和壽命。",
  },
  {
    feature: "負載管理智慧調控",
    description: "利用 AI智慧調控儲能放電到對的場域與用電時間。",
    benefit: "在電價高峰時段, 確保關鍵負載供電與用電成本最低。",
  },
  {
    feature: "能源數據可視化",
    description: "電力可視化, 隨時掌握用電資 訊。",
    benefit: "隨時隨地即時掌握用電狀況, 實現精準管理。",
  },
  {
    feature: "整合綜合用電資訊",
    description: "主動協助企業追蹤與管理綜合用 電。",
    benefit: "提供全方位的用電分析和管理支援。",
  },
];

export const StatisticsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] z-[2] rounded-[24px_24px_0px_0px] overflow-hidden">
      <div className="flex-col items-center gap-32 px-0 py-32 flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-wrap max-w-screen-xl items-start gap-[96px_96px] px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex items-start gap-5 flex-1 grow flex-col relative">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="self-stretch text-[#f5f6f6] text-5xl tracking-[-0.96px] leading-[60px] relative mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold">
                我們的核心承諾
              </h2>
              <p className="self-stretch font-[number:var(--text-xl-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                <span className="font-[number:var(--text-xl-regular-font-weight)] font-text-xl-regular [font-style:var(--text-xl-regular-font-style)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] text-[length:var(--text-xl-regular-font-size)]">
                  我們的使命
                </span>
                <span className="font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]">
                  ：賦能全球隨時隨地生成、儲存和交易清潔能源。
                </span>
              </p>
            </div>
          </div>

          <div className="flex-col items-start gap-12 flex-1 grow flex relative">
            <h3 className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
              核心價值觀
            </h3>

            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex min-w-60 max-w-[560px] items-center gap-4 relative w-full flex-[0_0_auto]"
              >
                <div className="relative w-12 h-12 rounded-full aspect-[1] bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)]">
                  <div className="flex w-10 h-10 items-center justify-center relative top-[calc(50.00%_-_20px)] left-[calc(50.00%_-_20px)] rounded-full overflow-hidden shadow-[0px_1px_2px_transparent,0px_3px_3px_transparent,1px_8px_5px_transparent,inset_0px_-2px_2px_transparent]">
                    <img
                      className="relative w-6 h-6 aspect-[1]"
                      alt={value.iconAlt}
                      src={value.icon}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-[496px] items-start gap-1 relative self-stretch">
                  <p className="relative w-[483px] mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                    {value.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col max-w-screen-xl items-start gap-6 px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="self-stretch text-[#f5f6f6] text-5xl tracking-[-0.96px] leading-[60px] relative mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold">
                智能解決方案：長庚國際能源智能電池
              </h2>
            </div>

            <h3 className="self-stretch font-[number:var(--display-sm-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-sm-semibold-font-size)] leading-[var(--display-sm-semibold-line-height)] relative font-display-sm-semibold tracking-[var(--display-sm-semibold-letter-spacing)] [font-style:var(--display-sm-semibold-font-style)]">
              解決方案概述
            </h3>

            <p className="self-stretch font-[number:var(--text-xl-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
              我們提供軟硬體整合,
              為企業、工廠、辦公大樓、學校、農場、社區等部署儲能設備, 提供一站
              式能源顧問方案, 滿足不同類型用戶的戶級能源管理需求。
            </p>
          </div>

          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] rounded-xl overflow-hidden border border-solid border-[#263b37] shadow-shadows-shadow-xs">
            <div className="items-start self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="flex w-[266px] items-start flex-col relative">
                <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[6] bg-[#263b37] border-b [border-bottom-style:solid]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <h4 className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                      智能功能
                    </h4>
                  </div>
                </div>

                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${
                      5 - index
                    }] border-b [border-bottom-style:solid] border-[#2a4540]`}
                  >
                    <p className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                      {row.feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-start flex-1 grow flex-col relative">
                <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[6] bg-[#263b37] border-b [border-bottom-style:solid]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <h4 className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                      說明
                    </h4>
                  </div>
                </div>

                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${
                      5 - index
                    }] border-b [border-bottom-style:solid] border-[#2a4540]`}
                  >
                    <p className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                      {row.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-start flex-1 grow flex-col relative">
                <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[6] bg-[#263b37] border-b [border-bottom-style:solid]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <h4 className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                      客戶效益
                    </h4>
                  </div>
                </div>

                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${
                      5 - index
                    }] border-b [border-bottom-style:solid] border-[#2a4540]`}
                  >
                    <p className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                      {row.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap max-w-screen-xl items-start gap-[96px_96px] px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex items-start gap-3 flex-1 grow flex-col relative">
            <div className="flex-col items-start pt-3 pb-0 px-0 self-stretch w-full flex-[0_0_auto] flex relative">
              <p className="self-stretch mt-[-1.00px] font-[number:var(--display-sm-semibold-font-weight)] text-[#47cd89] text-[length:var(--display-sm-semibold-font-size)] text-center leading-[var(--display-sm-semibold-line-height)] relative font-display-sm-semibold tracking-[var(--display-sm-semibold-letter-spacing)] [font-style:var(--display-sm-semibold-font-style)]">
                透過先進的儲能與節能技術規劃,
                我們將最終電力消耗降為零作為長遠目標。我們致力於使能源系統更智能、更靈活和更具韌性。我們的技術獨立運行,
                為下一代提供一個更清潔、更高效的能源格局。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative flex-1 grow"
          alt="Container"
          src="https://c.animaapp.com/U7V4C1eZ/img/container-2.svg"
        />
      </div>
    </section>
  );
};
