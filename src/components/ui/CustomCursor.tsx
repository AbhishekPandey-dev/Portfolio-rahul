"use client";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { useMouse } from "@/hooks/use-mouse";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";

// Gsap Ticker Function
function useTicker(callback: () => void, paused: boolean) {
  useEffect(() => {
    if (!paused && callback) {
      gsap.ticker.add(callback);
    }
    return () => {
      gsap.ticker.remove(callback);
    };
  }, [callback, paused]);
}

const EMPTY = {} as any;

function useInstance(value: any = {}) {
  const ref = useRef(EMPTY);
  if (ref.current === EMPTY) {
    ref.current = typeof value === "function" ? value() : value;
  }
  return ref.current;
}

// Function for Mouse Move Scale Change
function getScale(diffX: number, diffY: number) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  return Math.min(distance / 735, 0.35);
}

// Function For Mouse Movement Angle in Degrees
function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

// Detect if an element (or its ancestors) is a hoverable interactive element
function isHoverableElement(el: HTMLElement): boolean {
  const check = (e: HTMLElement | null): boolean => {
    if (!e) return false;

    // Check if hover effect is explicitly disabled
    if (e.getAttribute('data-cursor-no-expand') === 'true') {
      return false;
    }

    const style = window.getComputedStyle(e);
    if (
      e.tagName === "A" ||
      e.tagName === "BUTTON" ||
      style.cursor === "pointer" ||
      e.classList.contains("cursor-can-hover")
    ) {
      return true;
    }
    return false;
  };

  // Check parents for disabled flag
  let current: HTMLElement | null = el;
  while (current) {
    if (current.getAttribute('data-cursor-no-expand') === 'true') {
      return false;
    }
    current = current.parentElement;
  }

  return check(el) || check(el.parentElement) || check(el.parentElement?.parentElement || null);
}

const CURSOR_DIAMETER = 50;
const HOVER_DIAMETER = 80; // Slightly larger on hover

