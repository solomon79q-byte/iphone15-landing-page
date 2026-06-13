## 2025-05-15 - [Code Splitting and Linting Fixes]
**Learning:** The application had a very large initial bundle (~1.5MB) because all major sections (Model, Features, Highlights, HowItWorks) were imported synchronously in `App.jsx`. Code splitting using `React.lazy` and `Suspense` significantly reduced the main bundle size to ~470KB.
**Action:** Always check the main entry point for large component imports that are not immediately visible or required for the initial fold.

## 2025-05-15 - [Linting Configuration for Three.js/R3F]
**Learning:** The missing `@react-three/eslint-plugin` was blocking the linting process. In its absence, common Three.js properties like `castShadow`, `geometry`, etc., were flagged as unknown properties.
**Action:** If `@react-three/eslint-plugin` is not available, manually disable `react/no-unknown-property` for Three.js projects to allow the build to proceed.
