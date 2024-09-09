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
        foreground: "var(--foreground)",
        accent: "#740CDC",
      },
      fontFamily: {
        main: ["Space Mono", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
