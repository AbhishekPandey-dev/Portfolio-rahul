import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      {/* SECTION 2: Hero */}
      <header className="pt-48 pb-32 px-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <h1 className="font-headline font-bold text-huge uppercase">
            WHAT I<br/><span className="text-primary">OFFER</span>
          </h1>
          <p className="max-w-md text-on-surface-variant text-xl leading-relaxed mb-4">
            End-to-end web solutions — from design to deployment and beyond. Specializing in high-performance digital products.
          </p>
        </div>
      </header>

      {/* SECTION 3: Service 01 - Shopify */}
      <section className="bg-surface-container py-32 px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-6 mb-8">
              <span className="font-headline font-bold text-8xl text-primary leading-none">01</span>
              <span className="material-symbols-outlined text-5xl text-primary" data-icon="shopping_bag">shopping_bag</span>
            </div>
            <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter mb-6">Shopify Development</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Specializing in Shopify Plus, I build custom themes engineered for performance and scale. I bridge the gap between complex Liquid development and intuitive UI/UX to help e-commerce brands convert more effectively.
            </p>
            <div className="inline-block bg-surface-container-high px-4 py-2 text-primary font-label text-xs uppercase tracking-widest">
              Ideal for: E-commerce brands, fashion labels, D2C startups
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-high p-8 hover:bg-surface-container-highest transition-all group">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">01.01</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">Custom Shopify Themes</p>
            </div>
            <div className="bg-surface-container-high p-8 hover:bg-surface-container-highest transition-all group">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">01.02</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">Liquid Template Development</p>
            </div>
            <div className="bg-surface-container-high p-8 hover:bg-surface-container-highest transition-all group">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">01.03</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">Shopify Plus Solutions</p>
            </div>
            <div className="bg-surface-container-high p-8 hover:bg-surface-container-highest transition-all group">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">01.04</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">App Integrations</p>
            </div>
            <div className="bg-surface-container-high p-8 hover:bg-surface-container-highest transition-all group">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">01.05</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">Store Migration</p>
            </div>
            <div className="bg-surface-container-high p-8 hover:bg-surface-container-highest transition-all group">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">01.06</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">Performance Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Service 02 - WordPress */}
      <section className="bg-surface py-32 px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 flex-row-reverse">
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
            <div className="bg-surface-container-low p-8 hover:bg-surface-container-high transition-all group border-l border-primary/20">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">02.01</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">Custom Themes</p>
            </div>
            <div className="bg-surface-container-low p-8 hover:bg-surface-container-high transition-all group border-l border-primary/20">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">02.02</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">Plugin Development</p>
            </div>
            <div className="bg-surface-container-low p-8 hover:bg-surface-container-high transition-all group border-l border-primary/20">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">02.03</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">WooCommerce Solutions</p>
            </div>
            <div className="bg-surface-container-low p-8 hover:bg-surface-container-high transition-all group border-l border-primary/20">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">02.04</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">Speed Optimization</p>
            </div>
            <div className="bg-surface-container-low p-8 hover:bg-surface-container-high transition-all group border-l border-primary/20">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">02.05</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">Website Redesign</p>
            </div>
            <div className="bg-surface-container-low p-8 hover:bg-surface-container-high transition-all group border-l border-primary/20">
              <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">02.06</h4>
              <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">SEO Mastery</p>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="flex items-center gap-6 mb-8">
              <span className="font-headline font-bold text-8xl text-primary leading-none">02</span>
              <span className="material-symbols-outlined text-5xl text-primary" data-icon="code">code</span>
            </div>
            <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter mb-6">WordPress Development</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Beyond standard templates. I engineer high-performance WordPress sites with a focus on clean code, security, and lightning-fast loading times.
            </p>
            <div className="inline-block bg-surface-container px-4 py-2 text-primary font-label text-xs uppercase tracking-widest">
              Ideal for: Service businesses, blogs, small businesses
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Service 03 - UI/UX */}
      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-6 mb-8">
              <span className="font-headline font-bold text-8xl text-primary leading-none">03</span>
              <span className="material-symbols-outlined text-5xl text-primary" data-icon="polyline">polyline</span>
            </div>
            <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter mb-6">UI/UX Design</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Design is more than just looks; it’s about how people feel when they use your product. I create seamless digital flows that feel natural to the user, balancing high-end aesthetics with a frictionless experience that builds trust.
            </p>
            <div className="inline-block bg-surface-container-high px-4 py-2 text-primary font-label text-xs uppercase tracking-widest">
              Ideal for: Startups, SaaS products, agencies
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {["User Interface Design", "UX Research", "Design Systems", "Prototyping", "Responsive Design", "Accessibility Audit"].map((item, i) => (
              <div key={i} className="bg-surface-container-high p-8 hover:neon-glow transition-all group">
                <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">03.0{i + 1}</h4>
                <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Service 04 - E-Commerce */}
      <section className="bg-surface py-32 px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 flex-row-reverse">
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
            {["Full Store Setup", "Payment Integration", "Shipping Config", "Conversion Optimization", "Analytics Setup", "Multi-currency Support"].map((item, i) => (
              <div key={i} className="bg-surface-container-high p-8 hover:bg-primary hover:text-on-primary transition-all group cursor-default">
                <h4 className="font-label text-xs uppercase tracking-widest mb-4 group-hover:text-on-primary text-primary">04.0{i + 1}</h4>
                <p className="font-headline text-xl font-bold group-hover:text-on-primary">{item}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="flex items-center gap-6 mb-8">
              <span className="font-headline font-bold text-8xl text-primary leading-none">04</span>
              <span className="material-symbols-outlined text-5xl text-primary" data-icon="shopping_cart">shopping_cart</span>
            </div>
            <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter mb-6">E-Commerce Solutions</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              I build comprehensive retail systems that connect every dot of the customer journey. From the moment a user lands on your site to the second their order ships, I ensure your technology works in perfect harmony.
            </p>
            <div className="inline-block bg-surface-container px-4 py-2 text-primary font-label text-xs uppercase tracking-widest">
              Ideal for: Online retailers, marketplaces, subscription businesses
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Service 05 - Maintenance */}
      <section className="bg-surface-container-highest py-32 px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-6 mb-8">
              <span className="font-headline font-bold text-8xl text-primary leading-none">05</span>
              <span className="material-symbols-outlined text-5xl text-primary" data-icon="security">security</span>
            </div>
            <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter mb-6">Maintenance &amp; Support</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Peace of mind as a service. I provide continuous monitoring, security hardening, and performance updates to ensure your digital asset remains a top performer.
            </p>
            <div className="inline-block bg-surface-container px-4 py-2 text-primary font-label text-xs uppercase tracking-widest">
              Ideal for: Any business with an existing website
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Performance Monitoring", "Security Updates", "Bug Fixes", "Content Updates", "Backup Management", "Uptime Monitoring"].map((item, i) => (
              <div key={i} className="bg-surface p-8 border border-outline-variant/10 hover:border-primary/50 transition-all">
                <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">05.0{i + 1}</h4>
                <p className="font-headline text-xl font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Pricing Philosophy */}
      <section className="py-32 px-8 border-y border-outline-variant/10 bg-surface-dim">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h3 className="font-headline text-4xl font-bold uppercase mb-6 leading-tight">Every project is unique. I provide custom quotes based on scope, timeline, and complexity.</h3>
          </div>
          <Link href="/contact" className="group relative px-10 py-5 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-lg neon-glow">
            Get a Free Quote →
            <div className="absolute inset-0 border-2 border-primary group-hover:scale-105 transition-transform"></div>
          </Link>
        </div>
      </section>

      {/* SECTION 9: Final CTA */}
      <section className="py-48 px-8 text-center bg-surface relative overflow-hidden">
        {/* Ambient Glow Decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-headline font-bold text-8xl md:text-9xl uppercase tracking-tighter mb-12">Ready to start your project?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full md:w-auto bg-primary text-on-primary px-12 py-6 font-headline font-bold uppercase tracking-widest text-xl hover:translate-y-[-4px] transition-transform">
              Let&apos;s Talk
            </Link>
            <Link href="/work" className="w-full md:w-auto border-2 border-on-surface text-on-surface px-12 py-6 font-headline font-bold uppercase tracking-widest text-xl hover:bg-white hover:text-surface transition-all">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
