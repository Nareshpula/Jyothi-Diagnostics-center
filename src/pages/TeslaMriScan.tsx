import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Brain, Heart, Activity, Shield, Microscope, ArrowRight, Waves, Scan } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/mri-tesla-machine-image.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL21yaS10ZXNsYS1tYWNoaW5lLWltYWdlLmpwZyIsImlhdCI6MTczOTk4NjM4NSwiZXhwIjoxODk3NjY2Mzg1fQ.2J4J0Q3arotaY-a4635D8ryAG8c1oxxgHctKFs4zlkE"
          alt="3.0 Tesla MRI Machine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2f1f1]/80 via-[#f2f1f1]/50 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-end text-center px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            3.0 Tesla Open Flare MRI
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Advanced Imaging Technology for Superior Diagnostic Accuracy
          </motion.p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-8"
        >
          <ChevronDown className="w-8 h-8 text-gray-800" />
        </motion.div>
      </div>
    </div>
  );
};

const MachineOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            State-of-the-Art MRI Technology
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our 51-channel automatic powered digital MRI with 3.0 Tesla platform represents
            the pinnacle of magnetic resonance imaging technology, offering unparalleled
            image quality and diagnostic capabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 md:p-12">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-blue-900 mb-4"
              >
                Asia’s Third Installation, Based in Madanapalle.
              </motion.div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Activity className="w-8 h-8 text-blue-600" />,
                  title: "51-Channel Digital",
                  description: "Advanced channel architecture for superior signal reception"
                },
                {
                  icon: <Brain className="w-8 h-8 text-purple-600" />,
                  title: "3.0 Tesla Power",
                  description: "Powerful magnetic field for exceptional image clarity"
                },
                {
                  icon: <Scan className="w-8 h-8 text-indigo-600" />,
                  title: "Automatic Platform",
                  description: "Streamlined workflow for efficient scanning"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Superior Image Quality",
    icon: <Microscope className="w-8 h-8" />,
    description: "Ultra-high resolution imaging with exceptional detail and clarity",
    benefits: [
      "Crystal-clear anatomical visualization",
      "Enhanced soft tissue contrast",
      "Precise lesion detection",
      "Detailed vascular imaging"
    ]
  },
  {
    title: "Advanced Applications",
    icon: <Brain className="w-8 h-8" />,
    description: "Comprehensive suite of specialized imaging protocols",
    benefits: [
      "Neurological mapping",
      "Cardiac function analysis",
      "Musculoskeletal assessment",
      "Oncology imaging"
    ]
  },
  {
    title: "Patient Comfort",
    icon: <Heart className="w-8 h-8" />,
    description: "Designed for maximum patient comfort during scanning",
    benefits: [
      "Spacious open bore design",
      "Reduced scan times",
      "Quiet scanning technology",
      "Comfortable positioning options"
    ]
  },
  {
    title: "Clinical Versatility",
    icon: <Activity className="w-8 h-8" />,
    description: "Wide range of clinical applications and scanning capabilities",
    benefits: [
      "Multi-organ imaging",
      "Dynamic scanning",
      "Functional assessments",
      "3D reconstruction"
    ]
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-[#e3f3fb]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Features & Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of MRI technology with our advanced 3.0 Tesla system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our 3.0 Tesla MRI
            </h2>
            <p className="text-lg text-gray-600">
              Experience excellence in diagnostic imaging with our state-of-the-art facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Expert Care</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span className="text-gray-600">Highly trained radiologists and technologists</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span className="text-gray-600">Personalized patient care approach</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span className="text-gray-600">Comprehensive scan interpretation</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span className="text-gray-600">Regular quality assurance protocols</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Advanced Technology</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Latest 3.0 Tesla MRI technology</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Advanced post-processing capabilities</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Rapid scanning protocols</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Digital reporting system</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TeslaMriScan = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <HeroSection />
      <MachineOverview />
      <Features />
      <WhyChooseUs />
    </div>
  );
};

export default TeslaMriScan;