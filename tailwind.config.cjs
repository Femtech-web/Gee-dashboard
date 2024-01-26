/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray_600: "#26282C",
        gray_400: "#3A3F51",
        gray_500: "#22242C",
        gray_300: "#787486",
        gray_200: "#525252",
        outer_dark: "#0C0A09",
        inner_dark: "#181818 ",
        darkText: "#fafafa",
        home: "#F7F8FA"
      },
    },
    fontSize: {
      small: "0.875rem",
      big: "1.125rem",
    }
  },
  darkMode: 'class',
  plugins: [],
}