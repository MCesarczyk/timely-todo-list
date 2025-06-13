import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      'import.meta.env': {},
    },
    server: {
      port: 4200,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:4000',
          changeOrigin: true,
        },
      },
    },
    preview: {
      port: 4300,
      host: 'localhost',
    },
    plugins: [react()],
  }
})
