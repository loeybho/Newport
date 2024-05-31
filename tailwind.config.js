/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      colors: {
        customRed: "#ff6565",
      },
    },
    fontFamily: {
      MarkPro: ["MarkPro"],
      NanumSquareNeo: ["NanumSquareNeo"],
    },
  },

  plugins: [],
};
