/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/**/*.html"],
  theme: {
    extend: {
      colors:{
        primary: "#027373",   // Verde oscuro
        secondary: "#038C7F", // Verde medio
        accent: "#A9D9D0",    // Verde claro
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

