'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { ATTRACTIONS } from '../data';

interface AttractionCardProps {
  attraction: typeof ATTRACTIONS[0];
  index: number;
}

function AttractionCard({ attraction, index }: AttractionCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group bg-forest-medium rounded-sm overflow-hidden mb-16 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* IMAGE SIDE */}
      <div className="relative w-full md:w-1/2 h-72 md:h-[450px] overflow-hidden">
        <Image
          src={attraction.image}
          alt={attraction.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 bg-forest-gold text-forest-base px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-br-sm z-10">
          {attraction.distance} Away
        </div>
      </div>

      {/* TEXT SIDE */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-forest-dark group-hover:bg-forest-medium transition-colors duration-500">
        <div className="flex items-center gap-2 mb-4">
           <MapPin size={16} className="text-forest-gold" />
           <span className="text-forest-gold text-xs font-bold tracking-[0.2em] uppercase">
             {attraction.tag}
           </span>
        </div>
        
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          {attraction.name}
        </h3>
        
        <p className="text-forest-text/90 text-lg leading-relaxed font-light mb-8">
          {attraction.desc}
        </p>

        <div className="w-12 h-[1px] bg-forest-gold group-hover:w-24 transition-all duration-300"></div>
      </div>
    </motion.div>
  );
}

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-forest-base pt-24 pb-20">
      <main className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <span className="block text-forest-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Discover Wayanad
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-forest-gold mb-8">
            Explore the Wild
          </h1>
          <p className="text-xl text-forest-text/80 max-w-2xl mx-auto font-light">
            We are strategically located near the region's most treasured landmarks. From tiger reserves to ancient temples.
          </p>
        </div>

        {/* ATTRACTIONS LIST */}
        <div className="space-y-4">
          {ATTRACTIONS.map((attraction, index) => (
            <AttractionCard key={attraction.id} attraction={attraction} index={index} />
          ))}
        </div>

        {/* CTA SECTION */}
        <section className="bg-forest-medium py-20 mt-24 px-6 rounded-sm relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 opacity-10 -translate-y-1/2 translate-x-1/4">
             <MapPin size={400} />
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              Ready for a Night Safari?
            </h2>
            <p className="text-forest-text/90 text-lg mb-10 font-light">
              Experience the thrill of the jungle after dark. We arrange exclusive jeep safaris for our guests directly from the resort.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-forest-gold text-forest-base font-bold py-4 px-10 text-sm tracking-widest uppercase rounded-sm hover:bg-forest-base hover:text-forest-gold transition-colors duration-300"
            >
              Book Your Jeep
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}