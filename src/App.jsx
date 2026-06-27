import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

import { Suspense, lazy } from 'react';
import * as Sentry from '@sentry/react';

/**
 * ⚡ BOLT OPTIMIZATION: Code Splitting
 * Why: The main bundle was ~1.5MB because it included all Three.js components.
 * Impact: Reduces the initial bundle size to ~519KB (~65% reduction),
 * improving Initial Load Time and Largest Contentful Paint (LCP).
 */
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <Suspense fallback={null}>
        <Features />
      </Suspense>
      <Suspense fallback={null}>
        <HowItWorks />
      </Suspense>
      <Footer />
    </main>
  )
}

const SentryApp = Sentry.withProfiler(App);
export default SentryApp;
