## 2025-05-15 - Optimizing Initial Bundle Size with Code Splitting

**Learning:** Large React Three Fiber scenes and secondary sections (Model, Features, HowItWorks) significantly bloat the initial bundle size (~1.5MB). Using `React.lazy` and `Suspense` effectively splits these into separate chunks, drastically improving initial load time (main bundle reduced to ~519KB).

**Action:** Identify heavy, non-critical components that are below the fold and wrap them in `lazy()` and `Suspense` fallbacks.

## 2025-05-15 - React Fast Refresh and HOCs

**Learning:** Exporting components wrapped in HOCs (like `Sentry.withProfiler`) as the default export can break React Fast Refresh if the component is anonymous or if the file has multiple exports.

**Action:** Assign the wrapped component to a named variable before exporting it as default.
