/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "rgba(100, 255, 218, 1)",
        "rich-black": "#183A37",
      },
      boxShadow: {
        "gradient-accent": "inset 0 -3px 0 0 rgba(100, 255, 218, 1)",
      },
    },
  },
  plugins: [],
};
