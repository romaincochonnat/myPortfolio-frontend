import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#more">More about me</a></li>
      </ul>
    </nav>
    </header>
  );
}

export default Navbar;