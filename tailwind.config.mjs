/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF8',
        surface:    '#FFFFFF',
        text:       '#2A2826',
        muted:      '#6B645C',
        accent:     '#B8A99A',
        'accent-dark': '#7C6B5E',
        divider:    '#E5DDD6',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"Jost"', 'sans-serif'],
      },
      fontSize: {
        'h1': ['4.5rem', { lineHeight: '1.1', fontWeight: '300' }],
        'h2': ['3rem',   { lineHeight: '1.15', fontWeight: '300' }],
        'h3': ['1.75rem',{ lineHeight: '1.2',  fontWeight: '400' }],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};
