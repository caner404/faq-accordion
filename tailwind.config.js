/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        bigmobile: '425px',
        desktop: '1440px',
      },
      colors: {
        'dark-purple': '#301534',
        'custom-pink': '#AD28EB',
        'light-pink': '#F8EEFF',
        'pale-purple': '#8B6990',
      },
    },
  },
  plugins: [],
};
