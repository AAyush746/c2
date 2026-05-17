import { useState } from 'react';
import { menuItems } from './menuItems';

// Extract unique categories from menuItems
const categories = ['All', ...Array.from(new Set(menuItems.map(item => item.category)))];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Our Menu</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-stone-900">
            Flavors of <span className="text-amber-600">Nepal</span>
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            From hearty mains to quick snacks, every dish celebrates authentic Nepali taste.
            Prices start from as low as Rs 1.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat
                  ? 'bg-amber-500 text-stone-900 shadow-md shadow-amber-200'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-stone-900 leading-snug">{item.name}</h3>
                  <span className="text-amber-600 font-bold text-sm whitespace-nowrap">Rs {item.price}</span>
                </div>
                <p className="mt-1.5 text-stone-500 text-xs leading-relaxed">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-sm mt-10">
          Prices range from Rs 1 – Rs 1,500 per person. Menu items may vary by season.
        </p>
      </div>
    </section>
  );
}
