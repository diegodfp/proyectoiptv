import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Slidert from './components/Slidert';
const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slidert></Slidert>
      <Plans />
      <WhyUs />
      <Reviews />
      <Contact />
    </div>
  );
};

export default App;
