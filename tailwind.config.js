/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {

    extend: {
      colors : {
        'white' : '#F1F1F1',
        'gray' : '#ECECEC',
        'black' : '#0D0D0D',
        'red' : '#A02323',
        'link' : '#2577A2'
      },
      fontFamily : {
        'raleway' : ['Raleway', 'sans-serif']
      },
      borderWidth : {
        'px' : '1px'
      },
      fontSize : {
        '10xl' : '12rem'
      },
      height : {
        'screen' : 'calc(100vh - 6rem)'
      }
    },
  },
  plugins: [],
}

