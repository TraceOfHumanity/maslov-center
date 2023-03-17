/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      smd: "600px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "main-dark-bg": "#0A0908",
        "main-light-bg": "#FFFFFF",
        "main-color": "#9A814E",
        "main-blue":"#47B9FF"
      },
    },
  },
  plugins: [],
};
