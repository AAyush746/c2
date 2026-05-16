import { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center group-hover:bg-amber-400 transition-colors">
              <Utensils size={18} className="text-stone-900" />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-bold text-sm tracking-wide">Tastey Nepal</span>
              <span className="block text-amber-400 text-xs tracking-widest uppercase">Restro & Cafe</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-300 hover:text-amber-400 text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 bg-amber-500 text-stone-900 text-sm font-semibold rounded-full hover:bg-amber-400 transition-colors duration-200"
          >
            Reserve a Table
          </a>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-stone-900/98 backdrop-blur-sm border-t border-stone-800">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-stone-300 hover:text-amber-400 text-base font-medium py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-amber-500 text-stone-900 text-sm font-semibold rounded-full hover:bg-amber-400 transition-colors mt-2"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
