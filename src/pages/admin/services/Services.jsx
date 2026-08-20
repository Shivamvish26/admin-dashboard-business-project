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
      title: "Furniture Painting",
      slug: "furniture-painting",
      shortDescription: "Professional furniture painting service",
      description:
        "We provide professional furniture painting services with premium materials and finishing.",
      image: "",
      startingPrice: 2000,
      duration: "3-4 Days",
      warranty: "1 Year",
      features: [
        "Premium Paint Material",
        "Professional Finishing",
        "Home Service Available",
      ],
      status: "active",
    },
  ];

  return (
    <div className="container">
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Services</h4>

          <Link
            to="/admin/services/add-services"
            className="common__btn text-decoration-none w-25"
          >
            Add Service
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-3 p-3 mt-3">
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Short Description</th>
                <th>Image</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Warranty</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {services.length > 0 ? (
                services.map((service, index) => (
                  <tr key={service.id}>
                    <td>{index + 1}</td>

                    <td>
                      <strong>{service.title}</strong>
                    </td>

                    <td>
                      <span title={service.shortDescription}>
                        {service.shortDescription.length > 40
                          ? `${service.shortDescription.substring(0, 40)}...`
                          : service.shortDescription}
                      </span>
                    </td>

                    <td>
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          width="60"
                          height="60"
                          style={{
                            objectFit: "cover",
                            borderRadius: "6px",
                          }}
                        />
                      ) : (
                        <span className="text-muted">No Image</span>
                      )}
                    </td>

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
                          to={`/admin/services/view-services/${service.id}`}
                          className="btn btn-sm btn-outline-primary"
                          title="View"
                        >
                          <i className="bi bi-eye"></i>
                        </Link>

                        <Link
                          to={`/admin/services/edit-services/${service.id}`}
                          className="btn btn-sm btn-outline-warning"
                          title="Edit"
                        >
                          <i className="bi bi-pencil"></i>
                        </Link>

                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          title="Delete"
                          onClick={() =>
                            console.log("Delete Service:", service.id)
                          }
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center py-4">
                    No Services Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
