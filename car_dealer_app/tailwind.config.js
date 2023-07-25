/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      },
      fontFamily: {
        logo: ['Dosis', 'sans-serif'],
        headings: ['Lilita One', 'sans-serif'],
        paragraphs: ['Josefin Slab', 'serif'],
      },
    },
  },
  plugins: [],
}
