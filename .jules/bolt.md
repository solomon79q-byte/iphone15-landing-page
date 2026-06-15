## 2025-05-15 - [Initial Bundle Size Optimization via Code Splitting]
**Learning:** The application was loading all components, including heavy Three.js-based models, in the main bundle (~1.5MB). By utilizing `React.lazy` and `Suspense`, the initial bundle size was reduced to ~470KB (gzipped), significantly improving the initial load time.
**Action:** Always check for heavy components (especially those using 3D libraries or large assets) that are below the fold and consider code splitting as a first-line performance optimization.

**Learning:** Fixed a memory leak in `Hero.jsx` where the window `resize` event listener was not being correctly removed due to a typo ('reisze').
**Action:** Always double-check event listener types in cleanup functions to ensure proper resource management.
