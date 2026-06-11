## 2024-06-11 - Optimized Initial Load and Fixed Event Leak
**Learning:** The initial bundle size was 1.5MB because all major sections (including heavy 3D model views) were imported synchronously. Implementing code splitting with `React.lazy` reduced the main chunk to ~470KB, a ~68% reduction. Also discovered a memory leak due to a typo in event listener cleanup ('reisze' vs 'resize').
**Action:** Use `React.lazy` for non-critical sections of the landing page to improve FCP. Always verify event listener cleanup strings for typos.
