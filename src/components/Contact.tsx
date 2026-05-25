import { MapPin, Phone, MessageCircle, Clock } from './icons';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2">Visit Us</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-black text-brand-brown mb-6">Location &amp; Hours</h3>
            <p className="text-gray-600 mb-10 text-lg">
              Come dine with us or place an order for quick pickup/delivery around Sunyani and Fiapre.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-orange-50 rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-brown mb-1">Our Restaurant</h4>
                  <p className="text-gray-600">Off Sunyani-Fiapre Main Road<br/>Near Catholic University Campus,<br/>Fiapre, Bono Region, Ghana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-orange-50 rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-brown mb-1">Opening Hours</h4>
                  <p className="text-gray-600">
                    <span className="font-semibold w-24 inline-block">Mon - Sat:</span> 8:00 AM - 10:00 PM<br/>
                    <span className="font-semibold w-24 inline-block">Sundays:</span> 12:00 PM - 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-brown mb-1">Order Direct</h4>
                  <p className="text-gray-600 mb-2">Fastest way to get your food.</p>
                  <a href="https://wa.me/233000000000" className="text-brand-green font-bold text-lg hover:underline block">
                    +233 (0) 00 000 0000 (WhatsApp)
                  </a>
                  <a href="tel:+233000000000" className="text-brand-brown font-bold text-lg hover:underline block mt-1">
                    +233 (0) 00 000 0000 (Call)
                  </a>
                </div>
              </div>
            </div>

            {/* Event Banner */}
            <div className="mt-12 p-6 bg-brand-gold rounded-2xl text-white">
              <h4 className="font-heading font-black text-2xl mb-2">Need Catering?</h4>
              <p className="mb-4">We cater for weddings, birthday parties, corporate events, and university programs.</p>
              <button className="bg-white text-brand-gold font-bold px-6 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                Inquire Now
              </button>
            </div>
          </div>

          {/* Map (Placeholder for embedded map iframe) */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-inner h-[500px] lg:h-auto relative">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 p-8 text-center flex-col">
               <MapPin size={48} className="mb-4 opacity-50" />
               <p className="font-semibold text-lg text-gray-500">Google Maps Embed</p>
               <p className="text-sm">Replace this section with an actual iframe from Google Maps focusing on Sunyani/Fiapre.</p>
             </div>
             {/* Actual Map Iframe would go here */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126588.66779313467!2d-2.3995819597334463!3d7.339659092873177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfa29fdeb4fc10bd%3A0xe74d28d0870cc3fb!2sSunyani%2C%20Ghana!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-10"
             ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
