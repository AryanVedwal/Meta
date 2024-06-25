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
        db: "#08111C",
        lb: "#00FFFF",
        yel: "#FFC107",
        pur: "#522DB9",
      },
      
    },
  },
  plugins: [],
};
