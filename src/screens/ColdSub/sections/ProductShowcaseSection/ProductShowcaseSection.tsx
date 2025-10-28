import React, { useState } from "react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "評估",
    description:
      "我們的工程師在不額外收費的情況下，調查您現場的負載條件、備用需求和安裝選項，以確定您的Cold SUB系統的規模",
  },
  {
    number: "02",
    title: "計劃",
    description:
      "我們提供一份標準化的部署計畫，涵蓋模組數量、放置、電力互連與EMS整合。",
  },
  {
    number: "03",
    title: "安裝",
    description:
      "經認證的技術人員負責交付、安裝、接線和調校，確保您獲得無縫且符合規範的啟動。",
  },
  {
    number: "04",
    title: "管理",
    description:
      "通過冷電EMS門戶，您可以獲得24/7監控、自動健康診斷、韌體更新與專家支援。",
  },
];

const faqItems = [
  {
    question: "什麼是冷SUB，適合哪些應用？",
    answer:
      "Cold SUB是一款模組化的LFP（鋰鐵磷酸鹽）儲能系統，專為家庭、小型企業和輕型商業場所設計，完美適用於備用電源、負載轉移和自我消耗優化。",
    isOpen: true,
  },
  {
    question: "我該如何配置和擴展ColdSUB的容量？",
    answer: "",
    isOpen: false,
  },
  {
    question: "哪些逆變器和系統與ColdSUB兼容？",
    answer: "",
    isOpen: false,
  },
  {
    question: "ColdSUB如何與冷電EMS整合？",
    answer: "",
    isOpen: false,
  },
  {
    question: "安裝和現場要求是什麼？",
    answer: "",
    isOpen: false,
  },
  {
    question: "ColdSUB需要什麼維護？",
    answer: "",
    isOpen: false,
  },
  {
    question: "ColdSUB包含哪些安全特性和認證？",
    answer: "",
    isOpen: false,
  },
  {
    question: "您提供什麼保修和支持？",
    answer: "",
    isOpen: false,
  },
  {
    question: "我該如何獲取價格和交貨時間信息？",
    answer: "",
    isOpen: false,
  },
];

