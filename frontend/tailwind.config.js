/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    colors: {
      someGray: "#e6e6e6"
    },
    extend: {
      fontFamily: {
        mono: ["Source Code Pro", "monospace"]
      }
    },
  },
  plugins: [],
}

