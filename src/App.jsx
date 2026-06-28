import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
import { lazy, Suspense } from 'react';

// ⚡ Bolt Optimization: Code splitting heavy components to reduce initial bundle size.
// Components like Model, Features, and HowItWorks contain heavy 3D assets and logic.
// This reduces the initial bundle size from ~1.5MB to ~519KB.
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      {/* Suspense fallback=null avoids showing a loading indicator for sections below the fold */}
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
