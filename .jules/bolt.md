## 2025-05-14 - Implementing Code Splitting and Fixing Memory Leaks
**Learning:** Initial bundle size was ~1.5MB, which is quite heavy for a landing page. By implementing `React.lazy` and `Suspense` for non-critical sections (Model, Features, HowItWorks), the main bundle was reduced to ~519KB. Also discovered a memory leak in `Hero.jsx` due to a typo in `removeEventListener` ('reisze' vs 'resize').
**Action:** Always check bundle sizes before and after changes. Monitor event listener cleanup carefully to avoid memory leaks. Use `Suspense` for heavy components to improve TTI.

## 2026-03-05 - Heavy WebGL Redundant Re-Renders
**Learning:** The `Model` component maintains rotation state (`smallRotation` and `largeRotation`) which is updated on the `onEnd` callback of `OrbitControls`. Without memoization, any change to these rotation values would trigger a full re-render of both `ModelView` components, forcing expensive WebGL scene recalculations.
**Action:** Wrap heavy WebGL components like `ModelView` in `React.memo` to isolate them from parent state changes that do not affect their direct props.
