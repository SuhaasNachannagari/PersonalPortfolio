import React, { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { words } from '../constants';
import Button from '../components/Button';
import HeroExperience from '../components/HeroModels/HeroExperience';
import AnimatedCounter from '../components/AnimatedCounter';

const Hero = () => {
  const container = useRef();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait for all hero images to load before animating
    const imgs = Array.from(document.querySelectorAll(".hero-text img"));
    if (imgs.length === 0) {
      setReady(true);
      return;
    }

    let loadedCount = 0;
    imgs.forEach((img) => {
      if (img.complete) {
        loadedCount++;
        if (loadedCount === imgs.length) setReady(true);
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imgs.length) setReady(true);
        };
      }
    });
  }, []);

  useGSAP(() => {
    if (!ready) return;

    gsap.fromTo(
      container.current.querySelectorAll("h1"),
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.4,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  }, [ready]);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout" ref={container}>
        {/* your content stays the same */}
      </div>
    </section>
  );
};

export default Hero;
