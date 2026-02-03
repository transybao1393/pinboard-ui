import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      colors: {
        'macos-bg': '#f5f5f7',
        'macos-card': '#ffffff',
        'macos-border': '#d2d2d7',
        'macos-text': '#1d1d1f',
        'macos-secondary': '#86868b',
        'macos-accent': '#007aff',
        'macos-success': '#34c759',
      },
    },
  },
  plugins: [],
} satisfies Config
