export default function ProcessPage() {
  return (
    <>
      {/* SECTION 2: PAGE HERO */}
      <header className="relative min-h-[921px] flex flex-col justify-center px-12 pt-32 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full flex justify-between pointer-events-none opacity-20">
          <div className="h-[1px] w-1/4 bg-primary neon-glow"></div>
          <div className="h-[1px] w-1/12 bg-primary neon-glow"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col">
            <h1 className="font-headline font-bold text-[140px] md:text-[200px] leading-[0.8] tracking-tighter text-white">
              HOW I
            </h1>
            <div className="flex items-center gap-12 mt-4 md:ml-48">
              <h1 className="font-headline font-bold text-[140px] md:text-[200px] leading-[0.8] tracking-tighter text-primary">
                WORK
              </h1>
              <div className="hidden lg:block w-32 h-[2px] bg-primary/30"></div>
            </div>
          </div>
          <div className="mt-16 md:ml-64 max-w-xl">
            <p className="text-on-surface-variant text-xl leading-relaxed font-body">
              A transparent, structured approach from initial discovery to launch and beyond. Every pixel and line of code is intentional.
            </p>
            <div className="mt-8 flex gap-4 items-center">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary font-label">The Methodology</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-12 opacity-5">
          <span className="font-headline text-[20vw] md:text-[300px] font-black leading-none select-none">SYSTEM</span>
        </div>
      </header>

      {/* SECTION 3: PROCESS STEPS */}
      <section className="bg-surface-dim pt-24 pb-5">
        <div className="space-y-0">
          {/* STEP 01 */}
          <div className="group relative border-t border-white/5 bg-surface-dim hover:bg-surface-container transition-colors duration-700 py-32 px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 relative z-10">
              <div className="w-full md:w-1/4">
                <span className="text-[100px] font-headline font-bold text-primary leading-none">01</span>
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-8 tracking-tight">Discovery &amp; Understanding</h2>
                <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed mb-12">
                  Understanding goals, audience, and technical needs. We dive deep into your vision to build a solid foundation before a single line of code is written.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Requirements Gathering</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Competitor Analysis</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Goal Definition</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Technical Assessment</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 bottom-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
              <span className="text-[20vw] font-headline font-black text-white leading-none">ROOTS</span>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="group relative border-t border-white/5 bg-surface-container-low hover:bg-surface-container transition-colors duration-700 py-32 px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 relative z-10">
              <div className="w-full md:w-1/4">
                <span className="text-[100px] font-headline font-bold text-primary leading-none">02</span>
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-8 tracking-tight">Strategy &amp; Planning</h2>
                <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed mb-12">
                  Defining roadmap, tech stack, and milestones. Strategy is the bridge between discovery and design, ensuring every feature serves a purpose.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Tech Stack Selection</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Project Roadmap</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Information Architecture</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Content Planning</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="group relative border-t border-white/5 bg-surface-container-high hover:bg-surface-container-highest transition-colors duration-700 py-32 px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 relative z-10">
              <div className="w-full md:w-1/4">
                <span className="text-[100px] font-headline font-bold text-primary leading-none">03</span>
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-8 tracking-tight">Design &amp; Prototyping</h2>
                <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed mb-12">
                  Figma wireframes and hi-fi UI. We craft cinematic digital experiences through rigorous testing of interactions and visual hierarchy.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Wireframing</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">UI Design</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Prototype</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Design System</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Client Review</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 04 */}
          <div className="group relative border-t border-white/5 bg-surface-container-high hover:bg-surface-container-highest transition-colors duration-700 py-32 px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 relative z-10">
              <div className="w-full md:w-1/4">
                <span className="text-[100px] font-headline font-bold text-primary leading-none">04</span>
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-8 tracking-tight">Development &amp; Building</h2>
                <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed mb-12">
                  Clean code and frameworks. Transforming designs into high-performance, accessible, and scalable digital products.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Frontend Development</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Backend Integration</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">CMS Setup</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">API Integration</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Performance Optimization</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 05 */}
          <div className="group relative border-t border-white/5 bg-surface-container-low hover:bg-surface-container transition-colors duration-700 py-32 px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 relative z-10">
              <div className="w-full md:w-1/4">
                <span className="text-[100px] font-headline font-bold text-primary leading-none">05</span>
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-8 tracking-tight">Testing &amp; QA</h2>
                <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed mb-12">
                  Rigorous cross-device testing. We ensure the experience is flawless, no matter the device, browser, or connection speed.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Cross-Browser Testing</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Mobile Testing</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Performance Audit</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Accessibility Check</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 06 */}
          <div className="group relative border-t border-white/5 bg-surface-dim hover:bg-surface-container transition-colors duration-700 py-32 px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 relative z-10">
              <div className="w-full md:w-1/4">
                <span className="text-[100px] font-headline font-bold text-primary leading-none">06</span>
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-8 tracking-tight">Launch &amp; Deployment</h2>
                <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed mb-12">
                  Zero-downtime deployment. Bringing your project into the wild with precision engineering and comprehensive analytics.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Deployment</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">DNS Setup</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Analytics Integration</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">SEO Configuration</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 07 */}
          <div className="group relative border-y border-white/5 bg-surface-container-low hover:bg-surface-container transition-colors duration-700 py-32 px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 relative z-10">
              <div className="w-full md:w-1/4">
                <span className="text-[100px] font-headline font-bold text-primary leading-none">07</span>
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-8 tracking-tight">Ongoing Support</h2>
                <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed mb-12">
                  Maintenance and updates. The launch is just the beginning. I provide ongoing evolution to keep your project leading the curve.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Maintenance</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Security Updates</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Performance Monitoring</span>
                  <span className="px-5 py-2 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold text-white group-hover:border-primary/50 transition-colors">Feature Additions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PLAY GAME */}
      
      {/* SECTION 5: CTA */}
      <section className="py-48 bg-surface-container relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-stroke font-headline">START</div>
        </div>
        <div className="max-w-4xl mx-auto px-12 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-headline font-bold text-white mb-12 tracking-tighter">Ready to start your project?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="w-full md:w-auto bg-primary text-zinc-950 px-12 py-6 font-bold font-['Space_Grotesk'] uppercase text-lg tracking-widest hover:translate-y-[-4px] hover:shadow-[0_10px_40px_rgba(212,255,34,0.3)] transition-all duration-300">
              Let&apos;s Talk →
            </a>
            <a href="/work" className="w-full md:w-auto border-2 border-white text-white px-12 py-6 font-bold font-['Space_Grotesk'] uppercase text-lg tracking-widest hover:bg-white hover:text-zinc-950 hover:translate-y-[-4px] transition-all duration-300">
              View my work →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
