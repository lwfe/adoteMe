/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        text: '#2F3542',
        background: '#FFFFFF',
        contrast: '#57606F',
        backgroundConstrast: '#F2F0EC',
        primary:'#FF6B81',
        primaryContrast: '#FF4757'
      }
    },
  },
  plugins: [],
}

