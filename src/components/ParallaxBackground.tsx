import React, { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  imageUrl: string;
  speed?: number;
  overlay?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  imageUrl, 
  speed = 0.5, 
  overlay = true,
  children,
  className = '',
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollTop = window.scrollY;
      const elementTop = parallaxRef.current.offsetTop;
      const elementHeight = parallaxRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in viewport
      if (
        scrollTop + windowHeight > elementTop &&
        scrollTop < elementTop + elementHeight
      ) {
        const yPos = (scrollTop - elementTop) * speed;
        parallaxRef.current.style.backgroundPosition = `center ${yPos}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={parallaxRef}
      className={`relative bg-no-repeat bg-cover ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {overlay && <div className="absolute inset-0 bg-black/40"></div>}
      <div className="relative z-10">{children}</div>
    </div>
  );
};