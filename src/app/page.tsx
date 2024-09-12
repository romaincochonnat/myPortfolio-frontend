"use client"; // Indique que ce fichier est un composant client

import {
  Home,
  Expertise,
  Experience,
  Works,
} from "./components";

export default function Myportfolio() {
  return (
    <main className=" w-[1440px] flex flex-col items-center ">
      <Home />
      <Expertise />
      <Works />
      <Experience />
    </main>
  );
}
