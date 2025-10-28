import React, { useState } from "react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "評估",
    description:
      "我們評估您現場的負載配置、備份需求和環境限制，以確定合適的 Cold ZERO 型號。",
  },
  {
    number: "02",
    title: "計劃",
    description:
      "我們提供詳細的部署計劃，涵蓋模組數量、開關設備整合、機械基礎和 EMS 參數。",
  },
  {
    number: "03",
    title: "安裝",
    description:
      "經認證的技術人員負責交付、IP65 外殼安置、電氣互連和全面調試。",
  },
  {
    number: "04",
    title: "管理",
    description:
      "通過 長庚國際能源 EMS 入口網站，您可以獲得 24/7 監控、實時警報、性能調整和固件升級。",
  },
];

const faqItems = [
  {
    question: "什麼是 Cold ZERO，它適用於哪些應用？",
    answer:
      "Cold ZERO 是一款重型 LFP 電池模組，專為商業和工業能源儲存而設計，完美適用於削峰、備用電源和微電網部署。",
    isOpen: true,
  },
  {
    question: "有哪些 Cold ZERO 型號可供選擇？",
    answer: "",
    isOpen: false,
  },
  {
    question: "Cold ZERO 如何與 長庚國際能源 EMS 整合？",
    answer: "",
    isOpen: false,
  },
  {
    question: "現場和安裝要求是什麼？",
    answer: "",
    isOpen: false,
  },
  {
    question: "Cold ZERO 包含哪些安全特性和認證？",
    answer: "",
    isOpen: false,
  },
  {
    question: "我可以期待什麼樣的保固和使用壽命？",
    answer: "",
    isOpen: false,
  },
  {
    question: "我如何獲得報價，交貨時間是多久？",
    answer: "",
    isOpen: false,
  },
  {
    question: "您提供什麼樣的保固和支持？",
    answer: "",
    isOpen: false,
  },
  {
    question: "我如何獲得價格和交貨時間的信息？",
    answer: "",
    isOpen: false,
  },
];

const productCards = [
  {
    id: "coldsub",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/home-smile-6.svg",
    iconBg: "bg-[url(https://c.animaapp.com/U7V4C1eZ/img/background-8.svg)]",
    iconColor: "bg-[#85b378]",
    title: "Cold SUB",
    subtitle: "適用於家庭和小型企業的智能電池解決方案",
    features: [
      {
        title: "內建安全性，採用 LFP 技術",
        description:
          "不易燃的 LFP 技術。採用專有的防火鋰鐵磷酸鹽 (LFP) 電池，提供無與倫比的安全性。",
      },
      {
        title: "模組化設計，靈活的容量",
        description:
          "可選擇 H25 或 H40 型號，容量高達 41.5 kWh，提供裝飾性和工業型兩種外觀。",
      },
      {
        title: "無縫的混合整合",
        description:
          "通過內建的混合逆變器支持，完全兼容太陽能、電網和發電機輸入。",
      },
    ],
    productImage: "https://c.animaapp.com/U7V4C1eZ/img/product-4@2x.png",
    productImagePosition: "top-[97px] left-[69px]",
    productImageSize: "w-[545px] h-[531px]",
    bgGradient:
      "bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]",
    productBgGradient:
      "bg-[linear-gradient(165deg,rgba(42,69,64,1)_0%,rgba(48,85,78,1)_65%,rgba(57,104,95,1)_84%,rgba(48,85,78,1)_100%)]",
    productText: "SUB",
    productTextGradient:
      "bg-[linear-gradient(178deg,rgba(254,223,137,1)_0%,rgba(38,59,55,1)_100%)]",
    productTextPosition: "top-[11px] -left-5",
    productTextSize: "text-[196px]",
    productTextTracking: "tracking-[-3.92px]",
    containerHeight: "h-[628px]",
    link: "/coldsub",
  },
  {
    id: "coldog",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/building-07-11.svg",
    iconBg: "bg-[url(https://c.animaapp.com/U7V4C1eZ/img/background-9.svg)]",
    iconColor: "bg-[#7bd7e5]",
    title: "Cold OG",
    subtitle: "高容量工業級系統",
    features: [
      {
        title: "滿足電網規模需求的巨大容量",
        description: "商業和公用事業級能源儲存容量高達 2,104 kWh。",
      },
      {
        title: "模組化集裝箱架構",
        description: "靈活的型號系列支持量身定制的部署和輕鬆擴展。",
      },
      {
        title: "經認證的防火設計",
        description:
          "長庚國際能源 的產品在電池、模組和單元級別均獲得 UL9540A 認證，確保防火安全。",
      },
    ],
    productImage: "https://c.animaapp.com/U7V4C1eZ/img/cold1-1-4.png",
    productImagePosition: "top-[106px] left-[66px]",
    productImageSize: "w-[596px] h-[419px] aspect-[1.42] object-cover",
    bgGradient:
      "bg-[linear-gradient(136deg,rgba(14,40,51,1)_0%,rgba(32,33,36,1)_100%)]",
    productBgGradient:
      "bg-[linear-gradient(165deg,rgba(33,72,88,1)_0%,rgba(34,86,104,1)_65%,rgba(32,105,126,1)_84%,rgba(34,86,104,1)_100%)]",
    productText: "OG",
    productTextGradient:
      "bg-[linear-gradient(176deg,rgba(177,232,240,1)_0%,rgba(34,86,104,1)_100%)]",
    productTextPosition: "top-[25px] left-[-27px]",
    productTextSize: "text-[238px]",
    productTextTracking: "tracking-[-4.76px]",
    containerHeight: "h-[576px]",
    link: "/coldog",
  },
  {
    id: "coldogtwo",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/building-07-11.svg",
    iconBg: "bg-[url(https://c.animaapp.com/U7V4C1eZ/img/background-10.svg)]",
    iconColor: "bg-[#7bd7e5]",
    title: "Cold OG2",
    subtitle: "高容量電網規模和商業系統",
    features: [
      {
        title: "420 kWh 額定 / 380 kWh 可用容量",
        description: "為校園、工業或公用事業級應用提供 200 kW 的峰值輸出。",
      },
      {
        title: "單架模組化架構",
        description:
          "即插即用設計支持最多四個 OG2 單元並聯，提供 1.6 MWh 的靈活儲存。",
      },
      {
        title: "先進的安全性和熱管理",
        description:
          "IP65 等級外殼、主動冷卻和 UL 9540A / UL 1973 / IEC 62619 認證確保防火安全和可靠運行。",
      },
    ],
    productImage: "https://c.animaapp.com/U7V4C1eZ/img/coldog2-1-2@3x.png",
    productImagePosition: "top-0 left-px",
    productImageSize: "w-[327px] h-[490px] aspect-[0.67] object-cover",
    bgGradient:
      "bg-[linear-gradient(136deg,rgba(14,40,51,1)_0%,rgba(32,33,36,1)_100%)]",
    productBgGradient:
      "bg-[linear-gradient(165deg,rgba(33,72,88,1)_0%,rgba(34,86,104,1)_65%,rgba(32,105,126,1)_84%,rgba(34,86,104,1)_100%)]",
    productText: "OG2",
    productTextGradient:
      "bg-[linear-gradient(176deg,rgba(177,232,240,1)_0%,rgba(34,86,104,1)_100%)]",
    productTextPosition: "top-[25px] -left-11",
    productTextSize: "text-[238px]",
    productTextTracking: "tracking-[-4.76px]",
    containerHeight: "h-[576px]",
    link: "/coldogtwo",
    hasShadow: true,
  },
];

