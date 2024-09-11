import { FC } from "react";

import { useState } from "react";

import Image from "next/image";

export const Experience: FC = () => {

  const [exp1IsVisible, setExp1IsVisible] = useState<boolean>(true)
  const [exp2IsVisible, setExp2IsVisible] = useState<boolean>(false)
  const [exp3IsVisible, setExp3IsVisible] = useState<boolean>(false)


  /////////////////////
  //                 //
  //     * JSX *     //
  //                 //
  /////////////////////

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
      <div className="flex flex-col gap-[30px] text-white2 font-main text-lg">
        <article className="flex flex-col gap-[10px] w-[1000px]  px-[48px] pt-5">
          <div className="flex justify-between w-full py-[10px] px-8 font-title font-semibold text-xl bg-accent rounded-md hover:cursor-pointer" onClick={()=>setExp1IsVisible(!exp1IsVisible)}>
            <h4 className="inline-block ">Software Engineer</h4>
            <span>2023-Present</span>
          </div>
          {exp1IsVisible ? <p className=" w-full py-[10px] px-8 bg-[#241D41] rounded-lg ">
            ...
          </p> : null}
        </article>
        <article className="flex flex-col gap-[10px] w-[1000px] px-[48px]">
          <div className="flex justify-between w-full py-[10px] px-8 font-title font-semibold text-xl bg-[#430D79] rounded-lg hover:cursor-pointer" onClick={()=>setExp2IsVisible(!exp2IsVisible)}>
            <h4 className="inline-block ">Innovation Technical Support</h4>
            <span>2022-2023</span>
          </div>
          {exp2IsVisible ? <p className=" w-full py-[10px] px-8 bg-[#241D41] rounded-lg ">
            ...
          </p> : null}
        </article>
        <article className="flex flex-col gap-[10px] w-[1000px] px-[48px]">
          <div className="flex justify-between w-full py-[10px] px-8 font-title font-semibold text-xl bg-[#430D79] rounded-lg hover:cursor-pointer" onClick={()=>setExp3IsVisible(!exp3IsVisible)}>
            <h4 className="inline-block ">Construction Technical Support</h4>
            <span>2018-2022</span>
          </div>
          {exp3IsVisible ? <p className=" w-full py-[10px] px-8 bg-[#241D41] rounded-lg">
            ...
          </p> : null}
        </article>
        <article className="flex flex-col gap-[30px] w-[1000px] px-[48px] pb-[48px]">
          <div className="flex items-center gap-5 w-full py-[10px] px- font-title font-semibold text-3xl rounded-lg">
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
