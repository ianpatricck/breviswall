import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [preact()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.ttf"],
  preview: {
    port: 3000,
    strictPort: true,
  },
});
