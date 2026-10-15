import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';
import RoomCard from './components/RoomCard';
import { ROOMS_DATA, FEATURES, ATTRACTIONS } from './data';
import { Moon, Flame, Trees, Utensils, ArrowRight, Squirrel } from 'lucide-react';

// 1. Icon Mapping Helper
// This maps the string names from your data.ts to actual Lucide components
const iconMap: Record<string, any> = {
  Moon: Moon,
  Flame: Flame,
  Trees: Trees,
  Utensils: Utensils,
};

export default function Home() {
  const featuredRooms = ROOMS_DATA.slice(0, 3);

  return (
    <div className="min-h-screen bg-forest-base selection:bg-forest-gold selection:text-forest-base">
      
      {/* --- SECTION 1: HERO --- */}
      <Hero
  title="A Peaceful Escape"
  subtitle="Your quiet sanctuary amidst the trees, where nature sets the pace of life."
  backgroundImage="/images/Home page.jpeg"
/>

      {/* --- SECTION 2: INTRO (bg-forest-medium) --- */}
      <section className="py-24 bg-forest-medium">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-forest-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Welcome to Wayanad
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-gold mb-8 leading-tight">
            Find Peace in Your Stay,<br /> Reconnect with Nature.
          </h2>
          <p className="text-lg md:text-xl text-forest-text mb-10 leading-relaxed font-light">
            Nestled in the heart of the pristine wilderness, Rain Tree Resort offers an unparalleled escape. 
            Just steps from the <span className="text-white font-medium">Tholpetty Wildlife Sanctuary</span>, 
            we combine authentic jungle living with modern comfort.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-forest-gold font-bold tracking-widest uppercase text-sm hover:text-white transition-colors duration-300 group"
          >
            Read Our Story
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* --- SECTION 3: FEATURED ROOMS (bg-forest-base) --- */}
      <section className="py-24 bg-forest-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-gold mb-4">
                Sanctuaries of Calm
              </h2>
              <p className="text-forest-text text-lg font-light">
                Signature accommodations designed to bring you closer to the canopy.
              </p>
            </div>
            <Link
              href="/rooms"
              className="hidden md:inline-block px-8 py-3 bg-forest-medium text-forest-text text-xs font-bold tracking-widest uppercase hover:bg-forest-gold hover:text-forest-base transition-colors duration-300 rounded-sm"
            >
              View All Rooms
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>

          {/* Mobile Only Button */}
          <div className="md:hidden text-center mt-8">
            <Link
              href="/rooms"
              className="inline-block px-8 py-3 bg-forest-medium text-forest-text text-xs font-bold tracking-widest uppercase rounded-sm"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: AMENITIES (bg-forest-rich) --- */}
      <section className="py-24 bg-forest-rich">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-gold mb-6">
              Curated Experiences
            </h2>
            <p className="text-forest-text/90 text-lg max-w-2xl mx-auto font-light">
              Beyond a peace stay, we offer moments. From campfire tales to jungle trails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => {
              // Dynamically get the icon component
              const IconComponent = iconMap[feature.icon] || Trees; 
              
              return (
                <div key={feature.id} className="group p-8 bg-forest-medium/20 hover:bg-forest-medium/40 transition-colors duration-300 rounded-sm text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-forest-base text-forest-gold group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} weight="duotone" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest-gold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-forest-text text-sm leading-relaxed">
                    {feature.description || feature.desc} 
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: ATTRACTIONS (bg-forest-dark) --- */}
      <section className="py-24 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-gold mb-6">
              Explore the Wild
            </h2>
            <p className="text-forest-text text-lg max-w-2xl mx-auto font-light">
              We are the gateway to Wayanad's most treasured landmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {ATTRACTIONS.slice(0, 3).map((attraction, index) => (
              <div key={attraction.id} className="group relative h-[400px] overflow-hidden bg-forest-base">
                {/* Background Image with Zoom Effect */}
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-forest-gold text-xs font-bold tracking-widest uppercase mb-2">
                    {attraction.distance} Away
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {attraction.name}
                  </h3>
                  <p className="text-forest-text text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {attraction.desc || attraction.desc}
                  </p>
                </div>
                
                {/* Border separations between grid items (Optional aesthetic choice) */}
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-forest-text/10 hidden md:block"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <Link href="/contact" className="text-forest-gold hover:text-white font-bold tracking-widest uppercase text-xs border-b border-forest-gold pb-1 hover:border-white transition-all">
                View Location Map
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}