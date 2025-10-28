import React from "react";
import { Link } from "react-router-dom";

const navigationItems = [
  { label: "解決方案", hasDropdown: true },
  { label: "產品服務", hasDropdown: true },
  { label: "賦能產業", hasDropdown: true },
  { label: "資源中心", hasDropdown: true },
  { label: "品牌故事", hasDropdown: false },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <div className="relative self-stretch w-full h-20 z-[6]">
      <header className="h-20 justify-center bg-transparent flex flex-col w-full items-center relative">
        <nav
          className="flex max-w-screen-xl items-center gap-4 px-8 py-0 relative w-full flex-[0_0_auto]"
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
              src="https://c.animaapp.com/U7V4C1eZ/img/text-2@2x.png"
            />
            <img
              className="absolute w-[51.47%] h-[37.25%] top-[-50.28%] left-[3.01%]"
              alt=""
              src="https://c.animaapp.com/U7V4C1eZ/img/-294c60ff-8@2x.png"
              aria-hidden="true"
            />
          </Link>
          <div className="items-center gap-5 flex-1 grow flex relative">
            <ul className="gap-0.5 inline-flex items-center relative flex-[0_0_auto] list-none m-0 p-0">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <button
                    className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden bg-transparent border-none cursor-pointer"
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
                </li>
              ))}
            </ul>
          </div>
          <div className="gap-3 inline-flex items-center relative flex-[0_0_auto]">
            <button
              className="bg-[#263b37] border border-solid border-[#30554e] inline-flex items-center justify-center gap-1 px-3.5 py-2.5 relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic cursor-pointer"
              aria-label="Select language"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                  繁體中文
                </span>
              </span>
              <img
                className="relative w-5 h-5 aspect-[1]"
                alt=""
                src="https://c.animaapp.com/U7V4C1eZ/img/chevron-selector-vertical-2.svg"
                aria-hidden="true"
              />
            </button>
            <Link
              className="bg-[#85b378] border-[none] inline-flex items-center justify-center gap-1 px-3.5 py-2.5 relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              to="/contact"
            >
              <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-white text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                  聯繫我們
                </span>
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
