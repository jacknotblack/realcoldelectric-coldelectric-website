import React from "react";

export const OverviewSection = (): JSX.Element => {
  const contentParagraphs = [
    "對於用電問題感到困擾？不知道怎麼計算回本？",
    "與其自己想半天, 就讓我們為您找出最適合案!",
    "我們公司提供了免費評估, 從場地觀察到效益精算, 我們會站在您的角度協助你解",
    "決問題而這一切都是免費的, 現在與我們聯絡吧!",
  ];

  return (
    <section className="flex flex-col items-start gap-[3px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col items-center gap-16 px-0 py-40 relative self-stretch w-full flex-[0_0_auto] bg-[#12211f] rounded-[24px_24px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#30554e]">
        <div className="flex-col items-start gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start flex-1 grow gap-8 relative">
                <img
                  className="relative w-[149.63px] h-[43px] aspect-[3.48]"
                  alt="Company Logo"
                  src="https://c.animaapp.com/U7V4C1eZ/img/colorlightgreen@2x.png"
                />

                <h1 className="relative self-stretch font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] text-[#dbece6] text-[length:var(--display-xl-semibold-font-size)] tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] [font-style:var(--display-xl-semibold-font-style)]">
                  現在預約評估
                </h1>
              </div>

              <div className="flex flex-col w-[714px] items-start gap-8 relative">
                <div className="h-[280px] gap-[30px] flex flex-col items-start">
                  {contentParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-3xl tracking-[0] leading-[38px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <button
                  className="gap-1.5 px-[18px] py-3 bg-[#12211f] border border-solid border-[#30554e] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic cursor-pointer hover:bg-[#1a2d2a] transition-colors"
                  aria-label="聯繫我們"
                >
                  <img
                    className="relative w-5 h-5 aspect-[1]"
                    alt=""
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
      </div>
    </section>
  );
};
