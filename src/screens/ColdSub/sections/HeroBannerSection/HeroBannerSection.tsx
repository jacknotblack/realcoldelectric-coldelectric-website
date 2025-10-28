import React from "react";
import { Link } from "react-router-dom";

const navigationItems = [
  { label: "解決方案", hasDropdown: true },
  { label: "產品服務", hasDropdown: true },
  { label: "賦能產業", hasDropdown: true },
  { label: "資源中心", hasDropdown: true },
];

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center pt-0 pb-24 px-0 relative self-stretch w-full flex-[0_0_auto] z-[5] rounded-3xl overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(18,33,31,0)_100%)]"
      aria-label="Hero Banner Section"
    >
      <div className="relative self-stretch w-full h-20 z-[1]">
        <header className="h-20 items-center justify-center bg-transparent flex flex-col w-full relative">
          <div className="max-w-screen-xl items-center gap-4 w-full flex-[0_0_auto] flex px-8 py-0 relative">
            <Link
              className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto] rounded-lg"
              to="/home"
              aria-label="Home"
            >
              <img
                className="relative w-[99.74px] h-[15.91px]"
                alt="Company Logo"
                src="https://c.animaapp.com/U7V4C1eZ/img/text-8@2x.png"
              />

              <img
                className="absolute w-[51.47%] h-[37.25%] top-[-50.28%] left-[3.01%]"
                alt=""
                src="https://c.animaapp.com/U7V4C1eZ/img/-294c60ff-8@2x.png"
                aria-hidden="true"
              />
            </Link>

            <nav
              className="flex items-center gap-5 relative flex-1 grow"
              aria-label="Main Navigation"
            >
              <div className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden hover:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-[#85b378] transition-colors"
                    aria-haspopup={item.hasDropdown ? "true" : undefined}
                    aria-expanded={item.hasDropdown ? "false" : undefined}
                  >
                    <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                      <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {item.label}
                      </span>
                    </span>

                    {item.hasDropdown && (
                      <img
                        className="relative w-4 h-4 aspect-[1]"
                        alt=""
                        src="https://c.animaapp.com/U7V4C1eZ/img/chevron-down-37.svg"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                ))}

                <Link
                  className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden hover:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-[#85b378] transition-colors"
                  to="/about"
                >
                  <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                      品牌故事
                    </span>
                  </span>
                </Link>
              </div>
            </nav>

            <div className="gap-3 inline-flex items-center relative flex-[0_0_auto]">
              <button
                className="bg-[#263b37] border border-solid border-[#30554e] inline-flex items-center justify-center gap-1 px-3.5 py-2.5 relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic hover:bg-[#2f4842] focus:outline-none focus:ring-2 focus:ring-[#85b378] transition-colors"
                aria-label="Select Language"
              >
                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                    繁體中文
                  </span>
                </span>

                <img
                  className="relative w-5 h-5 aspect-[1]"
                  alt=""
                  src="https://c.animaapp.com/U7V4C1eZ/img/chevron-selector-vertical-8.svg"
                  aria-hidden="true"
                />
              </button>

              <button
                className="bg-[#85b378] border-[none] inline-flex items-center justify-center gap-1 px-3.5 py-2.5 relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#7aa56d] focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                aria-label="Contact Us"
              >
                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-white text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                    聯繫我們
                  </span>
                </span>
              </button>
            </div>
          </div>
        </header>
      </div>

      <div className="items-start pt-24 pb-0 px-0 self-stretch flex-[0_0_auto] z-0 flex flex-col w-full relative">
        <div className="flex-col items-center self-stretch flex relative w-full flex-[0_0_auto]">
          <div className="flex-col max-w-screen-xl items-center gap-8 w-full flex-[0_0_auto] flex px-8 py-0 relative">
            <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="flex-1 mt-[-1.00px] text-[#fbfdfd] text-[length:var(--display-lg-semibold-font-size)] tracking-[var(--display-lg-semibold-letter-spacing)] leading-[var(--display-lg-semibold-line-height)] relative font-display-lg-semibold font-[number:var(--display-lg-semibold-font-weight)] [font-style:var(--display-lg-semibold-font-style)]">
                  適用於各種規模的多功能模組化電池
                </h1>

                <p className="w-[640px] text-[#dbece6] text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                  Cold SUB的模組化 LFP
                  架構為家用及小型商用客戶提供可靠、高效的能源儲能，實現無縫備援、削峰填谷及智慧電網互動。
                </p>
              </div>

              <img
                className="relative self-stretch w-full flex-[0_0_auto]"
                alt="Modular Battery System"
                src="https://c.animaapp.com/U7V4C1eZ/img/image-3@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
