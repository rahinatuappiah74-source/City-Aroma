import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const menuCategories = ['All', 'Local Dishes', 'Rice Meals', 'Soups', 'Grills', 'Drinks'];

const allMenu = [
  { id: 101, category: 'Rice Meals', name: 'Party Jollof & Chicken', desc: 'With kelewele & coleslaw', price: '40.00', spicy: true },
  { id: 102, category: 'Rice Meals', name: 'Fried Rice & Grilled Chicken', desc: 'Mixed veg fried rice', price: '45.00', spicy: false },
  { id: 103, category: 'Rice Meals', name: 'Waakye Special', desc: 'With wele, egg, fish, and beef', price: '35.00', spicy: true },
  { id: 104, category: 'Rice Meals', name: 'Plain Rice & Palava Sauce', desc: 'Contomire stew with salmon', price: '30.00', spicy: false },
  
  { id: 201, category: 'Local Dishes', name: 'Fufu & Goat Light Soup', desc: 'Freshly pounded', price: '55.00', spicy: true },
  { id: 202, category: 'Local Dishes', name: 'Banku & Grilled Tilapia', desc: 'Extra large tilapia with hot shito', price: '70.00', spicy: true },
  { id: 203, category: 'Local Dishes', name: 'Banku & Okro Stew', desc: 'Crab, wele, and salmon', price: '45.00', spicy: false },
  { id: 204, category: 'Local Dishes', name: 'Ampesie (Yam/Plantain)', desc: 'With garden egg stew', price: '35.00', spicy: false },
  
  { id: 301, category: 'Soups', name: 'Groundnut Soup', desc: 'With chicken or beef', price: '40.00', spicy: false },
  { id: 302, category: 'Soups', name: 'Palm Nut Soup', desc: 'With assorted meat', price: '45.00', spicy: false },
  { id: 303, category: 'Soups', name: 'Goat Light Soup (Bowl)', desc: 'Spicy and hot', price: '30.00', spicy: true },
  
  { id: 401, category: 'Grills', name: 'Full Grilled Tilapia', desc: 'Spiced and grilled to perfection', price: '60.00', spicy: true },
  { id: 402, category: 'Grills', name: 'Grilled Chicken Quarter', desc: 'Tender and juicy', price: '25.00', spicy: false },
  { id: 403, category: 'Grills', name: 'Pork Chops (1kg)', desc: 'Spicy grilled pork', price: '55.00', spicy: true },
  
  { id: 501, category: 'Drinks', name: 'Fresh Pineapple Juice', desc: '100% natural, no sugar added', price: '15.00', spicy: false },
  { id: 502, category: 'Drinks', name: 'Bissap (Sobolo)', desc: 'Chilled local hibiscus drink', price: '10.00', spicy: false },
  { id: 503, category: 'Drinks', name: 'Coca-Cola / Sprite', desc: 'Chilled bottles', price: '7.00', spicy: false },
  { id: 504, category: 'Drinks', name: 'Bottled Water', desc: 'Voltic or Bel-Aqua', price: '3.00', spicy: false },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenu = activeCategory === 'All' 
    ? allMenu 
    : allMenu.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2">Our Menu</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-black text-brand-brown mb-6">Explore Our Flavors</h3>
          <p className="text-gray-600 text-lg mb-8">
            From hearty morning meals to rich weekend specials. Order ahead or walk in to enjoy.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {menuCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activeCategory === cat 
                  ? 'bg-brand-brown text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-brand-orange-50 hover:text-brand-orange'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="flex justify-between items-center border-b border-gray-100 pb-5 hover:bg-brand-orange-50/50 p-2 rounded-lg transition-colors group"
              >
                <div className="pr-4">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-heading font-bold text-lg text-brand-brown group-hover:text-brand-orange transition-colors">
                      {item.name}
                    </h4>
                    {item.spicy && (
                      <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                        Spicy
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-bold text-xl text-brand-green">
                    GH₵{item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/233000000000?text=Hello,%20I%20would%20like%20to%20place%20an%20order%20from%20the%20menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-orange hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105"
          >
            Order Full Menu on WhatsApp
          </a>
        </div>
        
      </div>
    </section>
  );
}
