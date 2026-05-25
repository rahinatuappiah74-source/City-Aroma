import { motion } from 'motion/react';
import { CheckCircle2, Clock, Utensils, Star, MapPin, Phone } from './icons';

const features = [
  {
    icon: <Utensils className="w-8 h-8 text-white" />,
    title: 'Authentic Taste',
    description: 'Traditional recipes passed down from generations, ensuring true Ghanaian flavor.',
    bg: 'bg-brand-orange',
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-white" />,
    title: 'Fresh Ingredients',
    description: 'We source locally every morning. 100% fresh meats, vegetables, and spices.',
    bg: 'bg-brand-green',
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: 'Fast Service',
    description: 'Quick preparation without compromising on quality or hygiene for busy customers.',
    bg: 'bg-brand-gold',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-brand-brown mb-6 leading-tight">
              More than just a meal.<br/> A community tradition.
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              City Aroma was founded with a simple goal: to serve Sunyani and Fiapre the most authentic, comforting, and delicious Ghanaian dishes in a clean and welcoming environment.
            </p>
            <p className="text-gray-600 mb-10 text-lg">
              Whether you are a university student needing a taste of home, a busy professional on a lunch break, or a family celebrating the weekend, our kitchen is always ready to serve you with a smile.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-green">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown">Hygienic Environment</h4>
                  <p className="text-sm text-gray-500">Impeccably clean dining and kitchen areas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-orange">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown">Affordable Meals</h4>
                  <p className="text-sm text-gray-500">Premium quality at prices everyone can enjoy.</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Images / Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] flex items-center"
          >
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
                alt="Restaurant Ambience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-10 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-cream z-20">
              <img 
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-10 left-10 z-30 bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-gray-100">
              <span className="text-4xl font-black text-brand-orange">5+</span>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1 text-center">Years of<br/>Excellence</span>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex items-start gap-6 hover:shadow-md transition-shadow"
            >
              <div className={`p-4 rounded-xl ${feature.bg} flex-shrink-0 shadow-lg`}>
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-xl text-brand-brown mb-2">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
