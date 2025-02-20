import React from 'react';
import { Activity, Heart, Microscope, Dna, Brain, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: <Activity className="w-12 h-12 text-blue-900" />,
    title: 'Pathology Tests',
    description: 'Comprehensive blood tests, urine analysis, and other pathological examinations.',
  },
  {
    icon: <Heart className="w-12 h-12 text-blue-900" />,
    title: 'Cardiology',
    description: 'ECG, Echo, TMT, and other cardiac diagnostic services.',
  },
  {
    icon: <Microscope className="w-12 h-12 text-blue-900" />,
    title: 'Microbiology',
    description: 'Culture tests, sensitivity analysis, and microbiological examinations.',
  },
  {
    icon: <Dna className="w-12 h-12 text-blue-900" />,
    title: 'Molecular Diagnostics',
    description: 'Advanced genetic testing and molecular diagnostic services.',
  },
  {
    icon: <Brain className="w-12 h-12 text-blue-900" />,
    title: 'Neurology',
    description: 'EEG, NCV, and comprehensive neurological diagnostics.',
  },
  {
    icon: <Stethoscope className="w-12 h-12 text-blue-900" />,
    title: 'Health Packages',
    description: 'Customized health check-up packages for preventive care.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 transform-gpu">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 leading-tight transform-gpu">
            Our Diagnostic Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We offer a comprehensive range of diagnostic services using state-of-the-art
            equipment and technologies to ensure accurate and reliable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform-gpu"
            >
              <div className="mb-3 md:mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2 leading-tight transform-gpu">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;