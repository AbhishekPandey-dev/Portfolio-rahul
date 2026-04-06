"use client";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function SplineScene() {
  return (
    // Use h-full w-full so it fills whatever container it is placed in
    <motion.div 
      className="w-full h-full flex items-center justify-center relative"
      initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full h-full relative"
        animate={{ 
          y: [-15, 15, -15],
          rotateZ: [-1, 1, -1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {/* Cinematic Glowing Aura Behind */}
        <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/20 blur-[100px] rounded-full z-0 animate-pulse pointer-events-none mix-blend-screen opacity-50"></div>
        
        <Spline 
          scene="/keyboard.spline" 
          className="w-full h-full relative z-10 transition-transform duration-500 hover:scale-[1.02] drop-shadow-[0_0_10px_rgba(212,255,34,0.1)]" 
        />
      </motion.div>
    </motion.div>
  );
}