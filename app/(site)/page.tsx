import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Award, Users, BookOpen, Scissors } from 'lucide-react';


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black/40" />
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bfcbaa63629?q=80&w=1920&auto=format&fit=crop"
          alt="AS Beauty Salon"
          fill
          priority
          referrerPolicy="no-referrer"
          className="absolute inset-0 z-[-1] object-cover object-center"
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Enhancing Beauty, <br className="hidden md:block" />
            <span className="text-rosegold-light">Empowering Careers</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto drop-shadow-md">
            Premium salon services and professional masterclasses for aspiring beauty experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-rosegold text-white rounded-full font-medium text-lg hover:bg-rosegold-dark transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Book Appointment <ArrowRight size={20} />
            </Link>
            <Link 
              href="/courses" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/50 rounded-full font-medium text-lg hover:bg-white hover:text-charcoal transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 md:py-28 bg-softpink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop"
                alt="About AS Beauty"
                fill
                referrerPolicy="no-referrer"
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h4 className="text-rosegold font-bold tracking-widest uppercase text-sm">Welcome To</h4>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-charcoal leading-tight">
                AS Beauty Salon & Academy
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that beauty is not just about looks, but about confidence. Our expert stylists and professional trainers are dedicated to bringing out the best in you, whether you&apos;re in our chair for a makeover or in our classroom learning the craft.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-rosegold/10 text-rosegold mb-2">
                    <Star size={24} />
                  </div>
                  <h4 className="font-bold text-charcoal">Premium Quality</h4>
                  <p className="text-sm text-gray-500">Top tier products and experienced staff.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-rosegold/10 text-rosegold mb-2">
                    <Award size={24} />
                  </div>
                  <h4 className="font-bold text-charcoal">Certified Courses</h4>
                  <p className="text-sm text-gray-500">Government & industry recognized certification.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-rosegold font-bold tracking-widest uppercase text-sm mb-2">What We Do</h4>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-charcoal mb-6">Featured Services</h2>
            <p className="text-gray-600">Experience luxury with our wide range of professional beauty services tailored to make you look and feel your absolute best.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Bridal Makeover', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop', desc: 'Complete luxury bridal makeup, styling and draping.' },
              { title: 'Hair Styling & Spa', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop', desc: 'Advanced cuts, coloring, keratin and relaxing spa.' },
              { title: 'Skin Treatments', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&auto=format&fit=crop', desc: 'Rejuvenating facials, cleanup and full body care.' }
            ].map((service, idx) => (
              <div key={idx} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8 text-center space-y-4">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                  <Link href="/services" className="inline-block text-rosegold font-medium uppercase tracking-wide text-sm hover:text-rosegold-dark transition-colors">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 border border-charcoal text-charcoal rounded-full hover:bg-charcoal hover:text-white transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-charcoal text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-rosegold-light font-bold tracking-widest uppercase text-sm mb-2">Academy</h4>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">Build Your Beauty Career</h2>
              <p className="text-gray-400">Join our comprehensive professional courses designed to turn passionate beginners into highly paid beauty artists.</p>
            </div>
            <Link href="/courses" className="px-6 py-3 bg-rosegold hover:bg-rosegold-dark text-white rounded-full transition-colors whitespace-nowrap">
              All Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             {[
              { title: 'Professional Makeup Artist', duration: '3 Months', icon: <Star size={24}/> },
              { title: 'Advanced Hair Styling', duration: '2 Months', icon: <Scissors size={24}/> },
              { title: 'Skin Cosmetology', duration: '4 Months', icon: <BookOpen size={24}/> },
              { title: 'Nail Art Masterclass', duration: '1 Month', icon: <Award size={24}/> },
            ].map((course, idx) => (
              <div key={idx} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors border border-gray-700">
                <div className="text-rosegold-light mb-4">{course.icon}</div>
                <h3 className="font-playfair text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex items-center gap-2">
                  Duration: <span className="text-white">{course.duration}</span>
                </p>
                <Link href="/courses" className="text-rosegold border-b border-rosegold hover:text-white hover:border-white transition-colors pb-1 text-sm uppercase tracking-wide">
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-softpink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h4 className="text-rosegold font-bold tracking-widest uppercase text-sm mb-2">Testimonials</h4>
           <h2 className="font-playfair text-3xl md:text-5xl font-bold text-charcoal mb-16">What They Say</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1,2,3].map((item) => (
               <div key={item} className="bg-white p-8 rounded-2xl shadow-sm text-left relative">
                 <div className="text-rosegold-light/20 absolute top-4 right-8 text-6xl font-playfair">&quot;</div>
                 <div className="flex text-rosegold mb-4">
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-gray-600 mb-8 relative z-10 italic">
                   &quot;Absolutely brilliant service! I took the professional makeup course and it completely changed my career path. The trainers are incredibly supportive.&quot;
                 </p>
                 <div className="flex items-center gap-4">
                   <Image src={`https://picsum.photos/seed/user${item}/100/100`} width={48} height={48} className="w-12 h-12 rounded-full object-cover" alt="Student" />
                   <div>
                     <h4 className="font-bold text-charcoal">Sarah Jenkins</h4>
                     <p className="text-xs text-gray-500">Former Student</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

    </>
  );
}
