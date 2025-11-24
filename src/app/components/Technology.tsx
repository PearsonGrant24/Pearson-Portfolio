import React, {useEffect, useRef, useState } from "react";
import { HomePageSlider } from './layout/widgets/sliders/HomePageSlider.tsx'

const panels = [
  { id: "01", src: "./assets/elements/img/BackGSolar.jpeg", title: "Solar Innovation", text: "High-efficiency panels." },
  { id: "02", src: "./assets/elements/img/BackGSolar.jpeg", title: "Smart Storage", text: "Reliable battery solutions." },
  { id: "03", src: "./assets/elements/img/BackGSolar.jpeg", title: "Wiring Expertise", text: "Safe wiring & rewiring." },
  { id: "04", src: "./assets/elements/img/BackGSolar.jpeg", title: "Systems & Support", text: "Full system supply & fix." },
];


export default function Technology() {
 

  return (
    <>    
    {/* <HomePageSlider/> */}

     <section className="py-5">
      <div className="container">
        <div className="container text-center mb-5">
        <h2 className="fw-bold">Acquire</h2>
        <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
          Our proprietary AI and ML algorithms analyze large-scale data with speed and have the ability to ingest existing data
          from multiple sources, integrating sensors into mobility platforms, giving asset teams intelligence that they never
          thought possible.
        </p>
      </div>

        {/* panels row */}
        <div className="reveal-row d-flex w-100">
          {panels.map((p) => (
            <div
              key={p.id}
              className="panel"
              tabIndex="0"
              role="button"
              aria-label={`${p.title} - ${p.text}`}
              style={{ backgroundImage: `url(${p.src})` }}
            >
              <div className="panel-overlay">
                <div className="panel-number">{p.id}</div>
                <div className="panel-content">
                  <h5 className="mb-1">{p.title}</h5>
                  <p className="mb-0 small">{p.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-5 bg-light">
      <div className="container text-center mb-5">
        <h2 className="fw-bold">Analyze</h2>
        <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
          The future of energy lies in data-driven insights and advanced
          analytics. At Willez, we analyze energy consumption and solar
          efficiency to deliver smarter, greener solutions for tomorrow.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center g-4">
          {/* Card 1 */}
          <div className="col-md-6">
            <div className="card shadow-lg h-100 d-flex flex-row align-items-center">
              <div className="card-img-left">
                <img
                  src="./assets/elements/img/double-harvest-vertica-2.jpg"
                  alt="Energy Insights"
                  className="img-fluid"
                  style={{ width: "250px", height: "250px", objectFit: "cover" }}
                />
              </div>
              <div className="card-body text-start bg-white">
                <h5 className="card-title fw-bold">Energy Insights</h5>
                <p className="card-text">
                  Harnessing the power of analytics to optimize energy
                  production and consumption, ensuring efficiency across all
                  levels.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="card shadow-lg h-100 d-flex flex-row align-items-center">
              <div className="card-img-left">
                <img
                  src="./assets/elements/img/solar1.jpeg"
                  alt="Smart Monitoring" 
                  className="img-fluid"
                  style={{ width: "250px", height: "250px", objectFit: "cover" }}
                />
              </div>
              <div className="card-body text-start bg-white">
                <h5 className="card-title fw-bold">Smart Monitoring</h5>
                <p className="card-text">
                  Using IoT and AI-powered monitoring systems to provide
                  real-time insights, reducing costs and boosting reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5 bg-light">
      <div className="container text-center mb-5">
        <h2 className="fw-bold">Act</h2>
        <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
         Assets are visualized in the way you need, from digital twins and 3D, to map and spherical views, and
actionable insight reports are generated, supporting preventative maintenance programs
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center g-4">
          {/* Card 1 */}
          <div className="col-md-6">
            <div className="card shadow-lg h-100 d-flex flex-row align-items-center">
              <div className="card-img-left">
                <img
                  src="./assets/elements/img/double-harvest-vertica-2.jpg"
                  alt="Energy Insights"
                  className="img-fluid"
                  style={{ width: "250px", height: "250px", objectFit: "cover" }}
                />
              </div>
              <div className="card-body text-start bg-white">
                <h5 className="card-title fw-bold">Energy Insights</h5>
                <p className="card-text">
                  Harnessing the power of analytics to optimize energy
                  production and consumption, ensuring efficiency across all
                  levels.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="card shadow-lg h-100 d-flex flex-row align-items-center">
              <div className="card-img-left">
                <img
                  src="./assets/elements/img/solar1.jpeg"
                  alt="Smart Monitoring" 
                  className="img-fluid"
                  style={{ width: "250px", height: "250px", objectFit: "cover" }}
                />
              </div>
              <div className="card-body text-start bg-white">
                <h5 className="card-title fw-bold">Smart Monitoring</h5>
                <p className="card-text">
                  Using IoT and AI-powered monitoring systems to provide
                  real-time insights, reducing costs and boosting reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section
      className="parallax-section text-center text-white d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('assets/elements/img/AdobeStock_13.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // makes the background "stay" while scrolling
        minHeight: "60vh",
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
