/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-bg': "url('/bg-footer.png')",
      },
      backgroundColor:{
        'footer-button': '#F82BA9',
      }
    },
    colors: {
      'footer-text': '#160E4B',
      'footer-text1': '#F82BA9',
      'footer-text2': '#757F95',
      primary: "var(--primary-color)",
      "primary-rgb": "var(--primary-color-rgb)",
      "light-prim-background": "var(--light-background-color)",
      "light-prim-background-rgb": "var(--light-background-color-rgb)",
      accent: "var(--accent-color)",
      descText: "var(--description-color)",
      white: "var(--white-color)",
      "primary-icon-bg": "var(--primary-icon-bg-color)",
      "secondary-icon-bg": "var(--secondary-icon-bg-color)",
    },
  },
  plugins: [require("flowbite/plugin")],
};
