## 2025-06-20 - [Architecture] Optimized Initial Load with Code Splitting
**Learning:** The application main bundle was ~1.5MB due to Three.js and heavy 3D model components being included in the initial chunk. Since these components are below the fold, they were ideal candidates for code splitting.
**Action:** Use `React.lazy` and `Suspense` in `App.jsx` for `Model`, `Features`, and `HowItWorks`. This reduced the main bundle size to ~519KB, a ~65% reduction in initial JS payload.

## 2025-06-20 - [Bug] Memory Leak in Event Listeners
**Learning:** A simple typo in an event listener name ('reisze' vs 'resize') in `Hero.jsx` caused the cleanup function to fail silently, leading to a memory leak on every resize/unmount cycle.
**Action:** Always verify event listener strings in cleanup functions.

## 2025-06-20 - [React] Suspense Fallback Compatibility
**Learning:** The project's `Loader` component uses `@react-three/drei`'s `Html` component, which MUST be rendered inside a Three.js `<Canvas>`. Using it as a `Suspense` fallback in `App.jsx` (outside a Canvas) will cause a runtime error.
**Action:** Use `null` or a standard HTML loader as a fallback for top-level `Suspense` boundaries in this project.
