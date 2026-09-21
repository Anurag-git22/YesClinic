/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#D42B24',
          lit: '#F04438',
          subtle: 'rgba(212, 43, 36, 0.08)',
          glow: 'rgba(240, 68, 56, 0.25)',
        },
        maroon: {
          DEFAULT: '#7A1512',
          dark: '#580F0D',
          deep: '#430B09',
        },
        ink: {
          DEFAULT: '#2B1A18',
          muted: '#635351',
          faint: '#8C7A78',
        },
        ivory: {
          bg: '#FDFAF7',
          surface: '#FFFFFF',
          blush: '#FBEDEA',
          sand: '#F3E7DD',
        },
        sage: {
          DEFAULT: '#6B8F71',
          bg: '#EBF3ED',
          border: '#C3D9C7',
        }
      },
      fontFamily: {
        display: ['"Clash Display"', '"General Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      boxShadow: {
        'wax-seal': '0 10px 25px -5px rgba(122, 21, 18, 0.15), 0 8px 10px -6px rgba(122, 21, 18, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(122, 21, 18, 0.2)',
        'spotlight': '0 20px 40px -15px rgba(43, 26, 24, 0.07)',
        'elevated': '0 24px 48px -12px rgba(122, 21, 18, 0.08)',
        'crimson-soft': '0 8px 30px rgba(212, 43, 36, 0.18)',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        }
      }
    },
  },
  plugins: [],
}
