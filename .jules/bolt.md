## 2024-05-24 - [Bundle Size and Memory Leak Optimizations]
**Learning:** Found a critical memory leak in `Hero.jsx` where a typo in `removeEventListener` ('reisze') prevented cleanup of the 'resize' event. Also, the application had a monolithic bundle of ~1.5MB which could be easily split.
**Action:** Always verify event listener cleanup strings. Use `React.lazy` and `Suspense` for sections containing heavy 3D models or videos to significantly improve initial load time. Memoize R3F components like `ModelView` to prevent redundant scene re-renders.
