import React from "react";

export const MeshGradientSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-16 px-0 py-40 relative self-stretch w-full flex-[0_0_auto] z-[1] bg-[#12211f] rounded-[24px_24px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#30554e]">
      <div className="flex-col items-start gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-8 relative flex-1 grow">
              <img
                className="relative w-[149.63px] h-[43px] aspect-[3.48]"
                alt="Color light green"
                src="https://c.animaapp.com/U7V4C1eZ/img/colorlightgreen-1@2x.png"
              />

              <h2 className="relative self-stretch font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] text-[#dbece6] text-[length:var(--display-xl-semibold-font-size)] tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] [font-style:var(--display-xl-semibold-font-style)]">
                您準備好建立您的微電網了嗎？
              </h2>
            </div>

            <div className="flex flex-col items-start gap-8 relative flex-1 grow">
              <p className="self-stretch mt-[-1.00px] font-semibold text-[#b7d8cd] text-3xl leading-[38px] relative [font-family:'Manrope',Helvetica] tracking-[0]">
                無論您是剛開始還是擴展，長庚國際能源
                提供工具、專業知識和技術，幫助您設計一個具有韌性、能夠產生收入的微電網。探索量身定制的諮詢、可下載的資源和虛擬電廠整合的見解，助您推進旅程。
              </p>

              <button className="gap-1.5 px-[18px] py-3 bg-[#12211f] border border-solid border-[#30554e] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic cursor-pointer hover:bg-[#1a2d2a] transition-colors">
                <img
                  className="relative w-5 h-5 aspect-[1]"
                  alt="Edit"
                  src="https://c.animaapp.com/U7V4C1eZ/img/edit-03-1.svg"
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
