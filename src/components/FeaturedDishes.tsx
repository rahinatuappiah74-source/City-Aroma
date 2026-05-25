import { motion } from 'motion/react';

const dishes = [
  {
    id: 1,
    name: 'Classic Jollof Rice',
    description: 'Smoky, spicy party jollof served with grilled chicken, kelewele, and coleslaw.',
    price: 'GH₵ 40.00',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop',
    popular: true,
  },
  {
    id: 2,
    name: 'Fufu & Light Soup',
    description: 'Freshly pounded fufu with spicy goat meat light soup, a true weekend favorite.',
    price: 'GH₵ 55.00',
    image: 'https://images.unsplash.com/photo-1548943487-a2e41434c9cb?q=80&w=1000&auto=format&fit=crop',
    popular: true,
  },
  {
    id: 3,
    name: 'Banku & Grilled Tilapia',
    description: 'Two soft balls of banku served with a large grilled tilapia, hot pepper, and shito.',
    price: 'GH₵ 70.00',
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=1000&auto=format&fit=crop',
    popular: false,
  },
  {
    id: 4,
    name: 'Assorted Fried Rice',
    description: 'Rich fried rice packed with beef, sausage, chicken, and fresh vegetables.',
    price: 'GH₵ 45.00',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1000&auto=format&fit=crop',
    popular: false,
  },
];

export default function FeaturedDishes() {
  return (
    <section id="featured" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2">Our Signatures</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-black text-brand-brown mb-6">Popular Dishes</h3>
          <p className="text-gray-600 text-lg">
            Taste the authenticity. These are our community's favorite meals, prepared fresh daily with secret family recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {dish.popular && (
                  <div className="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Most Ordered
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <span className="text-white font-bold text-xl">{dish.price}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-heading font-bold text-xl text-brand-brown">{dish.name}</h4>
                </div>
                <p className="text-gray-500 text-sm mb-6 flex-grow">{dish.description}</p>
                <div className="flex items-center justify-between mt-auto">
                   <span className="text-brand-orange font-bold text-lg group-hover:hidden">{dish.price}</span>
                   <button className="bg-brand-orange-50 text-brand-orange hover:bg-brand-orange hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors w-full group-hover:w-auto">
                     Add to Order
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
