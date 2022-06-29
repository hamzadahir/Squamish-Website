module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
      },
    },
    extend: {
      colors: {
        primary: '#1F4181',
        secondary: '#ED1F27',
      },
    },
  },
  plugins: [
    {
      'tailwindcss': {},
      'autoprefixer': {},
    }
  ],
}
