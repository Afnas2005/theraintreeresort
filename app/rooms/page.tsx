import type { Metadata } from 'next';
import RoomCard from '../components/RoomCard';
import { ROOMS_DATA } from '../data';

export const metadata: Metadata = {
  title: 'Peace Stay Rooms & Cottages | Rain Tree Resort Wayanad',
  description: 'Choose from our Pillar Huts, Deluxe Rooms, and Standard Cottages. Experience comfortable jungle living near Tholpetty Wildlife Sanctuary.',
};

export default function Rooms() {
  return (
    <div className="min-h-screen bg-forest-base pt-24">
      
      {/* --- PAGE HEADER (bg-forest-base) --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="block text-forest-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Accommodations
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-forest-gold mb-6">
            Stay in the Jungle
          </h1>
          <p className="text-xl text-forest-text/90 max-w-2xl mx-auto font-light leading-relaxed">
            Choose from our carefully curated selection of accommodations, each designed to provide comfort amidst nature's splendor.
          </p>
        </div>
      </section>

      {/* --- ROOMS GRID (bg-forest-medium) --- 
          Using a slightly lighter background here creates depth 
          and separates the content from the header visually.
      */}
      <section className="py-24 bg-forest-medium min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}