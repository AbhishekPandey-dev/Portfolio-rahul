"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Wipe Overlay */}
      <motion.div
        className="fixed inset-0 z-[100] bg-surface-highest pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
      />
      {/* Content entrance */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
