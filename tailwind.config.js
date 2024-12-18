/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "menu-mobile",
    "menu-mobile.active",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
      },
    },
  },
  plugins: [],
};
