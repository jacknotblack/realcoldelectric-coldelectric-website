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
    <section className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] rounded-[0px_0px_24px_24px] overflow-hidden">
      <div className="relative self-stretch w-full h-20 z-[1]">
        <header className="flex flex-col w-full h-20 items-center justify-center relative bg-transparent">
          <nav
            className="items-center gap-4 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]"
            aria-label="Main navigation"
          >
            <Link
              className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto] rounded-lg"
              to="/home"
              aria-label="Home"
            >
              <img
                className="relative w-[99.74px] h-[15.91px]"
                alt="Company logo"
                src="https://c.animaapp.com/U7V4C1eZ/img/text-3@2x.png"
              />
              <img
                className="absolute w-[51.47%] h-[37.25%] top-[-50.28%] left-[3.01%]"
                alt=""
                src="https://c.animaapp.com/U7V4C1eZ/img/-294c60ff-4@2x.png"
                aria-hidden="true"
              />
            </Link>

            <div className="flex items-center gap-5 relative flex-1 grow">
              <ul className="gap-0.5 inline-flex items-center relative flex-[0_0_auto] list-none m-0 p-0">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    {item.to ? (
                      <Link
                        className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden hover:bg-[#263b37] transition-colors"
                        to={item.to}
                      >
                        <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                          <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                            {item.label}
                          </span>
                        </span>
                      </Link>
                    ) : (
                      <button
                        className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden hover:bg-[#263b37] transition-colors"
                        aria-haspopup="true"
                        aria-expanded="false"
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
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gap-3 inline-flex items-center relative flex-[0_0_auto]">
              <button
                className="gap-1 px-3.5 py-2.5 bg-[#263b37] border border-solid border-[#30554e] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic hover:bg-[#30554e] transition-colors"
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
                  src="https://c.animaapp.com/U7V4C1eZ/img/chevron-selector-vertical-3.svg"
                  aria-hidden="true"
                />
              </button>

              <button className="gap-1 px-3.5 py-2.5 bg-[#85b378] border-[none] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#7aa569] transition-colors">
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

      <img
        className="absolute w-[1360px] h-20 top-0 left-20 z-0"
        alt=""
        src="https://c.animaapp.com/U7V4C1eZ/img/lines-1@2x.png"
        aria-hidden="true"
      />
    </section>
  );
};
