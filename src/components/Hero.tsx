import { MapPin, Star, Clock, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-6">
          <Star size={13} className="text-amber-400 fill-amber-400" />
          <span className="text-amber-300 text-sm font-medium">4.7 Rating · 27 Reviews</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          Tastey Nepal
          <span className="block text-amber-400">Restro & Cafe</span>
        </h1>

        <p className="text-stone-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Authentic Nepali flavors crafted with love — from traditional momos to comforting dal bhat,
          experience the warmth of Nepal in every bite.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-stone-300 text-sm">
          <div className="flex items-center gap-1.5">
            <MapPin size={15} className="text-amber-400 flex-shrink-0" />
            <span>University Road, Dhulikhel 45200</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={15} className="text-amber-400 flex-shrink-0" />
            <span>Open · Closes 10 PM</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 text-stone-900 font-bold rounded-full hover:bg-amber-400 transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            Explore Menu
          </a>
          <a
            href="tel:970-5628418"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            Call Us: 970-5628418
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-amber-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
