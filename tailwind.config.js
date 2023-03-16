/** @type {import('tailwindcss').Config} */
require("./src/01.shared/styles/cssAsPlugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "540px",
      md: "640px",
      lg: "768px",
      xl: "1000px",
    },
    extend: {
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
    },
  },
  plugins: [],
};
