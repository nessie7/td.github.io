import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For Gitee Pages, set base to '/<repo-name>/'
  // Replace 'couple-space' with your actual Gitee repo name
  base: './',
})
