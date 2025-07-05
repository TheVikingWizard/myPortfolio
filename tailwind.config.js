/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '982px', // 👈 changed from default 768px
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}