"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectCard, ProjectData } from "@/components/work/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const projects: ProjectData[] = [
  {
    title: "Transform Health",
    url: "https://transformhealthcoalition.org/",
    displayUrl: "www.transformhealthcoalition.org",
    tags: "Wordpress | UI/UX Design | GSAP | MySQL | Cloudflare",
    categories: ["WordPress", "UI/UX Design"],
    media: { type: "image", src: "/assets/transformhealth.png", mobileSrc: "/assets/img-mobile/transformhealth.png" },
    colSpanClass: "md:col-span-8",
    sizes: "(max-width: 768px) 100vw, 66vw"
  },
  {
    title: "Nappa dori",
    url: "https://www.nappadori.com/",
    displayUrl: "www.nappadori.com",
    tags: "UI/UX Design | Shopify | GSAP | React | Photoswipe",
    categories: ["Shopify", "UI/UX Design", "E-Commerce"],
    media: { type: "image", src: "/assets/nappadori.png", mobileSrc: "/assets/img-mobile/nappadori.png" },
    colSpanClass: "md:col-span-4",
    sizes: "(max-width: 768px) 100vw, 33vw"
  },
  {
    title: "Shivan & Narresh",
    url: "https://www.shivanandnarresh.com/",
    displayUrl: "www.shivanandnarresh.com",
    tags: "Shopify | jQuery | AWS | Cloudflare | Klaviyo",
    categories: ["Shopify", "E-Commerce", "UI/UX Design"],
    media: {
      type: "video",
      webm: "/assets/shivanandnarresh.webm",
      mp4: "/assets/shivanandnarresh.mp4",
      mobileSrc: "/assets/img-mobile/shivanandnarresh.png"
    },
    colSpanClass: "md:col-span-12"
  },
  {
    title: "Chashma",
    url: "https://chashma.com/",
    displayUrl: "www.chashma.com",
    tags: "Shopify | Firebase | Swiper | jQuery | Font Awesome",
    categories: ["Shopify", "E-Commerce", "UI/UX Design"],
    media: { type: "video", webm: "/assets/chashma.webm", mp4: "/assets/chashma.mp4", mobileSrc: "/assets/img-mobile/chashma.png" },
    colSpanClass: "md:col-span-8"
  },
  {
    title: "Shaz & Kiks",
    url: "https://www.shazandkiks.com/",
    displayUrl: "www.shazandkiks.com",
    tags: "UI/UX Design | Shopify | Klaviyo | React | Styled-Components",
    categories: ["Shopify", "UI/UX Design", "E-Commerce"],
    media: { type: "video", webm: "/assets/shazsiks.webm", mp4: "/assets/shazsiks.mp4", mobileSrc: "/assets/img-mobile/shazkiks.png" },
    colSpanClass: "md:col-span-4"
  },
  {
    title: "Swiss Beauty",
    url: "https://swissbeauty.in/",
    displayUrl: "www.swissbeauty.in",
    tags: "Shopify | Tailwind CSS | PhotoSwipe | Keen-Slider | CustomFit",
    categories: ["Shopify", "E-Commerce", "UI/UX Design"],
    media: { type: "video", webm: "/assets/swissbeauty.webm", mp4: "/assets/swissbeauty.mp4", mobileSrc: "/assets/img-mobile/swissbeauty.png" },
    colSpanClass: "md:col-span-12"
  },
  {
    title: "Artisan Lab",
    url: "https://www.artisanlab.in/",
    displayUrl: "www.artisanlab.in",
    tags: "Shopify | UI/UX Design | PhotoSwipe | Svelte | Flickity",
    categories: ["Shopify", "UI/UX Design", "E-Commerce"],
    media: { type: "image", src: "/assets/artisanlab.jpg", mobileSrc: "/assets/img-mobile/artisanlab.png" },
    colSpanClass: "md:col-span-8",
    sizes: "(max-width: 768px) 100vw, 66vw"
  },
  {
    title: "Outhouse Jewellery",
    url: "https://outhouse-jewellery.com/",
    displayUrl: "www.outhouse-jewellery.com",
    tags: "Shopify | BugSnag | React | Google Ads | Preact | Swiper | LayoutHub | Custom CMS",
    categories: ["Shopify", "E-Commerce", "UI/UX Design"],
    media: { type: "video", webm: "/assets/outhousejewellery.webm", mp4: "/assets/outhousejewellery.mp4", mobileSrc: "/assets/img-mobile/outhouse.png" },
    colSpanClass: "md:col-span-4"
  },
  {
    title: "Jan & April",
    url: "https://janandapril.com/",
    displayUrl: "www.janandapril.com",
    tags: "Shopify | jQuery | AWS | Cloudflare | Klaviyo",
    categories: ["Shopify", "E-Commerce", "UI/UX Design"],
    media: { type: "video", webm: "/assets/janandapril.webm", mp4: "/assets/janandapril.mp4", mobileSrc: "/assets/img-mobile/janandapril.png" },
    colSpanClass: "md:col-span-12"
  },
  {
    title: "Manan Design",
    url: "https://www.manandesign.com/",
    displayUrl: "www.manandesign.com",
    tags: "Shopify | UI/UX Design | GSAP | PhotoSwipe | Swiper | Custom CMS | AWS | Goolgle Ads | Snap Pixel",
    categories: ["Shopify", "UI/UX Design", "E-Commerce"],
    media: { type: "video", webm: "/assets/manandesign.webm", mp4: "/assets/manandesign.mp4", mobileSrc: "/assets/img-mobile/manan.png" },
    colSpanClass: "md:col-span-8"
  },
  {
    title: "Perona",
    url: "https://www.perona.com/",
    displayUrl: "www.perona.com",
    tags: "Shopify | GSAP | Preact | jQuery UI | Swiper | Google Hosted Libraries | Klaviyo",
    categories: ["Shopify", "E-Commerce", "UI/UX Design"],
    media: { type: "video", webm: "/assets/perona.webm", mp4: "/assets/perona.mp4", mobileSrc: "/assets/img-mobile/perona.png" },
    colSpanClass: "md:col-span-4"
  },
  {
    title: "Orange Tree",
    url: "https://www.orangetree.in/",
    displayUrl: "www.orangetree.in",
    tags: "Shopify | Bootstrap | Vue.js | GSAP | Mansonry | MobX | Avada SEO | Google Ads | Lit-html & Elements",
    categories: ["Shopify", "E-Commerce", "UI/UX Design"],
    media: { type: "video", webm: "/assets/orangetree.webm", mp4: "/assets/orangetree.mp4", mobileSrc: "/assets/img-mobile/orangetree.png" },
    colSpanClass: "md:col-span-12"
  },
  {
    title: "OnCloud9",
    url: "https://oncloud9.com/",
    displayUrl: "www.oncloud9.com",
    tags: "Shopify | JSS | React | Google Analytics | Sentry | Masonary | Modernizer | PostScript | Lit-html & Elements",
    categories: ["Shopify", "E-Commerce", "UI/UX Design"  ],
    media: { type: "video", webm: "/assets/oncloud9.webm", mp4: "/assets/oncloud9.mp4", mobileSrc: "/assets/img-mobile/cloud9.png" },
    colSpanClass: "md:col-span-8"
  },
  {
    title: "Idus",
    url: "https://idus.in/",
    displayUrl: "www.idus.in",
    tags: "Shopify | AWS | Scrollreveal | jQuery | Font Awesome | Loadable-Content",
    categories: ["Shopify", "E-Commerce", "UI/UX Design"],
    media: { type: "video", webm: "/assets/idus.webm", mp4: "/assets/idus.mp4", mobileSrc: "/assets/img-mobile/idus.png" },
    colSpanClass: "md:col-span-4"
  },
  {
    title: "Janavi",
    url: "https://www.janavi.com/",
    displayUrl: "www.Janavi.com",
    tags: "Shopify | BugSnag | Cloudflare | Babel | Custom CMS",
    categories: ["Shopify", "E-Commerce", "UI/UX Design"],
    media: { type: "image", src: "/assets/janvi.webp", mobileSrc: "/assets/img-mobile/janavi.png" },
    colSpanClass: "md:col-span-12",
    sizes: "(max-width: 768px) 100vw, 66vw"
  },
  {
    title: "Cord Studio",
    url: "https://www.cordstudio.in/",
    displayUrl: "www.cordstudio.in",
    tags: "Shopify | Gsap | svelte | preact | photoswipe | Aws | more animated js libraries",
    categories: ["Shopify", "E-Commerce", "UI/UX Design"],
    media: { type: "video", webm: "/assets/cordstudio.webm", mp4: "/assets/cordstudio.mp4", mobileSrc: "/assets/img-mobile/cordstudio.png" },
    colSpanClass: "md:col-span-8"
  },
  {
    title: "Lily Ann Cabinets",
    url: "https://www.lilyanncabinets.com/",
    displayUrl: "www.lilyanncabinets.com",
    tags: "Magneto | Custom Web Development | Mysql | microsoft advertisment | jquary Ui | aws",
    categories: ["E-Commerce", "UI/UX Design"],
    media: { type: "video", webm: "/assets/lilyanncabinets.webm", mp4: "/assets/lilyanncabinets.mp4", mobileSrc: "/assets/img-mobile/lilyanncabinets.png" },
    colSpanClass: "md:col-span-4"
  },
  {
    title: "Ava Cabinetry",
    url: "https://www.avacabinetry.com/",
    displayUrl: "www.avacabinetry.com",
    tags: "Magneto | Custom Web Development | PHP | Bootstrap | mysql | aws",
    categories: ["E-Commerce"],
    media: { type: "image", src: "/assets/ava.png", mobileSrc: "/assets/img-mobile/avacabinetry.png" },
    colSpanClass: "md:col-span-12",
    sizes: "(max-width: 768px) 100vw, 66vw"
  }
];

