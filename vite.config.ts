import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import svgr from "vite-plugin-svgr";

/**
 * Client-side routes that need a real HTML file in dist/.
 * Keep in sync with the routes in src/app/AppRoutes.tsx.
 */
const ROUTES = ["about"];

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    svgr(),
    emitRouteHtml(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

/**
 * GitHub Pages is a static file server with no SPA rewrite support: a direct
 * hit or refresh on a route like /about would 404 because only index.html
 * exists in dist/. This plugin copies the built index.html to
 * <route>/index.html for every client-side route, so each one is served as a
 * real file with a 200 status. The router then renders the right page.
 *
 * Requires base: "/" — with a relative base, the copied HTML would resolve
 * asset URLs against the nested path (/about/assets/...) and 404.
 */
function emitRouteHtml(): Plugin {
  return {
    name: "emit-route-html",
    apply: "build",
    async closeBundle() {
      for (const route of ROUTES) {
        const dir = path.resolve("dist", route);
        await mkdir(dir, { recursive: true });
        await copyFile(
          path.resolve("dist", "index.html"),
          path.join(dir, "index.html"),
        );
      }
    },
  };
}
