import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="px-12 py-24 md:py-40 max-w-[1920px] mx-auto overflow-hidden">
        <div className="relative">
          <h1 className="font-headline font-bold text-[120px] md:text-[240px] leading-[0.8] tracking-[-0.06em] uppercase">
            ABOUT<br/>
            <span className="text-primary relative">ME<span className="absolute -right-12 bottom-8 h-4 w-4 bg-primary hidden md:block"></span></span>
          </h1>
          <div className="mt-12 md:ml-[30%]">
            <p className="text-primary font-headline text-2xl md:text-4xl tracking-tighter uppercase font-bold max-w-2xl">
              Full Stack Developer, UI/UX Designer &amp; Digital Craftsman
            </p>
          </div>
        </div>
      </section>

      {/* STORY / BIO SECTION */}
      <section className="bg-surface-container py-32">
        <div className="px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-5 relative group">
            <div className="aspect-[3/4] bg-surface-container-highest overflow-hidden">
              <Image 
                alt="Rahul Sharma" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-primary"></div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="space-y-8 max-w-2xl">
              <span className="text-primary font-headline tracking-widest uppercase text-sm">The Narrative</span>
              <h2 className="text-4xl md:text-6xl font-headline tracking-tighter font-bold uppercase">7+ Years of Digital Evolution.</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-body">
                <p>
                  My journey began at the intersection of aesthetic and logic. Over the past seven years, I&apos;ve navigated the vast landscape of web technologies, evolving from a focused frontend specialist into a holistic full-stack architect.
                </p>
                <p>
                  I sharpened my clinical design sensibilities during my tenure at <span className="text-on-surface font-bold">The Digital Impressions</span>, where I learned that every pixel must serve a purpose. This was followed by a transformative era at <span className="text-on-surface font-bold">WTF Media</span>, pushing the boundaries of interactive motion and backend performance.
                </p>
                <p>
                  Today, I operate a high-end <span className="text-on-surface font-bold">Freelance Consultancy</span>, partnering with forward-thinking brands to build digital monoliths that command attention and deliver measurable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS ROW */}
      <section className="py-20 border-y border-outline-variant/10">
        <div className="px-12 max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter">7+</div>
            <div className="text-xs uppercase tracking-[0.3em] text-on-surface-variant mt-2">Years</div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter">50+</div>
            <div className="text-xs uppercase tracking-[0.3em] text-on-surface-variant mt-2">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter">25+</div>
            <div className="text-xs uppercase tracking-[0.3em] text-on-surface-variant mt-2">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter">12+</div>
            <div className="text-xs uppercase tracking-[0.3em] text-on-surface-variant mt-2">Freelance</div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="py-32 px-12 max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-headline tracking-tighter font-bold uppercase sticky top-40">Career<br/>Chronicle</h2>
          </div>
          <div className="md:w-2/3 border-l border-primary/30 pl-12 space-y-24 relative">
            {/* Milestone 1 */}
            <div className="relative">
              <div className="absolute -left-[53px] top-2 w-2 h-2 bg-primary"></div>
              <span className="text-primary font-headline font-bold text-xl tracking-tighter">2022 — PRESENT</span>
              <h3 className="text-3xl font-headline font-bold uppercase mt-2">Freelance Consultancy</h3>
              <p className="text-on-surface-variant mt-4 text-lg max-w-xl">
                Providing end-to-end digital product development for global startups. Focused on React ecosystem, high-performance Node.js backends, and brutalist UI design.
              </p>
            </div>
            {/* Milestone 2 */}
            <div className="relative">
              <div className="absolute -left-[53px] top-2 w-2 h-2 bg-primary"></div>
              <span className="text-primary font-headline font-bold text-xl tracking-tighter">2019 — 2022</span>
              <h3 className="text-3xl font-headline font-bold uppercase mt-2">WTF Media</h3>
              <p className="text-on-surface-variant mt-4 text-lg max-w-xl">
                Lead Interactive Developer. Directed the migration of legacy platforms to headless architectures using Next.js and Sanity CMS.
              </p>
            </div>
            {/* Milestone 3 */}
            <div className="relative">
              <div className="absolute -left-[53px] top-2 w-2 h-2 bg-primary"></div>
              <span className="text-primary font-headline font-bold text-xl tracking-tighter">2017 — 2019</span>
              <h3 className="text-3xl font-headline font-bold uppercase mt-2">The Digital Impressions</h3>
              <p className="text-on-surface-variant mt-4 text-lg max-w-xl">
                Frontend Developer. Focused on crafting responsive, pixel-perfect interfaces for premium fashion and lifestyle brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & STACK */}
      <section className="bg-surface-container py-32">
        <div className="px-12 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div>
              <h4 className="text-primary font-headline font-bold uppercase tracking-tighter mb-6">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">React</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Next.js</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">TypeScript</span>
              </div>
            </div>
            <div>
              <h4 className="text-primary font-headline font-bold uppercase tracking-tighter mb-6">Backend</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Node.js</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">PostgreSQL</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Redis</span>
              </div>
            </div>
            <div>
              <h4 className="text-primary font-headline font-bold uppercase tracking-tighter mb-6">Motion</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">GSAP</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Framer Motion</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Three.js</span>
              </div>
            </div>
            <div>
              <h4 className="text-primary font-headline font-bold uppercase tracking-tighter mb-6">CMS</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Sanity</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Strapi</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Contentful</span>
              </div>
            </div>
            <div>
              <h4 className="text-primary font-headline font-bold uppercase tracking-tighter mb-6">Design</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Figma</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">UI/UX</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Typography</span>
              </div>
            </div>
            <div>
              <h4 className="text-primary font-headline font-bold uppercase tracking-tighter mb-6">Tools</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Git</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">Docker</span>
                <span className="bg-surface-container-high px-3 py-1 text-xs uppercase tracking-widest text-on-surface">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-40 px-12 overflow-hidden">
        <div className="max-w-[1920px] mx-auto text-center relative">
          <span className="text-primary text-[100px] font-headline absolute -top-16 left-0 opacity-20">“</span>
          <blockquote className="text-4xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-tight relative z-10 italic">
            I believe great websites aren&apos;t just <span className="text-primary">beautiful</span> — they&apos;re strategic tools that <span className="text-primary">drive growth</span>.
          </blockquote>
          <span className="text-primary text-[100px] font-headline absolute -bottom-32 right-0 opacity-20">”</span>
        </div>
      </section>

      {/* EDITORIAL MARQUEE */}
      <div className="editorial-marquee py-12 border-y border-primary/10 overflow-hidden select-none">
        <div className="flex space-x-12 animate-marquee min-w-[200%]">
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">Innovation</span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">Precision</span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">Brutalist</span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">Strategy</span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">Evolution</span>
          {/* duplicate for continuous loop */}
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">Innovation</span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">Precision</span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">Brutalist</span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">Strategy</span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">Evolution</span>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="py-40 px-12 max-w-[1920px] mx-auto text-center">
        <h2 className="text-6xl md:text-9xl font-headline font-bold tracking-tighter uppercase mb-16">
          Want to work<br/><span className="text-primary">together?</span>
        </h2>
        <Link href="/contact" className="inline-flex items-center gap-6 bg-primary text-on-primary px-16 py-8 text-2xl font-headline font-bold uppercase tracking-tighter group transition-all duration-300 hover:shadow-[0_0_60px_rgba(212,255,34,0.3)]">
          Let&apos;s Talk
          <span className="material-symbols-outlined text-4xl group-hover:translate-x-4 transition-transform duration-300">arrow_forward</span>
        </Link>
      </section>
    </>
  );
}
