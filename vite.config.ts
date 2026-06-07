import { reactRouter } from "@react-router/dev/vite";
import babel from "@rolldown/plugin-babel";
import { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/",
  define: {
    // Frozen at build time so the prerendered HTML and the client bundle
    // always agree (a render-time `new Date()` would hydration-mismatch
    // across New Year). The site rebuilds on every deploy, so it can't go
    // stale.
    __BUILD_YEAR__: JSON.stringify(String(new Date().getFullYear())),
  },
  plugins: [
    reactRouter(),
    babel({ presets: [reactCompilerPreset()] }),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
