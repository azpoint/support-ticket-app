/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
// const colors = require("tailwindcss/colors")

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Source Code Pro", "monospace"]
      }
    },
  },
  plugins: [],
}

