import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        duolingo: ['Nunito', 'sans-serif'], // class: font-duolingo
      },
      colors: {
        'duolingo-blue': '#1cb0f6',
        'duolingo-blue-dark': '#0F82C7',
        'duolingo-blue-light': '#D0F0FF',
        'duolingo-yellow': '#FFD635',
        'duolingo-red': '#FF4B4B',
        'duolingo-gray': '#777777',
        'duolingo-gray-light': '#F5F5F5',
      },
      borderRadius: {
        '2xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        duolingo: '0 4px 8px rgba(0,0,0,0.1)',
        'duolingo-md': '0 8px 16px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
});
