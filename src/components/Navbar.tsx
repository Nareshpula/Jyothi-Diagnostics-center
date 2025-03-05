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
      { label: 'Digital X-rays', path: '/digital-xrays' },
      { label: 'Pregnancy Scans', path: '/ultrasound-pregnancy-scanning' },
      { label: 'Ultrasound & Color Doppler', path: '/ultrasound-scanning' },
      { label: 'CT Scan', path: '/ct-scan' },
      { label: '3.0 Tesla Open Flare MRI', path: '/tesla-mri-scan' }
    ]
  },
  { path: '/doctors', label: 'Doctors' },
  { path: '#contact-form', label: 'Appointments & Queries' },
  { path: '#visit-us', label: 'Visit Us' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isTransparentPage = ['/', '/about', '/ultrasound-pregnancy-scanning', '/digital-xrays', '/ct-scan', '/ultrasound-scanning', '/tesla-mri-scan'].includes(location.pathname);
  
  const handleVisitUsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const visitUsSection = document.getElementById('visit-us');
    
    if (location.pathname === '/') {
      // If we're on the home page, smooth scroll to the section
      visitUsSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on another page, navigate to home and then scroll
      window.location.href = '/#visit-us';
    }
    
    setIsOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-form');
    
    if (location.pathname === '/') {
      // If we're on the home page, smooth scroll to the section
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on another page, navigate to home and then scroll
      window.location.href = '/#contact-form';
    }
    
    setIsOpen(false);
  };

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
      isScrolled ? 'bg-white shadow-lg' : isTransparentPage ? 'bg-transparent' : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`flex justify-between items-center h-24 ${
          isScrolled || !isTransparentPage ? 'border-b border-gray-200/50' : 'border-b border-black/20'
        }`}>
          <Link to="/" className="flex items-center gap-4 flex-1 group">
            <div className="relative w-auto h-16 flex items-center">
              <img 
                src="https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/Jyohi-diagnostics-logo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL0p5b2hpLWRpYWdub3N0aWNzLWxvZ28uc3ZnIiwiaWF0IjoxNzQxMDc5MjgzLCJleHAiOjE4OTg3NTkyODN9.3-uIY78ikzZkxuKgYiDzssJqw2ErUA7SoXx2AnpkH-U"
                alt="Jyothi Diagnostics Logo"
                className="h-full w-auto object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h1 className={`font-['Montserrat'] text-lg md:text-xl font-bold tracking-wide drop-shadow-sm ${
                isScrolled || !isTransparentPage ? 'text-[#685392]' : 'text-[#685392]'
              }`}>
                Jyothi Diagnostics
              </h1>
              <p className={`font-['Open_Sans'] text-xs md:text-sm font-light mt-0.5 ${
                isScrolled || !isTransparentPage ? 'text-[#7e3a93]' : 'text-[#7e3a93]'
              }`}>
                The Best Comprehensive Diagnostics
              </p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search Scan's, Services"
                className={`pl-10 pr-4 py-2 rounded-full w-44 focus:w-56 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6f42c1] ${
                  isScrolled || !isTransparentPage ? 'bg-white shadow-sm border border-gray-200 text-black placeholder-gray-500' : 'bg-white/90 border-none text-gray-700 placeholder-gray-500'
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
              className={`p-2 ${isScrolled || !isTransparentPage ? 'text-black hover:text-gray-700' : 'text-white hover:text-white/80'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <div className={`hidden md:block py-4 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        } ${isScrolled ? 'border-t border-gray-200/50' : 'border-t border-black/20'}`}>
          <ul className="flex justify-center space-x-8">
            {menuItems.map((item, index) => {
              const isTransparentNavPage = ['/', '/about', '/ultrasound-pregnancy-scanning', '/digital-xrays', '/ct-scan', '/ultrasound-scanning', '/tesla-mri-scan'].includes(location.pathname);
              const isActive = location.pathname === item.path;
              return (
                <li 
                  key={index} 
                  className={`group relative ${
                    isActive ? 'text-blue-600' : ''
                  }`}
                >
                  {item.dropdown ? (
                    <>
                      <a 
                        href={item.path} 
                       className="font-medium transition-colors text-black hover:text-gray-600 cursor-pointer relative pb-2"
                       onClick={(e) => e.preventDefault()}
                      >
                        {item.label}
                        <span className="ml-1">▼</span>
                      </a>
                     <ul className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full w-64 bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-300 ease-in-out">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <li key={dropIndex}>
                            <Link 
                              to={dropItem.path}
                              onClick={handleMenuClick}
                             className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#dfcde7] transition-all duration-300 hover:translate-x-2"
                            >
                              {dropItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link 
                      to={item.path} 
                      className={`font-medium transition-colors ${
                        'text-black hover:text-gray-600'
                      }`}
                      onClick={
                        item.path === '#visit-us' ? handleVisitUsClick :
                        item.path === '#contact-form' ? handleContactClick :
                        handleMenuClick
                      }
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
        isScrolled || !isTransparentPage ? 'bg-white/95' : 'bg-white/90'
      }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => {
              if (item.dropdown) {
                return (
                  <div key={index}>
                    <div className="px-3 py-2 text-gray-900 font-medium">{item.label}</div>
                    <div className="pl-6">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={dropItem.path}
                          className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                          onClick={handleMenuClick}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`block px-3 py-2 hover:bg-gray-100 rounded-md ${
                    location.pathname === item.path 
                      ? 'text-blue-600'
                      : 'text-gray-900'
                  }`}
                  onClick={
                    item.path === '#visit-us' ? handleVisitUsClick :
                    item.path === '#contact-form' ? handleContactClick :
                    handleMenuClick
                  }
                >{item.label}</Link>
              );
            })}
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