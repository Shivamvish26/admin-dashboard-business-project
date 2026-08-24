import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditServices() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [warranty, setWarranty] = useState("");
  const [features, setFeatures] = useState([""]);
  const [status, setStatus] = useState("active");
  const [service, setService] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const removeFeature = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };

  const updateservice = async (e) => {
    e.preventDefault();
    try {
      const serviceData = {
        title,
        shortDescription,
        description,
        startingPrice,
        duration,
        warranty,
        features,
        status,
      };
      const res = await fetch(`http://localhost:3000/api/service/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
      });
      const data = await res.json();
      console.log("Updated service:", data);

      if (!res.ok) {
        throw new Error(data.message || "Failed to update service");
      }
      toast.success("Service updated successfully!");
      setTimeout(() => {
        navigate("/admin/services");
      }, 1000);
    } catch (error) {
      console.log("Error while updating service:", error);
      toast.error(error.message || "Failed to update service");
    }
  };

  // data fetched
  useEffect(() => {
    const fetchService = async () => {
      try {
        setloading(true);

        const res = await fetch(`http://localhost:3000/api/service/${id}`);

        const data = await res.json();

        console.log("Services data...", data);

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch service");
        }

        const serviceData = data.service;

        setService(serviceData);

        setTitle(serviceData.title || "");
        setShortDescription(serviceData.shortDescription || "");
        setDescription(serviceData.description || "");
        setStartingPrice(serviceData.startingPrice || "");
        setDuration(serviceData.duration || "");
        setWarranty(serviceData.warranty || "");
        setFeatures(serviceData.features?.length ? serviceData.features : [""]);

        setStatus(serviceData.status || "active");
      } catch (error) {
        console.log("Error while fetching the data", error);
        setError(error.message);
      } finally {
        setloading(false);
      }
    };

    fetchService();
  }, [id]);

  return (
    <div className="">
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Edit Service</h4>
          <Link
            to="/admin/services"
            className="common__btn text-decoration-none w-25"
          >
            Back
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-3 p-4 mt-3">
        <form onSubmit={updateservice}>
          <div className="mb-3">
            <label className="form-label">Service Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter service title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Short Description</label>
            <textarea
              className="form-control"
              rows="2"
              placeholder="Enter short description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
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

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Starting Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter starting price"
                value={startingPrice}
                onChange={(e) => setStartingPrice(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Duration</label>
              <input
                type="text"
                className="form-control"
                placeholder="Example: 2-3 Days"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Warranty</label>
            <input
              type="text"
              className="form-control"
              placeholder="Example: 6 Months"
              value={warranty}
              onChange={(e) => setWarranty(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Features</label>
            {features.map((feature, index) => (
              <div className="d-flex gap-2 mb-2" key={index}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={`Feature ${index + 1}`}
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                />
                {features.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeFeature(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              className="btn btn-outline-secondary mt-2"
              onClick={addFeature}
            >
              + Add Feature
            </button>
          </div>

          <div className="mb-3">
            <label className="form-label">Service Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/jpeg,image/jpg,image/png,image/webp"
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
            Edit Service
          </button>
        </form>
      </div>
    </div>
  );
}
