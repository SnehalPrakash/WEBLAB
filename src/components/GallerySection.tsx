import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Camera } from 'lucide-react';
import gsap from 'gsap';

// Gallery images
const galleryImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Porto',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Lisbon',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/7676307/pexels-photo-7676307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Alfama',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/2246809/pexels-photo-2246809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Algarve',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/11101376/pexels-photo-11101376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Porto',
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/15956383/pexels-photo-15956383/free-photo-of-street-festival-in-portugal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Óbidos',
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/7446627/pexels-photo-7446627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Madeira',
  },
  {
    id: 8,
    url: 'https://images.pexels.com/photos/8965457/pexels-photo-8965457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Douro Valley',
  },
];

export const GallerySection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && galleryRef.current) {
      const images = galleryRef.current.querySelectorAll('.gallery-item');
      
      gsap.fromTo(
        images,
        { 
          opacity: 0,
          y: 30,
        },
        { 
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, [inView]);

  return (
    <section className="py-24 bg-gradient-to-br from-black to-secondary/90 scroll-snap-section">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Camera className="text-primary mr-2" size={16} />
              <span className="text-white font-medium">Visual Journey</span>
            </div>
            <h2 className="section-title text-white mb-6">Portugal Through The Lens</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Capture the essence of Portugal's breathtaking landscapes, vibrant culture, and historic charm.
            </p>
          </div>

          <div 
            ref={galleryRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {galleryImages.map((image, index) => (
              <GalleryItem 
                key={image.id}
                image={image}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface GalleryImage {
  id: number;
  url: string;
  location: string;
}

interface GalleryItemProps {
  image: GalleryImage;
  index: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className={`gallery-item opacity-0 aspect-square relative overflow-hidden rounded-lg cursor-pointer ${
        index === 0 || index === 3 || index === 4 || index === 7 ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image.url} 
        alt={`Portugal - ${image.location}`}
        className={`w-full h-full object-cover transition-transform duration-700 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />
      <div className={`absolute inset-0 bg-black/50 flex items-end transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="p-4">
          <h4 className="font-heading text-white text-xl font-bold">{image.location}</h4>
        </div>
      </div>
    </div>
  );
};