import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, PlaneTakeoff } from 'lucide-react';

interface FormState {
  destination: string;
  dates: string;
  travelers: string;
  interests: string[];
}

export const PlanTripSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formState, setFormState] = useState<FormState>({
    destination: '',
    dates: '',
    travelers: '',
    interests: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormState((prev) => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter((interest) => interest !== value) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a backend
    alert('Your trip planning request has been submitted!');
  };

  const interests = [
    'History & Culture', 'Food & Wine', 'Beaches & Nature', 'Adventure', 'City Exploration'
  ];

  return (
    <section id="plan" className="py-24 bg-gradient-to-br from-primary/90 to-primary scroll-snap-section">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <PlaneTakeoff className="text-white mr-2" size={16} />
              <span className="text-white font-medium">Travel Planning</span>
            </div>
            <h2 className="section-title text-white mb-6">Plan Your Portuguese Adventure</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Let us help you create the perfect Portugal itinerary tailored to your interests,
              timeframe, and travel style.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-xl p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="destination" className="block text-white font-medium mb-2 flex items-center">
                      <MapPin className="mr-2" size={16} />
                      Destination
                    </label>
                    <select 
                      id="destination" 
                      name="destination"
                      value={formState.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    >
                      <option value="" disabled>Select a region</option>
                      <option value="all">All Portugal</option>
                      <option value="lisbon">Lisbon & Surroundings</option>
                      <option value="porto">Porto & North</option>
                      <option value="algarve">Algarve</option>
                      <option value="madeira">Madeira</option>
                      <option value="azores">Azores</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="dates" className="block text-white font-medium mb-2 flex items-center">
                      <Calendar className="mr-2" size={16} />
                      Travel Dates
                    </label>
                    <input 
                      type="text" 
                      id="dates" 
                      name="dates"
                      placeholder="When are you planning to visit?"
                      value={formState.dates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="travelers" className="block text-white font-medium mb-2 flex items-center">
                      <Users className="mr-2" size={16} />
                      Number of Travelers
                    </label>
                    <select 
                      id="travelers" 
                      name="travelers"
                      value={formState.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    >
                      <option value="" disabled>Select number of travelers</option>
                      <option value="1">1 traveler</option>
                      <option value="2">2 travelers</option>
                      <option value="3-4">3-4 travelers</option>
                      <option value="5+">5+ travelers</option>
                    </select>
                  </div>
                  
                  <div>
                    <p className="text-white font-medium mb-2">Interests</p>
                    <div className="grid grid-cols-2 gap-2">
                      {interests.map((interest) => (
                        <div key={interest} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={`interest-${interest}`}
                            name="interests"
                            value={interest}
                            onChange={handleCheckboxChange}
                            className="mr-2 h-4 w-4"
                          />
                          <label htmlFor={`interest-${interest}`} className="text-white/90 text-sm">
                            {interest}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Additional Requests
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    placeholder="Tell us about any special requests or interests for your trip..."
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/50"
                  ></textarea>
                </div>
                
                <div className="mt-8 text-center">
                  <button 
                    type="submit"
                    className="btn btn-outline hover:bg-white hover:text-primary"
                  >
                    Plan My Adventure
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};