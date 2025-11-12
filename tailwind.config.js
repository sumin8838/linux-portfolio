/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F0',
        brown: '#8B5E3C',
        lightbrown: '#D4B996',
        darkbrown: '#4B2E05',
      },
      fontFamily: {
        sans: ['"Pretendard Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
