/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      'sm': '576px',
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
        white: {
        300: "#F8F8F8",
        500: "#fff",
      },
        black: {
        500: "#4F5665",
        600: "#0B132A",
      },
        primary:  '#023047',
        secondary: '#FB8500',
        'sky-blue': '#C9D6FF',
        'to-white': '##E2E2E2',
         'drawer-from': 'rgba(255, 255, 255, 0.05),rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0)',
        'drawer-to': 'rgba(255, 255, 255, 1)'
      },
      backgroundColor: {
        'from-sky-blue': '#C9D6FF',
        'to-white': '##E2E2E2',
        'to-navy': '#152331',
       
        
      }
    },
    
    fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'] 
      },
  },
  plugins: [require('@tailwindcss/forms')],
}