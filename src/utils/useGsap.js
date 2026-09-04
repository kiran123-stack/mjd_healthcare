import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  useEffect(() => {
    // Use gsap.context for clean lifecycle management & performance
    const ctx = gsap.context(() => {
      // 1. Reading Progress Bar at the top of the viewport
      const progressBar = document.getElementById('scroll-progress-bar');
      if (progressBar) {
        gsap.to(progressBar, {
          scaleX: 1,
          transformOrigin: 'left center',
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.2,
          },
        });
      }

      // 2. High-Performance Batch Reveal for Section Headings
      ScrollTrigger.batch('section h1, section h2', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: 'power2.out',
              overwrite: 'auto',
            }
          );
        },
      });

      // 3. High-Performance Batch Reveal for Cards (staggered group entry)
      ScrollTrigger.batch('.group, section .rounded-2xl, section .rounded-3xl', {
        start: 'top 85%',
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { autoAlpha: 0, y: 32 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.07,
              ease: 'power2.out',
              overwrite: 'auto',
              clearProps: 'transform',
            }
          );
        },
      });

      // 4. Lightweight Parallax for Hero & Background Graphics
      const parallaxBgs = document.querySelectorAll('.absolute.inset-0.bg-cover');
      parallaxBgs.forEach((bg) => {
        gsap.to(bg, {
          y: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: bg.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    });

    // Refresh ScrollTrigger once DOM layout stabilizes
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timeout);
      ctx.revert(); // cleanly garbage-collects all animations & triggers
    };
  }, []);
}
