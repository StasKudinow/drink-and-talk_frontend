/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      'black': '#232323',
      'orange': '#C97800',
      'error-red': '#F50B0B',
      'text-black': '#101828'
    },
    spacing: {
      default: 5
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1'
    },
    borderRadius: {
      'none': '0',
      default: '5px'
    },
    fontFamily: {
      sans: ['Gill Sans', 'sans-serif']
    },
    fontWeight: {
      'font-normal': 400,
      'font-light': 300
    },
    fontSize: {
      'h1-web': '150px',
      'h1-mob': '90px',
      'h2-web': '40px',
      'h2-mob': '35px',
      'h3-web': '30px',
      'h3-mob': '25px',
      'text-sm-web': '20px',
      'text-sm-mob': '18px',
      'text-xsm-web': '18px',
      'text-xsm-mob': '18px'
    },
    extend: {},
  },
  plugins: [],
}
