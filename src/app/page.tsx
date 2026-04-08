"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SplineScene from "@/components/SplineScene";
import { useSounds } from "@/hooks/use-sounds";

export default function Home() {
  const { playPressSound, playReleaseSound } = useSounds();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Return early if key is held down (prevent sound spam)
      if (e.repeat) return;
      playPressSound();
    };

    const handleKeyUp = () => {
      playReleaseSound();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [playPressSound, playReleaseSound]);

  return (
    <div className="bg-surface-dim selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "linear-gradient(rgba(73,72,71,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(73,72,71,0.2) 1px, transparent 1px)", backgroundSize: "80px 80px" }}></div>
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full"></div>
        </div>
        
        {/* Spline 3D Scene Container */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-[50vh] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] z-10 pointer-events-none md:block md:translate-x-[12%] opacity-40 md:opacity-100 mt-20 md:mt-0">
          <div className="w-full h-full pointer-events-auto transform scale-[0.8] md:scale-[1.2] lg:scale-[1.2] md:translate-x-12 md:-translate-y-4">
            <SplineScene />
          </div>
        </div>

        <div className="relative z-20 w-full max-w-7xl pointer-events-none pt-24 md:pt-0">
          <h1 className="headline-massive text-[clamp(4.5rem,15vw,80px)] md:text-[180px] lg:text-[220px] font-bold text-white uppercase flex flex-col mb-4">
            <span>RAHUL</span>
            <span className="text-outline">SHARMA</span>
          </h1>
          <div className="max-w-2xl pointer-events-auto">
            <p className="text-primary font-headline text-xl md:text-2xl font-bold uppercase tracking-wider mb-4 mt-8 md:mt-2">
              Full Stack Developer &amp; UI/UX Designer
            </p>
            <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed mb-4 max-w-xl bg-surface-dim/50 backdrop-blur-sm p-4 rounded-lg md:bg-transparent md:backdrop-blur-none md:p-0 md:rounded-none">
              I craft premium Shopify stores, WordPress experiences &amp; custom web applications that drive results through thoughtful attention to detail and engaging design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 bg-surface-dim/50 backdrop-blur-sm p-4 rounded-lg md:bg-transparent md:backdrop-blur-none md:p-0 md:rounded-none w-fit">
              <Link href="/contact" className="bg-primary text-on-primary font-headline font-bold uppercase px-8 py-5 transition-all active:scale-95 hover:shadow-[0_0_20px_rgba(212,255,34,0.3)] inline-flex justify-center items-center text-center">
                Let&apos;s Build Your Website
              </Link>
              <Link href="/work" className="border border-primary/40 text-white font-headline font-bold uppercase px-8 py-5 hover:bg-white/5 transition-all active:scale-95 inline-flex justify-center items-center text-center">
                View My Work
              </Link>
            </div>
          </div>
        </div>
        
        {/* Horizontal Marquee */}
        <div className="absolute bottom-12 left-0 w-full overflow-hidden whitespace-nowrap opacity-20 pointer-events-none">
          <div className="inline-block animate-marquee min-w-full">
            <span className="font-headline text-[80px] font-bold text-outline uppercase mx-4">E-Commerce Specialist</span>
            <span className="font-headline text-[80px] font-bold text-outline uppercase mx-4">UI/UX Maverick</span>
            <span className="font-headline text-[80px] font-bold text-outline uppercase mx-4">Web Application Architect</span>
            {/* Duplicated for smooth loop */}
            <span className="font-headline text-[80px] font-bold text-outline uppercase mx-4">E-Commerce Specialist</span>
            <span className="font-headline text-[80px] font-bold text-outline uppercase mx-4">UI/UX Maverick</span>
            <span className="font-headline text-[80px] font-bold text-outline uppercase mx-4">Web Application Architect</span>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-lowest">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-primary font-headline font-bold text-lg mb-4 block">03 / PROJECT ARCHIVE</span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter">Selected Work</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1 (Large) */}
          <Link href="https://transformhealthcoalition.org/" className="md:col-span-8 group cursor-pointer block" target="_blank" rel="noopener noreferrer" data-cursor-no-expand="true">
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <Image alt="Transform Health" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" src="/assets/transformhealth.png" fill sizes="(max-width: 768px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Wordpress | UI/UX Design | GSAP | MySQL | Cloudflare</span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">www.transformhealthcoalition.org</h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">Transform Health</h4>
              <span className="material-symbols-outlined text-primary">arrow_outward</span>
            </div>
          </Link>

          {/* Card 2 (Small) */}
          <Link href="https://www.nappadori.com/" className="md:col-span-4 group cursor-pointer block" target="_blank" rel="noopener noreferrer" data-cursor-no-expand="true">
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <Image alt="Nappa dori Interface background" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" src="/assets/nappadori.png" fill sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">UI/UX Design | Shopify | GSAP | React | Photoswipe</span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">www.nappadori.com</h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">Nappa dori</h4>
              <span className="material-symbols-outlined text-primary">arrow_outward</span>
            </div>
          </Link>

          {/* Card 3 (Wide) */}
          <Link href="https://www.shivanandnarresh.com/" className="md:col-span-12 group cursor-pointer block" target="_blank" rel="noopener noreferrer" data-cursor-no-expand="true">
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video autoPlay loop muted className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110">
                <source src="/assets/shivanandnarresh.webm" type="video/webm" />
                <source src="/assets/shivanandnarresh.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Shopify | jQuery | AWS | Cloudflare | Klaviyo</span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">www.shivanandnarresh.com</h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">Shivan & Narresh</h4>
              <span className="material-symbols-outlined text-primary">arrow_outward</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="mb-20">
          <span className="text-primary font-headline font-bold text-lg mb-4 block">WHAT I DO</span>
          <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter">Core Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5 border-y border-white/5">
          {/* Service 1 */}
          <div className="group p-10 hover:bg-primary transition-all duration-500">
            <div className="mb-8">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-black transition-colors">shopping_cart</span>
            </div>
            <h3 className="font-headline text-2xl font-bold uppercase mb-4 group-hover:text-black transition-colors">Shopify Development</h3>
            <p className="text-on-surface-variant group-hover:text-black/70 transition-colors leading-relaxed">
              High-converting stores built with Liquid and Hydrogen for the ultimate merchant experience.
            </p>
          </div>
          {/* Service 2 */}
          <div className="group p-10 hover:bg-primary transition-all duration-500">
            <div className="mb-8">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-black transition-colors">code</span>
            </div>
            <h3 className="font-headline text-2xl font-bold uppercase mb-4 group-hover:text-black transition-colors">WordPress Dev</h3>
            <p className="text-on-surface-variant group-hover:text-black/70 transition-colors leading-relaxed">
              Custom-coded WordPress solutions that balance performance with ease of content management.
            </p>
          </div>
          {/* Service 3 */}
          <div className="group p-10 hover:bg-primary transition-all duration-500">
            <div className="mb-8">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-black transition-colors">draw</span>
            </div>
            <h3 className="font-headline text-2xl font-bold uppercase mb-4 group-hover:text-black transition-colors">UI/UX Design</h3>
            <p className="text-on-surface-variant group-hover:text-black/70 transition-colors leading-relaxed">
              Strategic design focused on user psychology, conversion paths, and editorial aesthetics.
            </p>
          </div>
          {/* Service 4 */}
          <div className="group p-10 hover:bg-primary transition-all duration-500">
            <div className="mb-8">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-black transition-colors">payments</span>
            </div>
            <h3 className="font-headline text-2xl font-bold uppercase mb-4 group-hover:text-black transition-colors">E-Commerce</h3>
            <p className="text-on-surface-variant group-hover:text-black/70 transition-colors leading-relaxed">
              End-to-end strategies from payment integration to logistical automation and growth scale.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-lowest">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="text-[120px] md:text-[200px] font-headline font-bold text-white/5 absolute -top-12 md:-top-20 -left-6 md:-left-10 select-none">7+</div>
            <div className="relative z-10">
              <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight">
                Years of Digital <br/> Excellence
              </h2>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="text-primary text-4xl md:text-5xl font-bold font-headline mb-2">50+</div>
                  <div className="text-on-surface-variant uppercase text-xs md:text-sm font-bold tracking-widest">Projects Finished</div>
                </div>
                <div>
                  <div className="text-primary text-4xl md:text-5xl font-bold font-headline mb-2">25+</div>
                  <div className="text-on-surface-variant uppercase text-xs md:text-sm font-bold tracking-widest">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light">
              Technical jargon is easy; building something that people actually enjoy using is the hard part. I’m a full-stack architect who cares just as much about the 'vibe' of a site as I do about the performance metrics. 
            </p>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light">
              I help global brands move past the generic and create a digital presence that feels human, polished, and built to last.
            </p>
            <Link className="text-primary font-headline font-bold text-xl uppercase inline-flex items-center group w-fit hover:text-white transition-colors" href="/about">
              More About Me 
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 px-6 md:px-12 bg-surface-container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-12">
            Have a project <br/> in mind?
          </h2>
          <Link href="/contact" className="bg-primary text-on-primary font-headline font-bold uppercase px-16 py-8 text-xl md:text-2xl transition-all active:scale-95 hover:shadow-[0_0_40px_rgba(212,255,34,0.4)]">
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
