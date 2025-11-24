import React, {useEffect, useRef} from "react";
import { HomePageSlider } from './layout/widgets/sliders/HomePageSlider.tsx'

export default function GetinTouch() {

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
    {/* <HomePageSlider/> */}

    <section className="about-section py-5 bg-light">
  <div className="container">
    <div className="row align-items-start gy-5">
      
      {/* Left - Contact Form */}
      <div className="col-md-4">
        <div className="card shadow-lg border-0 rounded-3">
          <div className="card-body p-4">
            <h2 className="h4 fw-bold mb-4">Contact Us</h2>
            <form>
              {/* Name */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              {/* Email */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              {/* Contact Number */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contact Number"
                />
              </div>
              {/* Job Title */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Title"
                />
              </div>
              {/* Location */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              {/* Message */}
              <div className="mb-3">
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              {/* Send Button */}
              <button
                type="submit"
                className="btn w-100 text-white"
                style={{ backgroundColor: "#0aeec8", borderRadius: "20px" }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Middle - Images */}
      <div className="col-md-4 text-center position-relative">
        
        <div
          className="position-absolute top-0 start-0"
          style={{
            width: "3px",
            height: "100%",
            backgroundColor: "#0aeec8",
          }}
        ></div>
      </div>

      {/* Right - Contact Info */}
      <div className="col-md-4">
        <h2 className="h3 fw-bold mb-3">Get in Touch</h2>
        <p className="text-muted">
          Have questions or want to know more about our solutions?
          We’d love to hear from you. Reach out to us through the following channels:
        </p>
        <ul className="list-unstyled mt-3">
          <li className="mb-2">
            📞 <strong>+263 772433227</strong>
          </li>
          <li className="mb-2">
            📧{" "}
            <a href="mailto:info@willez.co.zw" className="text-decoration-none" style={{ color: "#0aeec8" }}>
              info@willez.co.zw
            </a>
          </li>
          <li>
            🌐{" "}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-decoration-none" style={{ color: "#0aeec8" }}>
              Connect on Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
