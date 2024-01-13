/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBackground: '#FCF5ED',
        primaryContent: '#F4BF96',
        primarySubContent: '#CE5A67',
        primarytext: '#1F1717',
        secondContent: "#f9ddc7",
        secondRed: "#dc8992",
        secondBg: "#FCEEED"
      }
    },
  },
  plugins: [],
}

