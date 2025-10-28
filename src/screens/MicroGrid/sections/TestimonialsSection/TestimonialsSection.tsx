import React from "react";

interface FeatureCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconAlt,
  title,
  description,
}) => {
  return (
    <article className="flex-col min-w-80 flex-1 grow flex items-start gap-4 relative">
      <div
        className="bg-[#4a4d54] rounded-full overflow-hidden relative w-12 h-12 aspect-[1]"
        role="img"
        aria-label={iconAlt}
      >
        <img
          className="absolute top-3 left-3 w-6 h-6 aspect-[1]"
          alt={iconAlt}
          src={icon}
        />
      </div>
      <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
        <h3 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
          {title}
        </h3>
        <p className="self-stretch font-[number:var(--text-md-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative font-text-md-regular tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]">
          {description}
        </p>
      </div>
    </article>
  );
};

export const TestimonialsSection = (): JSX.Element => {
  const features = [
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/building-02-2.svg",
      iconAlt: "Building icon representing market trading",
      title: "自動在開放市場上交易儲存的能源",
      description:
        "智能出價代理掃描實時市場價格並執行買賣訂單——最大化收入，並同時降低價格波動風險。",
    },
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/battery-charging-02.svg",
      iconAlt: "Battery charging icon representing supply and demand balance",
      title: "在地或跨電網平衡供需",
      description:
        "自動調度協調發電、儲存和負載，以匹配消耗與可用資源——確保系統穩定並最小化能源浪費。",
    },
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/layers-three-01.svg",
      iconAlt: "Layers icon representing aggregated microgrids",
      title: "將多個微電網彙聚成虛擬電廠",
      description:
        "統一的協調層將分佈式資產集中為一個可控實體——釋放容量市場、輔助服務及批量交易潛力。",
    },
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/users-check.svg",
      iconAlt: "Users check icon representing community energy sharing",
      title: "激勵社區能源共享",
      description:
        "透明的信用和獎勵計劃激勵參與者貢獻多餘的能源——有效降低成本並強化在地韌性。",
    },
  ];

  return (
    <section className="z-[3] bg-[linear-gradient(180deg,rgba(18,33,31,1)_44%,rgba(32,33,36,1)_100%)] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex-col items-center gap-16 pt-24 pb-40 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
        <header className="flex-col items-start gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-5 flex-[0_0_auto] flex-col relative">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <p className="text-center relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                  虛擬電廠
                </p>
                <h2 className="self-stretch text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  虛擬電廠：您的微電網市場價值
                </h2>
              </div>
              <p className="w-fit font-[number:var(--text-xl-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-xl-regular-font-size)] text-center leading-[var(--text-xl-regular-line-height)] whitespace-nowrap relative font-text-xl-regular tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                一旦您的微電網運行，長庚國際能源的 VPP
                軟體幫助您超越儲存——將您的電力轉化為營收。
              </p>
            </div>
          </div>
        </header>

        <div className="flex-col items-start gap-16 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-16 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-32 relative self-stretch w-full flex-[0_0_auto]">
              {features.slice(0, 2).map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  iconAlt={feature.iconAlt}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            <div className="flex items-start justify-end gap-32 relative self-stretch w-full flex-[0_0_auto]">
              {features.slice(2, 4).map((feature, index) => (
                <FeatureCard
                  key={index + 2}
                  icon={feature.icon}
                  iconAlt={feature.iconAlt}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col items-center -mt-24 flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col items-start flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
          <figure className="relative self-stretch w-full h-[560px]">
            <div className="relative -top-2 left-[calc(50.00%_-_616px)] w-[1232px] h-[826px] flex items-center rounded-3xl border-8 border-solid border-[#12151b]">
              <img
                className="mt-[-266px] h-[560px] mr-4 flex-1 aspect-[1.5] object-cover"
                alt="Virtual power plant dashboard mockup showing energy trading interface"
                src="https://c.animaapp.com/U7V4C1eZ/img/screen-mockup--replace-fill-.png"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
