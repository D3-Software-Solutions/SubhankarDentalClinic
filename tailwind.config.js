module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c5282', // blue
          light: '#3182ce',
        },
        accent: {
          DEFAULT: '#38a169', // green
          dark: '#2f855a',
        },
        gold: {
          DEFAULT: '#FFD700',
        },
        background: '#fafafa',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}; 