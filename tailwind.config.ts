import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        tusker: ['Tusker Grotesk', 'sans-serif'],
      },
      colors: {
        neon: '#15e55f',
        dark: {
          DEFAULT: '#0a0a0a',
          100: '#222326',
          200: '#36383d',
          300: '#99a2b5',
        },
      },
    },
  },
  plugins: [],
};

export default config;