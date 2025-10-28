import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-16 px-0 py-40 relative self-stretch w-full flex-[0_0_auto] bg-[#12211f] rounded-[24px_24px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#30554e]">
      <div className="flex-col items-start gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start flex-1 grow gap-8 relative">
              <img
                className="relative w-[149.63px] h-[43px] aspect-[3.48]"
                alt="Color light green"
                src="https://c.animaapp.com/U7V4C1eZ/img/colorlightgreen@2x.png"
              />

              <h2 className="relative self-stretch font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] text-[#dbece6] text-[length:var(--display-xl-semibold-font-size)] tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] [font-style:var(--display-xl-semibold-font-style)]">
                準備好開始了嗎？
              </h2>
            </div>

            <div className="flex flex-col items-start flex-1 grow gap-8 relative">
              <p className="self-stretch mt-[-1.00px] font-semibold text-[#b7d8cd] text-3xl leading-[38px] relative [font-family:'Manrope',Helvetica] tracking-[0]">
                無論您是在尋找家用備用電源、商業能源優化，還是電網規模的儲能——長庚國際能源都能提供適合您需求的解決方案。立即聯繫我們的團隊，開始您的能源轉型之旅。
              </p>

              <button className="gap-1.5 px-[18px] py-3 bg-[#12211f] border border-solid border-[#30554e] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic cursor-pointer hover:bg-[#1a2d2a] transition-colors">
                <img
                  className="relative w-5 h-5 aspect-[1]"
                  alt="Edit"
                  src="https://c.animaapp.com/U7V4C1eZ/img/edit-03.svg"
                />

                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                    聯繫我們
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
