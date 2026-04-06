"use client";

import Link from "next/link";
import TextType from "@/components/ui/TextType";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-5 bg-neutral-900/80 backdrop-blur-xl z-50 shadow-[0_20px_40px_rgba(212,255,34,0.08)]">
      {/* Logo + Name + Typing Effect */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="flex items-center justify-center font-bold text-3xl font-[family-name:var(--font-anton)] text-[#d4ff22] shrink-0 transition-shadow duration-300">
          &lt;/RS&gt;
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white font-headline font-bold text-lg tracking-tight">
           RAHUL SHARMA
          </span>
          <TextType
            texts={[
              "Full Stack Developer",
              "UI/UX Designer",
              "Shopify Expert",
              "Digital Craftsman",
            ]}
            typingSpeed={40}
            deletingSpeed={50}
            pauseDuration={1500}
            showCursor
            cursorCharacter="▎"
            variableSpeedEnabled
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.7}
            className="text-[#d4ff22] text-xs font-label tracking-wider uppercase hidden sm:inline-block"
            cursorClassName="text-[#d4ff22]/60"
          />
        </div>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex gap-10">
        <Link
          className="font-headline font-bold uppercase tracking-tighter text-white/70 hover:text-[#d4ff22] transition-colors duration-300"
          href="/work"
        >
          Work
        </Link>
        <Link
          className="font-headline font-bold uppercase tracking-tighter text-white/70 hover:text-[#d4ff22] transition-colors duration-300"
          href="/about"
        >
          About
        </Link>
        <Link
          className="font-headline font-bold uppercase tracking-tighter text-white/70 hover:text-[#d4ff22] transition-colors duration-300"
          href="/services"
        >
          Services
        </Link>
        <Link
          className="font-headline font-bold uppercase tracking-tighter text-white/70 hover:text-[#d4ff22] transition-colors duration-300"
          href="/process"
        >
          Process
        </Link>
        <Link
          className="font-headline font-bold uppercase tracking-tighter text-white/70 hover:text-[#d4ff22] transition-colors duration-300"
          href="/contact"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden text-primary">
        <span className="material-symbols-outlined">menu</span>
      </div>
    </header>
  );
};
