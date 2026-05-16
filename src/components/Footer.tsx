import { Utensils, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center">
                <Utensils size={18} className="text-stone-900" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-sm">Tastey Nepal</span>
                <span className="block text-amber-400 text-xs tracking-widest uppercase">Restro & Cafe</span>
              </div>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Authentic Nepali flavors in the heart of Dhulikhel. Serving traditional momos, dal bhat,
              and much more — all with warmth and care.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Menu', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-amber-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span>University Road, Dhulikhel 45200, Nepal</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-amber-500 flex-shrink-0" />
                <a href="tel:9705628418" className="hover:text-amber-400 transition-colors">
                  970-5628418
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={14} className="text-amber-500 flex-shrink-0" />
                <span>Open Daily · Closes 10 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} Tastey Nepal Restro & Cafe. All rights reserved.</p>
          <p>University Road, Dhulikhel 45200 · Rs 1–1,500 per person</p>
        </div>
      </div>
    </footer>
  );
}
