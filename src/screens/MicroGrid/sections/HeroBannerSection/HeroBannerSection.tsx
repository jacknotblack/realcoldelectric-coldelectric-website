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
    <section className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] z-[8]">
      <div className="relative self-stretch w-full h-20 z-[1]">
        <header className="h-20 items-center justify-center bg-transparent flex flex-col w-full relative">
          <div className="items-center gap-4 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
            <Link
              className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto] rounded-lg"
              to="/home"
              aria-label="首頁"
            >
              <img
                className="relative w-[99.74px] h-[15.91px]"
                alt="長庚國際能源標誌"
                src="https://c.animaapp.com/U7V4C1eZ/img/text-4@2x.png"
              />
              <img
                className="absolute w-[51.47%] h-[37.25%] top-[-50.28%] left-[3.01%]"
                alt=""
                src="https://c.animaapp.com/U7V4C1eZ/img/-294c60ff-4@2x.png"
                aria-hidden="true"
              />
            </Link>

            <nav
              className="flex items-center gap-5 relative flex-1 grow"
              aria-label="主導航"
            >
              <ul className="gap-0.5 inline-flex items-center relative flex-[0_0_auto] list-none m-0 p-0">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    {item.hasDropdown ? (
                      <button
                        className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden bg-transparent border-0 cursor-pointer"
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
            </nav>

            <div className="gap-3 inline-flex items-center relative flex-[0_0_auto]">
              <button
                className="gap-1 px-3.5 py-2.5 bg-[#263b37] border border-solid border-[#30554e] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic cursor-pointer"
                aria-label="選擇語言"
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

              <button className="gap-1 px-3.5 py-2.5 bg-[#85b378] border-[none] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer">
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

      <div className="items-start self-stretch flex-[0_0_auto] z-0 flex flex-col w-full relative">
        <div className="flex-col items-center pt-24 pb-0 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-center gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <h1 className="mt-[-1.00px] text-[#dbece6] text-6xl tracking-[-1.20px] leading-[72px] relative [font-family:'Manrope',Helvetica] font-semibold">
                  更智慧的電網，從在地微電網開始。
                </h1>
                <p className="w-[640px] font-[number:var(--text-xl-regular-font-weight)] text-[#dbece6] text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                  長庚國際能源打造高韌性微電網，串聯太陽能、儲能電池、電動車充電樁及虛擬電廠，為社區與企業提供能源獨立及獲利契機。
                </p>
              </div>
              <img
                className="relative w-[640px] h-[351px] mr-[-112.00px] object-cover"
                alt="微電網系統示意圖"
                src="https://c.animaapp.com/U7V4C1eZ/img/sub.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
