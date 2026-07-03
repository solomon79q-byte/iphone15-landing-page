## 2024-05-24 - [Bundle Size & Render Optimization]
**Learning:** Monolithic bundles in Three.js apps can reach >1.5MB easily. Code splitting with React.lazy for below-the-fold 3D components reduced main bundle size by ~65% (1.5MB to 519KB).
**Action:** Always audit bundle sizes for heavy 3D libraries and lazy-load components that aren't critical for the initial viewport.

## 2024-05-24 - [Memory Leak in Event Listeners]
**Learning:** A simple typo in window.removeEventListener ('reisze' vs 'resize') caused a silent memory leak that was only detectable by code audit.
**Action:** Double-check event listener strings and consider using a custom hook (like useWindowSize) for consistent event handling.

## 2024-05-24 - [React.memo in R3F]
**Learning:** Wrapping ModelView in React.memo prevents expensive Three.js scene re-initializations when parent state changes but props remain identical.
**Action:** Use React.memo for heavy React Three Fiber components to preserve the GPU context and avoid unnecessary draw calls.
