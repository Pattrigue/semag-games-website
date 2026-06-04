import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "./",
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), svgr()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
