/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/**/*.html"],
  theme: {
    extend: {
      colors:{
        primary: "#4F191F",   // Verde oscuro
        secondary: "#7A3B42", // Verde medio
        accent: "#CFA9AE",    // Verde claro
        background: "#F2E7DC", // Crema (fondo en modo claro)
        darkbg: "#0D0D0D",    // Negro (fondo en modo oscuro)
        textlight: "#0D0D0D", // Texto oscuro para modo claro
        textdark: "#F2E7DC",  // Texto claro para modo oscuro
      },
      fontFamily: {
        josefin: [ "Josefin Sans", "serif"],
      },
    },
  },
  plugins: [],
}

