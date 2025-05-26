import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Wine, Utensils, Waves, Mountain } from 'lucide-react';
import { ParallaxBackground } from './ParallaxBackground';

// Experience data
const experiences = [
  {
    id: 1,
    title: 'Wine Tasting',
    description: 'Sample world-class wines in centuries-old vineyards across Portugal\'s diverse wine regions.',
    icon: <Wine className="w-10 h-10" />,
    color: 'bg-wine',
  },
  {
    id: 2,
    title: 'Culinary Journeys',
    description: 'Discover Portugal\'s rich gastronomy from fresh seafood to pastéis de nata and hearty stews.',
    icon: <Utensils className="w-10 h-10" />,
    color: 'bg-primary',
  },
  {
    id: 3,
    title: 'Coastal Adventures',
    description: 'Experience world-class surfing, sailing, and beach relaxation along Portugal\'s stunning coastline.',
    icon: <Waves className="w-10 h-10" />,
    color: 'bg-ocean',
  },
  {
    id: 4,
    title: 'Nature Escapes',
    description: 'Hike dramatic mountain ranges, explore natural parks, and discover breathtaking landscapes.',
    icon: <Mountain className="w-10 h-10" />,
    color: 'bg-forest',
  },
];

export const ExperiencesSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experiences" className="py-24 scroll-snap-section">
      <ParallaxBackground 
        imageUrl="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        speed={0.3}
        className="py-24"
      >
        <div className="container mx-auto px-4">
          <div 
            ref={ref}
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="section-title text-white mb-6">Unforgettable Experiences</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                Immerse yourself in Portugal's most captivating activities and adventures. 
                Create memories that will last a lifetime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experiences.map((experience, index) => (
                <ExperienceCard 
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href="#plan" className="btn btn-primary">
                Book an Experience
              </a>
            </div>
          </div>
        </div>
      </ParallaxBackground>
    </section>
  );
};

interface Experience {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 150 * index,
  });

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="glass rounded-xl p-6 h-full group hover:translate-y-[-10px] transition-all duration-500">
        <div className={`${experience.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-all duration-300`}>
          {experience.icon}
        </div>
        <h3 className="font-heading text-white text-xl font-bold mb-4">{experience.title}</h3>
        <p className="text-white/80">
          {experience.description}
        </p>
      </div>
    </div>
  );
};