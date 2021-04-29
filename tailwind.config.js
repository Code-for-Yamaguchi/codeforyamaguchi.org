module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    inset: {
      0: 0,
      '1/2': '50%',
      '1/3': '33.3%',
      '1/4': '25%',
      '1/5': '20%',
      '1/6': '16.6%',
      '1/7': '14.3%',
      '1/8': '12.5%',
      '1/9': '11.1%',
      '1/10': '10%',
      '1/20': '5%',
    },
    textColor: {
      primary: '#15bb44',
      top: '#111517',
      normal: {
        default: '#333d56',
        hover: '#212121',
      },
      white: 'white',
      footer: '#d1d5db',
    },
    backgroundColor: {
      primary: '#15bb44',
      circle: {
        red: '#ff4d3d',
        blue: '#6dc4f2',
        indigo: '#6187de',
        green: '#33d5ba',
        yellow: '#ffd13c',
      },
      white: 'white',
      btn: {
        normal: '#4f46e5',
        hover: '#303f9f',
      },
      footer: '#1f2937',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
