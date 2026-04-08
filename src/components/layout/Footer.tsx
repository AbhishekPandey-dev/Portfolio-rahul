import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16 gap-8 bg-neutral-950 border-t border-white/10 font-headline font-medium">
      <div className="text-2xl font-black text-white uppercase text-center md:text-left">Rahul Sharma</div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        <Link className="text-neutral-500 hover:text-white transition-all" href="/work">Work</Link>
        <Link className="text-neutral-500 hover:text-white transition-all" href="/about">About</Link>
        <Link className="text-neutral-500 hover:text-white transition-all" href="/services">Services</Link>
        <Link className="text-neutral-500 hover:text-white transition-all" href="/process">Process</Link>
        <Link className="text-neutral-500 hover:text-white transition-all" href="/contact">Contact</Link>
      </div>
      <div className="flex gap-6 items-center flex-wrap justify-center">
        <a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all" href="mailto:hello@rahulsharma.com">
          <span className="material-symbols-outlined text-sm">alternate_email</span>
        </a>
        <a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all" href="#">
          <span className="material-symbols-outlined text-sm">share</span>
        </a>
        <p className="text-neutral-500 text-sm hidden lg:block">© {new Date().getFullYear()} Rahul Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};
