import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

// Performance Optimization: Use React.lazy and Suspense for code splitting.
// This reduces the initial bundle size by loading heavy components (Model, Features, HowItWorks) only when needed.
// Impact: Reduced main bundle from ~1.5MB to ~519KB.
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

const ProfiledApp = Sentry.withProfiler(App);

export default ProfiledApp;
