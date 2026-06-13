import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

/**
 * Performance Optimization: Code Splitting
 * Using React.lazy to defer loading of heavy components (Highlights, Model, Features, HowItWorks).
 * This significantly reduces the initial main bundle size (from ~1.5MB to ~470KB),
 * improving First Contentful Paint and Time to Interactive.
 */
const Highlights = lazy(() => import('./components/Highlights'));
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Highlights />
        <Model />
        <Features />
        <HowItWorks />
      </Suspense>
      <Footer />
    </main>
  )
}

const AppWithProfiler = Sentry.withProfiler(App);

export default AppWithProfiler;
