import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pricingData from '../data/pricing.json';
import "../css/Pricing.css"
import Footer from '../components/Footer';

export default function Pricing() {
  return (
    <div className="scroll-snap-container services-page bg-white text-dark py-5"
    style={{"scroll-snap-type":"none"}}>
      <div className="container">
        <section className="fit-section">
          <h1 className="text-center mt-3 mb-5">Our Pricing</h1>
        </section>

        {Object.entries(pricingData).map(([category, services]) => (
          <section key={category} className="fit-content mb-5">
            <h3 className="mb-3 text-dark">{category}</h3>
            <div className="table-responsive">
              <table className="table table-bordered table-hover bg-white shadow-sm">
                <thead className="table-primary">
                  <tr>
                    <th>Service</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, idx) => (
                    <tr key={idx}>
                      <td>{service.name}</td>
                      <td>{service.description}</td>
                      <td>{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <section className="fit-content m-0">
          <div className="text-center p-4">
            <p className="text-dark mt-4">
              Note: Prices may vary depending on individual cases and treatment complexity.
            </p>
          </div>
        </section>

        <section className="fit-content m-0">
          <div className="text-center p-4">
            <a href="/contact" className="btn btn-outline-primary btn-lg">
              Book an Appointment
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

