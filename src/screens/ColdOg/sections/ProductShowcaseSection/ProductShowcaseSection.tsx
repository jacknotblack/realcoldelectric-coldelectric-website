import React, { useState } from "react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "評估",
    description: "我們審核您的電網連接點、負載配置和冗餘要求。"
  },
  {
    number: "02",
    title: "計劃",
    description: "我們制定量身定制的設計，包括土建面積、開關設備規格和 EMS 配方。"
  },
  {
    number: "03",
    title: "安裝",
    description: "我們的認證團隊執行重型安裝、高壓電纜布置和全面調試。"
  },
  {
    number: "04",
    title: "管理",
    description: "通過 EMS 入口，您可以獲得實時遙測、SLA 支持和性能調整。"
  }
];

const faqItems = [
  {
    question: "什麼是 Cold OG，如何使用？",
    answer: "Cold OG 是我們的電網規模模塊化鋰離子儲能平台，適合大型商業、公用事業和離網應用。",
    isExpanded: true
  },
  {
    question: "我該如何選擇 C2100A、C2100B 和 C1400A？",
    answer: "",
    isExpanded: false
  },
  {
    question: "需要什麼現場準備？",
    answer: "",
    isExpanded: false
  },
  {
    question: "支持哪些集成協議？",
    answer: "",
    isExpanded: false
  },
  {
    question: "標準提供哪些安全性和認證？",
    answer: "",
    isExpanded: false
  },
  {
    question: "需要什麼維護？",
    answer: "",
    isExpanded: false
  },
  {
    question: "您提供什麼保修和支持？",
    answer: "",
    isExpanded: false
  },
  {
    question: "我該如何獲取價格和交貨時間？",
    answer: "",
    isExpanded: false
  }
];

