"use client"; // Indique que ce fichier est un composant client

import { FC } from "react";

import { useState } from "react";

import Image from "next/image";

export const Experience: FC = () => {
  const [exp1IsVisible, setExp1IsVisible] = useState<boolean>(true);
  const [exp2IsVisible, setExp2IsVisible] = useState<boolean>(false);
  const [exp3IsVisible, setExp3IsVisible] = useState<boolean>(false);

  /////////////////////
  //                 //
  //     * JSX *     //
  //                 //
  /////////////////////

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="flex flex-col gap-[45px] items-center w-full font-main text-white text-2xl "
    >
      <h2
        id="experience-heading"
        className="font-title font-semibold text-6xl text-center"
      >
        My Experiences
      </h2>
      <div className="flex flex-col items-center gap-[30px] w-[1000px] text-white2 font-main text-lg">
        <article className="flex flex-col w-11/12  px-[48px]">
          <div
            className="flex justify-between w-full py-[10px] px-8 font-title font-semibold text-xl bg-accent rounded-md hover:cursor-pointer"
            onClick={() => setExp1IsVisible(!exp1IsVisible)}
          >
            <h4 className="inline-block ">Software Engineer</h4>
            <span>2023-Present</span>
          </div>
          <div
            className={`overflow-hidden w-full rounded-lg transition-opacity duration-500 ${
              exp1IsVisible ? "opacity-100" : "opacity-0"
            } `}
          >
            <p
              className={`w-full py-[10px] px-8 bg-[#241D41] rounded-lg ${
                exp1IsVisible
                  ? "mt-[10px]"
                  : "mt-[-200px] transition-[margin-top] delay-[400ms]"
              }  `}
            >
              Full stack developer for Artist&#39;s Crossroad application and
              other personal projects. Learning continuously by myself on
              several online plateforms &#40;CodeAcademy, Udemy, FreeCodeCamps,
              etc.&#41;
            </p>
          </div>
        </article>
        <article className="flex flex-col w-11/12  px-[48px]">
          <div
            className="flex justify-between w-full py-[10px] px-8 font-title font-semibold text-xl bg-[#430D79] rounded-lg hover:cursor-pointer"
            onClick={() => setExp2IsVisible(!exp2IsVisible)}
          >
            <h4 className="inline-block ">Innovation Technical Support</h4>
            <span>2022-2023</span>
          </div>
          <div
            className={`overflow-hidden w-full rounded-lg transition-opacity duration-500 ${
              exp2IsVisible ? "opacity-100" : "opacity-0"
            } `}
          >
            <ul
              className={`w-full py-[10px] px-8 bg-[#241D41] rounded-lg ${
                exp2IsVisible
                  ? "mt-[10px]"
                  : "mt-[-200px] transition-[margin-top] delay-[400ms]"
              }  `}
            >
              <li>• Implementing new project methods</li>
              <li>
                • Technical support and training for production teams on new
                tools
              </li>
              <li>• Technological watch</li>
            </ul>
          </div>
        </article>
        <article className="flex flex-col w-11/12  px-[48px]">
          <div
            className="flex justify-between w-full py-[10px] px-8 font-title font-semibold text-xl bg-[#430D79] rounded-lg hover:cursor-pointer"
            onClick={() => setExp3IsVisible(!exp3IsVisible)}
          >
            <h4 className="inline-block ">Construction Technical Support</h4>
            <span>2018-2022</span>
          </div>
          <div
            className={`overflow-hidden w-full rounded-lg transition-opacity duration-500 ${
              exp3IsVisible ? "opacity-100" : "opacity-0"
            } `}
          >
            <ul
              className={`w-full py-[10px] px-8 bg-[#241D41] rounded-lg ${
                exp3IsVisible
                  ? "mt-[10px]"
                  : "mt-[-200px] transition-[margin-top] delay-[400ms]"
              }  `}
            >
              <li>
                • Definition of operating procedures and technical management of
                projects
              </li>
              <li>• Monitoring budgets and deadlines</li>
              <li>• Translating customer needs into design</li>
            </ul>
          </div>
        </article>
        <article className="flex flex-col gap-[30px] w-11/12 px-[48px] pb-[48px]">
          <div className="flex items-center gap-5 w-full py-[10px] px- font-title font-semibold text-3xl rounded-lg">
            <h4 className="inline-block ">My CV</h4>
            <a href="/monCV.pdf" target="_blank">
              <Image
                src="/logo-pdf.png"
                alt="pdf download logo"
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
