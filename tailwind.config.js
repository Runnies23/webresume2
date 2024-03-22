/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '90rem',
        'fit2' : '40rem',
        'fit3' : '45rem',
        'bigest' : '120rem',
        'helo' : '35rem',
        'timeline' : '360rem',
      },
      width: {
        '128': '125rem',
        't1200':'1200px'
      },
      colors: {
        'blueback': '#5B80E7',
        'gradi' : '#91AAEE',
        'whiterandom' : '#f7f7f7',
      }, 
      rotate: {
        'abit': '#5B80E7',
      },
    },
  },
  plugins: [require("daisyui")],
}

