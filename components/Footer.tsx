import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-rosegold text-white p-2 rounded-full">
                <Scissors size={20} />
              </div>
              <span className="font-playfair text-xl font-bold tracking-wide">
                AS BEAUTY
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enhancing Beauty, Empowering Careers. We offer premium salon services and professional training for aspiring beauty experts in a luxurious environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rosegold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rosegold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rosegold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6 text-rosegold-light">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Courses', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-gray-400 hover:text-rosegold transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6 text-rosegold-light">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-rosegold shrink-0" />
                <span>123 Beauty Lane, Glamour City, GC 10020</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-rosegold shrink-0" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-rosegold shrink-0" />
                <span>info@asbeauty.com</span>
              </li>
            </ul>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6 text-rosegold-light">Business Hours</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Mon - Fri:</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday:</span>
                <span>10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Sunday:</span>
                <span className="text-rosegold">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} AS Beauty Salon and Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/verify-certificate" className="text-gray-500 hover:text-rosegold text-sm transition-colors">
              Verify Certificate
            </Link>
            <Link href="/admin/login" className="text-gray-500 hover:text-rosegold text-sm transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
