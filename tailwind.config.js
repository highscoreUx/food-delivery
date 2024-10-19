/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: ({ colors }) => ({
      primary: {
        50: "#E9F4E8",
        100: "#CAE4C6",
        500: "#55AA45",
        900: "#215A18",
      },
      black: colors.neutral,
      white: colors.white,
      transparent: colors.transparent,
    }),
    extend: {},
  },
  plugins: [],
};
