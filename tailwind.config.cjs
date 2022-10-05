/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        LimeGreen: "hsl(163, 72%, 41%)",
        BrightRed: " hsl(356, 69%, 56%)",
        Facebook: "hsl(208, 92%, 53%)",
        Twitter: "hsl(203, 89%, 53%)",
        InstagramFrom: "hsl(37, 97%, 70%) ",
        InstagaramTo: "hsl(329, 70%, 58%)",
        YouTube: "hsl(348, 97%, 39%)",
        Toggle: "hsl(230, 22%, 74%)",
        ToggleFrom: "hsl(210, 78%, 56%)",
        ToggleTo: "hsl(146, 68%, 55%)",
        //darktheme
        VeryDarkBlue: "hsl(230, 17%, 14%)", //(BG) //light (text)
        VeryDarkBlue2: " hsl(232, 19%, 15%)", //(Top BG Pattern)
        DarkDesaturatedBlue: "hsl(228, 28%, 20%) ", //(Card BG)
        DesaturatedBlue: "hsl(228, 34%, 66%)", //(Text)
        White: "hsl(0, 0%, 100%)", // light(Text) & dark (BG)
        //Light Theme
        VeryPaleBlue: "hsl(225, 100%, 98%) ", //(Top BG Pattern)
        LightGrayishBlue: "hsl(227, 47%, 96%)", //(Card BG)
        DarkGrayishBlue: " hsl(228, 12%, 44%)", //(Text)
      },
      fontSize: {
        cardHeading: "14px",
      },
      fontFamily: {
        Inter: "Inter, sans-serif",
      },
    },
  },

  plugins: [],
};
