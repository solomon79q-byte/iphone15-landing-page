## 2025-05-14 - [Code Splitting and Memory Leak Fix]
**Learning:** Large React applications with 3D models and videos benefit significantly from code splitting. Initial bundle size was reduced from ~1.5MB to ~470KB by lazy loading sections.
**Action:** Always consider `React.lazy` for heavy components and verify event listener cleanup (avoid typos like 'reisze').
