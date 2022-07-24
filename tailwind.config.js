/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'themeColor': '#0f0e0f',
        'themeDarkColor': '#131011',
        'themeGold': '#987D3C',
      },
      fontFamily: {
        'lora': ['Playfair Display', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif']
      },
      scale: {
        '101': '1.01'
      }

    },
  },
  plugins: [],
}
