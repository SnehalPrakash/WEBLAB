import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Globe, Navigation } from 'lucide-react';

export const ExploreMap: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    if (inView && !isMapLoaded) {
      // Dynamic import of Leaflet when section is in view
      import('leaflet').then(() => {
        import('react-leaflet').then(({ MapContainer, TileLayer, Marker, Popup }) => {
          setIsMapLoaded(true);
        });
      });
    }
  }, [inView, isMapLoaded]);

  return (
    <section id="explore" className="py-24 bg-gradient-to-br from-secondary/90 to-secondary scroll-snap-section">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Globe className="text-accent mr-2" size={16} />
              <span className="text-white font-medium">Interactive Exploration</span>
            </div>
            <h2 className="section-title text-white mb-6">Discover Portugal's Treasures</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Navigate through an interactive map of Portugal's diverse regions. 
              Uncover hidden gems and plan your perfect itinerary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="map-container h-[500px]">
                {/* Map placeholder - will be replaced with actual Leaflet map when component is mounted */}
                <div className="w-full h-full bg-secondary/50 flex items-center justify-center relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2246809/pexels-photo-2246809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Map of Portugal"
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="text-center z-10">
                    <Navigation className="text-white/60 w-16 h-16 mx-auto mb-4" />
                    <p className="text-white font-medium">Interactive map loading...</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="glass rounded-xl p-6 h-full">
                <h3 className="font-heading text-white text-2xl font-bold mb-4">Plan Your Journey</h3>
                <p className="text-white/80 mb-6">
                  Click on the map to discover different regions of Portugal. Each marker reveals local attractions, 
                  activities, and cultural highlights.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-heading text-white text-lg font-semibold mb-2">Northern Region</h4>
                    <p className="text-white/70 text-sm">
                      Porto, Douro Valley, Braga, and Guimarães. Known for port wine, historic sites, and lush landscapes.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-heading text-white text-lg font-semibold mb-2">Central Region</h4>
                    <p className="text-white/70 text-sm">
                      Coimbra, Aveiro, Nazaré, and Serra da Estrela. Universities, beaches, and Portugal's highest mountains.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-heading text-white text-lg font-semibold mb-2">Lisbon Region</h4>
                    <p className="text-white/70 text-sm">
                      Lisbon, Sintra, Cascais, and Arrábida. The capital, palaces, coastal towns, and natural parks.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-heading text-white text-lg font-semibold mb-2">Southern Region</h4>
                    <p className="text-white/70 text-sm">
                      Algarve, Alentejo, Évora, and Comporta. Beautiful beaches, historic cities, and rural tranquility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};