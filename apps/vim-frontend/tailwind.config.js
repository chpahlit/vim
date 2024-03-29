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
        content: {
          dark: {
            primary: '#000000',
            secondary: '#727272',
            tertiary: '#AFAFAF',
            disable: '#D8D8D8',
            info: '#4976F4',
            positive: '#589E67',
            error: '#AF4B4B',
          },
          light: {
            primary: '#FFFFFF',
            secondary: '#F9F9F9',
            tertiary: '#F2F2F2',
            disable: '#D9DFEB',
            info: '#4976F4',
            positive: '#589E67',
            error: '#AF4B4B',
          },
        },
        border: {
          primary: '#E4E4E4',
          secondary: '#AFAFAF',
          tertiary: '#000000',
          info: '#B6C8FB',
          positive: '#BCD8C2',
          error: '#DFB7B7',
          warning: '#EDD2B1',
        },
        background: {
          primary: '#FFFFFF',
          secondary: '#F9F9F9',
          tertiary: '#FAFAFA',
          blue: '#FAFAFA',
          green: '#EEF5F0',
          red: '#F7EDED',
          orange: '#FBF4EC',
          purple: '#F4EDF7',
          yello: '#F7F7E8',
        },
        action: {
          primary: {
            base: '#000000',
            hover: '#727272',
            active: '#FAFAFA',
            selected: '#4B4B4B',
            disable: '#F9F9F9',
          },
          secondary: {
            base: '#FAFAFA',
            base2: '#F2F2F2',
            hover: '#E8E8E8',
            active: '#E4E4E4',
            selected: '#FAFAFA',
            disable: '##D9DFEB',
          },
          outline: {
            base: '#E4E4E4',
            hover: '#000000',
            active: '#727272',
            selected: '#FAFAFA',
            disable: '#FAFAFA',
          },
          destructive: {
            base: '#BF6F6F',
            hover: '#AF4B4B',
            active: '#8C3C3C',
            selected: '#AF4B4B',
            disable: '#EFDBDB',
          },
        },
        interaction: {
          primary: {
            base: '#000000',
            hover: '#727272',
            active: '#4B4B4B',
            selected: '#4B4B4B',
            disable: '#FAFAFA',
          },
          secondary: {
            base: '#FAFAFA',
            hover: '#F2F2F2',
            active: '#E4E4E4',
            selected: '#F2F2F2',
            disable: '#D9DFEB',
          },
          outline: {
            base: '#D8D8D8',
            hover: '#727272',
            active: '#000000',
            selected: '#AFAFAF',
            disable: '#E8E8E8',
          },
          red: {
            base: '#AF4B4B',
            hover: '#8C3C3C',
            active: '#692D2D',
            selected: '#8C3C3C',
            disable: '#EFDBDB',
          },
          green: {
            base: '#589E67',
            hover: '#467E52',
            active: '#355F3E',
            selected: '#467E52',
            disable: '#DEECE1',
          },
          blue: {
            base: '#4976F4',
            hover: '#3759B7',
            active: '#253B7A',
            selected: '#3759B7',
            disable: '#DBE4FD',
          },
          yello: {
            base: '#B1AB1D',
            hover: '#8E8917',
            active: '#6A6711',
            selected: '#8E8917',
            disable: '#EFEED2',
          },
          purple: {
            base: '#954BAF',
            hover: '#773C8C',
            active: '#592D69',
            selected: '#773C8C',
            disable: '#EADBEF',
          },
          orange: {
            base: '#D28E3D',
            hover: '#A87231',
            active: '#7E5525',
            selected: '#A87231',
            disable: '#F6E8D8',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
