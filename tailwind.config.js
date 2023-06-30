/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '6rem',
        },
      },
      colors: {
        'light-color': 'var(--light-color)',
        'darker-color': 'var(--darker-color)',
        'darkred-color': 'var(--darkred-color)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/line-clamp'),
  ],
};
