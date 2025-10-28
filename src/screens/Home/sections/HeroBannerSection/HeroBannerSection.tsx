import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "解決方案", hasDropdown: true },
  { label: "產品服務", hasDropdown: true, to: "/products" },
  { label: "賦能產業", hasDropdown: true },
  { label: "資源中心", hasDropdown: true },
  { label: "品牌故事", hasDropdown: false, to: "/about" },
];

const heroChips = [
  {
    image: "https://c.animaapp.com/U7V4C1eZ/img/futre@2x.png",
    rotation: "rotate-[1.00deg]",
    imageRotation: "rotate-[-1.00deg]",
    gradient:
      "bg-[linear-gradient(180deg,rgba(210,235,248,1)_0%,rgba(220,250,230,1)_100%)]",
    width: "w-[53.9px]",
    height: "h-[52.92px]",
    alt: "Futre",
  },
  {
    image: "https://c.animaapp.com/U7V4C1eZ/img/battery@2x.png",
    rotation: "rotate-[-3.00deg]",
    imageRotation: "rotate-[3.00deg]",
    gradient:
      "bg-[linear-gradient(180deg,rgba(98,157,143,1)_0%,rgba(42,69,64,1)_100%)]",
    width: "w-[61px]",
    height: "h-[61px]",
    alt: "Battery",
    imagePosition: "absolute -top-px -left-px",
  },
  {
    image: "https://c.animaapp.com/U7V4C1eZ/img/grid@2x.png",
    rotation: "rotate-[-2.28deg]",
    imageRotation: "rotate-[2.28deg]",
    gradient:
      "bg-[linear-gradient(180deg,rgba(210,235,248,1)_0%,rgba(229,231,232,1)_100%)]",
    width: "w-[60px]",
    height: "h-[60px]",
    alt: "Grid",
    imagePosition: "absolute -top-px -left-px",
  },
  {
    image: "https://c.animaapp.com/U7V4C1eZ/img/comm@2x.png",
    rotation: "rotate-[2.62deg]",
    imageRotation: "rotate-[-2.62deg]",
    gradient:
      "bg-[linear-gradient(180deg,rgba(210,235,248,1)_0%,rgba(220,250,230,1)_100%)]",
    width: "w-14",
    height: "h-14",
    alt: "Comm",
  },
];

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] rounded-[0px_0px_24px_24px] overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]">
      <div className="relative self-stretch w-full h-20 z-[2]">
        <header className="h-20 items-center justify-center bg-transparent flex flex-col w-full relative">
          <div className="items-center gap-4 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
            <Link
              to="/"
              className="flex-col items-start gap-1 inline-flex justify-center relative flex-[0_0_auto] rounded-lg"
              aria-label="Home"
            >
              <img
                className="relative w-[99.74px] h-[15.91px]"
                alt="Company Logo"
                src="https://c.animaapp.com/U7V4C1eZ/img/text@2x.png"
              />
              <img
                className="absolute w-[51.47%] h-[37.25%] top-[-50.28%] left-[3.01%]"
                alt=""
                src="https://c.animaapp.com/U7V4C1eZ/img/-294c60ff-8@2x.png"
              />
            </Link>

            <nav
              className="flex items-center gap-5 relative flex-1 grow"
              aria-label="Main navigation"
            >
              <div className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                {navItems.map((item, index) =>
                  item.to ? (
                    <Link
                      key={index}
                      to={item.to}
                      className="items-center gap-0.5 px-1.5 py-1 overflow-hidden inline-flex justify-center relative flex-[0_0_auto] rounded-lg"
                    >
                      <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                        <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                          {item.label}
                        </span>
                      </span>
                      {item.hasDropdown && (
                        <img
                          className="relative w-4 h-4 aspect-[1]"
                          alt=""
                          src="https://c.animaapp.com/U7V4C1eZ/img/chevron-down-37.svg"
                        />
                      )}
                    </Link>
                  ) : (
                    <button
                      key={index}
                      className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden"
                      aria-haspopup={item.hasDropdown}
                      aria-expanded="false"
                    >
                      <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                        <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                          {item.label}
                        </span>
                      </span>
                      {item.hasDropdown && (
                        <img
                          className="relative w-4 h-4 aspect-[1]"
                          alt=""
                          src="https://c.animaapp.com/U7V4C1eZ/img/chevron-down-37.svg"
                        />
                      )}
                    </button>
                  ),
                )}
              </div>
            </nav>

            <div className="gap-3 inline-flex items-center relative flex-[0_0_auto]">
              <button
                className="gap-1 px-3.5 py-2.5 bg-[#263b37] rounded-xl overflow-hidden border border-solid border-[#30554e] shadow-shadows-shadow-xs-skeuomorphic inline-flex items-center justify-center relative flex-[0_0_auto]"
                aria-label="Language selector"
              >
                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                    繁體中文
                  </span>
                </span>
                <img
                  className="relative w-5 h-5 aspect-[1]"
                  alt=""
                  src="https://c.animaapp.com/U7V4C1eZ/img/chevron-selector-vertical.svg"
                />
              </button>

              <Link
                to="/contact"
                className="gap-1 px-3.5 py-2.5 bg-[#85b378] rounded-xl overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic inline-flex items-center justify-center relative flex-[0_0_auto] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-white text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                    聯繫我們
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </header>
      </div>

      <div className="items-start self-stretch flex-[0_0_auto] z-[1] flex flex-col w-full relative">
        <div className="flex-col items-center pt-24 pb-0 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-center gap-8 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex max-w-screen-lg items-center gap-6 w-full flex-[0_0_auto] flex-col relative">
                <div className="items-center gap-4 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                    <h1 className="self-stretch mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-xl-semibold-font-size)] text-center tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] relative font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] [font-style:var(--display-xl-semibold-font-style)]">
                      推動更智能的去中心化
                    </h1>

                    <div className="inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]">
                      <span className="w-fit mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-xl-semibold-font-size)] text-center tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] whitespace-nowrap relative font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] [font-style:var(--display-xl-semibold-font-style)]">
                        能源未來
                      </span>

                      <div className="flex items-center justify-center rotate-[1.00deg] bg-[linear-gradient(180deg,rgba(210,235,248,1)_0%,rgba(220,250,230,1)_100%)] w-[57.6px] h-[57.6px] relative rounded-[14px] overflow-hidden shadow-chip-shadow">
                        <img
                          className="relative w-[53.9px] h-[52.92px] rotate-[-1.00deg] aspect-[1] object-cover"
                          alt=""
                          src="https://c.animaapp.com/U7V4C1eZ/img/futre@2x.png"
                        />
                      </div>

                      <span className="w-fit mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-xl-semibold-font-size)] text-center tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] whitespace-nowrap relative font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] [font-style:var(--display-xl-semibold-font-style)]">
                        {" "}
                        — 一個電池
                      </span>

                      <div className="rotate-[-3.00deg] bg-[linear-gradient(180deg,rgba(98,157,143,1)_0%,rgba(42,69,64,1)_100%)] w-[57.6px] h-[57.6px] relative rounded-[14px] overflow-hidden shadow-chip-shadow">
                        <img
                          className="absolute -top-px -left-px w-[61px] h-[61px] rotate-[3.00deg] aspect-[1.02]"
                          alt=""
                          src="https://c.animaapp.com/U7V4C1eZ/img/battery@2x.png"
                        />
                      </div>

                      <span className="w-fit mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-xl-semibold-font-size)] text-center tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] whitespace-nowrap relative font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] [font-style:var(--display-xl-semibold-font-style)]">
                        ，一個
                      </span>
                    </div>

                    <div className="inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]">
                      <span className="w-fit mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-xl-semibold-font-size)] text-center tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] whitespace-nowrap relative font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] [font-style:var(--display-xl-semibold-font-style)]">
                        電網
                      </span>

                      <div className="rotate-[-2.28deg] bg-[linear-gradient(180deg,rgba(210,235,248,1)_0%,rgba(229,231,232,1)_100%)] w-[57.6px] h-[57.6px] relative rounded-[14px] overflow-hidden shadow-chip-shadow">
                        <img
                          className="absolute -top-px -left-px w-[60px] h-[60px] rotate-[2.28deg] aspect-[1.02]"
                          alt=""
                          src="https://c.animaapp.com/U7V4C1eZ/img/grid@2x.png"
                        />
                      </div>

                      <span className="w-fit mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-xl-semibold-font-size)] text-center tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] whitespace-nowrap relative font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] [font-style:var(--display-xl-semibold-font-style)]">
                        ，一個社區
                      </span>

                      <div className="flex items-center justify-center rotate-[2.62deg] bg-[linear-gradient(180deg,rgba(210,235,248,1)_0%,rgba(220,250,230,1)_100%)] w-[57.6px] h-[57.6px] relative rounded-[14px] overflow-hidden shadow-chip-shadow">
                        <img
                          className="relative w-14 h-14 rotate-[-2.62deg] aspect-[1] object-cover"
                          alt=""
                          src="https://c.animaapp.com/U7V4C1eZ/img/comm@2x.png"
                        />
                      </div>

                      <span className="w-fit mt-[-1.00px] text-[#f5f6f6] text-[length:var(--display-xl-semibold-font-size)] text-center tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] whitespace-nowrap relative font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] [font-style:var(--display-xl-semibold-font-style)]">
                        一次。
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[#cecfd2] text-[length:var(--text-xl-regular-font-size)] text-center leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                  先進的電池系統、智能能源軟件和人工智慧驅動的微電網解決方案——全在一個平台上。
                </p>
              </div>

              <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
                <button className="inline-flex items-center justify-center gap-1.5 px-[18px] py-3 relative flex-[0_0_auto] bg-[#85b378] rounded-xl overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                      探索產品
                    </span>
                  </span>
                </button>

                <button className="gap-1.5 px-[18px] py-3 bg-[#12211f] rounded-xl overflow-hidden border border-solid border-[#30554e] shadow-shadows-shadow-xs-skeuomorphic inline-flex items-center justify-center relative flex-[0_0_auto]">
                  <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                      發現解決方案
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col items-center px-0 py-24 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative max-w-[960px] w-full max-h-[540px] rounded-xl overflow-hidden border-[0.5px] border-solid border-[#0000001a] shadow-shadows-shadow-3xl aspect-[1.78] bg-[url(https://c.animaapp.com/U7V4C1eZ/img/video-player-16-9.png)] bg-cover bg-[50%_50%]">
                <div className="flex flex-col w-full items-start pt-12 pb-6 px-8 absolute left-0 bottom-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)]">
                  <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <button aria-label="Play/Pause">
                      <img
                        className="relative flex-[0_0_auto]"
                        alt=""
                        src="https://c.animaapp.com/U7V4C1eZ/img/-video-action-button.svg"
                      />
                    </button>

                    <div className="flex w-[84px] items-center pl-0 pr-2 py-0 relative rounded-md">
                      <button aria-label="Mute/Unmute">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt=""
                          src="https://c.animaapp.com/U7V4C1eZ/img/-video-action-button-1.svg"
                        />
                      </button>

                      <div className="relative flex-1 grow h-1 bg-[#0c0e124c] rounded-full">
                        <div className="w-[calc(100%_-_8px)] h-1 flex items-center justify-end bg-white rounded-full">
                          <button
                            className="h-3 w-3 bg-white rounded-full"
                            aria-label="Volume slider"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-2 py-0 relative flex-1 grow">
                      <time className="relative w-9 mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-white text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] [font-style:var(--text-xs-semibold-font-style)]">
                        02:08
                      </time>

                      <div className="relative flex-1 grow h-2 bg-[#0c0e124c] rounded-full backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
                        <div className="absolute w-[67.52%] h-full top-0 left-0 bg-white rounded-full opacity-30" />
                        <div className="absolute w-[25.48%] h-full top-0 left-0 bg-white rounded-full" />
                      </div>

                      <time className="relative w-[42px] mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-white text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] [font-style:var(--text-xs-semibold-font-style)]">
                        -06:18
                      </time>

                      <div className="flex flex-col w-40 items-center gap-2 absolute right-[45px] bottom-[-9px]">
                        <div className="flex flex-col items-start flex-[0_0_auto] mt-[-2.00px] ml-[-2.00px] mr-[-2.00px] border-2 border-solid border-white shadow-shadows-shadow-xl relative self-stretch w-full rounded-lg">
                          <div className="border-[0.5px] border-solid border-[#0000001a] aspect-[1.78] bg-[url(https://c.animaapp.com/U7V4C1eZ/img/video-preview-16-9@2x.png)] bg-cover bg-[50%_50%] relative self-stretch w-full rounded-lg" />
                        </div>

                        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                          <time className="relative w-9 mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-white text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] [font-style:var(--text-xs-semibold-font-style)]">
                            06:48
                          </time>

                          <img
                            className="relative w-px h-[13px]"
                            alt=""
                            src="https://c.animaapp.com/U7V4C1eZ/img/divider.svg"
                          />

                          <time className="relative w-9 h-[18px] mt-[-1.00px] opacity-70 font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-white text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                            08:24
                          </time>
                        </div>

                        <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                          <img
                            className="relative w-px h-[33px] mt-[-0.50px] mb-[-0.50px]"
                            alt=""
                            src="https://c.animaapp.com/U7V4C1eZ/img/indicator-line.svg"
                          />
                          <img
                            className="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_8px)] w-5 h-5"
                            alt=""
                            src="https://c.animaapp.com/U7V4C1eZ/img/cursor.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      className="flex w-8 h-8 items-center justify-center p-2 relative rounded-md"
                      aria-label="Playback speed"
                    >
                      <span className="relative w-fit mt-[-2.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-white text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                        1
                      </span>
                      <img
                        className="relative w-2 h-2"
                        alt=""
                        src="https://c.animaapp.com/U7V4C1eZ/img/playback-x.svg"
                      />
                    </button>

                    <button aria-label="Settings">
                      <img
                        className="relative flex-[0_0_auto]"
                        alt=""
                        src="https://c.animaapp.com/U7V4C1e
Z/img/-video-action-button-2.svg"
                      />
                    </button>

                    <button aria-label="Fullscreen">
                      <img
                        className="relative flex-[0_0_auto]"
                        alt=""
                        src="https://c.animaapp.com/U7V4C1eZ/img/-video-action-button-3.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute w-[1360px] h-[1304px] top-0 left-20 z-0"
        alt=""
        src="https://c.animaapp.com/U7V4C1eZ/img/lines@2x.png"
      />
    </section>
  );
};
