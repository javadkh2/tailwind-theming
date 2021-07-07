const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    variables: {
      ".th-blue": {
        primary: colors.blue,
        secondary: colors.green,
      },
      ".th-red": {
        primary: colors.red,
        secondary: colors.orange,
      },
      ".th-yellow": {
        primary: colors.yellow,
        secondary: colors.gray,
      },
    },
    extend: {
      colors: {
        primary: {
          100: "var(--primary-100)",
          500: "var(--primary-500)",
        },
        secondary: {
          100: "var(--secondary-100)",
          500: "var(--secondary-500)",
        },
        "dark-primary": {
          100: "var(--dark-primary-100)",
          500: "var(--dark-primary-500)",
        },
        "dark-secondary": {
          100: "var(--dark-secondary-100)",
          500: "var(--dark-secondary-500)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@mertasan/tailwindcss-variables")],
};
