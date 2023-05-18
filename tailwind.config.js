/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xl: ['38px', '24px'],
    },
    extend: {
      width: {
        '350': '350px',
        '80%': '80%'
      },
      height: {
        '300': '300px',
        '150': '150px'
      }
    },
  },
  plugins: [],
}