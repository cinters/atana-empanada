import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FEFCF7",
        navy: "#2D2B7A",
        "navy-dark": "#1A1860",
        gold: "#F5A623",
        "gold-dark": "#D4891A",
        "card-bg": "#FFF8ED",
        border: "#E8D9B0",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