export const ProductShowcaseSection = (): JSX.Element => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <section className="flex-col items-start gap-0.5 self-stretch z-[1] flex relative w-full flex-[0_0_auto]">
      <div className="flex-col items-center gap-16 px-0 py-24 self-stretch w-full flex-[0_0_auto] bg-[#12211f] border-b [border-bottom-style:solid] border-[#2a4540] flex relative">
        <div className="flex-col max-w-screen-xl items-start gap-8 w-full flex-[0_0_auto] flex px-8 py-0 relative">
          <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <header className="flex flex-col max-w-screen-md items-start gap-5 relative w-full flex-[0_0_auto]">
              <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                  這是如何運作的
                </p>
                <h2 className="self-stretch text-[#fbfdfd] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  電池部署，簡化版
                </h2>
              </div>
              <p className="relative self-stretch font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]">
                我們簡化的四步驟流程確保您的 Cold ZERO
                系統快速啟動並達到最佳效率。
              </p>
            </header>
          </div>
        </div>

        <div className="max-w-screen-xl items-start gap-16 w-full flex-[0_0_auto] flex px-8 py-0 relative">
          <div className="flex flex-wrap items-start gap-[48px_32px] relative flex-1 grow">
            {processSteps.map((step, index) => (
              <article
                key={index}
                className="flex-1 grow flex flex-col min-w-60 items-start gap-4 relative"
              >
                <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[46px] h-[46px] aspect-[1]"
                    alt={`Step ${step.number}`}
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
        <div className="flex-wrap max-w-screen-xl items-start gap-[64px_64px] w-full flex-[0_0_auto] flex px-8 py-0 relative">
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
              有關產品和計費的所有信息。找不到您想要的答案？請聯繫我們
            </p>
          </div>

          <div className="flex flex-col min-w-[480px] items-start gap-8 relative flex-1 grow">
            {faqItems.map((faq, index) => (
              <article
                key={index}
                className="min-w-80 self-stretch w-full flex flex-col items-center relative flex-[0_0_auto]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto] text-left"
                  aria-expanded={openFaqIndex === index}
                >
                  <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                    <h3 className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                      {faq.question}
                    </h3>
                    {openFaqIndex === index && faq.answer && (
                      <p className="self-stretch text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative font-text-md-regular font-[number:var(--text-md-regular-font-weight)] tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <div className="inline-flex items-start flex-[0_0_auto] flex-col relative">
                    <img
                      className="relative w-6 h-6 aspect-[1]"
                      alt={openFaqIndex === index ? "Collapse" : "Expand"}
                      src={
                        openFaqIndex === index
                          ? "https://c.animaapp.com/U7V4C1eZ/img/minus-circle-3.svg"
                          : "https://c.animaapp.com/U7V4C1eZ/img/plus-circle-28.svg"
                      }
                    />
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-col items-center gap-16 pt-24 pb-40 px-0 self-stretch w-full flex-[0_0_auto] rounded-[24px_24px_0px_0px] overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(12,14,18,1)_100%)] flex relative">
        <header className="flex-col max-w-screen-xl items-start gap-8 w-full flex-[0_0_auto] flex px-8 py-0 relative">
          <div className="flex items-start justify-center gap-24 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="flex-1 grow mt-[-1.00px] text-[#fbfdfd] text-[length:var(--display-lg-semibold-font-size)] tracking-[var(--display-lg-semibold-letter-spacing)] leading-[var(--display-lg-semibold-line-height)] relative font-display-lg-semibold font-[number:var(--display-lg-semibold-font-weight)] [font-style:var(--display-lg-semibold-font-style)]">
              探索 長庚國際能源 的其他產品系列
            </h2>
            <p className="flex-1 mt-[-1.00px] text-[#dbece6] text-[length:var(--display-xs-regular-font-size)] leading-[var(--display-xs-regular-line-height)] relative font-display-xs-regular font-[number:var(--display-xs-regular-font-weight)] tracking-[var(--display-xs-regular-letter-spacing)] [font-style:var(--display-xs-regular-font-style)]">
              靈活、安全優先的電池系統，專為家庭、商業和電網規模的部署量身定制。
            </p>
          </div>
        </header>

        {productCards.map((product) => (
          <Link
            key={product.id}
            className="flex max-w-screen-xl items-start gap-6 px-8 py-0 relative w-full flex-[0_0_auto]"
            to={product.link}
          >
            <article
              className={`flex-wrap items-center justify-between gap-[64px_64px] flex-1 grow rounded-3xl overflow-hidden ${product.bgGradient} flex relative`}
            >
              <div className="flex flex-col items-start gap-20 p-8 relative flex-1 grow z-[1]">
                <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className={`${product.iconBg} relative w-[68px] h-[68px] rounded-[28px] aspect-[1] bg-[100%_100%]`}
                  >
                    <div
                      className={`flex flex-col w-9 h-9 items-center justify-center relative top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] ${product.iconColor} rounded-[99px]`}
                    >
                      <img
                        className="relative w-5 h-5 aspect-[1]"
                        alt={product.title}
                        src={product.icon}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <h3 className="self-stretch mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                      {product.title}
                    </h3>
                    <p className="self-stretch text-[#b7d8cd] text-[length:var(--text-lg-regular-font-size)] leading-[var(--text-lg-regular-line-height)] relative font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] tracking-[var(--text-lg-regular-letter-spacing)] [font-style:var(--text-lg-regular-font-style)]">
                      {product.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-8 self-stretch w-full relative flex-[0_0_auto]">
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="self-stretch w-full flex-[0_0_auto] flex flex-col min-w-60 items-start gap-4 relative"
                    >
                      <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                        <h4 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                          {feature.title}
                        </h4>
                        <p className="self-stretch text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative font-text-md-regular font-[number:var(--text-md-regular-font-weight)] tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]">
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

              <div
                className={`relative w-[699px] ${product.containerHeight} z-0 rounded-[24px_24px_24px_0px] overflow-hidden ${product.productBgGradient}`}
              >
                <img
                  className={`absolute top-0 left-0 w-[699px] ${product.containerHeight}`}
                  alt="Background pattern"
                  src={
                    product.id === "coldsub"
                      ? "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-11.svg"
                      : product.id === "coldog"
                        ? "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-12.svg"
                        : "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-13.svg"
                  }
                />
                <div
                  className={`absolute ${product.productTextPosition} ${product.productTextGradient} [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent ${product.productTextSize} text-center ${product.productTextTracking} leading-[90px] whitespace-nowrap`}
                >
                  {product.productText}
                </div>
                {product.hasShadow && (
                  <div className="absolute top-[43px] left-[169px] w-[362px] h-[490px]">
                    <img
                      className="absolute top-[324px] -left-16 w-[489px] h-[194px]"
                      alt="Shadow"
                      src="https://c.animaapp.com/U7V4C1eZ/img/shadow.svg"
                    />
                    <img
                      className={`absolute ${product.productImagePosition} ${product.productImageSize}`}
                      alt={product.title}
                      src={product.productImage}
                    />
                  </div>
                )}
                {!product.hasShadow && (
                  <img
                    className={`absolute ${product.productImagePosition} ${product.productImageSize}`}
                    alt={product.title}
                    src={product.productImage}
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
