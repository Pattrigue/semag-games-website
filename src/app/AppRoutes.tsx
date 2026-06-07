import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() =>
  import("@/pages/home/Home").then((m) => ({ default: m.Home })),
);
const About = lazy(() =>
  import("@/pages/about/About").then((m) => ({ default: m.About })),
);

// When adding a route here, also add its path to ROUTES in vite.config.ts
// so GitHub Pages serves it on direct hits.
export function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
