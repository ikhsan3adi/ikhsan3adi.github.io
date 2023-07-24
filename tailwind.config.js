/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svg}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ["JetBrains Mono", 'mono'],
        'poppins': ["Poppins", 'sans-serif'],
        'mechsuit': ["Mechsuit", 'sans-serif'],
      },
      colors: {
        'text': '#280609',
        'background': '#e7fdfd',
        'primary': '#22ddcd',
        'secondary': '#f5c1c6',
        'accent': '#20cbbd',

        'custom-1': '#d1f2f5',
        'custom-2': '#b1a2e2',
        'custom-3': '#de86ea',
        'custom-4': '#8fb3ff',
      }
    },
  },
  plugins: [],
}

