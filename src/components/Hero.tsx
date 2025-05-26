import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle, Play } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const parallaxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        // Parallax effect for hero content
        gsap.to(parallaxRef.current, {
          y: scrollValue * 0.4,
          duration: 0.5,
          ease: 'power1.out',
        });

        // Scale video on scroll
        if (videoRef.current) {
          gsap.to(videoRef.current, {
            scale: 1 + scrollValue * 0.0005,
            duration: 0.5,
            ease: 'power1.out',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
          poster="https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        >
          <source src="https://player.vimeo.com/external/370331493.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a0e9e3686b4ea1&profile_id=175&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      {/* Hero Content */}
      <div 
        ref={parallaxRef}
        className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10"
      >
        <div 
          ref={ref}
          className={`max-w-3xl transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            Experience the Soul of 
            <span className="block text-primary">Portugal</span>
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed">
            Immerse yourself in centuries of history, breathtaking landscapes, and rich culture. 
            Your journey through time and tradition begins here.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#explore" className="btn btn-primary">
              Explore Destinations
            </a>
            <a href="#" className="btn btn-outline flex items-center gap-2">
              <Play size={16} />
              Watch Video
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#destinations" aria-label="Scroll down">
          <ArrowDownCircle className="text-white w-10 h-10" />
        </a>
      </div>
    </section>
  );
};