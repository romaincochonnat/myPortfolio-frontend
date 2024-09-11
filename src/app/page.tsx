"use client"; // Indique que ce fichier est un composant client


import {
  Home,
  Expertise,
  Experience,
  Contact,
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
