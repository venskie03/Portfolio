/** @type {import('tailwindcss').Config} */
const config = {

  themes: [
    {
      colors: {
        primary: "#3ABEF9"
      }
    } 
  ]

}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: ["#5DEBD7"],
        secondary: ["#97FEED"],
        tertiary: ["#3ABEF9"]
      }
    },
  },
  plugins: [require("rippleui")({
    ...config,
  })],
}

