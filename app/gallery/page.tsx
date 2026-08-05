'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// --- DATA ---
const galleryImages = [
  { id: 1, src: '/images/hero/the_rain_tree_hero_swimming_pool.jpg', alt: 'Resort Swimming Pool', category: 'Resort' },
  { id: 2, src: '/images/rooms/the_rain_tree_pillerhut.jpg', alt: 'Pillar Hut Exterior', category: 'Rooms' },
  { id: 3, src: '/images/rooms/the_rain_tree_ac_room.jpg', alt: 'Deluxe AC Room', category: 'Rooms' },
  { id: 4, src: '/images/rooms/the_rain_tree_Non_ac_room.jpg', alt: 'Standard Cottage', category: 'Rooms' },
  { id: 5, src: '/images/hero/the_rain_tree_swimming_pool.jpg', alt: 'Poolside Evening', category: 'Resort' },
  { id: 6, src: '/images/rooms/IMG_0886.jpg', alt: 'Cozy Interiors', category: 'Rooms' },
  // Add more images as needed...
];

const CATEGORIES = ['all', 'resort', 'rooms'];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-forest-base pt-24 pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="block text-forest-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Visual Journey
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-forest-gold mb-8">
            Our Gallery
          </h1>
          
          {/* --- FILTER TABS --- */}
          <div className="flex justify-center gap-8 md:gap-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative pb-2 text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
                  filter === category
                    ? 'text-forest-gold'
                    : 'text-forest-text/60 hover:text-forest-gold'
                }`}
              >
                {category}
                {/* Animated Underline */}
                {filter === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-forest-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- IMAGE GRID --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-forest-medium"
                onClick={() => setSelectedImage(image.src)}
              >
                {/* Image with Zoom Effect */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-forest-base/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                   <ZoomIn className="text-forest-gold mb-2" size={32} />
                   <h3 className="text-white font-serif text-xl italic">{image.alt}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-forest-base/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-forest-text hover:text-forest-gold transition-colors p-2"
            >
              <X size={40} />
            </button>

            {/* Full Screen Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-5xl aspect-[4/3] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
              <Image
                src={selectedImage}
                alt="Full screen view"
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}