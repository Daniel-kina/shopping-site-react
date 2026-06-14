import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // Erlaubt describe, test, expect ohne Import
    environment: 'jsdom',    // Simuliert den Browser
    setupFiles: './src/tests/setup.js', // Lädt globale Test-Einstellungen
  },
})
