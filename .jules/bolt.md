# Bolt's Performance Journal

## 2025-05-15 - Event Listener Memory Leak
**Learning:** A simple typo in the event type string (e.g., 'reisze' vs 'resize') in `removeEventListener` silently fails to remove the listener, leading to memory leaks and performance degradation over time as listeners accumulate.
**Action:** Always double-check event names in cleanup functions and verify listener removal if possible during profiling.

## 2025-05-15 - Bundle Size Optimization for 3D Apps
**Learning:** In Three.js/React-Three-Fiber applications, 3D assets and their associated logic can severely bloat the initial bundle (e.g., ~1.5MB).
**Action:** Use `React.lazy` and `Suspense` to code-split heavy sections (like 3D model viewers) that aren't visible above the fold or on initial load. In this case, it reduced the main bundle by ~65% (~519KB).

## 2025-05-15 - Expensive R3F Re-renders
**Learning:** Heavy components containing Three.js `Canvas` or complex `ModelView` hierarchies re-render frequently if parent state changes, even if their specific props (like the model itself) haven't changed in a way that requires a full re-initialization.
**Action:** Wrap heavy Three.js-related components in `React.memo` to skip redundant render cycles during state transitions.
