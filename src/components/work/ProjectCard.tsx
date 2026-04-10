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
    | { type: "image"; src: string; mobileSrc?: string }
    | { type: "video"; webm: string; mp4: string; mobileSrc?: string };
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
            <>
              {project.media.mobileSrc ? (
                <Image
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 md:hidden"
                  src={project.media.mobileSrc}
                  fill
                  sizes="100vw"
                  unoptimized
                />
              ) : null}
              <Image
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 md:grayscale md:group-hover:grayscale-0 ${project.media.mobileSrc ? "hidden md:block" : ""}`}
                src={project.media.src}
                fill
                sizes={project.sizes || "(max-width: 768px) 100vw, 50vw"}
                quality={90}
              />
            </>
          )}
          {isInView && project.media.type === "video" && (
            <>
              {project.media.mobileSrc ? (
                <Image
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 md:hidden"
                  src={project.media.mobileSrc}
                  fill
                  sizes="100vw"
                  unoptimized
                />
              ) : null}
              <video
                autoPlay
                loop
                muted
                playsInline
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 md:grayscale md:group-hover:grayscale-0 ${project.media.mobileSrc ? "hidden md:block" : ""}`}
              >
                <source src={project.media.webm} type="video/webm" />
                <source src={project.media.mp4} type="video/mp4" />
              </video>
            </>
          )}
          
          {/* Overlay gradient - visible on mobile, hover on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-10 z-10">
            {/* Tags - visible on mobile, slide up on desktop hover */}
            <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-2 transform transition-all duration-500 delay-100 opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0">
              {project.tags}
            </span>
            {/* Title - visible on mobile, slide up on desktop hover */}
            <h3 className="font-headline text-xl md:text-4xl font-bold text-white uppercase transform transition-all duration-500 delay-150 opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 break-all">
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
