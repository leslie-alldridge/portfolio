import React, { useState } from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import { Containers } from '../components/Info/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      {Containers.map((container) => (
        <Info {...container} />
      ))}
      <Services />
    </>
  );
};

export default Home;
