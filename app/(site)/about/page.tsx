import Image from 'next/image';
import { Target, Eye, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">About AS Beauty</h1>
          <div className="w-24 h-1 bg-rosegold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Where passion meets profession. We are dedicated to providing world-class salon services and empowering the next generation of beauty experts.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl font-bold text-charcoal">Our Journey</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to redefine beauty standards, AS Beauty Salon and Academy has grown from a humble beginning into a premier destination for both luxurious grooming and top-tier beauty education.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our academy was established to bridge the gap between amateur skills and industry-standard professionalism. We offer hands-on training, state-of-the-art facilities, and experienced mentors to guide our students.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <h3 className="font-playfair text-4xl font-bold text-rosegold">10+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div>
                <h3 className="font-playfair text-4xl font-bold text-rosegold">5k+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Happy Clients</p>
              </div>
              <div>
                <h3 className="font-playfair text-4xl font-bold text-rosegold">1k+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Students Trained</p>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
             <Image
                src="https://picsum.photos/seed/about-img/800/1200"
                alt="Salon Interior"
                fill
                referrerPolicy="no-referrer"
                className="object-cover"
              />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-softpink p-12 rounded-3xl relative overflow-hidden">
             <Target className="absolute -right-6 -top-6 text-white/50 w-48 h-48" />
             <div className="relative z-10">
               <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                 <Target className="text-rosegold" /> Our Mission
               </h3>
               <p className="text-gray-700 leading-relaxed">
                 To empower individuals by enhancing their natural beauty and to provide comprehensive, industry-leading education that equips our students with the skills, confidence, and certification needed to succeed in the beauty industry.
               </p>
             </div>
          </div>
          <div className="bg-charcoal text-white p-12 rounded-3xl relative overflow-hidden">
             <Eye className="absolute -right-6 -top-6 text-white/5 w-48 h-48" />
             <div className="relative z-10">
               <h3 className="font-playfair text-2xl font-bold text-white mb-4 flex items-center gap-3">
                 <Eye className="text-rosegold" /> Our Vision
               </h3>
               <p className="text-gray-300 leading-relaxed">
                 To be recognized nationally as the gold standard in premium salon services and the most preferred destination for professional beauty education, setting trends and elevating the profession.
               </p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
