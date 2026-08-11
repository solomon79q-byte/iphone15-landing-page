import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  useEffect(() => {
    // 💡 What: Replaced window 'resize' event listener with a media query 'change' listener.
    // 🎯 Why: 'resize' events fire continuously on every pixel during window resizing, triggering layout/thrashing checks and unnecessary function execution.
    // 📊 Impact/Measurement: Completely eliminates resize handler overhead during user resizing, invoking state adjustments only when crossing the 760px breakpoint.
    const mediaQuery = window.matchMedia('(max-width: 760px)');

    const handleMediaChange = (e) => {
      if (e.matches) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
      }
    };

    // Modern browsers support addEventListener on MediaQueryList
    mediaQuery.addEventListener('change', handleMediaChange);

    // Call once initially to ensure correct sync with current screen size
    handleMediaChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

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