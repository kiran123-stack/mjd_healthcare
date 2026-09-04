/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#16324F',
        sky: '#38BDF8',
        'sky-light': '#E0F2FE',
        grey: '#64748B',
        'bg-page': '#F8FAFC',
        'bg-white': '#FFFFFF',
        'sky-dark': '#0EA5E9',
        'sky-mid': '#BAE6FD',
        'navy-light': '#1E4976',
        'sky-deep': '#0284C7',
        'border-light': '#E0F2FE',
        'border-subtle': '#F1F5F9',
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-md': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-sm': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'headline-sm': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        'gutter': '2rem',
        'section': '6rem',
        'section-sm': '4rem',
      }
    }
  },
  plugins: [],
}
