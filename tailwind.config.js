/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
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
        'to-white': '##E2E2E2'
      },
      backgroundColor: {
        'from-sky-blue': '#C9D6FF',
        'to-white': '##E2E2E2'
      }
    },
    fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'] 
      },
  },
  plugins: [require('@tailwindcss/forms')],
}