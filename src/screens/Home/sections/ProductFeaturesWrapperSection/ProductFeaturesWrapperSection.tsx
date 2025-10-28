import React from "react";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  linkText?: string;
}

export const ProductFeaturesWrapperSection = (): JSX.Element => {
  const featureCards: FeatureCard[] = [
    {
      id: 1,
      title: "地方能源獨立的微電網系統",
      description:
        "為家庭、校園和社區提供韌性、自給自足的能源網絡。即使在電網故障時也能保持在線。",
      isActive: true,
      linkText: "了解更多",
    },
    {
      id: 2,
      title: "優化負載、成本和性能的EMS平台",
      description: "控制何時儲存、使用或出售能源。降低成本並提升系統性能。",
      isActive: false,
    },
    {
      id: 3,
      title: "所有儲存系統的先進安全性",
      description:
        "採用防火的LFP電池和多層保護設計。UL9540A在電池、模組和單元級別獲得認證。",
      isActive: false,
    },
  ];

  return (
    <section className="flex-col items-center gap-16 px-0 py-24 self-stretch w-full flex-[0_0_auto] flex relative">
      <div className="flex-col items-start gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-5 self-stretch w-full flex-[0_0_auto] flex-col relative">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                使命與願景
              </p>

              <h2 className="self-stretch text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                超越能源儲存
              </h2>
            </div>

            <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <p className="flex-1 mt-[-1.00px] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                長庚國際能源
                正在建立去中心化、可持續能源未來的基礎設施，通過製造全球最安全的大型電池和創造電力互聯網。我們的平台使家庭、行業和社區能夠智能且安全地生成、儲存、管理和交易清潔能源。作為全球電池能源儲存的領導者，
              </p>

              <p className="flex-1 mt-[-1.00px] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                我們的願景是實現能源獨立和環境和諧——使每個人都能參與清潔能源生態系統。受到自然與技術的陰陽平衡啟發，我們相信創新應該服務於快速城市化和我們星球的健康。我們的使命不僅是技術上的——它是深具個人意義的，根植於對未來的承諾，讓進步與自然共存。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-wrap items-center gap-[64px_64px] flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-[560px] items-start gap-6 relative flex-1 grow">
          {featureCards.map((feature) => (
            <article
              key={feature.id}
              className={`flex flex-col items-start gap-4 pl-6 pr-0 py-4 relative self-stretch w-full flex-[0_0_auto] rounded-xl border-l-4 [border-left-style:solid] ${
                feature.isActive
                  ? "bg-[#2a4540] border-[#b8e5aa]"
                  : "border-[#2a4540]"
              }`}
            >
              <div className="flex items-center self-stretch w-full flex-col gap-1 relative flex-[0_0_auto]">
                <h3
                  className={`relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)] ${
                    feature.isActive ? "text-[#f5f6f6]" : "text-[#8bbdaf]"
                  }`}
                >
                  {feature.title}
                </h3>

                <p className="self-stretch text-[#8bbdaf] text-[length:var(--text-sm-regular-font-size)] leading-[var(--text-sm-regular-line-height)] relative font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] tracking-[var(--text-sm-regular-letter-spacing)] [font-style:var(--text-sm-regular-font-style)]">
                  {feature.description}
                </p>
              </div>

              {feature.isActive && feature.linkText && (
                <a
                  href="#"
                  className="gap-1.5 inline-flex items-center justify-center relative flex-[0_0_auto]"
                  aria-label={`${feature.linkText} - ${feature.title}`}
                >
                  <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#edf8ea] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                    {feature.linkText}
                  </span>

                  <img
                    className="relative w-5 h-5 aspect-[1]"
                    alt=""
                    src="https://c.animaapp.com/U7V4C1eZ/img/arrow-right-4.svg"
                    aria-hidden="true"
                  />
                </a>
              )}
            </article>
          ))}
        </div>

        <div
          className="relative flex-1 grow h-[560px] rounded-3xl bg-[url(https://c.animaapp.com/U7V4C1eZ/img/content.png)] bg-cover bg-[50%_50%]"
          role="img"
          aria-label="產品功能展示圖片"
        />
      </div>
    </section>
  );
};
