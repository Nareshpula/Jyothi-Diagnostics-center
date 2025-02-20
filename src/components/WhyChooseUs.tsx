import React from 'react';
import { motion } from 'framer-motion';
import { UserCog, Building2, Heart, Globe } from 'lucide-react';

const features = [
  {
    icon: <UserCog className="w-8 h-8 text-blue-600" aria-label="Expert Medical Team Icon" />,
    title: "Expert Medical Team",
    description: "Experienced professionals providing top-quality care and diagnostics."
  },
  {
    icon: <Building2 className="w-8 h-8 text-pink-600" aria-label="State-of-the-Art Facilities Icon" />,
    title: "State-of-the-Art Facilities",
    description: "Advanced equipment and modern infrastructure for accurate diagnostics."
  },
  {
    icon: <Heart className="w-8 h-8 text-red-600" aria-label="Comprehensive Patient Care Icon" />,
    title: "Comprehensive Patient Care",
    description: "Personalized diagnostic services with patient-centered care."
  },
  {
    icon: <Globe className="w-8 h-8 text-green-600" aria-label="National Reputation Icon" />,
    title: "National Reputation",
    description: "Trusted across regions for reliable diagnostic services."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Why Choose Jyothi Diagnostic Centre?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Jyothi Diagnostic Centre is committed to providing accurate, timely, and affordable diagnostic services with a patient-first approach.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => ( 
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                >
                  <div className="p-3 rounded-lg bg-gray-50 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <motion.div
            className="relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80"
                alt="Medical team providing diagnostic services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;