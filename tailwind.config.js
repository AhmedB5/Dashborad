/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffcccc",
          200: "#ff9999",
          300: "#ff6666",
          400: "#ff3333",
          500: "#ff0000",
          600: "#cc0000",
          700: "#990000",
          800: "#660000",
          900: "#330000",
        },
      },
      fontFamily: {
        honk: ["honk"],
        Playwrite: ["Playwrite DE LA"],
      },
      gridTemplateRows: {
        16: "repeat(16 ,minmax(0,1fr))",
      },
      gridTemplateColumns: {
        15: "repeat(15 ,minmax(0,1fr))",
      },

      spacing: {
        "2px": "14px",
      },
      margin: {
        "20+": "-20px",
      },
    },
  },
  plugins: [],
};
