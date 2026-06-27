# Bolt's Performance Journal

## 2025-05-14 - [Initial Performance Baseline and Optimizations]
**Learning:** React Three Fiber (R3F) applications can suffer from massive initial bundle sizes because Three.js and heavy 3D components are often bundled into the main chunk. Additionally, heavy 3D scenes are prone to redundant re-renders.
**Action:** Always use `React.lazy` for major R3F sections to reduce initial TBT and LCP. Use `React.memo` for `ModelView` components to isolate 3D scene reconciliation from React state changes in parent components. Double-check `useEffect` cleanup event names to prevent memory leaks (e.g., 'resize' vs 'reisze').

**Impact:**
- Bundle Size: Reduced initial chunk from 1.5MB to 519KB (~65% reduction).
- Rendering: Prevented redundant 3D scene re-renders using `React.memo`.
- Memory: Fixed a leak in `Hero.jsx` by correcting a typo in the 'resize' event listener cleanup.
