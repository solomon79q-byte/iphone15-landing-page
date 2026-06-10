import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';

const Highlights = lazy(() => import('./components/Highlights'));
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-screen w-full flex justify-center items-center text-white">Loading...</div>}>
        <Highlights />
        <Model />
        <Features />
        <HowItWorks />
      </Suspense>
      <Footer />
    </main>
  )
}

const ProfiledApp = Sentry.withProfiler(App);

export default ProfiledApp;
