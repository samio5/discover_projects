module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'img-banner2': "url('public/images/desktop/image-header.jpg')",

      },
      colors: {
        primary: {
          100: 'hsl(210, 4%, 67%)',
          200: 'hsl(232, 10%, 55%)',
          300: 'hsl(213, 9%, 39%)',
          400: 'hsl(212, 27%, 19%)',
          500: 'hsl(168, 34%, 41%)',
          600: 'hsl(198, 62%, 26%)',
          700: 'hsl(167, 40%, 24%)',
          800: 'hsl(51, 100%, 49%)',
          900: 'hsl(7, 99%, 70%)',
          graywhite: '#FFFBF8',
        }
      },
      fontFamily: {
        bar: ['Barlow'],
        fra: ['Fraunces'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
