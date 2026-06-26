## 2025-05-15 - [Initial Optimizations]
**Learning:** Code splitting major components (Model, Features, HowItWorks) reduced the main bundle size significantly from ~1.5MB to ~519KB, improving initial load time. Memoizing `ModelView` prevents expensive re-renders of the 3D scene when parent state changes. Correcting event listener cleanup in `Hero` prevents memory leaks on resize.
**Action:** Always consider code splitting for heavy sections that are not immediately visible. Use `React.memo` for components that render expensive 3D content or complex animations.