export function CustomCursor() {
  const pathname = usePathname();
  // Simplified check or add specific logic if needed
  const isBlogPost = pathname?.startsWith("/blogs/") && pathname !== "/blogs";

  const isMobile = useMediaQuery("(max-width: 768px)");

  // React Refs for Jelly Blob and Text
  const jellyRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { x, y } = useMouse();

  // Save pos and velocity Objects
  const pos = useInstance(() => ({ x: 0, y: 0 }));
  const vel = useInstance(() => ({ x: 0, y: 0 }));
  const set = useInstance();

  // Set GSAP quick setter Values on useLayoutEffect Update
  useLayoutEffect(() => {
    if (!jellyRef.current) return;
    set.x = gsap.quickSetter(jellyRef.current, "x", "px");
    set.y = gsap.quickSetter(jellyRef.current, "y", "px");
    set.r = gsap.quickSetter(jellyRef.current, "rotate", "deg");
    set.sx = gsap.quickSetter(jellyRef.current, "scaleX");
    set.sy = gsap.quickSetter(jellyRef.current, "scaleY");
    set.width = gsap.quickSetter(jellyRef.current, "width", "px");
    set.height = gsap.quickSetter(jellyRef.current, "height", "px");
    set.opacity = gsap.quickSetter([jellyRef.current, dotRef.current], "opacity");
  }, []);

  // Start Animation loop
  const loop = useCallback(() => {
    if (!set.width || !set.sx || !set.sy || !set.r) return;
    // Calculate angle and scale based on velocity
    var rotation = getAngle(+vel.x, +vel.y); // Mouse Move Angle
    var scale = getScale(+vel.x, +vel.y); // Blob Squeeze Amount

    // Set GSAP quick setter Values on Loop Function
    set.x(pos.x);
    set.y(pos.y);

    if (!isHovering) {
      set.width(CURSOR_DIAMETER + scale * 300);
      set.r(rotation);
      set.sx(1 + scale);
      set.sy(1 - scale * 2);
    } else {
      // On hover: keep circular, slightly scaled up, no jelly distortion
      set.r(0);
      set.sx(1);
      set.sy(1);
    }

    if (isHidden) {
      set.opacity?.(0);
    } else {
      set.opacity?.(1);
    }
  }, [isHovering, isHidden]);

  const [cursorMoved, setCursorMoved] = useState(false);
  // Run on Mouse Move
  useLayoutEffect(() => {
    if (isMobile) return;
    // Calculate Everything Function
    const setFromEvent = (e: MouseEvent) => {
      if (!jellyRef.current) return;
      if (!cursorMoved) {
        setCursorMoved(true);
      }
      const el = e.target as HTMLElement;
      const hovering = isHoverableElement(el);

      if (hovering && !isHovering) {
        setIsHovering(true);
        // Animate to hover state: slightly larger circle with glow
        gsap.to(jellyRef.current, {
          width: HOVER_DIAMETER,
          height: HOVER_DIAMETER,
          borderRadius: "50%",
          duration: 0.4,
          ease: "power3.out",
        });
        // Show glow ring
        if (glowRef.current) {
          gsap.to(glowRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          });
        }
      } else if (!hovering && isHovering) {
        setIsHovering(false);
        // Animate back to default state
        gsap.to(jellyRef.current, {
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
          borderRadius: "50%",
          duration: 0.3,
          ease: "power2.out",
        });
        // Hide glow ring
        if (glowRef.current) {
          gsap.to(glowRef.current, {
            opacity: 0,
            scale: 0.5,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }

      // Check for hide flag
      const shouldHide = !!el.closest('[data-no-custom-cursor="true"]');
      setIsHidden(shouldHide);

      // Update body cursor style to ensure default cursor shows up when custom is hidden
      if (shouldHide) {
        document.body.style.cursor = 'auto';
      } else {
        document.body.style.cursor = 'none';
      }

      // Mouse X and Y
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Animate Position and calculate Velocity with GSAP
      gsap.to(pos, {
        x: mouseX,
        y: mouseY,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        onUpdate: () => {
          vel.x = (mouseX - pos.x) * 1.2;
          vel.y = (mouseY - pos.y) * 1.2;
        },
      });

      // Keep glow ring following the cursor position
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: mouseX,
          y: mouseY,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
        });
      }

      loop();
    };

    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, [isMobile, cursorMoved, isHidden, isHovering, loop]);

  useTicker(loop, !cursorMoved || isMobile);
  if (isMobile || isBlogPost) return null;

  // Return UI
  return (
    <>
      {/* Glow ring — visible only on hover */}
      <div
        ref={glowRef}
        className="fixed left-0 top-0 rounded-full pointer-events-none will-change-transform translate-x-[-50%] translate-y-[-50%]"
        style={{
          width: HOVER_DIAMETER + 20,
          height: HOVER_DIAMETER + 20,
          zIndex: 99,
          opacity: 0,
          scale: 0.5,
          border: "2px solid rgba(212, 255, 34, 0.5)",
          boxShadow:
            "0 0 15px rgba(212, 255, 34, 0.4), 0 0 30px rgba(212, 255, 34, 0.2), inset 0 0 15px rgba(212, 255, 34, 0.1)",
          animation: "cursorGlowPulse 1.5s ease-in-out infinite",
        }}
      />
      {/* Main jelly cursor */}
      <div
        ref={jellyRef}
        id={"jelly-id"}
        className={cn(
          "fixed left-0 top-0 rounded-full z-[999] pointer-events-none will-change-transform",
          "translate-x-[-50%] translate-y-[-50%] border-2 border-black dark:border-white",
          isHovering && "!border-primary dark:!border-primary"
        )}
        style={{
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
          zIndex: 100,
          backdropFilter: "invert(100%)",
          transition: isHovering ? "border-color 0.3s ease" : undefined,
        }}
      />
      {/* Dot cursor */}
      <div
        ref={dotRef}
        className="w-3 h-3 rounded-full fixed translate-x-[-50%] translate-y-[-50%] pointer-events-none transition-none duration-300"
        style={{
          top: y,
          left: x,
          backdropFilter: "invert(100%)",
          zIndex: 101,
        }}
      />
      {/* Keyframe animation for glow pulse */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cursorGlowPulse {
          0%, 100% {
            box-shadow:
              0 0 15px rgba(212, 255, 34, 0.4),
              0 0 30px rgba(212, 255, 34, 0.2),
              inset 0 0 15px rgba(212, 255, 34, 0.1);
            border-color: rgba(212, 255, 34, 0.5);
          }
          50% {
            box-shadow:
              0 0 25px rgba(212, 255, 34, 0.6),
              0 0 50px rgba(212, 255, 34, 0.35),
              inset 0 0 25px rgba(212, 255, 34, 0.2);
            border-color: rgba(212, 255, 34, 0.8);
          }
        }
      `}} />
    </>
  );
}


