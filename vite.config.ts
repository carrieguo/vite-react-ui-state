import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import replace from '@rollup/plugin-replace';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      buffer: "buffer",
      process: "process/browser",
      "@": "/src",
    },
  },
  optimizeDeps: {
    include: ["buffer", "process"],
  },
});
