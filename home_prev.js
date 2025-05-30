<div className="home-page position-relative overflow-hidden text-white scroll-container" data-aos="zoom-in">
      <div className="snow-container" ref={snowContainer}></div>
      <section         className="fullscreen-section bg-transparent text-white py-5"
        data-aos="zoom-in">
      <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <img
          src={zayra_dental}
          //src="https://img.icons8.com/ios-filled/100/ffffff/tooth.png"
          alt="BrightSmile Logo"
          className="mb-4"
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
      <section
        className="fullscreen-section bg-transparent text-dark py-5"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://images.unsplash.com/photo-1588776814820-3be3b01b7b83"
                alt="Clinic Interior"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-white mb-3">Why Choose BrightSmile?</h2>
              <p className="text-white lead">
                At BrightSmile Dental Clinic, we believe in more than just
                treating teeth — we care for people. Our modern clinic, gentle
                approach, and expert team ensure that your comfort and care
                always come first.
              </p>
              <ul className="list-unstyled mt-4 text-white">
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
      <section className="fullscreen-section bg-light text-dark py-5" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="text-primary mb-4">Our Key Services</h2>
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
      {/* Call to Action Section */}
      <section
        className="fullscreen-section bg-primary text-white text-center py-5"
        data-aos="zoom-in"
      >
        <div className="container">
          <h2 className="display-5 mb-3">Ready to Brighten Your Smile?</h2>
          <p className="lead mb-4">
            Call us now at <strong>(123) 456-7890</strong> or schedule your
            appointment online.
          </p>
          <a href="/contact" className="btn btn-light btn-lg shadow-sm px-4">
            Schedule an Appointment
          </a>
        </div>
      </section>
      {/* Visual Highlight Section */}
      <section
        className="fullscreen-section py-5 bg-white"
        data-aos="fade-up"
      >
        <div className="container text-center">
          <h2 className="text-primary mb-4">Your Comfort Is Our Priority</h2>
          <p className="lead mb-4">
            Step into a warm, welcoming space where our experienced team makes
            your dental visit stress-free and relaxing.
          </p>
          <div className="image-wrapper rounded overflow-hidden shadow">
            <img
              src="https://images.unsplash.com/photo-1588776814546-bacb07deec0b"
              alt="Friendly Dental Team or Clinic Interior"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </section>
      {/* Location & Hours Section */}
      <section
        className="location-hours-section py-5 bg-light text-dark"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Visit Us</h3>
              <p className="mb-2">
                📍 123 Smile Street, Dental City, Smileland 456789
              </p>
              <p>📞 (123) 456-7890</p>
              <p>✉️ contact@brightsmile.com</p>
              <h5 className="mt-4 text-primary">Opening Hours</h5>
              <ul className="list-unstyled">
                <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
                <li>Saturday: 9:00 AM – 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="map-wrapper shadow rounded overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=New York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>