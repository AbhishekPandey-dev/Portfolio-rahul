"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface MarqueeProps {
  text: string;
  speed?: number;
}

export const Marquee = ({ text, speed = 1 }: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    window.addEventListener('resize', () => {
      // Force GSAP re-calc on resize if needed
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 320px)", () => {
      const width = textRef.current?.offsetWidth || 0;
      
      gsap.to(containerRef.current, {
        x: -width / 2,
        duration: 10 / speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (width / 2))
        }
      });
    });

    return () => {
      mm.revert();
    };
  }, [speed]);

  return (
    <div className="overflow-hidden whitespace-nowrap py-12 flex items-center border-y border-outline-variant/30 bg-surface-dim">
      <div ref={containerRef} className="flex flex-nowrap w-fit">
        <div ref={textRef} className="flex gap-16 px-8 items-center min-w-max">
          {[...Array(4)].map((_, i) => (
            <h2 
              key={i} 
              className="font-display text-[80px] md:text-[120px] tracking-tighter uppercase text-transparent"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)",
              }}
            >
              {text} <span className="text-primary" style={{ WebkitTextStroke: "0px" }}>✦</span>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};
