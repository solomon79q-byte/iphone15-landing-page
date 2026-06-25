## 2025-05-15 - [Initial Optimizations]
**Learning:** The application had a very large initial bundle (~1.5MB) due to heavy Three.js components and models being imported statically. Memory leak was found in `Hero.jsx` due to a typo in `removeEventListener`.
**Action:** Applied code splitting using `React.lazy` and `Suspense` for heavy components (`Model`, `Features`, `HowItWorks`). This reduced the main bundle size by ~65% (from 1.5MB to 519KB), significantly improving the Time to Interactive. Corrected the typo in `Hero.jsx`. Dispatched ESLint issues to ensure build stability.
