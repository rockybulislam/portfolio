/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-container": "#c8441a",
        "on-surface": "#e5e2e1",
        surface: "#131313",
        "outline-variant": "#1e1e1e",
        "on-secondary-container": "#5a5a5a",
        "on-primary-container": "#fff5f2",
      },
      fontFamily: {
        headline: ["Space Grotesk"],
        body: ["Inter"],
        label: ["Fira Code"],
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
