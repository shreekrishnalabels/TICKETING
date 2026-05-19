/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0a0e1a',
        bg2: '#0d1220',
        gold: { DEFAULT: '#e8a020', 2: '#f5c842', 3: '#c8860a' },
        apple: {
          red: '#ff453a',
          green: '#30d158',
          blue: '#0a84ff',
          orange: '#ff9f0a',
          purple: '#bf5af2',
          teal: '#5ac8fa',
        },
      },
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '4px',
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite alternate',
        shimmer: 'shimmer 4s linear infinite',
        pulse: 'pulse 2.2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease both',
        'fade-in': 'fadeIn 0.3s ease both',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(30px,20px) scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
