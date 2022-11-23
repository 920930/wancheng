/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      width: {
        '100': '30rem',
        '105': '35rem',
        '110': '40rem'
      },
      height: {
        '100': '30rem',
        '105': '35rem',
        '110': '40rem'
      }
    },
  },
  plugins: [],
}