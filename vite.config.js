import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // 🌟 1. Importieren

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true, // Erlaubt describe, test, expect ohne Import
    environment: "jsdom", // Simuliert den Browser
    setupFiles: "./src/tests/setup.js", // Lädt globale Test-Einstellungen
  },
});
