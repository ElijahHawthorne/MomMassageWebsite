/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Brand palette from the logo: lavender #C39CD3 (lavender-400) and gold #FAD6A5 (gold-300).
      // Use 700+ for text on light backgrounds; the brand shades themselves are for fills and accents.
      colors: {
        lavender: {
          50: '#faf6fc', 100: '#f3ebf6', 200: '#e5d5ed', 300: '#d5bae2', 400: '#c39cd3',
          500: '#a67fba', 600: '#835c97', 700: '#6f4a82', 800: '#553a63', 900: '#3a2843',
        },
        gold: {
          50: '#fefaf3', 100: '#fdf0dc', 200: '#fbe3c3', 300: '#fad6a5', 400: '#f2c07f',
          500: '#e0a457', 600: '#b8823a', 700: '#8c6229',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
