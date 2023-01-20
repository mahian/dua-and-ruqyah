/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1FA45B',
        'dark-2': '#111827',
        'dark': '#1f2937',
        'dark-3': '#334155',
      }
    },
  },
  plugins: [],
}
