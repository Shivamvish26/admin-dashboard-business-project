import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddGallery() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [service, setService] = useState("");
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [status, setStatus] = useState("active");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const galleryData = {
      title,
      category,
      description,
      service,
      beforeImage,
      afterImage,
      status,
    };
    toast.success("Gallary Details Added");
    setTimeout(() => {
      console.log(galleryData);
      navigate("/admin/gallery");
    }, 1000);
  };

  return (
    <div className="container">
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Add Gallery</h4>
          <Link
            to="/admin/gallery"
            className="common__btn text-decoration-none w-25"
          >
            Back
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-3 p-4 mt-3">
        <form onSubmit={handleSubmit}>
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
              placeholder="Enter Category"
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
              placeholder="Enter service description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <label className="form-label">Service</label>

          <select
            className="form-select"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Select Service</option>

            <option value="service_id">Furniture Polish</option>

            <option value="service_ids">Furniture Painting</option>
          </select>

          <div className="mb-3">
            <label className="form-label">Before Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={(e) => setBeforeImage(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">After Image</label>
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
            Add Gallery
          </button>
        </form>
      </div>
    </div>
  );
}
