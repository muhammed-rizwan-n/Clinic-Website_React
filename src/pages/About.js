import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../css/About.module.css'; // Create this for custom styles
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function About() {
  return (
<div className={style["scroll-snap-container"]}>
      {/*Hero-section*/}
      <section className={style["snap-section"]}>
            {/* Hero Section */}
        <div className="overlay">
          <div className="container" data-aos="zoom-in">
            <h1 className="display-4">Meet BrightSmile Dental</h1>
            <p className="lead">Where modern dentistry meets genuine care.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}    
      <section className= {`${style["snap-section"]} py-5 bg-transparent`}>
        <div className="container">
          <h2 className="text-primary text-center mb-4">Our Story</h2>
          <p className="lead text-center mb-5">
            Since opening our doors in 2010, BrightSmile Dental Clinic has become a trusted name in Smileland.
            With cutting-edge technology and a passionate team, we’re dedicated to giving you a confident, healthy smile.
          </p>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className={`${style["snap-section"]} py-5 `}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1588776814820-3be3b01b7b83"
                alt="Clinic values"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Our Mission</h3>
              <p>
                Our mission is to empower every patient with a healthy smile. We believe in treating every patient like family,
                offering personalized care in a comfortable and transparent environment.
              </p>
              <ul className="list-unstyled mt-3">
                <li>🦷 Compassionate & ethical care</li>
                <li>🧪 Advanced diagnostic tools</li>
                <li>🌿 Clean, calming environment</li>
                <li>💬 Clear communication and pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className={`${style["snap-section"]} py-5 bg-transparent`}>
        <div className="container text-center">
          <h2 className="text-primary mb-4">Meet Our Team</h2>
          <div className="row g-4">
            {[
              { name: 'Dr. Lisa Nguyen', title: 'Lead Dentist', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { name: 'Dr. John Carter', title: 'Orthodontist', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
              { name: 'Emma Stone', title: 'Hygienist', image: 'https://randomuser.me/api/portraits/women/66.jpg' },
            ].map(({ name, title, image }) => (
              <div className="col-md-4" key={name}>
                <div className="team-card p-3 bg-white shadow rounded text-center">
                  <img src={image} alt={name} className="rounded-circle mb-3" width="100" height="100" />
                  <h5 className="text-primary">{name}</h5>
                  <p className="text-muted">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
