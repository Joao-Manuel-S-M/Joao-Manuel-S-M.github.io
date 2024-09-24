/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      fontFamily: {
        matter: ["Matter", "sans-serif"],
        inria: ["Inria Serif", "serif"],
        italiana: ["Italiana", "sans-serif"],
        dmserif: ["DM Serif Display", "serif"],
      },

      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(20%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(20%)", opacity: "0" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.2s ease-out forwards",
        "slide-down": "slide-down 0.2s ease-out forwards",
      },

      screens: {
        "md": "800px",
        "2md": "900px",
        "mid": "600px"
      },
    },
  },
  plugins: [],
};
