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
      flex: {
        '2': '1 1 30rem'
      },
      boxShadow: {
        'first': '0 0 1rem #0ef',
      }
    },
  },
  plugins: [],
}