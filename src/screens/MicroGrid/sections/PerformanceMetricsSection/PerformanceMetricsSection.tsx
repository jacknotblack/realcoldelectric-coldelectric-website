import React from "react";

interface MetricData {
  value: string;
  description: string;
}

const metricsData: MetricData[] = [
  {
    value: "+3,000",
    description: "支持的微電網",
  },
  {
    value: "超過1.2M千瓦時",
    description: "通過冷電力虛擬電廠交易",
  },
  {
    value: "24/7",
    description: "在關鍵負載上與冷零度保持正常運行",
  },
  {
    value: "18%",
    description: "工業試點項目的成本降低",
  },
  {
    value: "ISO, CE",
    description: "通過電網整合和合規性認證",
  },
];

export const PerformanceMetricsSection = (): JSX.Element => {
  return (
    <section className="flex-col items-start gap-2.5 px-0 py-px z-[2] flex relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col items-center gap-16 px-0 py-24 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]">
        <div className="flex-col items-start gap-8 z-[2] flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex max-w-screen-md items-center gap-5 w-full flex-[0_0_auto] flex-col relative">
              <div className="items-center gap-6 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="self-stretch mt-[-1.00px] text-[#f5f6f6] text-4xl text-center tracking-[-0.72px] leading-[44px] relative [font-family:'Manrope',Helvetica] font-semibold">
                  成功指標
                </h2>
              </div>

              <p className="self-stretch font-[number:var(--text-xl-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] text-center leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                以數據為依據，推進城市清潔能源發展。
              </p>
            </div>
          </div>
        </div>

        <div className="flex-col items-center gap-16 z-[1] flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="inline-flex items-start gap-16 relative flex-[0_0_auto] ml-[-114.00px] mr-[-114.00px]">
            {metricsData.map((metric, index) => (
              <article
                key={index}
                className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]"
              >
                <div className="inline-flex flex-col items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-xl-semibold-font-size)] text-center tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] whitespace-nowrap [font-style:var(--display-xl-semibold-font-style)]">
                    {metric.value}
                  </div>

                  <div className="inline-flex items-center flex-col gap-1 relative flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-sm-semibold-font-size)] text-center tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
                      {metric.description}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <img
          className="absolute top-0 left-0 w-[1440px] h-[448px] z-0"
          alt=""
          src="https://c.animaapp.com/U7V4C1eZ/img/background-pattern-10.png"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
