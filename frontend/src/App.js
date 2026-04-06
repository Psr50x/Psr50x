import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Regions from './components/Regions';
import Destinations from './components/Destinations';
import TourPackages from './components/TourPackages';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import Blog from './components/Blog';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PackageDetail from './pages/PackageDetail';
import ContactPage from './pages/ContactPage';

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Regions />
      <Destinations />
      <TourPackages />
      <Testimonials />
      <WhyUs />
      <Blog />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
