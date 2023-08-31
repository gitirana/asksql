import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-ubuntu)'],
      },
      colors: {
        'cotton-candy': {
          50: '#F0FBFD',
          100: '#D0F3FA',
          200: '#B9EEF8',
          300: '#98E6F4',
          400: '#85E1F2',
          500: '#66D9EF',
          600: '#5DC5D9',
          700: '#489AAA',
          800: '#387783',
          900: '#2B5B64',
        },
        lemon: {
          8: '#151A2A',
          50: '#eaffe7',
          100: '#e0ffda',
          200: '#beffb3',
          300: '#2dff0b',
          400: '#29e60a',
          500: '#24cc09',
          600: '#22bf08',
          700: '#1b9907',
          800: '#147305',
          900: '#105904',
        },
        gum: {
          50: '#fff2f9',
          100: '#ffebf6',
          200: '#fed5ed',
          300: '#fd78c4',
          400: '#e46cb0',
          500: '#ca609d',
          600: '#be5a93',
          700: '#984876',
          800: '#723658',
          900: '#592a45',
        },
        blueberry: '#07061D',
        backgroud: '#030712',
        pistachio: '#D3FFCC',
        cream: '#E2DFCD',
        foam: '#D7DAE2',
        snow: '#FFFFFF',
        guava: '#DCFFD6',
      },
    },
  },
  plugins: [],
}
export default config
