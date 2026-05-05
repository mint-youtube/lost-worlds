/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#1B1812',
        'bg-secondary': '#251F16',
        fg: '#E8DCC0',
        muted: '#A89878',
        accent: '#C8A458',
        accent2: '#967A38',
        border: '#3A3022',
        hover: '#241E16',
      },
      fontFamily: {
        heading: ["'Nanum Myeongjo', serif", 'system-ui', 'sans-serif'],
        body: ["'Nanum Myeongjo', serif", 'system-ui', 'sans-serif'],
        mono: ["'Courier Prime', monospace", 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1100px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#E8DCC0',
            '--tw-prose-headings': '#E8DCC0',
            '--tw-prose-links': '#C8A458',
            '--tw-prose-bold': '#C8A458',
            '--tw-prose-quotes': '#A89878',
            '--tw-prose-quote-borders': '#C8A458',
            '--tw-prose-code': '#C8A458',
            '--tw-prose-borders': '#3A3022',
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              borderBottom: '1px solid #3A3022',
              paddingBottom: '0.5rem',
              marginTop: '3rem',
            },
            blockquote: {
              background: '#241E16',
              borderRadius: '0 8px 8px 0',
              padding: '0.8rem 1.2rem',
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '12px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              margin: '2rem auto',
            },
            code: {
              background: '#241E16',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid #3A3022',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
