/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./waitlist.html", 
    "./thank-you.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefbea',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        grayscale: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          1000: '#0d1117',
          1100: '#010409',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          1000: '#020617',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          1000: '#451a03',
        }
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Nunito Sans', 'sans-serif'],
        'lead': ['Literata', 'serif'],
        'logo': ['Barlow Condensed', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        'gr-1': '0.618rem',
        'gr-2': '1rem',
        'gr-3': '1.618rem',
        'gr-4': '2.618rem',
        'gr-5': '4.236rem',
        'gr-6': '6.854rem',
        'gr-half-6': '3.427rem',
      },
      backgroundImage: {
        'stars': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\"><circle cx=\"100\" cy=\"100\" r=\"1\" fill=\"white\" opacity=\"0.8\"/><circle cx=\"300\" cy=\"200\" r=\"0.5\" fill=\"white\" opacity=\"0.6\"/><circle cx=\"500\" cy=\"50\" r=\"1.5\" fill=\"white\" opacity=\"0.9\"/><circle cx=\"800\" cy=\"300\" r=\"0.8\" fill=\"white\" opacity=\"0.7\"/><circle cx=\"200\" cy=\"600\" r=\"1.2\" fill=\"white\" opacity=\"0.8\"/><circle cx=\"900\" cy=\"700\" r=\"0.6\" fill=\"white\" opacity=\"0.5\"/><circle cx=\"600\" cy=\"800\" r=\"1\" fill=\"white\" opacity=\"0.8\"/><circle cx=\"50\" cy=\"900\" r=\"0.7\" fill=\"white\" opacity=\"0.6\"/><circle cx=\"750\" cy=\"150\" r=\"1.3\" fill=\"white\" opacity=\"0.9\"/><circle cx=\"400\" cy=\"450\" r=\"0.9\" fill=\"white\" opacity=\"0.7\"/></svg>')",
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      animation: {
        'stars-twinkle': 'stars-twinkle 20s linear infinite',
        'pulse-success': 'pulse-success 2s ease-in-out infinite',
      },
      keyframes: {
        'stars-twinkle': {
          '0%, 100%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '100px 100px' },
        },
        'pulse-success': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      dropShadow: {
        'glow': [
          '0 0 20px rgba(255, 255, 255, 0.35)',
          '0 0 65px rgba(255, 255, 255, 0.2)'
        ],
        'primary': [
          '0 0 20px rgba(245, 158, 11, 0.35)',
          '0 0 65px rgba(245, 158, 11, 0.2)'
        ],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}