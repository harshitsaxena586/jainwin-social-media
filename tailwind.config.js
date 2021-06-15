module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: "Montserrat",
        secondary: "Nunito",
        test: "Playfair Display",
        inter: "Inter",
        roboto: "Roboto",
      },
      colors: {
        accent: "#6366F1",
        text: "#333333",
      },
    },
  },
  variants: {},
  plugins: [],
};