const categories = ["All Projects", "Shopify", "WordPress", "UI/UX Design", "E-Commerce"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All Projects") return true;
    
    // Check if the current project's categories array includes the selected filter
    return project.categories && project.categories.includes(activeFilter);
  });

  return (
    <div className="relative isolate min-h-screen bg-surface selection:bg-primary selection:text-on-primary">
      {/* Premium Texture Overlay - Grain effect for depth */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Page Header - Staggered Entrance */}
      <header className="px-8 mb-24 max-w-[1920px] mx-auto pt-48 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="relative">
            <motion.h1 
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="font-headline font-bold text-[clamp(4rem,15vw,100px)] md:text-[180px] leading-[0.9] tracking-tighter uppercase"
            >
              SELECTED
              <br />
              <span className="outline-text">WORK</span>
            </motion.h1>
            <motion.div 
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 1, ease: "circOut", delay: 1 } }
              }}
              className="w-24 h-2 bg-primary mt-8 origin-left"
            ></motion.div>
          </div>
          <motion.div 
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
            }}
            className="max-w-md"
          >
            <p className="text-on-surface-variant text-xl leading-relaxed font-light border-l border-white/10 pl-8">
              A curated collection of digital experiences focusing on functional
              luxury, high-performance commerce, and surgical design precision.
            </p>
          </motion.div>
        </motion.div>
      </header>

      {/* Filter Bar - Premium Implementation */}
      <section className="px-6 md:px-8 mb-16 max-w-[1920px] mx-auto overflow-hidden">
        <div className="relative border-b border-primary/5">
          {/* Subtle scroll masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none md:hidden" />
          
          <div className="flex overflow-x-auto no-scrollbar gap-x-10 md:gap-x-16 items-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className="group py-6 flex-none relative outline-none"
              >
                <span className={`
                  transition-all duration-500 font-headline uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold
                  ${activeFilter === category 
                    ? "text-primary neon-text-glow" 
                    : "text-on-surface-variant/60 group-hover:text-on-surface"
                  }
                `}>
                  {category}
                </span>
                
                {activeFilter === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary z-20"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  >
                    <div className="absolute inset-0 blur-[4px] bg-primary/50" />
                  </motion.div>
                )}
                
                {/* Hover indicator */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary/30 group-hover:w-full transition-all duration-500" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Grid */}
      <section className="py-20 px-6 md:px-12 bg-surface-container-lowest min-h-screen relative z-10">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
              Portfolio <span className="text-primary">/</span>
            </h2>
          </motion.div>
        </div>
        
        {/* Render projects with scroll-revealing Project cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={project.colSpanClass}
              >
                <ProjectCard project={{...project, colSpanClass: "col-span-1 md:col-span-12"}} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Strip - Enhanced for Premium Feel */}
      <section className="bg-surface-container py-48 px-8 relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-[1920px] mx-auto flex flex-col items-center text-center gap-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline font-bold text-5xl md:text-[120px] uppercase leading-[0.85] tracking-tighter max-w-4xl"
          >
            Have a project <br /> <span className="outline-text">to discuss?</span>
          </motion.h2>
          <Link className="group relative" href="/contact">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 flex items-center gap-6 px-12 py-6 border border-primary/20 hover:border-primary transition-colors duration-500 overflow-hidden"
            >
              <span className="font-headline font-bold text-3xl md:text-5xl text-primary uppercase transition-transform group-hover:scale-110 duration-500">
                Let&apos;s Build something
              </span>
              <span className="material-symbols-outlined text-4xl md:text-6xl text-primary transition-transform group-hover:translate-x-4 duration-500">
                arrow_right_alt
              </span>
            </motion.div>
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </Link>
        </div>
      </section>
    </div>
  );
}
