module.exports = {
  mode: 'jit',
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', , './layouts/**/*.{js,ts,jsx,tsx}'],
    safelist: ['from-red-600', 'via-red-600', 'to-red-600',
      'from-red-400', 'via-red-400', 'to-red-400',
      'from-green-400', 'via-green-400', 'to-green-400',
      'from-yellow-300', 'via-yellow-300', 'to-yellow-300',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
