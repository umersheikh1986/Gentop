/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        san: "Orbitron, sans-serif",
      },
      keyframes: {
        slideAndFlip: {
          "0%, 100%": {
            transform: " translateY(-50)  translateY(0) translateY(-50)",
          },
          "50%": { transform: "translateX(0px) rotateX(180deg)" },
        },
        moveUpDown: {
          "0%, 100%": {
            transform: "translateY(0)   translateY(-100) rotateY(0deg)",
          }, // Initial and final position
          "50%": {
            transform: "translateY(1px) translateY(0px) rotateY(180deg)  ",
          }, // Moves down 20px
        },
      },
      screens: {
        xsm: "330px",
        xsmm: "425px",
        // => @media (min-width: 992px) { ... }
      },
      animation: {
        slideAndFlip: "slideAndFlip 3s ease-in-out infinite",
        moveUpDown: "moveUpDown 3s ease-in-out infinite", // 3-second loop
      },
    },
  },
  plugins: [],
};
