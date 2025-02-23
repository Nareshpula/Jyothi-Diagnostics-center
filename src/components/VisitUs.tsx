import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const VisitUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Visit Us
          </motion.h2>
          <motion.p
            className="text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Located in the heart of Madanapalle, our diagnostic center is easily accessible and equipped with modern facilities
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-6">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300"
              style={{ 
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <MapPin className="w-8 h-8 text-white" />
                </motion.div>
                <div className="transform-gpu">
                  <h3 className="font-bold text-lg text-white">Our Address</h3>
                  <p className="text-white">
                    Jyothi Diagnostic Center,<br />
                    Balaji Commercial Complex,<br />
                    Opp. RTC Bus Stand, Near Desai Hospital,<br />
                    Madanapalle - 517325
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300"
              style={{ 
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <Phone className="w-8 h-8 text-white" />
                </motion.div>
                <div className="transform-gpu">
                  <h3 className="font-bold text-lg text-white">Contact Us</h3>
                  <p className="text-white">
                    Reception: 08571-224789<br />
                    Mobile: 9100752753<br />
                    Email: jyothidiagnosticsmpl@gmail.com
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300"
              style={{ 
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <Clock className="w-8 h-8 text-white" />
                </motion.div>
                <div className="transform-gpu">
                  <h3 className="font-bold text-lg text-white">Working Hours</h3>
                  <p className="text-white">
                    CT & MRI Scans Emergency: 24/7 Hours<br />
                    OPD Mon-Sat: 09:00 AM IST – 03:30 PM IST<br />
                    Evening: 06:00 PM IST – 09:00 PM IST<br />
                    Sun: 10:00 AM IST – 02:00 PM IST
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.button 
              className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 mx-auto md:mx-0"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=13.558638427265453,78.50818108762539', '_blank')}
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-8 md:mt-0"
        >
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl bg-white p-2 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.8876058917387!2d78.50818108762539!3d13.558638427265453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2b6df3e1ce8b1%3A0x9f1b1f9e6b44f8b2!2sJyothi%20Diagnostic%20Center!5e0!3m2!1sen!2sin!4v1709669547736!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;