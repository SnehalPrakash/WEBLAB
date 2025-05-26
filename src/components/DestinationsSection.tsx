import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, MapPin } from 'lucide-react';
import { ParallaxBackground } from './ParallaxBackground';
import { DestinationCard } from './DestinationCard';

// Destination data
const destinations = [
  {
    id: 1,
    name: 'Lisbon',
    description: 'Historic capital with stunning views, colorful streets, and vibrant culture.',
    image: 'https://images.pexels.com/photos/13902656/pexels-photo-13902656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['City', 'History', 'Food'],
  },
  {
    id: 2,
    name: 'Porto',
    description: 'Riverside charm with port wine cellars, medieval districts, and artistic spirit.',
    image: 'https://images.pexels.com/photos/2549150/pexels-photo-2549150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['City', 'Wine', 'Architecture'],
  },
  {
    id: 3,
    name: 'Algarve',
    description: 'Stunning beaches, dramatic cliffs, and picturesque fishing villages along the coast.',
    image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Beach', 'Nature', 'Relaxation'],
  },
  {
    id: 4,
    name: 'Douro Valley',
    description: 'UNESCO-listed wine region with terraced vineyards and breathtaking landscapes.',
    image: 'https://images.pexels.com/photos/8965457/pexels-photo-8965457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Wine', 'Nature', 'Countryside'],
  },
  {
    id: 5,
    name: 'Sintra',
    description: 'Fairytale palaces, lush forests, and mystical atmosphere in this UNESCO site.',
    image: 'https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['History', 'Nature', 'Architecture'],
  },
  {
    id: 6,
    name: 'Madeira',
    description: 'Lush "floating garden" with dramatic landscapes, hiking trails, and mild climate.',
    image: 'https://images.pexels.com/photos/7446627/pexels-photo-7446627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Island', 'Nature', 'Adventure'],
  },
];

export const DestinationsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="destinations" className="py-20 relative scroll-snap-section">
      <ParallaxBackground 
        imageUrl="https://images.pexels.com/photos/15009203/pexels-photo-15009203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        speed={0.3}
        className="py-24"
      >
        <div className="container mx-auto px-4">
          <div 
            ref={ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <MapPin className="text-primary mr-2" size={16} />
              <span className="text-white font-medium">Explore Top Destinations</span>
            </div>
            <h2 className="section-title text-white mb-6">Where Will You Go?</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              From historic cities to coastal wonders, Portugal offers diverse experiences. 
              Discover each region's unique charm and character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard 
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="#explore" 
              className="inline-flex items-center text-white font-medium hover:text-primary transition-colors"
            >
              Explore more destinations 
              <ExternalLink className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </ParallaxBackground>
    </section>
  );
};