import { FC } from "react";

import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../../../public/animation.json";

export const Home: FC = () => {
    return (
        <section
        aria-labelledby="home-heading"
        className="relative lg:pl-[130px] lg:pt-[0px] lg:pr-[60px] lg:pb-[60px] flex items-center gap-[75px] h-[calc(100vh-60px)] w-full"
      >
        <div className="lg:w-[554px] lg:flex lg:flex-col lg:gap-[15px]">
          <h1
            id="home-heading"
            className="font-title font-semibold text-8xl text-white"
          >
            Romain Cochonnat
          </h1>
          <p className="font-main text-3xl text-white uppercase">
            Software engineer, front end & app Developer
          </p>
        </div>
        <div className="relative lg:w-[621px] lg:h-[780px]">
          <div className="absolute top-0 left-0 w-[175px] h-[306px]">
            <Image src="/moi.png" alt="" layout="fill" />
          </div>
          <div className="absolute top-[45px] left-[223px]">
            <Image src="/code1.png" alt="" width={175} height={306} />
          </div>
          <div className="absolute top-[90px] left-[445px]">
            <Image src="/basket.png" alt="" width={175} height={306} />
          </div>
          <div className="absolute top-[396px] left-[0px]">
            <Image src="/marathonParis.png" alt="" width={175} height={306} />
          </div>
          <div className="absolute top-[441px] left-[223px]">
            <Image src="/thailande.png" alt="" width={175} height={306} />
          </div>
          <div className="absolute top-[486px] left-[445px]">
            <Image src="/code2.png" alt="" width={175} height={306} />
          </div>
        </div>
        <a href="#expertise" className="absolute left-[700px] bottom-[30px]">
            <Lottie
              animationData={animationData}
              className="flex justify-center items-center"
              loop={true}
            />
        </a>
      </section>
    )
}