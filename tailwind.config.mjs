/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'stl-green': {
          DEFAULT: '#006a47',
          light: '#009966',
          dark: '#004d33',
          ticker: '#38966d', // Verde do ticker
        },
        'stl-gold': {
          DEFAULT: '#d2aa56', // Dourado do ticker
          light: '#e5c47a',
          dark: '#b8923e',
        },
        'stl-red': {
          DEFAULT: '#ff4d2d',
          light: '#ff7052',
          dark: '#e63d1f',
        },
        'stl-orange': {
          DEFAULT: '#ff9d28',
          light: '#ffb34d',
          dark: '#e68a1f',
        },
        'stl-teal': {
          DEFAULT: '#007b9a',
          light: '#009bb8',
          dark: '#005f77',
        },
        'stl-cream': {
          DEFAULT: '#fefbdf',
          light: '#fffef0',
          dark: '#f5f2c8',
        },
        'stl-indigo': {
          DEFAULT: '#1e1876',
          light: '#2d2499',
          dark: '#15115a',
        },
      },
      backgroundImage: {
        'ticker-gradient': 'linear-gradient(90deg, #38966d 0%, #d2aa56 100%)',
      },
      fontFamily: {
        jairo: ['Jairo', 'system-ui', 'sans-serif'],
        superbusy: ['Superbusy Activity', 'cursive'],
        system: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen-Sans',
          'Ubuntu',
          'Cantarell',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
