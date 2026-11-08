/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: { 50: '#f6f4f7', 100: '#ece5ed', 200: '#dacbdc', 500: '#a67ece', 600: '#725875', 700: '#5a465d', 900: '#2f2431' },
        sand: { 50: '#f8f2fa', 100: '#dfe1f2', 200: '#e6d8c3' },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
