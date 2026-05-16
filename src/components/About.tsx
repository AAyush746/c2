import { Award, Heart, Leaf, Users } from 'lucide-react';

const highlights = [
  {
    icon: Heart,
    title: 'Cooked with Passion',
    desc: 'Every dish is prepared with authentic Nepali recipes passed down through generations.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    desc: 'We source the freshest local produce and herbs to deliver vibrant, wholesome flavors.',
  },
  {
    icon: Award,
    title: 'Highly Rated',
    desc: 'Proudly holding a 4.7-star rating with 27 glowing reviews from our community.',
  },
  {
    icon: Users,
    title: 'Welcoming Atmosphere',
    desc: 'A cozy, friendly space that feels like home — perfect for families, students, and travelers.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Our Story</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              A Taste of Nepal,<br />
              <span className="text-amber-600">Heart of Dhulikhel</span>
            </h2>
            <p className="mt-6 text-stone-600 text-lg leading-relaxed">
              Nestled along University Road in the heart of Dhulikhel, Tastey Nepal Restro & Cafe
              brings authentic Nepali cuisine to locals, students, and travelers alike. From the rich
              aroma of freshly brewed masala tea to the satisfying warmth of a home-cooked thali,
              we pour tradition into every plate.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Our menu spans from street-style snacks like chatpate and samosas to full Nepali meals,
              all served at prices that welcome everyone — Rs 1 to Rs 1,500 per person.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-600">4.7</p>
                <p className="text-stone-500 text-sm mt-1">Star Rating</p>
              </div>
              <div className="w-px h-12 bg-stone-200" />
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-600">27</p>
                <p className="text-stone-500 text-sm mt-1">Happy Reviews</p>
              </div>
              <div className="w-px h-12 bg-stone-200" />
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-600">Rs 1</p>
                <p className="text-stone-500 text-sm mt-1">Starting Price</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Nepali food spread"
                className="rounded-2xl object-cover w-full h-56 shadow-md"
              />
              <img
                src="https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dal Bhat"
                className="rounded-2xl object-cover w-full h-56 shadow-md mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cafe interior"
                className="rounded-2xl object-cover w-full h-56 shadow-md -mt-4"
              />
              <img
                src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh ingredients"
                className="rounded-2xl object-cover w-full h-56 shadow-md mt-4"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-stone-200 rounded-xl -z-10" />
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Icon size={20} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-stone-900 mb-2">{title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
