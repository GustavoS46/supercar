/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Playfair Display', 'serif'], // Para títulos
        body: ['Open Sans', 'sans-serif'], // Para textos
      },
    },
  },
  plugins: [],
}
