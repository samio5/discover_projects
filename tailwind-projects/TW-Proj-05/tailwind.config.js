module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily:{
      Over: "'Overpass', sans-serif",
      Ubuntu: "'Ubuntu', sans-serif",
    },
    extend: {
      colors: {
        primary: {
          10: 'hsl(356, 100%, 66%)',
          20: 'hsl(355, 100%, 74%)',
          30: 'hsl(208, 49%, 24%)',
          40: 'hsl(0, 0%, 100%)',
          50: 'hsl(240, 2%, 79%)',
          60: 'hsl(207, 13%, 34%)',
          70: 'hsl(240, 10%, 16%)',
          80: 'hsl(13, 100%, 72%)',
          90: 'hsl(353, 100%, 62%)',
          100: 'hsl(237, 17%, 21%)',
          110: 'hsl(237, 23%, 32%)',
        },
      },
    },
  },
  plugins: [],
}
