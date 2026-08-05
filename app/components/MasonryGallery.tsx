import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  columns?: number;
}

export default function MasonryGallery({ images, columns = 3 }: MasonryGalleryProps) {
  return (
    <div
      className={`columns-${columns} gap-4 space-y-4`}
      style={{
        columnCount: columns,
        columnGap: '1rem',
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="break-inside-avoid relative group overflow-hidden rounded-none"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={Math.random() * 200 + 300} // Random height for masonry effect
            className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-80"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-forest-gold/0 group-hover:bg-forest-gold/20 transition-colors duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-forest-gold text-forest-base p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-serif font-bold text-sm">{image.alt}</h3>
            {image.category && (
              <span className="text-xs opacity-80">{image.category}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
