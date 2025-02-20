import React from 'react';
import Hero from '../components/Hero';
import OrganTests from '../components/OrganTests';
import Services from '../components/Services';
import MriTesla from '../components/MriTesla';
import UltrasoundServices from '../components/UltrasoundServices';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <OrganTests />
      <Services />
      <MriTesla />
      <UltrasoundServices />
      <WhyChooseUs />
      <Contact />
    </>
  );
};

export default Home;