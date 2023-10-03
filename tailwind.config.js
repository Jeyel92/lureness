/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
export const content = [
  './node_modules/flowbite-react/**/*.js',
  './src/**/*.{js,ts,jsx,tsx}',
  './public/**/*.html',
]
export const theme = {
  extend: {
    fontFamily: {
      sans: ['var(--font-family-sans)'],
      serif: ['var(--font-family-serif)'],
    },
  },
}
export const plugins = [
  plugin(function ({ addVariant }) {
    addVariant('children', '&>*')
  }),
  require('@tailwindcss/forms'),
  require('flowbite/plugin'),
]
