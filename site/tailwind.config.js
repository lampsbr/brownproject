module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      darkliver: {
        light: '#d9d3d7',
        DEFAULT: '#584b53',
        dark: '#161315',
      },
      tumbleweed: {
        light: '#eedbd2',
        DEFAULT: '#d8aa96',
        dark: '#593322',
      },
      honeydew: {
        light: '#ffffff',
        DEFAULT: '#f1ffe7',
        dark: '#adadad',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
