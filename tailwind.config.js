module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#C2A3D1",
        secondary: "#DB871C",
      },
      backgroundImage: {
        // "no-man-sky": "url('./images/no-man-sky.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
