/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      prompt: ['Prompt', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ['Mukta Vaani', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
