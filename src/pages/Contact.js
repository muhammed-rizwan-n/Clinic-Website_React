import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="scroll-snap-container bg-white text-dark py-5">
      <div className="container-flex p-0">
        <section className="snap-section fit-section h-auto">
          <h1 className="text-center mt-3 mb-5">Contact Us</h1>
        </section>

          <section className="snap-section fit-section h-auto bg-transparent">
            <div className="container py-5">
              <div className="row g-5">
                {/* Contact Info */}
                <div className="col-lg-6" data-aos="fade-right">
                  <h4 className="mb-3">📞 Call Us</h4>
                  <p className="fs-5 fw-bold text-primary">+1 (123) 456-7890</p>

                  <h4 className="mt-4 mb-3">📍 Visit Our Clinic</h4>
                  <p>
                    123 Smile Street
                    <br />
                    Dental City, Smileland, 456789
                  </p>

                  <h4 className="mt-4 mb-3">📧 Email</h4>
                  <p>contact@brightsmile.com</p>

                  <h4 className="mt-4 mb-3">🕒 Office Hours</h4>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Mon - Fri:</strong> 9:00 AM - 6:00 PM
                    </li>
                    <li>
                      <strong>Saturday:</strong> 9:00 AM - 4:00 PM
                    </li>
                    <li>
                      <strong>Sunday:</strong> Closed
                    </li>
                  </ul>

                  <div className="mt-4">
                    <h5>Follow Us</h5>
                    <div className="d-flex gap-3 fs-4">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none text-primary"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none text-primary"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none text-primary"
                      >
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="col-lg-6" >
                  <h4 className="mb-3">💬 Send a Message</h4>
                  <form className="bg-white p-4 rounded shadow-sm">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-5" data-aos="zoom-in">
                <h4 className="text-center mb-3">🗺️ Find Us Here</h4>
                <div
                  className="map-container rounded overflow-hidden shadow-sm"
                  style={{ height: "300px" }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-100 h-100"
                    style={{ border: "none" }}
                    loading="lazy"
                    title="Google Maps Location"
                  ></iframe>
                </div>
              </div>

              {/* Optional: Testimonials */}
              <div className="mt-5" data-aos="fade-up">
                <h4 className="text-center mb-4">What Our Patients Say</h4>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
                  <div className="bg-white p-3 rounded shadow-sm text-start">
                    <p className="mb-1 fst-italic">
                      "Friendly staff and great service!"
                    </p>
                    <small className="text-muted">- Sarah T.</small>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm text-start">
                    <p className="mb-1 fst-italic">
                      "The clinic was very clean and welcoming."
                    </p>
                    <small className="text-muted">- John D.</small>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  );
}
