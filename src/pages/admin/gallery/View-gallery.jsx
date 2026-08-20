import React from "react";
import { Link } from "react-router-dom";

export default function ViewGallery() {
  const gallery = {
    title: "Modern Furniture Polish",
    category: "Furniture Polish",
    description:
      "Professional furniture polishing work completed with premium materials.",
    service: "Furniture Polish",
    beforeImage: "",
    afterImage: "",
    status: "active",
  };

  return (
    <div className="container">
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">View Gallery</h4>

          <Link
            to="/admin/gallery"
            className="common__btn text-decoration-none w-25 text-center"
          >
            Back
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-3 p-4 mt-3">
        <div className="mb-3">
          <label className="form-label">Gallery Title</label>

          <input
            type="text"
            className="form-control"
            value={gallery.title}
            readOnly
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>

          <input
            type="text"
            className="form-control"
            value={gallery.category}
            readOnly
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>

          <textarea
            className="form-control"
            rows="5"
            value={gallery.description}
            readOnly
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Service</label>

          <select className="form-select" value={gallery.service} disabled>
            <option value="">Select Service</option>
            <option value="Furniture Polish">Furniture Polish</option>
            <option value="Furniture Painting">Furniture Painting</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Before Image</label>

          {gallery.beforeImage ? (
            <div>
              <img
                src={gallery.beforeImage}
                alt="Before"
                className="img-fluid rounded"
                style={{ maxWidth: "300px" }}
              />
            </div>
          ) : (
            <p className="text-muted mb-0">No before image available</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">After Image</label>

          {gallery.afterImage ? (
            <div>
              <img
                src={gallery.afterImage}
                alt="After"
                className="img-fluid rounded"
                style={{ maxWidth: "300px" }}
              />
            </div>
          ) : (
            <p className="text-muted mb-0">No after image available</p>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label">Status</label>

          <select className="form-select" value={gallery.status} disabled>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
}
