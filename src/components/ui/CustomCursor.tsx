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

function getRekt(el: HTMLElement) {
  const checkElement = (e: HTMLElement | null): DOMRect | null => {
    if (!e) return null;
    
    // Check if expansion is explicitly disabled
    if (e.getAttribute('data-cursor-no-expand') === 'true') {
      return null;
    }

    const style = window.getComputedStyle(e);
    if (
      e.tagName === "A" ||
      e.tagName === "BUTTON" ||
      style.cursor === "pointer" ||
      e.classList.contains("cursor-can-hover")
    ) {
      return e.getBoundingClientRect();
    }
    return null;
  };

  // We should also check parents to see if any of them disable expansion
  let current: HTMLElement | null = el;
  while (current) {
    if (current.getAttribute('data-cursor-no-expand') === 'true') {
      return null;
    }
    current = current.parentElement;
  }

  return checkElement(el) || checkElement(el.parentElement) || checkElement(el.parentElement?.parentElement || null);
}

const CURSOR_DIAMETER = 50;

export function CustomCursor() {
  const pathname = usePathname();
  // Simplified check or add specific logic if needed
  const isBlogPost = pathname?.startsWith("/blogs/") && pathname !== "/blogs";

  const isMobile = useMediaQuery("(max-width: 768px)");

  // React Refs for Jelly Blob and Text
  const jellyRef = useRef<HTMLDivElement>(null);
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
    if (!isHovering) {
      set.x(pos.x);
      set.y(pos.y);
      set.width(CURSOR_DIAMETER + scale * 300);
      set.r(rotation);
      set.sx(1 + scale);
      set.sy(1 - scale * 2);
    } else {
      set.r(0);
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
    // Caluclate Everything Function
    const setFromEvent = (e: MouseEvent) => {
      if (!jellyRef.current) return;
      if (!cursorMoved) {
        setCursorMoved(true);
      }
      const el = e.target as HTMLElement;
      const hoverElemRect = getRekt(el);
      if (hoverElemRect) {
        const rect = el.getBoundingClientRect();
        setIsHovering(true);
        gsap.to(jellyRef.current, {
          rotate: 0,
          duration: 0,
        });
        gsap.to(jellyRef.current, {
          width: el.offsetWidth + 20,
          height: el.offsetHeight + 20,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          borderRadius: 10,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
        });
      } else {
        gsap.to(jellyRef.current, {
          borderRadius: 50,
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
        });
        setIsHovering(false);
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
      <div
        ref={jellyRef}
        id={"jelly-id"}
        className={cn(
          "fixed left-0 top-0 rounded-lg z-[999] pointer-events-none will-change-transform",
          "translate-x-[-50%] translate-y-[-50%] border-2 border-black dark:border-white"
        )}
        style={{
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
          zIndex: 100,
          backdropFilter: "invert(100%)",
        }}
      ></div>
      <div
        ref={dotRef}
        className="w-3 h-3 rounded-full fixed translate-x-[-50%] translate-y-[-50%] pointer-events-none transition-none duration-300"
        style={{
          top: y,
          left: x,
          backdropFilter: "invert(100%)",
          zIndex: 101,
        }}
      ></div>
    </>
  );
}

