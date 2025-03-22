/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
      extend: {
          fontFamily: {
              josefin: ["Josefin Sans", "sans-serif"],
          },
      },
  },
  plugins: [],
};
