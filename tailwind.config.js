/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors — matching parkinsonsa.com
        primary: {
          50:  '#e6f3f7',
          100: '#cce7ef',
          200: '#99cfe0',
          300: '#66b7d1',
          400: '#339fc1',
          500: '#135a73',   // main teal
          600: '#0f4d63',
          700: '#0b3d4f',   // deep teal (main brand)
          800: '#083040',
          900: '#052430',
        },
        accent: {
          DEFAULT: '#9ee7f5',  // light cyan accent
          dark:    '#5ec8e5',
        },
        dark: {
          bg:    '#0a1a1f',
          card:  '#0f2429',
          hover: '#16333a',
          border:'#1e3d45',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
      plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.line-clamp-2': {
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.line-clamp-3': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      })
    },
  ],
}