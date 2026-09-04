import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.ttf"],
});
