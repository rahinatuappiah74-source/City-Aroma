import { Star } from './icons';
import { motion } from 'motion/react';

const reviews = [
  {
    id: 1,
    name: 'Kwame Mensah',
    role: 'Local Guide',
    content: '"Best waakye in Sunyani. Clean place, amazing customer service, and the food always tastes like home. Highly recommended for weekend fufu too!"',
    rating: 5,
  },
  {
    id: 2,
    name: 'Akua Daniela',
    role: 'University Student',
    content: '"Very affordable for students. Their Jollof is easily the best in Fiapre. The delivery via WhatsApp is always fast. My go-to spot for Friday lunch."',
    rating: 5,
  },
  {
    id: 3,
    name: 'Samuel Osei',
    role: 'Visitor',
    content: '"I stopped by on my way to Kumasi. The Banku and Tilapia was fresh, hot, and the environment is very hygienic. Great experience overall."',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-brand-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-black mb-6 text-brand-cream">What Our Customer Say</h3>
          <p className="text-brand-cream/70 text-lg">
            Don't just take our word for it. Here is what people in Sunyani and Fiapre think about City Aroma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    size={20} 
                    className={index < review.rating ? 'fill-brand-gold text-brand-gold' : 'text-gray-600'} 
                  />
                ))}
              </div>
              <p className="text-brand-cream/90 text-lg mb-8 leading-relaxed font-medium italic">
                {review.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <span className="text-sm text-brand-cream/60">{review.role}</span>
                </div>
              </div>
              <svg className="absolute top-8 right-8 w-12 h-12 text-white/5" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
