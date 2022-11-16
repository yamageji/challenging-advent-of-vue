/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        base: "auto minmax(0, 1fr) auto",
      },
    },
  },
  plugins: [],
};
