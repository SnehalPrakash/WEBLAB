import React, { useState, useEffect } from 'react';
import { MapPin, Wine, Camera, Globe, PlaneTakeoff } from 'lucide-react';

const navItems = [
  { id: 'destinations', icon: <MapPin size={20} />, label: 'Destinations' },
  { id: 'explore', icon: <Globe size={20} />, label: 'Explore Map' },
  { id: 'experiences', icon: <Wine size={20} />, label: 'Experiences' },
  { id: 'culture', icon: <Camera size={20} />, label: 'Culture' },
  { id: 'plan', icon: <PlaneTakeoff size={20} />, label: 'Plan Trip' },
];

export const FloatingNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showLabels, setShowLabels] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find which section we're currently viewing
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          return { id: item.id, top, bottom: top + height };
        }
        return null;
      }).filter(Boolean);
      
      // Set the active section based on scroll position
      for (const section of sections) {
        if (section && scrollPosition >= section.top && scrollPosition <= section.bottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30"
      onMouseEnter={() => setShowLabels(true)}
      onMouseLeave={() => setShowLabels(false)}
    >
      <div className="glass rounded-full py-4 px-2">
        <nav className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative group flex items-center ${
                activeSection === item.id
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }`}
              aria-label={item.label}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                activeSection === item.id
                  ? 'bg-white text-primary'
                  : 'bg-white/10 text-white group-hover:bg-white/30'
              }`}>
                {item.icon}
              </div>
              
              <div className={`absolute right-full mr-4 whitespace-nowrap bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg transition-all duration-300 ${
                showLabels
                  ? 'opacity-100 -translate-x-0'
                  : 'opacity-0 translate-x-3 pointer-events-none'
              }`}>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};