/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#282C33",
        primary: "#008000",
        gray: "#ABB2BF"
      },
      fontFamily: {
        firacode: ["Fira Code" , "sans serif"]
      },
      content: {
        'image-before': 'url("../assets/bg.svg")',
        'image-after': 'url("../assets/dots.svg")',
        'second-image-after': 'url("../assets/slant-dots.svg")',
      },
    },
  },
  plugins: [],
}