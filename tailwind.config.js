/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik' : ['Rubik Dirt', 'cursive'],
        'lobster':['Lobster','cursive'],
        'caveat':['Caveat', 'cursive'],
        'roboto':['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}