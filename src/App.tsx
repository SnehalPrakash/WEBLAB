import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationsSection } from './components/DestinationsSection';
import { ExploreMap } from './components/ExploreMap';
import { ExperiencesSection } from './components/ExperiencesSection';
import { CultureSection } from './components/CultureSection';
import { GallerySection } from './components/GallerySection';
import { PlanTripSection } from './components/PlanTripSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingNavigation } from './components/FloatingNavigation';

function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <FloatingNavigation />
      <main>
        <Hero />
        <DestinationsSection />
        <ExploreMap />
        <ExperiencesSection />
        <CultureSection />
        <GallerySection />
        <PlanTripSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;