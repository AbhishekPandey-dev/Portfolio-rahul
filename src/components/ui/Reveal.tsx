"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger within the client component safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use a matchMedia block to disable on user preference
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%", // reveal when top of element hits 90% of viewport
            toggleActions: "play none none none"
          }
        }
      );
    });
    
    // In reduced motion, just reveal instantly using standard CSS (handled via autoAlpha defaults to 1 outside GSAP timeline initially if we manage it right, but here we enforce instant reveal)
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(el, { autoAlpha: 1, y: 0 });
    });

    return () => {
      mm.revert();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`invisible ${className}`} style={{ visibility: 'hidden' }}>
      {children}
    </div>
  );
}
