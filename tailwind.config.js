/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        accordion: 'accordion 0.8s ease-in-out',
      },
      keyframes: {
        accordion: {
          '0%': { opacity: '0' },
          '1000%': { opacity: '1' },
        }
      }
    },
    fontFamily: {
      'Raleway': 'Raleway, sans-serif',
      'IndieFlower': 'Indie Flower, cursive',
    }
  },
  plugins: [],
}

