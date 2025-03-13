/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        phase: ['SF Pro Text','Hanken Grotesk','Poppins'],
      },
    },
  },
  plugins: [],
}