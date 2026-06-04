import Image from 'next/image';
import Link from 'next/link';
import { Clock, Award, BookOpen } from 'lucide-react';

const COURSES = [
  {
    title: "Professional Makeup Masterclass",
    image: "course-makeup",
    duration: "3 Months",
    eligibility: "Anyone",
    desc: "Comprehensive training in bridal, party, and HD airbrush makeup techniques.",
  },
  {
    title: "Advanced Hair Styling",
    image: "course-hair",
    duration: "2 Months",
    eligibility: "Anyone",
    desc: "Master international hair cutting, coloring, and styling techniques.",
  },
  {
    title: "Skin & Cosmetology",
    image: "course-skin",
    duration: "4 Months",
    eligibility: "Anyone",
    desc: "In-depth knowledge of skin types, treatments, machinery, and advanced facials.",
  },
  {
    title: "Nail Art & Extension",
    image: "course-nails",
    duration: "1 Month",
    eligibility: "Anyone",
    desc: "Acrylic, gel extensions, and advanced 3D nail art techniques.",
  },
  {
    title: "Salon Management",
    image: "course-management",
    duration: "2 Months",
    eligibility: "Professionals",
    desc: "Learn to run a successful beauty business, handle clients, and marketing.",
  }
];

export default function CoursesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-charcoal text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://picsum.photos/seed/academy/1920/1080')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-rosegold-light">Academy Offerings</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Transform your passion into a highly rewarding career with our government-certified professional courses.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
             <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col">
                <div className="relative h-64 overflow-hidden border-b border-gray-100">
                  <Image 
                    src={`https://picsum.photos/seed/${course.image}/600/400`} 
                    alt={course.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover" 
                  />
                  <div className="absolute top-4 left-4 bg-rosegold text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Certified
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                   <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">{course.title}</h3>
                   <p className="text-gray-600 mb-6 flex-grow">{course.desc}</p>
                   
                   <div className="space-y-3 mb-8 pt-4 border-t border-gray-100">
                     <div className="flex items-center gap-3 text-sm text-gray-500">
                       <Clock size={16} className="text-rosegold" /> 
                       <span className="font-medium text-charcoal">Duration:</span> {course.duration}
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-500">
                       <BookOpen size={16} className="text-rosegold" /> 
                       <span className="font-medium text-charcoal">Eligibility:</span> {course.eligibility}
                     </div>
                   </div>

                   <Link href="/contact" className="w-full text-center px-5 py-3 rounded-xl bg-charcoal text-white font-medium hover:bg-rosegold transition-colors">
                     Enroll Now
                   </Link>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
