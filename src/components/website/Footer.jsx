import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white ">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold mb-3">
              Furniture<span className="text-warning">Polish</span>
            </h4>

            <p className="text-light opacity-75">
              Professional furniture polishing and painting services with
              premium materials and a beautiful finish.
            </p>

            <Link
              to="/booking"
              className="btn bg-white text-dark rounded-pill mt-2"
            >
              Book a Service
            </Link>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-semibold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white text-decoration-none opacity-75"
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-white text-decoration-none opacity-75"
                >
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white text-decoration-none opacity-75"
                >
                  Services
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/gallery"
                  className="text-white text-decoration-none opacity-75"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-semibold mb-3">Explore</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-white text-decoration-none opacity-75"
                >
                  Contact
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/booking"
                  className="text-white text-decoration-none opacity-75"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="fw-semibold mb-3">Contact Us</h5>

            <p className="text-light opacity-75 mb-2">
              <i className="bi bi-geo-alt me-2"></i>
              Pune, Maharashtra
            </p>

            <p className="text-light opacity-75 mb-2">
              <i className="bi bi-telephone me-2"></i>
              +91 1234567890
            </p>

            <p className="text-light opacity-75 mb-3">
              <i className="bi bi-envelope me-2"></i>
              abc@furniturepolish.com
            </p>

            {/* Social Icons */}
            {/* <div className="d-flex gap-2">
              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="border-top border-secondary">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <small className="text-light opacity-75">
                © {new Date().getFullYear()} Furniture Polish. All Rights
                Reserved.
              </small>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <small className="text-light opacity-75">
                Professional Furniture Care Services
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
