/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        customMobile: "200px", // 👈 Your breakpoint
      },
    },
  },
  plugins: [],
}