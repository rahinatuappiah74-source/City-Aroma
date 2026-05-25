import { MessageCircle } from './icons';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/233000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white py-3 px-5 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:scale-105"
    >
      <MessageCircle size={28} />
      <span className="font-bold hidden sm:inline-block">Order Now</span>
      
      {/* Pulse Animation Background */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
    </motion.a>
  );
}
