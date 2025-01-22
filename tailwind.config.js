/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/background.jpg')"
      },
      screens: {
        'phones': {'min': '320px', 'max': '500px'},
        'md': {'min': '375px', 'max': '550px'},
        'lg': {'min': '425px', 'max': '600px'},
      }
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      JetBrainsMono: ['JetBrains Mono', 'monospace'],
      Lobster: ['Lobster', 'cursive']
    }
  },
  plugins: [],
}