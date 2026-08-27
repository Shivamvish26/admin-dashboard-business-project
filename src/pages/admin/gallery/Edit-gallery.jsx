import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditGallery() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [service, setService] = useState("");
  const [status, setStatus] = useState("active");

  const [services, setServices] = useState([]);

  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);

  const [gallerydata, setGalleryData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        toast.error("Failed to fetch services");
      }
    };

    fetchServices();
  }, []);

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
        setTitle(data.gallery.title || "");
        setCategory(data.gallery.category || "");
        setDescription(data.gallery.description || "");
        setService(data.gallery.service?._id || data.gallery.service || "");
        setStatus(data.gallery.status || "active");
      } catch (error) {
        console.log("Error while fetching gallery:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [id]);

  const handleEditgallery = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("service", service);
      formData.append("status", status);
      if (beforeImage) {
        formData.append("beforeImage", beforeImage);
      }
      if (afterImage) {
        formData.append("afterImage", afterImage);
      }
      console.log("Updating Gallery...");

      const response = await fetch(`http://localhost:3000/api/gallery/${id}`, {
        method: "PUT",
        body: formData,
      });
      const data = await response.json();
      console.log("Update Gallery Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to update gallery");
      }
      toast.success("Gallery Updated Successfully");
      setTimeout(() => {
        navigate("/admin/gallery");
      }, 1000);
    } catch (error) {
      console.log("Error while updating gallery:", error);

      toast.error(error.message || "Failed to update gallery");
    }
  };

  if (loading) {
    return (
      <div className="container mt-3">
        <div className="bg-white shadow-sm rounded-3 p-4 text-center">
          Loading Gallery...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-3">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!gallerydata) {
    return (
      <div className="container mt-3">
        <div className="alert alert-warning">Gallery not found</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Edit Gallery</h4>

          <Link
            to="/admin/gallery"
            className="common__btn text-decoration-none w-25 text-center"
          >
            Back
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-3 p-4 mt-3">
        <form onSubmit={handleEditgallery}>
          <div className="mb-3">
            <label className="form-label">Gallery Title</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter gallery title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>

            <textarea
              className="form-control"
              rows="5"
              placeholder="Enter gallery description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Service</label>

            <select
              className="form-select"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select Service</option>

              {services.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          {gallerydata.beforeImage && (
            <div className="mb-3">
              <label className="form-label">Current Before Image</label>

              <div>
                <img
                  src={`http://localhost:3000${gallerydata.beforeImage}`}
                  alt="Current Before"
                  width="150"
                  height="100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Change Before Image</label>

            <input
              type="file"
              className="form-control"
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={(e) => setBeforeImage(e.target.files[0])}
            />
          </div>

          {gallerydata.afterImage && (
            <div className="mb-3">
              <label className="form-label">Current After Image</label>

              <div>
                <img
                  src={`http://localhost:3000${gallerydata.afterImage}`}
                  alt="Current After"
                  width="150"
                  height="100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Change After Image</label>

            <input
              type="file"
              className="form-control"
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={(e) => setAfterImage(e.target.files[0])}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Status</label>

            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">Active</option>

              <option value="inactive">Inactive</option>
            </select>
          </div>

          <button type="submit" className="common__btn w-25">
            Update Gallery
          </button>
        </form>
      </div>
    </div>
  );
}
