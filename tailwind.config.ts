import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#2D4A2D', dark: '#1F3620' },
        lime: { DEFAULT: '#C4E538' },
        cream: { DEFAULT: '#F5F5F0', darker: '#EDEDE5' },
        charcoal: '#1A1A1A',
        grayish: '#6B6B6B',
      },
      fontFamily: {
        heading: ['var(--font-archivo)', 'sans-serif'],
        script: ['var(--font-instrument)', 'serif'],
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      borderRadius: { '4xl': '32px' },
    },
  },
  plugins: [],
};
export default config;
