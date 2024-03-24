const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
        },
        secondary: {
          DEFAULT: '#727272',
        },
        tertiary: {
          DEFAULT: '#AFAFAF',
        },
        disable: {
          DEFAULT: '#D8D8D8',
        },
        info: {
          DEFAULT: '#4976F4',
          // Add any other shades if needed
        },
        positive: {
          DEFAULT: '#589E67',
          // Add any other shades if needed
        },
        error: {
          DEFAULT: '#AF4B4B',
          // Add any other shades if needed
        },
        neutral: {
          100: '#000000',
          90: '#4B4B4B',
          80: '#727272',
          70: '#AFAFAF',
          60: '#D9DFEB',
          50: '#E4E4E4',
          40: '#D9DFEB',
          30: '#D9DFEB',
          20: '#D9DFEB',
          10: '#FCFCFE',
        },
        red: {
          100: '#230F0F',
          90: '#461E1E',
          80: '#692D2D',
          70: '#8C3C3C',
          60: '#AF4B4B',
          50: '#D9DFEB',
          40: '#CF9393',
          30: '#DFB7B7',
          20: '#EFDBDB',
          10: '#F7EDED',
        },
        orange: {
          100: '#2A1C0C',
          90: '#543918',
          80: '#7E5525',
          70: '#A87231',
          60: '#D28E3D',
          50: '#DBA564',
          40: '#E4BB8B',
          30: '#EDD2B1',
          20: '#F6E8D8',
          10: '#FBF4EC',
        },
        yello: {
          100: '#232206',
          90: '#47440C',
          80: '#6A6711',
          70: '#8E8917',
          60: '#B1AB1D',
          50: '#C1BC4A',
          40: '#D0CD77',
          30: '#E0DDA5',
          20: '#F7F7E8',
          10: '#F7F7E8',
        },
        purple: {
          100: '#1E0F23',
          90: '#3C1E46',
          80: '#592D69',
          70: '#773C8C',
          60: '#954BAF',
          50: '#AA6FBF',
          40: '#BF93CF',
          30: '#F4EDF7',
          20: '#F4EDF7',
          10: '#F4EDF7',
        },
        green: {
          100: '#122015',
          90: '#233F29',
          80: '#355F3E',
          70: '#467E52',
          60: '#589E67',
          50: '#79B185',
          40: '#9BC5A4',
          30: '#BCD8C2',
          20: '#DEECE1',
          10: '#EEF5F0',
        },
        irish: {
          100: '#121320',
          90: '#23263F',
          80: '#35395F',
          70: '#464C7E',
          60: '#585F9E',
          50: '#D9DFEB',
          40: '#9B9FC5',
          30: '#BCBFD8',
          20: '#DEDFEC',
          10: '#EEEFF5',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
