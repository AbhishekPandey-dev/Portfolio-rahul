export const MOCK_PROJECTS = [
  {
    slug: "luxe-fashion",
    title: "Luxe Fashion Store",
    category: "Shopify Development",
    shortDescription: "A high-end e-commerce experience for a luxury street fashion brand.",
    challenge: "The brand needed to transition from a generic Shopify theme to a bespoke, conversion-optimized headless architecture that matched their premium identity.",
    solution: "Developed a custom Shopify Plus storefront utilizing a dark-mode editorial aesthetic with heavy use of high-resolution imagery and WebGL transitions.",
    result: "Increased mobile conversion rates by 42% and reduced average page load time to under 1.2 seconds.",
    stack: ["Shopify Plus", "React", "Tailwind CSS", "GSAP"],
    role: "Lead Full Stack Developer",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-4b95dd5e8f49?q=80&w=800&auto=format&fit=crop"
    ],
    liveUrl: "#",
    featured: true
  },
  {
    slug: "neon-motors",
    title: "Neon Motors",
    category: "UI/UX & Frontend",
    shortDescription: "Digital showroom for an EV startup blending retro-futurism with modern car buying.",
    challenge: "Creating an immersive, 3D-feeling experience in the browser without sacrificing performance across devices.",
    solution: "Used GSAP ScrollTrigger to tie scroll position directly to 3D model rotations and cinematic text reveals.",
    result: "Won Awwwards Site of the Day and generated 10,000+ waitlist signups in month one.",
    stack: ["Next.js", "Three.js", "Framer Motion", "Vercel"],
    role: "Frontend Developer & UI Designer",
    year: "2022",
    heroImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [],
    liveUrl: "#",
    featured: true
  },
  {
    slug: "artisan-coffee",
    title: "Artisan Roasters",
    category: "WordPress Development",
    shortDescription: "Wholesale and direct-to-consumer platform for an independent coffee roaster.",
    challenge: "Integrating a complex custom subscription model alongside standard retail purchasing.",
    solution: "Built a custom WooCommerce plugin extension paired with an entirely bespoke, minimalist theme.",
    result: "Subscription revenue grew by 150% in the first quarter after launch.",
    stack: ["WordPress", "WooCommerce", "PHP", "Vanilla JS"],
    role: "Full Stack Developer",
    year: "2021",
    heroImage: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [],
    liveUrl: "#",
    featured: false
  }
];

export const SERVICES = [
  {
    id: "shopify",
    title: "Shopify Development",
    description: "Custom themes, migrations, and headless builds for brands that refuse to look like everyone else.",
    icon: "ShoppingBag"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "High-end, dark-mode editorial interfaces engineered for impact and conversion.",
    icon: "PenTool"
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    description: "Bespoke themes and advanced core customizations focusing on performance over plugins.",
    icon: "Layout"
  },
  {
    id: "fullstack",
    title: "Full Stack Web Apps",
    description: "Next.js applications with complex state, animations, and airtight backend integrations.",
    icon: "Code"
  }
];
