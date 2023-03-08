/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
        playfair: ["var(--font-playfair)", ...fontFamily.sans],
      },
      colors: {
        primary: "#b19777",
      },
      keyframes: {
        backgroundFade: {
          "100%": {
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))",
          },
        },
      },
      animation: {
        backgroundFade: "backgroundFade 1s ease-in-out 1s",
      },
    },
  },
  plugins: [],
};
