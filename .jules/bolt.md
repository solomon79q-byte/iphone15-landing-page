## 2025-05-14 - [React.lazy and Three.js Loader Compatibility]
**Learning:** The `Loader` component in this codebase uses `@react-three/drei/Html`, which requires a Three.js `Canvas` context. Using it as a `Suspense` fallback for top-level lazy-loaded components in `App.jsx` (like the `Model` section) will cause the application to crash.
**Action:** Use `null` or a standard HTML fallback for `Suspense` at the `App.jsx` level. Keep `Loader` strictly for usage inside `Canvas` components (like in `ModelView.jsx`).
