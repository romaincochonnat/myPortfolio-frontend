import { FC } from "react";

import Image from "next/image";

export const Expertise: FC = () => {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="flex flex-col gap-[32px] p-[60px] items-center w-full"
    >
      <h2
        id="expertise-heading"
        className="font-title font-semibold text-6xl text-white text-center"
      >
        My Expertise
      </h2>
      <div className="flex gap-[10px] w-full items-stretch text-white">
        <article className="relative w-1/3  flex flex-col gap-[31px] px-[48px] pt-[24px] pb-[48px] border-2 rounded-xl border-accent">
          <h3 className="font-title font-semibold text-5xl  tracking-tight">
            Software Development
          </h3>
          <p className="font-main font- text-2xl  text-[#BCB8B1]">
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

        <article className="relative w-1/3  flex flex-col gap-[31px] px-[48px] pt-[24px] pb-[48px] border-2 rounded-xl border-accent">
          <h3 className="font-title font-semibold text-5xl tracking-tight">
            Frontend Dev React, Next
          </h3>
          <p className="font-main font- text-2xl text-[#BCB8B1]">
            Expertise in creating responsive, user-friendly web interfaces with
            a strong focus on performance and user experience.
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

        <article className="relative w-1/3  flex flex-col gap-[31px] px-[48px] pt-[24px] pb-[48px] border-2 rounded-xl border-accent">
          <h3 className="font-title font-semibold text-5xl tracking-tight">
            Building Info Modeling
          </h3>
          <p className="font-main font- text-2xl text-[#BCB8B1]">
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
    </section>
  );
};
