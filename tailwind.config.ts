import type { Config } from 'tailwindcss'

const styledFolders = ['app', 'views', 'widgets', 'shared', 'features']

const config: Config = {
  mode: 'jit',
  content: styledFolders.map(
    (folder) => `./src/${folder}/**/*.{js,ts,jsx,tsx,mdx}`,
  ),
  theme: {
    colors: {
      bgLight: '#F5F5F5',
      bgDark: '#092930',
      textLight: '#FFFFFF',
      textDark: '#0C0D12',
      textGray: '#404040',
      dividerLight: '#ADC4C9',
      grey: '#C3C3C3',
      darkGray: '#9F9F9F',
      lightBlue: '#D5E2E5',
      lightGreen: '#89A9B0',
      black: '#000000',
      white: '#FFFFFF',
      lightBlue1: '#E1F0F4',
      textDarkGreen: '#123D47',
      error: '#FF0000',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        heightWithHeader: 'calc(100vh - 56px)',
      },
      boxShadow: {
        custom:
          '0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
export default config
