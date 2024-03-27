/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      colors: {
        bodyBg: 'var(--bodyBg)',
        textColor: 'var(--textColor)',
        gold: 'var(--gold)',
        contentBlockBg: 'var(--contentBlockBg)',
        shadowColor: 'var(--shadowColor)',
        accentColor: 'var(--accentColor)',
      },
      boxShadow: {
        card: '3px 3px 5px 0 var(--shadowColor)',
      },
    },
  },
  plugins: [],
};