const productCards = [
  {
    to: "/coldsub",
    bgGradient: "bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]",
    iconBg: "bg-[url(https://c.animaapp.com/U7V4C1eZ/img/background-14.svg)]",
    iconInnerBg: "bg-[#85b378]",
    iconSrc: "https://c.animaapp.com/U7V4C1eZ/img/home-smile-6.svg",
    iconAlt: "Home smile",
    title: "Cold SUB",
    subtitle: "適用於家庭和小型企業的智能電池解決方案",
    features: [
      {
        title: "內建安全性與 LFP 技術",
        description: "不易燃的 LFP 技術。採用專有的防火鋰鐵磷酸鹽 (LFP) 電池，提供無與倫比的安全性。"
      },
      {
        title: "模塊化設計，靈活容量",
        description: "可選擇 H25 或 H40 型號，容量高達 41.5 kWh，提供裝飾性和工業型兩種外觀。"
      },
      {
        title: "無縫混合集成",
        description: "通過內建的混合逆變器支持，完全兼容太陽能、電網和發電機輸入。"
      }
    ],
    imageBg: "bg-[linear-gradient(165deg,rgba(42,69,64,1)_0%,rgba(48,85,78,1)_65%,rgba(57,104,95,1)_84%,rgba(48,85,78,1)_100%)]",
    imagePatternSrc: "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-17.svg",
    imageText: "SUB",
    imageTextGradient: "bg-[linear-gradient(178deg,rgba(254,223,137,1)_0%,rgba(38,59,55,1)_100%)]",
    productImageSrc: "https://c.animaapp.com/U7V4C1eZ/img/product-6@2x.png",
    productImageAlt: "Product",
    productImageStyles: "top-[97px] left-[69px] w-[545px] h-[531px]",
    imageTextStyles: "top-[11px] -left-5 text-[196px] tracking-[-3.92px] leading-[90px]"
  },
  {
    to: "/coldzero",
    bgGradient: "bg-[linear-gradient(136deg,rgba(65,70,81,1)_0%,rgba(32,33,36,1)_100%)]",
    iconBg: "bg-[url(https://c.animaapp.com/U7V4C1eZ/img/background-15.svg)]",
    iconInnerBg: "bg-[#656b75]",
    iconSrc: "https://c.animaapp.com/U7V4C1eZ/img/building-02-5.svg",
    iconAlt: "Building",
    title: "Cold ZERO",
    subtitle: "商業級能源模塊",
    features: [
      {
        title: "商業級 EMS 集成",
        description: "無縫連接 長庚國際能源 的 EMS，實現實時能源控制和電網參與。"
      },
      {
        title: "靈活型號，具有高功率輸出",
        description: "可選擇 S90 或 S100 型號，峰值功率高達 60 kW，並具備 IP65 等級的保護，適用於苛刻環境。"
      },
      {
        title: "持久且高效的性能",
        description: "提供超過 6,000 次充電循環和超過 94% 的回程效率。"
      }
    ],
    imageBg: "bg-[linear-gradient(158deg,rgba(87,91,99,1)_0%,rgba(65,70,81,1)_66%,rgba(87,91,99,1)_100%)]",
    imagePatternSrc: "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-18.svg",
    imageText: "ZERO",
    imageTextGradient: "bg-[linear-gradient(179deg,rgba(220,223,234,1)_0%,rgba(65,70,81,1)_98%)]",
    productImageSrc: "https://c.animaapp.com/U7V4C1eZ/img/zero-5@3x.png",
    productImageAlt: "Zero",
    productImageStyles: "top-[101px] left-[41px] w-[636px] h-[475px]",
    imageTextStyles: "top-[22px] left-[-19px] text-[206px] tracking-[-4.12px] leading-[90px]"
  },
  {
    to: "/coldog",
    bgGradient: "bg-[linear-gradient(136deg,rgba(14,40,51,1)_0%,rgba(32,33,36,1)_100%)]",
    iconBg: "bg-[url(https://c.animaapp.com/U7V4C1eZ/img/background-16.svg)]",
    iconInnerBg: "bg-[#7bd7e5]",
    iconSrc: "https://c.animaapp.com/U7V4C1eZ/img/building-07-11.svg",
    iconAlt: "Building",
    title: "Cold OG2",
    subtitle: "高容量電網規模和商業系統",
    features: [
      {
        title: "420 kWh 額定 / 380 kWh 可用容量",
        description: "為校園、工業或公用事業規模的應用提供 200 kW 的峰值輸出。"
      },
      {
        title: "單架模塊化架構",
        description: "即插即用設計支持最多四個 OG2 單元並行運行，提供 1.6 MWh 的靈活儲存。"
      },
      {
        title: "先進的安全性和熱管理",
        description: "IP65 等級外殼、主動冷卻和 UL 9540A / UL 1973 / IEC 62619 認證確保防火安全和可靠運行。"
      }
    ],
    imageBg: "bg-[linear-gradient(165deg,rgba(33,72,88,1)_0%,rgba(34,86,104,1)_65%,rgba(32,105,126,1)_84%,rgba(34,86,104,1)_100%)]",
    imagePatternSrc: "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-19.svg",
    imageText: "OG2",
    imageTextGradient: "bg-[linear-gradient(176deg,rgba(177,232,240,1)_0%,rgba(34,86,104,1)_100%)]",
    productImageSrc: "https://c.animaapp.com/U7V4C1eZ/img/coldog2-1-2@3x.png",
    productImageAlt: "Coldog",
    productImageStyles: "top-0 left-px w-[327px] h-[490px] aspect-[0.67] object-cover",
    imageTextStyles: "top-[25px] -left-11 text-[238px] tracking-[-4.76px] leading-[90px]",
    hasShadow: true
  }
];

