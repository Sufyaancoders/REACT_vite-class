/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: {
          700: '#2C333F',
          800: '#161D29',
          900: '#000814',
        }
      },
      screens: {
        'md': '768px',
      },
    },
  },
  plugins: [],
}