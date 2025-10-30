import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        duolingo: ['Feather Bold', 'sans-serif'],
        sans: ['DIN Next Rounded LT W01 Regular', 'sans-serif'],
      },
      colors: {
        'duolingo-blue': '#1CB0F6',
        'duolingo-blue-dark': '#0F82C7',
        'duolingo-blue-light': '#D6F1FF',
        'duolingo-blue-ink': '#103B5A',
        'duolingo-green': '#1CB0F6', // repurposed to blue to avoid green accents
        'duolingo-green-dark': '#0F82C7',
        'duolingo-yellow': '#FFD635',
        'duolingo-red': '#FF4B4B',
        'duolingo-gray': '#6E7B87',
        'duolingo-gray-light': '#F4F8FB',
      },
      borderRadius: {
        '2xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        duolingo: '0 6px 12px rgba(16,59,90,0.08)',
        'duolingo-md': '0 12px 20px rgba(16,59,90,0.12)',
        'duolingo-xl': '0 20px 32px rgba(16,59,90,0.16)',
      },
      animation: {
        'bounce-in': 'bounce-in 0.5s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
      },
      keyframes: {
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(1rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
});
