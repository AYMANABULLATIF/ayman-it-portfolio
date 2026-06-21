/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'sans-serif',
        ],
      },
      colors: {
        ink: '#102033',
        slateblue: '#27364f',
        support: '#2563eb',
        calm: '#0f766e',
      },
      boxShadow: {
        soft: '0 18px 50px -28px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
};
