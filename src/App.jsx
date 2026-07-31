import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';

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
        <Features />
        <HowItWorks />
      </Suspense>
      <Footer />
    </main>
  )
}

const SentryApp = Sentry.withProfiler(App);

export default SentryApp;
