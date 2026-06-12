## 2025-05-15 - [Initial Profiling & Optimization]
**Learning:** Three.js and complex 3D model components (like the `Model` component) significantly bloat the initial bundle size (1.5MB in this case). Using `React.lazy` and `Suspense` to code-split these heavy components can reduce the main bundle size by nearly 70%, drastically improving initial load time and metrics like LCP and TBT.
**Action:** Always identify heavy Three.js or 3D related components and implement code-splitting to ensure they don't block the initial page render.

## 2025-05-15 - [Memory Leak in Hero Component]
**Learning:** A simple typo in `window.removeEventListener` ('reisze' instead of 'resize') prevented the cleanup of a resize listener in `Hero.jsx`, causing a memory leak every time the component unmounted.
**Action:** Carefully verify event listener types in both `addEventListener` and `removeEventListener`. Ensure proper cleanup in `useEffect` to prevent leaks, especially on global objects like `window`.
