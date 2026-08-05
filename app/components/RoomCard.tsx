'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from '@phosphor-icons/react';

interface RoomCardProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tag?: string;
  image: string;
  features: string[];
  price: string;
  link: string;
}

export default function RoomCard({
  title,
  subtitle,
  description,
  tag,
  image,
  features,
  price,
  link,
}: RoomCardProps) {
  return (
    <div className="bg-forest-dark text-forest-text rounded-none overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          loading="lazy"
        />
        {tag && (
          <div className="absolute top-4 left-4 bg-forest-gold text-forest-base px-3 py-1 text-sm font-semibold">
            {tag}
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col gap-3 p-6">
        <div>
          <h3 className="font-serif text-xl font-bold text-forest-gold mb-1">{title}</h3>
          <p className="text-forest-medium text-sm mb-2">{subtitle}</p>
        </div>
        <p className="text-forest-text text-sm mb-3 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-1 text-xs text-forest-text">
              <Star size={12} weight="duotone" className="text-forest-gold" />
              {feature}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-forest-gold">{price}</span>
          <span className="text-xs text-forest-medium">/night</span>
        </div>
        <Link
          href={link}
          className="w-full mt-4 py-3 bg-forest-gold text-forest-base font-bold text-center rounded-none hover:bg-forest-medium transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
