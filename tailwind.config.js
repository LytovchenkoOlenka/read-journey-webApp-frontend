/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1280px",
      },

      colors: {
        // ## Основна палітра
        white: "#F9F9F9",
        black: "#141414",

        // ## Відтінки сірого
        "gray-light": "#E3E3E3",
        "gray-medium": "#686868",
        "gray-dark": "#262626",
        charcoal: "#1F1F1F",

        // ## Акцентні кольори
        "accent-blue": "#4F92F7",
        "accent-green": "#30B94D",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        base: "-0.02rem",
      },
    },
  },
  plugins: [],
};
