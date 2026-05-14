/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        brand: {
          navy: '#0f1e4a',
          sky: '#1fa9c8',
          gold: '#efc56f',
          mist: '#eef7fb',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        fa: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
