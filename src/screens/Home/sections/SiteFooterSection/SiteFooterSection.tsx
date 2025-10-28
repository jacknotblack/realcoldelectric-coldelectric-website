import React from "react";

const footerData = {
  hero: {
    title: "讓我們一起建設能源的未來",
    description:
      "加入數百位創新者，與長庚國際能源一起為更智慧、更具韌性的社區供電。",
  },
  columns: [
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
      links: ["關於我們", "職業", "新聞稿", "新聞", "媒體工具包", "聯絡"],
    },
    {
      title: "資源",
      links: ["部落格", "職業", "合作夥伴", "新聞室", "聯絡", "支持"],
    },
    {
      title: "社交",
      links: ["LinkedIn", "Youtube", "Instagram"],
    },
    {
      title: "法律",
      links: ["條款", "隱私", "Cookies", "許可證"],
    },
  ],
  bottom: {
    logo: "https://c.animaapp.com/U7V4C1eZ/img/coldwhite-3@2x.png",
    privacyText: "隱私權政策",
    copyrightText: "© 2025 長庚國際能源。版權所有。",
  },
};

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer
      className="flex flex-col items-center gap-16 pt-16 pb-12 px-0 relative self-stretch w-full flex-[0_0_auto] bg-[#12211f]"
      data-1-color-modes-mode="dark-mode"
    >
      <div className="flex-col items-start gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex max-w-screen-md items-center gap-4 flex-[0_0_auto] flex-col relative">
            <h2 className="self-stretch mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-sm-semibold-font-size)] text-center tracking-[var(--display-sm-semibold-letter-spacing)] leading-[var(--display-sm-semibold-line-height)] relative font-display-sm-semibold font-[number:var(--display-sm-semibold-font-weight)] [font-style:var(--display-sm-semibold-font-style)]">
              {footerData.hero.title}
            </h2>

            <p className="w-fit text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] text-center leading-[var(--text-xl-regular-line-height)] whitespace-nowrap relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
              {footerData.hero.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col items-start gap-12 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <nav
          className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full flex-[0_0_auto]"
          aria-label="Footer navigation"
        >
          {footerData.columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`${columnIndex === 0 ? "inline-flex flex-col min-w-24 items-start gap-4 pl-0 pr-6 py-0 relative flex-[0_0_auto]" : "min-w-24 gap-4 flex-1 grow flex flex-col items-start relative"}`}
            >
              <h3 className="self-stretch mt-[-1.00px] text-[#b7d8cd] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] relative font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] [font-style:var(--text-sm-semibold-font-style)]">
                {column.title}
              </h3>

              <ul className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                {column.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
                  >
                    <a
                      href="#"
                      className="gap-1.5 inline-flex items-center justify-center relative flex-[0_0_auto] hover:underline focus:outline-none focus:ring-2 focus:ring-[#b7d8cd] focus:ring-offset-2 focus:ring-offset-[#12211f]"
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

      <div className="flex-col items-start gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-wrap items-center justify-between gap-[24px_32px] pt-8 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#2a4540]">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="flex flex-col w-[111.36px] items-start gap-2.5 relative">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-[111.36px] h-8"
                  alt="長庚國際能源標誌"
                  src={footerData.bottom.logo}
                />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
            <a
              href="#"
              className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)] hover:underline focus:outline-none focus:ring-2 focus:ring-[#b7d8cd] focus:ring-offset-2 focus:ring-offset-[#12211f]"
            >
              {footerData.bottom.privacyText}
            </a>

            <p className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
              {footerData.bottom.copyrightText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
