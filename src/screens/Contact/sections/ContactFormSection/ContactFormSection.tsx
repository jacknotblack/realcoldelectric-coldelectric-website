import React from "react";

interface ContactCard {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  contactInfo: string;
}

export const ContactFormSection = (): JSX.Element => {
  const contactCards: ContactCard[] = [
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/marker-pin-02.svg",
      iconAlt: "Marker pin",
      title: "拜訪我們",
      description: "拜訪我們的總部辦公室。",
      contactInfo: "台灣新北市樹林區威王街55號",
    },
    {
      icon: "https://c.animaapp.com/U7V4C1eZ/img/phone.svg",
      iconAlt: "Phone",
      title: "致電我們",
      description: "週一至週五，上午8點至下午5點。",
      contactInfo: "",
    },
  ];

  return (
    <section className="items-center px-0 py-24 self-stretch w-full flex-[0_0_auto] z-[1] bg-[#12211f] flex flex-col gap-16 relative">
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
        <header className="flex-col items-start gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex items-start gap-5 w-full flex-col max-w-screen-md relative flex-[0_0_auto]">
            <div className="gap-3 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
              <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                聯絡我們
              </p>

              <h1 className="text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative self-stretch font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                我們期待您的來信
              </h1>
            </div>

            <p className="self-stretch text-[#cecfd2] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]">
              我們友好的團隊隨時樂意與您交談。
            </p>
          </div>
        </header>
      </div>

      <div className="flex flex-col max-w-screen-xl items-start gap-16 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex-wrap items-start gap-[24px_24px] self-stretch w-full flex-[0_0_auto] flex relative">
          {contactCards.map((card, index) => (
            <article
              key={index}
              className="min-w-[280px] h-[290px] items-start p-6 flex-1 grow bg-[#ffffff0a] rounded-xl flex flex-col gap-16 relative"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden aspect-[1] bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)]">
                <img
                  className="absolute top-3 left-3 w-6 h-6 aspect-[1]"
                  alt={card.iconAlt}
                  src={card.icon}
                />
              </div>

              <div className="flex-col items-start gap-5 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <h2 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                    {card.title}
                  </h2>

                  <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#808790] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                    {card.description}
                  </p>
                </div>

                {index === 0 ? (
                  <address className="flex gap-1.5 self-stretch w-full items-center justify-center relative flex-[0_0_auto] not-italic">
                    <p className="relative flex-1 mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                      {card.contactInfo}
                    </p>
                  </address>
                ) : (
                  <address className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto] not-italic">
                    <div className="flex flex-col w-[252px] h-11 items-start gap-4">
                      <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#cecfd2] text-base tracking-[0] leading-[14.4px]">
                        <a
                          href="tel:+886226683156"
                          className="[font-family:'Manrope',Helvetica] font-semibold text-[#cecfd2] text-base tracking-[0] leading-[14.4px] hover:underline"
                        >
                          台灣：02-2668-3156
                        </a>
                      </p>

                      <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#cecfd2] text-base tracking-[0] leading-[14.4px]">
                        <a
                          href="tel:+12144049625"
                          className="[font-family:'Manrope',Helvetica] font-semibold text-[#cecfd2] text-base tracking-[0] leading-[14.4px] hover:underline"
                        >
                          美國（中部時間）：214-404-9625
                        </a>
                      </p>
                    </div>
                  </address>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
