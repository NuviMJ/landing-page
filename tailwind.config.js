/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          light: "#FDF4EA",
          dark: "#F2EBE3",
          DEFAULT: "#FCF4EA",
        },
        pink: {
          light: "#FFE6EE",
          DEFAULT: "#FECBC4",
        },

        gray: {
          DEFAULT: "#848484",
        },
        green: {
          DEFAULT: "#B4E1C6",
          light: "#E3F8EE",
        },

        red: { DEFAULT: "#FD0054" }, // this way we can use default bg-red-200 and so on

        orange: { DEFAULT: "#E6968B" },
      },

      fontSize: {
        xxs: "0.60rem",
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },

      fontFamily: {
        dm_sans: ["DM Sans", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        playfair: ["Playfair"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
