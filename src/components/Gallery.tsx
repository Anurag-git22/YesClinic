import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from './ui/Reveal';
import { Lightbox } from './Lightbox';
import { ContentChip } from './ui/ContentChip';
import { clinicData } from '@/data/clinic';
import { Images, Maximize2, ArrowRight } from 'lucide-react';

interface GalleryProps {
  isPage?: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ isPage = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allItems = clinicData.gallery.items;
  const filteredItems = selectedCategory === 'All'
    ? allItems
    : allItems.filter((item) => item.category === selectedCategory);

  // Home preview displays up to 6 or 8 items, full page displays all
  const displayItems = isPage ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-ivory-bg relative overflow-hidden" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-ivory-blush px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
              <Images className="h-3.5 w-3.5 text-crimson" />
              <span>Clinic Atmosphere & Facilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-maroon">
              A Glimpse Inside Our Clinic
            </h2>

            <p className="font-body text-sm sm:text-base text-ink/75 leading-relaxed">
              Explore our day care observation beds, consultation suites, and cardiac evaluation equipment.
            </p>
          </div>
        </Reveal>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {clinicData.gallery.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 font-body text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-maroon text-white shadow-sm'
                  : 'bg-white text-ink/70 border border-ivory-sand hover:border-crimson/30 hover:text-maroon'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-ivory-sand bg-white shadow-sm transition-all duration-300 hover:shadow-spotlight hover:border-crimson/40"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
            >
              {/* Image Container with 4:3 Aspect */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-ivory-sand/40 relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-crimson-lit">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg font-bold">
                      {item.title}
                    </h3>
                  </div>

                  <div className="ml-auto rounded-full bg-white/20 p-2.5 text-white backdrop-blur-xs">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Bottom Card Caption */}
              <div className="p-4 flex items-center justify-between bg-white">
                <div>
                  <h4 className="font-display font-bold text-sm text-maroon">
                    {item.title}
                  </h4>
                  <span className="text-xs text-ink/60 font-medium">
                    {item.category}
                  </span>
                </div>

                {!item.verified && (
                  <ContentChip compact label="Placeholder" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link (if on Home preview) */}
        {!isPage && (
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border-2 border-maroon/20 bg-white px-7 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-maroon hover:border-crimson hover:text-crimson transition-all shadow-2xs group"
            >
              <span>View Full Gallery ({allItems.length} Photos)</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Full-Screen Lightbox */}
      <Lightbox
        items={displayItems}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
