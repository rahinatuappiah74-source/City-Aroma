import { Facebook, Instagram } from './icons';

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white/80 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <span className="font-heading font-black text-3xl tracking-tighter text-white block mb-6">
              CITY AROMA
            </span>
            <p className="max-w-sm mb-6 text-brand-cream/70">
              Authentic Ghanaian Flavors in Fiapre. Fresh, Delicious &amp; Affordable local cuisine served with a smile.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              {/* Optional TikTok SVG could go here */}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact &amp; Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} City Aroma Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
