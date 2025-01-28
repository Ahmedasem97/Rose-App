/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    container: {
      center: true
    },
    extend: {},
    colors: {
      primary: "var(--primary-color)",
      "primary-color-alpha": "var(--primary-color-alpha)",
      "primary-rgb": "var(--primary-color-rgb)",
      "light-prim-background": "var(--light-background-color)",
      "light-prim-background-rgb": "var(--light-background-color-rgb)",
      accent: "var(--accent-color)",
      activelink: "var(--description-color)",
      white: "var(--white-color)",
      price: "var(--price-color)",
      "primary-icon-bg": "var(--primary-icon-bg-color)",
      "secondary-icon-bg": "var(--secondary-icon-bg-color)",
    },
  },
  plugins: [require("flowbite/plugin")],
};
