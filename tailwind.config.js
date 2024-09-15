/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'digital-purple-dark': '#42326E',
        'digital-purple-medium': '#6E5B9A',
        'digital-purple-light': '#B29CE4',
        'digital-lavender-soft': '#B2A6CE',
        'digital-lavender-light': '#D7C8ED',
        'digital-lavender-very-light': '#E0D4FC',
      },
    },
  },
  plugins: [],
};
