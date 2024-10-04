/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import defaultTheme from 'tailwindcss/defaultTheme';
import aspectRatio from '@tailwindcss/aspect-ratio';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      neutral: {
        0: '#FFFFFF',
        100: '#F8F9FC',
        200: '#F1F3F9',
        300: '#E9EDF5',
        400: '#D5D9E0',
        700: '#3F444D',
        800: '#23272F',
        900: '#1B1F27',
        1000: '#0A0D14',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#F5F5FF',
          200: '#B3B3F6',
          300: '#C5C5F8',
          500: '#6B6BEC',
          700: '#1414A0',
          800: '#0E0E6E',
          900: '#08083C',
        },
        secondary: {
          100: '#FEF8F4',
          200: '#FFECE0',
          300: '#FBD5BE',
          500: '#F7A370',
          700: '#F37123',
          800: '#D2560B',
          900: '#9D4009',
        },
        accent: {
          100: '#F2FCFC',
          200: '#E0FFFD',
          300: '#D2FCFA',
          500: '#83FCF4',
          700: '#2EE5D8',
          800: '#20B2A8',
          900: '#068078',
        },
        info: {
          100: '#F5FAFF',
          700: '#007AFF',
          800: '#005FC7',
          900: '#00448F',
        },
        success: {
          100: '#F4FCF6',
          700: '#34C759',
          800: '#289B45',
          900: '#1D6E31',
        },
        warning: {
          100: '#FFFBED',
          700: '#FFC043',
          800: '#FFAD0B',
          900: '#D28B00',
        },
        danger: {
          100: '#FEF1F2',
          700: '#E02D3C',
          800: '#BA2532',
          900: '#981B25',
        },
        special: {
          1: '#B3E7B0',
          2: '#C1F2E2',
          3: '#B1E1FB',
          4: '#B0C1F9',
          5: '#BFB0F9',
          6: '#F1A2E0',
          7: '#EEA49F',
          8: '#F6C592',
          9: '#F8DAA4',
          10: '#D8C09B',
          11: '#4FB0C7',
          12: '#1F51C3',
          13: '#7B14FF',
          14: '#DE4842',
          15: '#CD8630',
          16: '#C4A035',
        },
      },
      textColor: {
        primary: '#1D2433',
        secondary: 'rgba(29, 36, 51, 0.8)',
        disabled: 'rgba(29, 36, 51, 0.8)',
        dark: {
          primary: '#FFFFFF',
          secondary: 'rgba(2255, 255, 255, 0.75)',
          disabled: 'rgba(2255, 255, 255, 0.45)',
        },
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
};
