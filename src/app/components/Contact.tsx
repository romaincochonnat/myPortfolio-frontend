import { FC } from "react";
import Image from "next/image";

import Footer from "./Footer";

export const Contact: FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex font-main text-white w-full h-[966px]"
    >
      <div className="w-[400px] h-full flex flex-col gap-[10px]">
        <h2
          id="contact-heading"
          className="font-title font-semibold text-6xl text-center h-[100px]"
        >
          My Contacts
        </h2>
        <div className="flex flex-col gap-[10px] h-full">
          <div className="flex items-center gap-[30px]">
            <Image
              src="/linkedin-logo.webp"
              alt="Linkedin logo"
              width={70}
              height={0}
            />
            <span>Linkedin</span>
          </div>
          <div className="flex items-center gap-[30px]">
            <Image
              src="/github-logo.svg"
              alt="github logo"
              width={70}
              height={0}
            />
            <span>GitHub</span>
          </div>
          <div className="flex items-center gap-[30px]">
            <Image
              src="/gmail-logo.webp"
              alt="gmail logo"
              width={70}
              height={0}
            />
            <span>Gmail</span>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-400px)] h-full flex flex-col flex-wrap">
        <article className="w-1/2 h-full bg-[#8A817C]">eee</article>
        <article className="w-1/2 h-1/2 bg-[#430D79]">fffff</article>
        <article className="w-1/2 h-1/2 bg-[#F4F3EE]">eeee</article>
      </div>
    </section>
  );
};
