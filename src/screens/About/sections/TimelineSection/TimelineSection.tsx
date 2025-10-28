import React from "react";

interface TimelineEvent {
  year: string;
  description: string;
  position: {
    top: string;
    left: string;
  };
  alignment?: "start" | "end";
}

export const TimelineSection = (): JSX.Element => {
  const timelineEvents: TimelineEvent[] = [
    {
      year: "2018年",
      description: "構思 長庚國際能源",
      position: { top: "163px", left: "182px" },
      alignment: "start",
    },
    {
      year: "2019年",
      description: "建立 3MWh 試點工廠",
      position: { top: "163px", left: "592px" },
      alignment: "start",
    },
    {
      year: "2020年",
      description: "首次 EMS 軟體整合",
      position: { top: "370px", left: "833px" },
      alignment: "end",
    },
    {
      year: "2022年",
      description: "Cold Zero 在工業園區部署",
      position: { top: "370px", left: "372px" },
      alignment: "start",
    },
    {
      year: "2024年",
      description: "在台灣首次微電網部署",
      position: { top: "571px", left: "292px" },
      alignment: "start",
    },
    {
      year: "2025年",
      description: ">350MWh 部署",
      position: { top: "571px", left: "751px" },
      alignment: "start",
    },
    {
      year: "2026年",
      description: "新廠房開幕，年產能達 3 GWh",
      position: { top: "777px", left: "746px" },
      alignment: "start",
    },
    {
      year: "2028年",
      description: "廠房擴建至年產能 6 GWh",
      position: { top: "777px", left: "379px" },
      alignment: "start",
    },
  ];

  return (
    <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] z-[1] bg-[#498376]">
      <div className="flex-col items-center gap-16 pt-24 pb-32 px-0 bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(18,33,31,1)_100%)] flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-screen-xl items-center justify-center gap-[210px] px-8 py-0 relative w-full flex-[0_0_auto] z-[1]">
          <header className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="self-stretch text-[#f5f6f6] text-5xl text-center tracking-[-0.96px] leading-[60px] relative mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold">
                從本地儲存到全球系統。
              </h2>
            </div>
          </header>

          <img
            className="relative w-[946.16px] h-[724.2px]"
            alt="Timeline visualization path"
            src="https://c.animaapp.com/U7V4C1eZ/img/vector-857--stroke-.svg"
            role="presentation"
          />

          {timelineEvents.map((event, index) => (
            <article
              key={`timeline-event-${index}`}
              className={`${event.alignment === "end" ? "inline-flex flex-col items-end" : "inline-flex flex-col items-start"} justify-center gap-3 absolute`}
              style={{ top: event.position.top, left: event.position.left }}
            >
              <div className="inline-flex items-center justify-center flex-[0_0_auto] flex-col relative">
                <div
                  className={`${event.alignment === "end" ? "inline-flex" : event.description.includes("新廠房") ? "flex" : "inline-flex"} items-start gap-2 px-4 py-1 relative ${event.alignment === "end" ? "flex-[0_0_auto]" : event.description.includes("新廠房") ? "self-stretch w-full flex-[0_0_auto]" : "flex-[0_0_auto]"} bg-[#263b37] rounded-full`}
                >
                  <time
                    dateTime={event.year.replace("年", "")}
                    className="relative w-fit mt-[-1.00px] font-display-sm-semibold font-[number:var(--display-sm-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-sm-semibold-font-size)] tracking-[var(--display-sm-semibold-letter-spacing)] leading-[var(--display-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--display-sm-semibold-font-style)]"
                  >
                    {event.year}
                  </time>
                </div>
              </div>

              <p
                className={`relative ${event.description.includes("新廠房") ? "self-stretch" : "w-fit"} font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] ${event.description.includes("新廠房") ? "" : "whitespace-nowrap"} [font-style:var(--text-lg-semibold-font-style)]`}
              >
                {event.description}
              </p>
            </article>
          ))}
        </div>

        <img
          className="absolute top-0 left-0 w-[1440px] h-[1080px] z-0"
          alt=""
          src="https://c.animaapp.com/U7V4C1eZ/img/background-pattern-5.svg"
          role="presentation"
        />
      </div>
    </section>
  );
};
