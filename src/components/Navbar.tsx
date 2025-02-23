import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone, ScanLine } from 'lucide-react';

// Define menu items once to avoid duplication
const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  {
    path: '#services',
    label: 'Services',
    dropdown: [
      { label: 'Pathology Tests', path: '#' },
      { label: 'Cardiology', path: '#' },
      { label: 'Neurology', path: '#' },
      { label: 'Health Packages', path: '#' }
    ]
  },
  {
    path: '#doctors',
    label: 'Doctors',
    dropdown: [
      { label: 'Find a Doctor', path: '#' },
      { label: 'Our Team', path: '#' }
    ]
  },
  { path: '#contact', label: 'Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const handleMenuClick = () => {
    setIsOpen(false);
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollPosition <= 100 && isScrolled) {
      setIsScrolled(false);
    }
  }, [isScrolled]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Reset scroll state when location changes
  useEffect(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 100);
  }, [location]);

  return (
    <nav className={`fixed w-full top-0 z-[999] transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-white shadow-lg' : location.pathname === '/' ? 'bg-transparent' : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`flex justify-between items-center h-24 ${
          isScrolled || location.pathname !== '/' ? 'border-b border-gray-200/50' : 'border-b-[2px] border-black/30'
        }`}>
          <Link to="/" className="flex-1">
            <h1 className="font-['Montserrat'] text-black text-2xl md:text-3xl font-bold tracking-wide drop-shadow-sm">
              JYOTHI DIAGNOSTICS
            </h1>
            <p className="font-['Open_Sans'] text-black/70 text-sm md:text-base font-light mt-1">
              The Best Comprehensive Diagnostics
            </p>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search Scan's, Services"
                className={`pl-10 pr-4 py-2 rounded-full text-black placeholder-gray-500 w-44 focus:w-56 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6f42c1] backdrop-blur-sm ${
                  isScrolled || location.pathname !== '/' ? 'bg-white/90 shadow-sm border border-gray-200/50' : 'bg-white/80 border-2 border-gray-300/50'
                }`}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-[#6f42c1]" />
            </div>
            <a 
              href="tel:9100752753" 
              className="hidden md:flex items-center space-x-2 bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </a>
            <button className="hidden md:flex items-center space-x-2 bg-teal-500 text-white px-6 py-2.5 rounded-full hover:bg-teal-600 transition duration-300 whitespace-nowrap">
              <ScanLine className="w-4 h-4" />
              <span>24/7 CT & MRI Scans Available</span>
            </button>
          </div>
            
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-700 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <div className={`hidden md:block py-4 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}>
          <ul className="flex justify-center space-x-8">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li 
                  key={index} 
                  className={`group relative ${isActive ? 'text-blue-600' : ''}`}
                >
                  {item.dropdown ? (
                    <>
                      <a 
                        href={item.path} 
                        className="text-black hover:text-gray-600 font-medium"
                      >
                        {item.label}
                        <span className="ml-1">▼</span>
                      </a>
                      <ul className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <li key={dropIndex}>
                            <a 
                              href={dropItem.path} 
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {dropItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="text-black hover:text-gray-600 font-medium"
                      onClick={handleMenuClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed top-24 left-0 right-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} ${
        isScrolled || location.pathname !== '/' ? 'bg-white/95' : 'bg-white/90'
      }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`block px-3 py-2 hover:bg-gray-100 rounded-md ${
                  location.pathname === item.path 
                    ? 'text-blue-600' 
                    : isScrolled ? 'text-gray-900' : 'text-black'
                }`}
                onClick={handleMenuClick}
              >{item.label}</Link>
            ))}
            <div className="mt-4 space-y-2">
            <a 
              href="tel:9100752753"
              className="block w-full bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition duration-300 text-center shadow-md"
            >
              <span className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </span>
            </a>
            <button className="w-full bg-teal-500 text-white px-6 py-2.5 rounded-full hover:bg-teal-600 transition duration-300 shadow-md">
              <span className="flex items-center justify-center">
                <ScanLine className="w-4 h-4 mr-2" />
                24/7 CT & MRI Scans Available
              </span>
            </button>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;