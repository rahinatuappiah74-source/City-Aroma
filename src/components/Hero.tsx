import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin } from './icons';

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1548943487-a2e41434c9cb?q=80&w=2670&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/20 text-brand-gold border border-brand-orange/30 text-sm font-bold tracking-wider mb-6">
              SUNYANI &amp; FIAPRE'S FINEST
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Authentic Ghanaian Flavors <span className="text-brand-orange">in Fiapre.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fresh, Delicious &amp; Affordable local cuisine. Experience the true taste of home, prepared daily with love and the finest ingredients.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              onClick={() => scrollTo('#menu')}
              className="bg-brand-orange hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View Menu
            </button>
            <a 
              href="https://wa.me/233000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} />
              WhatsApp Order
            </a>
            <a 
              href="tel:+233000000000"
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone size={24} />
              Call Now
            </a>
          </motion.div>

          <motion.div 
            className="mt-12 flex items-center gap-4 text-white/80 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-orange" />
              <span>5 mins from Sunyani town center</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
