import { index, type RouteConfig, route } from "@react-router/dev/routes";

// When adding a route here, also add its path to `prerender` in
// react-router.config.ts so it gets a static HTML file.
export default [
  index("pages/home/Home.tsx"),
  route("about", "pages/about/About.tsx"),
] satisfies RouteConfig;
