/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        ayur: {
          primary: "#8CBF5F",
          darker: "#557935",
          accent: "#edf9e3",
          text: "#6C6C6C"
        }
      },
      fontFamily: {
        calligraffi: "'Bree Serif', serif"
      },
    },
  },
  plugins: [],
}

