/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
 colors: {
        primary: "#f96927",
      },
      fontFamily: {
        Primary: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        ShowcaseImg: "url('/images/header_img.png')",
      },
    },
  },
  plugins: [],
};
