'use client';
import { useState } from 'react';
import Image from 'next/image';

const CATEGORIES = ["All", "Bridal Makeup", "Hair Styling", "Student Training", "Salon Interior", "Academy Events"];

const GALLERY_IMAGES = [
  { id: 1, type: "Bridal Makeup", url: "bridal-1" },
  { id: 2, type: "Hair Styling", url: "hair-1" },
  { id: 3, type: "Student Training", url: "student-1" },
  { id: 4, type: "Salon Interior", url: "salon-1" },
  { id: 5, type: "Bridal Makeup", url: "bridal-2" },
  { id: 6, type: "Academy Events", url: "academy-1" },
  { id: 7, type: "Hair Styling", url: "hair-2" },
  { id: 8, type: "Student Training", url: "student-2" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.type === activeCategory);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">Our Gallery</h1>
          <p className="text-gray-600">Explore moments of beauty, transformation, and intensive learning at our salon and academy.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-rosegold text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {filteredImages.map((image) => (
             <div key={image.id} className="relative aspect-[4/5] rounded-xl overflow-hidden group">
               <Image
                 src={`https://picsum.photos/seed/${image.url}/600/800`}
                 alt={image.type}
                 fill
                 referrerPolicy="no-referrer"
                 className="object-cover transition-transform duration-500 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white font-playfair text-lg font-medium tracking-wide">{image.type}</span>
               </div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
}
