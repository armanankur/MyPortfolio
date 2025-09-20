/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        redhat: ['"Red Hat Display"', "sans-serif"],
        tangerine: ['"Tangerine"', "cursive"],
      },

      keyframes: {
        "rotate-vert-center": {
          "0%": { transform: "rotateY(0)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        "rotate-hor-center": {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-360deg)" },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '100% 50%' },
          '50%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        "rotate-vert-center-normal":
          "rotate-vert-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1 normal both",
        "rotate-hor-center-normal":
          "rotate-hor-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1 normal both",
          'gradient-x': 'gradient-x 3s ease infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
       backgroundImage: {
        'conic-at-tl': 'conic-gradient(at top left, var(--tw-gradient-stops))',
        'conic-at-tr': 'conic-gradient(at top right, var(--tw-gradient-stops))',
         'radial-ellipse-top': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
         'conic-bottom-left': 'conic-gradient(at bottom left, var(--tw-gradient-stops))',
         'conic-left': 'conic-gradient(at left, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
