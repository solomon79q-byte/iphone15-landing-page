## 2026-06-17 - [App-wide Code Splitting]
**Learning:** Initial bundle size was ~1.5MB, heavily weighted by Three.js components and large 3D models. Implementing React.lazy and Suspense at the App level allows for significant initial load time reduction.
**Action:** Always consider code splitting for major sections, especially those containing heavy dependencies like Three.js or GSAP.

### Performance Metrics:
- **Main Bundle Size (Before):** ~1.5MB
- **Main Bundle Size (After):** ~471KB
- **Improvement:** ~68% reduction in initial main bundle size.
- **Strategy:** Code-split Highlights, Model, Features, and HowItWorks components.
