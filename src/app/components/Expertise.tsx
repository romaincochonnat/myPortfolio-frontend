import { FC } from "react";

import Image from "next/image";

export const Expertise: FC = () => {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="flex flex-col gap-[32px] py-[60px] items-center w-full lg:w-full  font-main text-lg lg:text-2xl"
    >
      <h2
        id="expertise-heading"
        className="font-title font-semibold text-4xl lg:text-6xl text-white text-center"
      >
        My Expertise
      </h2>
      <div className="w-full self-start lg:self-auto overflow-x-scroll lg:overflow-x-auto">
        <div className="flex px-10 gap-[10px] w-[1100px] lg:w-full items-stretch text-white ">
          <article className="relative w-1/3  flex flex-col gap-[31px] lg:px-[48px] pr-[24px] pl-[48px] pt-[24px] pb-[24px] lg:pb-[48px] border-2 rounded-xl border-accent">
            <h3 className="font-title font-semibold text-3xl lg:text-5xl  tracking-tight">
              Software Development
            </h3>
            <p className="text-[#BCB8B1]">
              Experienced in OOP : Java, JavaScript, TypeScript
            </p>
            <div className="absolute top-[24px] left-[-39px]">
              <Image
                src="/software-logo.png"
                alt="software engineer logo"
                width={77}
                height={70}
              />
            </div>
          </article>

          <article className="relative w-1/3  flex flex-col gap-[31px] lg:px-[48px] pr-[24px] pl-[48px] pt-[24px] pb-[24px] lg:pb-[48px] border-2 rounded-xl border-accent">
            <h3 className="font-title font-semibold text-3xl lg:text-5xl tracking-tight">
              Frontend Dev React, Next
            </h3>
            <p className="text-[#BCB8B1]">
              Expertise in creating responsive, user-friendly web interfaces
              with a strong focus on performance and user experience.
            </p>
            <div className="absolute top-[24px] left-[-39px]">
              <Image
                src="/react-logo.png"
                alt="React logo"
                width={77}
                height={0}
              />
            </div>
          </article>

          <article className="relative w-1/3  flex flex-col gap-[31px] lg:px-[48px] pr-[24px] pl-[48px] pt-[24px] pb-[24px] lg:pb-[48px] border-2 rounded-xl border-accent">
            <h3 className="font-title font-semibold text-3xl lg:text-5xl tracking-tight">
              Building Info Modeling
            </h3>
            <p className="text-[#BCB8B1]">
              Experienced in integrating 3D models and data to improve
              collaboration and decision-making in construction engineering{" "}
            </p>
            <div className="absolute top-[24px] left-[-39px]">
              <Image
                src="/bim-logo.png"
                alt="BIM logo"
                width={77}
                height={70}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
