/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xl': '1440px'
    },
    colors: {
      'black': '#232323',
      'orange': '#C97800',
      'error-red': '#F50B0B',
      'text-black': '#101828',
      'text-white': '#F8F8F8'
    },
    spacing: {
      default: '5'
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
      'text-xsm-all': '18px'
    },
    lineHeight: {
      'h1-web': '60px',
      'h2-web': '40px',
      'h3-web': '44px',
      'text-sm-web': '44px',
      'all-mob': '32px'
    },
    boxShadow: {
      'button-shadow': 'inset 7px 6px 4px rgba(0, 0, 0, .25)'
    },
    extend: {},
  },
  plugins: [],
}
