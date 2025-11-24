import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HomePageSlider() {
    
    const images = [
    "assets/elements/img/hero1.jpg",
    "assets/elements/img/hero2.jpg",
    "assets/elements/img/hero3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    
        <section
      className="hero-slider d-flex align-items-center text-center text-white"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      <div className="container position-relative z-2">
        <h1 className="display-4 fw-bold">Powering a Brighter Future</h1>
        <p className="lead mb-4">
          High-efficiency solar, smart storage & reliable engineering
        </p>
        <button className="btn btn-primary btn-lg">Get in Touch</button>
      </div>
    </section>

    </>
  );
  
};
