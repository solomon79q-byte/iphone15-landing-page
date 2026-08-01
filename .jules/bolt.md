## 2025-05-14 - Implementing Code Splitting and Fixing Memory Leaks
**Learning:** Initial bundle size was ~1.5MB, which is quite heavy for a landing page. By implementing `React.lazy` and `Suspense` for non-critical sections (Model, Features, HowItWorks), the main bundle was reduced to ~519KB. Also discovered a memory leak in `Hero.jsx` due to a typo in `removeEventListener` ('reisze' vs 'resize').
**Action:** Always check bundle sizes before and after changes. Monitor event listener cleanup carefully to avoid memory leaks. Use `Suspense` for heavy components to improve TTI.

## 2025-05-15 - Memoizing Heavy WebGL/Three.js Component Sub-trees
**Learning:** State updates triggered by 3D model interaction (e.g., OrbitControls azimuthal angle tracking via `onEnd`) updated the parent component's (`Model.jsx`) rotation state. This forced redundant React reconciliation and re-rendering of both heavy `ModelView` canvas sub-trees, causing potential FPS stutter and performance drops during user dragging/interaction.
**Action:** Wrap heavy React Three Fiber canvas views or 3D sub-trees in `React.memo` to skip reconciliation and re-rendering when their props remain stable, ensuring smooth 60 FPS user interaction.
