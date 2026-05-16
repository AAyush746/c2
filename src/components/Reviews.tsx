import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sita Sharma',
    date: 'March 2025',
    rating: 5,
    text: 'The best dal bhat I have had outside my own home! The food tastes exactly like traditional Nepali cooking. Very affordable and the staff is so friendly.',
    avatar: 'SS',
  },
  {
    name: 'Rohan Thapa',
    date: 'February 2025',
    rating: 5,
    text: 'Amazing momos and the masala tea is absolutely perfect. Great place near the university. Highly recommend to all students looking for a budget-friendly meal.',
    avatar: 'RT',
  },
  {
    name: 'Anjali Karki',
    date: 'January 2025',
    rating: 4,
    text: 'Lovely cozy atmosphere. The chatpate is addictive! Service was quick and the food was fresh. Will definitely be coming back with my family.',
    avatar: 'AK',
  },
  {
    name: 'Bikram Shrestha',
    date: 'December 2024',
    rating: 5,
    text: 'Visited during my trip to Dhulikhel and this place was a gem. The thali was enormous and delicious. Perfect for travelers wanting authentic local flavors.',
    avatar: 'BS',
  },
  {
    name: 'Priya Rai',
    date: 'November 2024',
    rating: 5,
    text: 'The sel roti with yogurt is incredible — so fresh and light. Great coffee too. The ambiance is warm and welcoming. One of my favorite spots in Dhulikhel.',
    avatar: 'PR',
  },
  {
    name: 'Deepak Gurung',
    date: 'October 2024',
    rating: 4,
    text: 'Really solid food at very reasonable prices. The chowmein was tasty and the portions are generous. Location is convenient and easy to find.',
    avatar: 'DG',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-stone-300 fill-stone-300'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Customer Love
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
            What Our Guests Say
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-stone-300 text-lg">
              <span className="text-amber-400 font-bold">4.7</span> out of 5 · 27 Reviews
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-stone-800 rounded-2xl p-6 border border-stone-700 hover:border-amber-500/40 hover:bg-stone-750 transition-all duration-200"
            >
              <Quote size={24} className="text-amber-500/40 mb-3" />
              <p className="text-stone-300 text-sm leading-relaxed mb-5">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-stone-900 font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-stone-500 text-xs">{review.date}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
