import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  phoneCountry: string;
  phoneNumber: string;
  message: string;
}

export const MainHeaderSection = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    phoneCountry: "美國",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="gap-16 px-0 py-24 self-stretch flex-[0_0_auto] z-[3] flex flex-col w-full items-center relative">
      <div className="flex flex-col max-w-screen-xl items-start gap-3 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="min-w-[480px] max-w-screen-md gap-10 flex-1 grow flex flex-col items-start relative">
            <h1 className="mt-[-1.00px] text-[#f5f6f6] text-4xl tracking-[-0.72px] leading-[44px] relative self-stretch [font-family:'Manrope',Helvetica] font-semibold">
              無論您是在尋找產品演示、合作機會，還是想了解更多——我們都期待您的來信。
            </h1>
          </div>

          <div className="items-center gap-16 flex-1 grow flex relative">
            <div className="flex items-start justify-center px-8 py-0 relative flex-1 grow">
              <form
                onSubmit={handleSubmit}
                className="flex-col max-w-[480px] items-start gap-12 flex-1 grow flex relative"
              >
                <div className="gap-8 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="gap-6 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex-col items-start gap-1.5 flex-1 grow flex relative">
                        <label
                          htmlFor="firstName"
                          className="flex-col items-start gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative"
                        >
                          <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
                            <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#cecfd2] text-sm tracking-[0] leading-5 whitespace-nowrap">
                              名字
                            </span>
                            <span
                              className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#808790] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]"
                              aria-label="必填"
                            >
                              *
                            </span>
                          </div>
                          <div className="items-center gap-2 px-3.5 py-2.5 self-stretch w-full flex-[0_0_auto] bg-[#263b37] rounded-lg border border-solid border-[#4a4d54] shadow-shadows-shadow-xs flex relative">
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="名字"
                              required
                              className="flex-1 mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#8bbdaf] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)] bg-transparent border-none outline-none"
                            />
                          </div>
                        </label>
                      </div>

                      <div className="flex-col items-start gap-1.5 flex-1 grow flex relative">
                        <label
                          htmlFor="lastName"
                          className="flex-col items-start gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative"
                        >
                          <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
                            <span className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                              姓氏
                            </span>
                            <span
                              className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#808790] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]"
                              aria-label="必填"
                            >
                              *
                            </span>
                          </div>
                          <div className="items-center gap-2 px-3.5 py-2.5 self-stretch w-full flex-[0_0_auto] bg-[#263b37] rounded-lg border border-solid border-[#30554e] shadow-shadows-shadow-xs flex relative">
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="姓氏"
                              required
                              className="flex-1 mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#8bbdaf] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)] bg-transparent border-none outline-none"
                            />
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="flex-col items-start gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative">
                      <label
                        htmlFor="email"
                        className="flex-col items-start gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative"
                      >
                        <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
                          <span className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                            電子郵件
                          </span>
                          <span
                            className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#808790] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]"
                            aria-label="必填"
                          >
                            *
                          </span>
                        </div>
                        <div className="items-center gap-2 px-3.5 py-2.5 self-stretch w-full flex-[0_0_auto] bg-[#263b37] rounded-lg border border-solid border-[#30554e] shadow-shadows-shadow-xs flex relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@company.com"
                            required
                            className="flex-1 mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#8bbdaf] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)] bg-transparent border-none outline-none"
                          />
                        </div>
                      </label>
                    </div>

                    <div className="flex-col items-start gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative">
                      <label
                        htmlFor="subject"
                        className="flex-col items-start gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative"
                      >
                        <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
                          <span className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                            主題
                          </span>
                          <span
                            className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#808790] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]"
                            aria-label="必填"
                          >
                            *
                          </span>
                        </div>
                        <div className="items-start self-stretch w-full flex-[0_0_auto] bg-[#263b37] rounded-lg border border-solid border-[#30554e] shadow-shadows-shadow-xs flex relative">
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                subject: e.target.value,
                              }))
                            }
                            required
                            className="items-center gap-2 pl-3.5 pr-0 py-2.5 flex-1 grow flex relative bg-transparent border-none outline-none font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#8bbdaf] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]"
                          >
                            <option value="">選擇主題</option>
                            <option value="demo">產品演示</option>
                            <option value="partnership">合作機會</option>
                            <option value="inquiry">一般查詢</option>
                            <option value="support">技術支援</option>
                          </select>
                          <div className="inline-flex items-center gap-0.5 px-3.5 py-2.5 relative self-stretch flex-[0_0_auto] pointer-events-none">
                            <img
                              className="relative w-4 h-4 aspect-[1]"
                              alt="Chevron down"
                              src="https://c.animaapp.com/U7V4C1eZ/img/chevron-down-9.svg"
                            />
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="flex-col items-start gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative">
                      <label
                        htmlFor="phoneNumber"
                        className="flex-col items-start gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative"
                      >
                        <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
                          <span className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                            電話號碼
                          </span>
                        </div>
                        <div className="items-start self-stretch w-full flex-[0_0_auto] bg-[#263b37] rounded-lg border border-solid border-[#30554e] shadow-shadows-shadow-xs flex relative">
                          <div className="inline-flex items-center gap-0.5 pl-3.5 pr-0 py-2.5 relative self-stretch flex-[0_0_auto]">
                            <select
                              name="phoneCountry"
                              value={formData.phoneCountry}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  phoneCountry: e.target.value,
                                }))
                              }
                              className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#8bbdaf] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)] bg-transparent border-none outline-none"
                            >
                              <option value="美國">美國</option>
                              <option value="台灣">台灣</option>
                              <option value="中國">中國</option>
                              <option value="香港">香港</option>
                            </select>
                            <img
                              className="relative w-4 h-4 aspect-[1]"
                              alt="Chevron down"
                              src="https://c.animaapp.com/U7V4C1eZ/img/chevron-down-9.svg"
                            />
                          </div>
                          <div className="flex items-center gap-2 pl-3 pr-3.5 py-2.5 relative flex-1 grow">
                            <input
                              type="tel"
                              id="phoneNumber"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              placeholder="+1 (555) 000-0000"
                              className="flex-1 mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#8bbdaf] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)] bg-transparent border-none outline-none"
                            />
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="flex flex-col h-40 items-start gap-1.5 relative self-stretch w-full">
                      <label
                        htmlFor="message"
                        className="flex flex-col items-start gap-1.5 relative flex-1 self-stretch w-full grow"
                      >
                        <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                          <span className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                            訊息
                          </span>
                          <span
                            className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#808790] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]"
                            aria-label="必填"
                          >
                            *
                          </span>
                        </div>
                        <div className="items-start gap-2 px-3.5 py-3 flex-1 self-stretch w-full grow bg-[#263b37] rounded-lg overflow-hidden border border-solid border-[#30554e] shadow-shadows-shadow-xs flex relative">
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="請給我們留言..."
                            required
                            className="flex-1 self-stretch mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#8bbdaf] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)] bg-transparent border-none outline-none resize-none"
                          />
                          <img
                            className="absolute right-1.5 bottom-1.5 w-3 h-3 pointer-events-none"
                            alt="Resize handle"
                            src="https://c.animaapp.com/U7V4C1eZ/img/resize-handle.svg"
                          />
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <button
                      type="submit"
                      className="flex gap-1.5 px-[18px] py-3 self-stretch w-full bg-[#85b378] rounded-xl overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative flex-[0_0_auto] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer hover:bg-[#7aa56d] active:bg-[#6f9662] transition-colors"
                    >
                      <div className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                        <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                          開始使用
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
