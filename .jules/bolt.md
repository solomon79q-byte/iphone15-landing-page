## 2025-05-14 - Implementing Code Splitting and Fixing Memory Leaks
**Learning:** Initial bundle size was ~1.5MB, which is quite heavy for a landing page. By implementing `React.lazy` and `Suspense` for non-critical sections (Model, Features, HowItWorks), the main bundle was reduced to ~519KB. Also discovered a memory leak in `Hero.jsx` due to a typo in `removeEventListener` ('reisze' vs 'resize').
**Action:** Always check bundle sizes before and after changes. Monitor event listener cleanup carefully to avoid memory leaks. Use `Suspense` for heavy components to improve TTI.
