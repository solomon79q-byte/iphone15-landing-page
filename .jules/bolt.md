## 2025-05-15 - [React Three Fiber & Suspense Fallbacks]
**Learning:** Components using `@react-three/drei`'s `Html` (like the `Loader` component in this project) MUST be rendered within a Three.js `Canvas`. Using them as a `Suspense` fallback in `App.jsx` for top-level components will cause a runtime error because they attempt to access the Three.js state context which doesn't exist outside the `Canvas`.
**Action:** Use `null` or a generic HTML loader for top-level `Suspense` fallbacks in `App.jsx`, and keep `Loader` only for 3D model loading inside `ModelView`.

## 2025-05-15 - [Missing ESLint Plugins]
**Learning:** The project's `.eslintrc.cjs` referenced `@react-three/eslint-plugin` but it wasn't installed in `package.json`, breaking the `lint` script.
**Action:** Removed the plugin from the config to restore linting capabilities without modifying `package.json`.
