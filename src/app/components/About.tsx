import React, {useEffect, useRef, useState } from "react";
import { HomePageSlider } from './layout/widgets/sliders/HomePageSlider.tsx'

export default function About() {
    const lineRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!lineRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(lineRef.current);
    return () => obs.disconnect();
  }, []); 

  return (
    <>    
    {/* <HomePageSlider/> */}

     <section className="solutions-highlight py-5">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Left: Main Image */}
      <div className="col-12 col-lg-6 mb-4 mb-lg-0">
        <img 
          src="assets/elements/img/solar1.png" 
          alt="Willez Solutions" 
          className="img-fluid rounded shadow"
        />
      </div>

      {/* Right: Text + Two Images */}
      <div className="col-12 col-lg-6">
        <h2 className="fw-bold mb-3">
          Delivering Good Quality Products for the Country
        </h2>
        <p className="lead mb-4">
          We specialise in all electrical power supplies, reliable solar 
          solutions that combine efficiency, durability, installations and 
          innovation to power a brighter future. Our commitment is to bring 
          sustainable energy to communities nationwide.
        </p>

        {/* Small image aligned right */}
        <div className="text-end mb-3">
          <img 
            src="assets/elements/img/solar3.png" 
            alt="Supporting solar system small" 
            className="img-fluid rounded shadow-sm" 
            style={{ maxWidth: "220px" }}
          />
        </div>

        {/* Mid-sized image below */}
        <div>
          <img 
            src="assets/elements/img/solar2.png" 
            alt="Supporting solar system mid" 
            className="img-fluid rounded shadow-sm" 
            style={{ maxWidth: "380px" }}
          />
        </div>
      </div>

    </div>
  </div>
</section>

   

    <section className="teamup-section text-white">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left side: text */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">Working Together at Willez</h2>
            <p>
              At Willez, we believe in teaming up as one organisation to deliver
              excellence. From ideation to execution, our collaborative approach
              ensures that quality, sustainability, and innovation are at the
              heart of every product we make.
            </p>
          </div>

          {/* Right side: four staggered images */}
          <div className="col-12 col-lg-6">
            <div className="row image-grid">
              <div className="col-6 mb-3 mb-lg-0">
                <img
                  src="./assets/elements/img/working-together-1.jpg"
                  alt="Team Member 1"
                  className="img-fluid stagger-up rounded shadow-sm"
                />
              </div>
              <div className="col-6 mb-3 mb-lg-0">
                <img
                  src="./assets/elements/img/solar3.png"
                  alt="Team Member 2"
                  className="img-fluid stagger-down rounded shadow-sm"
                />
              </div>
              <div className="col-6 mt-lg-5">
                <img
                  src="./assets/elements/img/solar3.png"
                  alt="Team Member 3"
                  className="img-fluid stagger-down rounded shadow-sm"
                />
              </div>
              <div className="col-6 mt-lg-5">
                <img
                  src="./assets/elements/img/team-work-2.jpg"
                  alt="Team Member 4"
                  className="img-fluid-one stagger-up rounded
                   shadow-sm mg-fluid position-absolute bottom-0 start-0"
                />
              </div>
            </div>
            
            <div
              className={`line-wrapper mt-3 ${animate ? "animate" : ""}`}
              ref={lineRef}
              aria-hidden="true"
            >
              <div className="about-line-slant-1"></div> 
              <div className="about-line-slant-2"></div>
              <div className="vertical-line-about-2"></div>
              <div className="line-container-about">
              <div className="about-line-slant-down-2"></div>
              <div className="vertical-line-about"></div>
              <div className="about-line-slant-down-1"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="py-5 bg-light text-dark">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Our Purpose & Vision</h2>
        <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
          At Willez, our purpose is to empower communities with reliable, 
          sustainable, and innovative energy solutions.  
          <br />
          Our vision is to lead the way in transforming the energy landscape,
          ensuring a brighter and greener future for generations to come.
        </p>
      </div>
    </section>

    <section
      className="parallax-section text-center text-white d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('assets/elements/img/solar-roof.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // makes the background "stay" while scrolling
        minHeight: "90vh",
        }}
      >
        <div className="container">
        <h1 className="display-4 fw-bold mb-3">A Class & Market-Certified Solution</h1>
        <p className="lead mb-0">
          High-performance solar technology designed for modern energy needs.
        </p>
      </div>
    </section>
       
    </>
  )
}
