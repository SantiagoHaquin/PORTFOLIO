/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#00013a',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        spaceMono: ['Space Mono', 'monospace'],
        roboto: ['Roboto', 'serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
