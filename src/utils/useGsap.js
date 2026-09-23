import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapAnimations(currentPage) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

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
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.15,
          },
        });
      }

      // 2. High-Performance Gentle Reveal for Section Headings
      const headings = document.querySelectorAll('main section h1, main section h2');
      if (headings.length > 0) {
        headings.forEach((heading) => {
          gsap.fromTo(
            heading,
            { opacity: 0.85, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: heading,
                start: 'top 92%',
                once: true,
              },
            }
          );
        });
      }

      // 3. Staggered card reveals on scroll
      const cards = document.querySelectorAll('main section .grid > div, main section .grid > a');
      if (cards.length > 0) {
        ScrollTrigger.batch(cards, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) => {
            gsap.fromTo(
              batch,
              { opacity: 0.8, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.06,
                ease: 'power2.out',
                clearProps: 'transform,opacity',
              }
            );
          },
        });
      }
    });

    // Refresh ScrollTrigger once DOM layout stabilizes after page transition
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx.revert(); // cleanly cleans up triggers for previous page
    };
  }, [currentPage]);
}

