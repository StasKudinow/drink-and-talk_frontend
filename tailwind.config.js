/** @type {import('tailwindcss').Config} */


// todo 
// const colorTokens = new Map([])

const spacingScale = 5

function generateSpacings (qty) {
  return [...Array(qty + 1).keys()].reduce((accumulator, item) => {
    accumulator[item] = `${item * spacingScale}px`
    return accumulator
  }, {})
}

module.exports = {
  theme: {
    spacing: {
      ...generateSpacings(10),
      auto: 'auto',
      inherit: 'inherit',
      landingDesktopContainerContent: '584px',
      landingDesktopContainerRest: '624px'
    }
  },
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
  ],
  plugins: [],
}
