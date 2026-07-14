import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages: 站点部署在 https://nessie7.github.io/td.github.io/
  base: '/td.github.io/',
})
