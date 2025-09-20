// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite'
import icon from 'astro-icon';

export default defineConfig({
  vite: {
    plugins: [icon(), tailwind()],
  },
})