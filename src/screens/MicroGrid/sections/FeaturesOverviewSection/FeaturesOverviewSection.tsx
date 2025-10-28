import React from "react";

interface Feature {
  id: string;
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export const FeaturesOverviewSection = (): JSX.Element => {
  const features: Feature[] = [
    {
      id: "grid-operation",
      icon: "https://c.animaapp.com/U7V4C1eZ/img/link-broken-01.svg",
      iconAlt: "Link broken",
      title: "在電網故障期間運行",
      description: "無縫轉供至在地電源...以確保您的關鍵負載持續運行。",
    },
    {
      id: "load-balancing",
      icon: "https://c.animaapp.com/U7V4C1eZ/img/zap-1.svg",
      iconAlt: "Zap",
      title: "通過負載平衡降低能源成本",
      description:
        "自動調度在地發電、儲能和電網間的需求配置，有效避開電價高峰，並利用離峰時段的優惠費率。",
    },
    {
      id: "renewable-integration",
      icon: "https://c.animaapp.com/U7V4C1eZ/img/chart-breakout-square.svg",
      iconAlt: "Chart breakout",
      title: "整合可再生能源和電池",
      description:
        "將太陽能、風能與儲能資產整合成單一智慧控制器，以最大化自發自用並延長系統壽命。",
    },
    {
      id: "weather-resilience",
      icon: "https://c.animaapp.com/U7V4C1eZ/img/featured-icon.svg",
      iconAlt: "Featured icon",
      title: "🌪 適用於極端天氣的可靠備援",
      description:
        "我們的儲能系統（BESS）特別針對台灣多變的颱風與暴雨環境所設計，確保在惡劣天氣下仍能提供穩定電力支援，確保關鍵設施持續運作。",
    },
  ];

  return (
    <section
      className="flex flex-col items-center gap-16 px-0 py-24 relative self-stretch w-full flex-[0_0_auto] z-[6]"
      aria-labelledby="features-overview-heading"
    >
      <header className="flex-col items-start gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex max-w-screen-md items-start gap-5 w-full flex-[0_0_auto] flex-col relative">
            <div className="items-start gap-3 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                認識一下
              </p>

              <h2
                id="features-overview-heading"
                className="self-stretch text-[#dbece6] text-[length:var(--display-lg-semibold-font-size)] tracking-[var(--display-lg-semibold-letter-spacing)] leading-[var(--display-lg-semibold-line-height)] relative font-display-lg-semibold font-[number:var(--display-lg-semibold-font-weight)] [font-style:var(--display-lg-semibold-font-style)]"
              >
                什麼是微電網？
              </h2>
            </div>

            <p className="self-stretch font-normal text-[#dbece6] text-sm leading-5 relative [font-family:'Manrope',Helvetica] tracking-[0]">
              微電網是一種在地化的能源系統，可獨立或併網運作。它整合了太陽能、電池儲能、能源管理系統與智慧軟體，確保在關鍵時刻的供電無虞。
            </p>
          </div>
        </div>
      </header>

      <div className="flex-col items-start gap-16 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex items-start gap-16 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col max-w-[480px] items-start justify-center gap-8 relative flex-1 grow">
            {features.map((feature) => (
              <article
                key={feature.id}
                className="flex flex-col min-w-80 items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="relative w-12 h-12 bg-[#65885a] rounded-full overflow-hidden aspect-[1] flex items-center justify-center">
                  <img
                    className="w-6 h-6 aspect-[1]"
                    alt={feature.iconAlt}
                    src={feature.icon}
                  />
                </div>

                <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#dbece6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                    {feature.title}
                  </h3>

                  <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <img
            className="absolute top-[47px] left-[542px] w-[786px] h-[580px]"
            alt="Group"
            src="https://c.animaapp.com/U7V4C1eZ/img/group-79.png"
          />
        </div>
      </div>
    </section>
  );
};
