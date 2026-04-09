"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export type ProjectData = {
  title: string;
  url: string;
  displayUrl: string;
  tags: string;
  categories: string[];
  colSpanClass: string;
  sizes?: string;
  media: 
    | { type: "image"; src: string }
    | { type: "video"; webm: string; mp4: string };
};

export function ProjectCard({ project }: { project: ProjectData }) {
  const ref = useRef(null);
  // Trigger animation slightly before element enters view
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`${project.colSpanClass} group cursor-pointer block`}
      aria-label={`View project: ${project.title}`}
    >
      <Link href={project.url} target="_blank" rel="noopener noreferrer" data-cursor-no-expand="true" className="w-full h-full block">
        <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
          {isInView && project.media.type === "image" && (
            <Image
              alt={project.title}
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              src={project.media.src}
              fill
              sizes={project.sizes || "(max-width: 768px) 100vw, 50vw"}
              quality={90}
            />
          )}
          {isInView && project.media.type === "video" && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            >
              <source src={project.media.webm} type="video/webm" />
              <source src={project.media.mp4} type="video/mp4" />
            </video>
          )}
          
          {/* Overlay gradient - only appears on hover with smooth fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 z-10">
            {/* Tags slide up slightly */}
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
              {project.tags}
            </span>
            {/* Title slides up after tags */}
            <h3 className="font-headline text-2xl md:text-4xl font-bold text-white uppercase transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
              {project.displayUrl}
            </h3>
          </div>
        </div>
        
        <div className="flex justify-between items-center px-1">
          <h4 className="font-headline text-2xl font-bold uppercase group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h4>
          <span className="material-symbols-outlined text-on-surface group-hover:text-primary transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
            arrow_outward
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
