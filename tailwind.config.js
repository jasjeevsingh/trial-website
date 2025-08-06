/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'trial-red': '#DC2626',
        'trial-gold': '#F59E0B',
        'trial-gray': '#1F2937',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'trial': ["DM Serif Display", 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        tip: {
          '0%, 100%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' },
        },
      },
      animation: {
        tip: 'tip 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
