import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { vite as million } from "million/compiler";

export default defineConfig({
  plugins: [
    million({ auto: true }),
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 60, lossless: true },
    }),
  ],
});
