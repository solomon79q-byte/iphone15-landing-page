## 2025-05-15 - [Initial Profiling & Code Splitting]
**Learning:** The initial main bundle was ~1.5MB due to heavy Three.js and GSAP components being imported statically in App.jsx.
**Action:** Implemented React.lazy and Suspense to code-split Highlights, Model, Features, and HowItWorks. Reduced main bundle size to ~470KB.

## 2025-05-15 - [Memory Leak in Hero.jsx]
**Learning:** A typo ('reisze') in a cleanup function for a window event listener prevented the listener from being removed.
**Action:** Corrected typo to 'resize' to ensure proper cleanup.
