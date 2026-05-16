import { useState } from 'react';

const categories = ['All', 'Mains', 'Snacks', 'Beverages', 'Desserts'];

const menuItems = [
  {
    name: 'Dal Bhat Tarkari',
    desc: 'Traditional Nepali set meal with lentil soup, rice, vegetables, and pickles.',
    price: 'Rs 250',
    category: 'Mains',
    tag: 'Bestseller',
    image: 'https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Buff Momo (Steamed)',
    desc: 'Juicy Nepali dumplings filled with seasoned buffalo meat, served with achar.',
    price: 'Rs 180',
    category: 'Snacks',
    tag: 'Popular',
    image: 'https://images.pexels.com/photos/3964344/pexels-photo-3964344.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Veg Thali',
    desc: 'Complete vegetarian platter with rice, dal, sabzi, roti, and homemade pickle.',
    price: 'Rs 220',
    category: 'Mains',
    tag: null,
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Chicken Chowmein',
    desc: 'Stir-fried noodles with tender chicken, fresh vegetables, and Nepali spices.',
    price: 'Rs 200',
    category: 'Mains',
    tag: null,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Samosa (2 pcs)',
    desc: 'Crispy fried pastry filled with spiced potatoes and peas, served with chutney.',
    price: 'Rs 40',
    category: 'Snacks',
    tag: null,
    image: 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Masala Milk Tea',
    desc: 'Aromatic spiced Nepali tea brewed with ginger, cardamom, and whole spices.',
    price: 'Rs 50',
    category: 'Beverages',
    tag: 'Bestseller',
    image: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Chatpate',
    desc: 'A spicy, tangy Nepali street snack with puffed rice, vegetables, and tamarind.',
    price: 'Rs 60',
    category: 'Snacks',
    tag: 'Street Fave',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Black Coffee',
    desc: 'Rich Nepali highland coffee, served hot or iced.',
    price: 'Rs 120',
    category: 'Beverages',
    tag: null,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Sel Roti with Yogurt',
    desc: 'Traditional Nepali ring-shaped sweet fried bread served with creamy yogurt.',
    price: 'Rs 100',
    category: 'Desserts',
    tag: 'Traditional',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Kheer',
    desc: 'Creamy rice pudding slow-cooked with milk, sugar, and aromatic cardamom.',
    price: 'Rs 130',
    category: 'Desserts',
    tag: null,
    image: 'https://images.pexels.com/photos/5848515/pexels-photo-5848515.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Fried Momo',
    desc: 'Golden crispy fried dumplings with savory meat filling and spicy achar.',
    price: 'Rs 200',
    category: 'Snacks',
    tag: null,
    image: 'https://images.pexels.com/photos/4397919/pexels-photo-4397919.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Lemonade (Fresh)',
    desc: 'Refreshing fresh-squeezed lemonade with mint and a hint of rock salt.',
    price: 'Rs 80',
    category: 'Beverages',
    tag: null,
    image: 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

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
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
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
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.tag && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-stone-900 text-xs font-bold px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-stone-900 leading-snug">{item.name}</h3>
                  <span className="text-amber-600 font-bold text-sm whitespace-nowrap">{item.price}</span>
                </div>
                <p className="mt-1.5 text-stone-500 text-xs leading-relaxed">{item.desc}</p>
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
