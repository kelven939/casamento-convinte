import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" faz o site funcionar em qualquer pasta ou domínio (Netlify, GitHub Pages, etc.)
export default defineConfig({
  base: "./",
  plugins: [react()],
});
