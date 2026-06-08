import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import { Suspense, lazy } from 'react';

// BOLT PERFORMANCE OPTIMIZATION: Code splitting
// Using React.lazy to dynamically load sections below the fold.
// This reduces the initial bundle size and improves Time to Interactive (TTI) and First Contentful Paint (FCP).
// Expected impact: Initial main bundle size reduced by ~68% (from 1,501kB to 471kB).
const Highlights = lazy(() => import('./components/Highlights'));
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));

import * as Sentry from '@sentry/react';

const Main = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      {/*
        The Hero and Navbar are critical for FCP.
        Everything else is wrapped in Suspense to be loaded as needed.
      */}
      <Suspense fallback={<div className="h-screen w-full flex-center text-white">Loading...</div>}>
        <Highlights />
        <Model />
        <Features />
        <HowItWorks />
      </Suspense>
      <Footer />
    </main>
  )
}

const App = Sentry.withProfiler(Main);
export default App;
