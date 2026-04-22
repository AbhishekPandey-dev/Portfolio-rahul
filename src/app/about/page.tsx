import Image from "next/image";
import Link from "next/link";
import TechStack from "../../components/TechStack";

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-40 max-w-[1920px] mx-auto overflow-hidden">
        <div className="relative">
          <h1 className="font-headline font-bold text-[clamp(4.5rem,18vw,120px)] md:text-[240px] leading-[0.8] tracking-[-0.06em] uppercase">
            ABOUT
            <br />
            <span className="text-primary relative">
              ME
              <span className="absolute -right-12 bottom-8 h-4 w-4 bg-primary hidden md:block"></span>
            </span>
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
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-5 relative group">
            <div className="aspect-[3/4] bg-surface-container-highest overflow-hidden">
              <Image
                alt="Rahul Sharma"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                src="/images/image.png"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-primary"></div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="space-y-8 max-w-2xl">
              <span className="text-primary font-headline tracking-widest uppercase text-sm">
                The Narrative
              </span>
              <h2 className="text-4xl md:text-6xl font-headline tracking-tighter font-bold uppercase">
                7+ Years of Digital Evolution.
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-body">
                <p>
                  Good work takes time to develop. Mine started seven years ago
                  with a genuine curiosity about what makes digital experiences
                  feel considered — and what makes them fall flat.
                </p>
                <p>
                  I've had the privilege of working with teams that held high
                  standards. At{" "}
                  <span className="text-on-surface font-bold">
                    The Digital Impressions
                  </span>
                  , I learned discipline and taste. At{" "}
                  <span className="text-on-surface font-bold">WTF Media</span>,
                  I learned to balance ambition with execution. Both taught me
                  that the best results come from listening first.
                </p>
                <p>
                  Today I consult independently — working with a handful of
                  clients at a time, so every project gets the attention it
                  deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS ROW */}
      <section className="py-20 border-y border-outline-variant/10">
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter">
              7+
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-on-surface-variant mt-2">
              Years
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter">
              50+
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-on-surface-variant mt-2">
              Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter">
              25+
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-on-surface-variant mt-2">
              Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter">
              12+
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-on-surface-variant mt-2">
              Freelance
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="py-32 px-12 max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-headline tracking-tighter font-bold uppercase sticky top-40">
              Career
              <br />
              Chronicle
            </h2>
          </div>
          <div className="md:w-2/3 border-l border-primary/30 pl-12 space-y-24 relative">
            {/* Milestone 1 */}
            <div className="relative">
              <div className="absolute -left-[53px] top-2 w-2 h-2 bg-primary"></div>
              <span className="text-primary font-headline font-bold text-xl tracking-tighter">
                2022 — PRESENT
              </span>
              <h3 className="text-3xl font-headline font-bold uppercase mt-2">
                PixelForge - Freelance Consultancy
              </h3>
              <p className="text-on-surface-variant mt-4 text-lg max-w-xl">
                I build end-to-end digital experiences for startups that want to
                move fast without breaking their design. I combine a deep
                technical focus on Node.js and React with a personal passion for
                bold, intentional UI. It’s about more than just shipping
                features; it’s about building a solid foundation for your
                brand’s future.
              </p>
            </div>
            {/* Milestone 2 */}
            <div className="relative">
              <div className="absolute -left-[53px] top-2 w-2 h-2 bg-primary"></div>
              <span className="text-primary font-headline font-bold text-xl tracking-tighter">
                2019 — 2022
              </span>
              <h3 className="text-3xl font-headline font-bold uppercase mt-2">
                WTF Media
              </h3>
              <p className="text-on-surface-variant mt-4 text-lg max-w-xl">
                As Lead Interactive Developer, I took the helm of our transition
                away from clunky, outdated systems. By moving to a modern
                'headless' setup with Next.js and Sanity, I didn't just update
                the code—I made the site lightning-fast for users and gave our
                content team a workspace they actually enjoy using.
              </p>
            </div>
            {/* Milestone 3 */}
            <div className="relative">
              <div className="absolute -left-[53px] top-2 w-2 h-2 bg-primary"></div>
              <span className="text-primary font-headline font-bold text-xl tracking-tighter">
                2017 — 2019
              </span>
              <h3 className="text-2xl md:text-3xl font-headline font-bold uppercase mt-2">
                The Digital Impressions
              </h3>
              <p className="text-on-surface-variant mt-4 text-base md:text-lg max-w-xl">
                This is where I developed my eye for detail. Working with
                premium fashion and lifestyle brands, my job was to make sure
                the digital experience felt as high-end as the products
                themselves. I focused on creating interfaces that weren’t just
                'responsive,' but moved with a sense of grace and intent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & STACK */}
      <section className="bg-background py-5 relative" id="work">
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
          <h2 className="text-5xl font-headline tracking-tighter font-bold uppercase z-10 relative pointer-events-none text-center">
            My Tech & Skills Stack
          </h2>
          <TechStack />
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-40 px-12 overflow-hidden">
        <div className="max-w-[1920px] mx-auto text-center relative">
          <span className="text-primary text-[100px] font-headline absolute -top-16 left-0 opacity-20">
            “
          </span>
          <blockquote className="text-4xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-tight relative z-10 italic">
            I believe great websites aren&apos;t just{" "}
            <span className="text-primary">beautiful</span> — they&apos;re
            strategic tools that{" "}
            <span className="text-primary">drive growth</span>.
          </blockquote>
          <span className="text-primary text-[100px] font-headline absolute -bottom-32 right-0 opacity-20">
            ”
          </span>
        </div>
      </section>

      {/* EDITORIAL MARQUEE */}
      <div className="editorial-marquee py-12 border-y border-primary/10 overflow-hidden select-none">
        <div className="flex space-x-12 animate-marquee min-w-[200%]">
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">
            Innovation
          </span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">
            Precision
          </span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">
            Brutalist
          </span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">
            Strategy
          </span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">
            Evolution
          </span>
          {/* duplicate for continuous loop */}
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">
            Innovation
          </span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">
            Precision
          </span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">
            Brutalist
          </span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">
            Strategy
          </span>
          <span className="font-headline text-8xl font-bold neon-text-stroke uppercase">
            Evolution
          </span>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="py-40 px-12 max-w-[1920px] mx-auto text-center">
        <h2 className="text-6xl md:text-9xl font-headline font-bold tracking-tighter uppercase mb-16">
          Want to work
          <br />
          <span className="text-primary">together?</span>
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-6 bg-primary text-on-primary px-16 py-8 text-2xl font-headline font-bold uppercase tracking-tighter group transition-all duration-300 hover:shadow-[0_0_60px_rgba(212,255,34,0.3)]"
        >
          Let&apos;s Talk
          <span className="material-symbols-outlined text-4xl group-hover:translate-x-4 transition-transform duration-300">
            arrow_forward
          </span>
        </Link>
      </section>
    </>
  );
}
