/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pinky: ["Pinky Unicorn", "sans-serif"]
      },
      colors: {
        gray: "#4d4d4d",
        purple: "#b62aff",
        darkPurple:"#ff0df2"
      },
      backgroundImage: {
        hero: "url('./assets/images/webp/hero-bg.webp')",
        aboutUs: "url('./assets/images/webp/about-us-bg.webp')",
        roadmap : "url('./assets/images/webp/roadmap-bg-image.webp')",
        faqs : "url('./assets/images/webp/faq-bg-image.webp')",
        team : "url('./assets/images/webp/team-bg-image.webp')",
        footer : "url('./assets/images/webp/footer-bg.webp')",
      },
      screens: {
        lg: "1025px",
        md: "770px"
      }
    },
  },
  plugins: [],
}