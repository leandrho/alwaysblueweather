/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-summer': "url('/bg-summer.jpg')",
        'hero-winter': "url('/bg-winter.jpg')",
      },
    },
  },
  plugins: [],
}

