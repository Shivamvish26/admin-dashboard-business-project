import React from "react";
import { Link } from "react-router-dom";

export default function ViewServices() {
  // Temporary dummy data
  const service = {
    id: "01",
    title: "Furniture Polish",
    slug: "furniture-polish",
    shortDescription: "Professional furniture polishing service",
    description:
      "We provide professional furniture polishing services using premium materials and professional techniques to give your furniture a beautiful and long-lasting finish.",
    image: "",
    startingPrice: 1500,
    duration: "2-3 Days",
    warranty: "1 Year",
    features: [
      "Premium Polish Material",
      "Professional Finishing",
      "Home Service Available",
    ],
    status: "active",
  };

  return (
    <div className="container">
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Service Details</h4>

          <Link
            to="/admin/services"
            className="common__btn text-decoration-none w-25"
          >
            Back
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-3 p-4 mt-3">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="border rounded-3 p-3 text-center">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid rounded-3"
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded-3"
                  style={{
                    height: "280px",
                  }}
                >
                  <span className="text-muted">No Image Available</span>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-8">
            <div className="mb-3">
              <h3 className="mb-1">{service.title}</h3>

              <span
                className={`badge ${
                  service.status === "active"
                    ? "text-bg-success"
                    : "text-bg-secondary"
                }`}
              >
                {service.status}
              </span>
            </div>

            <p className="text-muted">{service.shortDescription}</p>

            <hr />

            <div className="row">
              <div className="col-md-4 mb-3">
                <small className="text-muted">Starting Price</small>

                <h5>₹{service.startingPrice}</h5>
              </div>

              <div className="col-md-4 mb-3">
                <small className="text-muted">Duration</small>

                <h5>{service.duration}</h5>
              </div>

              <div className="col-md-4 mb-3">
                <small className="text-muted">Warranty</small>

                <h5>{service.warranty}</h5>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="mb-4">
          <h5>Description</h5>

          <p className="text-muted">{service.description}</p>
        </div>

        <div className="mb-4">
          <h5>Features</h5>

          <ul className="list-group">
            {service.features.map((feature, index) => (
              <li key={index} className="list-group-item">
                <i className="bi bi-check-circle-fill text-success me-2"></i>

                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h5>Slug</h5>

          <div className="bg-light rounded p-2">{service.slug}</div>
        </div>
      </div>
    </div>
  );
}
