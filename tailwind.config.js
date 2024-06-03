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
    borderWidth: {
      DEFAULT: "1px",
      3: "2.8px",
    },
    extend: {
      colors: {
        customRed: "#ff6565",
        customGreen: "#DBF2BD",
        customStrongGreen: "#00FF00",
        customBlack: "#2F3542",
      },
    },
    fontFamily: {
      MarkPro: ["MarkPro"],
      NanumSquareNeo: ["NanumSquareNeo"],
    },
  },

  plugins: [],
};
