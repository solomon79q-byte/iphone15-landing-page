## 2025-05-14 - Initial Performance Audit
**Learning:** The application has a large main bundle (~1.5MB) because all major components (including Three.js models) are imported statically. There's also a memory leak in `Hero.jsx` due to a typo in the `removeEventListener` call.

**Action:**
1. Implement code splitting for `Model`, `Features`, and `HowItWorks` components in `App.jsx`.
2. Fix the `reisze` typo in `Hero.jsx`.
3. Wrap `ModelView` in `React.memo` to avoid unnecessary 3D scene re-renders.
4. Clean up linting errors to ensure a clean build.
