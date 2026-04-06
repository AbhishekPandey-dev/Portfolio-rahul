import Link from "next/link";
import Image from "next/image";

export default function ProjectDetailPage() {
  return (
    <>
      {/* PROJECT HERO */}
      <section className="relative min-h-screen pt-48 pb-24 px-6 md:px-12 flex flex-col justify-end max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="font-headline text-primary font-bold tracking-widest uppercase mb-4 block">SHOPIFY DEVELOPMENT</span>
            <h1 className="font-headline text-[clamp(64px,10vw,140px)] font-black leading-[0.85] tracking-[-0.05em] uppercase mb-12">
              LUXE<br/>FASHION<br/>STORE
            </h1>
            <p className="text-on-surface-variant text-2xl md:text-3xl max-w-2xl leading-relaxed mb-12">
              A premium fashion e-commerce experience built on Shopify Plus, merging high-end editorial aesthetics with robust performance.
            </p>
          </div>
          <div className="lg:col-span-4 border-l border-outline-variant/30 pl-8 pb-4">
            <div className="space-y-8">
              <div>
                <span className="block text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">Role</span>
                <p className="text-on-surface font-medium">Full Stack Developer</p>
              </div>
              <div>
                <span className="block text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">Timeline</span>
                <p className="text-on-surface font-medium">8 Weeks</p>
              </div>
              <div>
                <span className="block text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">Tech Stack</span>
                <p className="text-on-surface font-medium">Shopify, Liquid, JavaScript, Tailwind CSS</p>
              </div>
              <div>
                <a className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group" href="#">
                  Live Site
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 w-full h-[716px] bg-surface-container overflow-hidden relative">
          <Image alt="Hero view" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1542295669297-4d352b042bce?q=80&w=3540&auto=format&fit=crop" fill sizes="100vw" />
        </div>
      </section>

      {/* SECTION 01: THE CHALLENGE */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-headline text-4xl font-black text-primary leading-none uppercase tracking-tighter">01 —<br/>THE CHALLENGE</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="max-w-[75ch]">
              <p className="text-2xl md:text-3xl text-on-surface leading-snug mb-8">
                The client required a digital flagship that felt as exclusive as their physical atelier. Existing Shopify templates failed to capture the brand's brutalist-minimalist DNA.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                The core challenge lay in balancing high-resolution editorial imagery with lightning-fast load times. We needed to develop a custom Shopify Plus architecture that supported advanced filtering for high-volume collections without compromising the "frameless" aesthetic of a high-end fashion lookbook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE SOLUTION */}
      <section className="py-32 px-6 md:px-12 bg-surface-container">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-headline text-4xl font-black text-primary leading-none uppercase tracking-tighter">02 —<br/>THE SOLUTION</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="max-w-[75ch] mb-16">
              <p className="text-2xl md:text-3xl text-on-surface leading-snug mb-8">
                We built a custom Shopify theme from the ground up, utilizing a "Liquid-first" approach for peak server-side performance.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                By integrating a headless search API with a custom-built Liquid frontend, we achieved instantaneous filtering. The UI was designed as a "Neon Monolith"—a series of dark blocks that let the high-fashion photography breathe and command focus.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
              <div className="bg-surface-container p-12 hover:bg-surface-container-high transition-colors group">
                <span className="block text-primary mb-6 font-bold tracking-widest uppercase text-xs">02.1</span>
                <h3 className="text-2xl font-headline font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform">Custom Shopify Theme</h3>
                <p className="text-on-surface-variant">Built from scratch without bloated frameworks for 100/100 performance scores.</p>
              </div>
              <div className="bg-surface-container p-12 hover:bg-surface-container-high transition-colors group">
                <span className="block text-primary mb-6 font-bold tracking-widest uppercase text-xs">02.2</span>
                <h3 className="text-2xl font-headline font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform">Filtering System</h3>
                <p className="text-on-surface-variant">Advanced algorithmic sorting for thousands of unique SKUs and variants.</p>
              </div>
              <div className="bg-surface-container p-12 hover:bg-surface-container-high transition-colors group">
                <span className="block text-primary mb-6 font-bold tracking-widest uppercase text-xs">02.3</span>
                <h3 className="text-2xl font-headline font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform">Mobile-First UI</h3>
                <p className="text-on-surface-variant">A thumb-friendly, app-like experience designed for the modern fashion consumer.</p>
              </div>
              <div className="bg-surface-container p-12 hover:bg-surface-container-high transition-colors group">
                <span className="block text-primary mb-6 font-bold tracking-widest uppercase text-xs">02.4</span>
                <h3 className="text-2xl font-headline font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform">Technical SEO</h3>
                <p className="text-on-surface-variant">Structured data implementation to ensure dominance in fashion search queries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: THE RESULTS */}
      <section className="py-48 px-6 md:px-12 bg-surface">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-24">
            <h2 className="font-headline text-4xl font-black text-primary leading-none uppercase tracking-tighter mb-4">03 —<br/>THE RESULTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="border-t border-primary/20 pt-12">
              <p className="font-headline text-7xl font-black text-white mb-2 neon-text-glow">45%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Conversion Rate</p>
            </div>
            <div className="border-t border-primary/20 pt-12">
              <p className="font-headline text-7xl font-black text-white mb-2 neon-text-glow">2.1s</p>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Load Time</p>
            </div>
            <div className="border-t border-primary/20 pt-12">
              <p className="font-headline text-7xl font-black text-white mb-2 neon-text-glow">60%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Mobile Traffic</p>
            </div>
            <div className="border-t border-primary/20 pt-12">
              <p className="font-headline text-7xl font-black text-white mb-2 neon-text-glow">35%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Revenue Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: GALLERY */}
      <section className="py-12 bg-surface space-y-12 max-w-[1920px] mx-auto">
        <div className="px-6 md:px-12">
          <h2 className="font-headline text-4xl font-black text-primary leading-none uppercase tracking-tighter mb-12">04 —<br/>GALLERY</h2>
        </div>
        <div className="w-full h-[921px] bg-surface-container relative">
          <Image alt="Main display" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=3540&auto=format&fit=crop" fill sizes="100vw" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12">
          <div className="aspect-[4/5] bg-surface-container relative">
            <Image alt="Mobile experience" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=3540&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="aspect-[4/5] bg-surface-container relative">
            <Image alt="Detail view" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=3540&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* NEXT PROJECT NAVIGATION */}
      <section className="py-32 px-6 md:px-12 bg-surface border-t border-outline-variant/10">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <Link className="group flex flex-col items-start" href="/work">
            <span className="text-on-surface-variant text-xs uppercase tracking-widest mb-4">← Back to Work</span>
            <span className="font-headline text-4xl md:text-5xl font-black uppercase group-hover:text-primary transition-colors">All Projects</span>
          </Link>
          <div className="hidden md:block w-px h-24 bg-outline-variant/20"></div>
          <Link className="group flex flex-col items-end text-right" href="/work/techvault">
            <span className="text-on-surface-variant text-xs uppercase tracking-widest mb-4">Next Project →</span>
            <span className="font-headline text-4xl md:text-5xl font-black uppercase group-hover:text-primary transition-colors">TechVault App</span>
          </Link>
        </div>
      </section>
    </>
  );
}
