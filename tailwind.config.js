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
        customOrange: "#F19E54",
        customGreen: "#DBF2BD",
        customStrongGreen: "#00FF00",
        customBlue: "#A5BCDE",
        customBlack: "#0F172A",
        customYellow: "#FFE400",
        customLightYellow: "#FFF78D",
        customBeige: "#F4F2ED",
        customLightGray: "#F1F0F1",
      },
    },
    fontFamily: {
      MarkPro: ["MarkPro"],
      NanumSquareNeo: ["NanumSquareNeo"],
    },
  },
  plugins: [],
};
