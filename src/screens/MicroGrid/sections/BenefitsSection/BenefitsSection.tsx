import React from "react";

interface BenefitItem {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

const benefitItems: BenefitItem[] = [
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/building-07-4.png",
    iconAlt: "Building",
    title: "為住宅、商業和工業用途提供設計支持",
    description: "客製化系統架構確保在不同場域及負載條件下的最佳性能。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/layout-alt-01.svg",
    iconAlt: "Layout alt",
    title: "模組化部署 (從小處著手，彈性擴展)",
    description:
      "即插即用的組件讓您可以從今天所需的開始，隨著業務增長無縫接軌擴充。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/stars-01-2.svg",
    iconAlt: "Stars",
    title: "長庚國際能源能源管理系統",
    description:
      "我們的能源管理系統持續預測用電需求並優化資源調度，以達到最佳效率。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/clock-refresh.svg",
    iconAlt: "Clock refresh",
    title: "實時可見性和性能調整",
    description:
      "即時可視化與效能調校：互動式儀表板呈現即時數據與警示，讓您能精準調校設備，達成最長運行時間。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/inbox-02.svg",
    iconAlt: "Inbox",
    title: "完整的軟硬體堆疊解決方案...確保卓越可靠性。",
    description:
      "端到端解決方案結合了最佳的逆變器、電池、傳感器和雲端協調，確保穩固的可靠性。",
  },
];

export const BenefitsSection = (): JSX.Element => {
  return (
    <section
      className="z-[4] bg-[#498376] rounded-[24px_24px_0px_0px] overflow-hidden flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
      aria-labelledby="benefits-heading"
    >
      <div className="flex-col items-center gap-16 px-0 py-24 bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(19,22,27,1)_100%)] flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-wrap items-start gap-[96px_96px] flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
          <header className="flex items-start gap-5 flex-1 grow flex-col relative">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                知道怎麼做嗎？
              </p>

              <h2
                id="benefits-heading"
                className="self-stretch text-[#f5f6f6] text-5xl tracking-[-0.96px] leading-[60px] relative [font-family:'Manrope',Helvetica] font-semibold"
              >
                長庚國際能源 如何建設微電網
              </h2>
            </div>

            <p className="self-stretch font-normal text-[#b7d8cd] text-xl leading-[30px] relative [font-family:'Manrope',Helvetica] tracking-[0]">
              從概念規劃到穩定運營，我們提供高韌性、可擴充、智慧化的能源系統。
            </p>
          </header>

          <div className="flex flex-col items-start gap-12 relative flex-1 grow">
            {benefitItems.map((benefit, index) => (
              <article
                key={index}
                className="min-w-60 max-w-[560px] w-full flex-[0_0_auto] flex items-start gap-4 relative"
              >
                <div className="rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] relative w-12 h-12 aspect-[1]">
                  <div className="flex w-10 h-10 items-center justify-center relative top-[calc(50.00%_-_20px)] left-[calc(50.00%_-_20px)] rounded-full overflow-hidden shadow-[0px_1px_2px_transparent,0px_3px_3px_transparent,1px_8px_5px_transparent,inset_0px_-2px_2px_transparent]">
                    <img
                      className="relative w-6 h-6 aspect-[1]"
                      alt={benefit.iconAlt}
                      src={benefit.icon}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="flex items-start pt-2.5 pb-0 px-0 self-stretch w-full flex-col gap-1 relative flex-[0_0_auto]">
                    <h3 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                      {benefit.title}
                    </h3>

                    <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#b7d8cd] text-base tracking-[0] leading-6">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <img
          className="absolute top-[400px] left-0 w-[686px] h-[386px] object-cover"
          alt="Chatgpt image may"
          src="https://c.animaapp.com/U7V4C1eZ/img/chatgpt-image-may-20-2025-cold-electric--1--copy.png"
        />
      </div>
    </section>
  );
};
