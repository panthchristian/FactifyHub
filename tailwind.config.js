const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'min': '320px', 'max': '480px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'tablet': {'min': '481px', 'max': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'laptop': {'min': '769px', 'max': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'desktop': {'min': '1025px', 'max': '1200px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      'tv': {'min': '1201px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
};
