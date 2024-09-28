import React from 'react';
import HeroSection from '../components/HeroSection';
import EventsSection from '../components/EventsSection(HOME)';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <div>
          <Navbar />
      <HeroSection />
      <EventsSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    
    </div>
  );
};

export default Home;
