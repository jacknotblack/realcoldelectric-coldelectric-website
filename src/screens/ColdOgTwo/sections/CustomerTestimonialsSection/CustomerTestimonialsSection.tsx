import React, { useState } from "react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "評估",
    description: "我們審核您現場的負載配置、冗餘和並網規格。",
  },
  {
    number: "02",
    title: "計劃",
    description: "我們設計土建基礎、開關設備佈局和 EMS 參數。",
  },
  {
    number: "03",
    title: "安裝",
    description: "經認證的團隊負責安裝、布線和全面調試。",
  },
  {
    number: "04",
    title: "管理",
    description:
      "通過我們的 EMS 入口網站，您可以獲得實時儀表板、健康檢查和 SLA 支持。",
  },
];

const faqItems = [
  {
    id: 1,
    question: "什麼是冷 OG2，最適合在哪裡部署？",
    answer:
      "單機架、420 kWh 的能源儲存系統，適合商業、工業和中型公用事業應用。",
    isOpen: true,
  },
  {
    id: 2,
    question: "多個 OG2 單元可以並聯嗎？",
    answer: "",
    isOpen: false,
  },
  {
    id: 3,
    question: "適用於哪些現場和電氣要求？",
    answer: "",
    isOpen: false,
  },
  {
    id: 4,
    question: "支持哪些通信協議？",
    answer: "",
    isOpen: false,
  },
  {
    id: 5,
    question: "需要什麼維護？",
    answer: "",
    isOpen: false,
  },
  {
    id: 6,
    question: "您提供什麼保修和支持？",
    answer: "",
    isOpen: false,
  },
  {
    id: 7,
    question: "我如何獲得報價和交貨時間？",
    answer: "",
    isOpen: false,
  },
];

