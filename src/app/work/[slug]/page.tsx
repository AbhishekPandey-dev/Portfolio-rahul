import { Metadata } from "next";
import { MOCK_PROJECTS } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = MOCK_PROJECTS.find(p => p.slug === resolvedParams.slug);
  
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
    openGraph: {
      images: [project.heroImage],
    }
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const project = MOCK_PROJECTS.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="w-full pb-32 overflow-hidden">
      {/* Dynamic Hero */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-end pb-12 pt-40 px-6 lg:px-12 bg-surface-highest overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.heroImage} 
            alt={`Hero artwork for ${project.title}`} 
            fill 
            className="object-cover opacity-60 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-[1500ms]" 
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <header className="relative z-10 w-full max-w-7xl mx-auto mt-auto">
          <Reveal delay={0.2}>
            <p className="font-sans text-primary tracking-[0.2em] uppercase text-xs md:text-sm mb-4 font-bold">
              {project.category} &mdash; {project.year}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] uppercase tracking-tighter leading-none mb-6 text-white pb-2">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="flex flex-wrap gap-3 md:gap-4 font-sans text-xs uppercase tracking-widest text-text-secondary">
              {project.stack.map(tech => (
                <span key={tech} className="border border-outline-variant/60 px-4 py-1.5 backdrop-blur-md">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </header>
      </section>

      {/* Content Grid */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Metadata Column */}
          <Reveal className="lg:col-span-4" delay={0.2}>
            <div className="flex flex-col gap-12 sm:flex-row lg:flex-col lg:sticky lg:top-32">
              <div>
                <h2 className="font-sans text-xs text-primary uppercase tracking-widest mb-3">Role</h2>
                <p className="font-display text-xl uppercase">{project.role}</p>
              </div>
              {project.liveUrl && project.liveUrl !== "#" && (
                 <div>
                    <h2 className="font-sans text-xs text-primary uppercase tracking-widest mb-3">Live Site</h2>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block font-display text-xl uppercase border-b border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-8 focus-visible:ring-offset-background"
                      aria-label={`Visit ${project.title} live website`}
                    >
                      Visit Website
                    </a>
                 </div>
              )}
            </div>
          </Reveal>

          {/* Editorial Content */}
          <div className="lg:col-span-8 flex flex-col gap-24">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl uppercase mb-6 text-neon-gradient">The Challenge</h2>
              <p className="font-sans text-base md:text-xl text-text-secondary leading-relaxed">
                {project.challenge}
              </p>
            </Reveal>
            
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl uppercase mb-6 text-neon-gradient">The Solution</h2>
              <p className="font-sans text-base md:text-xl text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl uppercase mb-6 text-neon-gradient">The Outcome</h2>
              <p className="font-sans text-lg md:text-2xl text-text-secondary leading-relaxed font-semibold text-white border-l-4 border-primary pl-6 py-2">
                "{project.result}"
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.galleryImages.length > 0 && (
        <section className="px-6 lg:px-12 max-w-[1600px] mx-auto py-12 flex flex-col gap-12 lg:gap-24 overflow-hidden">
          {project.galleryImages.map((src, idx) => (
            <Reveal key={idx}>
              <div className="relative w-full aspect-video bg-surface-highest">
                <Image 
                  src={src} 
                  alt={`Gallery Image ${idx + 1}`} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 1600px) 100vw, 1600px"
                />
              </div>
            </Reveal>
          ))}
        </section>
      )}

      {/* Next Project / CTA */}
      <section className="mt-32 border-t border-surface-bright/30 bg-[linear-gradient(180deg,transparent,rgba(198,240,0,0.02))] py-24 text-center px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] uppercase tracking-tight mb-8">Ready to build yours?</h2>
          <Button href="/contact">Start a Project</Button>
        </Reveal>
      </section>
    </article>
  );
}

export function generateStaticParams() {
  return MOCK_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}
