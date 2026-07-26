/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F8F6F2',
        'text': '#222222',
        'secondary-text': '#777777',
        'accent': '#26473D',
        'gold': '#A78C63',
        'divider': '#D8D4CF',
      },
      fontFamily: {
        'sans': ['Inter', '"PingFang TC"', '"Heiti TC"', '"Noto Sans TC"', '"Microsoft JhengHei"', 'sans-serif'],
        'serif': ['"Source Serif 4"', '"Noto Serif TC"', '"Songti TC"', '"PMingLiU"', 'serif'],
      }
    },
  },
  plugins: [],
}
