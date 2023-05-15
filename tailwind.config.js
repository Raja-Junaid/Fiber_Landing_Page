/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        White: "#ffffff",
        Black: "#000000",
        offWhite: "#fbf8f3",
        darkPurple: "#4d13d1",
        dimGray: "#6b6b6b",
        richBlack: "#222222",
        lightGray: "#555555",
        veryLightGray: "#eeeeee",
      },

      gridTemplateColumns: {
        custom: "1fr 1fr",
      },
    },
  },
  plugins: [],
};
