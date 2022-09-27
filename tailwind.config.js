/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mainfont: ['"Nunito Sans", Arial, sans-serif'],
      },
      backgroundImage: {
        lightpath: 'url("../images/Path.svg")',
        darktpath: 'url("../images/Path-light.svg")',
        "light-search-icon": 'url("../images/icon-search-black.svg")',
        "dark-search-icon": 'url("../images/icon-search-white.svg")',
        "light-shape": 'url("../images/Shape.svg")',
        "dark-shape": 'url("../images/Shape-white.svg")',
      },
      backgroundPosition: {
        searchiconPosition: "32px center",
        selecticonPosition: "right 20px center",
      },
    },
  },
  plugins: [],
};
