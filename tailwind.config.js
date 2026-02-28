/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        first: "var(--first-color)",
        firstAlt: "var(--first-color-alt)",
        title: "var(--title-color)",
        text: "var(--text-color)",
        textLight: "var(--text-color-light)",
        body: "var(--body-color)",
        container: "var(--container-color)",
      },
      zIndex: {
        100: "100",
        999: "999",
        1000: "1000",
        10000: "10000",
        10001: "10001",
        10002: "10002",
        10003: "10003",
      },
    },
  },
  plugins: [],
};
