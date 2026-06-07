import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: false,
  prerender: ["/", "/about"],
  // Opt in to the React Router v8 behaviors early — none affect this site
  // (no middleware, no runtime server) and they make the v8 upgrade a no-op.
  // v8_trailingSlashAwareDataRequests stays OFF: with it enabled, prerender
  // emits build/client/about/index.html as an empty shell instead of real
  // HTML (broken as of 7.17.0). Re-test when bumping react-router.
  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: false,
  },
} satisfies Config;
