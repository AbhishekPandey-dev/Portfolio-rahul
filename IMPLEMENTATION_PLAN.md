# Rahul Sharma Portfolio Implementation Plan

## 1. What I Found Inside Project ID 16131549457361532174
- **7 Screens**: Homepage, Work Gallery, Project Detail, About, Services, Process, and Contact.
- **Design System ("Neon Noir Editorial")**: 
  - **Color Palette**: Dark Luxury. Base is `surface` (#0e0e0e) moving down to absolute black (#000000) and layered up to `surface_container_highest` (#262626). The primary accent is electric neon yellow/lime (#d4ff22 / #c6f000).
  - **Typography**: Space Grotesk (geometric, impactful, used for massive display text) and Inter (functional luxury, for body text).
  - **No-Line Rule**: Rejection of traditional 1px component borders. 
  - **Sharpness**: 0px border radii across all elements. 
  - **Glassmorphism**: Navigation and floating elements use frosted obsidian (opacity + 24px backdrop blur).

## 2. Understanding of the Approved Design
The goal is to build an interactive, high-end "digital exhibition." It feels heavily editorial, bold, and high-contrast. It requires asymmetrical arrangements, brutally generous whitespace, and depth achieved via ambient glows (not standard drop shadows) and tone-on-tone darkness scaling. 

## 3. Implementation Plan
- **Framework**: Next.js 14+ (App Router), React, TypeScript.
- **Styling**: Tailwind CSS (extending globals.css with Neon Noir tokens).
- **Global Settings**: Configure Custom Cursors and 0px border-radius standard globally.
- **Routing**: Full page setup with layouts for consistent navigation.

## 4. Proposed Folder Structure
```text
src/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── process/page.tsx
│   ├── services/page.tsx
│   ├── work/
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/          (Buttons, Cards, Marquee, Inputs)
│   ├── layout/      (Header, Footer, PageTransition)
│   └── sections/    (Hero, ProjectGrid, Stats, Testimonials)
├── data/            (projects.ts, services.ts, socials.ts, timeline.ts)
└── lib/             (utils.ts for cn, animations.ts for GSAP configs)
```

## 5. Component Architecture
- **Interactive UI Primitives**: Magnetic Buttons with glow hovers, Input fields with ghost boders, frameless cards.
- **Header**: Fixed, transparent backing converting to frosted-obsidian on scroll.
- **Editorial Marquee**: Infinite horizontally scrolling text blocks.
- **Content Data Loading**: Using strongly typed TS objects in `src/data/` to separate content from markup.

## 6. Animation Implementation Strategy
- **GSAP & ScrollTrigger**: For complex scroll-linked timelines (e.g., pinning sections, complex text reveals like SplitText simulation, horizontal scroll sections).
- **Framer Motion**: For route changes (AnimatePresence), magnetic button hover interactions, custom cursors, and layout transitions.
- **Transitions**: All motion defaults to a "Power 4" ease-out (`cubic-bezier` or GSAP equivalents) to maintain a snappy, high-end feel.
