import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import CTScan from './pages/CTScan';
import DigitalXrays from './pages/DigitalXrays.tsx';
import UltrasoundPregnancyScanning from './pages/UltrasoundPregnancyScanning';
import UltrasoundScanning from './pages/UltrasoundScanning';
import TeslaMriScan from './pages/TeslaMriScan';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/ct-scan" element={<CTScan />} />
          <Route path="/digital-xrays" element={<DigitalXrays />} />
          <Route path="/ultrasound-pregnancy-scanning" element={<UltrasoundPregnancyScanning />} />
          <Route path="/ultrasound-scanning" element={<UltrasoundScanning />} />
          <Route path="/tesla-mri-scan" element={<TeslaMriScan />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
