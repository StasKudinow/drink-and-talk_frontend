/** @type {import('tailwindcss').Config} */
const colorTokens = new Map([
  ['basic', [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600]],
  ['accent-green', [100, 200, 300, 400, 500, 600, 700, 800, 900]],
  ['success', [100, 200, 300, 400, 500, 600, 700, 800, 900]],
  ['info', [100, 200, 300, 400, 500, 600, 700, 800, 900]],
  ['warning', [100, 200, 300, 400, 500, 600, 700, 800, 900]],
  ['error', [100, 200, 300, 400, 500, 600, 700, 800, 900]]
])

const spacingScale = 4

function unwrapColors () {
  const colors = {};
  [...colorTokens.entries()].forEach(([name, shades]) => {
    colors[name] = {}
    shades.forEach((shade) => {
      colors[name][shade] = `rgb(var(--colors__${name}_${shade}))`
    })
  })
  return colors
}

function generateSpacings (qty) {
  return [...Array(qty + 1).keys()].reduce((accumulator, item) => {
    accumulator[item] = `${item * spacingScale}px`
    return accumulator
  }, {})
}

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    colors: {
      ...unwrapColors()
    },
    screens: {
      tablet: '640px',
      desktop: '1280px'
    },
    spacing: {
      ...generateSpacings(10),
      auto: 'auto',
      inherit: 'inherit',
      landingDesktopContainerContent: '584px',
      landingDesktopContainerRest: '624px'
    },
    container: {
      center: true,
      padding: {
        default: '20px',
        tablet: '36px',
        desktop: '36px'
      }
    }
  },
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
  ],
  plugins: [],
}
