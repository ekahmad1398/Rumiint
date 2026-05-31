import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'import.meta.env.VITE_ASSET_VERSION': JSON.stringify(
      process.env.VITE_ASSET_VERSION ?? Date.now().toString(36),
    ),
  },
  plugins: [react()],
})
