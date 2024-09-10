import { FC } from "react";

import Image from "next/image";

export const Experience: FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="flex flex-col items-center w-full font-main text-white text-2xl "
    >
      <h2
        id="experience-heading"
        className="font-title font-semibold text-6xl text-center"
      >
        My Experiences
      </h2>
      <div className="flex flex-col gap-[10px]">
        <article className="flex flex-col gap-[30px] w-[1000px] h-[210px] px-[48px] pt-[24px] pb-[48px]">
          <div className="flex justify-between w-full py-[10px] px-[20px] font-title font-semibold text-3xl bg-accent rounded-lg">
            <h4 className="inline-block ">Software Development</h4>
            <span>2023-Present</span>
          </div>
          <p className=" w-full py-[10px] px-[20px] bg-[#241D41] rounded-lg">
            Experienced in OOP : Python, Java, JavaScript, TypeScript
          </p>
        </article>
        <article className="flex flex-col gap-[30px] w-[1000px] h-[210px] px-[48px] pt-[24px] pb-[48px]">
          <div className="flex justify-between w-full py-[10px] px-[20px] font-title font-semibold text-3xl bg-[#430D79] rounded-lg">
            <h4 className="inline-block ">SInnovation Technical Support</h4>
            <span>2022-2023</span>
          </div>
          <p className=" w-full py-[10px] px-[20px] bg-[#241D41] rounded-lg">
            Experienced in OOP : Python, Java, JavaScript, TypeScript
          </p>
        </article>
        <article className="flex flex-col gap-[30px] w-[1000px] h-[210px] px-[48px] pt-[24px] pb-[48px]">
          <div className="flex justify-between w-full py-[10px] px-[20px] font-title font-semibold text-3xl bg-[#430D79] rounded-lg">
            <h4 className="inline-block ">Construction Technical Support</h4>
            <span>2018-2022</span>
          </div>
          <p className=" w-full py-[10px] px-[20px] bg-[#241D41] rounded-lg">
            Experienced in OOP : Python, Java, JavaScript, TypeScript
          </p>
        </article>
        <article className="flex flex-col gap-[30px] w-[1000px] h-[210px] px-[48px] pt-[24px] pb-[48px]">
          <div className="flex items-center gap-5 w-full py-[10px] px-[20px] font-title font-semibold text-3xl rounded-lg">
            <h4 className="inline-block ">My CV</h4>
            <a href="/monCV.pdf" target="_blank">
              <Image
                src="/logo-pdf.png"
                alt="software engineer logo"
                width={75}
                height={75}
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
