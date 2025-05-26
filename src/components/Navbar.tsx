import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md text-text py-3' 
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <MapPin className="text-white" size={20} />
          </div>
          <span className="font-heading text-2xl font-bold">Discover Portugal</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#destinations" className="font-medium hover:text-primary transition-colors">Destinations</a>
          <a href="#explore" className="font-medium hover:text-primary transition-colors">Explore</a>
          <a href="#experiences" className="font-medium hover:text-primary transition-colors">Experiences</a>
          <a href="#culture" className="font-medium hover:text-primary transition-colors">Culture</a>
          <a href="#plan" className="btn btn-primary">Plan Your Trip</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <div className="flex items-center gap-2">
            <Globe className="text-primary" size={24} />
            <span className="font-heading text-xl font-bold text-text">Menu</span>
          </div>
          <button onClick={toggleMenu} className="text-text">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-5 gap-4">
          <a 
            href="#destinations" 
            className="py-3 px-4 text-text hover:bg-gray-100 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            Destinations
          </a>
          <a 
            href="#explore" 
            className="py-3 px-4 text-text hover:bg-gray-100 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            Explore
          </a>
          <a 
            href="#experiences" 
            className="py-3 px-4 text-text hover:bg-gray-100 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            Experiences
          </a>
          <a 
            href="#culture" 
            className="py-3 px-4 text-text hover:bg-gray-100 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            Culture
          </a>
          <a 
            href="#plan" 
            className="btn btn-primary mt-4"
            onClick={toggleMenu}
          >
            Plan Your Trip
          </a>
        </nav>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};