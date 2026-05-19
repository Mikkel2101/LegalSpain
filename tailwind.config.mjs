/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1F2D',
          light: '#1A3246',
          dark: '#081318',
        },
        sand: {
          DEFAULT: '#E8D5B0',
          light: '#F5F0E8',
          dark: '#C8B48A',
        },
        gold: {
          DEFAULT: '#C9923A',
          light: '#D9A84A',
          dark: '#A97A2A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
