import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pergami: '#F5EDD6',
        bru: '#3D1F0D',
        bordeus: '#8B1A1A',
        daurat: '#C4A44A',
        tinta: '#2C1810',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
