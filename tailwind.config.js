/** @type {import('tailwindcss').Config} */
import rippleui from 'rippleui'; // Use import instead of require

const config = {
  themes: [
    {
      colors: {
        primary: "#3ABEF9",
        secondary: "#5DEBD7",
      }
    }
  ]
};

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
        primary: "#5DEBD7",
        secondary: "#97FEED",
        tertiary: "#3ABEF9"
      }
    },
  },
  plugins: [
    rippleui({
      ...config,
    })
  ],
};
