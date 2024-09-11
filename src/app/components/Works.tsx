import { FC } from "react";

import Image from "next/image";

import Lottie from "lottie-react";
import ellipsisData from "../../../public/ellipsis.json";

export const Works: FC = () => {
  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="flex flex-col gap-[0px] p-[60px] items-start w-full"
    >
      <article className="relative w-full h-[600px]  flex ">
        <h2
          id="works-heading"
          className="font-title font-semibold text-8xl text-white"
        >
          My Work
        </h2>
        <div className="absolute top-[-98px] left-[380px] row-span-2 z-10">
          <Image
            src="/telephoneTopAC.png"
            alt="telephone with AC brand logo"
            height={10}
            width={234}
          />
        </div>
        <div className="relative grid grid-cols-[350px_1fr_1fr] grid-rows-4 w-full h-full gap-[30px]">
          <div className="relative row-span-2 rounded-2xl bg-[#F4F3EE]">
            <Image
              src="/telephoneAC.png"
              alt="telephone with AC brand logo"
              fill={true}
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col row-span-2 rounded-2xl bg-[#F4F3EE] font-inter font-bold text-lg px-[20px] py-[17px] gap-[15px]">
            <p className="text-center text-sm">
              The unmissable platform for 2D and 3D digital artists
            </p>
            <div className="relative h-1/5">
              <Image
                src="/grid2a.png"
                alt="telephone with AC brand logo"
                fill={true}
                objectFit="contain"
              />
            </div>
            <p className="text-center font-medium text-xs">
              We simplify exchanges between artists from different backgrounds,
              help them gain visibility, give them a foothold in the freelance
              world and make AC the crossroads for artists on the Internet.
            </p>
            <a
              href="https://ac-frontend-tau.vercel.app/"
              target="_blank"
              className="relative h-1/5 animate-blink"
            >
              <Image
                src="/grid2b.png"
                alt="@romaincochonnat"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </div>
          <div className="row-span-2 rounded-2xl bg-[#D44E67] flex justify-center items-center">
            <div className="relative h-full w-4/5">
              <Image
                src="/grid3.png"
                alt="@romaincochonnat"
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-[#F4F3EE] flex justify-center items-center">
            <div className="relative h-full w-4/5">
              <Image
                src="/grid4.png"
                alt="@romaincochonnat"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="relative row-span-2 col-span-2 rounded-2xl bg-[#F4F3EE] flex justify-center items-center">
            <div className="relative h-full w-4/5">
              <Image
                src="/mac.png"
                alt="@romaincochonnat"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="absolute w-[314px] top-3 right-15">
              <video
                src="/videoAC.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F4F3EE] flex justify-center items-center">
            <div className=" rounded-2xl w-full h-full flex justify-center items-center bg-gradient-to-r from-[#F4F3EE] to-[#f4bb2466]">
              <div className="relative h-4/5 w-4/5">
                <Image
                  src="/grid6.png"
                  alt="@romaincochonnat"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="flex h-[100px] items-center">
        <h3 className="font-title font-semibold text-5xl text-white py-[30px] inline-block">
          More To Come
        </h3>
        <div className="h-full w-36 flex justify-center items-center">
          <div className="relative">
          <Lottie
            animationData={ellipsisData}
            className="w-[600px]"
            loop={true}
          />
          </div>
        </div>
      </article>
    </section>
  );
};
