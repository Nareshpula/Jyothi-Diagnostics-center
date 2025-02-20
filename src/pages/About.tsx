import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, Heart, Lightbulb, Shield, Building2, History, Stethoscope, Microscope, Guitar as Hospital, Calendar, Stethoscope as UltrasoundIcon, Building, Cpu } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 bg-gradient-to-b from-[#fff8f8] to-[#e3f2fd]">
      {/* Vision & Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-pink-50">
                  <Target className="w-8 h-8 text-[#ec93bc]" />
                </div>
                <h2 className="ml-4 text-2xl font-bold text-[#ec93bc]">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading diagnostic center that sets new standards in healthcare
                through accurate, affordable, and compassionate diagnostic services. We
                envision a future where quality healthcare is accessible to all, powered
                by cutting-edge technology and delivered with utmost care.
              </p>
            </div>

            {/* Mission */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-pink-50">
                  <Rocket className="w-8 h-8 text-[#ec93bc]" />
                </div>
                <h2 className="ml-4 text-2xl font-bold text-[#ec93bc]">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To leverage advanced technology and expertise in providing comprehensive
                diagnostic solutions that enable better healthcare decisions. We are
                committed to maintaining the highest standards of accuracy, reliability,
                and patient care while making our services accessible and affordable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#ec93bc] mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Patient-Centric Care */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-pink-50">
                  <Heart className="w-8 h-8 text-[#ec93bc]" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Patient-Centric Care
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We prioritize patient comfort and trust, ensuring a supportive and
                caring environment throughout their diagnostic journey.
              </p>
            </div>

            {/* Innovation & Technology */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-pink-50">
                  <Lightbulb className="w-8 h-8 text-[#ec93bc]" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Innovation & Technology
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We stay at the forefront of diagnostic technology, continuously
                upgrading our capabilities to provide the most accurate results.
              </p>
            </div>

            {/* Integrity & Excellence */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-pink-50">
                  <Shield className="w-8 h-8 text-[#ec93bc]" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Integrity & Excellence
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards of professional integrity and
                excellence in every aspect of our service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Partnering for Excellence
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Collaborating with Madanapalle's leading healthcare institutions to deliver
              comprehensive diagnostic solutions and enhance patient care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                icon: <Hospital className="w-12 h-12" />,
                title: "Improved Healthcare Access",
                description: "Strategic partnerships with leading hospitals enabling wider access to advanced diagnostic services.",
                gradient: "from-blue-500 to-blue-600",
                delay: 0
              },
              {
                icon: <Microscope className="w-12 h-12" />,
                title: "Advanced Medical Technology",
                description: "Shared access to cutting-edge diagnostic equipment and technology platforms.",
                gradient: "from-purple-500 to-purple-600",
                delay: 0.2
              },
              {
                icon: <Stethoscope className="w-12 h-12" />,
                title: "Expert Medical Consultation",
                description: "Collaborative approach with specialist doctors for accurate diagnosis and treatment planning.",
                gradient: "from-pink-500 to-pink-600",
                delay: 0.4
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: benefit.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300"></div>
                <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.gradient} p-3 mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>
                    <div className="text-white w-full h-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              View Our Hospital Network
            </button>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 bg-gradient-to-b from-[#fff8f8] to-[#e3f2fd]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#ec93bc] mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Since our establishment in 2015 by Dr. JYOTHI R.G, we have been committed
              to delivering excellence in diagnostic healthcare.
            </p>
          </div>

          <div className="relative">
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#ec93bc]"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "2015",
                  title: "Foundation",
                  description: "Founded by Dr. JYOTHI R.G with a vision to provide advanced diagnostic services in Madanapalle.",
                  icon: <Calendar className="w-8 h-8 text-[#ec93bc]" />
                },
                {
                  year: "2017",
                  title: "Advanced Ultrasound",
                  description: "Installation of Advanced Ultrasound machines improving diagnostic accuracy.",
                  icon: <UltrasoundIcon className="w-8 h-8 text-[#ec93bc]" />
                },
                {
                  year: "2019",
                  title: "Hospital Collaborations",
                  description: "Collaboration with leading hospitals in Madanapalle to extend diagnostic services.",
                  icon: <Building className="w-8 h-8 text-[#ec93bc]" />
                },
                {
                  year: "2021",
                  title: "Digital MRI Installation",
                  description: "Acquired Digital MRI with 3 Tesla Platform offering high-resolution imaging.",
                  icon: <Cpu className="w-8 h-8 text-[#ec93bc]" />
                },
                {
                  year: "2023",
                  title: "Equipment Upgrade",
                  description: "Upgraded with High-performance CT Scanners and Modern Digital X-rays.",
                  icon: <Microscope className="w-8 h-8 text-[#ec93bc]" />
                },
                {
                  year: "2024",
                  title: "Expanded Partnerships",
                  description: "Expanded partnerships with more hospitals to enhance patient care access.",
                  icon: <Building2 className="w-8 h-8 text-[#ec93bc]" />
                },
                {
                  year: "2025",
                  title: "Elevating Healthcare Standards",
                  description: "Leveraging advanced technology and the expertise of top-tier doctors, Jyothi Diagnostic Center is emerging as Madanapalle's No.1 diagnostics provider.",
                  icon: <History className="w-8 h-8 text-[#ec93bc]" />
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ 
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100
                  }}
                  whileInView={{ 
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.1
                  }}
                >
                  <div className={`md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  }`}>
                    <motion.div
                      className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                        index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        <span className="text-[#ec93bc]">{milestone.year}</span> - {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </motion.div>
                  </div>
                  <div className="md:w-2/12 flex justify-center items-center py-4 md:py-0">
                    <motion.div
                      className="bg-white p-4 rounded-full shadow-lg inline-block relative z-10"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 0 20px rgba(236, 147, 188, 0.3)"
                      }}
                      transition={{ duration: 0.7 }}
                    >
                      {milestone.icon}
                    </motion.div>
                  </div>
                  <div className={`hidden md:block md:w-5/12 ${
                    index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                  }`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;