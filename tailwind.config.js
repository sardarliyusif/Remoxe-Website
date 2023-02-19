/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'system-ui']
    },
    extend: {
      fontSize: {
        'xxs': '.625rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '1.875rem',
        '5xl': '2rem',
        '6xl': '2.125rem',
      },
      colors: {
        primary: "#FF7348",
        greylish: "#707070",
        dark: '#252525',
        light: '#F4F4F4',
        iconLight: "#E5E5E5"
      },
      boxShadow: {
        custom: "0px 0px 4px 0px #dad8d8",
        customDark: "0px 0px 4px 0px #1C1C1C",
        navbarShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}
