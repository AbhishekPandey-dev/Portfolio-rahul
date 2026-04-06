import Link from "next/link";
import Image from "next/image";

export default function WorkPage() {
  return (
    <>
      {/* Page Header */}
      <header className="px-8 mb-24 max-w-[1920px] mx-auto pt-48">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="relative">
            <h1 className="font-headline font-bold text-[100px] md:text-[180px] leading-[0.9] tracking-tighter uppercase">
              SELECTED<br/>
              <span className="outline-text">WORK</span>
            </h1>
            <div className="w-24 h-2 bg-primary mt-8"></div>
          </div>
          <div className="max-w-md">
            <p className="text-on-surface-variant text-xl leading-relaxed font-light">
              A curated collection of digital experiences focusing on functional luxury, high-performance commerce, and surgical design precision.
            </p>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <section className="px-8 mb-16 max-w-[1920px] mx-auto">
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-b border-outline-variant/20 pb-4">
          <button className="text-primary font-headline uppercase tracking-widest text-sm border-b-2 border-primary pb-4 -mb-[18px]">All Projects</button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors font-headline uppercase tracking-widest text-sm pb-4">Shopify</button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors font-headline uppercase tracking-widest text-sm pb-4">WordPress</button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors font-headline uppercase tracking-widest text-sm pb-4">UI/UX Design</button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors font-headline uppercase tracking-widest text-sm pb-4">E-Commerce</button>
        </div>
      </section>

      {/* Asymmetric Project Grid */}
      <section className="px-8 max-w-[1920px] mx-auto space-y-20">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-12">
          <Link href="/work/luxe-fashion" className="md:col-span-6 group block">
            <div className="bg-surface-container-low aspect-[16/9] overflow-hidden mb-6 relative hover:shadow-[0_0_40px_rgba(212,255,34,0.15)] transition-all duration-700">
              <Image alt="Luxe Fashion Store" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 60vw" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-primary font-headline text-xs uppercase tracking-widest mb-2 block">Shopify / E-Commerce</span>
                <h3 className="text-3xl font-headline font-bold uppercase mb-2">Luxe Fashion Store</h3>
                <p className="text-on-surface-variant font-light">Bespoke online presence for a Parisian haute couture label.</p>
              </div>
              <span className="material-symbols-outlined text-4xl group-hover:text-primary transition-colors">north_east</span>
            </div>
          </Link>
          <Link href="/work/techvault" className="md:col-span-4 group block">
            <div className="bg-surface-container-low aspect-[4/5] overflow-hidden mb-6 relative hover:shadow-[0_0_40px_rgba(212,255,34,0.15)] transition-all duration-700">
              <Image alt="TechVault App" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
            <div>
              <span className="text-primary font-headline text-xs uppercase tracking-widest mb-2 block">UI/UX / Fintech</span>
              <h3 className="text-3xl font-headline font-bold uppercase mb-2">TechVault App</h3>
              <p className="text-on-surface-variant font-light">Secure asset management platform for modern investors.</p>
            </div>
          </Link>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-12">
          <Link href="/work/greenleaf" className="md:col-span-4 group order-2 md:order-1 block">
            <div className="bg-surface-container-low aspect-[4/5] overflow-hidden mb-6 relative hover:shadow-[0_0_40px_rgba(212,255,34,0.15)] transition-all duration-700">
              <Image alt="GreenLeaf Organics" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
            <div>
              <span className="text-primary font-headline text-xs uppercase tracking-widest mb-2 block">WordPress / Lifestyle</span>
              <h3 className="text-3xl font-headline font-bold uppercase mb-2">GreenLeaf Organics</h3>
              <p className="text-on-surface-variant font-light">Redefining farm-to-table digital storytelling and logistics.</p>
            </div>
          </Link>
          <Link href="#" className="md:col-span-6 group order-1 md:order-2 block">
            <div className="bg-surface-container-low aspect-[16/9] overflow-hidden mb-6 relative hover:shadow-[0_0_40px_rgba(212,255,34,0.15)] transition-all duration-700">
              <Image alt="CryptoTrack Dashboard" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=3432&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 60vw" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-primary font-headline text-xs uppercase tracking-widest mb-2 block">Custom Web App / Web3</span>
                <h3 className="text-3xl font-headline font-bold uppercase mb-2">CryptoTrack Dashboard</h3>
                <p className="text-on-surface-variant font-light">Real-time monitoring tools for high-frequency crypto traders.</p>
              </div>
              <span className="material-symbols-outlined text-4xl group-hover:text-primary transition-colors">north_east</span>
            </div>
          </Link>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link href="#" className="group block">
            <div className="bg-surface-container-low aspect-square overflow-hidden mb-6 relative hover:shadow-[0_0_40px_rgba(212,255,34,0.15)] transition-all duration-700">
              <Image alt="ArtisanBrew" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=3387&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div>
              <span className="text-primary font-headline text-xs uppercase tracking-widest mb-2 block">Shopify / Beverage</span>
              <h3 className="text-3xl font-headline font-bold uppercase mb-2">ArtisanBrew</h3>
              <p className="text-on-surface-variant font-light">Premium craft coffee subscription platform with custom roast profiles.</p>
            </div>
          </Link>
          <Link href="#" className="group block">
            <div className="bg-surface-container-low aspect-square overflow-hidden mb-6 relative hover:shadow-[0_0_40px_rgba(212,255,34,0.15)] transition-all duration-700">
              <Image alt="MindSpace Therapy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=3420&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div>
              <span className="text-primary font-headline text-xs uppercase tracking-widest mb-2 block">WordPress / Wellness</span>
              <h3 className="text-3xl font-headline font-bold uppercase mb-2">MindSpace Therapy</h3>
              <p className="text-on-surface-variant font-light">A calm, secure digital sanctuary for modern mental health services.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Load More */}
      <section className="py-32 flex justify-center">
        <button className="px-12 py-5 border border-primary text-primary font-headline font-bold uppercase tracking-[0.3em] hover:bg-primary hover:text-on-primary transition-all duration-500 active:scale-95 group flex items-center gap-4">
          Load More Projects
          <span className="material-symbols-outlined transition-transform group-hover:rotate-90">add</span>
        </button>
      </section>

      {/* CTA Strip */}
      <section className="bg-surface-container py-32 px-8">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <h2 className="font-headline font-bold text-5xl md:text-7xl uppercase max-w-2xl leading-[0.9]">
            Have a project you&apos;d like to discuss?
          </h2>
          <Link className="group flex items-center gap-4" href="/contact">
            <span className="font-headline font-bold text-5xl md:text-7xl text-primary transition-transform group-hover:-translate-x-4 uppercase">LET&apos;S TALK</span>
            <span className="material-symbols-outlined text-6xl md:text-8xl text-primary font-light">arrow_right_alt</span>
          </Link>
        </div>
      </section>
    </>
  );
}
