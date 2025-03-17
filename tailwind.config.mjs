/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'max-width': '65ch',
            color: '#374151',
            h1: {
              color: '#111827',
              'font-weight': '700',
              'font-size': '2.5rem',
            },
            h2: {
              color: '#1F2937',
              'font-weight': '600',
              'font-size': '1.875rem',
            },
            h3: {
              color: '#374151',
              'font-weight': '600',
              'font-size': '1.5rem',
            },
            strong: {
              color: '#111827',
            },
            a: {
              color: '#2563EB',
              '&:hover': {
                color: '#1D4ED8',
              },
            },
            code: {
              color: '#111827',
              'background-color': '#F3F4F6',
              padding: '0.25rem 0.5rem',
              'border-radius': '0.25rem',
              'font-size': '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}