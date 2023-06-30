/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          750: "#3E3E3E",
          850: "#1d1d1d",
        },
      },
    },
  },
  plugins: [],
};
