import React, { useEffect, useRef } from "react";
import AOS from "aos";
import { Helmet } from 'react-helmet';

import Footer from "../components/Footer";
import "aos/dist/aos.css";
import style from "../css/Home.module.css";
import zayra_dental from "../images/zayra-dental.png";

const HomePage = () => {
  const snowContainer = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const snowflakes = Array.from({ length: 40 }, () => {
      const flake = document.createElement("div");
      flake.className = style["snowflake"];
      flake.style.left = Math.random() * 100 + "vw";
      flake.style.animationDuration = 5 + Math.random() * 20 + "s";
      snowContainer.current.appendChild(flake);
      return flake;
    });
  }, []);

  return (
    <div className={style["scroll-snap-container"]}>
      <Helmet>
        <title>Leeds Dental Care</title>
      </Helmet>
      {/*Hero-section*/}
      <section className={style["snap-section"]}>
        <div className={style["snow-container"]} ref={snowContainer}></div>
        <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
          <img
            src={zayra_dental}
            alt="BrightSmile Logo"
            className="mb-4 img-fluid"
            data-aos="zoom-in"
          />
          <h1 className="display-4 fw-bold" data-aos="fade-down">
            BrightSmile Dental Clinic
          </h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="200">
            "Crafting Smiles, One Tooth at a Time."
          </p>
          <button
            className="btn btn-outline-light mt-4"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            Book an Appointment
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={style["snap-section"]}>
        <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://images.unsplash.com/photo-1588776814820-3be3b01b7b83"
                alt="Clinic Interior"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-3">Why Choose BrightSmile?</h2>
              <p className="lead">
                At BrightSmile Dental Clinic, we believe in more than just
                treating teeth — we care for people. Our modern clinic, gentle
                approach, and expert team ensure that your comfort and care
                always come first.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-2">
                  ✅ Experienced & compassionate dentists
                </li>
                <li className="mb-2">✅ Latest dental technology</li>
                <li className="mb-2">✅ Personalized care for every smile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className={style["snap-section"]}>
        <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
          <h2 className="mb-4">Our Key Services</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary">Teeth Whitening</h5>
                  <p className="card-text">
                    Brighten your smile with our safe and effective whitening
                    treatments.
                  </p>
                  <a href="/services#whitening" className="btn btn-link p-0">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary">Dental Implants</h5>
                  <p className="card-text">
                    Permanent solutions for missing teeth with natural-looking
                    implants.
                  </p>
                  <a href="/services#implants" className="btn btn-link p-0">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    Braces & Invisalign
                  </h5>
                  <p className="card-text">
                    Comfortable, discreet options to straighten teeth for all
                    ages.
                  </p>
                  <a href="/services#orthodontics" className="btn btn-link p-0">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section  "snap-section fit-section m-0 position-relative"*/}
      <section className={`${style["snap-section"]} w-100`}>
        <div className="container-fluid d-flex flex-column justify-content-center h-100">
          <div className="row align-items-center g-4 w-100">
            <div className="col-md-6 text-md-start text-center px-5">
              <h3 className="mb-3">Visit Us</h3>
              <p className="mb-2">
                📍 123 Smile Street, Dental City, Smileland 456789
              </p>
              <p>📞 (123) 456-7890</p>
              <p>✉️ contact@brightsmile.com</p>
              <h5 className="mt-4">Opening Hours</h5>
              <ul className="list-unstyled">
                <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
                <li>Saturday: 9:00 AM – 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="map-wrapper shadow rounded overflow-hidden">
                <iframe
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.452697041917!2d78.39076592375736!3d17.43803374982052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9144cdba8c47%3A0x937fe346f411a645!2sTutorials%20Point%20(India)%20Ltd.!5e0!3m2!1sen!2sin!4v1673629212535!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
