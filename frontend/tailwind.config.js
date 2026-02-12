/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fin: {
          bg: '#050a12',        // From your palette
          sidebar: '#bdc5e8',   // From your palette
          accent: '#007bff',    // Logo Blue
          accentLight: '#64ccff',
          card: '#12181f',      // Box gradient
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}