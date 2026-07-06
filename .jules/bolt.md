## 2025-05-22 - [Code Splitting for Heavy 3D Components]
**Learning:** The application had a single monolithic bundle of ~1.5MB because heavy 3D components (Three.js, React Three Fiber, and large GLTF model logic) were statically imported in the root `App.jsx`. This blocked the initial paint with unnecessary JavaScript.
**Action:** Use `React.lazy` and `Suspense` for any component that pulls in large 3D libraries or complex scene logic to keep the main bundle size under 600KB.