const productLines = [
  {
    id: "coldsub",
    link: "/coldsub",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/home-smile-6.svg",
    iconBg: "bg-[url(https://c.animaapp.com/U7V4C1eZ/img/background-11.svg)]",
    iconColor: "bg-[#85b378]",
    title: "Cold SUB",
    subtitle: "家庭和小型企業的智能電池解決方案",
    gradient:
      "bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]",
    features: [
      {
        title: "內建安全性，採用 LFP 技術",
        description:
          "不易燃的 LFP 技術。採用專有的防火鋰鐵磷酸鹽 (LFP) 電池，提供無與倫比的安全性。",
      },
      {
        title: "模組化設計，靈活容量",
        description:
          "可選擇 H25 或 H40 型號，容量高達 41.5 kWh，提供裝飾性和工業型兩種外觀。",
      },
      {
        title: "無縫混合整合",
        description:
          "通過內建的混合逆變器支持，完全兼容太陽能、電網和發電機輸入。",
      },
    ],
    imageContainer: {
      gradient:
        "bg-[linear-gradient(165deg,rgba(42,69,64,1)_0%,rgba(48,85,78,1)_65%,rgba(57,104,95,1)_84%,rgba(48,85,78,1)_100%)]",
      pattern: "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-14.svg",
      text: "SUB",
      textGradient:
        "bg-[linear-gradient(178deg,rgba(254,223,137,1)_0%,rgba(38,59,55,1)_100%)]",
      image: "https://c.animaapp.com/U7V4C1eZ/img/product-5@2x.png",
      imagePosition: "top-[97px] left-[69px]",
      imageSize: "w-[545px] h-[531px]",
    },
  },
  {
    id: "coldzero",
    link: "/coldzero",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/building-02-5.svg",
    iconBg: "bg-[url(https://c.animaapp.com/U7V4C1eZ/img/background-12.svg)]",
    iconColor: "bg-[#656b75]",
    title: "Cold ZERO",
    subtitle: "商業級能源模組",
    gradient:
      "bg-[linear-gradient(136deg,rgba(65,70,81,1)_0%,rgba(32,33,36,1)_100%)]",
    features: [
      {
        title: "商業級 EMS 整合",
        description:
          "無縫連接 長庚國際能源的 EMS，以實現實時能源控制和電網參與。",
      },
      {
        title: "靈活型號，具有高功率輸出",
        description:
          "可選擇 S90 或 S100 型號，峰值功率高達 60 kW，並具備 IP65 等級的保護，適用於苛刻環境。",
      },
      {
        title: "持久且高效的性能",
        description: "提供超過 6,000 次充電循環和超過 94% 的回程效率。",
      },
    ],
    imageContainer: {
      gradient:
        "bg-[linear-gradient(158deg,rgba(87,91,99,1)_0%,rgba(65,70,81,1)_66%,rgba(87,91,99,1)_100%)]",
      pattern: "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-15.svg",
      text: "ZERO",
      textGradient:
        "bg-[linear-gradient(179deg,rgba(220,223,234,1)_0%,rgba(65,70,81,1)_98%)]",
      image: "https://c.animaapp.com/U7V4C1eZ/img/zero-4@3x.png",
      imagePosition: "top-[101px] left-[41px]",
      imageSize: "w-[636px] h-[475px]",
    },
  },
  {
    id: "coldog",
    link: "/coldog",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/building-07-11.svg",
    iconBg: "bg-[url(https://c.animaapp.com/U7V4C1eZ/img/background-13.svg)]",
    iconColor: "bg-[#7bd7e5]",
    title: "Cold OG",
    subtitle: "高容量工業級系統",
    gradient:
      "bg-[linear-gradient(136deg,rgba(14,40,51,1)_0%,rgba(32,33,36,1)_100%)]",
    features: [
      {
        title: "滿足電網規模需求的巨大容量",
        description: "容量高達 2,104 kWh 的商業和公用事業級能源儲存。",
      },
      {
        title: "模組化集裝箱架構",
        description: "靈活的型號系列支持量身定制的部署和輕鬆擴展。",
      },
      {
        title: "經認證的防火設計",
        description:
          "長庚國際能源  的產品在電池、模組和單元級別均獲得 UL9540A 認證，確保防火安全。",
      },
    ],
    imageContainer: {
      gradient:
        "bg-[linear-gradient(165deg,rgba(33,72,88,1)_0%,rgba(34,86,104,1)_65%,rgba(32,105,126,1)_84%,rgba(34,86,104,1)_100%)]",
      pattern: "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-16.svg",
      text: "OG",
      textGradient:
        "bg-[linear-gradient(176deg,rgba(177,232,240,1)_0%,rgba(34,86,104,1)_100%)]",
      image: "https://c.animaapp.com/U7V4C1eZ/img/cold1-1-4.png",
      imagePosition: "top-[106px] left-[66px]",
      imageSize: "w-[596px] h-[419px] aspect-[1.42] object-cover",
    },
  },
];

