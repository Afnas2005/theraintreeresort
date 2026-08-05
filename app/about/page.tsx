'use client';

import Image from 'next/image';
import { 
  Bed, ShoppingBag, Info, Route, Baby, Car, Bus, Flame, Tent, Binoculars, MapPin, 
  Trees, Compass, Landmark, Mountain, Waves, Camera, Sun 
} from 'lucide-react';

// --- DATA ---
const facilityItems = [
  { icon: Bed, title: 'Accommodation' },
  { icon: ShoppingBag, title: 'Eco Shop' },
  { icon: Info, title: 'Travel Assistance' },
  { icon: Route, title: 'Forest Walkway' },
  { icon: Baby, title: 'Play Area' },
  { icon: Car, title: 'Parking' },
  { icon: Bus, title: 'Shuttle Service' },
  { icon: Flame, title: 'Campfire' },
  { icon: Tent, title: 'Tent Camping' },
  { icon: Binoculars, title: 'Bird Watching' },
  { icon: MapPin, title: 'Local Tours' },
];

const featureCards = [
  {
    icon: Trees,
    title: 'Location & Wildlife',
    description: 'Front-row access to the Nilgiri Biosphere Reserve. Spot elephants, tigers, and over 200 bird species right from our grounds.',
  },
  {
    icon: Compass,
    title: 'Curated Activities',
    description: 'Guided jungle safaris, trekking trails, bird watching tours, and atmospheric campfire evenings under the stars.',
  },
  {
    icon: Landmark,
    title: 'Nearby Landmarks',
    description: 'Close proximity to Tholpetty Safari Point, Nagarhole National Park, Iruppu Falls, and the ancient Thirunelli Temple.',
  },
];

// Updated with your Specific Landmarks
const attractions = [
  { 
    name: 'Tholpetty Safari Point', 
    distance: '50 Meters',
    icon: Camera,
    description: 'The starting point for your jungle adventure. Located just steps away from our gate, offering jeep safaris into the sanctuary.' 
  },
  { 
    name: 'Nanachi Gate (Nagarahole)', 
    distance: '8.7 Km',
    icon: Trees,
    description: 'A key entry point to the famous Nagarahole National Park, known for its tiger and bison sightings.' 
  },
  { 
    name: 'Iruppu Falls', 
    distance: '13 Km',
    icon: Waves,
    description: 'A stunning fresh water cascade located in the Brahmagiri Range. Perfect for a refreshing dip and scenic photography.' 
  },
  { 
    name: 'Wayanad Wildlife Sanctuary', 
    distance: '13.6 Km',
    icon: Binoculars,
    description: 'Home to the world\'s largest population of Asian Elephants and Tigers. A dense, biodiverse forest.' 
  },
  { 
    name: 'Thirunelli Temple', 
    distance: '14.9 Km',
    icon: Sun,
    description: 'An ancient temple dedicated to Lord Maha Vishnu, surrounded by mountains. Known as the "Kashi of the South".' 
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-forest-base text-forest-text pt-24 pb-20">
      
      {/* --- SECTION 1: HERO STORY --- */}
      <main className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <div className="w-full h-[400px] lg:h-[600px] relative group">
            <Image
              src="/images/hero/the_rain_tree_hero_swimming_pool.jpg"
              alt="Rain Tree Resort - Hidden Gem in Tholpetty"
              fill
              className="object-cover object-center rounded-none brightness-90 group-hover:brightness-100 transition-all duration-500"
              priority
            />
          </div>
          
          {/* Right: Text Block */}
          <div className="flex flex-col justify-center">
            <span className="text-forest-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-forest-gold mb-8 leading-tight">
              A Sanctuary in the <br/> Heart of Wayanad
            </h1>
            <div className="space-y-6 text-lg text-forest-text/90 font-light leading-relaxed">
              <p>
                <strong className="text-white font-serif">The Rain Tree Resort</strong> is a hidden gem nestled near the pristine Tholpetty Wildlife Sanctuary. Our story is rooted in a deep respect for nature and a passion for providing guests with a tranquil, immersive experience.
              </p>
              <p>
                Discover a place where luxury meets wilderness. Every detail is designed to help you <span className="text-forest-gold italic">disconnect from chaos</span> and reconnect with the earth.
              </p>
              <div className="pt-6 border-l-2 border-forest-gold pl-6">
                <p className="italic text-forest-text/80 text-base">
                  "Our commitment to sustainability and local culture makes every stay unique and meaningful."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- SECTION 2: FACILITIES (bg-forest-medium) --- */}
      <section className="bg-forest-medium py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-gold mb-6">
              Resort Facilities
            </h2>
            <div className="w-20 h-1 bg-forest-gold mx-auto mb-6 rounded-full" />
            <p className="text-forest-text/80 text-lg max-w-2xl mx-auto font-light">
              Experience world-class amenities designed for your absolute comfort.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {facilityItems.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="group p-6 bg-forest-base/50 hover:bg-forest-gold hover:text-forest-base transition-all duration-300 text-center flex flex-col items-center justify-center gap-4 min-h-[160px]">
                  <IconComponent size={32} strokeWidth={1.5} className="text-forest-gold group-hover:text-forest-base transition-colors" />
                  <span className="text-sm font-bold uppercase tracking-wider">{facility.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: WHY CHOOSE US (bg-forest-base) --- */}
      <section className="bg-forest-base py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-forest-gold text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              The Experience
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-gold mb-6">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-forest-medium/30 p-10 hover:bg-forest-medium/50 transition-colors duration-300 border-t-2 border-transparent hover:border-forest-gold">
                  <div className="w-14 h-14 bg-forest-base flex items-center justify-center rounded-full mb-8 text-forest-gold">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-forest-text/80 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: MISSION --- */}
      <section className="bg-forest-medium py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-gold mb-8">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-forest-text leading-loose font-light">
            "To provide a luxurious yet eco-friendly experience, ensuring that our operations preserve the natural beauty of Wayanad for future generations. By integrating local culture, cuisine, and traditions, we aim to create a harmonious balance between luxury and nature."
          </p>
        </div>
      </section>

      {/* --- SECTION 5: KEY LANDMARKS (bg-forest-base) --- */}
      <section className="bg-forest-base py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="font-serif text-4xl font-bold text-forest-gold mb-4">Nearby Landmarks</h2>
             <p className="text-forest-text/60">Explore the wonders of Wayanad, just minutes from our door.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => {
              const Icon = attraction.icon;
              return (
                <div key={index} className="flex gap-6 items-start p-8 bg-forest-medium/10 hover:bg-forest-medium/30 border border-forest-medium/20 transition-all duration-300 rounded-sm group">
                  <div className="shrink-0 mt-1 text-forest-gold group-hover:scale-110 transition-transform">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl font-bold text-white">
                        {attraction.name}
                        </h3>
                        <span className="text-xs font-bold bg-forest-gold text-forest-base px-2 py-1 rounded-sm whitespace-nowrap ml-2">
                            {attraction.distance}
                        </span>
                    </div>
                    <p className="text-forest-text/80 text-sm leading-relaxed font-light">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}