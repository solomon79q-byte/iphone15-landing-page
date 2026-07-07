import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

// ⚡ Bolt: Implement code splitting for heavy components
// What: Use React.lazy and Suspense to load Model, Features, and HowItWorks components
// Why: These components contain heavy assets (Three.js models, videos) that are not needed for initial paint.
// Impact: Reduces the initial bundle size and speeds up the first meaningful paint.
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Suspense fallback={null}>
        <Model />
        <Features />
        <HowItWorks />
      </Suspense>
      <Footer />
    </main>
  )
}

const SentryApp = Sentry.withProfiler(App);

export default SentryApp;
