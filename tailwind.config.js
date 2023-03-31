/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      blue : '#0ef',
      white : '#fff',
      dark : '#1f242d;',
      grey : '#323946'  
    },
    extend: {
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity : 0 },
          '100%': { transform: 'translateX(0px)', opacity : 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px)', opacity : 0 },
          '100%': { transform: 'translateX(0px)', opacity : 1 },
        },
        slideTop: {
          '0%': { transform: 'translateY(100px)', opacity : 0 },
          '100%': { transform: 'translateY(0px)', opacity : 1 },
        },
        slideBottom: {
          '0%': { transform: 'translateY(-100px)', opacity : 0 },
          '100%': { transform: 'translateY(0px)', opacity : 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity : 0 },
          '100%': { transform: 'scale(1)', opacity : 1 },
        },
        floatImage: {
          '0%': { transform: 'translateY(0)', opacity : 0},
          '50%': { transform: 'translateY(-24px)'},
          '100%': { transform: 'translateY(0)', opacity : 1},
        }
      },
      flex: {
        '2': '1 1 30rem'
      },
      boxShadow: {
        'first': '0 0 1rem #0ef',
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    // ...
  ],
}