import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import { lazy, Suspense } from 'react';
import * as Sentry from '@sentry/react';

const Highlights = lazy(() => import('./components/Highlights'));
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));

const AppleWebsite = () => {
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

const SentryApp = Sentry.withProfiler(AppleWebsite);

export default SentryApp;
