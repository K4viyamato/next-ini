const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        mainBg: "var(--mainBg)",
      },
      fontSize: {
        xxxs: "0.5rem", //8px
        xxs: "0.625rem", //10px
        xs: "0.75rem", //12px
        sm: "0.875rem", //14px
        base: "1rem", //16px
        lg: "1.125rem", //18px
        xl: "1.25rem", //20px
        "1xl": "1.375rem", //22px
        "2xl": "1.5rem", //25px
        "3xl": "1.875rem", //30px
        "4xl": "2rem", //36px
        title1: "80px",
        title2: "54px",
      },
      screens: {
        xsm: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1680px",
      },
    },
  },
  plugins: [addVariablesForColors],

  
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
