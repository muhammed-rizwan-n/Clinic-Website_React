import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../css/Services.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
AOS.init();

export default function Services() {
  const serviceGroups = [
    {
      title: "General Dentistry",
      services: [
        {
          name: "Dental Check-ups",
          desc: "Routine exams to maintain oral health and detect issues early.",
        },
        {
          name: "Fillings",
          desc: "Repair cavities and restore tooth function with durable materials.",
        },
        {
          name: "Crowns & Bridges",
          desc: "Strengthen damaged teeth or replace missing ones with natural-looking restorations.",
        },
      ],
    },
    {
      title: "Cosmetic Dentistry",
      services: [
        {
          name: "Teet Whitening",
          desc: "Brighten your smile with safe and effective in-office whitening.",
        },
        {
          name: "Veneers",
          desc: "Improve the shape, size, and color of your teeth with custom porcelain shells.",
        },
      ],
    },
    {
      title: "Preventative Care",
      services: [
        {
          name: "Cleanings",
          desc: "Professional dental cleaning to remove plaque and prevent gum disease.",
        },
        {
          name: "Fluoride Treatments",
          desc: "Strengthen enamel and help protect teeth from decay.",
        },
        {
          name: "Sealants",
          desc: "A protective coating applied to molars to prevent cavities.",
        },
      ],
    },
  ];

  return (
    <div className="scroll-snap-container services-page bg-white text-dark py-5">
      <div className="container-flex p-0">
        <section className={`${style["snap-section"]} ${style["fit-section"]}`}>
          <h1 className="text-center mt-3 mb-5">Our Services</h1>
        </section>

        {serviceGroups.map((group, index) => (
          <section className={`${style["snap-section"]} ${style["fit-section"]}`}>
            <div key={group.title} className="container mb-5">
              <h3 className="align-item-right mt-2">{group.title}</h3>
              <div className="row mt-3 g-4">
                {group.services.map((service) => (
                  <div className="col-md-6 col-lg-4" key={service.name}>
                    <div className="card h-100 shadow-sm border-0 service-card">
                      <div className="card-body">
                        <h5 className="card-title text-dark">{service.name}</h5>
                        <p className="card-text text-muted">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className={`${style["snap-section"]} ${style["fit-section"]} m-0`} style={{position: "relative",left: "50%", transform: "translateX(-50%)"}}>
          <div className="text-center p-4 mb-0">
            <a
              href="/contact"
              className="btn btn-white btn-outline-light btn-lg"
            >
              Book an Appointment
            </a>
          </div>
          <Footer className="mb-0" />
        </section>
      </div>
    </div>
  );
}
