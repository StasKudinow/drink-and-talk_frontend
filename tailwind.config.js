/** @type {import('tailwindcss').Config} */
const spacingScale = 5

function generateSpacings (el) {
	return [...Array(el + 1).keys()].reduce((accumulator, item) => {
		accumulator[item] = `${item * spacingScale}px`
		return accumulator
	}, {})
}

//TODO: theme&extend
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        dots_1: 'url(../src/images/dots_1.svg)',
        dots_2: 'url(../src/images/dots_2.svg)',
        main_img: 'url(../src/images/main_img.svg)',
        main_img_2: 'url(../src/images/main_img_2.svg)',
        categories_img: 'url(../src/images/categories_img.svg)',
        profile_icon: 'url(../src/images/profile_icon.svg)',
        profile_button: 'url(../src/images/profile_button.svg)',
        bar_image: 'url(../src/images/bar_image.svg)',
        popup_close_btn: 'url(../src/images/popup_close_btn.svg)',
        add_image: 'url(../src/images/add_image.svg)',
      },
      colors: {
        black: '#232323',
        orange: '#C97800',
        white: '#F8F8F8',
        green: '#2DC033',
        gray: 'rgba(255, 255, 255, 0.3)',
        'error-red': '#F50B0B',
        'text-black': '#101828',
        overlay: 'rgba(0, 0, 0, .4)',
      },
      spacing: {
        ...generateSpacings(1000),
      },
      opacity: {
        0: '0',
        20: '0.2',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        80: '0.8',
        100: '1',
      },
      borderRadius: {
        none: '0',
        default: '5px',
      },
      fontFamily: {
        sans: ['Gill Sans', 'sans-serif'],
      },
      fontWeight: {
        'font-normal': 400,
        'font-light': 300,
      },
      fontSize: {
        'h1-web': '150px',
        'h1-mob': '90px',
        'h2-web': '40px',
        'h2-mob': '35px',
        'h3-web': '30px',
        'h3-mob': '25px',
        'text-sm-web': '20px',
        'text-xsm-all': '18px',
        '22': '22px',
        '110': '110px',
        '120': '120px',
      },
      lineHeight: {
        'h1-web': '60px',
        'h2-web': '40px',
        'h3-web': '44px',
        'text-sm-web': '44px',
        'all-mob': '32px',
        '115': '115px',
        '126': '126px',
        '138': '138px',
        '172': '172px',
      },
      boxShadow: {
        'button-shadow':
          'inset 7px 6px 4px rgba(0, 0, 0, .25)',
      },
      transitionProperty: {
        'top': 'top',
      },
    },
  },
  plugins: [],
}
