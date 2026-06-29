
## 2026-06-29 - [Bundle Size Optimization via Code Splitting]
**Learning:** In Three.js/GSAP heavy React applications, the initial bundle size can balloon rapidly (to 1.5MB+ in this case). Even if components are rendered later in the scroll depth, they block the main thread during initial parse/execution if not lazy-loaded.
**Action:** Always use React.lazy and Suspense for components that import large libraries (Three.js, GSAP) or high-poly models, especially if they are below the fold.
