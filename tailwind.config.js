/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landBack: "url('/src/assets/1155198.jpg')",
        logBack: "url('/src/assets/R.jpg')",
        regBack: "url('/src/assets/regBack.png')",
      },
      screens: {},
    },
  },
  plugins: [],
};
