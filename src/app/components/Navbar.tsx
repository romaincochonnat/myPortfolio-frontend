import { FC } from "react";

const Navbar: FC = () => {
  return (
    <header>
      <nav className="lg:flex lg:w-[1440px] lg:h-[60px] lg:px-[121px] items-center font-medium text-xl">
        <ul className="lg:flex  text-white font-main  lg:justify-between w-full tracking-wide ">
          <li>
            <a href="#home" >
              <span className="text-accent">• </span><span className="hover:underline underline-offset-4">Home</span>
            </a>
          </li>
          <li>
            <a href="#expertise">
              <span className="text-accent">• </span><span className="hover:underline underline-offset-4">Expertise</span>
            </a>
          </li>
          <li>
            <a href="#works">
              <span className="text-accent">• </span><span className="hover:underline underline-offset-4">Work</span>
            </a>
          </li>
          <li>
            <a href="#experience">
              <span className="text-accent">• </span><span className="hover:underline underline-offset-4">Experiences</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="text-accent">• </span><span className="hover:underline underline-offset-4">Contact</span>
            </a>
          </li>
          <li>
            <a href="#home">
              <span className="text-accent">• </span><span className="hover:underline underline-offset-4">More *available soon*</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
