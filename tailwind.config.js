/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        lg: '2.5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        brand: {
          ink: '#120c08',
          espresso: '#2b1d17',
          crema: '#d4b192',
          latte: '#f3e7dc',
          sand: '#f7f0e8',
          moss: '#6b8f71',
          cloud: '#faf8f5',
        },
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        glow: '0 20px 45px -20px rgba(212, 177, 146, 0.55)',
        surface: '0 18px 50px -15px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'grain-light': "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
      },
      keyframes: {
        horizon: {
          '0%': { transform: 'translateY(12px)', opacity: '0.55' },
          '50%': { transform: 'translateY(-4px)', opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0.55' },
        },
      },
      animation: {
        horizon: 'horizon 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
