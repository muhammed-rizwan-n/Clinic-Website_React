import { Link } from "react-router-dom";
import zayra_dental from "../images/zayra-dental.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // includes Popper
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        
        {/* Logo Link */}
        <Link to="/" className="navbar-brand p-0">
          <img
            src={zayra_dental}
            alt="Clinic Logo"
            className="navbar-logo"
            style={{width: "200px", position:"static", left:"0px"}}
          />
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {["About Us", "Services", "Pricing", "Contact"].map((page) => (
              <li className="nav-item" key={page}>
                <Link
                  className="nav-link"
                  to={
                    page === "About Us" ? "/about-us" : `/${page.toLowerCase()}`
                  }
                >
                  {page}
                </Link>
              </li>
            ))}

            {/* Gradient Appointment Button */}
            <li
              className="nav-item"
              style={{
                background: "linear-gradient(135deg, #6507fc, #f28dff)",
                borderRadius: "20px",
              }}
            >
              <Link
                className="nav-link btn  px-3 py-2 text-white"
                to="/appointment"
              >
                Book an Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
