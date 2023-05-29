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
        },
        wonder: {
          primary: "#58C1C1",
          darker: "#4da8a8"
        },
        holistic: {
          primary: "#DCAD81",
          darker: "#BB916B"
        },
        nature: {
          primary: "#70D881"
        }
      },
      fontFamily: {
        bree: "'Bree Serif', serif",
        calligraffi: "'Calligraffitti';"
      },
    },
  },
  plugins: [],
}

