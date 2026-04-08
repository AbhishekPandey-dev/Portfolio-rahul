<div align="center">

# ⚡ RAHUL SHARMA — Portfolio

**Premium, award-level portfolio crafted with surgical precision. Brutalist editorial design meets cutting-edge web technology.**

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)
[![License](https://img.shields.io/badge/License-MIT-D4FF22?style=for-the-badge)](LICENSE)

</div>

---

## 🧭 Overview

A high-performance personal portfolio built on **Next.js 16 App Router** with **React 19**, designed around a brutalist editorial aesthetic — stark contrasts, razor-sharp typography, and neon-accented interactions on a deep black canvas. Every page features fluid responsive behavior from 320px mobile to 4K desktop with zero layout shifts.

What makes it different:
- **Fluid typography** — All text scales seamlessly via CSS `clamp()` formulas, no breakpoint jumps
- **Spring-physics interactions** — Custom cubic-bezier curves replace generic transitions for premium, native-app feel
- **3D interactive hero** — Spline-powered keyboard scene with real-time keypress sound effects
- **Three.js tech stack visualizer** — Physics-based falling tech logos using React Three Fiber + Rapier

---

## ✨ Features

### 🎨 Design & UX
- **Award-Level Responsive Design** — Flawless experience from 320px mobile to 4K displays
- **Fluid Typography System** — Unified `clamp()` scale (`display`, `h1`, `h2`, `body`) with no breakpoint jumps
- **Brutalist Editorial Aesthetic** — Zero border-radius, stark contrasts, neon `#D4FF22` accent
- **Spring-Physics Animations** — `cubic-bezier(0.34, 1.56, 0.64, 1)` for buttery interactions
- **Custom Cursor** — Device-aware cursor with magnetic hover effects (hidden on touch devices)

### 🚀 Performance
- **Next.js 16 App Router** — Server Components, static generation for all 7 routes
- **Zero Layout Shift** — Fluid scaling eliminates CLS across all breakpoints
- **Touch-Optimized** — All interactive elements meet ≥48×48px touch targets
- **Lazy 3D Loading** — Spline scene loaded on demand to preserve initial page load
- **Optimized Assets** — WebM/MP4 dual-format project videos, WebP images

### 🎯 Interactive Elements
- **3D Spline Keyboard** — Interactive hero scene with synchronized keypress audio
- **Three.js Tech Stack** — Physics-simulated falling technology logos (React Three Fiber + Rapier)
- **Page Transitions** — Framer Motion wipe overlay with staggered content reveal
- **Marquee Ticker** — CSS-animated infinite scrolling brand ticker
- **Animated Typing** — Custom `TextType` component with cursor blink

### 📱 Pages
| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero with 3D scene, stats, services preview, client marquee, CTA |
| **About** | `/about` | Journey narrative, philosophy, 3D tech stack visualizer |
| **Work** | `/work` | Project showcase with video previews and category filters |
| **Services** | `/services` | Service offerings with feature grids |
| **Process** | `/process` | 7-step methodology breakdown |
| **Contact** | `/contact` | Contact form, FAQ accordion, availability banner |

---

## 🛠️ Tech Stack

### Core
| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.2.2 | React framework with App Router |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |

### Styling
| Technology | Purpose |
|-----------|---------|
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS with `@theme` design tokens |
| Custom CSS Design System | Fluid typography, spring transitions, touch targets |

### Animation & 3D
| Technology | Purpose |
|-----------|---------|
| [Framer Motion](https://www.framer.com/motion/) | Page transitions, scroll reveals |
| [GSAP](https://greensock.com/gsap/) | Advanced scroll-driven animations |
| [Spline](https://spline.design/) | 3D interactive keyboard scene |
| [React Three Fiber](https://r3f.docs.pmnd.rs/) | Declarative Three.js for tech stack visualizer |
| [Rapier Physics](https://rapier.rs/) | Real-time physics simulation |
| [Three.js](https://threejs.org/) | 3D rendering engine |

### Utilities
| Technology | Purpose |
|-----------|---------|
| [clsx](https://github.com/lukeed/clsx) | Conditional class names |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Conflict-free Tailwind class merging |
| [Lucide React](https://lucide.dev/) | Icon library |
| [Google Material Symbols](https://fonts.google.com/icons) | Outlined icon font |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** and npm (or pnpm / yarn)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhishekPandey-dev/Portfolio-rahul.git
   cd Portfolio-rahul
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
Portfolio-rahul/
├── public/
│   ├── assets/              # Project showcase media (videos, images)
│   ├── images/              # Tech stack logos (PNG/WebP)
│   ├── keycap-sounds/       # Keyboard press/release audio (MP3)
│   ├── keyboard.spline      # 3D keyboard scene file
│   └── favicon.ico
│
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact form + FAQ
│   │   ├── process/         # 7-step methodology
│   │   ├── services/        # Service offerings
│   │   ├── work/            # Project showcase
│   │   ├── globals.css      # Design system & custom utilities
│   │   ├── layout.tsx       # Root layout (fonts, header, footer)
│   │   ├── page.tsx         # Homepage
│   │   └── template.tsx     # Page transition wrapper
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx   # Responsive header with mobile overlay
│   │   │   └── Footer.tsx   # Site footer
│   │   ├── ui/
│   │   │   ├── Button.tsx   # Magnetic hover button
│   │   │   ├── CustomCursor.tsx  # Device-aware custom cursor
│   │   │   ├── Marquee.tsx  # Infinite scroll ticker
│   │   │   ├── Reveal.tsx   # Scroll-triggered reveal animation
│   │   │   └── TextType.tsx # Animated typing effect
│   │   ├── SplineScene.tsx  # 3D keyboard (Spline)
│   │   └── TechStack.tsx    # Physics-based 3D tech logos
│   │
│   ├── hooks/
│   │   ├── use-media-query.ts   # Responsive breakpoint detection
│   │   ├── use-mouse.ts        # Mouse position tracking
│   │   └── use-sounds.ts       # Keyboard audio controller
│   │
│   └── lib/
│       └── utils.ts         # cn() class merging utility
│
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind v4 (via @theme inline)
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs        # ESLint config
├── postcss.config.mjs       # PostCSS (Tailwind plugin)
└── package.json
```

---

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#D4FF22` | Accent, CTAs, highlights |
| `--color-background` | `#0E0E0E` | Page background |
| `--color-surface` | `#0E0E0E` | Card/section backgrounds |
| `--color-on-surface` | `#FFFFFF` | Primary text |
| `--color-on-surface-variant` | `#ADAAAA` | Secondary text |
| `--color-outline-variant` | `#494847` | Borders, dividers |

### Spacing Scale
```
16px → 24px → 32px → 48px → 64px → 96px → 128px
```
All spacing follows this harmonic scale anchored to `16px`.

### Fluid Typography
```css
/* Display */  clamp(3.5rem, 2.5rem + 5vw, 8rem)    /* 56px → 128px */
/* H1 */       clamp(2.5rem, 1.5rem + 4vw, 5rem)    /* 40px → 80px  */
/* H2 */       clamp(1.75rem, 1rem + 2.5vw, 3.5rem) /* 28px → 56px  */
/* Body */     clamp(1.125rem, 1rem + 0.5vw, 1.25rem)/* 18px → 20px  */
```

### Animation Curves
```css
/* Spring (bouncy interactions) */
cubic-bezier(0.34, 1.56, 0.64, 1)  →  .transition-spring

/* Smooth (color, layout transitions) */
cubic-bezier(0.4, 0, 0.2, 1)       →  .transition-smooth

/* Page wipe */
cubic-bezier(0.19, 1, 0.22, 1)     →  template.tsx
```

### Touch Targets
All interactive elements enforce a minimum `48×48px` hit area via the `.touch-target` utility class.

### Border Radius
Globally overridden to `0px` (brutalist aesthetic). Exception: `.rounded-full` for circular elements.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Framework will be auto-detected as Next.js
   - Deploy

### Alternative Platforms
- **Netlify** — Works with `npm run build` output
- **Railway** — Supports Next.js out of the box
- **Self-hosted** — `npm run build && npm run start`

---

## 🧰 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev Server | `npm run dev` | Start development server with hot reload |
| Build | `npm run build` | Create optimized production build |
| Start | `npm run start` | Run production server |
| Lint | `npm run lint` | Run ESLint checks |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 💬 Contact

**Abhishek Pandey** — Full Stack Developer & UI/UX Designer

- 📧 Email: [hello@rahulsharma.dev](mailto:hello@rahulsharma.dev)
- 🐙 GitHub: [@AbhishekPandey-dev](https://github.com/AbhishekPandey-dev)

---

<div align="center">

**⭐ Star this repo if you found it useful!**

Built with precision And Love by **Abhishek Pandey** for My Friend **Rahul Sharma**

</div>
