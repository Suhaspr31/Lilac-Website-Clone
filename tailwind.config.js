/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'serif'],
      },
      colors: {
        sage: {
          light: '#6B8E61',
          DEFAULT: '#4A6741',
          dark: '#354A2E',
        },
        sand: {
          light: '#FAF9F6',
          DEFAULT: '#F5F5F0',
          dark: '#E6E2DD',
        }
      }
    },
  },
  plugins: [],
};