"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", href, children, ...props }, ref) => {
    const internalRef = useRef<HTMLButtonElement>(null);
    const resolvedRef = (ref as any) || internalRef;
    
    // Magnetic effect state
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = resolvedRef.current?.getBoundingClientRect();
      if (!rect) return;
      const h = rect.width / 2;
      const v = rect.height / 2;
      const cx = e.clientX - rect.left - h;
      const cy = e.clientY - rect.top - v;
      x.set(cx * 0.2);
      y.set(cy * 0.2);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const baseClasses = "relative inline-flex items-center justify-center font-sans font-medium uppercase tracking-widest text-sm py-4 px-8 transition-colors duration-300 overflow-hidden group";
    
    const variants = {
      primary: "bg-primary text-[#000000] hover:bg-primary-container glow-primary",
      secondary: "bg-transparent text-white border border-outline hover:border-white",
      ghost: "bg-transparent text-white hover:text-primary",
    };

    const motionStyle = {
      x: springX,
      y: springY,
    };

    const Content = (
      <>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
        )}
      </>
    );

    if (href) {
      // Use motion.create if available, otherwise fallback to motion()
      const MotionLink = (motion as any).create ? (motion as any).create(Link) : (motion as any)(Link);
      
      return (
        <MotionLink
          href={href}
          onMouseMove={handleMouseMove as any}
          onMouseLeave={handleMouseLeave}
          style={motionStyle}
          className={cn(baseClasses, variants[variant], className)}
          {...(props as any)}
        >
          {Content}
        </MotionLink>
      );
    }

    return (
      <motion.button
        ref={resolvedRef}
        onMouseMove={handleMouseMove as any}
        onMouseLeave={handleMouseLeave}
        style={motionStyle}
        className={cn(baseClasses, variants[variant], className)}
        {...(props as any)}
      >
        {Content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
