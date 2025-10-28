import React from "react";

const footerSections = [
  {
    title: "解決方案",
    links: [
      "微電網系統",
      "虛擬電廠",
      "能源管理",
      "電池儲存",
      "住宅與商業",
      "工業與公用事業",
    ],
  },
  {
    title: "產品",
    links: ["ColdSUB", "Cold Zero", "ColdOG", "EMS平台", "BMS技術"],
  },
  {
    title: "公司",
    links: ["關於我們", "職業機會", "新聞", "聯繫我們"],
  },
  {
    title: "資源",
    links: ["部落格", "合作夥伴", "新聞中心", "支持"],
  },
  {
    title: "社交",
    links: ["LinkedIn", "Youtube", "Instagram"],
  },
  {
    title: "法律",
    links: ["隱私", "許可證"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer
      className="flex flex-col w-[1440px] items-center gap-16 pt-16 pb-12 px-0 relative flex-[0_0_auto] z-0 bg-[#12211f]"
      data-1-color-modes-mode="dark-mode"
    >
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex-col items-center gap-12 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="inline-flex max-w-screen-md items-center gap-4 flex-[0_0_auto] flex-col relative">
            <h2 className="self-stretch text-[#f5f6f6] text-[length:var(--display-sm-semibold-font-size)] text-center tracking-[var(--display-sm-semibold-letter-spacing)] leading-[var(--display-sm-semibold-line-height)] relative mt-[-1.00px] font-display-sm-semibold font-[number:var(--display-sm-semibold-font-weight)] [font-style:var(--display-sm-semibold-font-style)]">
              讓我們一起建設能源的未來
            </h2>

            <p className="w-fit font-[number:var(--text-xl-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] text-center leading-[var(--text-xl-regular-line-height)] whitespace-nowrap relative font-text-xl-regular tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
              加入數百位創新者，與長庚國際能源一起為更智慧、更具韌性的社區供電。
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-screen-xl items-start gap-12 px-8 py-0 relative w-full flex-[0_0_auto]">
        <nav
          className="flex-wrap items-start gap-[32px_32px] self-stretch w-full flex-[0_0_auto] flex relative"
          aria-label="Footer navigation"
        >
          {footerSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={`${
                sectionIndex === 0
                  ? "inline-flex flex-col min-w-24 items-start gap-4 pl-0 pr-6 py-0 relative flex-[0_0_auto]"
                  : "min-w-24 gap-4 flex-1 grow flex flex-col items-start relative"
              }`}
            >
              <h3 className="self-stretch text-[#b7d8cd] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] relative mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] [font-style:var(--text-sm-semibold-font-style)]">
                {section.title}
              </h3>

              <ul className="gap-3 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
                  >
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
                    >
                      <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex-wrap items-center justify-between gap-[24px_32px] pt-8 pb-0 px-0 self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#2a4540] flex relative">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="flex flex-col w-[111.36px] items-start gap-2.5 relative">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-[111.36px] h-8"
                  alt="Cold Electric Logo"
                  src="https://c.animaapp.com/U7V4C1eZ/img/coldwhite-2@2x.png"
                />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
              © 2025 Cold Electric。版權所有。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
