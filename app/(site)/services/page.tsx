import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

const SERVICES = [
  {
    category: "Makeup Services",
    items: [
      { name: "Bridal Makeup", image: "bridal-makeup", desc: "Premium HD airbrush makeup for your special day.", price: "Starts at $200" },
      { name: "Party Makeup", image: "party-makeup", desc: "Elegant look for parties and events.", price: "Starts at $80" },
    ]
  },
  {
    category: "Hair Services",
    items: [
      { name: "Hair Styling", image: "hair-styling", desc: "Professional updos and blowouts.", price: "Starts at $50" },
      { name: "Hair Cutting", image: "hair-cut", desc: "Advanced layered and precision cuts.", price: "Starts at $40" },
      { name: "Hair Coloring", image: "hair-color", desc: "Balayage, highlights, and global color.", price: "Starts at $100" },
      { name: "Keratin Treatment", image: "keratin", desc: "Smooth, frizz-free hair treatments.", price: "Starts at $150" },
    ]
  },
  {
    category: "Skin & Beauty Care",
    items: [
      { name: "Luxury Facial", image: "facial-spa", desc: "Deep cleansing and glowing treatments.", price: "Starts at $70" },
      { name: "Manicure & Pedicure", image: "pedicure", desc: "Complete nail and skin care for hands and feet.", price: "Starts at $45" },
      { name: "Waxing & Threading", image: "waxing", desc: "Painless hair removal services.", price: "Starts at $20" },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-softpink py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">Our Services</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the ultimate luxury with our comprehensive range of beauty and grooming services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        {SERVICES.map((section, idx) => (
          <div key={idx} className="mb-24 last:mb-0">
             <h2 className="font-playfair text-3xl font-bold text-charcoal mb-10 pb-4 border-b border-gray-100">
               {section.category}
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {section.items.map((service, s_idx) => (
                 <div key={s_idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                    <div className="relative h-64 overflow-hidden">
                      <Image 
                        src={`https://picsum.photos/seed/${service.image}/600/400`} 
                        alt={service.name}
                        fill
                        referrerPolicy="no-referrer"
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-8">
                       <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{service.name}</h3>
                       <p className="text-gray-600 mb-6 min-h-[48px]">{service.desc}</p>
                       <div className="flex justify-between items-center">
                         <span className="text-rosegold font-semibold text-sm">{service.price}</span>
                         <Link href="/contact" className="px-5 py-2 rounded-full bg-charcoal text-white text-sm font-medium hover:bg-rosegold transition-colors">
                           Book Now
                         </Link>
                       </div>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
