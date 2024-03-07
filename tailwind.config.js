/** @type {import('tailwindcss').Config} */
export default {

  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {

    extend: {
      colors: {
        primary: "#2c3e50",
        secondary: "#42b983",
        gris: "#EEEEEE",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    },

    screens: {
      xs: "320px",
      ss: "640px",
      sm: "1024px",
      md: "1280px",
      lg: "1440px",
      xl: "1920px",
    },

  },
  
  plugins: [],
  
}