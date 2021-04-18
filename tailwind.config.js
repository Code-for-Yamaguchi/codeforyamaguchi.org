module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    inset: {
      '0': 0,
      '1/2': '50%',
      '1/3': '33.3%',
      '1/4': '25%',
      '1/5': '20%',
      '1/6': '16.6%',
      '1/7': '14.3%',
      '1/8': '12.5%',
      '1/9': '11.1%',
      '1/10': '10%',
      '1/20': '5%'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
