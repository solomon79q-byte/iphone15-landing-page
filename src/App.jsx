import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import NonThreeLoader from './components/NonThreeLoader';

const Hero = lazy(() => import('./components/Hero'));
const Highlights = lazy(() => import('./components/Highlights'));
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Footer = lazy(() => import('./components/Footer'));

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Suspense fallback={<NonThreeLoader />}>
        <Hero />
        <Highlights />
        <Model />
        <Features />
        <HowItWorks />
        <Footer />
      </Suspense>
    </main>
  )
}

export default Sentry.withProfiler(App);
