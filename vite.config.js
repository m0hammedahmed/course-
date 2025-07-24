// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/course-/', // <<< غيّر ده ليطابق اسم الريبو بالضبط
  plugins: [react()],
})
