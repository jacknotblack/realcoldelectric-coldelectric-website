import React from "react";

interface FeatureSection {
  title: string;
  subtitle?: string;
  description: string | string[];
  image: string;
  imagePosition: "left" | "right";
  imageWidth: string;
  imageHeight: string;
}

export const ProductFeaturesSection = (): JSX.Element => {
  const featureSections: FeatureSection[] = [
    {
      title: "安全與技術",
      subtitle: "業界領先的安全標準",
      description:
        "我們不只符合安全標準—我們重新定義了它。經UL 實驗室技術人員3次重複測試, 每一次都通過零著火的 嚴格考驗, 為您的投資提供無與倫比的安全保障。",
      image: "https://c.animaapp.com/U7V4C1eZ/img/image-2@2x.png",
      imagePosition: "right",
      imageWidth: "305.66px",
      imageHeight: "278.86px",
    },
    {
      title: "實證卓越的安全性能",
      description: [
        "穿刺測試：COLD 電池在帶電狀態下被刺穿時不會冒煙或爆炸, 讓您遠離典型 LFP 電池在受損時立即冒白 煙或著火的風險。",
        "極端高溫測試：即使在極端環境下, 模組依然保持結構完整, 無塌陷、破裂或火焰爆炸—而傳統 LFP外 殼會因高熱破裂並起火。",
        "熱失控測試：業界最高安全標準：無火災、無爆炸, 10分鐘內僅產生少量白煙, 溫度始終控制在100°C 以下。相比之下, 典型 LFP 會達到 600°C 高溫並持續燃燒超過 2小時。",
      ],
      image: "https://c.animaapp.com/U7V4C1eZ/img/image-2-1@2x.png",
      imagePosition: "left",
      imageWidth: "374.27px",
      imageHeight: "278.86px",
    },
    {
      title: "突破性專利技術",
      description: [
        "我們的專利電芯配方從根本上消除了傳統電池的安全隱患。透過創新的阻燃劑配方及軟包設計, 為您帶來：",
        "更強的熱失控抑制能力, 有效防止火災蔓延, 保護您的資產",
        "智能彈性設計, 讓電芯在充放電時安全膨脹收縮, 大幅降低隔離膜破裂風險",
        "優化的散熱效能, 延長電池使用壽命並提升整體可靠性",
        "我們的聚合鋁箔軟包電池設計擁有業界領先的大面積散熱系統, 散熱效率遠超傳統圓柱形或方形硬殼電池, 並 可全方位釋放壓力, 確保長期穩定運行。",
      ],
      image: "https://c.animaapp.com/U7V4C1eZ/img/image-2-2@2x.png",
      imagePosition: "right",
      imageWidth: "344.18px",
      imageHeight: "314px",
    },
  ];

  const certificationSection = {
    title: "國際權威認證",
    description:
      "作為唯一一家將產品送至美國芝加哥 UL 實驗室進行嚴格測試的公司, 我們與全球頂尖專家合作, 成功取得 UL9540A 認證——這是對我們產品安全性和可靠性的最高肯定。",
  };

  return (
    <section className="flex-col items-start self-stretch w-full flex-[0_0_auto] bg-[#498376] flex relative">
      <div className="flex-col items-center gap-40 pt-24 pb-0 px-0 self-stretch bg-[linear-gradient(180deg,rgba(18,33,31,1)_80%,rgba(38,59,55,1)_100%)] flex relative w-full flex-[0_0_auto]">
        {featureSections.map((section, index) => (
          <article
            key={index}
            className="items-start justify-between flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]"
          >
            {section.imagePosition === "left" && (
              <img
                className="relative object-cover"
                style={{
                  width: section.imageWidth,
                  height: section.imageHeight,
                }}
                alt={section.title}
                src={section.image}
              />
            )}

            <div
              className={`flex items-start gap-5 flex-col relative ${
                section.imagePosition === "left"
                  ? "w-[770px] mr-[-24.27px]"
                  : "w-[707.77px]"
              }`}
            >
              <header className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                {index === 0 && (
                  <h1 className="mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-xl-semibold-font-size)] tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] relative self-stretch font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] [font-style:var(--display-xl-semibold-font-style)]">
                    安全與技術
                  </h1>
                )}

                <h2 className="mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative self-stretch font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  {section.subtitle || section.title}
                </h2>
              </header>

              {Array.isArray(section.description) ? (
                section.description.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="relative self-stretch font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="relative self-stretch font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]">
                  {section.description}
                </p>
              )}
            </div>

            {section.imagePosition === "right" && (
              <img
                className="relative object-cover"
                style={{
                  width: section.imageWidth,
                  height: section.imageHeight,
                  aspectRatio: "1.1",
                }}
                alt={section.title}
                src={section.image}
              />
            )}
          </article>
        ))}

        <article className="flex-col max-w-screen-xl items-center gap-16 px-0 py-12 bg-[#263b37] rounded-[24px_24px_0px_0px] overflow-hidden flex relative w-full flex-[0_0_auto]">
          <div className="flex-wrap items-start gap-[96px_96px] flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex items-start gap-5 flex-1 grow flex-col relative">
              <header className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="mt-[-1.00px] text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative self-stretch font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  {certificationSection.title}
                </h2>
              </header>

              <p className="relative self-stretch font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]">
                {certificationSection.description}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
