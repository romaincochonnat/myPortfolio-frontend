"use client"; // Indique que ce fichier est un composant client

import Image from "next/image";
import {
  Home,
  Expertise,
  Experience,
  Contact,
  MoreAboutMe,
  Works,
} from "./components";

export default function Myportfolio() {
  return (
    <main className=" w-[1440px] ">
      <Home />
      <Expertise />
      <Works />
      <Experience />
      <Contact />
    </main>
  );
}
