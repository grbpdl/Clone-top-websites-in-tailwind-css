/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'navbar-bg':'#23272FF2',
      'grey':'#99a1b3',
      'darkgrey':'#23272f',
   
      'navbar-bg':'#23272FF2',
    },
    extend: {
      keyframes: {
        moveLeftRight: {
          '0%': { transform: 'translateX(100%)' },   // Start off-screen to the right
          '100%': { transform: 'translateX(-100%)' }, // Move completely off-screen to the left
        },
      },
      animation: {
        moveLeftRight: 'moveLeftRight 15s linear infinite',
      },

    },
  },
  plugins: [],
}