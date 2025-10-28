import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] z-[5]">
      <div className="flex-col items-center gap-16 pt-24 pb-0 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col max-w-screen-xl items-start gap-8 flex px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="flex-1 mt-[-1.00px] text-[#f5f6f6] text-6xl tracking-[-1.20px] leading-[72px] relative [font-family:'Manrope',Helvetica] font-semibold">
                長庚國際能源：打造更智慧、更安全、更永續的能源未來
              </h1>
              <p className="w-[640px] text-[#dbece6] text-xl leading-[30px] relative [font-family:'Manrope',Helvetica] font-normal tracking-[0]">
                長庚國際能源致力於推動全球能源轉型，透過創新的電池技術、智慧能源管理系統與微電網解決方案，為家庭、企業及社區提供安全、高效且可持續的能源服務。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
