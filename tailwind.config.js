/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#ff6565",
      },
    },
    fontFamily: {
      MarkPro: ["MarkPro"],
    },
  },

  plugins: [],
};
