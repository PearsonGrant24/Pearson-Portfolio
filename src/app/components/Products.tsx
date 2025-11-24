import React, {useEffect, useRef} from "react";
import { HomePageSlider } from './layout/widgets/sliders/HomePageSlider.tsx'

export default function Products() {

    const lineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // run once
            }
            });
        },
        { threshold: 0.4 } // trigger when 40% visible
        );

        if (lineRef.current) {
        observer.observe(lineRef.current);
        }

        return () => {
        if (lineRef.current) {
            observer.unobserve(lineRef.current);
        }
        };
    }, []);

  return (
    <>

    <section className="products-section py-5 bg-light">
  <div className="container">
    <h2 className="text-center fw-bold mb-5">Our Products</h2>
    <div className="row g-4">
      
      {/* Card 1 */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <img src="https://source.unsplash.com/400x250/?solar" className="card-img-top" alt="Solar Panel" />
          <div className="card-body text-center">
            <h5 className="card-title">Solar Panels</h5>
            <p className="card-text">High-efficiency solar solutions for residential and commercial use.</p>
            <a href="#" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <img src="https://source.unsplash.com/400x250/?electric" className="card-img-top" alt="Electrical Components" />
          <div className="card-body text-center">
            <h5 className="card-title">Electrical Components</h5>
            <p className="card-text">Reliable components designed to power your projects.</p>
            <a href="#" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <img src="https://source.unsplash.com/400x250/?wiring" className="card-img-top" alt="House Wiring" />
          <div className="card-body text-center">
            <h5 className="card-title">House Wiring</h5>
            <p className="card-text">Professional house wiring and rewiring solutions.</p>
            <a href="#" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <img src="https://source.unsplash.com/400x250/?energy" className="card-img-top" alt="Energy Storage" />
          <div className="card-body text-center">
            <h5 className="card-title">Energy Storage</h5>
            <p className="card-text">Advanced batteries for sustainable power storage.</p>
            <a href="#" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <img src="https://source.unsplash.com/400x250/?circuit" className="card-img-top" alt="Circuit Wiring" />
          <div className="card-body text-center">
            <h5 className="card-title">Circuit Wiring</h5>
            <p className="card-text">Safe and efficient circuit wiring services.</p>
            <a href="#" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <img src="https://source.unsplash.com/400x250/?maintenance" className="card-img-top" alt="System Fix" />
          <div className="card-body text-center">
            <h5 className="card-title">System Fix & Supply</h5>
            <p className="card-text">Complete supply and repair solutions for your systems.</p>
            <a href="#" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>

      {/* Card 7 */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <img src="https://source.unsplash.com/400x250/?earthing" className="card-img-top" alt="Earthing" />
          <div className="card-body text-center">
            <h5 className="card-title">Earthing & Faults</h5>
            <p className="card-text">Earthing and electrical fault fixing by experts.</p>
            <a href="#" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>

      {/* Card 8 */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <img src="https://source.unsplash.com/400x250/?innovation" className="card-img-top" alt="Electrical Specing" />
          <div className="card-body text-center">
            <h5 className="card-title">Electrical Specing</h5>
            <p className="card-text">Custom electrical specing tailored to your projects.</p>
            <a href="#" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>

      {/* Card 9 */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <img src="https://source.unsplash.com/400x250/?technology" className="card-img-top" alt="Technology" />
          <div className="card-body text-center">
            <h5 className="card-title">Technology Solutions</h5>
            <p className="card-text">Innovative technology-driven electrical solutions.</p>
            <a href="#" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    
    </>
  )
}
