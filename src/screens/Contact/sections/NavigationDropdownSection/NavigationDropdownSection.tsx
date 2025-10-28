import React from "react";

export const NavigationDropdownSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
      <div className="relative self-stretch w-full h-20">
        <header className="flex flex-col w-full h-20 items-center justify-center relative bg-transparent">
          <nav className="flex items-center gap-4 max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto] rounded-lg">
              <img
                className="relative w-[99.74px] h-[15.91px]"
                alt="Text"
                src="https://c.animaapp.com/U7V4C1eZ/img/text-1@2x.png"
              />
              <img
                className="absolute w-[51.47%] h-[37.25%] top-[-50.28%] left-[3.01%]"
                alt=""
                src="https://c.animaapp.com/U7V4C1eZ/img/-294c60ff-4@2x.png"
              />
            </div>
          </nav>
        </header>
      </div>
    </section>
  );
};
