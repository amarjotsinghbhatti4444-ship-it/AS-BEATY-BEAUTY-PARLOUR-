import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-softpink py-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">Contact Us</h1>
          <p className="text-gray-600">Get in touch to book an appointment or inquire about our academy courses.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">
           
           {/* Contact Form */}
           <div className="p-8 md:p-12">
             <h2 className="font-playfair text-2xl font-bold text-charcoal mb-8">Send us a Message</h2>
             <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rosegold/50 focus:border-rosegold transition-colors" placeholder="Jane Doe" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rosegold/50 focus:border-rosegold transition-colors" placeholder="jane@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rosegold/50 focus:border-rosegold transition-colors" placeholder="+1 234 567 890" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rosegold/50 focus:border-rosegold transition-colors bg-white">
                    <option>Salon Appointment</option>
                    <option>Academy Enrollment</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rosegold/50 focus:border-rosegold transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-charcoal text-white rounded-lg font-medium hover:bg-rosegold transition-colors">
                  Send Message
                </button>
             </form>
           </div>

           {/* Contact Details & Map */}
           <div className="bg-charcoal text-white p-8 md:p-12 relative overflow-hidden flex flex-col">
              <div className="space-y-8 mb-12 relative z-10">
                 <h2 className="font-playfair text-2xl font-bold mb-8">Contact Information</h2>
                 <div className="flex gap-4 items-start">
                    <div className="p-3 bg-white/10 rounded-full text-rosegold shrink-0 border border-white/10"><MapPin size={24}/></div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Our Location</h4>
                      <p className="text-gray-400">123 Beauty Lane, Glamour City, GC 10020</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-start">
                    <div className="p-3 bg-white/10 rounded-full text-rosegold shrink-0 border border-white/10"><Phone size={24}/></div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Call or WhatsApp</h4>
                      <p className="text-gray-400">+1 234 567 8900</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-start">
                    <div className="p-3 bg-white/10 rounded-full text-rosegold shrink-0 border border-white/10"><Mail size={24}/></div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Email Us</h4>
                      <p className="text-gray-400">info@asbeauty.com</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-start">
                    <div className="p-3 bg-white/10 rounded-full text-rosegold shrink-0 border border-white/10"><Clock size={24}/></div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Working Hours</h4>
                      <p className="text-gray-400">Mon - Fri: 9am - 8pm<br/>Saturday: 10am - 7pm</p>
                    </div>
                 </div>
              </div>

              {/* Placeholder Map */}
              <div className="mt-auto h-64 rounded-xl overflow-hidden relative border border-white/10 group">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center p-6 text-center z-0">
                  <span className="text-gray-400 font-medium">AS Beauty Salon and Academy Location<br/><span className="text-sm font-normal text-gray-500">(Google Maps Embed Placeholder)</span></span>
                </div>
                 {/* In a real app we'd iframe google maps here, but we'll use a visual placeholder mapping overlay */}
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}
