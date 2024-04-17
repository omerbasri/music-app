/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backdrop: '#282828',
        primary: '#1db954',
        sidebar: '#303030',
        active: '#d1d0d7',
        link: '#b3b3b3',
        footer: '#242424',
        hoverSidebar: '#404040'
      }

    },
  },
  plugins: [],
}

