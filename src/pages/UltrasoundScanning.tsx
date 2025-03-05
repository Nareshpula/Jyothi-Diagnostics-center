import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Waves, Heart, Brain, Activity, Shield, Scan, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/Ultra-sound-scan-images.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL1VsdHJhLXNvdW5kLXNjYW4taW1hZ2VzLmpwZyIsImlhdCI6MTc0MDk5NDgyMCwiZXhwIjoxODk4Njc0ODIwfQ.AZScjZ3Y71xOqSEhzq6FJDNr0Ga3F9r_tp8QZYAhZ7Q"
          alt="Ultrasound Scanning"
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced Ultrasound & Color Doppler Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            State-of-the-art diagnostic imaging with precision and care
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

const Overview = () => {
  return (
    <section className="py-20 bg-[rgb(231,232,230)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Understanding Ultrasound Technology
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ultrasound imaging uses high-frequency sound waves to create detailed images of organs
            and structures inside the body. This safe, non-invasive technology provides real-time
            visualization of blood flow and tissue movement, making it an invaluable diagnostic tool.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">How Ultrasound Works</h3>
            <p className="text-gray-600">
              During an ultrasound examination, a transducer (probe) is placed directly on the skin.
              The transducer emits sound waves and captures their echoes as they bounce off body
              structures. A computer processes these echoes to create real-time images.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                <span className="text-gray-600">Advanced 4D imaging capabilities</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                <span className="text-gray-600">Color Doppler for blood flow assessment</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                <span className="text-gray-600">Real-time imaging for dynamic evaluation</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative background elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 grid grid-cols-4 gap-1">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-300 rounded-full" />
              ))}
            </div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 grid grid-cols-4 gap-1">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-300 rounded-full" />
              ))}
            </div>
            
            {/* Curved background shape */}
            <div className="absolute inset-0 bg-[#f0f0f0] rounded-[100px] transform rotate-6" />
            
            {/* Image container */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/new-ultrasound-image.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL25ldy11bHRyYXNvdW5kLWltYWdlLnBuZyIsImlhdCI6MTc0MDk5NTY0MSwiZXhwIjoxODk4Njc1NjQxfQ.m7MGt3fwCqaZIoic1JzlxRR2us9V8XaGpjo00exV8PQ"
                alt="Ultrasound Machine"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const scanTypes = [
  {
    title: "Abdominal Ultrasound",
    icon: <Activity className="w-8 h-8" />,
    description: "Comprehensive evaluation of abdominal organs and structures.",
    applications: [
      "Liver assessment",
      "Gallbladder examination",
      "Pancreatic evaluation",
      "Kidney screening"
    ]
  },
  {
    title: "Cardiac Ultrasound",
    icon: <Heart className="w-8 h-8" />,
    description: "Detailed imaging of heart structure and function.",
    applications: [
      "Heart valve assessment",
      "Chamber evaluation",
      "Blood flow analysis",
      "Wall motion studies"
    ]
  },
  {
    title: "Musculoskeletal Ultrasound",
    icon: <Scan className="w-8 h-8" />,
    description: "Dynamic imaging of muscles, tendons, and joints.",
    applications: [
      "Tendon injuries",
      "Joint inflammation",
      "Muscle tears",
      "Soft tissue masses"
    ]
  },
  {
    title: "Vascular Doppler",
    icon: <Waves className="w-8 h-8" />,
    description: "Blood flow assessment in arteries and veins.",
    applications: [
      "DVT screening",
      "Arterial blockages",
      "Varicose veins",
      "Carotid assessment"
    ]
  }
];

const ScanTypes = () => {
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
            Our Ultrasound Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive ultrasound imaging services tailored to your diagnostic needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {scanTypes.map((scan, index) => (
            <motion.div
              key={scan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  {scan.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">{scan.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{scan.description}</p>
              <ul className="space-y-3">
                {scan.applications.map((app, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                    {app}
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

const PreparationSection = () => {
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
              Preparation & Safety
            </h2>
            <p className="text-lg text-gray-600">
              Guidelines to ensure optimal ultrasound examination results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Before Your Scan</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span className="text-gray-600">Follow specific fasting instructions if required</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span className="text-gray-600">Wear comfortable, loose-fitting clothing</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span className="text-gray-600">Drink water as instructed for certain scans</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span className="text-gray-600">Bring previous medical records if available</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Benefits & Safety</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Non-invasive and radiation-free</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Real-time imaging capabilities</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Painless examination process</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Immediate results available</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const UltrasoundScanning = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <HeroSection />
      <Overview />
      <ScanTypes />
      <PreparationSection />
    </div>
  );
};

export default UltrasoundScanning;