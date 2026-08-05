export function SectionDivider() {
  return (
    <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
  );
}

export function SectionTagline({ children }: { children: string }) {
  return (
    <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 text-sm font-semibold mb-6 rounded-full">
      {children}
    </span>
  );
}

export function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold font-display ${className}`}>
      {children}
    </h2>
  );
}

export function PrimaryButton({ children, href, onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) {
  const baseClass = "px-8 py-3 bg-yellow-500 text-white rounded-full font-bold text-base hover:bg-yellow-400 hover:scale-105 transition-transform duration-200 shadow-md inline-block text-center";
  
  if (href) {
    return <a href={href} className={baseClass}>{children}</a>;
  }
  return <button onClick={onClick} className={baseClass}>{children}</button>;
}

export function SecondaryButton({ children, href }: { children: React.ReactNode; href?: string }) {
  const baseClass = "px-8 py-3 bg-transparent text-white rounded-full font-bold text-base hover:bg-white/10 hover:scale-105 transition-transform duration-200 inline-block text-center";
  if (href) {
    return <a href={href} className={baseClass}>{children}</a>;
  }
  return <button className={baseClass}>{children}</button>;
}
