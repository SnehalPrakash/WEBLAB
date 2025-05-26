import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 100 * index,
  });

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div 
        className="glass rounded-xl overflow-hidden group cursor-pointer transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden h-64">
          <img 
            src={destination.image} 
            alt={destination.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="font-heading text-white text-2xl font-bold mb-1">{destination.name}</h3>
            <div className="flex gap-2 mb-2">
              {destination.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-white/90 mb-4">
            {destination.description}
          </p>
          <a
            href="#"
            className={`inline-flex items-center text-accent font-medium transition-all duration-300 ${
              isHovered ? 'translate-x-1' : 'translate-x-0'
            }`}
          >
            Discover more
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};