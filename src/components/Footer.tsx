import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Jyothi Diagnostics</h3>
            <p className="text-blue-100 mb-4">
              Providing quality diagnostic services with advanced technology and expert care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition duration-300">Contact</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition duration-300">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition duration-300">Pathology Tests</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition duration-300">Cardiology</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition duration-300">Microbiology</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition duration-300">Molecular Diagnostics</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition duration-300">Health Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <ul className="space-y-2">
              <li className="text-blue-100">Monday - Friday</li>
              <li className="font-semibold">7:00 AM - 9:00 PM</li>
              <li className="text-blue-100 mt-4">Saturday</li>
              <li className="font-semibold">7:00 AM - 9:00 PM</li>
              <li className="text-blue-100 mt-4">Sunday</li>
              <li className="font-semibold">8:00 AM - 2:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Jyothi Diagnostics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;