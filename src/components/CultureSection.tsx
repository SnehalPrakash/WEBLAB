import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, Music, Paintbrush } from 'lucide-react';
import gsap from 'gsap';

export const CultureSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && titleRef.current) {
      // Animate the title letters
      const letters = titleRef.current.textContent?.split('') || [];
      
      // Clear the content and replace with individual spans
      titleRef.current.textContent = '';
      
      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        titleRef.current?.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.03 * index,
        });
      });
    }
  }, [inView]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const scrollPosition = window.scrollY;
        const containerOffset = container.offsetTop;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition + windowHeight > containerOffset) {
          const scrollPercent = (scrollPosition + windowHeight - containerOffset) / (container.offsetHeight + windowHeight) * 100;
          container.style.setProperty('--scroll', `${Math.min(scrollPercent, 100)}%`);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="culture" className="py-24 bg-gradient-to-br from-wine to-wine/90 scroll-snap-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Heart className="text-primary mr-2" size={16} />
            <span className="text-white font-medium">The Heart of Portugal</span>
          </div>
          <h2 
            ref={titleRef} 
            className="section-title text-white mb-6"
          >
            Rich Cultural Heritage
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Portugal's soul is expressed through its traditions, art, music, and people. 
            Explore the cultural tapestry that makes this country so special.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="relative"
          style={{
            '--scroll': '0%',
          } as React.CSSProperties}
        >
          <div 
            className="absolute top-0 left-0 h-full w-1 bg-white/20 rounded-full"
          >
            <div 
              className="bg-primary h-[var(--scroll)] w-full rounded-full transition-all duration-300"
            ></div>
          </div>

          <div className="space-y-24 pl-10">
            <CultureItem 
              title="Fado Music"
              description="Experience the soulful sounds of fado, Portugal's traditional music that expresses 'saudade' – a deep longing and melancholy. UNESCO recognized fado as part of the Intangible Cultural Heritage of Humanity."
              image="https://images.pexels.com/photos/7676307/pexels-photo-7676307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              icon={<Music />}
              index={0}
            />
            
            <CultureItem 
              title="Azulejo Tiles"
              description="Marvel at the intricate blue and white ceramic tiles that adorn buildings throughout Portugal. These azulejos tell stories of history, religion, and culture, and have been a decorative tradition since the 13th century."
              image="https://images.pexels.com/photos/11101376/pexels-photo-11101376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              icon={<Paintbrush />}
              index={1}
              imageRight
            />
            
            <CultureItem 
              title="Festivals & Traditions"
              description="Join the celebration of Portugal's vibrant festivals that blend religious traditions with communal joy. From colorful street parades to somber processions, these events showcase Portugal's rich cultural identity."
              image="https://images.pexels.com/photos/15956383/pexels-photo-15956383/free-photo-of-street-festival-in-portugal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              icon={<Heart />}
              index={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface CultureItemProps {
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  index: number;
  imageRight?: boolean;
}

const CultureItem: React.FC<CultureItemProps> = ({ 
  title, 
  description, 
  image, 
  icon,
  index,
  imageRight = false 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 150 * index,
  });

  return (
    <div 
      ref={ref}
      className={`relative transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute -left-14 top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
        {icon}
      </div>
      
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
        imageRight ? 'lg:flex-row-reverse' : ''
      }`}>
        <div className={imageRight ? 'lg:order-2' : ''}>
          <h3 className="font-heading text-white text-3xl font-bold mb-4">{title}</h3>
          <p className="text-white/80 text-lg leading-relaxed">
            {description}
          </p>
        </div>
        <div className={imageRight ? 'lg:order-1' : ''}>
          <div className="rounded-xl overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};