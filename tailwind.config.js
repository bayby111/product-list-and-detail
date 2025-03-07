/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out 3s  infinite",
        fadeIn: "fadeIn 0.8s ease-out forwards",
        bokeh: "bokeh 5s infinite alternate",
        shake: "shake 0.3s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bokeh: {
          "0%": { transform: "translateY(0px)", opacity: "0.3" },
          "100%": { transform: "translateY(20px)", opacity: "0.8" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-3px)" },
          "50%": { transform: "translateX(3px)" },
          "75%": { transform: "translateX(-3px)" },
        },
      },
    },
  },
  plugins: [],
};

