import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="max-w-[1440px] ">
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
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
            <a href="#more">More about me</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
