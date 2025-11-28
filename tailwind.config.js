/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'intelli-purple': '#4A148C',
        'intelli-orange': '#FF6B35',
        'intelli-yellow': '#FFB84D',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '680px',
          lg: '900px',
          xl: '1100px',
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
}

