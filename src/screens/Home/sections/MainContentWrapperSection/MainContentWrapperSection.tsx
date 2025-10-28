import React from "react";
import { Link } from "react-router-dom";

interface Feature {
  id: string;
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: "smart-energy-management",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/stars-01.svg",
    iconAlt: "Stars",
    title: "智能能源管理系統控制",
    description: "利用人工智能驅動的負載預測和調度進行實時能源優化。",
  },
  {
    id: "modular-battery-integration",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/zap.svg",
    iconAlt: "Zap",
    title: "模塊化電池集成",
    description:
      "支持 Cold SUB、Cold Zero 和 ColdOG 以實現靈活、可擴展的儲能部署。",
  },
  {
    id: "smart-maintenance-service",
    icon: "https://c.animaapp.com/U7V4C1eZ/img/clock.svg",
    iconAlt: "Clock",
    title: "智慧維運服務承諾",
    description:
      "在台灣地區，我們保證 36 小時內完成現場檢測，並於 72 小時內完成維運處理，確保系統持續穩定運行。",
  },
];

export const MainContentWrapperSection = (): JSX.Element => {
  return (
    <section
      className="flex-col items-start self-stretch w-full flex-[0_0_auto] bg-[#498376] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#30554e] flex relative"
      aria-labelledby="microgrid-section-title"
    >
      <div className="flex-col items-center gap-16 pt-24 pb-40 px-0 bg-[#12211f] flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-wrap items-center gap-[96px_96px] flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
          <header className="flex items-start gap-5 flex-1 grow flex-col relative">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                微電網系統
              </p>

              <h1
                id="microgrid-section-title"
                className="self-stretch text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]"
              >
                利用冷電技術建設韌性的本地電力網絡
              </h1>
            </div>

            <p className="self-stretch text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
              長庚國際能源
              的微電網解決方案使社區、校園和設施能夠獨立於主電網運行——實現更智能的能源使用、提高可靠性，並與太陽能、儲能和電動車基礎設施無縫整合。可擴展、以軟件驅動，並為未來做好準備。
            </p>

            <nav
              className="inline-flex items-start gap-3 relative flex-[0_0_auto]"
              aria-label="微電網系統導航"
            >
              <Link
                className="inline-flex items-center justify-center gap-1.5 px-[18px] py-3 relative flex-[0_0_auto] bg-[#85b378] rounded-xl overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                to="/microgrid"
                aria-label="探索微電網系統詳細資訊"
              >
                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                    探索微電網
                  </span>
                </span>
              </Link>

              <Link
                className="gap-1.5 px-[18px] py-3 bg-[#12211f] rounded-xl overflow-hidden border border-solid border-[#30554e] shadow-shadows-shadow-xs-skeuomorphic inline-flex items-center justify-center relative flex-[0_0_auto]"
                to="/microgrid"
                aria-label="預約現場檢查服務"
              >
                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                    現場檢查
                  </span>
                </span>
              </Link>
            </nav>
          </header>

          <div className="flex flex-col items-start gap-12 relative flex-1 grow">
            {features.map((feature) => (
              <article
                key={feature.id}
                className="flex min-w-60 max-w-[560px] items-start gap-4 relative w-full flex-[0_0_auto]"
              >
                <div
                  className="relative w-12 h-12 bg-[#b7d8cd] rounded-full overflow-hidden shadow-shadows-shadow-xs-skeuomorphic aspect-[1]"
                  aria-hidden="true"
                >
                  <img
                    className="absolute top-3 left-3 w-6 h-6 aspect-[1]"
                    alt={feature.iconAlt}
                    src={feature.icon}
                  />
                </div>

                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="flex items-start pt-2.5 pb-0 px-0 self-stretch w-full flex-col gap-1 relative flex-[0_0_auto]">
                    <h2 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                      {feature.title}
                    </h2>

                    <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
