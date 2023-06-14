/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './.dumi/{pages,theme}/**/*.tsx',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
