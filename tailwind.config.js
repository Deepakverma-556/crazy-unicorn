/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pinky : ["Pinky Unicorn","sans-serif"]
      },
      colors: {
        gray: "#4d4d4d",
        purple: "#b62aff",
        darkPurple:"#ff0df2"
      },
      backgroundImage: {
        'roadmap' : "url('./assets/images/webp/roadmap-bg-image.webp')",
      },
    },
  },
  plugins: [],
}