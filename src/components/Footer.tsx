import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={20} />
              </div>
              <span className="font-heading text-2xl font-bold">Discover Portugal</span>
            </div>
            <p className="text-white/70 mb-6">
              Your gateway to authentic Portuguese experiences. 
              We curate immersive journeys that showcase the soul of Portugal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="#destinations" className="text-white/70 hover:text-primary transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#experiences" className="text-white/70 hover:text-primary transition-colors">Experiences</a>
              </li>
              <li>
                <a href="#culture" className="text-white/70 hover:text-primary transition-colors">Culture</a>
              </li>
              <li>
                <a href="#plan" className="text-white/70 hover:text-primary transition-colors">Plan Your Trip</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">Travel Guide</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-primary mt-1" size={18} />
                <span className="text-white/70">Rua Augusta 123, Lisbon, Portugal</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-primary" size={18} />
                <a href="mailto:info@discoverportugal.com" className="text-white/70 hover:text-primary transition-colors">
                  info@discoverportugal.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-primary" size={18} />
                <a href="tel:+351123456789" className="text-white/70 hover:text-primary transition-colors">
                  +351 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Discover Portugal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};