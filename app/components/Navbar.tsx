'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; 
import { NAV_LINKS } from '../data'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Animation variants for mobile menu items
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-forest-base/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10 h-20 select-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full"> 
            
            {/* --- 1. LOGO & BRAND SECTION --- */}
            <Link href="/" className="flex items-center gap-3 group h-full">
              {/* Logo Container: Rigid dimensions ensure it doesn't collapse */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Rain Tree Resort Logo"
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Brand Text: Adds visual weight and elegance */}

            </Link>

            {/* --- 2. DESKTOP NAVIGATION --- */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 py-2 outline-none ${
                      isActive ? 'text-forest-gold' : 'text-forest-text hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-forest-gold rounded-full -translate-x-1/2 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* --- 3. CTA BUTTON & MOBILE TOGGLE --- */}
            <div className="flex items-center gap-6">
              <div className="hidden md:block">
                <Link
                  href="/contact"
                  className="bg-forest-gold text-forest-base px-7 py-3 text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-forest-base transition-all duration-300 rounded-sm shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.2)] block"
                >
                  Book Stay
                </Link>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-forest-gold hover:text-white transition-colors p-2 outline-none"
              >
                {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- 4. MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={containerVars}
            className="fixed inset-0 top-20 z-40 bg-forest-base/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-start pt-12 space-y-8 border-t border-white/10 select-none"
          >
            {NAV_LINKS.map((link) => (
              <motion.div key={link.name} variants={itemVars}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-serif tracking-wide transition-colors outline-none ${
                    pathname === link.href ? 'text-forest-gold italic' : 'text-forest-text hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div variants={itemVars} className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-forest-gold text-forest-base px-10 py-4 text-xs font-bold tracking-widest uppercase rounded-sm shadow-lg"
              >
                Book Your Stay
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}