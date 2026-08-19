import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Furniture Polish",
      slug: "furniture-polish",
      shortDescription: "Professional furniture polishing service",
      description:
        "We provide professional furniture polishing services with premium materials and finishing.",
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
    },
    {
      id: "02",
      title: "Furniture Polish",
      slug: "furniture-polish",
      shortDescription: "Professional furniture polishing service",
      description:
        "We provide professional furniture polishing services with premium materials and finishing.",
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
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="shadow-sm p-3 rounded-3">
          <div className="d-flex align-items-center justify-content-between">
            <h4>Services</h4>
            <Link to="/admin/services/add-services" className="common__btn w-25">
              Add Services
            </Link>
          </div>
          <div className="mt-3">
            <table
              className="table table-bordered"
              style={{ width: "100%", borderCollapse: "collapse" }}
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Short Description</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Duration</th>
                  <th>Warranty</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td>{service.title}</td>
                    <td>{service.shortDescription}</td>
                    <td>{service.description}</td>
                    <td>{service.image || "No Image"}</td>
                    <td>₹{service.startingPrice}</td>
                    <td>{service.duration}</td>
                    <td>{service.warranty}</td>
                    <td>
                      <span
                        className={`badge ${
                          service.status === "active"
                            ? "text-bg-success"
                            : "text-bg-secondary"
                        }`}
                      >
                        {service.status}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <Link
                          //   to={`/admin/services/view/${service.id}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          <i className="bi bi-eye"></i>
                        </Link>
                        <Link
                          //   to={`/admin/services/edit/${service.id}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          <i className="bi bi-pencil"></i>
                        </Link>

                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          //   onClick={() => handleDelete(service.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
