"use client"; // Indique que ce fichier est un composant client

import { FC, useState } from "react";
import { Toggle } from "./Toggle";

export const Navbar: FC = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);

  // Fonction pour gérer l'ouverture et la fermeture du menu
  const handleBurger = (): void => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  return (
    <>
      {/* Barre de navigation visible tout le temps sur écrans > 1024px et sur mobile si le burger menu est ouvert */}
      <header className="min-w-full">
        <nav className="hidden w-[1440px] h-[60px] pl-[121px] pr-[60px] items-center font-medium text-lg lg:flex">
          <ul className="flex flex-col lg:flex-row text-white font-main justify-between w-full tracking-wide">
            <li>
              <a href="#">
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

      {/* Bouton du menu burger uniquement visible sur mobile */}

        <Toggle handleBurger={handleBurger} />


      {/* Barre de navigation visible uniquement sur mobile lorsque le menu est ouvert */}
   
        <nav className={`lg-hidden flex flex-col items-center font-medium text-xl bg-accent ${isNavBarOpen ? 'fixed z-50 top-[100px] w-[375px] max-w-[480px]' : 'hidden'}`}>
          <ul className="flex flex-col text-white font-main justify-between w-full tracking-wide">
            <li>
              <a href="#" onClick={()=>handleBurger()}>
                <span className="text-accent">• </span><span className="hover:underline underline-offset-4">Home</span>
              </a>
            </li>
            <li>
              <a href="#expertise" onClick={()=>handleBurger()}>
                <span className="text-accent">• </span><span className="hover:underline underline-offset-4">Expertise</span>
              </a>
            </li>
            <li>
              <a href="#works" onClick={()=>handleBurger()}>
                <span className="text-accent">• </span><span className="hover:underline underline-offset-4">Work</span>
              </a>
            </li>
            <li>
              <a href="#experience" onClick={()=>handleBurger()}>
                <span className="text-accent">• </span><span className="hover:underline underline-offset-4">Experiences</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={()=>handleBurger()}>
                <span className="text-accent">• </span><span className="hover:underline underline-offset-4">Contact</span>
              </a>
            </li>
            <li>
              <a href="#home" onClick={()=>handleBurger()}>
                <span className="text-accent">• </span><span className="hover:underline underline-offset-4">More *available soon*</span>
              </a>
            </li>
          </ul>
        </nav>
        {isNavBarOpen && <div className="block fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={()=>handleBurger()}>
        </div>}
   
    </>
  );
};
