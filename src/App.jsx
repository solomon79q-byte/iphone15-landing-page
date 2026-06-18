import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import * as Sentry from '@sentry/react';

// Code splitting major components to reduce initial bundle size and speed up first paint
const Highlights = lazy(() => import('./components/Highlights'));
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Footer = lazy(() => import('./components/Footer'));

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
        <Footer />
      </Suspense>
    </main>
  )
}

const AppWithProfiler = Sentry.withProfiler(App);

export default AppWithProfiler;
