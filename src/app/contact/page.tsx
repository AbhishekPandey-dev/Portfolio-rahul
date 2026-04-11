import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* SECTION 2: PAGE HERO */}
      <section className="px-6 md:px-10 mb-24 md:mb-40 pt-32">
        <div className="max-w-6xl mx-auto relative">
          {/* Decorative Accent */}
          <div className="absolute -top-10 -left-10 w-2 h-2 bg-primary"></div>
          <div className="absolute top-20 -right-4 w-20 h-[1px] bg-primary/30"></div>
          <h1 className="display-text text-[clamp(4rem,15vw,120px)] md:text-[120px] font-bold leading-[0.82]">
            <span className="block">LET&apos;S BUILD</span>
            <span className="block md:ml-32 text-outline-white relative z-10">SOMETHING</span>
            <span className="block md:ml-64 text-primary relative z-20">GREAT</span>
          </h1>
          <p className="mt-8 md:mt-10 text-on-surface-variant max-w-md text-lg md:text-xl font-light">
            Ready to bring your project to life? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* SECTION 3: CONTACT CONTENT */}
      <section className="px-6 md:px-10 mb-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
          {/* Left Column */}
          <div className="w-full md:w-[45%]">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-6">GET IN TOUCH</span>
            <p className="text-on-surface text-lg mb-10 leading-relaxed">
              Whether you are looking for a bespoke Shopify storefront, a high-performance WordPress site, or a custom application built with precision— I provide UI/UX focused development that converts.
            </p>
            <div className="space-y-8 mb-12">
              <div>
                <span className="text-on-surface-variant text-[10px] uppercase tracking-widest block mb-2">Email</span>
                <a className="text-primary text-2xl font-medium hover:opacity-80 transition-opacity" href="mailto:rahul@pixelforge.in">rahul@pixelforge.in</a>
              </div>
              <div>
                <span className="text-on-surface-variant text-[10px] uppercase tracking-widest block mb-2">WhatsApp</span>
                <a className="text-primary text-xl font-medium flex items-center gap-2 group" href="#">
                  Send a WhatsApp Message 
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
              <div>
                <span className="text-on-surface-variant text-[10px] uppercase tracking-widest block mb-2">Location</span>
                <p className="text-on-surface-variant">India 🇮🇳</p>
              </div>
            </div>
            <div className="pt-8 border-t border-outline-variant/20">
              <p className="text-on-surface-variant text-xs uppercase tracking-wider mb-1">Response Policy</p>
              <p className="text-on-surface-variant text-sm">I typically respond within 24 hours. Available all days.</p>
            </div>
          </div>
          {/* Right Column (Form) */}
          <ContactForm />
        </div>
      </section>

      {/* SECTION 4: AVAILABILITY BANNER */}
      <section className="w-full bg-surface-container py-8 border-y border-outline-variant/10 mb-32 overflow-hidden flex justify-center">
        <div className="flex items-center justify-center gap-4 whitespace-nowrap">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <p className="font-headline font-medium text-sm md:text-base uppercase tracking-[0.3em]">Currently available for new projects.</p>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="px-6 md:px-10 mb-40">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-12 text-center">COMMON QUESTIONS</span>
          <div className="space-y-px bg-outline-variant/20">
            <details className="group bg-background p-6 md:p-8 cursor-pointer transition-all hover:bg-surface-container-low">
              <summary className="flex justify-between items-center list-none outline-none">
                <h3 className="text-lg md:text-xl font-headline font-medium">What is the typical project timeline?</h3>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-6 text-on-surface-variant leading-relaxed">
                Most custom projects range from 2 to 3 weeks depending on complexity. Small Shopify setups can be completed in 1 week, while comprehensive enterprise applications require a more rigorous schedule.
              </p>
            </details>
            <details className="group bg-background p-6 md:p-8 cursor-pointer transition-all hover:bg-surface-container-low">
              <summary className="flex justify-between items-center list-none outline-none">
                <h3 className="text-lg md:text-xl font-headline font-medium">Do you provide ongoing support after launch?</h3>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-6 text-on-surface-variant leading-relaxed">
                Absolutely. I offer monthly maintenance retainers to ensure your platform stays secure, fast, and up-to-date. This includes technical SEO audits, speed optimization, and regular backups.
              </p>
            </details>
            <details className="group bg-background p-6 md:p-8 cursor-pointer transition-all hover:bg-surface-container-low">
              <summary className="flex justify-between items-center list-none outline-none">
                <h3 className="text-lg md:text-xl font-headline font-medium">Which platforms do you specialize in?</h3>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-6 text-on-surface-variant leading-relaxed">
                I am a specialist in Shopify Liquid, WordPress (headless and traditional), and custom MERN stack applications. I choose the technology that best fits your business goals and performance needs.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
