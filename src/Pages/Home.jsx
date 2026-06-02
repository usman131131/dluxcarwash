import React, { useState, useEffect } from "react";
import SEO from "../components/layout/SEO";
import Hero from "../components/Home/Hero";
import Marquee from "../components/Home/Marquee";
import Availability from "../components/Home/Availability";
import Cafe from "../components/Home/Cafe";
import Socials from "../components/Home/Socials";
import Contact from "../components/Home/Map";
import ServiceShowcase from "../components/Home/ServiceGateway";
import { SHOWCASE_DATA } from "../data/home/content";
import Reviews from "../components/Home/Reviews";

const Home = () => {
  const [isReady, setIsReady] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 1. Trigger the Hero Reveal animation immediately
    setLoaded(true);

    // 2. Delay mounting heavy sections (Video/Map) until Page Transition finishes
    // This prevents the "Curtain" animation from stuttering
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 800); // 800ms matches the duration of the AnimatedPage curtain

    return () => clearTimeout(timer);
  }, []);

  // While waiting for transition, render a placeholder to keep background dark
  if (!isReady) {
    return <div className="min-h-screen bg-accent"></div>;
  }

  return (
    <main className="bg-accent text-dark font-sans antialiased selection:bg-primary selection:text-secondary overflow-x-hidden w-full relative">
        <SEO 
        title="Dlux Car Care"
        description="DLUX offers expert hand car wash, paint correction, ceramic coating, and mobile detailing services in Yarraville, Melbourne. 100% hand wash guarantee."
        path="/"
      />
      <Hero loaded={loaded} />
      <Marquee /> 

      {SHOWCASE_DATA.map((item, index) => (
        <ServiceShowcase key={item.id} data={item} index={index} />
      ))}

      <Availability />
      <Socials />
      <Cafe />
      <Reviews />
      <Contact />
      
    </main>
  );
};

export default Home;