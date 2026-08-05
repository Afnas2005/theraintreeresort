'use client';

import { Star, PawPrint, Tent, Fire, Leaf, Tree, Bed, ForkKnife, MapPin, Phone, Envelope, NavigationArrow, CheckCircle, WifiHigh, Snowflake, Coffee, Bell, Shower, Television, Bathtub, Moon, CaretDown, Compass, Buildings, CaretRight, MapTrifold } from '@phosphor-icons/react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: string;
}

export function FeatureCard({ icon, title, description, delay = '0s' }: FeatureCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case 'fas fa-paw':
        return <PawPrint className="text-3xl text-forest-gold" weight="duotone" />;
      case 'fas fa-campground':
        return <Tent className="text-3xl text-forest-gold" weight="duotone" />;
      case 'fas fa-fire':
        return <Fire className="text-3xl text-forest-gold" weight="duotone" />;
      case 'fas fa-leaf':
        return <Leaf className="text-3xl text-forest-gold" weight="duotone" />;
      case 'fas fa-tree':
        return <Tree className="text-3xl text-forest-gold" weight="duotone" />;
      case 'fas fa-compass':
        return <Compass className="text-3xl text-forest-gold" weight="duotone" />;
      case 'fas fa-landmark':
        return <Buildings className="text-3xl text-forest-gold" weight="duotone" />;
      default:
        return <div className="text-3xl text-forest-gold">?</div>;
    }
  };

  return (
    <div
      className="group relative bg-forest-dark p-6 md:p-8 text-center rounded-none cursor-pointer"
      style={{ animationDelay: delay, animation: 'fadeIn 0.8s ease-out' }}
    >
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-forest-medium flex items-center justify-center mx-auto">
          {renderIcon()}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-forest-gold font-serif">{title}</h3>
      <p className="text-forest-text font-normal leading-relaxed">{description}</p>
    </div>
  );
}

export function GalleryCard({ src, alt, category }: { src: string; alt: string; category: string }) {
  return (
    <div className="group relative overflow-hidden rounded-none cursor-pointer h-96">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-forest-gold text-forest-base">
        <span className="inline-block px-3 py-1 bg-forest-base text-forest-gold text-xs font-semibold mb-3">{category}</span>
        <h3 className="font-semibold text-xl">{alt}</h3>
      </div>
    </div>
  );
}

export function TestimonialCard({ name, location, text }: { name: string; location: string; text: string }) {
  return (
    <div className="bg-white/90 rounded-3xl p-8 shadow-lg">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-yellow-500 text-lg" weight="fill" />
        ))}
      </div>
      <p className="text-primary-700 mb-6 leading-relaxed text-base">{text}</p>
      <div>
        <div className="font-bold text-primary-800 text-lg font-display">{name}</div>
        <div className="text-sm text-primary-600">{location}</div>
      </div>
    </div>
  );
}

export function ContactCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-forest-medium flex items-center justify-center mx-auto mb-6 md:mb-8 rounded-none">
        <i className={`${icon} text-3xl text-forest-gold`}></i>
      </div>
      <h3 className="text-lg font-bold mb-3 text-forest-gold font-serif leading-tight">{title}</h3>
      <p className="text-forest-text font-sans leading-relaxed text-base">{text}</p>
    </div>
  );
}
