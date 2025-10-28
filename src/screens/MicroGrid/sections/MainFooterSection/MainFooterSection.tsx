import React from "react";

const footerLinks = [
  {
    title: "解決方案",
    links: [
      { label: "微電網系統", href: "#" },
      { label: "虛擬電廠", href: "#" },
      { label: "能源管理", href: "#" },
      { label: "電池儲存", href: "#" },
      { label: "住宅與商業", href: "#" },
      { label: "工業與公用事業", href: "#" },
    ],
  },
  {
    title: "產品",
    links: [
      { label: "ColdSUB", href: "#" },
      { label: "Cold Zero", href: "#" },
      { label: "ColdOG", href: "#" },
      { label: "EMS平台", href: "#" },
      { label: "BMS技術", href: "#" },
    ],
  },
  {
    title: "公司",
    links: [
      { label: "關於我們", href: "#" },
      { label: "職業機會", href: "#" },
      { label: "新聞", href: "#" },
      { label: "聯繫我們", href: "#" },
    ],
  },
  {
    title: "資源",
    links: [
      { label: "部落格", href: "#" },
      { label: "合作夥伴", href: "#" },
      { label: "新聞中心", href: "#" },
      { label: "支持", href: "#" },
    ],
  },
  {
    title: "社交",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Youtube", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    title: "法律",
    links: [
      { label: "隱私", href: "#" },
      { label: "許可證", href: "#" },
    ],
  },
];

export const MainFooterSection = (): JSX.Element => {
  return (
    <footer
      className="flex flex-col w-[1440px] items-center gap-16 pt-16 pb-12 px-0 relative flex-[0_0_auto] z-0 bg-[#12211f]"
      data-1-color-modes-mode="dark-mode"
      role="contentinfo"
      aria-label="網站頁尾"
    >
      <div className="flex-col items-start gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex max-w-screen-md items-center gap-4 flex-[0_0_auto] flex-col relative">
            <h2 className="self-stretch mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-sm-semibold-font-size)] text-center tracking-[var(--display-sm-semibold-letter-spacing)] leading-[var(--display-sm-semibold-line-height)] relative font-display-sm-semibold font-[number:var(--display-sm-semibold-font-weight)] [font-style:var(--display-sm-semibold-font-style)]">
              讓我們一起建設能源的未來
            </h2>

            <p className="w-fit font-[number:var(--text-xl-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] text-center leading-[var(--text-xl-regular-line-height)] whitespace-nowrap relative font-text-xl-regular tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
              加入數百位創新者，與長庚國際能源一起為更智慧、更具韌性的社區供電。
            </p>
          </div>
        </div>
      </div>

      <nav
        className="flex-col items-start gap-12 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]"
        aria-label="頁尾導航"
      >
        <div className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full flex-[0_0_auto]">
          {footerLinks.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`${
                columnIndex === 0
                  ? "inline-flex flex-col min-w-24 items-start gap-4 pl-0 pr-6 py-0 relative flex-[0_0_auto]"
                  : "min-w-24 gap-4 flex-1 grow flex flex-col items-start relative"
              }`}
            >
              <h3 className="self-stretch mt-[-1.00px] text-[#b7d8cd] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] relative font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] [font-style:var(--text-sm-semibold-font-style)]">
                {column.title}
              </h3>

              <ul className="gap-3 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                {column.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
                  >
                    <a
                      href={link.href}
                      className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto] hover:underline focus:outline-none focus:ring-2 focus:ring-[#b7d8cd] focus:ring-offset-2 focus:ring-offset-[#12211f]"
                    >
                      <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      <div className="flex-col items-start gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-wrap items-center justify-between gap-[24px_32px] pt-8 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#2a4540]">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="flex flex-col w-[111.36px] items-start gap-2.5 relative">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-[111.36px] h-8"
                  alt="Cold Electric 標誌"
                  src="https://c.animaapp.com/U7V4C1eZ/img/coldwhite-4@2x.png"
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
