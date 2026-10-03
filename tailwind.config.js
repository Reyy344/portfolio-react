/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        montserrat: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        gothic: ["League Gothic", "sans-serif"],
        brittany: ["Brittany Signature", "cursive"],
      },

      colors: {
        "rean-blue-light": "#81A6C6",
        "rean-blue-soft": "#AACDDC",
      },

      backgroundImage: {
        "instagram-color":
          "radial-gradient(circle farthest-corner at 28% 100%, var(--yellow) 0%, var(--yellow_to) 10%, var(--orange) 22%, var(--red) 35%, transparent 65%), linear-gradient(145deg, var(--blue) 10%, var(--purple) 70%)",
      },
    },
  },
  plugins: [],
};
