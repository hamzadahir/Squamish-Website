module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '3rem',
        sm: '1rem',
      },
      screens: {
        '2xl': '1732px',
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