export const ProductShowcaseSection = (): JSX.Element => {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? -1 : index);
  };

  return (
    <section className="flex-col items-start gap-0.5 self-stretch z-[1] flex relative w-full flex-[0_0_auto]">
      <div className="flex-col items-center gap-16 px-0 py-24 self-stretch w-full flex-[0_0_auto] bg-[#12211f] border-b [border-bottom-style:solid] border-[#2a4540] flex relative">
        <div className="flex-col max-w-screen-xl items-start gap-8 flex px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col max-w-screen-md items-start gap-5 relative w-full flex-[0_0_auto]">
              <header className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                  這是如何運作的
                </p>
                <h2 className="self-stretch text-[#fbfdfd] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  電池部署，簡化版
                </h2>
              </header>
              <p className="self-stretch text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                我們精簡的四步驟流程確保您的 Cold OG 快速啟動並達到最佳效率。
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl items-start gap-16 flex px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-wrap items-start gap-[48px_32px] relative flex-1 grow">
            {processSteps.map((step, index) => (
              <article key={index} className="flex-1 grow flex flex-col min-w-60 items-start gap-4 relative">
                <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[46px] h-[46px] aspect-[1]"
                    alt="Arrow right"
                    src="https://c.animaapp.com/U7V4C1eZ/img/arrow-right-33.svg"
                  />
                  <div className="relative w-fit mt-[-1.00px] bg-[linear-gradient(270deg,rgba(101,136,90,1)_0%,rgba(133,179,120,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] text-transparent text-[length:var(--display-xl-semibold-font-size)] tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] whitespace-nowrap [font-style:var(--display-xl-semibold-font-style)]">
                    {step.number}
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#dbece6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                    {step.title}
                  </h3>
                  <p className="self-stretch text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative font-text-md-regular font-[number:var(--text-md-regular-font-weight)] tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[1440px] justify-center gap-16 px-0 py-24 bg-[#12211f] rounded-[0px_0px_24px_24px] overflow-hidden flex flex-col items-center relative flex-[0_0_auto]">
        <div className="flex-wrap max-w-screen-xl items-start gap-[64px_64px] flex px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col min-w-[480px] max-w-screen-md items-start gap-5 relative flex-1 grow">
            <header className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
              <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                支持
              </p>
              <h2 className="self-stretch text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                常見問題
              </h2>
            </header>
            <p className="self-stretch text-[#ffffffcc] text-[length:var(--text-lg-regular-font-size)] leading-[var(--text-lg-regular-line-height)] relative font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] tracking-[var(--text-lg-regular-letter-spacing)] [font-style:var(--text-lg-regular-font-style)]">
              有關產品和計費的所有信息。找不到您要的答案？請聯繫我們
            </p>
          </div>

          <div className="flex flex-col min-w-[480px] items-start gap-8 relative flex-1 grow">
            {faqItems.map((faq, index) => (
              <article key={index} className="min-w-80 self-stretch w-full flex flex-col items-center relative flex-[0_0_auto]">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto] text-left"
                  aria-expanded={expandedFaqIndex === index}
                >
                  <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                    <h3 className={`relative self-stretch mt-[-1.00px] ${index === 0 ? '[font-family:\'Manrope\',Helvetica] font-semibold' : 'font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]'} text-[#f5f6f6] text-base leading-6`}>
                      {faq.question}
                    </h3>
                    {expandedFaqIndex === index && faq.answer && (
                      <p className="self-stretch text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative font-text-md-regular font-[number:var(--text-md-regular-font-weight)] tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <div className="inline-flex items-start flex-[0_0_auto] flex-col relative">
                    <img
                      className="relative w-6 h-6 aspect-[1]"
                      alt={expandedFaqIndex === index ? "Minus circle" : "Plus circle"}
                      src={expandedFaqIndex === index ? "https://c.animaapp.com/U7V4C1eZ/img/minus-circle-3.svg" : "https://c.animaapp.com/U7V4C1eZ/img/plus-circle-28.svg"}
                    />
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-col items-center gap-16 pt-24 pb-40 px-0 self-stretch w-full flex-[0_0_auto] rounded-[24px_24px_0px_0px] overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(12,14,18,1)_100%)] flex relative">
        <div className="flex-col max-w-screen-xl items-start gap-8 flex px-8 py-0 relative w-full flex-[0_0_auto]">
          <header className="flex items-start justify-center gap-24 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="flex-1 grow mt-[-1.00px] text-[#fbfdfd] text-[length:var(--display-lg-semibold-font-size)] tracking-[var(--display-lg-semibold-letter-spacing)] leading-[var(--display-lg-semibold-line-height)] relative font-display-lg-semibold font-[number:var(--display-lg-semibold-font-weight)] [font-style:var(--display-lg-semibold-font-style)]">
              發現 長庚國際能源 的其他產品系列
            </h2>
            <p className="flex-1 mt-[-1.00px] text-[#dbece6] text-[length:var(--display-xs-regular-font-size)] leading-[var(--display-xs-regular-line-height)] relative font-display-xs-regular font-[number:var(--display-xs-regular-font-weight)] tracking-[var(--display-xs-regular-letter-spacing)] [font-style:var(--display-xs-regular-font-style)]">
              靈活、安全優先的電池系統，專為家庭、商業和電網規模部署量身定制。
            </p>
          </header>
        </div>

        {productCards.map((card, index) => (
          <Link
            key={index}
            className="flex max-w-screen-xl items-start gap-6 px-8 py-0 relative w-full flex-[0_0_auto]"
            to={card.to}
          >
            <article className={`flex-wrap items-center justify-between gap-[${index === 0 ? '64px_64px' : '32px_32px'}] flex-1 grow rounded-3xl overflow-hidden ${card.bgGradient} flex relative`}>
              <div className="flex flex-col items-start gap-20 p-8 relative flex-1 grow z-[1]">
                <header className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className={`${card.iconBg} relative w-[68px] h-[68px] rounded-[28px] aspect-[1] bg-[100%_100%]`}>
                    <div className={`flex w-9 h-9 items-center justify-center top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] ${card.iconInnerBg} rounded-[99px] flex-col relative`}>
                      <img
                        className="relative w-5 h-5 aspect-[1]"
                        alt={card.iconAlt}
                        src={card.iconSrc}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <h3 className="self-stretch mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                      {card.title}
                    </h3>
                    <p className={`self-stretch ${index === 0 ? 'text-[#b7d8cd]' : 'text-[#cecfd2]'} text-[length:var(--text-lg-regular-font-size)] leading-[var(--text-lg-regular-line-height)] relative font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] tracking-[var(--text-lg-regular-letter-spacing)] [font-style:var(--text-lg-regular-font-style)]`}>
                      {card.subtitle}
                    </p>
                  </div>
                </header>

                <div className="flex flex-col items-start gap-8 self-stretch w-full relative flex-[0_0_auto]">
                  {card.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="self-stretch w-full flex-[0_0_auto] flex flex-col min-w-60 items-start gap-4 relative">
                      <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                        <h4 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                          {feature.title}
                        </h4>
                        <p className={`self-stretch ${index === 0 ? 'text-[#b7d8cd]' : 'text-[#cecfd2]'} text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative font-text-md-regular font-[number:var(--text-md-regular-font-weight)] tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                      了解更多
                    </span>
                    <img
                      className="relative w-5 h-5 aspect-[1]"
                      alt="Arrow right"
                      src="https://c.animaapp.com/U7V4C1eZ/img/arrow-right-36.svg"
                    />
                  </div>
                </div>
              </div>

              <div className={`relative w-[699px] h-[${index === 0 ? '628' : '576'}px] ${index === 0 ? 'z-0' : ''} rounded-[24px_24px_24px_0px] overflow-hidden ${card.imageBg}`}>
                <img
                  className={`absolute top-0 left-0 w-[699px] h-[${index === 0 ? '628' : '576'}px]`}
                  alt="Background pattern"
                  src={card.imagePatternSrc}
                />
                <div className={`absolute ${card.imageTextStyles} ${card.imageTextGradient} [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent text-center whitespace-nowrap`}>
                  {card.imageText}
                </div>
                {card.hasShadow && (
                  <div className="absolute top-[43px] left-[169px] w-[362px] h-[490px]">
                    <img
                      className="absolute top-[324px] -left-16 w-[489px] h-[194px]"
                      alt="Shadow"
                      src="https://c.animaapp.com/U7V4C1eZ/img/shadow-1.svg"
                    />
                    <img
                      className={`absolute ${card.productImageStyles}`}
                      alt={card.productImageAlt}
                      src={card.productImageSrc}
                    />
                  </div>
                )}
                {!card.hasShadow && (
                  <img
                    className={`absolute ${card.productImageStyles}`}
                    alt={card.productImageAlt}
                    src={card.productImageSrc}
                  />
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};
