/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a3e72',
        secondary: '#f8b400',
        dark: '#2c3e50',
        light: '#f8f9fa',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 15px rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 8px 25px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'custom': '8px',
      },
      transitionProperty: {
        'custom': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.3)',
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          'text-shadow': '1px 1px 2px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 