const productCards = [
  {
    id: "coldzero",
    title: "Cold ZERO",
    subtitle: "商業級能源模塊",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/building-02-5.svg",
    iconBg: "https://c.animaapp.com/U7V4C1eZ/img/background-17.svg",
    iconColor: "#656b75",
    gradient:
      "linear-gradient(136deg,rgba(65,70,81,1)_0%,rgba(32,33,36,1)_100%)",
    features: [
      {
        title: "商業級EMS整合",
        description: "無縫連接到冷電的EMS，以實現實時能量控制和電網參與。",
      },
      {
        title: "高功率輸出的靈活型號",
        description:
          "在要求苛刻的環境中，選擇S90或S100型號，峰值功率可達60 kW，並具有IP65等級的保護。",
      },
      {
        title: "持久且高效的性能",
        description: "提供超過6000次充電循環和超過94%的回程效率。",
      },
    ],
    imageSection: {
      gradient:
        "linear-gradient(158deg,rgba(87,91,99,1)_0%,rgba(65,70,81,1)_66%,rgba(87,91,99,1)_100%)",
      pattern: "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-20.svg",
      textGradient:
        "linear-gradient(179deg,rgba(220,223,234,1)_0%,rgba(65,70,81,1)_98%)",
      text: "ZERO",
      image: "https://c.animaapp.com/U7V4C1eZ/img/zero-6@3x.png",
    },
    link: "/coldzero",
  },
  {
    id: "coldog",
    title: "Cold OG",
    subtitle: "高容量工業級系統",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/building-07-11.svg",
    iconBg: "https://c.animaapp.com/U7V4C1eZ/img/background-18.svg",
    iconColor: "#7bd7e5",
    gradient:
      "linear-gradient(136deg,rgba(14,40,51,1)_0%,rgba(32,33,36,1)_100%)",
    features: [
      {
        title: "滿足電網規模需求的巨大容量",
        description: "商業和公用事業級儲能容量高達2104 kWh。",
      },
      {
        title: "模塊化容器架構",
        description: "靈活的型號系列支持量身定制的部署和輕鬆擴展。",
      },
      {
        title: "經認證的防火設計",
        description:
          "冷電的產品在電池、模塊和單元級別均獲得UL9540A認證，確保防火安全。",
      },
    ],
    imageSection: {
      gradient:
        "linear-gradient(165deg,rgba(33,72,88,1)_0%,rgba(34,86,104,1)_65%,rgba(32,105,126,1)_84%,rgba(34,86,104,1)_100%)",
      pattern: "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-21.svg",
      textGradient:
        "linear-gradient(176deg,rgba(177,232,240,1)_0%,rgba(34,86,104,1)_100%)",
      text: "OG",
      image: "https://c.animaapp.com/U7V4C1eZ/img/cold1-1-4.png",
    },
    link: "/coldog",
  },
  {
    id: "coldog2",
    title: "Cold OG2",
    subtitle: "高容量電網規模和商業系統",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/building-07-11.svg",
    iconBg: "https://c.animaapp.com/U7V4C1eZ/img/background-19.svg",
    iconColor: "#7bd7e5",
    gradient:
      "linear-gradient(136deg,rgba(14,40,51,1)_0%,rgba(32,33,36,1)_100%)",
    features: [
      {
        title: "420 kWh標稱/380 kWh可用容量",
        description: "為校園、工業或公用事業級應用提供200 kW的峰值輸出。",
      },
      {
        title: "單架模塊化架構",
        description:
          "即插即用設計支持最多四個OG2單元並聯，提供1.6 MWh的靈活儲存。",
      },
      {
        title: "先進的安全和熱管理",
        description:
          "IP65等級外殼、主動冷卻和UL 9540A / UL 1973 / IEC 62619認證確保防火安全和可靠運行。",
      },
    ],
    imageSection: {
      gradient:
        "linear-gradient(165deg,rgba(33,72,88,1)_0%,rgba(34,86,104,1)_65%,rgba(32,105,126,1)_84%,rgba(34,86,104,1)_100%)",
      pattern: "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-22.svg",
      textGradient:
        "linear-gradient(176deg,rgba(177,232,240,1)_0%,rgba(34,86,104,1)_100%)",
      text: "OG2",
      image: "https://c.animaapp.com/U7V4C1eZ/img/coldog2-1-2@3x.png",
    },
    link: "/coldog",
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
            <div className="flex flex-col max-w-screen-md items-start gap-5 relative w-full flex-[0_0_auto]">
              <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                <h2 className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                  它是如何運作的
                </h2>
                <h3 className="self-stretch text-[#fbfdfd] text-4xl tracking-[-0.72px] leading-[44px] relative [font-family:'Manrope',Helvetica] font-semibold">
                  簡化部署流程
                </h3>
              </div>
              <p className="self-stretch text-[#b7d8cd] text-xl leading-[30px] relative [font-family:'Manrope',Helvetica] font-normal tracking-[0]">
                我們簡化的四步驟過程確保您的冷SUB快速啟動並達到最佳效率。
              </p>
            </div>
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
                    alt=""
                    src="https://c.animaapp.com/U7V4C1eZ/img/arrow-right-33.svg"
                  />
                  <div className="relative w-fit mt-[-1.00px] bg-[linear-gradient(270deg,rgba(101,136,90,1)_0%,rgba(133,179,120,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] text-transparent text-[length:var(--display-xl-semibold-font-size)] tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] whitespace-nowrap [font-style:var(--display-xl-semibold-font-style)]">
                    {step.number}
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <h4 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#dbece6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                    {step.title}
                  </h4>
                  <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full justify-center gap-16 px-0 py-24 bg-[#12211f] rounded-[0px_0px_24px_24px] overflow-hidden flex flex-col items-center relative flex-[0_0_auto]">
        <div className="flex-wrap max-w-screen-xl items-start gap-[64px_64px] w-full flex-[0_0_auto] flex px-8 py-0 relative">
          <div className="flex flex-col min-w-[480px] max-w-screen-md items-start gap-5 relative flex-1 grow">
            <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
              <h2 className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                支持
              </h2>
              <h3 className="self-stretch text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                常見問題
              </h3>
            </div>
            <p className="self-stretch text-[#ffffffcc] text-[length:var(--text-lg-regular-font-size)] leading-[var(--text-lg-regular-line-height)] relative font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] tracking-[var(--text-lg-regular-letter-spacing)] [font-style:var(--text-lg-regular-font-style)]">
              有關產品和計費的所有信息。找不到您要尋找的答案？請聯繫我們
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
                    <h4 className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#dbece6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                      {faq.question}
                    </h4>
                    {openFaqIndex === index && faq.answer && (
                      <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
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
        <div className="flex-col max-w-screen-xl items-start gap-8 w-full flex-[0_0_auto] flex px-8 py-0 relative">
          <div className="flex items-start justify-center gap-24 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="flex-1 grow mt-[-1.00px] text-[#fbfdfd] text-5xl tracking-[-0.96px] leading-[60px] relative [font-family:'Manrope',Helvetica] font-semibold">
              發現長庚國際能源的其他產品系列
            </h2>
            <p className="flex-1 mt-[-1.00px] text-[#dbece6] text-2xl leading-8 relative [font-family:'Manrope',Helvetica] font-normal tracking-[0]">
              靈活、安全為先的電池系統，專為家庭、企業和電網規模的部署量身定制。
            </p>
          </div>
        </div>

        {productCards.map((product, index) => (
          <Link
            key={index}
            className="flex max-w-screen-xl items-start gap-6 px-8 py-0 relative w-full flex-[0_0_auto]"
            to={product.link}
          >
            <article
              className="flex-wrap items-center justify-between gap-[32px_32px] flex-1 grow rounded-3xl overflow-hidden flex relative"
              style={{ background: product.gradient }}
            >
              <div className="flex flex-col items-start gap-20 p-8 relative flex-1 grow">
                <header className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className="relative w-[68px] h-[68px] rounded-[28px] aspect-[1] bg-[100%_100%]"
                    style={{ backgroundImage: `url(${product.iconBg})` }}
                  >
                    <div
                      className="flex flex-col w-9 h-9 items-center justify-center relative top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] rounded-[99px]"
                      style={{ backgroundColor: product.iconColor }}
                    >
                      <img
                        className="relative w-5 h-5 aspect-[1]"
                        alt=""
                        src={product.icon}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <h3 className="self-stretch mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                      {product.title}
                    </h3>
                    <p className="self-stretch text-[#cecfd2] text-[length:var(--text-lg-regular-font-size)] leading-[var(--text-lg-regular-line-height)] relative font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] tracking-[var(--text-lg-regular-letter-spacing)] [font-style:var(--text-lg-regular-font-style)]">
                      {product.subtitle}
                    </p>
                  </div>
                </header>

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
                        <p className="self-stretch text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative font-text-md-regular font-[number:var(--text-md-regular-font-weight)] tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]">
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
                    />
                  </div>
                </div>
              </div>

              <div
                className="relative w-[699px] h-[576px] rounded-[24px_24px_24px_0px] overflow-hidden"
                style={{ background: product.imageSection.gradient }}
              >
                <img
                  className="absolute top-0 left-0 w-[699px] h-[576px]"
                  alt=""
                  src={product.imageSection.pattern}
                />
                <div
                  className="absolute [font-family:'Manrope',Helvetica] font-semibold text-transparent text-center whitespace-nowrap [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
                  style={{
                    background: product.imageSection.textGradient,
                    top: product.id === "coldzero" ? "22px" : "25px",
                    left:
                      product.id === "coldzero"
                        ? "-19px"
                        : product.id === "coldog2"
                          ? "-44px"
                          : "-27px",
                    fontSize: product.id === "coldzero" ? "206px" : "238px",
                    letterSpacing:
                      product.id === "coldzero" ? "-4.12px" : "-4.76px",
                    lineHeight: "90px",
                  }}
                >
                  {product.imageSection.text}
                </div>
                {product.id === "coldog2" && (
                  <div className="absolute top-[43px] left-[169px] w-[362px] h-[490px]">
                    <img
                      className="absolute top-[324px] -left-16 w-[489px] h-[194px]"
                      alt=""
                      src="https://c.animaapp.com/U7V4C1eZ/img/shadow-2.svg"
                    />
                    <img
                      className="absolute top-0 left-px w-[327px] h-[490px] aspect-[0.67] object-cover"
                      alt={product.title}
                      src={product.imageSection.image}
                    />
                  </div>
                )}
                {product.id !== "coldog2" && (
                  <img
                    className="absolute object-cover"
                    alt={product.title}
                    src={product.imageSection.image}
                    style={{
                      top: product.id === "coldzero" ? "101px" : "106px",
                      left: product.id === "coldzero" ? "41px" : "66px",
                      width: product.id === "coldzero" ? "636px" : "596px",
                      height: product.id === "coldzero" ? "475px" : "419px",
                    }}
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
