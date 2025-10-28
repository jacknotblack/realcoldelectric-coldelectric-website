import React from "react";
import { Link } from "react-router-dom";

interface ProductFeature {
  title: string;
  description: string;
}

interface ProductCard {
  id: string;
  route: string;
  icon: string;
  iconBg: string;
  backgroundGradient: string;
  title: string;
  subtitle: string;
  features: ProductFeature[];
  imageSection: {
    gradient: string;
    patternImage: string;
    textGradient: string;
    text: string;
    textSize: string;
    textTracking: string;
    textPosition: string;
    productImage: string;
    productImagePosition: string;
    productImageSize: string;
    borderRadius: string;
  };
}

export const ProductShowcaseSection = (): JSX.Element => {
  const products: ProductCard[] = [
    {
      id: "coldsub",
      route: "/coldsub",
      icon: "https://c.animaapp.com/U7V4C1eZ/img/home-smile-6.svg",
      iconBg: "#85b378",
      backgroundGradient:
        "linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)",
      title: "Cold SUB",
      subtitle: "家庭和小型企業的智能電池解決方案",
      features: [
        {
          title: "內建安全性與LFP技術",
          description:
            "不易燃的LFP技術。採用專有的防火鋰鐵磷酸鹽（LFP）電池，提供無與倫比的安全性。",
        },
        {
          title: "模組化設計，靈活容量",
          description:
            "可選擇H25或H40型號，容量高達41.5 kWh，提供裝飾性和工業性兩種外觀。",
        },
        {
          title: "無縫混合整合",
          description:
            "通過內建的混合逆變器支持，與太陽能、電網和發電機輸入完全兼容。",
        },
      ],
      imageSection: {
        gradient:
          "linear-gradient(165deg,rgba(42,69,64,1)_0%,rgba(48,85,78,1)_65%,rgba(57,104,95,1)_84%,rgba(48,85,78,1)_100%)",
        patternImage:
          "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-6.svg",
        textGradient:
          "linear-gradient(178deg,rgba(254,223,137,1)_0%,rgba(38,59,55,1)_100%)",
        text: "SUB",
        textSize: "text-[196px]",
        textTracking: "tracking-[-3.92px]",
        textPosition: "top-[11px] -left-5",
        productImage: "https://c.animaapp.com/U7V4C1eZ/img/product-2@2x.png",
        productImagePosition: "top-[97px] left-[69px]",
        productImageSize: "w-[545px] h-[531px]",
        borderRadius: "rounded-[24px_24px_24px_0px]",
      },
    },
    {
      id: "coldzero",
      route: "/coldzero",
      icon: "https://c.animaapp.com/U7V4C1eZ/img/building-02-5.svg",
      iconBg: "#656b75",
      backgroundGradient:
        "linear-gradient(136deg,rgba(65,70,81,1)_0%,rgba(32,33,36,1)_100%)",
      title: "Cold ZERO",
      subtitle: "商業級能源模組",
      features: [
        {
          title: "商業級EMS整合",
          description:
            "無縫連接長庚國際能源的EMS，實現實時能源控制和電網參與。",
        },
        {
          title: "靈活型號，具高功率輸出",
          description:
            "可選擇S90或S100型號，峰值功率高達60 kW，並具備IP65等級保護，適用於苛刻環境。",
        },
        {
          title: "持久且高效的性能",
          description: "提供超過6,000次充電循環，回程效率超過94%。",
        },
      ],
      imageSection: {
        gradient:
          "linear-gradient(158deg,rgba(87,91,99,1)_0%,rgba(65,70,81,1)_66%,rgba(87,91,99,1)_100%)",
        patternImage:
          "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-7.svg",
        textGradient:
          "linear-gradient(179deg,rgba(220,223,234,1)_0%,rgba(65,70,81,1)_98%)",
        text: "ZERO",
        textSize: "text-[206px]",
        textTracking: "tracking-[-4.12px]",
        textPosition: "top-[22px] left-[-19px]",
        productImage: "https://c.animaapp.com/U7V4C1eZ/img/zero-1@3x.png",
        productImagePosition: "top-[101px] left-[41px]",
        productImageSize: "w-[636px] h-[475px]",
        borderRadius: "rounded-[24px_24px_24px_0px]",
      },
    },
    {
      id: "coldog",
      route: "/coldog",
      icon: "https://c.animaapp.com/U7V4C1eZ/img/building-07-3.svg",
      iconBg: "#7bd7e5",
      backgroundGradient:
        "linear-gradient(136deg,rgba(14,40,51,1)_0%,rgba(32,33,36,1)_100%)",
      title: "Cold OG",
      subtitle: "高容量工業級系統",
      features: [
        {
          title: "滿足電網規模需求的巨大容量",
          description: "商業和公用事業級能源儲存容量高達2,104 kWh。",
        },
        {
          title: "模組化集裝箱架構",
          description: "靈活的型號陣容支持量身定制的部署和輕鬆擴展。",
        },
        {
          title: "經過設計認證的防火安全",
          description:
            "長庚國際能源的產品在電池、模組和單元級別均通過UL9540A認證，確保防火安全。",
        },
      ],
      imageSection: {
        gradient:
          "linear-gradient(165deg,rgba(33,72,88,1)_0%,rgba(34,86,104,1)_65%,rgba(32,105,126,1)_84%,rgba(34,86,104,1)_100%)",
        patternImage:
          "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-8.svg",
        textGradient:
          "linear-gradient(176deg,rgba(177,232,240,1)_0%,rgba(34,86,104,1)_100%)",
        text: "OG",
        textSize: "text-[238px]",
        textTracking: "tracking-[-4.76px]",
        textPosition: "top-[25px] left-[-27px]",
        productImage: "https://c.animaapp.com/U7V4C1eZ/img/cold1-1-4.png",
        productImagePosition: "top-[106px] left-[66px]",
        productImageSize: "w-[596px] h-[419px] aspect-[1.42] object-cover",
        borderRadius: "rounded-[24px_24px_24px_0px]",
      },
    },
    {
      id: "coldogtwo",
      route: "/coldogtwo",
      icon: "https://c.animaapp.com/U7V4C1eZ/img/building-07-3.svg",
      iconBg: "#7bd7e5",
      backgroundGradient:
        "linear-gradient(136deg,rgba(14,40,51,1)_0%,rgba(32,33,36,1)_100%)",
      title: "Cold OG2",
      subtitle: "高容量電網規模及商業",
      features: [
        {
          title: "420 kWh名義容量 / 380 kWh可用容量",
          description: "為校園、工業或公用事業級應用提供200 kW的峰值輸出。",
        },
        {
          title: "單架模組化架構",
          description:
            "即插即用設計支持最多四個OG2單元並聯，提供1.6 MWh的靈活儲存。",
        },
        {
          title: "先進的安全性與熱管理",
          description:
            "IP65等級外殼、主動冷卻以及UL 9540A / UL 1973 / IEC 62619認證確保防火安全和可靠運行。",
        },
      ],
      imageSection: {
        gradient:
          "linear-gradient(165deg,rgba(33,72,88,1)_0%,rgba(34,86,104,1)_65%,rgba(32,105,126,1)_84%,rgba(34,86,104,1)_100%)",
        patternImage:
          "https://c.animaapp.com/U7V4C1eZ/img/background-pattern-9.svg",
        textGradient:
          "linear-gradient(176deg,rgba(177,232,240,1)_0%,rgba(34,86,104,1)_100%)",
        text: "OG2",
        textSize: "text-[238px]",
        textTracking: "tracking-[-4.76px]",
        textPosition: "top-[25px] -left-11",
        productImage: "https://c.animaapp.com/U7V4C1eZ/img/product-3@2x.png",
        productImagePosition: "top-[43px] left-[105px]",
        productImageSize: "w-[489px] h-[518px]",
        borderRadius: "rounded-[24px_24px_24px_0px]",
      },
    },
  ];

  return (
    <section className="flex-col items-center gap-16 pt-24 pb-40 px-0 self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(19,22,27,1)_100%)] flex relative">
      <header className="flex-col items-start gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex max-w-screen-md items-center gap-5 w-full flex-[0_0_auto] flex-col relative">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] text-center tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                產品
              </p>
              <h2 className="text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative self-stretch font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                為每一種能源需求而設計
              </h2>
            </div>
            <p className="self-stretch text-[#808790] text-[length:var(--text-xl-regular-font-size)] text-center leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
              探索我們靈活且以安全為首的電池解決方案——專為家庭、商業及電網規模應用而設計。
            </p>
          </div>
        </div>
      </header>

      {products.map((product) => (
        <Link
          key={product.id}
          className="flex max-w-screen-xl items-start gap-6 px-8 py-0 relative w-full flex-[0_0_auto]"
          to={product.route}
          aria-label={`了解更多關於 ${product.title}`}
        >
          <article
            className="flex-wrap items-center justify-between gap-[64px_64px] flex-1 grow rounded-3xl overflow-hidden bg-[${product.backgroundGradient}] flex relative"
            style={{ background: product.backgroundGradient }}
          >
            <div className="flex flex-col items-start gap-20 p-8 relative flex-1 grow z-[1]">
              <header className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[68px] h-[68px] rounded-[28px] aspect-[1] bg-[url(https://c.animaapp.com/U7V4C1eZ/img/background-4.svg)] bg-[100%_100%]">
                  <div
                    className="flex flex-col w-9 h-9 items-center justify-center relative top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] rounded-[99px]"
                    style={{ backgroundColor: product.iconBg }}
                  >
                    <img
                      className="relative w-5 h-5 aspect-[1]"
                      alt=""
                      src={product.icon}
                    />
                  </div>
                </div>
                <div className="flex items-start flex-1 grow flex-col relative">
                  <h3 className="mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative self-stretch font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                    {product.title}
                  </h3>
                  <p
                    className="self-stretch text-[length:var(--text-lg-regular-font-size)] leading-[var(--text-lg-regular-line-height)] relative font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] tracking-[var(--text-lg-regular-letter-spacing)] [font-style:var(--text-lg-regular-font-style)]"
                    style={{
                      color: product.id === "coldsub" ? "#b7d8cd" : "#cecfd2",
                    }}
                  >
                    {product.subtitle}
                  </p>
                </div>
              </header>

              <div className="flex flex-col items-start self-stretch w-full flex-[0_0_auto] gap-8 relative">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col min-w-60 items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <h4 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                        {feature.title}
                      </h4>
                      <p
                        className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]"
                        style={{
                          color:
                            product.id === "coldsub" ? "#b7d8cd" : "#cecfd2",
                        }}
                      >
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
                    src={
                      product.id === "coldsub"
                        ? "https://c.animaapp.com/U7V4C1eZ/img/arrow-right-5.svg"
                        : "https://c.animaapp.com/U7V4C1eZ/img/arrow-right-8.svg"
                    }
                  />
                </div>
              </div>
            </div>

            <div
              className={`relative w-[699px] ${product.id === "coldsub" ? "h-[628px]" : "h-[576px]"} z-0 ${product.imageSection.borderRadius} overflow-hidden`}
              style={{ background: product.imageSection.gradient }}
            >
              <img
                className={`absolute top-0 left-0 w-[699px] ${product.id === "coldsub" ? "h-[628px]" : "h-[576px]"}`}
                alt=""
                src={product.imageSection.patternImage}
              />
              <div
                className={`absolute ${product.imageSection.textPosition} [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent ${product.imageSection.textSize} text-center ${product.imageSection.textTracking} leading-[90px] whitespace-nowrap`}
                style={{ background: product.imageSection.textGradient }}
              >
                {product.imageSection.text}
              </div>
              <img
                className={`absolute ${product.imageSection.productImagePosition} ${product.imageSection.productImageSize}`}
                alt={product.title}
                src={product.imageSection.productImage}
              />
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};
