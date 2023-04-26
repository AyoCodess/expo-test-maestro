/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const nativewind = require('nativewind/tailwind');
module.exports = {
  darkMode: 'class',
  content: [
    './App.main.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/ui/**/*.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/navigation/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {},
  plugins: [],
  presets: [nativewind]
};