export const CustomerTestimonialsSection = (): JSX.Element => {
  const [openFaqId, setOpenFaqId] = useState<number>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? 0 : id);
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
                  OG2 部署，簡化版
                </h2>
              </div>
              <p className="self-stretch text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                我們精簡的四步驟流程確保您的冷 OG2
                機架能快速安裝、無縫配置並調整至最佳性能。
              </p>
            </header>
          </div>
        </div>

        <div className="max-w-screen-xl items-start gap-16 w-full flex-[0_0_auto] flex px-8 py-0 relative">
          <div className="flex flex-wrap items-start gap-[48px_32px] relative flex-1 grow">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="flex-1 grow flex flex-col min-w-60 items-start gap-4 relative"
              >
                <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[46px] h-[46px] aspect-[1]"
                    alt=""
                    src="https://c.animaapp.com/U7V4C1eZ/img/arrow-right-33.svg"
                    aria-hidden="true"
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
          <header className="flex flex-col min-w-[480px] max-w-screen-md items-start gap-5 relative flex-1 grow">
            <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
              <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                支持
              </p>
              <h2 className="self-stretch text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                常見問題
              </h2>
            </div>
            <p className="self-stretch text-[#ffffffcc] text-[length:var(--text-lg-regular-font-size)] leading-[var(--text-lg-regular-line-height)] relative font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] tracking-[var(--text-lg-regular-letter-spacing)] [font-style:var(--text-lg-regular-font-style)]">
              有關產品和計費的所有資訊。找不到您想要的答案？請聯繫我們
            </p>
          </header>

          <div className="flex flex-col min-w-[480px] items-start gap-8 relative flex-1 grow">
            {faqItems.map((item) => (
              <article
                key={item.id}
                className="min-w-80 self-stretch w-full flex flex-col items-center relative flex-[0_0_auto]"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto] text-left"
                  aria-expanded={openFaqId === item.id}
                >
                  <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                    <h3 className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                      {item.question}
                    </h3>
                    {openFaqId === item.id && item.answer && (
                      <p className="self-stretch text-[#b7d8cd] text-base leading-6 relative [font-family:'Manrope',Helvetica] font-normal tracking-[0]">
                        {item.answer}
                      </p>
                    )}
                  </div>
                  <div className="inline-flex items-start flex-[0_0_auto] flex-col relative">
                    <img
                      className="relative w-6 h-6 aspect-[1]"
                      alt={openFaqId === item.id ? "Collapse" : "Expand"}
                      src={
                        openFaqId === item.id
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
              發現 長庚國際能源 的其他產品系列
            </h2>
            <p className="flex-1 mt-[-1.00px] text-[#dbece6] text-[length:var(--display-xs-regular-font-size)] leading-[var(--display-xs-regular-line-height)] relative font-display-xs-regular font-[number:var(--display-xs-regular-font-weight)] tracking-[var(--display-xs-regular-letter-spacing)] [font-style:var(--display-xs-regular-font-style)]">
              靈活、安全優先的電池系統，專為家庭、企業和電網規模的部署量身定制。
            </p>
          </div>
        </header>

        {productLines.map((product) => (
          <Link
            key={product.id}
            className="flex max-w-screen-xl items-start gap-6 px-8 py-0 relative w-full flex-[0_0_auto]"
            to={product.link}
          >
            <article
              className={`flex-wrap items-center justify-between gap-[64px_64px] flex-1 grow rounded-3xl overflow-hidden ${product.gradient} flex relative`}
            >
              <div className="flex flex-col items-start gap-20 p-8 relative flex-1 grow z-[1]">
                <header className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className={`${product.iconBg} relative w-[68px] h-[68px] rounded-[28px] aspect-[1] bg-[100%_100%]`}
                  >
                    <div
                      className={`flex w-9 h-9 items-center justify-center top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] ${product.iconColor} rounded-[99px] flex-col relative`}
                    >
                      <img
                        className="relative w-5 h-5 aspect-[1]"
                        alt=""
                        src={product.icon}
                        aria-hidden="true"
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
                </header>

                <div className="flex flex-col items-start gap-8 self-stretch w-full relative flex-[0_0_auto]">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
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
                      alt=""
                      src="https://c.animaapp.com/U7V4C1eZ/img/arrow-right-36.svg"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <div
                className={`relative w-[699px] h-[${product.id === "coldsub" ? "628" : "576"}px] z-0 rounded-[22px_22px_22px_0px] overflow-hidden ${product.imageContainer.gradient}`}
              >
                <img
                  className={`absolute top-0 left-0 w-[699px] h-[${product.id === "coldsub" ? "628" : "576"}px]`}
                  alt=""
                  src={product.imageContainer.pattern}
                  aria-hidden="true"
                />
                <div
                  className={`absolute ${product.id === "coldsub" ? "top-[11px] -left-5" : product.id === "coldzero" ? "top-[22px] left-[-19px]" : "top-[25px] left-[-27px]"} ${product.imageContainer.textGradient} [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent ${product.id === "coldsub" ? "text-[196px]" : product.id === "coldzero" ? "text-[206px]" : "text-[238px]"} text-center ${product.id === "coldsub" ? "tracking-[-3.92px]" : product.id === "coldzero" ? "tracking-[-4.12px]" : "tracking-[-4.76px]"} leading-[90px] whitespace-nowrap`}
                >
                  {product.imageContainer.text}
                </div>
                <img
                  className={`absolute ${product.imageContainer.imagePosition} ${product.imageContainer.imageSize}`}
                  alt={product.title}
                  src={product.imageContainer.image}
                />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};
