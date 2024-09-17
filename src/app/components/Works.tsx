"use client";

import { FC } from "react";

import Image from "next/image";

import Lottie from "lottie-react";
import ellipsisData from "../../../public/ellipsis.json";

export const Works: FC = () => {
  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="flex flex-col lg:gap-[30px] p-4 lg:p-[60px] items-start w-full"
    >
      <article className="relative w-full h-[800px] lg:h-[600px] flex ">
        <div className="hidden lg:block absolute w-[234px] h-[200px] top-[-110px] left-[411px] z-10">
          <div className="relative w-full h-full">
            <Image
              src="/telephoneTopAC.png"
              alt="telephone with AC brand logo"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="relative grid grid-cols-2 lg:grid-cols-[330px_350px_1fr_1fr] grid-rows-4 w-full h-full gap-2 lg:gap-[30px]">
          <h2
            id="works-heading"
            className="font-title font-semibold text-5xl lg:text-8xl text-white  row-span-1 lg:col-span-1 lg:row-span-4"
          >
            My Work
          </h2>
          <div className="relative row-span-1 lg:row-span-2 rounded-2xl bg-[#F4F3EE]">
            <Image
              src="/telephoneAC.png"
              alt="telephone with AC brand logo"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col justify-center row-span-1 lg:row-span-2 rounded-2xl bg-[#F4F3EE] font-inter font-bold text-[10px] lg:text-sm px-3 py-2 lg:px-[20px] lg:py-[17px] gap-1 lg:gap-[15px]">
            <p className="text-center">
              The unmissable platform for 2D and 3D digital artists
            </p>
            <div className="relative h-1/5">
              <Image
                src="/grid2a.png"
                alt="profil picture of 2 random people"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-center font-medium text-[8px] lg:text-xs">
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
                alt="Click here to visit AC"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </a>
          </div>
          <div className="row-span-1 lg:row-span-2 rounded-2xl bg-[#D44E67] flex justify-center items-center">
            <div className="relative h-full w-4/5">
              <Image
                src="/grid3.png"
                alt="Artist's Crossroad logo"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="hidden rounded-2xl bg-[#F4F3EE] lg:flex justify-center items-center">
            <div className="relative h-full w-4/5">
              <Image
                src="/grid4.png"
                alt="random logo"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="relative row-span-2 col-span-2 rounded-2xl bg-[#F4F3EE] flex justify-center items-center">
            <div className="relative h-full w-[355px] lg:w-4/5">
              <Image
                src="/mac.png"
                alt="Computer screen with video demo of AC plateform inside"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="absolute top-20 w-[280px] lg:w-[314px]  lg:top-3 lg:right-15">
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
                  alt="random logo"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="flex h-[100px] items-center">
        <h3 className="font-title font-semibold text-2xl lg:text-5xl text-white py-[30px] inline-block">
          More To Come
        </h3>
        <div className="h-full w-20 lg:w-36 flex justify-center items-center">
          <div className="relative">
            <Lottie
              animationData={ellipsisData}
              className="w-[300px] lg:w-[600px]"
              loop={true}
            />
          </div>
        </div>
      </article>
    </section>
  );
};
