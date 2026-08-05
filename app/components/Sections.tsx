interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  backgroundImage: string;
  tagline?: string;
  children?: React.ReactNode;
}

export function HeroSection({ title, subtitle, backgroundImage, tagline, children }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-forest-base">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6 py-20">
        {tagline && (
          <div className="mb-6">
            <span className="inline-block px-5 py-2 bg-yellow-100 text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-8 rounded-full">
              {tagline}
            </span>
          </div>
        )}

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-display leading-tight tracking-tight text-forest-gold">
          {title}
        </h1>

        <p className="text-sm md:text-base lg:text-lg mb-8 opacity-95 max-w-4xl mx-auto font-normal leading-relaxed text-forest-text">
          {subtitle}
        </p>
        
        {children}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
}

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'base' | 'dark' | 'medium';
}

export function ContentSection({ children, className = "", background = 'base' }: ContentSectionProps) {
  const bgClass = {
    base: "bg-forest-base",
    dark: "bg-forest-dark",
    medium: "bg-forest-medium"
  };
  
  return (
    <section className={`py-24 px-6 ${bgClass[background]} text-forest-text relative overflow-hidden ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
