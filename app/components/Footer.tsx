'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, url: 'https://youtube.com', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-forest-base  pb-10 border-t border-forest-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* 1. Brand Section (Spans 5 columns) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Rain Tree Resort Logo"
                width={140}
                height={140}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <h3 className="text-2xl font-serif font-bold text-forest-gold mb-4 tracking-wide">
              THE RAIN TREE
            </h3>
            <p className="text-forest-text/80 leading-relaxed mb-8 max-w-sm text-sm">
              Experience luxury amidst nature at our jungle retreat in Wayanad. 
              Disconnect from chaos and reconnect with the wild in the heart of Kerala.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-forest-medium flex items-center justify-center text-forest-gold hover:bg-forest-gold hover:text-forest-base transition-all duration-300 rounded-sm"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. Quick Links (Spans 3 columns) */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-forest-gold tracking-[0.15em] uppercase mb-6">
              Explore
            </h4>
            <nav className="flex flex-col space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-forest-text hover:text-forest-gold hover:translate-x-1 transition-all duration-300 text-sm tracking-wide w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. Contact Info (Spans 4 columns) */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold text-forest-gold tracking-[0.15em] uppercase mb-6">
              Contact
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <MapPin className="text-forest-gold mt-1 shrink-0" size={18} />
                <div className="text-forest-text text-sm leading-relaxed group-hover:text-white transition-colors">
                  <p>Tholpetty Wildlife Sanctuary,</p>
                  <p>Wayanad District, Kerala 670646</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <Phone className="text-forest-gold shrink-0" size={18} />
                <p className="text-forest-text text-sm group-hover:text-white transition-colors">
                  96058 09293
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <Mail className="text-forest-gold shrink-0" size={18} />
                <p className="text-forest-text text-sm group-hover:text-white transition-colors">
                  raintreeresort82@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-forest-text/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-forest-text/40 text-xs tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Rain Tree Resort. All rights reserved.
          </p>
          
          <div className="text-forest-text/60 text-xl tracking-wide">
            Designed by{' '}
            <a
              href="https://www.genreve.in/?utm_source=nature-harmony&utm_medium=footer-link&utm_campaign=website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6600] font-semibold hover:opacity-80 transition-opacity"
            >
              Genreve Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}