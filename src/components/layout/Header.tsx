"use client";

import Link from "next/link";
import { useState } from "react";
import TextType from "@/components/ui/TextType";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-5 bg-neutral-900/80 backdrop-blur-xl z-50 shadow-[0_20px_40px_rgba(212,255,34,0.08)]">
        {/* Logo + Name + Typing Effect */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group relative z-50">
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

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-primary p-2 -mr-2 relative z-50 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-neutral-900/95 backdrop-blur-3xl z-40 flex flex-col pt-32 px-6 h-[100dvh] overflow-y-auto w-full md:hidden transition-opacity duration-300">
          <nav className="flex flex-col gap-8 mt-12 pb-12">
            {[
              { href: '/work', label: 'Work' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/process', label: 'Process' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                className="font-headline font-bold text-5xl uppercase tracking-tighter text-white hover:text-[#d4ff22] transition-colors duration-300"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto pb-12 mb-safe">
            <p className="text-primary font-headline uppercase font-bold text-sm tracking-widest mb-4">Get In Touch</p>
            <a href="mailto:rahul@pixelforge.in" className="text-on-surface-variant hover:text-white transition-colors">rahul@pixelforge.in</a>
          </div>
        </div>
      )}
    </>
  );
};
