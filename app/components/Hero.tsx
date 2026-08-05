'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Tree, MapPin, Phone } from '@phosphor-icons/react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Book Your Stay",
  ctaLink = "/contact",
}: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-forest-base pt-16">
      
      <Image
        src={backgroundImage}
        alt="Rain Tree Resort"
        fill
        className="object-cover object-center brightness-[0.85]"
        priority
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* 1. TITLE: Doubled Size
            - Mobile: text-6xl (Big impact on phone)
            - Desktop: text-8xl to 9xl (Grand on desktop)
        */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-forest-gold mb-8 leading-none tracking-tighter drop-shadow-2xl">
          {title}
        </h1>

        {/* 2. SUBTITLE: Doubled Size
            - Mobile: text-xl (Readable)
            - Desktop: text-3xl (Elegant)
        */}
        <p className="text-xl md:text-3xl text-white/95 font-bold mb-12 max-w-6xl mx-auto leading-snug font-light tracking-wide drop-shadow-md">
          {subtitle}
        </p>

        {/* 3. BUTTONS: Balanced
            - Kept sleek (text-xs/sm) but padded enough to be clickable
        */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16 w-full sm:w-auto">
          <Link
            href={ctaLink}
            className="px-10 py-4 bg-forest-gold text-forest-base font-bold text-xs md:text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-white hover:text-forest-base transition-colors duration-300 min-w-[180px]"
          >
            {ctaText}
          </Link>

          <Link
            href="/rooms"
            className="px-10 py-4 bg-forest-medium text-forest-text font-bold text-xs md:text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-forest-dark transition-colors duration-300 min-w-[180px]"
          >
            Explore Rooms
          </Link>
        </div>

        {/* 4. ICONS: Standard Size for clarity */}
        <div className="hidden md:inline-flex flex-wrap justify-center gap-8 md:gap-12 bg-forest-base/80 backdrop-blur-md py-4 px-10 rounded-sm border border-white/5">
          <div className="flex items-center gap-3">
            <Tree size={20} weight="duotone" className="text-forest-gold" />
            <span className="text-forest-text text-xs uppercase tracking-wider">Nature Retreat</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={20} weight="duotone" className="text-forest-gold" />
            <span className="text-forest-text text-xs uppercase tracking-wider">Wayanad</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} weight="duotone" className="text-forest-gold" />
            <span className="text-forest-text text-xs uppercase tracking-wider">+91  96058 09293</span>
          </div>
        </div>
      </div>
    </section>
  );
}