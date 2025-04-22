/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: "#FF3D00",
        // secondary: "#FF3D00",
        // light: "#F5F5F5",
        // dark: "#262626",
        // white: "#FFFFFF",
        // black: "#000000",
      },
      fontFamily: {
        Primary: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        'ShowcaseImg': "url('/images/header_img.png')",
      }
    },
  },
  plugins: [],
};
