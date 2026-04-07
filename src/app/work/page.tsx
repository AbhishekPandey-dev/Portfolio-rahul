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
          <button className="text-primary font-headline uppercase tracking-widest text-sm border-b-2 border-primary pb-4 -mb-[18px]">
            All Projects
          </button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors font-headline uppercase tracking-widest text-sm pb-4">
            Shopify
          </button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors font-headline uppercase tracking-widest text-sm pb-4">
            WordPress
          </button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors font-headline uppercase tracking-widest text-sm pb-4">
            UI/UX Design
          </button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors font-headline uppercase tracking-widest text-sm pb-4">
            E-Commerce
          </button>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-6 md:px-12 bg-surface-container-lowest">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              Selected Work
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1*/}
          <Link
            href="https://transformhealthcoalition.org/"
            className="md:col-span-8 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <Image
                alt="Transform Health"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                src="/assets/transformhealth.png"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Wordpress | UI/UX Design | GSAP | MySQL | Cloudflare
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.transformhealthcoalition.org
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Transform Health
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 2*/}
          <Link
            href="https://www.nappadori.com/"
            className="md:col-span-4 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <Image
                alt="Nappa dori Interface background"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                src="/assets/nappadori.png"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  UI/UX Design | Shopify | GSAP | React | Photoswipe
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.nappadori.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Nappa dori
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            href="https://www.shivanandnarresh.com/"
            className="md:col-span-12 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/shivanandnarresh.webm" type="video/webm" />
                <source src="/assets/shivanandnarresh.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Shopify | jQuery | AWS | Cloudflare | Klaviyo
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.shivanandnarresh.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Shivan & Narresh
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>
          {/* Card 4*/}
          <Link
            href="https://chashma.com/"
            className="md:col-span-8 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/chashma.webm" type="video/webm" />
                <source src="/assets/chashma.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Shopify | Firebase | Swiper | jQuery | Font Awesome
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.chashma.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Chashma
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 5*/}
          <Link
            href="https://www.shazandkiks.com/"
            className="md:col-span-4 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/shazsiks.webm" type="video/webm" />
                <source src="/assets/shazsiks.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  UI/UX Design | Shopify | Klaviyo | React | Styled-Components
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.shazandkiks.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Shaz & Kiks
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 6 */}
          <Link
            href="https://swissbeauty.in/"
            className="md:col-span-12 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/swissbeauty.webm" type="video/webm" />
                <source src="/assets/swissbeauty.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Shopify | Tailwind CSS | PhotoSwipe | Keen-Slider | CustomFit
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.swissbeauty.in
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Swiss Beauty
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>
          {/* Card 7*/}
          <Link
            href="https://www.artisanlab.in/"
            className="md:col-span-8 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <Image
                alt="Artisan Lab"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                src="/assets/artisanlab.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Shopify | UI/UX Design | PhotoSwipe | Svelte | Flickity
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.artisanlab.in
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Artisan Lab
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 8 */}
          <Link
            href="https://outhouse-jewellery.com/"
            className="md:col-span-4 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/outhousejewellery.webm" type="video/webm" />
                <source src="/assets/outhousejewellery.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                   Shopify | BugSnag | React | Google Ads | Preact | Swiper | LayoutHub | Custom CMS
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.outhouse-jewellery.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Outhouse Jewellery
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 9 */}
          <Link
            href="https://janandapril.com/"
            className="md:col-span-12 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/janandapril.webm" type="video/webm" />
                <source src="/assets/janandapril.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Shopify | jQuery | AWS | Cloudflare | Klaviyo
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.janandapril.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Jan & April
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>
          {/* Card 10*/}
          <Link
            href="https://www.manandesign.com/"
            className="md:col-span-8 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/manandesign.webm" type="video/webm" />
                <source src="/assets/manandesign.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Shopify | UI/UX Design | GSAP | PhotoSwipe | Swiper | Custom CMS | AWS | Goolgle Ads | Snap Pixel
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.manandesign.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Manan Design
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 11*/}
          <Link
            href="https://www.perona.com/"
            className="md:col-span-4 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/perona.webm" type="video/webm" />
                <source src="/assets/perona.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                   Shopify | GSAP | Preact | jQuery UI | Swiper | Google Hosted Libraries | Klaviyo
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.perona.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Perona
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 12 */}
          <Link
            href="https://www.orangetree.in/"
            className="md:col-span-12 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/orangetree.webm" type="video/webm" />
                <source src="/assets/orangetree.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Shopify | Bootstrap | Vue.js | GSAP | Mansonry | MobX | Avada SEO | Google Ads | Lit-html & Elements
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.orangetree.in
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Orange Tree
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>
          {/* Card 13*/}
          <Link
            href="https://oncloud9.com/"
            className="md:col-span-8 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/oncloud9.webm" type="video/webm" />
                <source src="/assets/oncloud9.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Shopify | JSS | React | Google Analytics | Sentry | Masonary | Modernizer | PostScript | Lit-html & Elements
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.oncloud9.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                OnCloud9
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 14*/}
          <Link
            href="https://idus.in/"
            className="md:col-span-4 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/idus.webm" type="video/webm" />
                <source src="/assets/idus.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                   Shopify | AWS | Scrollreveal | jQuery | Font Awesome | Loadable-Content
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.idus.in
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Idus
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 15 */}
          <Link
            href="https://www.janavi.com/"
            className="md:col-span-12 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <Image
                alt="Janavi"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                src="/assets/janvi.webp"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Shopify | BugSnag | Cloudflare | Babel | Custom CMS
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.Janavi.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Janavi
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>
          {/* Card 16*/}
          <Link
            href="https://www.cordstudio.in/"
            className="md:col-span-8 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/cordstudio.webm" type="video/webm" />
                <source src="/assets/cordstudio.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Shopify | Gsap | svelte | preact | photoswipe | Aws | more animated js libraries 
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.cordstudio.in
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Cord Studio
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 17*/}
          <Link
            href="https://www.lilyanncabinets.com/"
            className="md:col-span-4 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              >
                <source src="/assets/lilyanncabinets.webm" type="video/webm" />
                <source src="/assets/lilyanncabinets.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                   Magneto | Custom Web Development | Mysql | microsoft advertisment | jquary Ui | aws 
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.lilyanncabinets.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Lily Ann Cabinets
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>

          {/* Card 18 */}
          <Link
            href="https://www.avacabinetry.com/"
            className="md:col-span-12 group cursor-pointer block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden bg-surface-container h-[400px] md:h-[600px] mb-6">
              <Image
                alt="Ava Cabinetry"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                src="/assets/ava.png"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Magneto | Custom Web Development | PHP | Bootstrap | mysql | aws 
                </span>
                <h3 className="font-headline text-4xl font-bold text-white uppercase">
                  www.avacabinetry.com
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline text-2xl font-bold uppercase">
                Ava Cabinetry
              </h4>
              <span className="material-symbols-outlined text-primary">
                arrow_outward
              </span>
            </div>
          </Link>
        </div>
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
