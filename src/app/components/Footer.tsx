import { FC } from "react";
import Image from "next/image";

export const Footer: FC = () => {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="flex flex-col lg:flex-row font-main text-white text-base w-full lg:h-[700px]"
    >
      <div className="w-full lg:w-[420px] h-full flex flex-col gap-[10px] pt-[30px] pl-[15px]">
        <h2
          id="contact-heading"
          className="font-title font-semibold text-6xl text-center h-[100px]"
        >
          My Contacts
        </h2>
        <div className="flex flex-row lg:flex-col gap-[10px] h-full">
          <a
            href="https://www.linkedin.com/in/romain-cochonnat-95b2a1129/"
            target="_blank"
            className="flex items-center gap-[30px]"
          >
            <Image
              src="/linkedin-logo.webp"
              alt="Linkedin logo"
              width={50}
              height={0}
            />
            <span className="hidden lg:block">Linkedin</span>
          </a>
          <a
            href="https://github.com/romaincochonnat"
            target="_blank"
            className="flex items-center gap-[30px]"
          >
            <Image
              src="/github-logo.svg"
              alt="github logo"
              width={50}
              height={0}
            />
            <span className="hidden lg:block">GitHub</span>
          </a>
          <a
            href="mailto:romain.cochonnat@gmail.com"
            className="flex items-center gap-[30px]"
          >
            <Image
              src="/gmail-logo.webp"
              alt="gmail logo"
              width={50}
              height={0}
            />
            <span className="hidden lg:block">Gmail</span>
          </a>
          <a href="tel:+33627991576" className="flex items-center gap-[30px]">
            <Image
              src="/phone-logo.png"
              alt="phone logo"
              width={50}
              height={0}
            />
            <span className="hidden lg:block">+33 6 27 99 15 76</span>
          </a>
          <div className="hidden lg:block lg:mt-auto lg:text-sm">
            <div>
              <p>&copy; 2024 My Portfolio. All rights reserved.</p>
              <nav className="pb-[30px]">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#expertise">Expertise</a>
                  </li>
                  <li>
                    <a href="#works">Works</a>
                  </li>
                  <li>
                    <a href="#experience">Experience</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="#contact">More about me</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[calc(100%-400px)] lg:h-full grid grid-cols-5 grid-rows-6">
        <article className="col-span-5 lg:col-span-2 row-span-2 lg:row-span-6 bg-[#8A817C] text-xs lg:text-base flex flex-col gap-[10px] py-[6px] px-[12px] lg:py-[30px] lg:px-[30px]">
          <div className="flex justify-between w-full">
            <div className="relative w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]">
              <Image
                src="/quote.png"
                alt="quote logo"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden border-2">
              <Image
                src="/soufiane.png"
                alt="soufiane ref picture"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="py-[10px]">
            I&#39;ve had the pleasure of working with Romain on a series of
            projects, and he consistently demonstrated solid effort in achieving
            our goals. On many occasions, he helped us find the right solutions
            for our projects.
            <br />
            <br />
            Romain is a valuable asset to any team. He was so easy to work with,
            and his enthusiasm for software engineering was contagious,
            encouraging us all to hone our critical problem-solving skills.
          </div>
          <div>
            <p className="font-bold">•Soufiane El Mansouri</p>
            <p>Fullstack web/mobile developer</p>
          </div>
        </article>
        <article className="col-span-5 lg:col-span-3 row-span-2 lg:row-span-3 bg-[#430D79] text-xs lg:text-base flex flex-col gap-[10px] py-[6px] px-[12px] lg:py-[30px] lg:px-[30px]">
          <div className="flex justify-between w-full">
            <div className="relative w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]">
              <Image
                src="/quote.png"
                alt="quote logo"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden border-2">
              <Image
                src="/FKE.png"
                alt="Fabrice Kerlogot ref picture"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="py-[10px]">
            Romain distinguished himself by his seriousness and commitment
            throughout his work. With his remarkable seriousness and ability to
            come up with relevant ideas, he contributed to the success of our
            projects. He was an invaluable asset during his time with me.
          </div>
          <div>
            <p className="font-bold">•Fabrice Kerlogot</p>
            <p>National BIM Referent at VINCI</p>
          </div>
        </article>
        <article className="col-span-5 lg:col-span-3 row-span-2 lg:row-span-3 bg-[#F4F3EE] text-black text-xs lg:text-base flex flex-col gap-[10px] py-[6px] px-[12px] lg:py-[30px] lg:px-[30px]">
          <div className="flex justify-between w-full">
            <div className="relative w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]">
              <Image
                src="/quote.png"
                alt="quote logo"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden border-2">
              <Image
                src="/VSI.png"
                alt="Vincent Simon ref picture"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="py-[10px] ">
            Romain is an engineer who likes to learn and progress continuously.
            He is always motivated, rigorous, involved and curious. He has great
            potential to develop rapidly.
          </div>
          <div>
            <p className="font-bold">•Vincent Simon</p>
            <p>Director at Eiffage</p>
          </div>
        </article>
      </div>
    </footer>
  );
}
