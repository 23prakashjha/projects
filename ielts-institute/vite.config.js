import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  theme: {
  extend: {
    colors: {
      background: 'var(--bg)',
      card: 'var(--card)',
      accent: 'var(--accent)',
      muted: 'var(--muted)',
    },
    borderRadius: {
      lg: 'var(--radius)',
    },
  },
}

})

