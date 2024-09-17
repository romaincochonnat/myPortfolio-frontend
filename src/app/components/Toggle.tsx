"use client"; // Indique que ce fichier est un composant client

//Import for icons ANTD
import { IoMenu } from "react-icons/io5";

import { FC } from "react";

export const Toggle : FC<{ handleBurger: () => void }> = function ({ handleBurger }) {
  return (
    <div
      className="fixed right-[10px] top-[10px] w-[50px] h-[50px] z-50 overflow-hidden bg-text flex items-center justify-center cursor-pointer lg:hidden "
      onClick={handleBurger}
    >
      <IoMenu style={{ color: "#ffffff", fontSize: "20px" }} />
    </div>
  );
}
