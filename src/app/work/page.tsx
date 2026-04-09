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
    media: { type: "image", src: "/assets/transformhealth.png" },
    colSpanClass: "md:col-span-8",
    sizes: "(max-width: 768px) 100vw, 66vw"
  },
  {
    title: "Nappa dori",
    url: "https://www.nappadori.com/",
    displayUrl: "www.nappadori.com",
    tags: "UI/UX Design | Shopify | GSAP | React | Photoswipe",
    categories: ["Shopify", "UI/UX Design", "E-Commerce"],
    media: { type: "image", src: "/assets/nappadori.png" },
    colSpanClass: "md:col-span-4",
    sizes: "(max-width: 768px) 100vw, 33vw"
  },
  {
    title: "Shivan & Narresh",
    url: "https://www.shivanandnarresh.com/",
    displayUrl: "www.shivanandnarresh.com",
    tags: "Shopify | jQuery | AWS | Cloudflare | Klaviyo",
    categories: ["Shopify", "E-Commerce"],
    media: { type: "video", webm: "/assets/shivanandnarresh.webm", mp4: "/assets/shivanandnarresh.mp4" },
    colSpanClass: "md:col-span-12"
  },
  {
    title: "Chashma",
    url: "https://chashma.com/",
    displayUrl: "www.chashma.com",
    tags: "Shopify | Firebase | Swiper | jQuery | Font Awesome",
    categories: ["Shopify", "E-Commerce"],
    media: { type: "video", webm: "/assets/chashma.webm", mp4: "/assets/chashma.mp4" },
    colSpanClass: "md:col-span-8"
  },
  {
    title: "Shaz & Kiks",
    url: "https://www.shazandkiks.com/",
    displayUrl: "www.shazandkiks.com",
    tags: "UI/UX Design | Shopify | Klaviyo | React | Styled-Components",
    categories: ["Shopify", "UI/UX Design", "E-Commerce"],
    media: { type: "video", webm: "/assets/shazsiks.webm", mp4: "/assets/shazsiks.mp4" },
    colSpanClass: "md:col-span-4"
  },
  {
    title: "Swiss Beauty",
    url: "https://swissbeauty.in/",
    displayUrl: "www.swissbeauty.in",
    tags: "Shopify | Tailwind CSS | PhotoSwipe | Keen-Slider | CustomFit",
    categories: ["Shopify", "E-Commerce"],
    media: { type: "video", webm: "/assets/swissbeauty.webm", mp4: "/assets/swissbeauty.mp4" },
    colSpanClass: "md:col-span-12"
  },
  {
    title: "Artisan Lab",
    url: "https://www.artisanlab.in/",
    displayUrl: "www.artisanlab.in",
    tags: "Shopify | UI/UX Design | PhotoSwipe | Svelte | Flickity",
    categories: ["Shopify", "UI/UX Design", "E-Commerce"],
    media: { type: "image", src: "/assets/artisanlab.jpg" },
    colSpanClass: "md:col-span-8",
    sizes: "(max-width: 768px) 100vw, 66vw"
  },
  {
    title: "Outhouse Jewellery",
    url: "https://outhouse-jewellery.com/",
    displayUrl: "www.outhouse-jewellery.com",
    tags: "Shopify | BugSnag | React | Google Ads | Preact | Swiper | LayoutHub | Custom CMS",
    categories: ["Shopify", "E-Commerce"],
    media: { type: "video", webm: "/assets/outhousejewellery.webm", mp4: "/assets/outhousejewellery.mp4" },
    colSpanClass: "md:col-span-4"
  },
  {
    title: "Jan & April",
    url: "https://janandapril.com/",
    displayUrl: "www.janandapril.com",
    tags: "Shopify | jQuery | AWS | Cloudflare | Klaviyo",
    categories: ["Shopify", "E-Commerce"],
    media: { type: "video", webm: "/assets/janandapril.webm", mp4: "/assets/janandapril.mp4" },
    colSpanClass: "md:col-span-12"
  },
  {
    title: "Manan Design",
    url: "https://www.manandesign.com/",
    displayUrl: "www.manandesign.com",
    tags: "Shopify | UI/UX Design | GSAP | PhotoSwipe | Swiper | Custom CMS | AWS | Goolgle Ads | Snap Pixel",
    categories: ["Shopify", "UI/UX Design", "E-Commerce"],
    media: { type: "video", webm: "/assets/manandesign.webm", mp4: "/assets/manandesign.mp4" },
    colSpanClass: "md:col-span-8"
  },
  {
    title: "Perona",
    url: "https://www.perona.com/",
    displayUrl: "www.perona.com",
    tags: "Shopify | GSAP | Preact | jQuery UI | Swiper | Google Hosted Libraries | Klaviyo",
    categories: ["Shopify", "E-Commerce"],
    media: { type: "video", webm: "/assets/perona.webm", mp4: "/assets/perona.mp4" },
    colSpanClass: "md:col-span-4"
  },
  {
    title: "Orange Tree",
    url: "https://www.orangetree.in/",
    displayUrl: "www.orangetree.in",
    tags: "Shopify | Bootstrap | Vue.js | GSAP | Mansonry | MobX | Avada SEO | Google Ads | Lit-html & Elements",
    categories: ["Shopify", "E-Commerce"],
    media: { type: "video", webm: "/assets/orangetree.webm", mp4: "/assets/orangetree.mp4" },
    colSpanClass: "md:col-span-12"
  },
  {
    title: "OnCloud9",
    url: "https://oncloud9.com/",
    displayUrl: "www.oncloud9.com",
    tags: "Shopify | JSS | React | Google Analytics | Sentry | Masonary | Modernizer | PostScript | Lit-html & Elements",
    categories: ["Shopify", "E-Commerce"],
    media: { type: "video", webm: "/assets/oncloud9.webm", mp4: "/assets/oncloud9.mp4" },
    colSpanClass: "md:col-span-8"
  },
  {
    title: "Idus",
    url: "https://idus.in/",
    displayUrl: "www.idus.in",
    tags: "Shopify | AWS | Scrollreveal | jQuery | Font Awesome | Loadable-Content",
    categories: ["Shopify", "E-Commerce"],
    media: { type: "video", webm: "/assets/idus.webm", mp4: "/assets/idus.mp4" },
    colSpanClass: "md:col-span-4"
  },
  {
    title: "Janavi",
    url: "https://www.janavi.com/",
    displayUrl: "www.Janavi.com",
    tags: "Shopify | BugSnag | Cloudflare | Babel | Custom CMS",
    categories: ["Shopify", "E-Commerce"],
    media: { type: "image", src: "/assets/janvi.webp" },
    colSpanClass: "md:col-span-12",
    sizes: "(max-width: 768px) 100vw, 66vw"
  },
  {
    title: "Cord Studio",
    url: "https://www.cordstudio.in/",
    displayUrl: "www.cordstudio.in",
    tags: "Shopify | Gsap | svelte | preact | photoswipe | Aws | more animated js libraries",
    categories: ["Shopify", "E-Commerce"],
    media: { type: "video", webm: "/assets/cordstudio.webm", mp4: "/assets/cordstudio.mp4" },
    colSpanClass: "md:col-span-8"
  },
  {
    title: "Lily Ann Cabinets",
    url: "https://www.lilyanncabinets.com/",
    displayUrl: "www.lilyanncabinets.com",
    tags: "Magneto | Custom Web Development | Mysql | microsoft advertisment | jquary Ui | aws",
    categories: ["E-Commerce"],
    media: { type: "video", webm: "/assets/lilyanncabinets.webm", mp4: "/assets/lilyanncabinets.mp4" },
    colSpanClass: "md:col-span-4"
  },
  {
    title: "Ava Cabinetry",
    url: "https://www.avacabinetry.com/",
    displayUrl: "www.avacabinetry.com",
    tags: "Magneto | Custom Web Development | PHP | Bootstrap | mysql | aws",
    categories: ["E-Commerce"],
    media: { type: "image", src: "/assets/ava.png" },
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
    <>
      {/* Page Header */}
      <header className="px-8 mb-24 max-w-[1920px] mx-auto pt-48">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="relative">
            <h1 className="font-headline font-bold text-[clamp(4rem,15vw,100px)] md:text-[180px] leading-[0.9] tracking-tighter uppercase">
              SELECTED
              <br />
              <span className="outline-text">WORK</span>
            </h1>
            <div className="w-24 h-2 bg-primary mt-8"></div>
          </div>
          <div className="max-w-md">
            <p className="text-on-surface-variant text-xl leading-relaxed font-light">
              A curated collection of digital experiences focusing on functional
              luxury, high-performance commerce, and surgical design precision.
            </p>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <section className="px-8 mb-16 max-w-[1920px] mx-auto">
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-b border-outline-variant/20 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`${
                activeFilter === category
                  ? "text-primary border-b-2 border-primary -mb-[18px]"
                  : "text-on-surface-variant hover:text-on-surface"
              } transition-colors font-headline uppercase tracking-widest text-sm pb-4 relative`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-6 md:px-12 bg-surface-container-lowest min-h-screen">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              Selected Work
            </h2>
          </div>
        </div>
        
        {/* Render projects with scroll-revealing Project cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
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

      {/* CTA Strip */}
      <section className="bg-surface-container py-32 px-8">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <h2 className="font-headline font-bold text-5xl md:text-7xl uppercase max-w-2xl leading-[0.9]">
            Have a project you&apos;d like to discuss?
          </h2>
          <Link className="group flex items-center gap-4" href="/contact">
            <span className="font-headline font-bold text-5xl md:text-7xl text-primary transition-transform group-hover:-translate-x-4 uppercase">
              LET&apos;S TALK
            </span>
            <span className="material-symbols-outlined text-6xl md:text-8xl text-primary font-light">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
