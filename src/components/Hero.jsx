import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  // Performance Optimization: Use window.innerWidth only for initial state
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  useEffect(() => {
    // Performance Optimization: Replacing window 'resize' event listener with a matchMedia listener.
    // Why: The 'resize' event fires continuously on every pixel change during resizing, triggering
    // frequent layout queries (window.innerWidth) and potential component setStates/re-renders.
    // Using matchMedia's 'change' listener ensures the callback only runs when crossing the 760px breakpoint.
    // Impact: Reduces CPU utilization during window resizing and eliminates unnecessary layout thrashing.
    const mediaQuery = window.matchMedia('(max-width: 759px)');

    const handleMediaChange = (e) => {
      if (e.matches) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero