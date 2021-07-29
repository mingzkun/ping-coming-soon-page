module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
    colors: {
      blue: 'hsl(223, 87%, 63%)',
      'pale-blue': 'hsl(223, 100%, 88%)',
      'light-red': 'hsl(354, 100%, 66%)',
      gray: 'hsl(0, 0%, 59%)',
      'very-dark-blue': 'hsl(209, 33%, 12%)',
      white: '#FFFFFF'
    },
    fontFamily: {
      sans: ['Libre Franklin', "Sans-serif"],
    },
    boxShadow: {
      xl: '0 20px 25px -5px rgba(79, 125, 243, 0.1), 0 10px 10px -5px rgba(79, 125, 243, 0.05)',
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  }
}
