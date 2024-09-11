import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#121214",
        white2: "#ffffff",
        foreground: "var(--foreground)",
        accent: "#740CDC",
      },
      fontFamily: {
        main: ["Space Mono", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" }, // Pleine opacité au début et à la fin
          "50%": { opacity: "0" }, // Opacité à 0 au milieu (clignotement)
        },
      },
      animation: {
        blink: "blink 2s infinite", // Classe d'animation 'animate-blink'
      },
    },
  },
  plugins: [],
};
export default config;
