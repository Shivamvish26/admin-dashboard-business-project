import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewGallery() {
  const { id } = useParams();

  const [gallerydata, setGalleryData] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/gallery/${id}`);
        const data = await response.json();
        console.log("Single Gallery:", data);
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch the gallery");
        }
        setGalleryData(data.gallery);
      } catch (error) {
        console.log("Error while fetching gallery:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [id]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/service/get-services",
        );
        const data = await response.json();
        console.log("Services:", data);

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch services");
        }
        setServices(data.services || []);
      } catch (error) {
        console.log("Error while fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="bg-white shadow-sm rounded-3 p-4 text-center">
          <h5 className="mb-0">Loading Gallery...</h5>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!gallerydata) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">Gallery not found</div>
      </div>
    );
  }

  const selectedService = services.find(
    (item) => item._id === gallerydata.service,
  );

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
            value={gallerydata.title || ""}
            readOnly
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>

          <input
            type="text"
            className="form-control"
            value={gallerydata.category || ""}
            readOnly
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>

          <textarea
            className="form-control"
            rows="5"
            value={gallerydata.description || ""}
            readOnly
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Service</label>

          <select
            className="form-select"
            value={gallerydata.service || ""}
            disabled
          >
            <option value="">Select Service</option>

            {services.map((item) => (
              <option key={item._id} value={item._id}>
                {item.title}
              </option>
            ))}
          </select>

          {selectedService && (
            <small className="text-muted">
              Selected Service: {selectedService.title}
            </small>
          )}
        </div>

        <div className="d-flex  align-items-center gap-5">
          <div className="mb-4">
            <label className="form-label">Before Image</label>

            {gallerydata.beforeImage ? (
              <div>
                <img
                  src={`http://localhost:3000${gallerydata.beforeImage}`}
                  alt="Before"
                  className="img-fluid rounded"
                  style={{
                    maxWidth: "400px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ) : (
              <p className="text-muted mb-0">No before image available</p>
            )}
          </div>

          <div className="mb-4">
            <label className="form-label">After Image</label>

            {gallerydata.afterImage ? (
              <div>
                <img
                  src={`http://localhost:3000${gallerydata.afterImage}`}
                  alt="After"
                  className="img-fluid rounded"
                  style={{
                    maxWidth: "400px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ) : (
              <p className="text-muted mb-0">No after image available</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Status</label>

          <select
            className="form-select"
            value={gallerydata.status || ""}
            disabled
          >
            <option value="active">Active</option>

            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
}
