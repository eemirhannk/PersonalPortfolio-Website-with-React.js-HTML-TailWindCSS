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
    extend: {},
  },
  plugins: [],
}