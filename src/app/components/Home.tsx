"use client"; // Indique que ce fichier est un composant client

import { FC } from "react";

import { useEffect, useState } from "react";


import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../../../public/animation.json";
import arrowUpData from "../../../public/arrowup.json";

export const Home: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);


  const handleScroll = (): void => {
    const scrollPosition: number = window.scrollY;
    const triggerHeight: number = 150; // Hauteur à partir de laquelle l'élément sera visible

    if (scrollPosition > triggerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /////////////////////
  //                 //
  //     * JSX *     //
  //                 //
  /////////////////////

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative px-[16px] lg:pl-[130px] lg:pr-[60px] flex flex-col lg:flex-row items-center justify-center gap-[24px] lg:gap-[75px] lg:h-[calc(100vh-60px)] h-[812px] w-full"
    >
      <div className="w-full h-[100px] flex justify-between gap-[30px] lg:hidden">
        <div className="h-[100px] overflow-hidden flex justify-center items-center rounded-2xl">
          <Image
            src="/moi.png"
            alt="picture of Romain Cochonnat"
            width={75}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] "
          />
        </div>
        <div className="h-[100px] overflow-hidden flex justify-center items-center rounded-2xl">
          <Image
            src="/code1.png"
            alt="picture of Romain Cochonnat"
            width={75}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] "
          />
        </div>
        <div className="h-[100px] overflow-hidden flex justify-center items-center rounded-2xl">
          <Image
            src="/basket.png"
            alt="picture of Romain Cochonnat"
            width={75}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] "
          />
        </div>
      </div>
      <div className="w-full lg:w-[554px] flex flex-col gap-[15px]">
        <h1
          id="home-heading"
          className="font-title font-semibold text-6xl lg:text-8xl text-white text-center lg:text-left"
        >
          Romain Cochonnat
        </h1>
        <p className="font-main text-xl lg:text-3xl text-white2 uppercase text-center lg:text-left">
          Software engineer, front end & app Developer
        </p>
      </div>
      <div className="w-full h-[100px] flex justify-between gap-[30px] lg:hidden">
      <div className="h-[100px] overflow-hidden flex justify-center items-center rounded-2xl">
          <Image
            src="/marathonParis.png"
            alt="picture of Romain Cochonnat"
            width={75}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] "
          />
        </div>
        <div className="h-[100px] overflow-hidden flex justify-center items-center rounded-2xl">
          <Image
            src="/thailande.png"
            alt="picture of Romain Cochonnat"
            width={75}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] "
          />
        </div>
        <div className="h-[100px] overflow-hidden flex justify-center items-center rounded-2xl">
          <Image
            src="/code2.png"
            alt="picture of Romain Cochonnat"
            width={75}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] "
          />
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 grid-rows-15 w-[621px] h-[600px]">
        <div className="relative row-span-6 row-start-1 m-auto">
          <Image
            src="/moi.png"
            alt="picture of Romain Cochonnat"
            width={140}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] rounded-2xl"
          />
        </div>
        <div className="relative row-span-6 row-start-2 m-auto">
          <Image
            src="/code1.png"
            alt="Picture of Romain Cochonnat coding"
            width={140}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] rounded-2xl"
          />
        </div>
        <div className="relative row-span-6 row-start-3 m-auto">
          <Image
            src="/basket.png"
            alt="Picture of Romain Cochonnat playing basketball"
            width={140}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] rounded-2xl"
          />
        </div>
        <div className="relative row-span-6 row-start-8 m-auto">
          <Image
            src="/marathonParis.png"
            alt="Picture of Romain Cochonnat running on a marathon"
            width={140}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] rounded-2xl"
          />
        </div>
        <div className="relative row-span-6 row-start-9 m-auto">
          <Image
            src="/thailande.png"
            alt="Picture of Romain Cochonnat visiting Thailand"
            width={140}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] rounded-2xl"
          />
        </div>
        <div className="relative row-span-6 row-start-10 m-auto">
          <Image
            src="/code2.png"
            alt="picture of romain cochonnat coding desk"
            width={140}
            height={0}
            className="shadow-[0_0_200px_-20px_rgba(116,12,220,0.2)] rounded-2xl"
          />
        </div>
      </div>
      <a href="#expertise" className="absolute left-[700px] bottom-[5px]">
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center"
          loop={true}
        />
      </a>
      <a
        href="#"
        className={`fixed transition-all duration-500 bg-gray-200 right-[10px] bottom-[10px] lg:right-[120px] lg:bottom-[100px] w-[70px] h-[70px] z-50 flex justify-center overflow-hidden rounded-full ${
          isVisible ? " opacity-100 bg-opacity-20 " : "opacity-0 bg-opacity-0"
        }`}
      >
        <div className="relative">
          <Lottie animationData={arrowUpData} className="w-28" loop={true} />
        </div>
      </a>

    </section>
  );
};
