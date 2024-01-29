/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // enable dark mode
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1D1E20',
      }
    },
  },
  plugins: [],

}