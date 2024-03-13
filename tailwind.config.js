/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
        'satoshi':['Satoshi','sans-serif']
      },
    },
  },
  plugins: [],
}

