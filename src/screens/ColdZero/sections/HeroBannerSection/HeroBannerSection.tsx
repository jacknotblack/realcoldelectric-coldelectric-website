import React from "react";
import { Link } from "react-router-dom";

const navigationItems = [
  { label: "解決方案", hasDropdown: true },
  { label: "產品服務", hasDropdown: true },
  { label: "賦能產業", hasDropdown: true },
  { label: "資源中心", hasDropdown: true },
  { label: "品牌故事", hasDropdown: false, to: "/about" },
];

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center pt-0 pb-24 px-0 relative self-stretch w-full flex-[0_0_auto] z-[5] rounded-3xl overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(18,33,31,0)_100%)]">
      <div className="relative self-stretch w-full h-20 z-[1]">
        <header className="h-20 items-center justify-center bg-transparent flex flex-col w-full relative">
          <nav
            className="max-w-screen-xl items-center gap-4 w-full flex-[0_0_auto] flex px-8 py-0 relative"
            aria-label="Main navigation"
          >
            <Link
              className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto] rounded-lg"
              to="/home"
              aria-label="Home"
            >
              <img
                className="relative w-[99.74px] h-[15.91px]"
                alt="Cold Zero Logo"
                src="https://c.animaapp.com/U7V4C1eZ/img/text-8@2x.png"
              />
              <img
                className="absolute w-[51.47%] h-[37.25%] top-[-50.28%] left-[3.01%]"
                alt=""
                src="https://c.animaapp.com/U7V4C1eZ/img/-294c60ff-8@2x.png"
                aria-hidden="true"
              />
            </Link>

            <div className="flex items-center gap-5 relative flex-1 grow">
              <ul className="gap-0.5 inline-flex items-center relative flex-[0_0_auto] list-none m-0 p-0">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    {item.hasDropdown ? (
                      <button
                        className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden bg-transparent border-none cursor-pointer"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                          <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                            {item.label}
                          </span>
                        </span>
                        <img
                          className="relative w-4 h-4 aspect-[1]"
                          alt=""
                          src="https://c.animaapp.com/U7V4C1eZ/img/chevron-down-37.svg"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <Link
                        className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden"
                        to={item.to || "#"}
                      >
                        <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                          <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                            {item.label}
                          </span>
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gap-3 inline-flex items-center relative flex-[0_0_auto]">
              <button
                className="bg-[#263b37] border border-solid border-[#30554e] inline-flex items-center justify-center gap-1 px-3.5 py-2.5 relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic cursor-pointer"
                aria-label="Select language"
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

              <button className="bg-[#85b378] border-[none] inline-flex items-center justify-center gap-1 px-3.5 py-2.5 relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer">
                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-white text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                    聯繫我們
                  </span>
                </span>
              </button>
            </div>
          </nav>
        </header>
      </div>

      <div className="items-start pt-24 pb-0 px-0 self-stretch flex-[0_0_auto] z-0 flex flex-col w-full relative">
        <div className="flex-col items-center self-stretch flex relative w-full flex-[0_0_auto]">
          <div className="flex-col max-w-screen-xl items-center gap-8 w-full flex-[0_0_auto] flex px-8 py-0 relative">
            <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="flex-1 text-transparent text-[length:var(--display-lg-semibold-font-size)] tracking-[var(--display-lg-semibold-letter-spacing)] leading-[var(--display-lg-semibold-line-height)] relative font-display-lg-semibold font-[number:var(--display-lg-semibold-font-weight)] [font-style:var(--display-lg-semibold-font-style)]">
                  <span className="text-[#47cd89] tracking-[var(--display-lg-semibold-letter-spacing)] font-display-lg-semibold [font-style:var(--display-lg-semibold-font-style)] font-[number:var(--display-lg-semibold-font-weight)] leading-[var(--display-lg-semibold-line-height)] text-[length:var(--display-lg-semibold-font-size)]">
                    長庚國際能源
                  </span>
                  <span className="text-[#f5f6f6] tracking-[var(--display-lg-semibold-letter-spacing)] font-display-lg-semibold [font-style:var(--display-lg-semibold-font-style)] font-[number:var(--display-lg-semibold-font-weight)] leading-[var(--display-lg-semibold-line-height)] text-[length:var(--display-lg-semibold-font-size)]">
                    商業級能源模組
                  </span>
                </h1>

                <p className="w-[560px] mt-[-1.00px] text-[#dbece6] text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                  可擴展的 LFP 電池系統，提供高達 60 kW 的峰值功率，具備 IP65
                  等級外殼，超過 6000 次循環壽命，並與 Cold Electric EMS
                  無縫集成。
                </p>
              </div>

              <figure className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] rounded-3xl overflow-hidden">
                <div className="relative self-stretch w-full rounded-3xl aspect-[1.82] bg-[linear-gradient(180deg,rgba(48,85,78,1)_0%,rgba(38,59,55,1)_100%)]" />

                <img
                  className="top-0 w-[1216px] h-[360px] absolute left-0"
                  alt="Cold Zero Energy Module"
                  src="https://c.animaapp.com/U7V4C1eZ/img/zero-2.png"
                />

                <figcaption className="absolute top-[600px] right-[35px] w-[608px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#8bbdaf] text-[length:var(--text-sm-medium-font-size)] text-right tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] [font-style:var(--text-sm-medium-font-style)]">
                  採用防火 LFP 電池和多層保護設計。經 UL9540A
                  認證，涵蓋電池、模組和系統層級。
                </figcaption>

                <img
                  className="top-[90px] w-[725px] h-[577px] absolute left-0"
                  alt="Cold Zero Energy Module Detail"
                  src="https://c.animaapp.com/U7V4C1eZ/img/zero-3@3x.png"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
