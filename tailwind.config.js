/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Manrope", "Arial", "sans-serif"],
    },
    fontSize: {
      xs: ".813rem",
      sm: ".875rem",
      base: ".938rem",
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3.5rem",
    },
    lineHeight: {
      tight: "1.188rem",
      snug: "1.5rem",
      normal: "1.563rem",
      large: "2.063rem",
      xl: "2.25rem",
      "2xl": "2.375rem",
      "3xl": "2.75rem",
      "4xl": "3.625rem",
    },
    colors: {
      transparent: "transparent",
      white: "#FFF",
      black: "#000",
      orange: "#D87D4A",
      "pale-orange": "#FBAF85",
      red: "#CD2C2C",
      dark: "#151515",
      light: "#FAFAFA",
      "light-grey": "#F1F1F1",
      "pale-grey": "rgba(0, 0, 0, 0.5)",
      "medium-grey": "#CFCFCF",
      "dark-grey": "#4C4C4C",
    },
    extend: {
      letterSpacing: {
        1: "1.07px",
        2: "1.15px",
        3: "1.3px",
        4: "1.5px",
        5: "1.7px",
        6: "2px",
        extra: "10px",
      },
    },
  },
  plugins: [],
};
