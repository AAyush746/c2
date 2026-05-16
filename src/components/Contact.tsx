import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 10:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 10:00 PM' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
            Find Us
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-stone-900">
            Visit <span className="text-amber-600">Tastey Nepal</span>
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            We're conveniently located on University Road, Dhulikhel — easy to reach and impossible to miss.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100">
              <h3 className="font-bold text-stone-900 text-lg mb-5">Restaurant Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Address</p>
                    <p className="text-stone-500 text-sm mt-0.5">University Road, Dhulikhel 45200</p>
                    <p className="text-stone-500 text-sm">Kavrepalanchok, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Phone</p>
                    <a
                      href="tel:9705628418"
                      className="text-amber-600 hover:text-amber-700 text-sm font-medium mt-0.5 block transition-colors"
                    >
                      970-5628418
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-stone-800 mb-2">Opening Hours</p>
                    <div className="space-y-1.5">
                      {hours.map((h) => (
                        <div key={h.day} className="flex justify-between text-sm">
                          <span className="text-stone-500">{h.day}</span>
                          <span className="text-stone-700 font-medium">{h.time}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-700 text-xs font-semibold">Open Now · Closes 10 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100">
              <h3 className="font-bold text-stone-900 text-lg mb-5">Price Range</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-amber-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-amber-600">Rs 1</p>
                  <p className="text-stone-500 text-xs mt-1">Minimum</p>
                </div>
                <div className="text-stone-400 font-bold text-lg">—</div>
                <div className="flex-1 bg-amber-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-amber-600">Rs 1,500</p>
                  <p className="text-stone-500 text-xs mt-1">Maximum</p>
                </div>
              </div>
              <p className="text-stone-400 text-xs mt-4 text-center">Per person · Reported by guests</p>
            </div>

            <a
              href="https://maps.google.com/?q=Tastey+Nepal+Restro+and+Cafe+Dhulikhel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-amber-500 text-stone-900 font-bold rounded-2xl hover:bg-amber-400 transition-colors duration-200"
            >
              <Navigation size={18} />
              Get Directions on Google Maps
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 h-[520px]">
            <iframe
              title="Tastey Nepal Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0!2d85.5439!3d27.6238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b5b5b5b5b5b%3A0x1b2b3b4b5b6b7b8b!2sDhulikhel%2C%20Nepal!5e0!3m2!1sen!2snp!4v1000000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
