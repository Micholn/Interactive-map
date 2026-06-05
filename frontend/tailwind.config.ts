import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif']
      },
      boxShadow: {
        glow: '0 0 60px rgba(129, 140, 248, 0.35)',
        emeraldGlow: '0 0 50px rgba(16, 185, 129, 0.25)'
      },
      backgroundImage: {
        'aurora': 'radial-gradient(circle at top left, rgba(56,189,248,.25), transparent 28%), radial-gradient(circle at top right, rgba(168,85,247,.24), transparent 26%), radial-gradient(circle at bottom, rgba(34,197,94,.14), transparent 30%)'
      }
    },
  },
  plugins: [],
};
export default config;
