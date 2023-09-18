import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
    },
  },
  plugins: [],
}
export default config
